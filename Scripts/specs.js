"use strict";
	
var vehicleSearch = window.location.search;
var vehicleParams = parseQueryString(vehicleSearch.toLowerCase());
var maintenanceServices = [];

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
			//to round mileage, 7500 * round(mileage/7500)
			//table will be in increments of 75,000 beginning at 7500 to 75000 then 82500 to 150000
			maintenanceServices = json.actionHolder;
			createMaintenanceTable();
		},
		error: function(err) {
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
	- intervalMileage has the possibility of being zero. if this is the case, give it an interval mileage of 
		7500 * round(intervalMonths/12)
*/
function createMaintenanceTable() {
	var table = document.getElementById('maintenanceTable');
	table.innerHTML = '';
	addMaintenanceHeaders(table);
	// table.insertRow(2).innerHTML = '<td colspan="2" class="text-center">Service</td><td class="text-center"><span class="glyphicon glyphicon-ok" style="font-size:1.5em"></span></td>'
	// cell = table.insertRow(2).insertCell(2);
	// cell.className = 'text-center';
	// cell.innerHTML = '<span class="glyphicon glyphicon-ok" style="font-size:1.5em"></span>';
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
	for (var i = 2; i < 12; i++) {
		row.insertCell(i).innerHTML = '<b>' + mileage + '</b>';
		mileage += 7500;
	}
}