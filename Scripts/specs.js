"use strict";
	
var vehicleSearch = window.location.search;
var vehicleParams = parseQueryString(vehicleSearch.toLowerCase());
var maintenanceServices = [];
var dupService = {};

getVehicleId(vehicleParams);

function replaceAll(find, replace, str) {
	return str.split(find).join(replace);
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
}

function parseQueryString() {
	var str = window.location.search;
	var objURL = {};
	str.replace(
			new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
			function( $0, $1, $2, $3 ){
					objURL[ $1 ] = $3;
			}
	);
	return objURL;
};

//if make model year to api gives an invalid vehicle, then hide table and display "Vehicle not in stock"
//For Chart,
//item (with tooltip) - action - Frequency - mileage...
function getVehicleId(vehicle) {
	var make = replaceAll('+', ' ', vehicle.make);
	var model = replaceAll('+', ' ', vehicle.model);
	var year = replaceAll('+', ' ', vehicle.year);
	document.getElementById('currentVehicle').innerHTML = year + ' ' + make + ' ' + model;

	$.ajax({
		url: 'https://api.edmunds.com/api/vehicle/v2/' + make + '/' + model + '/years?fmt=json&api_key=2tbstf54r42kccaf42qk665n',
		type: 'GET',
		data: {},
		dataType: 'json',
		success: function(json) {
			var vehicleId = '';
			json.years.forEach(function(vehicle) {
				if (vehicle.year == year) {
					vehicleId = vehicle.id;
				}
			});
			if (vehicleId != '') {
				getMaintenanceSchedule(vehicleId);
			} else {
				console.log('ERROR--> Vehicle year not found.')
			}
		},
		error: function(err) {
			$('#maintenanceScheduleMissing').removeClass('hidden');
			console.log('ERROR--> Vehicle not found.');
		}
	});
}

function getMaintenanceSchedule(vehicleId) {
	$.ajax({
		url: 'https://api.edmunds.com/v1/api/maintenance/actionrepository/findbymodelyearid?modelyearid=' + vehicleId + '&fmt=json&api_key=2tbstf54r42kccaf42qk665n',
		type: 'GET',
		data: {},
		dataType: 'json',
		success: function(json) {
			if (json.actionHolder.length > 0) {
				maintenanceServices = json.actionHolder;
				createMaintenanceTable();
			} else {
				$('#maintenanceScheduleMissing').removeClass('hidden');
			}
		},
		error: function(err) {
			$('#maintenanceScheduleMissing').removeClass('hidden');
			console.log('ERROR--> Maintenance schedule not found.')
		}
	});
}

/* Table Algorithm:
- Create serviceArr of unique services based on item and action and intervalMileage
- sort serviceArr based on ascending intervalMileage 
- use loop to cycle through sorted serviceArr
- create new row with item and action
- within loop, use another loop to cycle through range by intervals of 7500
- within 2nd loop, compare current service's rounded intervalMileage to the current mileage of loop using
	 (current mileage of loop) mod (service rounded intervalMileage).
  if the mod is equal to 0 then add a check to that position of table otherwise, leave that spot blank.
	add the filled row to end of table

notes:
	- round(intervalMileage) has the possibility of being zero. if this is the case, give it an interval mileage of 
		7500 * round(intervalMonths/12). If still zero then give intervalMileage of 7500.
*/
function createMaintenanceTable() {
	var table = document.getElementById('maintenanceTable');
	table.innerHTML = '';
	dupService = {};
	addMaintenanceHeaders(table);
	var sortedServices = sortByKey(maintenanceServices, 'intervalMileage');
	// table.insertRow(2).innerHTML = '<td colspan="2" class="text-center">Service</td><td class="text-center"><span class="glyphicon glyphicon-ok" style="font-size:1.5em"></span></td>'
	// cell = table.insertRow(2).insertCell(2);
	// cell.className = 'text-center';
	// cell.innerHTML = '<span class="glyphicon glyphicon-ok" style="font-size:1.5em"></span>';
	addMaintenanceRows(table, sortedServices);

	$('#maintenanceScheduleContainer').removeClass('hidden');
}

function addMaintenanceHeaders(table) {
	var header = table.createTHead();
	var row = header.insertRow(0).innerHTML = '<th colspan="2" class="text-center">Service</th>' + 
																						'<th colspan="10" class="text-center">Mileage (Miles)</th>';
	row = header.insertRow(1);
	row.className = 'text-center';
	row.insertCell(0).innerHTML = '<b>Item</b>';
	row.insertCell(1).innerHTML = '<b>Action</b>';
	var mileage = document.getElementById('selectScheduleRange').value - 67500;
	var cell;
	for (var i = 2; i < 12; i++) {
		cell = row.insertCell(i);
		if (i % 2 == 0) {
			cell.style.backgroundColor = '#f2f2f2';
		}
		cell.innerHTML = '<b>' + mileage + '</b>';
		mileage += 7500;
	}
}

function sortByKey(array, key) {
	return array.sort(function(a, b) {
		var x = a[key]; var y = b[key];
		return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	});
}

function addMaintenanceRows(table, services) {
	var mileage = document.getElementById('selectScheduleRange').value - 67500;
	//create object with itemaction as key
	//if value is within range
	services.forEach(function(service) {
		var row = table.insertRow(-1);
		var cell = row.insertCell(0);
		cell.className = 'text-center';
		cell.innerHTML = service.item;
		cell = row.insertCell(1);
		cell.className = 'text-center';
		cell.innerHTML = service.action;
		addMileageCells(table, row, service, mileage);
	});
	concatRows(table);
	//remove all rows with cell(0).innerHTML == ''
	removeEmptyRows(table);
}

function addMileageCells(table, row, service, mileage) {
	var approxServiceMileage = 7500 * Math.round(service.intervalMileage / 7500);
	if (approxServiceMileage == 0) {
		approxServiceMileage = 7500;
	}
	var inRange = false;
	var cell;
	for (var i = 2; i < 12; i++) {
		cell = row.insertCell(i);
		cell.className = 'text-center';
		if (i % 2 == 0) {
			cell.style.backgroundColor = '#f2f2f2';
		}
		if (mileage % approxServiceMileage == 0) {
			cell.innerHTML = '<span class="glyphicon glyphicon-ok" style="font-size:1.5em"></span>';
			inRange = true;
		}
		mileage += 7500;
	}
	if (!inRange) {
		table.deleteRow(-1);
		return;
	}
	for (var i = 2; i < table.rows.length - 1; i++) {
		if (row.innerHTML == table.rows[i].innerHTML) {
			table.rows[i].cells[0].innerHTML = '';
		}
		if (row.cells[0].innerHTML == table.rows[i].cells[0].innerHTML &&
		 		row.cells[1].innerHTML == table.rows[i].cells[1].innerHTML) {
			//dupService is an object in which each key holds an array of row indices
			table.rows[i].cells[0].innerHTML = '';
			var key = service.item + service.action;
			key = key.replace(/[^a-zA-Z]+/g, '');
			if (key in dupService) {
				if (!dupService[key].includes(table.rows.length)) {
					dupService[key].push(table.rows.length);
				}
			} else {
				dupService[key] = [i, table.rows.length - 1];
			}
		}
	}
}

function concatRows(table) {
	for (var key in dupService) {
		var last = dupService[key][dupService[key].length - 1];
		var c = 12;
		var cFound = false;
		while (!cFound && c > 2) {
			c--;
			if (table.rows[last].cells[c].innerHTML == '<span class="glyphicon glyphicon-ok" style="font-size:1.5em"></span>') {
				cFound = true;
			}
		}
		for (var r = dupService[key].length - 2; r >= 0; r--) {
			var row = table.rows[dupService[key][r]];
			var cc = c;
			var shouldRemove = false;
			while (cc < 12 && ~shouldRemove) {
				if (row.cells[cc].innerHTML == '<span class="glyphicon glyphicon-ok" style="font-size:1.5em"></span>') {
					row.cells[0] = '';
					shouldRemove = true;
				}
				cc++;
			}
			if (~shouldRemove) {
				//table.rows[last].cells[2:c-1] equals row.cells[2:c-1]
				for (var k = 2; k < c; k++) {
					table.rows[last].cells[k].innerHTML = row.cells[k].innerHTML;
				}
				//move c to next checkmark
				var cFound = false;
				while (!cFound && c > 2) {
					c--;
					if (table.rows[last].cells[c].innerHTML == '<span class="glyphicon glyphicon-ok" style="font-size:1.5em"></span>') {
						cFound = true;
					}
				}
			}
		}
	}
}

function removeEmptyRows(table) {
	for (var r = table.rows.length - 1; r >= 2; r--) {
		if (table.rows[r].cells[0].innerHTML == '') {
			table.deleteRow(r);
		}
	}
}