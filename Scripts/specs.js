(function(window) {
	"use strict";
	
var vehicleSearch = window.location.search;
var vehicleParams = parseQueryString(vehicleSearch.toLowerCase());
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
		},
		error: function(err) {
			console.log('ERROR--> Maintenance schedule not found.')
		}
	});
}

})(window);