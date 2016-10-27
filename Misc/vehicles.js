var vehicles = getVehicles(),
	vehicleMakes = getMakes(),
	currentModels = {};

addMakeSelection();

function getMakes() {
	var makes = {};
	vehicles.makes.forEach(function(make) {
		makes[make.name] = make;
	});
	return makes;
}

function addMakeSelection() {	
	for (var make in vehicleMakes) {
		var opt = new Option(make, make); //option(text, value)
		$(opt).html(make);
		$("#selectMake").append(opt);
	}
}

function getModels() {
	var make = $("#selectMake").val();
  removeOptions("#selectModel");
  removeOptions("#selectYear");
  $('#lookUpButton').prop('disabled', true);
  currentModels = {};
  if (vehicleMakes[make] != undefined) {
    $('#selectModel').append(new Option("Select Model", ""));
    var models = vehicleMakes[make].models;
    models.forEach(function(model) {
      var modelName = model.name
      currentModels[modelName] = model;
      var opt = new Option(modelName, modelName);
      // $(opt).html(modelName);
      $("#selectModel").append(opt);
	  });
  }
}

function getYears() {
	var model = $('#selectModel').val();
  removeOptions('#selectYear');
  $('#lookUpButton').prop('disabled', true);
  $('#selectYear').append(new Option("Select Year", ""));
  var years = currentModels[model].years;
  years.forEach(function(year) {
    vehicleYear = year.year;
    var opt = new Option(vehicleYear, vehicleYear);
    $('#selectYear').append(opt);
  });
}

function removeOptions(id) {
	var select = $(id);
  $(select).children('option').remove();
	// console.log(select);
	// console.log($('#selectModel'))
	// if (select.option != undefined) {
	// 	console.log(select);
	// 	for (i = 0; i < select.option.length; i++) {
	// 		select.option[i] = null;
	// 	}
	// }
}

function enableSubmit() {
  var year = $('#selectYear').val();
  if (year != '') {
    $('#lookUpButton').prop('disabled', false);
  } else {
    $('#lookUpButton').prop('disabled', true);
  }
}

//Another option: Get info from ajax call to api or DB
function getVehicles() {
	return {
  "makes": [
    {
      "id": 200347864,
      "name": "AM General",
      "niceName": "am-general",
      "models": [
        {
          "id": "AM_General_Hummer",
          "name": "Hummer",
          "niceName": "hummer",
          "years": [
            {
              "id": 3407,
              "year": 1998
            },
            {
              "id": 1140,
              "year": 1999
            },
            {
              "id": 305,
              "year": 2000
            }
          ]
        }
      ]
    },
    {
      "id": 200002038,
      "name": "Acura",
      "niceName": "acura",
      "models": [
        {
          "id": "Acura_CL",
          "name": "CL",
          "niceName": "cl",
          "years": [
            {
              "id": 3265,
              "year": 1997
            },
            {
              "id": 3266,
              "year": 1998
            },
            {
              "id": 960,
              "year": 1999
            },
            {
              "id": 100000010,
              "year": 2001
            },
            {
              "id": 100000456,
              "year": 2002
            },
            {
              "id": 100502607,
              "year": 2003
            }
          ]
        },
        {
          "id": "Acura_ILX",
          "name": "ILX",
          "niceName": "ilx",
          "years": [
            {
              "id": 100538929,
              "year": 2013
            },
            {
              "id": 200471908,
              "year": 2014
            },
            {
              "id": 200701415,
              "year": 2015
            },
            {
              "id": 200713715,
              "year": 2016
            },
            {
              "id": 401640361,
              "year": 2017
            }
          ]
        },
        {
          "id": "Acura_ILX_Hybrid",
          "name": "ILX Hybrid",
          "niceName": "ilx-hybrid",
          "years": [
            {
              "id": 200493809,
              "year": 2014
            }
          ]
        },
        {
          "id": "Acura_Integra",
          "name": "Integra",
          "niceName": "integra",
          "years": [
            {
              "id": 3268,
              "year": 1990
            },
            {
              "id": 890,
              "year": 1991
            },
            {
              "id": 3269,
              "year": 1992
            },
            {
              "id": 3270,
              "year": 1993
            },
            {
              "id": 891,
              "year": 1994
            },
            {
              "id": 3271,
              "year": 1995
            },
            {
              "id": 892,
              "year": 1997
            },
            {
              "id": 3273,
              "year": 1998
            },
            {
              "id": 3411,
              "year": 1999
            },
            {
              "id": 1080,
              "year": 2000
            },
            {
              "id": 100000008,
              "year": 2001
            }
          ]
        },
        {
          "id": "Acura_Legend",
          "name": "Legend",
          "niceName": "legend",
          "years": [
            {
              "id": 3275,
              "year": 1990
            },
            {
              "id": 893,
              "year": 1991
            },
            {
              "id": 3276,
              "year": 1992
            },
            {
              "id": 3277,
              "year": 1993
            },
            {
              "id": 3278,
              "year": 1995
            }
          ]
        },
        {
          "id": "Acura_MDX",
          "name": "MDX",
          "niceName": "mdx",
          "years": [
            {
              "id": 100000009,
              "year": 2001
            },
            {
              "id": 100000530,
              "year": 2002
            },
            {
              "id": 100502711,
              "year": 2003
            },
            {
              "id": 100503653,
              "year": 2004
            },
            {
              "id": 100504946,
              "year": 2005
            },
            {
              "id": 100506940,
              "year": 2006
            },
            {
              "id": 100507584,
              "year": 2007
            },
            {
              "id": 100524172,
              "year": 2008
            },
            {
              "id": 100525749,
              "year": 2009
            },
            {
              "id": 100530869,
              "year": 2010
            },
            {
              "id": 100533210,
              "year": 2011
            },
            {
              "id": 100538329,
              "year": 2012
            },
            {
              "id": 200434553,
              "year": 2013
            },
            {
              "id": 200465929,
              "year": 2014
            },
            {
              "id": 200698434,
              "year": 2015
            },
            {
              "id": 200726800,
              "year": 2016
            },
            {
              "id": 200781960,
              "year": 2017
            }
          ]
        },
        {
          "id": "Acura_NSX",
          "name": "NSX",
          "niceName": "nsx",
          "years": [
            {
              "id": 100000366,
              "year": 1991
            },
            {
              "id": 3279,
              "year": 1992
            },
            {
              "id": 3280,
              "year": 1993
            },
            {
              "id": 3281,
              "year": 1994
            },
            {
              "id": 3282,
              "year": 1995
            },
            {
              "id": 3283,
              "year": 1996
            },
            {
              "id": 3284,
              "year": 1997
            },
            {
              "id": 3412,
              "year": 1999
            },
            {
              "id": 953,
              "year": 2000
            },
            {
              "id": 100000011,
              "year": 2001
            },
            {
              "id": 100000573,
              "year": 2002
            },
            {
              "id": 100502712,
              "year": 2003
            },
            {
              "id": 100503652,
              "year": 2004
            },
            {
              "id": 100504947,
              "year": 2005
            },
            {
              "id": 200779937,
              "year": 2017
            }
          ]
        },
        {
          "id": "Acura_RDX",
          "name": "RDX",
          "niceName": "rdx",
          "years": [
            {
              "id": 100505131,
              "year": 2007
            },
            {
              "id": 100523811,
              "year": 2008
            },
            {
              "id": 100525429,
              "year": 2009
            },
            {
              "id": 100528669,
              "year": 2010
            },
            {
              "id": 100533372,
              "year": 2011
            },
            {
              "id": 100537229,
              "year": 2012
            },
            {
              "id": 100538949,
              "year": 2013
            },
            {
              "id": 200467168,
              "year": 2014
            },
            {
              "id": 200693511,
              "year": 2015
            },
            {
              "id": 200727186,
              "year": 2016
            },
            {
              "id": 401640362,
              "year": 2017
            }
          ]
        },
        {
          "id": "Acura_RL",
          "name": "RL",
          "niceName": "rl",
          "years": [
            {
              "id": 3286,
              "year": 1996
            },
            {
              "id": 3410,
              "year": 1997
            },
            {
              "id": 3287,
              "year": 1998
            },
            {
              "id": 3413,
              "year": 1999
            },
            {
              "id": 397,
              "year": 2000
            },
            {
              "id": 100000012,
              "year": 2001
            },
            {
              "id": 100000322,
              "year": 2002
            },
            {
              "id": 100502713,
              "year": 2003
            },
            {
              "id": 100502994,
              "year": 2004
            },
            {
              "id": 100503143,
              "year": 2005
            },
            {
              "id": 100506663,
              "year": 2006
            },
            {
              "id": 100519602,
              "year": 2007
            },
            {
              "id": 100523569,
              "year": 2008
            },
            {
              "id": 100525535,
              "year": 2009
            },
            {
              "id": 100528489,
              "year": 2010
            },
            {
              "id": 100534129,
              "year": 2011
            },
            {
              "id": 100524991,
              "year": 2012
            }
          ]
        },
        {
          "id": "Acura_RLX",
          "name": "RLX",
          "niceName": "rlx",
          "years": [
            {
              "id": 100539511,
              "year": 2014
            },
            {
              "id": 200706522,
              "year": 2015
            },
            {
              "id": 200729233,
              "year": 2016
            },
            {
              "id": 401676770,
              "year": 2017
            }
          ]
        },
        {
          "id": "Acura_RSX",
          "name": "RSX",
          "niceName": "rsx",
          "years": [
            {
              "id": 100000367,
              "year": 2002
            },
            {
              "id": 100502714,
              "year": 2003
            },
            {
              "id": 100503651,
              "year": 2004
            },
            {
              "id": 100504943,
              "year": 2005
            },
            {
              "id": 100506564,
              "year": 2006
            }
          ]
        },
        {
          "id": "Acura_SLX",
          "name": "SLX",
          "niceName": "slx",
          "years": [
            {
              "id": 3288,
              "year": 1996
            },
            {
              "id": 3289,
              "year": 1997
            },
            {
              "id": 3290,
              "year": 1998
            },
            {
              "id": 961,
              "year": 1999
            }
          ]
        },
        {
          "id": "Acura_TL",
          "name": "TL",
          "niceName": "tl",
          "years": [
            {
              "id": 100000368,
              "year": 1995
            },
            {
              "id": 3291,
              "year": 1996
            },
            {
              "id": 3408,
              "year": 1997
            },
            {
              "id": 895,
              "year": 1998
            },
            {
              "id": 3414,
              "year": 1999
            },
            {
              "id": 1067,
              "year": 2000
            },
            {
              "id": 100000013,
              "year": 2001
            },
            {
              "id": 100000321,
              "year": 2002
            },
            {
              "id": 100502606,
              "year": 2003
            },
            {
              "id": 100502993,
              "year": 2004
            },
            {
              "id": 100504945,
              "year": 2005
            },
            {
              "id": 100506840,
              "year": 2006
            },
            {
              "id": 100519601,
              "year": 2007
            },
            {
              "id": 100523753,
              "year": 2008
            },
            {
              "id": 100524030,
              "year": 2009
            },
            {
              "id": 100529409,
              "year": 2010
            },
            {
              "id": 100532894,
              "year": 2011
            },
            {
              "id": 100533455,
              "year": 2012
            },
            {
              "id": 200433190,
              "year": 2013
            },
            {
              "id": 200488448,
              "year": 2014
            }
          ]
        },
        {
          "id": "Acura_TLX",
          "name": "TLX",
          "niceName": "tlx",
          "years": [
            {
              "id": 200673634,
              "year": 2015
            },
            {
              "id": 401583109,
              "year": 2016
            },
            {
              "id": 401658802,
              "year": 2017
            }
          ]
        },
        {
          "id": "Acura_TSX",
          "name": "TSX",
          "niceName": "tsx",
          "years": [
            {
              "id": 100503100,
              "year": 2004
            },
            {
              "id": 100504944,
              "year": 2005
            },
            {
              "id": 100507159,
              "year": 2006
            },
            {
              "id": 100520228,
              "year": 2007
            },
            {
              "id": 100523478,
              "year": 2008
            },
            {
              "id": 100507581,
              "year": 2009
            },
            {
              "id": 100527369,
              "year": 2010
            },
            {
              "id": 100530509,
              "year": 2011
            },
            {
              "id": 100537769,
              "year": 2012
            },
            {
              "id": 200437325,
              "year": 2013
            },
            {
              "id": 200490517,
              "year": 2014
            }
          ]
        },
        {
          "id": "Acura_TSX_Sport_Wagon",
          "name": "TSX Sport Wagon",
          "niceName": "tsx-sport-wagon",
          "years": [
            {
              "id": 100533969,
              "year": 2011
            },
            {
              "id": 100537789,
              "year": 2012
            },
            {
              "id": 200440520,
              "year": 2013
            },
            {
              "id": 200673755,
              "year": 2014
            }
          ]
        },
        {
          "id": "Acura_Vigor",
          "name": "Vigor",
          "niceName": "vigor",
          "years": [
            {
              "id": 3292,
              "year": 1992
            },
            {
              "id": 3293,
              "year": 1993
            },
            {
              "id": 896,
              "year": 1994
            }
          ]
        },
        {
          "id": "Acura_ZDX",
          "name": "ZDX",
          "niceName": "zdx",
          "years": [
            {
              "id": 100527650,
              "year": 2010
            },
            {
              "id": 100534109,
              "year": 2011
            },
            {
              "id": 100537249,
              "year": 2012
            },
            {
              "id": 200441835,
              "year": 2013
            }
          ]
        }
      ]
    },
    {
      "id": 200464140,
      "name": "Alfa Romeo",
      "niceName": "alfa-romeo",
      "models": [
        {
          "id": "Alfa_Romeo_4C",
          "name": "4C",
          "niceName": "4c",
          "years": [
            {
              "id": 200700684,
              "year": 2015
            },
            {
              "id": 401630278,
              "year": 2016
            }
          ]
        },
        {
          "id": "Alfa_Romeo_4C_Spider",
          "name": "4C Spider",
          "niceName": "4c-spider",
          "years": [
            {
              "id": 200737859,
              "year": 2016
            }
          ]
        },
        {
          "id": "Alfa_Romeo_Giulia",
          "name": "Giulia",
          "niceName": "giulia",
          "years": [
            {
              "id": 200741082,
              "year": 2017
            }
          ]
        }
      ]
    },
    {
      "id": 200001769,
      "name": "Aston Martin",
      "niceName": "aston-martin",
      "models": [
        {
          "id": "Aston_Martin_DB7",
          "name": "DB7",
          "niceName": "db7",
          "years": [
            {
              "id": 100000269,
              "year": 2001
            },
            {
              "id": 100000548,
              "year": 2002
            },
            {
              "id": 100503076,
              "year": 2003
            }
          ]
        },
        {
          "id": "Aston_Martin_DB9",
          "name": "DB9",
          "niceName": "db9",
          "years": [
            {
              "id": 100503551,
              "year": 2005
            },
            {
              "id": 100516903,
              "year": 2006
            },
            {
              "id": 100516886,
              "year": 2007
            },
            {
              "id": 100524869,
              "year": 2008
            },
            {
              "id": 100526129,
              "year": 2009
            },
            {
              "id": 100531569,
              "year": 2010
            },
            {
              "id": 100532429,
              "year": 2011
            },
            {
              "id": 100537350,
              "year": 2012
            },
            {
              "id": 200473435,
              "year": 2013
            },
            {
              "id": 200473436,
              "year": 2014
            },
            {
              "id": 401632427,
              "year": 2015
            }
          ]
        },
        {
          "id": "Aston_Martin_DB9_GT",
          "name": "DB9 GT",
          "niceName": "db9-gt",
          "years": [
            {
              "id": 401630246,
              "year": 2016
            }
          ]
        },
        {
          "id": "Aston_Martin_DBS",
          "name": "DBS",
          "niceName": "dbs",
          "years": [
            {
              "id": 100519044,
              "year": 2008
            },
            {
              "id": 100527534,
              "year": 2009
            },
            {
              "id": 100524969,
              "year": 2010
            },
            {
              "id": 100531250,
              "year": 2011
            },
            {
              "id": 100532430,
              "year": 2012
            }
          ]
        },
        {
          "id": "Aston_Martin_Rapide",
          "name": "Rapide",
          "niceName": "rapide",
          "years": [
            {
              "id": 100507321,
              "year": 2010
            },
            {
              "id": 100533509,
              "year": 2011
            },
            {
              "id": 100537349,
              "year": 2012
            }
          ]
        },
        {
          "id": "Aston_Martin_Rapide_S",
          "name": "Rapide S",
          "niceName": "rapide-s",
          "years": [
            {
              "id": 200460643,
              "year": 2014
            },
            {
              "id": 401632296,
              "year": 2015
            },
            {
              "id": 401632439,
              "year": 2016
            }
          ]
        },
        {
          "id": "Aston_Martin_V12_Vanquish",
          "name": "V12 Vanquish",
          "niceName": "v12-vanquish",
          "years": [
            {
              "id": 100502589,
              "year": 2002
            },
            {
              "id": 100503077,
              "year": 2003
            },
            {
              "id": 100504522,
              "year": 2004
            },
            {
              "id": 100504682,
              "year": 2005
            },
            {
              "id": 100516904,
              "year": 2006
            }
          ]
        },
        {
          "id": "Aston_Martin_V12_Vantage",
          "name": "V12 Vantage",
          "niceName": "v12-vantage",
          "years": [
            {
              "id": 100531969,
              "year": 2011
            },
            {
              "id": 100537351,
              "year": 2012
            }
          ]
        },
        {
          "id": "Aston_Martin_V12_Vantage_S",
          "name": "V12 Vantage S",
          "niceName": "v12-vantage-s",
          "years": [
            {
              "id": 200693539,
              "year": 2015
            },
            {
              "id": 401633296,
              "year": 2016
            }
          ]
        },
        {
          "id": "Aston_Martin_V8_Vantage",
          "name": "V8 Vantage",
          "niceName": "v8-vantage",
          "years": [
            {
              "id": 100503104,
              "year": 2006
            },
            {
              "id": 100524569,
              "year": 2007
            },
            {
              "id": 100512807,
              "year": 2008
            },
            {
              "id": 100527609,
              "year": 2009
            },
            {
              "id": 100531550,
              "year": 2010
            },
            {
              "id": 100533549,
              "year": 2011
            },
            {
              "id": 100537352,
              "year": 2012
            },
            {
              "id": 200472001,
              "year": 2013
            },
            {
              "id": 200472947,
              "year": 2014
            },
            {
              "id": 401627346,
              "year": 2015
            },
            {
              "id": 401627333,
              "year": 2016
            }
          ]
        },
        {
          "id": "Aston_Martin_Vanquish",
          "name": "Vanquish",
          "niceName": "vanquish",
          "years": [
            {
              "id": 200431313,
              "year": 2014
            },
            {
              "id": 401631543,
              "year": 2015
            },
            {
              "id": 401631544,
              "year": 2016
            }
          ]
        },
        {
          "id": "Aston_Martin_Virage",
          "name": "Virage",
          "niceName": "virage",
          "years": [
            {
              "id": 100535109,
              "year": 2011
            },
            {
              "id": 100534789,
              "year": 2012
            }
          ]
        }
      ]
    },
    {
      "id": 200000001,
      "name": "Audi",
      "niceName": "audi",
      "models": [
        {
          "id": "Audi_100",
          "name": "100",
          "niceName": "100",
          "years": [
            {
              "id": 3295,
              "year": 1990
            },
            {
              "id": 897,
              "year": 1991
            },
            {
              "id": 3296,
              "year": 1992
            },
            {
              "id": 3297,
              "year": 1993
            },
            {
              "id": 3298,
              "year": 1994
            }
          ]
        },
        {
          "id": "Audi_200",
          "name": "200",
          "niceName": "200",
          "years": [
            {
              "id": 3300,
              "year": 1990
            },
            {
              "id": 3301,
              "year": 1991
            }
          ]
        },
        {
          "id": "Audi_80",
          "name": "80",
          "niceName": "80",
          "years": [
            {
              "id": 3303,
              "year": 1990
            },
            {
              "id": 3304,
              "year": 1991
            },
            {
              "id": 898,
              "year": 1992
            }
          ]
        },
        {
          "id": "Audi_90",
          "name": "90",
          "niceName": "90",
          "years": [
            {
              "id": 3306,
              "year": 1990
            },
            {
              "id": 899,
              "year": 1991
            },
            {
              "id": 3307,
              "year": 1993
            },
            {
              "id": 3308,
              "year": 1994
            },
            {
              "id": 900,
              "year": 1995
            }
          ]
        },
        {
          "id": "Audi_A3",
          "name": "A3",
          "niceName": "a3",
          "years": [
            {
              "id": 100504284,
              "year": 2006
            },
            {
              "id": 100516961,
              "year": 2007
            },
            {
              "id": 100523189,
              "year": 2008
            },
            {
              "id": 100523689,
              "year": 2009
            },
            {
              "id": 100527411,
              "year": 2010
            },
            {
              "id": 100529569,
              "year": 2011
            },
            {
              "id": 100535009,
              "year": 2012
            },
            {
              "id": 200421449,
              "year": 2013
            },
            {
              "id": 200466755,
              "year": 2015
            },
            {
              "id": 200694130,
              "year": 2016
            },
            {
              "id": 401662137,
              "year": 2017
            }
          ]
        },
        {
          "id": "Audi_A3_Sportback_e_tron",
          "name": "A3 Sportback e-tron",
          "niceName": "a3-sportback-e-tron",
          "years": [
            {
              "id": 200748640,
              "year": 2016
            },
            {
              "id": 401662138,
              "year": 2017
            }
          ]
        },
        {
          "id": "Audi_A4",
          "name": "A4",
          "niceName": "a4",
          "years": [
            {
              "id": 3309,
              "year": 1996
            },
            {
              "id": 3310,
              "year": 1997
            },
            {
              "id": 901,
              "year": 1998
            },
            {
              "id": 962,
              "year": 1999
            },
            {
              "id": 1082,
              "year": 2000
            },
            {
              "id": 100000016,
              "year": 2001
            },
            {
              "id": 100000447,
              "year": 2002
            },
            {
              "id": 100502715,
              "year": 2003
            },
            {
              "id": 100502966,
              "year": 2004
            },
            {
              "id": 100504283,
              "year": 2005
            },
            {
              "id": 100504904,
              "year": 2006
            },
            {
              "id": 100507099,
              "year": 2007
            },
            {
              "id": 100506025,
              "year": 2008
            },
            {
              "id": 100523193,
              "year": 2009
            },
            {
              "id": 100528170,
              "year": 2010
            },
            {
              "id": 100532469,
              "year": 2011
            },
            {
              "id": 100535609,
              "year": 2012
            },
            {
              "id": 200421515,
              "year": 2013
            },
            {
              "id": 200477384,
              "year": 2014
            },
            {
              "id": 200701686,
              "year": 2015
            },
            {
              "id": 200736354,
              "year": 2016
            },
            {
              "id": 200735326,
              "year": 2017
            }
          ]
        },
        {
          "id": "Audi_A4_allroad",
          "name": "A4 allroad",
          "niceName": "a4-allroad",
          "years": [
            {
              "id": 401665341,
              "year": 2017
            }
          ]
        },
        {
          "id": "Audi_A5",
          "name": "A5",
          "niceName": "a5",
          "years": [
            {
              "id": 100512999,
              "year": 2008
            },
            {
              "id": 100525831,
              "year": 2009
            },
            {
              "id": 100527489,
              "year": 2010
            },
            {
              "id": 100532509,
              "year": 2011
            },
            {
              "id": 100535610,
              "year": 2012
            },
            {
              "id": 200421364,
              "year": 2013
            },
            {
              "id": 200478242,
              "year": 2014
            },
            {
              "id": 200702231,
              "year": 2015
            },
            {
              "id": 200705417,
              "year": 2016
            },
            {
              "id": 200735833,
              "year": 2017
            },
            {
              "id": 401658844,
              "year": 2018
            }
          ]
        },
        {
          "id": "Audi_A6",
          "name": "A6",
          "niceName": "a6",
          "years": [
            {
              "id": 3311,
              "year": 1995
            },
            {
              "id": 902,
              "year": 1996
            },
            {
              "id": 3312,
              "year": 1997
            },
            {
              "id": 3313,
              "year": 1998
            },
            {
              "id": 3415,
              "year": 1999
            },
            {
              "id": 1085,
              "year": 2000
            },
            {
              "id": 100000017,
              "year": 2001
            },
            {
              "id": 100000448,
              "year": 2002
            },
            {
              "id": 100502716,
              "year": 2003
            },
            {
              "id": 100503528,
              "year": 2004
            },
            {
              "id": 100503249,
              "year": 2005
            },
            {
              "id": 100506112,
              "year": 2006
            },
            {
              "id": 100519161,
              "year": 2007
            },
            {
              "id": 100523699,
              "year": 2008
            },
            {
              "id": 100526829,
              "year": 2009
            },
            {
              "id": 100528172,
              "year": 2010
            },
            {
              "id": 100532629,
              "year": 2011
            },
            {
              "id": 100532549,
              "year": 2012
            },
            {
              "id": 200422409,
              "year": 2013
            },
            {
              "id": 200477462,
              "year": 2014
            },
            {
              "id": 200703020,
              "year": 2015
            },
            {
              "id": 200721615,
              "year": 2016
            },
            {
              "id": 401644400,
              "year": 2017
            }
          ]
        },
        {
          "id": "Audi_A7",
          "name": "A7",
          "niceName": "a7",
          "years": [
            {
              "id": 100530769,
              "year": 2012
            },
            {
              "id": 200423029,
              "year": 2013
            },
            {
              "id": 200479501,
              "year": 2014
            },
            {
              "id": 200703192,
              "year": 2015
            },
            {
              "id": 200721614,
              "year": 2016
            },
            {
              "id": 401644715,
              "year": 2017
            }
          ]
        },
        {
          "id": "Audi_A8",
          "name": "A8",
          "niceName": "a8",
          "years": [
            {
              "id": 903,
              "year": 1997
            },
            {
              "id": 3314,
              "year": 1998
            },
            {
              "id": 3416,
              "year": 1999
            },
            {
              "id": 384,
              "year": 2000
            },
            {
              "id": 100000015,
              "year": 2001
            },
            {
              "id": 100000449,
              "year": 2002
            },
            {
              "id": 100502717,
              "year": 2003
            },
            {
              "id": 100502933,
              "year": 2004
            },
            {
              "id": 100503880,
              "year": 2005
            },
            {
              "id": 100506113,
              "year": 2006
            },
            {
              "id": 100516962,
              "year": 2007
            },
            {
              "id": 100524092,
              "year": 2008
            },
            {
              "id": 100526052,
              "year": 2009
            },
            {
              "id": 100512963,
              "year": 2010
            },
            {
              "id": 100529570,
              "year": 2011
            },
            {
              "id": 100535611,
              "year": 2012
            },
            {
              "id": 200421092,
              "year": 2013
            },
            {
              "id": 200465834,
              "year": 2014
            },
            {
              "id": 200484089,
              "year": 2015
            },
            {
              "id": 200737487,
              "year": 2016
            },
            {
              "id": 401645206,
              "year": 2017
            },
            {
              "id": 401644051,
              "year": 2018
            }
          ]
        },
        {
          "id": "Audi_Cabriolet",
          "name": "Cabriolet",
          "niceName": "cabriolet",
          "years": [
            {
              "id": 3315,
              "year": 1994
            },
            {
              "id": 3316,
              "year": 1995
            },
            {
              "id": 3317,
              "year": 1996
            },
            {
              "id": 3318,
              "year": 1997
            },
            {
              "id": 3319,
              "year": 1998
            }
          ]
        },
        {
          "id": "Audi_Q3",
          "name": "Q3",
          "niceName": "q3",
          "years": [
            {
              "id": 200673751,
              "year": 2015
            },
            {
              "id": 200736341,
              "year": 2016
            },
            {
              "id": 401645530,
              "year": 2017
            }
          ]
        },
        {
          "id": "Audi_Q5",
          "name": "Q5",
          "niceName": "q5",
          "years": [
            {
              "id": 100527349,
              "year": 2009
            },
            {
              "id": 100505585,
              "year": 2010
            },
            {
              "id": 100532630,
              "year": 2011
            },
            {
              "id": 100535612,
              "year": 2012
            },
            {
              "id": 200437177,
              "year": 2013
            },
            {
              "id": 200478681,
              "year": 2014
            },
            {
              "id": 200702779,
              "year": 2015
            },
            {
              "id": 200737090,
              "year": 2016
            },
            {
              "id": 401645902,
              "year": 2017
            }
          ]
        },
        {
          "id": "Audi_Q7",
          "name": "Q7",
          "niceName": "q7",
          "years": [
            {
              "id": 100503511,
              "year": 2007
            },
            {
              "id": 100520129,
              "year": 2008
            },
            {
              "id": 100522688,
              "year": 2009
            },
            {
              "id": 100527830,
              "year": 2010
            },
            {
              "id": 100532670,
              "year": 2011
            },
            {
              "id": 100535613,
              "year": 2012
            },
            {
              "id": 200423236,
              "year": 2013
            },
            {
              "id": 200480008,
              "year": 2014
            },
            {
              "id": 200703519,
              "year": 2015
            },
            {
              "id": 200736890,
              "year": 2017
            }
          ]
        },
        {
          "id": "Audi_Q7_e_tron",
          "name": "Q7 e-tron",
          "niceName": "q7-e-tron",
          "years": [
            {
              "id": 200722740,
              "year": 2016
            }
          ]
        },
        {
          "id": "Audi_R8",
          "name": "R8",
          "niceName": "r8",
          "years": [
            {
              "id": 100503510,
              "year": 2008
            },
            {
              "id": 100522672,
              "year": 2009
            },
            {
              "id": 100528177,
              "year": 2010
            },
            {
              "id": 100531251,
              "year": 2011
            },
            {
              "id": 100531909,
              "year": 2012
            },
            {
              "id": 200460093,
              "year": 2014
            },
            {
              "id": 401627093,
              "year": 2017
            }
          ]
        },
        {
          "id": "Audi_RS_4",
          "name": "RS 4",
          "niceName": "rs-4",
          "years": [
            {
              "id": 100507539,
              "year": 2007
            },
            {
              "id": 100523209,
              "year": 2008
            }
          ]
        },
        {
          "id": "Audi_RS_5",
          "name": "RS 5",
          "niceName": "rs-5",
          "years": [
            {
              "id": 100536869,
              "year": 2013
            },
            {
              "id": 200459107,
              "year": 2014
            },
            {
              "id": 200702703,
              "year": 2015
            }
          ]
        },
        {
          "id": "Audi_RS_6",
          "name": "RS 6",
          "niceName": "rs-6",
          "years": [
            {
              "id": 100502940,
              "year": 2003
            }
          ]
        },
        {
          "id": "Audi_RS_7",
          "name": "RS 7",
          "niceName": "rs-7",
          "years": [
            {
              "id": 200459617,
              "year": 2014
            },
            {
              "id": 200703453,
              "year": 2015
            },
            {
              "id": 200725942,
              "year": 2016
            },
            {
              "id": 401644717,
              "year": 2017
            }
          ]
        },
        {
          "id": "Audi_S3",
          "name": "S3",
          "niceName": "s3",
          "years": [
            {
              "id": 200466201,
              "year": 2015
            },
            {
              "id": 200736280,
              "year": 2016
            },
            {
              "id": 401662199,
              "year": 2017
            }
          ]
        },
        {
          "id": "Audi_S4",
          "name": "S4",
          "niceName": "s4",
          "years": [
            {
              "id": 3321,
              "year": 1992
            },
            {
              "id": 3322,
              "year": 1993
            },
            {
              "id": 905,
              "year": 1994
            },
            {
              "id": 1066,
              "year": 2000
            },
            {
              "id": 100000018,
              "year": 2001
            },
            {
              "id": 100000450,
              "year": 2002
            },
            {
              "id": 100502978,
              "year": 2004
            },
            {
              "id": 100504922,
              "year": 2005
            },
            {
              "id": 100506111,
              "year": 2006
            },
            {
              "id": 100516963,
              "year": 2007
            },
            {
              "id": 100523251,
              "year": 2008
            },
            {
              "id": 100525832,
              "year": 2009
            },
            {
              "id": 100528949,
              "year": 2010
            },
            {
              "id": 100532669,
              "year": 2011
            },
            {
              "id": 100535614,
              "year": 2012
            },
            {
              "id": 200421516,
              "year": 2013
            },
            {
              "id": 200477577,
              "year": 2014
            },
            {
              "id": 200701951,
              "year": 2015
            },
            {
              "id": 200736443,
              "year": 2016
            }
          ]
        },
        {
          "id": "Audi_S5",
          "name": "S5",
          "niceName": "s5",
          "years": [
            {
              "id": 100522667,
              "year": 2008
            },
            {
              "id": 100525833,
              "year": 2009
            },
            {
              "id": 100527509,
              "year": 2010
            },
            {
              "id": 100532615,
              "year": 2011
            },
            {
              "id": 100535615,
              "year": 2012
            },
            {
              "id": 200422049,
              "year": 2013
            },
            {
              "id": 200479502,
              "year": 2014
            },
            {
              "id": 200702451,
              "year": 2015
            },
            {
              "id": 200736807,
              "year": 2016
            },
            {
              "id": 401644148,
              "year": 2017
            },
            {
              "id": 401658845,
              "year": 2018
            }
          ]
        },
        {
          "id": "Audi_S6",
          "name": "S6",
          "niceName": "s6",
          "years": [
            {
              "id": 3323,
              "year": 1995
            },
            {
              "id": 100000466,
              "year": 2002
            },
            {
              "id": 100502720,
              "year": 2003
            },
            {
              "id": 100505965,
              "year": 2007
            },
            {
              "id": 100523974,
              "year": 2008
            },
            {
              "id": 100526889,
              "year": 2009
            },
            {
              "id": 100529130,
              "year": 2010
            },
            {
              "id": 100532697,
              "year": 2011
            },
            {
              "id": 100538169,
              "year": 2013
            },
            {
              "id": 200478223,
              "year": 2014
            },
            {
              "id": 200703125,
              "year": 2015
            },
            {
              "id": 200725763,
              "year": 2016
            },
            {
              "id": 401644401,
              "year": 2017
            }
          ]
        },
        {
          "id": "Audi_S7",
          "name": "S7",
          "niceName": "s7",
          "years": [
            {
              "id": 200421996,
              "year": 2013
            },
            {
              "id": 200479593,
              "year": 2014
            },
            {
              "id": 200703284,
              "year": 2015
            },
            {
              "id": 200725872,
              "year": 2016
            },
            {
              "id": 401644716,
              "year": 2017
            }
          ]
        },
        {
          "id": "Audi_S8",
          "name": "S8",
          "niceName": "s8",
          "years": [
            {
              "id": 100000019,
              "year": 2001
            },
            {
              "id": 100000451,
              "year": 2002
            },
            {
              "id": 100502721,
              "year": 2003
            },
            {
              "id": 100507259,
              "year": 2007
            },
            {
              "id": 100524093,
              "year": 2008
            },
            {
              "id": 100525879,
              "year": 2009
            },
            {
              "id": 100538389,
              "year": 2013
            },
            {
              "id": 200480496,
              "year": 2014
            },
            {
              "id": 200698865,
              "year": 2015
            },
            {
              "id": 200737583,
              "year": 2016
            },
            {
              "id": 401645213,
              "year": 2017
            }
          ]
        },
        {
          "id": "Audi_SQ5",
          "name": "SQ5",
          "niceName": "sq5",
          "years": [
            {
              "id": 200459117,
              "year": 2014
            },
            {
              "id": 200702876,
              "year": 2015
            },
            {
              "id": 200737091,
              "year": 2016
            },
            {
              "id": 401645903,
              "year": 2017
            }
          ]
        },
        {
          "id": "Audi_TT",
          "name": "TT",
          "niceName": "tt",
          "years": [
            {
              "id": 1231,
              "year": 2000
            },
            {
              "id": 100000020,
              "year": 2001
            },
            {
              "id": 100000452,
              "year": 2002
            },
            {
              "id": 100502722,
              "year": 2003
            },
            {
              "id": 100503527,
              "year": 2004
            },
            {
              "id": 100504968,
              "year": 2005
            },
            {
              "id": 100504444,
              "year": 2006
            },
            {
              "id": 100506165,
              "year": 2008
            },
            {
              "id": 100526053,
              "year": 2009
            },
            {
              "id": 100528173,
              "year": 2010
            },
            {
              "id": 100531749,
              "year": 2011
            },
            {
              "id": 100535616,
              "year": 2012
            },
            {
              "id": 200422579,
              "year": 2013
            },
            {
              "id": 200481076,
              "year": 2014
            },
            {
              "id": 200675178,
              "year": 2015
            },
            {
              "id": 200690719,
              "year": 2016
            },
            {
              "id": 401646435,
              "year": 2017
            }
          ]
        },
        {
          "id": "Audi_TT_RS",
          "name": "TT RS",
          "niceName": "tt-rs",
          "years": [
            {
              "id": 100533489,
              "year": 2012
            },
            {
              "id": 200423952,
              "year": 2013
            }
          ]
        },
        {
          "id": "Audi_TTS",
          "name": "TTS",
          "niceName": "tts",
          "years": [
            {
              "id": 100520101,
              "year": 2009
            },
            {
              "id": 100529129,
              "year": 2010
            },
            {
              "id": 100532609,
              "year": 2011
            },
            {
              "id": 100535617,
              "year": 2012
            },
            {
              "id": 200423867,
              "year": 2013
            },
            {
              "id": 200481079,
              "year": 2014
            },
            {
              "id": 200677718,
              "year": 2015
            },
            {
              "id": 200737739,
              "year": 2016
            },
            {
              "id": 401646436,
              "year": 2017
            }
          ]
        },
        {
          "id": "Audi_V8",
          "name": "V8",
          "niceName": "v8",
          "years": [
            {
              "id": 906,
              "year": 1990
            },
            {
              "id": 3325,
              "year": 1991
            },
            {
              "id": 3326,
              "year": 1992
            }
          ]
        },
        {
          "id": "Audi_allroad",
          "name": "allroad",
          "niceName": "allroad",
          "years": [
            {
              "id": 100539196,
              "year": 2013
            },
            {
              "id": 200477671,
              "year": 2014
            },
            {
              "id": 200702085,
              "year": 2015
            },
            {
              "id": 200736555,
              "year": 2016
            }
          ]
        },
        {
          "id": "Audi_allroad_quattro",
          "name": "allroad quattro",
          "niceName": "allroad-quattro",
          "years": [
            {
              "id": 100000014,
              "year": 2001
            },
            {
              "id": 100000453,
              "year": 2002
            },
            {
              "id": 100502718,
              "year": 2003
            },
            {
              "id": 100503529,
              "year": 2004
            },
            {
              "id": 100504962,
              "year": 2005
            }
          ]
        }
      ]
    },
    {
      "id": 200000081,
      "name": "BMW",
      "niceName": "bmw",
      "models": [
        {
          "id": "BMW_1_Series",
          "name": "1 Series",
          "niceName": "1-series",
          "years": [
            {
              "id": 100524709,
              "year": 2008
            },
            {
              "id": 100503222,
              "year": 2009
            },
            {
              "id": 100529091,
              "year": 2010
            },
            {
              "id": 100531309,
              "year": 2011
            },
            {
              "id": 100534729,
              "year": 2012
            },
            {
              "id": 200421700,
              "year": 2013
            }
          ]
        },
        {
          "id": "BMW_1_Series_M",
          "name": "1 Series M",
          "niceName": "1-series-m",
          "years": [
            {
              "id": 100534409,
              "year": 2011
            }
          ]
        },
        {
          "id": "BMW_2_Series",
          "name": "2 Series",
          "niceName": "2-series",
          "years": [
            {
              "id": 200467976,
              "year": 2014
            },
            {
              "id": 200676054,
              "year": 2015
            },
            {
              "id": 200744427,
              "year": 2016
            },
            {
              "id": 401676566,
              "year": 2017
            }
          ]
        },
        {
          "id": "BMW_3_Series",
          "name": "3 Series",
          "niceName": "3-series",
          "years": [
            {
              "id": 3328,
              "year": 1990
            },
            {
              "id": 3330,
              "year": 1992
            },
            {
              "id": 909,
              "year": 1993
            },
            {
              "id": 3331,
              "year": 1994
            },
            {
              "id": 3209,
              "year": 1995
            },
            {
              "id": 910,
              "year": 1996
            },
            {
              "id": 3211,
              "year": 1998
            },
            {
              "id": 963,
              "year": 1999
            },
            {
              "id": 1118,
              "year": 2000
            },
            {
              "id": 100000021,
              "year": 2001
            },
            {
              "id": 100000457,
              "year": 2002
            },
            {
              "id": 100502723,
              "year": 2003
            },
            {
              "id": 100503217,
              "year": 2004
            },
            {
              "id": 100503250,
              "year": 2005
            },
            {
              "id": 100504903,
              "year": 2006
            },
            {
              "id": 100507019,
              "year": 2007
            },
            {
              "id": 100524310,
              "year": 2008
            },
            {
              "id": 100524793,
              "year": 2009
            },
            {
              "id": 100529029,
              "year": 2010
            },
            {
              "id": 100531052,
              "year": 2011
            },
            {
              "id": 100538029,
              "year": 2012
            },
            {
              "id": 100535269,
              "year": 2013
            },
            {
              "id": 200468552,
              "year": 2014
            },
            {
              "id": 200704009,
              "year": 2015
            },
            {
              "id": 200729831,
              "year": 2016
            },
            {
              "id": 401661575,
              "year": 2017
            }
          ]
        },
        {
          "id": "BMW_3_Series_Gran_Turismo",
          "name": "3 Series Gran Turismo",
          "niceName": "3-series-gran-turismo",
          "years": [
            {
              "id": 200461849,
              "year": 2014
            },
            {
              "id": 200706926,
              "year": 2015
            },
            {
              "id": 200747547,
              "year": 2016
            },
            {
              "id": 401672358,
              "year": 2017
            }
          ]
        },
        {
          "id": "BMW_3_Series_eDrive",
          "name": "3 Series eDrive",
          "niceName": "3-series-edrive",
          "years": [
            {
              "id": 401638448,
              "year": 2016
            }
          ]
        },
        {
          "id": "BMW_4_Series",
          "name": "4 Series",
          "niceName": "4-series",
          "years": [
            {
              "id": 200466555,
              "year": 2014
            },
            {
              "id": 200704560,
              "year": 2015
            },
            {
              "id": 200743641,
              "year": 2016
            },
            {
              "id": 401671914,
              "year": 2017
            }
          ]
        },
        {
          "id": "BMW_4_Series_Gran_Coupe",
          "name": "4 Series Gran Coupe",
          "niceName": "4-series-gran-coupe",
          "years": [
            {
              "id": 200676095,
              "year": 2015
            },
            {
              "id": 200737897,
              "year": 2016
            }
          ]
        },
        {
          "id": "BMW_5_Series",
          "name": "5 Series",
          "niceName": "5-series",
          "years": [
            {
              "id": 3213,
              "year": 1990
            },
            {
              "id": 3214,
              "year": 1991
            },
            {
              "id": 911,
              "year": 1992
            },
            {
              "id": 3215,
              "year": 1993
            },
            {
              "id": 3216,
              "year": 1994
            },
            {
              "id": 912,
              "year": 1995
            },
            {
              "id": 3217,
              "year": 1997
            },
            {
              "id": 3218,
              "year": 1998
            },
            {
              "id": 3417,
              "year": 1999
            },
            {
              "id": 1124,
              "year": 2000
            },
            {
              "id": 100000022,
              "year": 2001
            },
            {
              "id": 100000458,
              "year": 2002
            },
            {
              "id": 100502694,
              "year": 2003
            },
            {
              "id": 100502695,
              "year": 2004
            },
            {
              "id": 100505111,
              "year": 2005
            },
            {
              "id": 100505142,
              "year": 2006
            },
            {
              "id": 100507623,
              "year": 2007
            },
            {
              "id": 100522929,
              "year": 2008
            },
            {
              "id": 100526330,
              "year": 2009
            },
            {
              "id": 100528109,
              "year": 2010
            },
            {
              "id": 100520104,
              "year": 2011
            },
            {
              "id": 100537809,
              "year": 2012
            },
            {
              "id": 200429164,
              "year": 2013
            },
            {
              "id": 200474272,
              "year": 2014
            },
            {
              "id": 200705185,
              "year": 2015
            },
            {
              "id": 200745714,
              "year": 2016
            },
            {
              "id": 401678444,
              "year": 2017
            }
          ]
        },
        {
          "id": "BMW_5_Series_Gran_Turismo",
          "name": "5 Series Gran Turismo",
          "niceName": "5-series-gran-turismo",
          "years": [
            {
              "id": 100530649,
              "year": 2010
            },
            {
              "id": 100533094,
              "year": 2011
            },
            {
              "id": 100539029,
              "year": 2012
            },
            {
              "id": 200443305,
              "year": 2013
            },
            {
              "id": 200474280,
              "year": 2014
            },
            {
              "id": 200708879,
              "year": 2015
            },
            {
              "id": 200744768,
              "year": 2016
            },
            {
              "id": 401667006,
              "year": 2017
            }
          ]
        },
        {
          "id": "BMW_6_Series",
          "name": "6 Series",
          "niceName": "6-series",
          "years": [
            {
              "id": 100502937,
              "year": 2004
            },
            {
              "id": 100505112,
              "year": 2005
            },
            {
              "id": 100506802,
              "year": 2006
            },
            {
              "id": 100520229,
              "year": 2007
            },
            {
              "id": 100524490,
              "year": 2008
            },
            {
              "id": 100526321,
              "year": 2009
            },
            {
              "id": 100528069,
              "year": 2010
            },
            {
              "id": 100531910,
              "year": 2012
            },
            {
              "id": 200429532,
              "year": 2013
            },
            {
              "id": 200470631,
              "year": 2014
            },
            {
              "id": 200694223,
              "year": 2015
            },
            {
              "id": 200732865,
              "year": 2016
            },
            {
              "id": 401642198,
              "year": 2017
            }
          ]
        },
        {
          "id": "BMW_6_Series_Gran_Coupe",
          "name": "6 Series Gran Coupe",
          "niceName": "6-series-gran-coupe",
          "years": [
            {
              "id": 100539109,
              "year": 2013
            },
            {
              "id": 200471738,
              "year": 2014
            },
            {
              "id": 200692802,
              "year": 2015
            },
            {
              "id": 200734514,
              "year": 2016
            },
            {
              "id": 401643859,
              "year": 2017
            }
          ]
        },
        {
          "id": "BMW_7_Series",
          "name": "7 Series",
          "niceName": "7-series",
          "years": [
            {
              "id": 3220,
              "year": 1990
            },
            {
              "id": 914,
              "year": 1991
            },
            {
              "id": 3221,
              "year": 1992
            },
            {
              "id": 915,
              "year": 1994
            },
            {
              "id": 3223,
              "year": 1995
            },
            {
              "id": 3224,
              "year": 1996
            },
            {
              "id": 3418,
              "year": 1999
            },
            {
              "id": 1241,
              "year": 2000
            },
            {
              "id": 100000023,
              "year": 2001
            },
            {
              "id": 100000459,
              "year": 2002
            },
            {
              "id": 100502724,
              "year": 2003
            },
            {
              "id": 100503649,
              "year": 2004
            },
            {
              "id": 100504124,
              "year": 2005
            },
            {
              "id": 100505546,
              "year": 2006
            },
            {
              "id": 100507499,
              "year": 2007
            },
            {
              "id": 100519521,
              "year": 2008
            },
            {
              "id": 100525990,
              "year": 2009
            },
            {
              "id": 100522593,
              "year": 2010
            },
            {
              "id": 100531089,
              "year": 2011
            },
            {
              "id": 100534810,
              "year": 2012
            },
            {
              "id": 200429759,
              "year": 2013
            },
            {
              "id": 200495598,
              "year": 2014
            },
            {
              "id": 200692022,
              "year": 2015
            },
            {
              "id": 200737855,
              "year": 2016
            },
            {
              "id": 401644387,
              "year": 2017
            }
          ]
        },
        {
          "id": "BMW_8_Series",
          "name": "8 Series",
          "niceName": "8-series",
          "years": [
            {
              "id": 3228,
              "year": 1993
            },
            {
              "id": 3230,
              "year": 1995
            },
            {
              "id": 3231,
              "year": 1996
            },
            {
              "id": 3232,
              "year": 1997
            }
          ]
        },
        {
          "id": "BMW_ALPINA_B6_Gran_Coupe",
          "name": "ALPINA B6 Gran Coupe",
          "niceName": "alpina-b6-gran-coupe",
          "years": [
            {
              "id": 200710296,
              "year": 2015
            },
            {
              "id": 200735194,
              "year": 2016
            },
            {
              "id": 401642313,
              "year": 2017
            }
          ]
        },
        {
          "id": "BMW_ALPINA_B7",
          "name": "ALPINA B7",
          "niceName": "alpina-b7",
          "years": [
            {
              "id": 100522567,
              "year": 2007
            },
            {
              "id": 100524449,
              "year": 2008
            },
            {
              "id": 100531129,
              "year": 2011
            },
            {
              "id": 100534749,
              "year": 2012
            },
            {
              "id": 401657905,
              "year": 2013
            },
            {
              "id": 200491671,
              "year": 2014
            },
            {
              "id": 200710062,
              "year": 2015
            }
          ]
        },
        {
          "id": "BMW_ActiveHybrid_5",
          "name": "ActiveHybrid 5",
          "niceName": "activehybrid-5",
          "years": [
            {
              "id": 100531252,
              "year": 2012
            },
            {
              "id": 200492996,
              "year": 2014
            },
            {
              "id": 200708037,
              "year": 2015
            },
            {
              "id": 401588568,
              "year": 2016
            }
          ]
        },
        {
          "id": "BMW_ActiveHybrid_7",
          "name": "ActiveHybrid 7",
          "niceName": "activehybrid-7",
          "years": [
            {
              "id": 100530789,
              "year": 2011
            },
            {
              "id": 100538889,
              "year": 2012
            },
            {
              "id": 200429760,
              "year": 2013
            },
            {
              "id": 200494174,
              "year": 2014
            },
            {
              "id": 200708685,
              "year": 2015
            }
          ]
        },
        {
          "id": "BMW_ActiveHybrid_X6",
          "name": "ActiveHybrid X6",
          "niceName": "activehybrid-x6",
          "years": [
            {
              "id": 100530689,
              "year": 2010
            },
            {
              "id": 100532310,
              "year": 2011
            }
          ]
        },
        {
          "id": "BMW_Alpina",
          "name": "Alpina",
          "niceName": "alpina",
          "years": [
            {
              "id": 100503115,
              "year": 2003
            }
          ]
        },
        {
          "id": "BMW_M",
          "name": "M",
          "niceName": "m",
          "years": [
            {
              "id": 964,
              "year": 1998
            },
            {
              "id": 3419,
              "year": 1999
            },
            {
              "id": 1243,
              "year": 2000
            },
            {
              "id": 100000301,
              "year": 2001
            },
            {
              "id": 100000460,
              "year": 2002
            },
            {
              "id": 100507419,
              "year": 2006
            }
          ]
        },
        {
          "id": "BMW_M2",
          "name": "M2",
          "niceName": "m2",
          "years": [
            {
              "id": 401632199,
              "year": 2016
            },
            {
              "id": 401660424,
              "year": 2017
            }
          ]
        },
        {
          "id": "BMW_M3",
          "name": "M3",
          "niceName": "m3",
          "years": [
            {
              "id": 100002612,
              "year": 1990
            },
            {
              "id": 100503333,
              "year": 1991
            },
            {
              "id": 100503388,
              "year": 1998
            },
            {
              "id": 3420,
              "year": 1999
            },
            {
              "id": 100000302,
              "year": 2001
            },
            {
              "id": 100000461,
              "year": 2002
            },
            {
              "id": 100502726,
              "year": 2003
            },
            {
              "id": 100503650,
              "year": 2004
            },
            {
              "id": 100505116,
              "year": 2005
            },
            {
              "id": 100506740,
              "year": 2006
            },
            {
              "id": 100504625,
              "year": 2008
            },
            {
              "id": 100522874,
              "year": 2009
            },
            {
              "id": 100529689,
              "year": 2010
            },
            {
              "id": 100531349,
              "year": 2011
            },
            {
              "id": 100537910,
              "year": 2012
            },
            {
              "id": 200429366,
              "year": 2013
            },
            {
              "id": 200498619,
              "year": 2015
            },
            {
              "id": 401566520,
              "year": 2016
            },
            {
              "id": 401660142,
              "year": 2017
            }
          ]
        },
        {
          "id": "BMW_M4",
          "name": "M4",
          "niceName": "m4",
          "years": [
            {
              "id": 200481162,
              "year": 2015
            },
            {
              "id": 200748861,
              "year": 2016
            },
            {
              "id": 401660360,
              "year": 2017
            }
          ]
        },
        {
          "id": "BMW_M4_GTS",
          "name": "M4 GTS",
          "niceName": "m4-gts",
          "years": [
            {
              "id": 401650415,
              "year": 2016
            }
          ]
        },
        {
          "id": "BMW_M5",
          "name": "M5",
          "niceName": "m5",
          "years": [
            {
              "id": 100503334,
              "year": 1991
            },
            {
              "id": 917,
              "year": 1992
            },
            {
              "id": 100503348,
              "year": 1993
            },
            {
              "id": 952,
              "year": 2000
            },
            {
              "id": 100000474,
              "year": 2001
            },
            {
              "id": 100000465,
              "year": 2002
            },
            {
              "id": 100502727,
              "year": 2003
            },
            {
              "id": 100503284,
              "year": 2006
            },
            {
              "id": 100520310,
              "year": 2007
            },
            {
              "id": 100522949,
              "year": 2008
            },
            {
              "id": 100526389,
              "year": 2009
            },
            {
              "id": 100520105,
              "year": 2010
            },
            {
              "id": 100539329,
              "year": 2013
            },
            {
              "id": 200474287,
              "year": 2014
            },
            {
              "id": 200708834,
              "year": 2015
            },
            {
              "id": 200749889,
              "year": 2016
            }
          ]
        },
        {
          "id": "BMW_M6",
          "name": "M6",
          "niceName": "m6",
          "years": [
            {
              "id": 100504624,
              "year": 2006
            },
            {
              "id": 100505835,
              "year": 2007
            },
            {
              "id": 100524534,
              "year": 2008
            },
            {
              "id": 100526390,
              "year": 2009
            },
            {
              "id": 100528090,
              "year": 2010
            },
            {
              "id": 100535209,
              "year": 2012
            },
            {
              "id": 100535229,
              "year": 2013
            },
            {
              "id": 200470935,
              "year": 2014
            },
            {
              "id": 200695358,
              "year": 2015
            },
            {
              "id": 200731110,
              "year": 2016
            },
            {
              "id": 401643517,
              "year": 2017
            }
          ]
        },
        {
          "id": "BMW_M6_Gran_Coupe",
          "name": "M6 Gran Coupe",
          "niceName": "m6-gran-coupe",
          "years": [
            {
              "id": 200459377,
              "year": 2014
            },
            {
              "id": 200695679,
              "year": 2015
            },
            {
              "id": 200731327,
              "year": 2016
            },
            {
              "id": 401660037,
              "year": 2017
            }
          ]
        },
        {
          "id": "BMW_X1",
          "name": "X1",
          "niceName": "x1",
          "years": [
            {
              "id": 200421197,
              "year": 2013
            },
            {
              "id": 200468712,
              "year": 2014
            },
            {
              "id": 200692104,
              "year": 2015
            },
            {
              "id": 200737084,
              "year": 2016
            },
            {
              "id": 401658754,
              "year": 2017
            }
          ]
        },
        {
          "id": "BMW_X3",
          "name": "X3",
          "niceName": "x3",
          "years": [
            {
              "id": 100502958,
              "year": 2004
            },
            {
              "id": 100505113,
              "year": 2005
            },
            {
              "id": 100506879,
              "year": 2006
            },
            {
              "id": 100519042,
              "year": 2007
            },
            {
              "id": 100524531,
              "year": 2008
            },
            {
              "id": 100526391,
              "year": 2009
            },
            {
              "id": 100523695,
              "year": 2010
            },
            {
              "id": 100531210,
              "year": 2011
            },
            {
              "id": 100537929,
              "year": 2012
            },
            {
              "id": 200420852,
              "year": 2013
            },
            {
              "id": 200469991,
              "year": 2014
            },
            {
              "id": 200677383,
              "year": 2015
            },
            {
              "id": 200734017,
              "year": 2016
            },
            {
              "id": 401642716,
              "year": 2017
            }
          ]
        },
        {
          "id": "BMW_X4",
          "name": "X4",
          "niceName": "x4",
          "years": [
            {
              "id": 200678188,
              "year": 2015
            },
            {
              "id": 200733790,
              "year": 2016
            },
            {
              "id": 401642952,
              "year": 2017
            }
          ]
        },
        {
          "id": "BMW_X5",
          "name": "X5",
          "niceName": "x5",
          "years": [
            {
              "id": 1086,
              "year": 2000
            },
            {
              "id": 100000026,
              "year": 2001
            },
            {
              "id": 100000462,
              "year": 2002
            },
            {
              "id": 100502728,
              "year": 2003
            },
            {
              "id": 100503550,
              "year": 2004
            },
            {
              "id": 100505114,
              "year": 2005
            },
            {
              "id": 100506841,
              "year": 2006
            },
            {
              "id": 100505528,
              "year": 2007
            },
            {
              "id": 100524530,
              "year": 2008
            },
            {
              "id": 100524794,
              "year": 2009
            },
            {
              "id": 100529929,
              "year": 2010
            },
            {
              "id": 100531353,
              "year": 2011
            },
            {
              "id": 100534709,
              "year": 2012
            },
            {
              "id": 200420450,
              "year": 2013
            },
            {
              "id": 200474294,
              "year": 2014
            },
            {
              "id": 200706472,
              "year": 2015
            },
            {
              "id": 200730051,
              "year": 2016
            },
            {
              "id": 401667507,
              "year": 2017
            }
          ]
        },
        {
          "id": "BMW_X5_M",
          "name": "X5 M",
          "niceName": "x5-m",
          "years": [
            {
              "id": 100527689,
              "year": 2010
            },
            {
              "id": 100531389,
              "year": 2011
            },
            {
              "id": 100534669,
              "year": 2012
            },
            {
              "id": 200420543,
              "year": 2013
            },
            {
              "id": 200724907,
              "year": 2015
            },
            {
              "id": 401589056,
              "year": 2016
            },
            {
              "id": 401667793,
              "year": 2017
            }
          ]
        },
        {
          "id": "BMW_X5_eDrive",
          "name": "X5 eDrive",
          "niceName": "x5-edrive",
          "years": [
            {
              "id": 401583389,
              "year": 2016
            }
          ]
        },
        {
          "id": "BMW_X6",
          "name": "X6",
          "niceName": "x6",
          "years": [
            {
              "id": 100525009,
              "year": 2008
            },
            {
              "id": 100522286,
              "year": 2009
            },
            {
              "id": 100529949,
              "year": 2010
            },
            {
              "id": 100531354,
              "year": 2011
            },
            {
              "id": 100534809,
              "year": 2012
            },
            {
              "id": 100539230,
              "year": 2013
            },
            {
              "id": 200471383,
              "year": 2014
            },
            {
              "id": 200699117,
              "year": 2015
            },
            {
              "id": 200761624,
              "year": 2016
            },
            {
              "id": 401671407,
              "year": 2017
            }
          ]
        },
        {
          "id": "BMW_X6_M",
          "name": "X6 M",
          "niceName": "x6-m",
          "years": [
            {
              "id": 100527690,
              "year": 2010
            },
            {
              "id": 100531355,
              "year": 2011
            },
            {
              "id": 100534670,
              "year": 2012
            },
            {
              "id": 100539251,
              "year": 2013
            },
            {
              "id": 200471529,
              "year": 2014
            },
            {
              "id": 200725433,
              "year": 2015
            },
            {
              "id": 200777975,
              "year": 2016
            },
            {
              "id": 401671408,
              "year": 2017
            }
          ]
        },
        {
          "id": "BMW_X7",
          "name": "X7",
          "niceName": "x7",
          "years": [
            {
              "id": 401610888,
              "year": 2017
            }
          ]
        },
        {
          "id": "BMW_Z3",
          "name": "Z3",
          "niceName": "z3",
          "years": [
            {
              "id": 3235,
              "year": 1998
            },
            {
              "id": 965,
              "year": 1999
            },
            {
              "id": 1244,
              "year": 2000
            },
            {
              "id": 100000024,
              "year": 2001
            },
            {
              "id": 100000463,
              "year": 2002
            }
          ]
        },
        {
          "id": "BMW_Z4",
          "name": "Z4",
          "niceName": "z4",
          "years": [
            {
              "id": 100502951,
              "year": 2003
            },
            {
              "id": 100502948,
              "year": 2004
            },
            {
              "id": 100505115,
              "year": 2005
            },
            {
              "id": 100506842,
              "year": 2006
            },
            {
              "id": 100506805,
              "year": 2007
            },
            {
              "id": 100524510,
              "year": 2008
            },
            {
              "id": 100526393,
              "year": 2009
            },
            {
              "id": 100523696,
              "year": 2010
            },
            {
              "id": 100531329,
              "year": 2011
            },
            {
              "id": 100538430,
              "year": 2012
            },
            {
              "id": 200440365,
              "year": 2013
            },
            {
              "id": 200470406,
              "year": 2014
            },
            {
              "id": 200692190,
              "year": 2015
            },
            {
              "id": 200733831,
              "year": 2016
            }
          ]
        },
        {
          "id": "BMW_Z4_M",
          "name": "Z4 M",
          "niceName": "z4-m",
          "years": [
            {
              "id": 100520346,
              "year": 2007
            },
            {
              "id": 100524533,
              "year": 2008
            }
          ]
        },
        {
          "id": "BMW_Z8",
          "name": "Z8",
          "niceName": "z8",
          "years": [
            {
              "id": 208,
              "year": 2000
            },
            {
              "id": 100000025,
              "year": 2001
            },
            {
              "id": 100000464,
              "year": 2002
            },
            {
              "id": 100502730,
              "year": 2003
            }
          ]
        },
        {
          "id": "BMW_i3",
          "name": "i3",
          "niceName": "i3",
          "years": [
            {
              "id": 200460080,
              "year": 2014
            },
            {
              "id": 200725667,
              "year": 2015
            },
            {
              "id": 401612494,
              "year": 2016
            }
          ]
        },
        {
          "id": "BMW_i8",
          "name": "i8",
          "niceName": "i8",
          "years": [
            {
              "id": 200489696,
              "year": 2014
            },
            {
              "id": 200724810,
              "year": 2015
            },
            {
              "id": 401613126,
              "year": 2016
            },
            {
              "id": 401677064,
              "year": 2017
            }
          ]
        }
      ]
    },
    {
      "id": 200005848,
      "name": "Bentley",
      "niceName": "bentley",
      "models": [
        {
          "id": "Bentley_Arnage",
          "name": "Arnage",
          "niceName": "arnage",
          "years": [
            {
              "id": 100000270,
              "year": 2001
            },
            {
              "id": 100503074,
              "year": 2003
            },
            {
              "id": 100503899,
              "year": 2004
            },
            {
              "id": 100504604,
              "year": 2005
            },
            {
              "id": 100507400,
              "year": 2006
            },
            {
              "id": 100522807,
              "year": 2007
            },
            {
              "id": 100524854,
              "year": 2008
            }
          ]
        },
        {
          "id": "Bentley_Azure",
          "name": "Azure",
          "niceName": "azure",
          "years": [
            {
              "id": 100000271,
              "year": 2001
            },
            {
              "id": 100502591,
              "year": 2002
            },
            {
              "id": 100503080,
              "year": 2003
            },
            {
              "id": 100505446,
              "year": 2007
            },
            {
              "id": 100524855,
              "year": 2008
            },
            {
              "id": 100527029,
              "year": 2009
            }
          ]
        },
        {
          "id": "Bentley_Azure_T",
          "name": "Azure T",
          "niceName": "azure-t",
          "years": [
            {
              "id": 100531710,
              "year": 2010
            }
          ]
        },
        {
          "id": "Bentley_Bentayga",
          "name": "Bentayga",
          "niceName": "bentayga",
          "years": [
            {
              "id": 401578407,
              "year": 2017
            }
          ]
        },
        {
          "id": "Bentley_Brooklands",
          "name": "Brooklands",
          "niceName": "brooklands",
          "years": [
            {
              "id": 100524889,
              "year": 2009
            },
            {
              "id": 100531769,
              "year": 2010
            }
          ]
        },
        {
          "id": "Bentley_Continental",
          "name": "Continental",
          "niceName": "continental",
          "years": [
            {
              "id": 100000266,
              "year": 2001
            },
            {
              "id": 100502592,
              "year": 2002
            },
            {
              "id": 100503085,
              "year": 2003
            }
          ]
        },
        {
          "id": "Bentley_Continental_Flying_Spur",
          "name": "Continental Flying Spur",
          "niceName": "continental-flying-spur",
          "years": [
            {
              "id": 100504582,
              "year": 2006
            },
            {
              "id": 100522547,
              "year": 2007
            },
            {
              "id": 100524849,
              "year": 2008
            },
            {
              "id": 100522873,
              "year": 2009
            },
            {
              "id": 100531469,
              "year": 2010
            },
            {
              "id": 100534209,
              "year": 2011
            },
            {
              "id": 100534909,
              "year": 2012
            },
            {
              "id": 200462294,
              "year": 2013
            }
          ]
        },
        {
          "id": "Bentley_Continental_Flying_Spur_Speed",
          "name": "Continental Flying Spur Speed",
          "niceName": "continental-flying-spur-speed",
          "years": [
            {
              "id": 100526890,
              "year": 2009
            },
            {
              "id": 100531470,
              "year": 2010
            },
            {
              "id": 100534229,
              "year": 2011
            },
            {
              "id": 100534949,
              "year": 2012
            },
            {
              "id": 200464359,
              "year": 2013
            }
          ]
        },
        {
          "id": "Bentley_Continental_GT",
          "name": "Continental GT",
          "niceName": "continental-gt",
          "years": [
            {
              "id": 100503160,
              "year": 2004
            },
            {
              "id": 100505345,
              "year": 2005
            },
            {
              "id": 100507219,
              "year": 2006
            },
            {
              "id": 100522387,
              "year": 2007
            },
            {
              "id": 100524850,
              "year": 2008
            },
            {
              "id": 100522872,
              "year": 2009
            },
            {
              "id": 100531009,
              "year": 2010
            },
            {
              "id": 100531512,
              "year": 2012
            },
            {
              "id": 100539170,
              "year": 2013
            },
            {
              "id": 200688454,
              "year": 2014
            },
            {
              "id": 200696176,
              "year": 2015
            },
            {
              "id": 401648526,
              "year": 2016
            }
          ]
        },
        {
          "id": "Bentley_Continental_GT_Speed",
          "name": "Continental GT Speed",
          "niceName": "continental-gt-speed",
          "years": [
            {
              "id": 100524851,
              "year": 2008
            },
            {
              "id": 100531010,
              "year": 2010
            },
            {
              "id": 200424148,
              "year": 2013
            },
            {
              "id": 200498714,
              "year": 2014
            }
          ]
        },
        {
          "id": "Bentley_Continental_GT_Speed_Convertible",
          "name": "Continental GT Speed Convertible",
          "niceName": "continental-gt-speed-convertible",
          "years": [
            {
              "id": 200689276,
              "year": 2014
            }
          ]
        },
        {
          "id": "Bentley_Continental_GT3_R",
          "name": "Continental GT3-R",
          "niceName": "continental-gt3-r",
          "years": [
            {
              "id": 401656452,
              "year": 2015
            }
          ]
        },
        {
          "id": "Bentley_Continental_GTC",
          "name": "Continental GTC",
          "niceName": "continental-gtc",
          "years": [
            {
              "id": 100506445,
              "year": 2007
            },
            {
              "id": 100524852,
              "year": 2008
            },
            {
              "id": 100526790,
              "year": 2009
            },
            {
              "id": 100531289,
              "year": 2010
            },
            {
              "id": 100534349,
              "year": 2011
            },
            {
              "id": 200498730,
              "year": 2012
            },
            {
              "id": 100539171,
              "year": 2013
            },
            {
              "id": 200688471,
              "year": 2014
            }
          ]
        },
        {
          "id": "Bentley_Continental_GTC_Speed",
          "name": "Continental GTC Speed",
          "niceName": "continental-gtc-speed",
          "years": [
            {
              "id": 100534392,
              "year": 2011
            }
          ]
        },
        {
          "id": "Bentley_Continental_Supersports",
          "name": "Continental Supersports",
          "niceName": "continental-supersports",
          "years": [
            {
              "id": 100534529,
              "year": 2012
            }
          ]
        },
        {
          "id": "Bentley_Continental_Supersports_Convertible",
          "name": "Continental Supersports Convertible",
          "niceName": "continental-supersports-convertible",
          "years": [
            {
              "id": 100531269,
              "year": 2011
            },
            {
              "id": 100534530,
              "year": 2012
            }
          ]
        },
        {
          "id": "Bentley_Flying_Spur",
          "name": "Flying Spur",
          "niceName": "flying-spur",
          "years": [
            {
              "id": 200464775,
              "year": 2014
            },
            {
              "id": 200697369,
              "year": 2015
            },
            {
              "id": 401649583,
              "year": 2016
            }
          ]
        },
        {
          "id": "Bentley_Mulsanne",
          "name": "Mulsanne",
          "niceName": "mulsanne",
          "years": [
            {
              "id": 100529011,
              "year": 2011
            },
            {
              "id": 200496102,
              "year": 2012
            },
            {
              "id": 200463211,
              "year": 2013
            },
            {
              "id": 200692909,
              "year": 2014
            },
            {
              "id": 200714766,
              "year": 2015
            },
            {
              "id": 401646749,
              "year": 2016
            }
          ]
        },
        {
          "id": "Bentley_Supersports_Convertible_ISR",
          "name": "Supersports Convertible ISR",
          "niceName": "supersports-convertible-isr",
          "years": [
            {
              "id": 200674088,
              "year": 2013
            }
          ]
        }
      ]
    },
    {
      "id": 200030397,
      "name": "Bugatti",
      "niceName": "bugatti",
      "models": [
        {
          "id": "Bugatti_Veyron_16.4",
          "name": "Veyron 16.4",
          "niceName": "veyron-164",
          "years": [
            {
              "id": 100505545,
              "year": 2006
            },
            {
              "id": 100524632,
              "year": 2007
            },
            {
              "id": 100524633,
              "year": 2008
            },
            {
              "id": 100528909,
              "year": 2009
            }
          ]
        }
      ]
    },
    {
      "id": 200006659,
      "name": "Buick",
      "niceName": "buick",
      "models": [
        {
          "id": "Buick_Cascada",
          "name": "Cascada",
          "niceName": "cascada",
          "years": [
            {
              "id": 200724880,
              "year": 2016
            },
            {
              "id": 401671987,
              "year": 2017
            }
          ]
        },
        {
          "id": "Buick_Century",
          "name": "Century",
          "niceName": "century",
          "years": [
            {
              "id": 3236,
              "year": 1990
            },
            {
              "id": 3237,
              "year": 1991
            },
            {
              "id": 3238,
              "year": 1992
            },
            {
              "id": 920,
              "year": 1993
            },
            {
              "id": 3239,
              "year": 1994
            },
            {
              "id": 3240,
              "year": 1995
            },
            {
              "id": 921,
              "year": 1996
            },
            {
              "id": 3241,
              "year": 1997
            },
            {
              "id": 3242,
              "year": 1998
            },
            {
              "id": 3421,
              "year": 1999
            },
            {
              "id": 1148,
              "year": 2000
            },
            {
              "id": 100000028,
              "year": 2001
            },
            {
              "id": 3812,
              "year": 2002
            },
            {
              "id": 100502731,
              "year": 2003
            },
            {
              "id": 100503172,
              "year": 2004
            },
            {
              "id": 100503957,
              "year": 2005
            }
          ]
        },
        {
          "id": "Buick_Electra",
          "name": "Electra",
          "niceName": "electra",
          "years": [
            {
              "id": 3243,
              "year": 1990
            }
          ]
        },
        {
          "id": "Buick_Enclave",
          "name": "Enclave",
          "niceName": "enclave",
          "years": [
            {
              "id": 100506699,
              "year": 2008
            },
            {
              "id": 100525834,
              "year": 2009
            },
            {
              "id": 100528309,
              "year": 2010
            },
            {
              "id": 100532389,
              "year": 2011
            },
            {
              "id": 100535669,
              "year": 2012
            },
            {
              "id": 100539350,
              "year": 2013
            },
            {
              "id": 200474986,
              "year": 2014
            },
            {
              "id": 200700843,
              "year": 2015
            },
            {
              "id": 200740589,
              "year": 2016
            },
            {
              "id": 200732908,
              "year": 2017
            }
          ]
        },
        {
          "id": "Buick_Encore",
          "name": "Encore",
          "niceName": "encore",
          "years": [
            {
              "id": 100539089,
              "year": 2013
            },
            {
              "id": 200475535,
              "year": 2014
            },
            {
              "id": 200720057,
              "year": 2015
            },
            {
              "id": 401583524,
              "year": 2016
            },
            {
              "id": 401631197,
              "year": 2017
            }
          ]
        },
        {
          "id": "Buick_Envision",
          "name": "Envision",
          "niceName": "envision",
          "years": [
            {
              "id": 200719677,
              "year": 2016
            },
            {
              "id": 401640692,
              "year": 2017
            }
          ]
        },
        {
          "id": "Buick_Estate_Wagon",
          "name": "Estate Wagon",
          "niceName": "estate-wagon",
          "years": [
            {
              "id": 3244,
              "year": 1990
            }
          ]
        },
        {
          "id": "Buick_LaCrosse",
          "name": "LaCrosse",
          "niceName": "lacrosse",
          "years": [
            {
              "id": 100503279,
              "year": 2005
            },
            {
              "id": 100506305,
              "year": 2006
            },
            {
              "id": 100516843,
              "year": 2007
            },
            {
              "id": 100507619,
              "year": 2008
            },
            {
              "id": 100525769,
              "year": 2009
            },
            {
              "id": 100525110,
              "year": 2010
            },
            {
              "id": 100532229,
              "year": 2011
            },
            {
              "id": 100535569,
              "year": 2012
            },
            {
              "id": 200429460,
              "year": 2013
            },
            {
              "id": 200478757,
              "year": 2014
            },
            {
              "id": 200705489,
              "year": 2015
            },
            {
              "id": 200746717,
              "year": 2016
            },
            {
              "id": 401630402,
              "year": 2017
            }
          ]
        },
        {
          "id": "Buick_LeSabre",
          "name": "LeSabre",
          "niceName": "lesabre",
          "years": [
            {
              "id": 3246,
              "year": 1990
            },
            {
              "id": 3247,
              "year": 1991
            },
            {
              "id": 3248,
              "year": 1992
            },
            {
              "id": 3250,
              "year": 1994
            },
            {
              "id": 3251,
              "year": 1995
            },
            {
              "id": 3252,
              "year": 1996
            },
            {
              "id": 923,
              "year": 1997
            },
            {
              "id": 3422,
              "year": 1998
            },
            {
              "id": 966,
              "year": 1999
            },
            {
              "id": 1234,
              "year": 2000
            },
            {
              "id": 100000030,
              "year": 2001
            },
            {
              "id": 3813,
              "year": 2002
            },
            {
              "id": 100502732,
              "year": 2003
            },
            {
              "id": 100503173,
              "year": 2004
            },
            {
              "id": 100503958,
              "year": 2005
            }
          ]
        },
        {
          "id": "Buick_Lucerne",
          "name": "Lucerne",
          "niceName": "lucerne",
          "years": [
            {
              "id": 100505223,
              "year": 2006
            },
            {
              "id": 100516842,
              "year": 2007
            },
            {
              "id": 100523469,
              "year": 2008
            },
            {
              "id": 100525770,
              "year": 2009
            },
            {
              "id": 100528889,
              "year": 2010
            },
            {
              "id": 100532529,
              "year": 2011
            }
          ]
        },
        {
          "id": "Buick_Park_Avenue",
          "name": "Park Avenue",
          "niceName": "park-avenue",
          "years": [
            {
              "id": 3253,
              "year": 1991
            },
            {
              "id": 3254,
              "year": 1992
            },
            {
              "id": 924,
              "year": 1993
            },
            {
              "id": 3019,
              "year": 1994
            },
            {
              "id": 3020,
              "year": 1995
            },
            {
              "id": 925,
              "year": 1996
            },
            {
              "id": 3021,
              "year": 1997
            },
            {
              "id": 3022,
              "year": 1998
            },
            {
              "id": 3423,
              "year": 1999
            },
            {
              "id": 1142,
              "year": 2000
            },
            {
              "id": 100000027,
              "year": 2001
            },
            {
              "id": 3825,
              "year": 2002
            },
            {
              "id": 100502733,
              "year": 2003
            },
            {
              "id": 100503174,
              "year": 2004
            },
            {
              "id": 100503959,
              "year": 2005
            }
          ]
        },
        {
          "id": "Buick_Rainier",
          "name": "Rainier",
          "niceName": "rainier",
          "years": [
            {
              "id": 100502926,
              "year": 2004
            },
            {
              "id": 100503960,
              "year": 2005
            },
            {
              "id": 100506272,
              "year": 2006
            },
            {
              "id": 100512859,
              "year": 2007
            }
          ]
        },
        {
          "id": "Buick_Reatta",
          "name": "Reatta",
          "niceName": "reatta",
          "years": [
            {
              "id": 926,
              "year": 1990
            },
            {
              "id": 3024,
              "year": 1991
            }
          ]
        },
        {
          "id": "Buick_Regal",
          "name": "Regal",
          "niceName": "regal",
          "years": [
            {
              "id": 3026,
              "year": 1990
            },
            {
              "id": 3027,
              "year": 1991
            },
            {
              "id": 3028,
              "year": 1992
            },
            {
              "id": 3029,
              "year": 1993
            },
            {
              "id": 3030,
              "year": 1994
            },
            {
              "id": 927,
              "year": 1995
            },
            {
              "id": 3031,
              "year": 1996
            },
            {
              "id": 3032,
              "year": 1997
            },
            {
              "id": 928,
              "year": 1998
            },
            {
              "id": 3425,
              "year": 1999
            },
            {
              "id": 1128,
              "year": 2000
            },
            {
              "id": 100000029,
              "year": 2001
            },
            {
              "id": 3814,
              "year": 2002
            },
            {
              "id": 100502734,
              "year": 2003
            },
            {
              "id": 100503218,
              "year": 2004
            },
            {
              "id": 100530271,
              "year": 2011
            },
            {
              "id": 100528849,
              "year": 2012
            },
            {
              "id": 200434927,
              "year": 2013
            },
            {
              "id": 200495789,
              "year": 2014
            },
            {
              "id": 200705490,
              "year": 2015
            },
            {
              "id": 200751751,
              "year": 2016
            },
            {
              "id": 401655334,
              "year": 2017
            },
            {
              "id": 401645685,
              "year": 2018
            }
          ]
        },
        {
          "id": "Buick_Rendezvous",
          "name": "Rendezvous",
          "niceName": "rendezvous",
          "years": [
            {
              "id": 100000311,
              "year": 2002
            },
            {
              "id": 100502735,
              "year": 2003
            },
            {
              "id": 100503175,
              "year": 2004
            },
            {
              "id": 100503956,
              "year": 2005
            },
            {
              "id": 100506308,
              "year": 2006
            },
            {
              "id": 100512860,
              "year": 2007
            }
          ]
        },
        {
          "id": "Buick_Riviera",
          "name": "Riviera",
          "niceName": "riviera",
          "years": [
            {
              "id": 929,
              "year": 1990
            },
            {
              "id": 3034,
              "year": 1991
            },
            {
              "id": 3035,
              "year": 1992
            },
            {
              "id": 3036,
              "year": 1993
            },
            {
              "id": 930,
              "year": 1995
            },
            {
              "id": 3037,
              "year": 1996
            },
            {
              "id": 3038,
              "year": 1997
            },
            {
              "id": 931,
              "year": 1998
            },
            {
              "id": 3426,
              "year": 1999
            }
          ]
        },
        {
          "id": "Buick_Roadmaster",
          "name": "Roadmaster",
          "niceName": "roadmaster",
          "years": [
            {
              "id": 3039,
              "year": 1991
            },
            {
              "id": 3040,
              "year": 1992
            },
            {
              "id": 3041,
              "year": 1993
            },
            {
              "id": 3042,
              "year": 1994
            },
            {
              "id": 3043,
              "year": 1995
            },
            {
              "id": 3044,
              "year": 1996
            }
          ]
        },
        {
          "id": "Buick_Skylark",
          "name": "Skylark",
          "niceName": "skylark",
          "years": [
            {
              "id": 932,
              "year": 1990
            },
            {
              "id": 3047,
              "year": 1991
            },
            {
              "id": 3048,
              "year": 1992
            },
            {
              "id": 3049,
              "year": 1993
            },
            {
              "id": 933,
              "year": 1994
            },
            {
              "id": 3050,
              "year": 1995
            },
            {
              "id": 3051,
              "year": 1996
            },
            {
              "id": 934,
              "year": 1997
            },
            {
              "id": 3052,
              "year": 1998
            }
          ]
        },
        {
          "id": "Buick_Terraza",
          "name": "Terraza",
          "niceName": "terraza",
          "years": [
            {
              "id": 100503664,
              "year": 2005
            },
            {
              "id": 100503663,
              "year": 2006
            },
            {
              "id": 100507520,
              "year": 2007
            }
          ]
        },
        {
          "id": "Buick_Verano",
          "name": "Verano",
          "niceName": "verano",
          "years": [
            {
              "id": 100532089,
              "year": 2012
            },
            {
              "id": 200424093,
              "year": 2013
            },
            {
              "id": 200482210,
              "year": 2014
            },
            {
              "id": 200712022,
              "year": 2015
            },
            {
              "id": 200747588,
              "year": 2016
            },
            {
              "id": 401659366,
              "year": 2017
            }
          ]
        }
      ]
    },
    {
      "id": 200001663,
      "name": "Cadillac",
      "niceName": "cadillac",
      "models": [
        {
          "id": "Cadillac_ATS",
          "name": "ATS",
          "niceName": "ats",
          "years": [
            {
              "id": 100536829,
              "year": 2013
            },
            {
              "id": 200468535,
              "year": 2014
            },
            {
              "id": 200468700,
              "year": 2015
            },
            {
              "id": 401580731,
              "year": 2016
            },
            {
              "id": 401648800,
              "year": 2017
            }
          ]
        },
        {
          "id": "Cadillac_ATS_Coupe",
          "name": "ATS Coupe",
          "niceName": "ats-coupe",
          "years": [
            {
              "id": 200699995,
              "year": 2015
            },
            {
              "id": 401580732,
              "year": 2016
            },
            {
              "id": 401650377,
              "year": 2017
            }
          ]
        },
        {
          "id": "Cadillac_ATS_V",
          "name": "ATS-V",
          "niceName": "ats-v",
          "years": [
            {
              "id": 200721610,
              "year": 2016
            },
            {
              "id": 401655122,
              "year": 2017
            }
          ]
        },
        {
          "id": "Cadillac_Allante",
          "name": "Allante",
          "niceName": "allante",
          "years": [
            {
              "id": 3054,
              "year": 1990
            },
            {
              "id": 3055,
              "year": 1991
            },
            {
              "id": 3056,
              "year": 1992
            },
            {
              "id": 936,
              "year": 1993
            }
          ]
        },
        {
          "id": "Cadillac_Brougham",
          "name": "Brougham",
          "niceName": "brougham",
          "years": [
            {
              "id": 3058,
              "year": 1990
            },
            {
              "id": 3059,
              "year": 1991
            },
            {
              "id": 3060,
              "year": 1992
            }
          ]
        },
        {
          "id": "Cadillac_CT6",
          "name": "CT6",
          "niceName": "ct6",
          "years": [
            {
              "id": 200693497,
              "year": 2016
            },
            {
              "id": 401656078,
              "year": 2017
            }
          ]
        },
        {
          "id": "Cadillac_CTS",
          "name": "CTS",
          "niceName": "cts",
          "years": [
            {
              "id": 100000546,
              "year": 2003
            },
            {
              "id": 100502932,
              "year": 2004
            },
            {
              "id": 100503963,
              "year": 2005
            },
            {
              "id": 100506226,
              "year": 2006
            },
            {
              "id": 100505551,
              "year": 2007
            },
            {
              "id": 100519322,
              "year": 2008
            },
            {
              "id": 100525390,
              "year": 2009
            },
            {
              "id": 100525569,
              "year": 2010
            },
            {
              "id": 100532190,
              "year": 2011
            },
            {
              "id": 100536091,
              "year": 2012
            },
            {
              "id": 200427161,
              "year": 2013
            },
            {
              "id": 200465630,
              "year": 2014
            },
            {
              "id": 200712864,
              "year": 2015
            },
            {
              "id": 401578039,
              "year": 2016
            },
            {
              "id": 401656286,
              "year": 2017
            }
          ]
        },
        {
          "id": "Cadillac_CTS_Coupe",
          "name": "CTS Coupe",
          "niceName": "cts-coupe",
          "years": [
            {
              "id": 100524033,
              "year": 2011
            },
            {
              "id": 100536089,
              "year": 2012
            },
            {
              "id": 200427163,
              "year": 2013
            },
            {
              "id": 200480075,
              "year": 2014
            }
          ]
        },
        {
          "id": "Cadillac_CTS_Wagon",
          "name": "CTS Wagon",
          "niceName": "cts-wagon",
          "years": [
            {
              "id": 100530569,
              "year": 2010
            },
            {
              "id": 100532269,
              "year": 2011
            },
            {
              "id": 100536090,
              "year": 2012
            },
            {
              "id": 200427038,
              "year": 2013
            },
            {
              "id": 200496093,
              "year": 2014
            }
          ]
        },
        {
          "id": "Cadillac_CTS_V",
          "name": "CTS-V",
          "niceName": "cts-v",
          "years": [
            {
              "id": 100503656,
              "year": 2004
            },
            {
              "id": 100503964,
              "year": 2005
            },
            {
              "id": 100506599,
              "year": 2006
            },
            {
              "id": 100507659,
              "year": 2007
            },
            {
              "id": 100523690,
              "year": 2009
            },
            {
              "id": 100528890,
              "year": 2010
            },
            {
              "id": 100530949,
              "year": 2011
            },
            {
              "id": 100528710,
              "year": 2012
            },
            {
              "id": 200427162,
              "year": 2013
            },
            {
              "id": 200479617,
              "year": 2014
            },
            {
              "id": 200688939,
              "year": 2016
            },
            {
              "id": 401656704,
              "year": 2017
            }
          ]
        },
        {
          "id": "Cadillac_CTS_V_Coupe",
          "name": "CTS-V Coupe",
          "niceName": "cts-v-coupe",
          "years": [
            {
              "id": 100530989,
              "year": 2011
            },
            {
              "id": 100536109,
              "year": 2012
            },
            {
              "id": 200427164,
              "year": 2013
            },
            {
              "id": 200480084,
              "year": 2014
            },
            {
              "id": 200698421,
              "year": 2015
            }
          ]
        },
        {
          "id": "Cadillac_CTS_V_Wagon",
          "name": "CTS-V Wagon",
          "niceName": "cts-v-wagon",
          "years": [
            {
              "id": 100530609,
              "year": 2011
            },
            {
              "id": 100536129,
              "year": 2012
            },
            {
              "id": 200427039,
              "year": 2013
            },
            {
              "id": 200497803,
              "year": 2014
            }
          ]
        },
        {
          "id": "Cadillac_Catera",
          "name": "Catera",
          "niceName": "catera",
          "years": [
            {
              "id": 3061,
              "year": 1997
            },
            {
              "id": 3062,
              "year": 1998
            },
            {
              "id": 3427,
              "year": 1999
            },
            {
              "id": 414,
              "year": 2000
            },
            {
              "id": 100000035,
              "year": 2001
            }
          ]
        },
        {
          "id": "Cadillac_DTS",
          "name": "DTS",
          "niceName": "dts",
          "years": [
            {
              "id": 100504626,
              "year": 2006
            },
            {
              "id": 100516863,
              "year": 2007
            },
            {
              "id": 100523390,
              "year": 2008
            },
            {
              "id": 100525835,
              "year": 2009
            },
            {
              "id": 100528769,
              "year": 2010
            },
            {
              "id": 100532490,
              "year": 2011
            }
          ]
        },
        {
          "id": "Cadillac_DeVille",
          "name": "DeVille",
          "niceName": "deville",
          "years": [
            {
              "id": 3063,
              "year": 1990
            },
            {
              "id": 3064,
              "year": 1991
            },
            {
              "id": 938,
              "year": 1992
            },
            {
              "id": 3065,
              "year": 1993
            },
            {
              "id": 3066,
              "year": 1994
            },
            {
              "id": 3067,
              "year": 1995
            },
            {
              "id": 939,
              "year": 1996
            },
            {
              "id": 3069,
              "year": 1998
            },
            {
              "id": 3428,
              "year": 1999
            },
            {
              "id": 518,
              "year": 2000
            },
            {
              "id": 100000034,
              "year": 2001
            },
            {
              "id": 3819,
              "year": 2002
            },
            {
              "id": 100502736,
              "year": 2003
            },
            {
              "id": 100503176,
              "year": 2004
            },
            {
              "id": 100503969,
              "year": 2005
            }
          ]
        },
        {
          "id": "Cadillac_ELR",
          "name": "ELR",
          "niceName": "elr",
          "years": [
            {
              "id": 200459102,
              "year": 2014
            },
            {
              "id": 200714821,
              "year": 2016
            }
          ]
        },
        {
          "id": "Cadillac_Eldorado",
          "name": "Eldorado",
          "niceName": "eldorado",
          "years": [
            {
              "id": 3070,
              "year": 1990
            },
            {
              "id": 3071,
              "year": 1991
            },
            {
              "id": 941,
              "year": 1992
            },
            {
              "id": 3072,
              "year": 1993
            },
            {
              "id": 2954,
              "year": 1994
            },
            {
              "id": 2957,
              "year": 1997
            },
            {
              "id": 2958,
              "year": 1998
            },
            {
              "id": 3429,
              "year": 1999
            },
            {
              "id": 379,
              "year": 2000
            },
            {
              "id": 100000033,
              "year": 2001
            },
            {
              "id": 3820,
              "year": 2002
            }
          ]
        },
        {
          "id": "Cadillac_Escalade",
          "name": "Escalade",
          "niceName": "escalade",
          "years": [
            {
              "id": 3430,
              "year": 1999
            },
            {
              "id": 1149,
              "year": 2000
            },
            {
              "id": 100000032,
              "year": 2002
            },
            {
              "id": 100502738,
              "year": 2003
            },
            {
              "id": 100503177,
              "year": 2004
            },
            {
              "id": 100503965,
              "year": 2005
            },
            {
              "id": 100506151,
              "year": 2006
            },
            {
              "id": 100504282,
              "year": 2007
            },
            {
              "id": 100523470,
              "year": 2008
            },
            {
              "id": 100525471,
              "year": 2009
            },
            {
              "id": 100529353,
              "year": 2010
            },
            {
              "id": 100533029,
              "year": 2011
            },
            {
              "id": 100537049,
              "year": 2012
            },
            {
              "id": 200428110,
              "year": 2013
            },
            {
              "id": 200476395,
              "year": 2014
            },
            {
              "id": 200467571,
              "year": 2015
            },
            {
              "id": 401575635,
              "year": 2016
            },
            {
              "id": 401661753,
              "year": 2017
            }
          ]
        },
        {
          "id": "Cadillac_Escalade_ESV",
          "name": "Escalade ESV",
          "niceName": "escalade-esv",
          "years": [
            {
              "id": 100502650,
              "year": 2003
            },
            {
              "id": 100503178,
              "year": 2004
            },
            {
              "id": 100503962,
              "year": 2005
            },
            {
              "id": 100506265,
              "year": 2006
            },
            {
              "id": 100507559,
              "year": 2007
            },
            {
              "id": 100523471,
              "year": 2008
            },
            {
              "id": 100525472,
              "year": 2009
            },
            {
              "id": 100529354,
              "year": 2010
            },
            {
              "id": 100533030,
              "year": 2011
            },
            {
              "id": 100537069,
              "year": 2012
            },
            {
              "id": 200428282,
              "year": 2013
            },
            {
              "id": 200477076,
              "year": 2014
            },
            {
              "id": 200467572,
              "year": 2015
            },
            {
              "id": 401575637,
              "year": 2016
            },
            {
              "id": 401661754,
              "year": 2017
            }
          ]
        },
        {
          "id": "Cadillac_Escalade_EXT",
          "name": "Escalade EXT",
          "niceName": "escalade-ext",
          "years": [
            {
              "id": 100000272,
              "year": 2002
            },
            {
              "id": 100502739,
              "year": 2003
            },
            {
              "id": 100503179,
              "year": 2004
            },
            {
              "id": 100503966,
              "year": 2005
            },
            {
              "id": 100506266,
              "year": 2006
            },
            {
              "id": 100507560,
              "year": 2007
            },
            {
              "id": 100523472,
              "year": 2008
            },
            {
              "id": 100525649,
              "year": 2009
            },
            {
              "id": 100529369,
              "year": 2010
            },
            {
              "id": 100533032,
              "year": 2011
            },
            {
              "id": 100536809,
              "year": 2012
            },
            {
              "id": 200428853,
              "year": 2013
            }
          ]
        },
        {
          "id": "Cadillac_Escalade_Hybrid",
          "name": "Escalade Hybrid",
          "niceName": "escalade-hybrid",
          "years": [
            {
              "id": 100525943,
              "year": 2009
            },
            {
              "id": 100529370,
              "year": 2010
            },
            {
              "id": 100533031,
              "year": 2011
            },
            {
              "id": 100537549,
              "year": 2012
            }
          ]
        },
        {
          "id": "Cadillac_Fleetwood",
          "name": "Fleetwood",
          "niceName": "fleetwood",
          "years": [
            {
              "id": 2959,
              "year": 1990
            },
            {
              "id": 2960,
              "year": 1991
            },
            {
              "id": 2961,
              "year": 1992
            },
            {
              "id": 943,
              "year": 1993
            },
            {
              "id": 2962,
              "year": 1994
            },
            {
              "id": 2963,
              "year": 1995
            },
            {
              "id": 944,
              "year": 1996
            }
          ]
        },
        {
          "id": "Cadillac_SRX",
          "name": "SRX",
          "niceName": "srx",
          "years": [
            {
              "id": 100502696,
              "year": 2004
            },
            {
              "id": 100503967,
              "year": 2005
            },
            {
              "id": 100506267,
              "year": 2006
            },
            {
              "id": 100516981,
              "year": 2007
            },
            {
              "id": 100505869,
              "year": 2008
            },
            {
              "id": 100525393,
              "year": 2009
            },
            {
              "id": 100507199,
              "year": 2010
            },
            {
              "id": 100532695,
              "year": 2011
            },
            {
              "id": 100536092,
              "year": 2012
            },
            {
              "id": 200437718,
              "year": 2013
            },
            {
              "id": 200481251,
              "year": 2014
            },
            {
              "id": 200704339,
              "year": 2015
            },
            {
              "id": 200743965,
              "year": 2016
            }
          ]
        },
        {
          "id": "Cadillac_STS",
          "name": "STS",
          "niceName": "sts",
          "years": [
            {
              "id": 100503251,
              "year": 2005
            },
            {
              "id": 100506225,
              "year": 2006
            },
            {
              "id": 100516881,
              "year": 2007
            },
            {
              "id": 100522870,
              "year": 2008
            },
            {
              "id": 100525391,
              "year": 2009
            },
            {
              "id": 100528970,
              "year": 2010
            },
            {
              "id": 100532489,
              "year": 2011
            }
          ]
        },
        {
          "id": "Cadillac_STS_V",
          "name": "STS-V",
          "niceName": "sts-v",
          "years": [
            {
              "id": 100504584,
              "year": 2006
            },
            {
              "id": 100516882,
              "year": 2007
            },
            {
              "id": 100523329,
              "year": 2008
            },
            {
              "id": 100525392,
              "year": 2009
            }
          ]
        },
        {
          "id": "Cadillac_Seville",
          "name": "Seville",
          "niceName": "seville",
          "years": [
            {
              "id": 2965,
              "year": 1990
            },
            {
              "id": 2966,
              "year": 1991
            },
            {
              "id": 945,
              "year": 1992
            },
            {
              "id": 2967,
              "year": 1993
            },
            {
              "id": 2968,
              "year": 1994
            },
            {
              "id": 946,
              "year": 1995
            },
            {
              "id": 2971,
              "year": 1998
            },
            {
              "id": 3431,
              "year": 1999
            },
            {
              "id": 1150,
              "year": 2000
            },
            {
              "id": 100000031,
              "year": 2001
            },
            {
              "id": 3821,
              "year": 2002
            },
            {
              "id": 100502740,
              "year": 2003
            },
            {
              "id": 100503180,
              "year": 2004
            }
          ]
        },
        {
          "id": "Cadillac_XLR",
          "name": "XLR",
          "niceName": "xlr",
          "years": [
            {
              "id": 100502651,
              "year": 2004
            },
            {
              "id": 100503968,
              "year": 2005
            },
            {
              "id": 100506227,
              "year": 2006
            },
            {
              "id": 100516883,
              "year": 2007
            },
            {
              "id": 100523230,
              "year": 2008
            },
            {
              "id": 100525115,
              "year": 2009
            }
          ]
        },
        {
          "id": "Cadillac_XLR_V",
          "name": "XLR-V",
          "niceName": "xlr-v",
          "years": [
            {
              "id": 100504585,
              "year": 2006
            },
            {
              "id": 100516884,
              "year": 2007
            },
            {
              "id": 100523231,
              "year": 2008
            },
            {
              "id": 100525389,
              "year": 2009
            }
          ]
        },
        {
          "id": "Cadillac_XT5",
          "name": "XT5",
          "niceName": "xt5",
          "years": [
            {
              "id": 200742448,
              "year": 2017
            }
          ]
        },
        {
          "id": "Cadillac_XT7",
          "name": "XT7",
          "niceName": "xt7",
          "years": [
            {
              "id": 401631201,
              "year": 2018
            }
          ]
        },
        {
          "id": "Cadillac_XTS",
          "name": "XTS",
          "niceName": "xts",
          "years": [
            {
              "id": 100534309,
              "year": 2013
            },
            {
              "id": 200476997,
              "year": 2014
            },
            {
              "id": 200712890,
              "year": 2015
            },
            {
              "id": 401566625,
              "year": 2016
            },
            {
              "id": 401648451,
              "year": 2017
            }
          ]
        }
      ]
    },
    {
      "id": 200000404,
      "name": "Chevrolet",
      "niceName": "chevrolet",
      "models": [
        {
          "id": "Chevrolet_Astro",
          "name": "Astro",
          "niceName": "astro",
          "years": [
            {
              "id": 2974,
              "year": 1990
            },
            {
              "id": 2975,
              "year": 1991
            },
            {
              "id": 2976,
              "year": 1993
            },
            {
              "id": 2977,
              "year": 1994
            },
            {
              "id": 948,
              "year": 1995
            },
            {
              "id": 2978,
              "year": 1996
            },
            {
              "id": 2980,
              "year": 1998
            },
            {
              "id": 3434,
              "year": 1999
            },
            {
              "id": 1151,
              "year": 2000
            },
            {
              "id": 100000051,
              "year": 2001
            },
            {
              "id": 3861,
              "year": 2002
            },
            {
              "id": 100502741,
              "year": 2003
            },
            {
              "id": 100503184,
              "year": 2004
            },
            {
              "id": 100503950,
              "year": 2005
            }
          ]
        },
        {
          "id": "Chevrolet_Astro_Cargo",
          "name": "Astro Cargo",
          "niceName": "astro-cargo",
          "years": [
            {
              "id": 100503328,
              "year": 1990
            },
            {
              "id": 100503335,
              "year": 1991
            },
            {
              "id": 100503342,
              "year": 1992
            },
            {
              "id": 100503349,
              "year": 1993
            },
            {
              "id": 100503354,
              "year": 1994
            },
            {
              "id": 100503360,
              "year": 1995
            },
            {
              "id": 100503369,
              "year": 1996
            },
            {
              "id": 100503379,
              "year": 1997
            },
            {
              "id": 100503398,
              "year": 1999
            },
            {
              "id": 1125,
              "year": 2000
            },
            {
              "id": 100000050,
              "year": 2001
            },
            {
              "id": 3862,
              "year": 2002
            },
            {
              "id": 100502742,
              "year": 2003
            },
            {
              "id": 100503185,
              "year": 2004
            },
            {
              "id": 100503948,
              "year": 2005
            }
          ]
        },
        {
          "id": "Chevrolet_Avalanche",
          "name": "Avalanche",
          "niceName": "avalanche",
          "years": [
            {
              "id": 100000309,
              "year": 2002
            },
            {
              "id": 100502743,
              "year": 2003
            },
            {
              "id": 100503186,
              "year": 2004
            },
            {
              "id": 100503872,
              "year": 2005
            },
            {
              "id": 100506369,
              "year": 2006
            },
            {
              "id": 100505986,
              "year": 2007
            },
            {
              "id": 100523556,
              "year": 2008
            },
            {
              "id": 100525572,
              "year": 2009
            },
            {
              "id": 100529532,
              "year": 2010
            },
            {
              "id": 100533049,
              "year": 2011
            },
            {
              "id": 100536709,
              "year": 2012
            }
          ]
        },
        {
          "id": "Chevrolet_Aveo",
          "name": "Aveo",
          "niceName": "aveo",
          "years": [
            {
              "id": 100503151,
              "year": 2004
            },
            {
              "id": 100503942,
              "year": 2005
            },
            {
              "id": 100506285,
              "year": 2006
            },
            {
              "id": 100507521,
              "year": 2007
            },
            {
              "id": 100523169,
              "year": 2008
            },
            {
              "id": 100525476,
              "year": 2009
            },
            {
              "id": 100528249,
              "year": 2010
            },
            {
              "id": 100532530,
              "year": 2011
            }
          ]
        },
        {
          "id": "Chevrolet_Beretta",
          "name": "Beretta",
          "niceName": "beretta",
          "years": [
            {
              "id": 2981,
              "year": 1990
            },
            {
              "id": 2982,
              "year": 1991
            },
            {
              "id": 950,
              "year": 1992
            },
            {
              "id": 2983,
              "year": 1993
            },
            {
              "id": 2984,
              "year": 1994
            },
            {
              "id": 2985,
              "year": 1995
            },
            {
              "id": 806,
              "year": 1996
            }
          ]
        },
        {
          "id": "Chevrolet_Black_Diamond_Avalanche",
          "name": "Black Diamond Avalanche",
          "niceName": "black-diamond-avalanche",
          "years": [
            {
              "id": 200443680,
              "year": 2013
            }
          ]
        },
        {
          "id": "Chevrolet_Blazer",
          "name": "Blazer",
          "niceName": "blazer",
          "years": [
            {
              "id": 2987,
              "year": 1990
            },
            {
              "id": 2988,
              "year": 1991
            },
            {
              "id": 2989,
              "year": 1992
            },
            {
              "id": 2990,
              "year": 1993
            },
            {
              "id": 2991,
              "year": 1994
            },
            {
              "id": 2992,
              "year": 1995
            },
            {
              "id": 807,
              "year": 1996
            },
            {
              "id": 2993,
              "year": 1997
            },
            {
              "id": 2994,
              "year": 1998
            },
            {
              "id": 3464,
              "year": 1999
            },
            {
              "id": 1129,
              "year": 2000
            },
            {
              "id": 100000049,
              "year": 2001
            },
            {
              "id": 3863,
              "year": 2002
            },
            {
              "id": 100502744,
              "year": 2003
            },
            {
              "id": 100503187,
              "year": 2004
            },
            {
              "id": 100503951,
              "year": 2005
            }
          ]
        },
        {
          "id": "Chevrolet_Bolt_EV",
          "name": "Bolt EV",
          "niceName": "bolt-ev",
          "years": [
            {
              "id": 200747011,
              "year": 2017
            }
          ]
        },
        {
          "id": "Chevrolet_C/K_1500_Series",
          "name": "C/K 1500 Series",
          "niceName": "ck-1500-series",
          "years": [
            {
              "id": 2996,
              "year": 1990
            },
            {
              "id": 2997,
              "year": 1991
            },
            {
              "id": 2998,
              "year": 1992
            },
            {
              "id": 2999,
              "year": 1993
            },
            {
              "id": 808,
              "year": 1994
            },
            {
              "id": 3002,
              "year": 1997
            },
            {
              "id": 3432,
              "year": 1998
            },
            {
              "id": 3465,
              "year": 1999
            }
          ]
        },
        {
          "id": "Chevrolet_C/K_2500_Series",
          "name": "C/K 2500 Series",
          "niceName": "ck-2500-series",
          "years": [
            {
              "id": 3004,
              "year": 1990
            },
            {
              "id": 3005,
              "year": 1991
            },
            {
              "id": 3006,
              "year": 1992
            },
            {
              "id": 3007,
              "year": 1993
            },
            {
              "id": 3008,
              "year": 1994
            },
            {
              "id": 3009,
              "year": 1995
            },
            {
              "id": 3011,
              "year": 1997
            },
            {
              "id": 3433,
              "year": 1998
            },
            {
              "id": 3466,
              "year": 1999
            },
            {
              "id": 502,
              "year": 2000
            }
          ]
        },
        {
          "id": "Chevrolet_C/K_3500_Series",
          "name": "C/K 3500 Series",
          "niceName": "ck-3500-series",
          "years": [
            {
              "id": 3013,
              "year": 1990
            },
            {
              "id": 3014,
              "year": 1991
            },
            {
              "id": 3015,
              "year": 1992
            },
            {
              "id": 3017,
              "year": 1994
            },
            {
              "id": 3018,
              "year": 1995
            },
            {
              "id": 2888,
              "year": 1996
            },
            {
              "id": 2889,
              "year": 1997
            },
            {
              "id": 2890,
              "year": 1998
            },
            {
              "id": 3467,
              "year": 1999
            },
            {
              "id": 1087,
              "year": 2000
            }
          ]
        },
        {
          "id": "Chevrolet_Camaro",
          "name": "Camaro",
          "niceName": "camaro",
          "years": [
            {
              "id": 2892,
              "year": 1990
            },
            {
              "id": 2893,
              "year": 1991
            },
            {
              "id": 2894,
              "year": 1992
            },
            {
              "id": 2895,
              "year": 1993
            },
            {
              "id": 2896,
              "year": 1994
            },
            {
              "id": 809,
              "year": 1995
            },
            {
              "id": 2898,
              "year": 1997
            },
            {
              "id": 810,
              "year": 1998
            },
            {
              "id": 3468,
              "year": 1999
            },
            {
              "id": 368,
              "year": 2000
            },
            {
              "id": 100000036,
              "year": 2001
            },
            {
              "id": 100000348,
              "year": 2002
            },
            {
              "id": 100522471,
              "year": 2010
            },
            {
              "id": 100524289,
              "year": 2011
            },
            {
              "id": 100531911,
              "year": 2012
            },
            {
              "id": 200431515,
              "year": 2013
            },
            {
              "id": 200470751,
              "year": 2014
            },
            {
              "id": 200709658,
              "year": 2015
            },
            {
              "id": 200692011,
              "year": 2016
            },
            {
              "id": 401642255,
              "year": 2017
            }
          ]
        },
        {
          "id": "Chevrolet_Caprice",
          "name": "Caprice",
          "niceName": "caprice",
          "years": [
            {
              "id": 2900,
              "year": 1990
            },
            {
              "id": 811,
              "year": 1991
            },
            {
              "id": 2901,
              "year": 1992
            },
            {
              "id": 2902,
              "year": 1993
            },
            {
              "id": 2903,
              "year": 1994
            },
            {
              "id": 2904,
              "year": 1995
            },
            {
              "id": 2905,
              "year": 1996
            }
          ]
        },
        {
          "id": "Chevrolet_Captiva_Sport",
          "name": "Captiva Sport",
          "niceName": "captiva-sport",
          "years": [
            {
              "id": 100535449,
              "year": 2012
            },
            {
              "id": 200467951,
              "year": 2013
            },
            {
              "id": 200475936,
              "year": 2014
            },
            {
              "id": 200728313,
              "year": 2015
            }
          ]
        },
        {
          "id": "Chevrolet_Cavalier",
          "name": "Cavalier",
          "niceName": "cavalier",
          "years": [
            {
              "id": 812,
              "year": 1990
            },
            {
              "id": 2907,
              "year": 1991
            },
            {
              "id": 2908,
              "year": 1992
            },
            {
              "id": 813,
              "year": 1993
            },
            {
              "id": 2909,
              "year": 1994
            },
            {
              "id": 2910,
              "year": 1995
            },
            {
              "id": 814,
              "year": 1996
            },
            {
              "id": 2911,
              "year": 1997
            },
            {
              "id": 2912,
              "year": 1998
            },
            {
              "id": 3469,
              "year": 1999
            },
            {
              "id": 501,
              "year": 2000
            },
            {
              "id": 100000047,
              "year": 2001
            },
            {
              "id": 3822,
              "year": 2002
            },
            {
              "id": 100502746,
              "year": 2003
            },
            {
              "id": 100503181,
              "year": 2004
            },
            {
              "id": 100504242,
              "year": 2005
            }
          ]
        },
        {
          "id": "Chevrolet_Celebrity",
          "name": "Celebrity",
          "niceName": "celebrity",
          "years": [
            {
              "id": 815,
              "year": 1990
            }
          ]
        },
        {
          "id": "Chevrolet_Chevy_Van",
          "name": "Chevy Van",
          "niceName": "chevy-van",
          "years": [
            {
              "id": 2915,
              "year": 1990
            },
            {
              "id": 2916,
              "year": 1991
            },
            {
              "id": 2917,
              "year": 1992
            },
            {
              "id": 2918,
              "year": 1993
            },
            {
              "id": 2919,
              "year": 1994
            },
            {
              "id": 2920,
              "year": 1995
            },
            {
              "id": 2921,
              "year": 1996
            },
            {
              "id": 2922,
              "year": 1997
            },
            {
              "id": 2923,
              "year": 1998
            }
          ]
        },
        {
          "id": "Chevrolet_Chevy_Van_Classic",
          "name": "Chevy Van Classic",
          "niceName": "chevy-van-classic",
          "years": [
            {
              "id": 2924,
              "year": 1996
            }
          ]
        },
        {
          "id": "Chevrolet_City_Express",
          "name": "City Express",
          "niceName": "city-express",
          "years": [
            {
              "id": 200471747,
              "year": 2015
            },
            {
              "id": 401631650,
              "year": 2016
            },
            {
              "id": 401656851,
              "year": 2017
            }
          ]
        },
        {
          "id": "Chevrolet_Classic",
          "name": "Classic",
          "niceName": "classic",
          "years": [
            {
              "id": 100505162,
              "year": 2004
            },
            {
              "id": 100504948,
              "year": 2005
            }
          ]
        },
        {
          "id": "Chevrolet_Cobalt",
          "name": "Cobalt",
          "niceName": "cobalt",
          "years": [
            {
              "id": 100503515,
              "year": 2005
            },
            {
              "id": 100506185,
              "year": 2006
            },
            {
              "id": 100516803,
              "year": 2007
            },
            {
              "id": 100524111,
              "year": 2008
            },
            {
              "id": 100525573,
              "year": 2009
            },
            {
              "id": 100528809,
              "year": 2010
            }
          ]
        },
        {
          "id": "Chevrolet_Colorado",
          "name": "Colorado",
          "niceName": "colorado",
          "years": [
            {
              "id": 100502684,
              "year": 2004
            },
            {
              "id": 100503952,
              "year": 2005
            },
            {
              "id": 100506229,
              "year": 2006
            },
            {
              "id": 100519001,
              "year": 2007
            },
            {
              "id": 100524374,
              "year": 2008
            },
            {
              "id": 100525574,
              "year": 2009
            },
            {
              "id": 100529709,
              "year": 2010
            },
            {
              "id": 100533212,
              "year": 2011
            },
            {
              "id": 100535489,
              "year": 2012
            },
            {
              "id": 200468542,
              "year": 2015
            },
            {
              "id": 401575464,
              "year": 2016
            }
          ]
        },
        {
          "id": "Chevrolet_Corsica",
          "name": "Corsica",
          "niceName": "corsica",
          "years": [
            {
              "id": 2926,
              "year": 1990
            },
            {
              "id": 2927,
              "year": 1991
            },
            {
              "id": 2928,
              "year": 1992
            },
            {
              "id": 2929,
              "year": 1993
            },
            {
              "id": 2930,
              "year": 1994
            },
            {
              "id": 816,
              "year": 1995
            }
          ]
        },
        {
          "id": "Chevrolet_Corvette",
          "name": "Corvette",
          "niceName": "corvette",
          "years": [
            {
              "id": 2933,
              "year": 1990
            },
            {
              "id": 2934,
              "year": 1991
            },
            {
              "id": 2935,
              "year": 1992
            },
            {
              "id": 2937,
              "year": 1994
            },
            {
              "id": 2939,
              "year": 1996
            },
            {
              "id": 2940,
              "year": 1997
            },
            {
              "id": 968,
              "year": 1999
            },
            {
              "id": 1122,
              "year": 2000
            },
            {
              "id": 100000052,
              "year": 2001
            },
            {
              "id": 3823,
              "year": 2002
            },
            {
              "id": 100502747,
              "year": 2003
            },
            {
              "id": 100503182,
              "year": 2004
            },
            {
              "id": 100503252,
              "year": 2005
            },
            {
              "id": 100505447,
              "year": 2006
            },
            {
              "id": 100516802,
              "year": 2007
            },
            {
              "id": 100523473,
              "year": 2008
            },
            {
              "id": 100512899,
              "year": 2009
            },
            {
              "id": 100527889,
              "year": 2010
            },
            {
              "id": 100532289,
              "year": 2011
            },
            {
              "id": 100535589,
              "year": 2012
            },
            {
              "id": 200422743,
              "year": 2013
            },
            {
              "id": 200498569,
              "year": 2015
            },
            {
              "id": 200744620,
              "year": 2016
            },
            {
              "id": 401646226,
              "year": 2017
            }
          ]
        },
        {
          "id": "Chevrolet_Corvette_Stingray",
          "name": "Corvette Stingray",
          "niceName": "corvette-stingray",
          "years": [
            {
              "id": 100539195,
              "year": 2014
            }
          ]
        },
        {
          "id": "Chevrolet_Cruze",
          "name": "Cruze",
          "niceName": "cruze",
          "years": [
            {
              "id": 100525709,
              "year": 2011
            },
            {
              "id": 100535729,
              "year": 2012
            },
            {
              "id": 100534469,
              "year": 2013
            },
            {
              "id": 200443425,
              "year": 2014
            },
            {
              "id": 200717315,
              "year": 2015
            },
            {
              "id": 200492971,
              "year": 2016
            },
            {
              "id": 401640813,
              "year": 2017
            }
          ]
        },
        {
          "id": "Chevrolet_Cruze_Limited",
          "name": "Cruze Limited",
          "niceName": "cruze-limited",
          "years": [
            {
              "id": 200745924,
              "year": 2016
            }
          ]
        },
        {
          "id": "Chevrolet_Equinox",
          "name": "Equinox",
          "niceName": "equinox",
          "years": [
            {
              "id": 100503066,
              "year": 2005
            },
            {
              "id": 100506228,
              "year": 2006
            },
            {
              "id": 100516944,
              "year": 2007
            },
            {
              "id": 100520166,
              "year": 2008
            },
            {
              "id": 100525575,
              "year": 2009
            },
            {
              "id": 100526289,
              "year": 2010
            },
            {
              "id": 100532830,
              "year": 2011
            },
            {
              "id": 100536009,
              "year": 2012
            },
            {
              "id": 200428880,
              "year": 2013
            },
            {
              "id": 200478048,
              "year": 2014
            },
            {
              "id": 200708740,
              "year": 2015
            },
            {
              "id": 200724433,
              "year": 2016
            },
            {
              "id": 200767372,
              "year": 2017
            }
          ]
        },
        {
          "id": "Chevrolet_Express",
          "name": "Express",
          "niceName": "express",
          "years": [
            {
              "id": 2942,
              "year": 1996
            },
            {
              "id": 3471,
              "year": 1998
            },
            {
              "id": 3472,
              "year": 1999
            },
            {
              "id": 1092,
              "year": 2000
            },
            {
              "id": 100000045,
              "year": 2001
            },
            {
              "id": 3829,
              "year": 2002
            },
            {
              "id": 100502652,
              "year": 2003
            },
            {
              "id": 100503188,
              "year": 2004
            },
            {
              "id": 100503947,
              "year": 2005
            },
            {
              "id": 100506517,
              "year": 2006
            },
            {
              "id": 100519021,
              "year": 2007
            },
            {
              "id": 100524270,
              "year": 2008
            },
            {
              "id": 100526229,
              "year": 2009
            },
            {
              "id": 100528551,
              "year": 2010
            },
            {
              "id": 100533410,
              "year": 2011
            },
            {
              "id": 100535810,
              "year": 2012
            },
            {
              "id": 200426130,
              "year": 2013
            },
            {
              "id": 200474183,
              "year": 2014
            },
            {
              "id": 200717809,
              "year": 2015
            },
            {
              "id": 401626094,
              "year": 2016
            }
          ]
        },
        {
          "id": "Chevrolet_Express_Cargo",
          "name": "Express Cargo",
          "niceName": "express-cargo",
          "years": [
            {
              "id": 100503411,
              "year": 2000
            },
            {
              "id": 100000044,
              "year": 2001
            },
            {
              "id": 3830,
              "year": 2002
            },
            {
              "id": 100502653,
              "year": 2003
            },
            {
              "id": 100503189,
              "year": 2004
            },
            {
              "id": 100503953,
              "year": 2005
            },
            {
              "id": 100506630,
              "year": 2006
            },
            {
              "id": 100519022,
              "year": 2007
            },
            {
              "id": 100524350,
              "year": 2008
            },
            {
              "id": 100526249,
              "year": 2009
            },
            {
              "id": 100528629,
              "year": 2010
            },
            {
              "id": 100533451,
              "year": 2011
            },
            {
              "id": 100535811,
              "year": 2012
            },
            {
              "id": 200462766,
              "year": 2013
            },
            {
              "id": 200473163,
              "year": 2014
            },
            {
              "id": 200717810,
              "year": 2015
            },
            {
              "id": 401630644,
              "year": 2016
            }
          ]
        },
        {
          "id": "Chevrolet_HHR",
          "name": "HHR",
          "niceName": "hhr",
          "years": [
            {
              "id": 100504627,
              "year": 2006
            },
            {
              "id": 100516921,
              "year": 2007
            },
            {
              "id": 100520388,
              "year": 2008
            },
            {
              "id": 100525539,
              "year": 2009
            },
            {
              "id": 100528509,
              "year": 2010
            },
            {
              "id": 100532370,
              "year": 2011
            }
          ]
        },
        {
          "id": "Chevrolet_Impala",
          "name": "Impala",
          "niceName": "impala",
          "years": [
            {
              "id": 2943,
              "year": 1994
            },
            {
              "id": 2944,
              "year": 1995
            },
            {
              "id": 2945,
              "year": 1996
            },
            {
              "id": 1235,
              "year": 2000
            },
            {
              "id": 100000037,
              "year": 2001
            },
            {
              "id": 3807,
              "year": 2002
            },
            {
              "id": 100502748,
              "year": 2003
            },
            {
              "id": 100502927,
              "year": 2004
            },
            {
              "id": 100503871,
              "year": 2005
            },
            {
              "id": 100504702,
              "year": 2006
            },
            {
              "id": 100516801,
              "year": 2007
            },
            {
              "id": 100522829,
              "year": 2008
            },
            {
              "id": 100525836,
              "year": 2009
            },
            {
              "id": 100528371,
              "year": 2010
            },
            {
              "id": 100532270,
              "year": 2011
            },
            {
              "id": 100535829,
              "year": 2012
            },
            {
              "id": 200424234,
              "year": 2013
            },
            {
              "id": 100539411,
              "year": 2014
            },
            {
              "id": 200697399,
              "year": 2015
            },
            {
              "id": 200779605,
              "year": 2016
            },
            {
              "id": 401642197,
              "year": 2017
            }
          ]
        },
        {
          "id": "Chevrolet_Impala_Limited",
          "name": "Impala Limited",
          "niceName": "impala-limited",
          "years": [
            {
              "id": 200476095,
              "year": 2014
            },
            {
              "id": 200720470,
              "year": 2015
            }
          ]
        },
        {
          "id": "Chevrolet_Lumina",
          "name": "Lumina",
          "niceName": "lumina",
          "years": [
            {
              "id": 2946,
              "year": 1990
            },
            {
              "id": 817,
              "year": 1991
            },
            {
              "id": 2947,
              "year": 1992
            },
            {
              "id": 2948,
              "year": 1993
            },
            {
              "id": 2949,
              "year": 1994
            },
            {
              "id": 818,
              "year": 1995
            },
            {
              "id": 2950,
              "year": 1996
            },
            {
              "id": 2951,
              "year": 1997
            },
            {
              "id": 2952,
              "year": 1998
            },
            {
              "id": 3474,
              "year": 1999
            },
            {
              "id": 1127,
              "year": 2000
            },
            {
              "id": 100504071,
              "year": 2001
            }
          ]
        },
        {
          "id": "Chevrolet_Lumina_Minivan",
          "name": "Lumina Minivan",
          "niceName": "lumina-minivan",
          "years": [
            {
              "id": 2953,
              "year": 1990
            },
            {
              "id": 2668,
              "year": 1991
            },
            {
              "id": 2669,
              "year": 1992
            },
            {
              "id": 819,
              "year": 1993
            },
            {
              "id": 2670,
              "year": 1994
            },
            {
              "id": 2671,
              "year": 1995
            },
            {
              "id": 2672,
              "year": 1996
            }
          ]
        },
        {
          "id": "Chevrolet_Malibu",
          "name": "Malibu",
          "niceName": "malibu",
          "years": [
            {
              "id": 820,
              "year": 1997
            },
            {
              "id": 2673,
              "year": 1998
            },
            {
              "id": 3475,
              "year": 1999
            },
            {
              "id": 1101,
              "year": 2000
            },
            {
              "id": 100000043,
              "year": 2001
            },
            {
              "id": 3808,
              "year": 2002
            },
            {
              "id": 100502749,
              "year": 2003
            },
            {
              "id": 100502972,
              "year": 2004
            },
            {
              "id": 100503938,
              "year": 2005
            },
            {
              "id": 100506268,
              "year": 2006
            },
            {
              "id": 100512884,
              "year": 2007
            },
            {
              "id": 100519261,
              "year": 2008
            },
            {
              "id": 100525571,
              "year": 2009
            },
            {
              "id": 100528609,
              "year": 2010
            },
            {
              "id": 100532169,
              "year": 2011
            },
            {
              "id": 100532090,
              "year": 2012
            },
            {
              "id": 100534849,
              "year": 2013
            },
            {
              "id": 200468510,
              "year": 2014
            },
            {
              "id": 200697534,
              "year": 2015
            },
            {
              "id": 200731215,
              "year": 2016
            },
            {
              "id": 401657957,
              "year": 2017
            }
          ]
        },
        {
          "id": "Chevrolet_Malibu_Classic",
          "name": "Malibu Classic",
          "niceName": "malibu-classic",
          "years": [
            {
              "id": 100524370,
              "year": 2008
            }
          ]
        },
        {
          "id": "Chevrolet_Malibu_Hybrid",
          "name": "Malibu Hybrid",
          "niceName": "malibu-hybrid",
          "years": [
            {
              "id": 100524315,
              "year": 2008
            },
            {
              "id": 100525538,
              "year": 2009
            },
            {
              "id": 100528610,
              "year": 2010
            }
          ]
        },
        {
          "id": "Chevrolet_Malibu_Limited",
          "name": "Malibu Limited",
          "niceName": "malibu-limited",
          "years": [
            {
              "id": 200747325,
              "year": 2016
            }
          ]
        },
        {
          "id": "Chevrolet_Malibu_Maxx",
          "name": "Malibu Maxx",
          "niceName": "malibu-maxx",
          "years": [
            {
              "id": 100504222,
              "year": 2005
            },
            {
              "id": 100506269,
              "year": 2006
            },
            {
              "id": 100512885,
              "year": 2007
            }
          ]
        },
        {
          "id": "Chevrolet_Metro",
          "name": "Metro",
          "niceName": "metro",
          "years": [
            {
              "id": 2674,
              "year": 1998
            },
            {
              "id": 3476,
              "year": 1999
            },
            {
              "id": 1152,
              "year": 2000
            },
            {
              "id": 100504070,
              "year": 2001
            }
          ]
        },
        {
          "id": "Chevrolet_Monte_Carlo",
          "name": "Monte Carlo",
          "niceName": "monte-carlo",
          "years": [
            {
              "id": 821,
              "year": 1995
            },
            {
              "id": 2675,
              "year": 1996
            },
            {
              "id": 2676,
              "year": 1997
            },
            {
              "id": 2677,
              "year": 1998
            },
            {
              "id": 3477,
              "year": 1999
            },
            {
              "id": 1100,
              "year": 2000
            },
            {
              "id": 100000042,
              "year": 2001
            },
            {
              "id": 3824,
              "year": 2002
            },
            {
              "id": 100502750,
              "year": 2003
            },
            {
              "id": 100503157,
              "year": 2004
            },
            {
              "id": 100503154,
              "year": 2005
            },
            {
              "id": 100505465,
              "year": 2006
            },
            {
              "id": 100505183,
              "year": 2007
            }
          ]
        },
        {
          "id": "Chevrolet_Prizm",
          "name": "Prizm",
          "niceName": "prizm",
          "years": [
            {
              "id": 822,
              "year": 1998
            },
            {
              "id": 969,
              "year": 1999
            },
            {
              "id": 1153,
              "year": 2000
            },
            {
              "id": 100000041,
              "year": 2001
            },
            {
              "id": 100000349,
              "year": 2002
            }
          ]
        },
        {
          "id": "Chevrolet_R/V_3500_Series",
          "name": "R/V 3500 Series",
          "niceName": "rv-3500-series",
          "years": [
            {
              "id": 2716,
              "year": 1990
            },
            {
              "id": 2681,
              "year": 1991
            }
          ]
        },
        {
          "id": "Chevrolet_S_10",
          "name": "S-10",
          "niceName": "s-10",
          "years": [
            {
              "id": 2689,
              "year": 1990
            },
            {
              "id": 2690,
              "year": 1991
            },
            {
              "id": 824,
              "year": 1992
            },
            {
              "id": 2692,
              "year": 1994
            },
            {
              "id": 825,
              "year": 1995
            },
            {
              "id": 2693,
              "year": 1996
            },
            {
              "id": 3478,
              "year": 1997
            },
            {
              "id": 3479,
              "year": 1998
            },
            {
              "id": 970,
              "year": 1999
            },
            {
              "id": 1102,
              "year": 2000
            },
            {
              "id": 100000040,
              "year": 2001
            },
            {
              "id": 3858,
              "year": 2002
            },
            {
              "id": 100502752,
              "year": 2003
            },
            {
              "id": 100503220,
              "year": 2004
            }
          ]
        },
        {
          "id": "Chevrolet_S_10_Blazer",
          "name": "S-10 Blazer",
          "niceName": "s-10-blazer",
          "years": [
            {
              "id": 2683,
              "year": 1990
            },
            {
              "id": 2684,
              "year": 1991
            },
            {
              "id": 2685,
              "year": 1992
            },
            {
              "id": 2686,
              "year": 1993
            },
            {
              "id": 2687,
              "year": 1994
            }
          ]
        },
        {
          "id": "Chevrolet_SS",
          "name": "SS",
          "niceName": "ss",
          "years": [
            {
              "id": 200421909,
              "year": 2014
            },
            {
              "id": 200726517,
              "year": 2015
            },
            {
              "id": 401614830,
              "year": 2016
            }
          ]
        },
        {
          "id": "Chevrolet_SSR",
          "name": "SSR",
          "niceName": "ssr",
          "years": [
            {
              "id": 100502654,
              "year": 2003
            },
            {
              "id": 100503190,
              "year": 2004
            },
            {
              "id": 100503946,
              "year": 2005
            },
            {
              "id": 100506008,
              "year": 2006
            }
          ]
        },
        {
          "id": "Chevrolet_Silverado_1500",
          "name": "Silverado 1500",
          "niceName": "silverado-1500",
          "years": [
            {
              "id": 3480,
              "year": 1999
            },
            {
              "id": 500,
              "year": 2000
            },
            {
              "id": 100000039,
              "year": 2001
            },
            {
              "id": 3839,
              "year": 2002
            },
            {
              "id": 100502753,
              "year": 2003
            },
            {
              "id": 100503192,
              "year": 2004
            },
            {
              "id": 100503876,
              "year": 2005
            },
            {
              "id": 100506186,
              "year": 2006
            },
            {
              "id": 100505549,
              "year": 2007
            },
            {
              "id": 100524053,
              "year": 2008
            },
            {
              "id": 100526050,
              "year": 2009
            },
            {
              "id": 100529849,
              "year": 2010
            },
            {
              "id": 100532611,
              "year": 2011
            },
            {
              "id": 100536249,
              "year": 2012
            },
            {
              "id": 200430027,
              "year": 2013
            },
            {
              "id": 200429147,
              "year": 2014
            },
            {
              "id": 200712136,
              "year": 2015
            },
            {
              "id": 200746487,
              "year": 2016
            },
            {
              "id": 200731902,
              "year": 2017
            }
          ]
        },
        {
          "id": "Chevrolet_Silverado_1500_Classic",
          "name": "Silverado 1500 Classic",
          "niceName": "silverado-1500-classic",
          "years": [
            {
              "id": 100512759,
              "year": 2007
            }
          ]
        },
        {
          "id": "Chevrolet_Silverado_1500_Hybrid",
          "name": "Silverado 1500 Hybrid",
          "niceName": "silverado-1500-hybrid",
          "years": [
            {
              "id": 100526650,
              "year": 2009
            },
            {
              "id": 100529090,
              "year": 2010
            },
            {
              "id": 100533290,
              "year": 2011
            },
            {
              "id": 100536169,
              "year": 2012
            },
            {
              "id": 200445919,
              "year": 2013
            }
          ]
        },
        {
          "id": "Chevrolet_Silverado_1500HD",
          "name": "Silverado 1500HD",
          "niceName": "silverado-1500hd",
          "years": [
            {
              "id": 100000038,
              "year": 2001
            },
            {
              "id": 100502754,
              "year": 2003
            },
            {
              "id": 100504823,
              "year": 2005
            },
            {
              "id": 100506509,
              "year": 2006
            }
          ]
        },
        {
          "id": "Chevrolet_Silverado_1500HD_Classic",
          "name": "Silverado 1500HD Classic",
          "niceName": "silverado-1500hd-classic",
          "years": [
            {
              "id": 100512804,
              "year": 2007
            }
          ]
        },
        {
          "id": "Chevrolet_Silverado_2500",
          "name": "Silverado 2500",
          "niceName": "silverado-2500",
          "years": [
            {
              "id": 3481,
              "year": 1999
            },
            {
              "id": 100000057,
              "year": 2001
            },
            {
              "id": 3851,
              "year": 2002
            },
            {
              "id": 100502755,
              "year": 2003
            },
            {
              "id": 100503194,
              "year": 2004
            }
          ]
        },
        {
          "id": "Chevrolet_Silverado_2500HD",
          "name": "Silverado 2500HD",
          "niceName": "silverado-2500hd",
          "years": [
            {
              "id": 100000046,
              "year": 2001
            },
            {
              "id": 3852,
              "year": 2002
            },
            {
              "id": 100502756,
              "year": 2003
            },
            {
              "id": 100503195,
              "year": 2004
            },
            {
              "id": 100503944,
              "year": 2005
            },
            {
              "id": 100506187,
              "year": 2006
            },
            {
              "id": 100507702,
              "year": 2007
            },
            {
              "id": 100524170,
              "year": 2008
            },
            {
              "id": 100526009,
              "year": 2009
            },
            {
              "id": 100530109,
              "year": 2010
            },
            {
              "id": 100530511,
              "year": 2011
            },
            {
              "id": 100537569,
              "year": 2012
            },
            {
              "id": 200430630,
              "year": 2013
            },
            {
              "id": 200482409,
              "year": 2014
            },
            {
              "id": 200484132,
              "year": 2015
            },
            {
              "id": 401597676,
              "year": 2016
            },
            {
              "id": 401611387,
              "year": 2017
            }
          ]
        },
        {
          "id": "Chevrolet_Silverado_2500HD_Classic",
          "name": "Silverado 2500HD Classic",
          "niceName": "silverado-2500hd-classic",
          "years": [
            {
              "id": 100512819,
              "year": 2007
            }
          ]
        },
        {
          "id": "Chevrolet_Silverado_3500",
          "name": "Silverado 3500",
          "niceName": "silverado-3500",
          "years": [
            {
              "id": 100000048,
              "year": 2001
            },
            {
              "id": 100502757,
              "year": 2003
            },
            {
              "id": 100503273,
              "year": 2004
            },
            {
              "id": 100503943,
              "year": 2005
            },
            {
              "id": 100506468,
              "year": 2006
            }
          ]
        },
        {
          "id": "Chevrolet_Silverado_3500_Classic",
          "name": "Silverado 3500 Classic",
          "niceName": "silverado-3500-classic",
          "years": [
            {
              "id": 100512939,
              "year": 2007
            }
          ]
        },
        {
          "id": "Chevrolet_Silverado_3500HD",
          "name": "Silverado 3500HD",
          "niceName": "silverado-3500hd",
          "years": [
            {
              "id": 100507703,
              "year": 2007
            },
            {
              "id": 100524211,
              "year": 2008
            },
            {
              "id": 100526149,
              "year": 2009
            },
            {
              "id": 100530369,
              "year": 2010
            },
            {
              "id": 100531812,
              "year": 2011
            },
            {
              "id": 100537849,
              "year": 2012
            },
            {
              "id": 200430907,
              "year": 2013
            },
            {
              "id": 200489166,
              "year": 2014
            },
            {
              "id": 200484133,
              "year": 2015
            },
            {
              "id": 401612110,
              "year": 2016
            },
            {
              "id": 401611388,
              "year": 2017
            }
          ]
        },
        {
          "id": "Chevrolet_Sonic",
          "name": "Sonic",
          "niceName": "sonic",
          "years": [
            {
              "id": 100531229,
              "year": 2012
            },
            {
              "id": 200429481,
              "year": 2013
            },
            {
              "id": 200478049,
              "year": 2014
            },
            {
              "id": 200711648,
              "year": 2015
            },
            {
              "id": 401566568,
              "year": 2016
            },
            {
              "id": 401655480,
              "year": 2017
            }
          ]
        },
        {
          "id": "Chevrolet_Spark",
          "name": "Spark",
          "niceName": "spark",
          "years": [
            {
              "id": 100538189,
              "year": 2013
            },
            {
              "id": 200475673,
              "year": 2014
            },
            {
              "id": 200713752,
              "year": 2015
            },
            {
              "id": 200731216,
              "year": 2016
            },
            {
              "id": 401642030,
              "year": 2017
            }
          ]
        },
        {
          "id": "Chevrolet_Spark_EV",
          "name": "Spark EV",
          "niceName": "spark-ev",
          "years": [
            {
              "id": 200464102,
              "year": 2014
            },
            {
              "id": 200698913,
              "year": 2015
            },
            {
              "id": 401625835,
              "year": 2016
            }
          ]
        },
        {
          "id": "Chevrolet_Sportvan",
          "name": "Sportvan",
          "niceName": "sportvan",
          "years": [
            {
              "id": 2695,
              "year": 1990
            },
            {
              "id": 2696,
              "year": 1991
            },
            {
              "id": 2697,
              "year": 1992
            },
            {
              "id": 2698,
              "year": 1993
            },
            {
              "id": 2701,
              "year": 1996
            }
          ]
        },
        {
          "id": "Chevrolet_Suburban",
          "name": "Suburban",
          "niceName": "suburban",
          "years": [
            {
              "id": 2703,
              "year": 1990
            },
            {
              "id": 2704,
              "year": 1991
            },
            {
              "id": 2705,
              "year": 1992
            },
            {
              "id": 2706,
              "year": 1993
            },
            {
              "id": 2707,
              "year": 1994
            },
            {
              "id": 2708,
              "year": 1995
            },
            {
              "id": 826,
              "year": 1996
            },
            {
              "id": 2710,
              "year": 1998
            },
            {
              "id": 971,
              "year": 1999
            },
            {
              "id": 419,
              "year": 2000
            },
            {
              "id": 100000053,
              "year": 2001
            },
            {
              "id": 3859,
              "year": 2002
            },
            {
              "id": 100502758,
              "year": 2003
            },
            {
              "id": 100503196,
              "year": 2004
            },
            {
              "id": 100503949,
              "year": 2005
            },
            {
              "id": 100506506,
              "year": 2006
            },
            {
              "id": 100505228,
              "year": 2007
            },
            {
              "id": 100523557,
              "year": 2008
            },
            {
              "id": 100525576,
              "year": 2009
            },
            {
              "id": 100529209,
              "year": 2010
            },
            {
              "id": 100533129,
              "year": 2011
            },
            {
              "id": 100537150,
              "year": 2012
            },
            {
              "id": 200427770,
              "year": 2013
            },
            {
              "id": 200467471,
              "year": 2014
            },
            {
              "id": 200467556,
              "year": 2015
            },
            {
              "id": 200749036,
              "year": 2016
            },
            {
              "id": 401659726,
              "year": 2017
            }
          ]
        },
        {
          "id": "Chevrolet_Tahoe",
          "name": "Tahoe",
          "niceName": "tahoe",
          "years": [
            {
              "id": 827,
              "year": 1995
            },
            {
              "id": 2711,
              "year": 1996
            },
            {
              "id": 2712,
              "year": 1997
            },
            {
              "id": 2713,
              "year": 1998
            },
            {
              "id": 3482,
              "year": 1999
            },
            {
              "id": 418,
              "year": 2000
            },
            {
              "id": 100000054,
              "year": 2001
            },
            {
              "id": 3860,
              "year": 2002
            },
            {
              "id": 100502759,
              "year": 2003
            },
            {
              "id": 100503197,
              "year": 2004
            },
            {
              "id": 100503939,
              "year": 2005
            },
            {
              "id": 100506307,
              "year": 2006
            },
            {
              "id": 100505227,
              "year": 2007
            },
            {
              "id": 100520391,
              "year": 2008
            },
            {
              "id": 100525577,
              "year": 2009
            },
            {
              "id": 100529371,
              "year": 2010
            },
            {
              "id": 100532929,
              "year": 2011
            },
            {
              "id": 100536909,
              "year": 2012
            },
            {
              "id": 200426444,
              "year": 2013
            },
            {
              "id": 200467359,
              "year": 2014
            },
            {
              "id": 200467557,
              "year": 2015
            },
            {
              "id": 200749035,
              "year": 2016
            },
            {
              "id": 401658457,
              "year": 2017
            }
          ]
        },
        {
          "id": "Chevrolet_Tahoe_Hybrid",
          "name": "Tahoe Hybrid",
          "niceName": "tahoe-hybrid",
          "years": [
            {
              "id": 100524589,
              "year": 2008
            },
            {
              "id": 100525537,
              "year": 2009
            },
            {
              "id": 100529372,
              "year": 2010
            },
            {
              "id": 100532831,
              "year": 2011
            },
            {
              "id": 100537430,
              "year": 2012
            },
            {
              "id": 200426845,
              "year": 2013
            }
          ]
        },
        {
          "id": "Chevrolet_Tahoe_Limited/Z71",
          "name": "Tahoe Limited/Z71",
          "niceName": "tahoe-limitedz71",
          "years": [
            {
              "id": 394,
              "year": 2000
            }
          ]
        },
        {
          "id": "Chevrolet_Tracker",
          "name": "Tracker",
          "niceName": "tracker",
          "years": [
            {
              "id": 2714,
              "year": 1998
            },
            {
              "id": 3483,
              "year": 1999
            },
            {
              "id": 508,
              "year": 2000
            },
            {
              "id": 100000056,
              "year": 2001
            },
            {
              "id": 3857,
              "year": 2002
            },
            {
              "id": 100502760,
              "year": 2003
            },
            {
              "id": 100503219,
              "year": 2004
            }
          ]
        },
        {
          "id": "Chevrolet_TrailBlazer",
          "name": "TrailBlazer",
          "niceName": "trailblazer",
          "years": [
            {
              "id": 100000312,
              "year": 2002
            },
            {
              "id": 100502761,
              "year": 2003
            },
            {
              "id": 100503198,
              "year": 2004
            },
            {
              "id": 100503940,
              "year": 2005
            },
            {
              "id": 100506367,
              "year": 2006
            },
            {
              "id": 100505837,
              "year": 2007
            },
            {
              "id": 100523975,
              "year": 2008
            },
            {
              "id": 100525949,
              "year": 2009
            }
          ]
        },
        {
          "id": "Chevrolet_TrailBlazer_EXT",
          "name": "TrailBlazer EXT",
          "niceName": "trailblazer-ext",
          "years": [
            {
              "id": 100503199,
              "year": 2004
            },
            {
              "id": 100503941,
              "year": 2005
            },
            {
              "id": 100506368,
              "year": 2006
            }
          ]
        },
        {
          "id": "Chevrolet_Traverse",
          "name": "Traverse",
          "niceName": "traverse",
          "years": [
            {
              "id": 100523697,
              "year": 2009
            },
            {
              "id": 100528689,
              "year": 2010
            },
            {
              "id": 100532369,
              "year": 2011
            },
            {
              "id": 100535670,
              "year": 2012
            },
            {
              "id": 100539410,
              "year": 2013
            },
            {
              "id": 200474621,
              "year": 2014
            },
            {
              "id": 200696692,
              "year": 2015
            },
            {
              "id": 200738878,
              "year": 2016
            },
            {
              "id": 200732904,
              "year": 2017
            }
          ]
        },
        {
          "id": "Chevrolet_Trax",
          "name": "Trax",
          "niceName": "trax",
          "years": [
            {
              "id": 200694036,
              "year": 2015
            },
            {
              "id": 200779606,
              "year": 2016
            },
            {
              "id": 401660185,
              "year": 2017
            }
          ]
        },
        {
          "id": "Chevrolet_Uplander",
          "name": "Uplander",
          "niceName": "uplander",
          "years": [
            {
              "id": 100503277,
              "year": 2005
            },
            {
              "id": 100506565,
              "year": 2006
            },
            {
              "id": 100507522,
              "year": 2007
            },
            {
              "id": 100524373,
              "year": 2008
            }
          ]
        },
        {
          "id": "Chevrolet_Venture",
          "name": "Venture",
          "niceName": "venture",
          "years": [
            {
              "id": 828,
              "year": 1997
            },
            {
              "id": 2718,
              "year": 1998
            },
            {
              "id": 972,
              "year": 1999
            },
            {
              "id": 1116,
              "year": 2000
            },
            {
              "id": 100000055,
              "year": 2001
            },
            {
              "id": 3811,
              "year": 2002
            },
            {
              "id": 100502762,
              "year": 2003
            },
            {
              "id": 100503183,
              "year": 2004
            },
            {
              "id": 100504482,
              "year": 2005
            }
          ]
        },
        {
          "id": "Chevrolet_Volt",
          "name": "Volt",
          "niceName": "volt",
          "years": [
            {
              "id": 100523195,
              "year": 2011
            },
            {
              "id": 100535549,
              "year": 2012
            },
            {
              "id": 200424005,
              "year": 2013
            },
            {
              "id": 200485725,
              "year": 2014
            },
            {
              "id": 200704091,
              "year": 2015
            },
            {
              "id": 200707596,
              "year": 2016
            },
            {
              "id": 401626580,
              "year": 2017
            }
          ]
        }
      ]
    },
    {
      "id": 200003644,
      "name": "Chrysler",
      "niceName": "chrysler",
      "models": [
        {
          "id": "Chrysler_200",
          "name": "200",
          "niceName": "200",
          "years": [
            {
              "id": 100531270,
              "year": 2011
            },
            {
              "id": 100536409,
              "year": 2012
            },
            {
              "id": 200437792,
              "year": 2013
            },
            {
              "id": 200476132,
              "year": 2014
            },
            {
              "id": 200490591,
              "year": 2015
            },
            {
              "id": 200741377,
              "year": 2016
            },
            {
              "id": 401649771,
              "year": 2017
            }
          ]
        },
        {
          "id": "Chrysler_300",
          "name": "300",
          "niceName": "300",
          "years": [
            {
              "id": 100502967,
              "year": 2005
            },
            {
              "id": 100505607,
              "year": 2006
            },
            {
              "id": 100519561,
              "year": 2007
            },
            {
              "id": 100522346,
              "year": 2008
            },
            {
              "id": 100522710,
              "year": 2009
            },
            {
              "id": 100529194,
              "year": 2010
            },
            {
              "id": 100529291,
              "year": 2011
            },
            {
              "id": 100536390,
              "year": 2012
            },
            {
              "id": 200438656,
              "year": 2013
            },
            {
              "id": 200477946,
              "year": 2014
            },
            {
              "id": 200696407,
              "year": 2015
            },
            {
              "id": 200751747,
              "year": 2016
            },
            {
              "id": 401676925,
              "year": 2017
            }
          ]
        },
        {
          "id": "Chrysler_300M",
          "name": "300M",
          "niceName": "300m",
          "years": [
            {
              "id": 3484,
              "year": 1999
            },
            {
              "id": 369,
              "year": 2000
            },
            {
              "id": 100000063,
              "year": 2001
            },
            {
              "id": 3877,
              "year": 2002
            },
            {
              "id": 100502763,
              "year": 2003
            },
            {
              "id": 100503146,
              "year": 2004
            }
          ]
        },
        {
          "id": "Chrysler_Aspen",
          "name": "Aspen",
          "niceName": "aspen",
          "years": [
            {
              "id": 100506192,
              "year": 2007
            },
            {
              "id": 100523614,
              "year": 2008
            },
            {
              "id": 100525931,
              "year": 2009
            }
          ]
        },
        {
          "id": "Chrysler_Cirrus",
          "name": "Cirrus",
          "niceName": "cirrus",
          "years": [
            {
              "id": 2719,
              "year": 1995
            },
            {
              "id": 829,
              "year": 1996
            },
            {
              "id": 2720,
              "year": 1997
            },
            {
              "id": 2721,
              "year": 1998
            },
            {
              "id": 3485,
              "year": 1999
            },
            {
              "id": 1083,
              "year": 2000
            }
          ]
        },
        {
          "id": "Chrysler_Concorde",
          "name": "Concorde",
          "niceName": "concorde",
          "years": [
            {
              "id": 830,
              "year": 1993
            },
            {
              "id": 2722,
              "year": 1994
            },
            {
              "id": 2723,
              "year": 1995
            },
            {
              "id": 2724,
              "year": 1996
            },
            {
              "id": 831,
              "year": 1997
            },
            {
              "id": 2725,
              "year": 1998
            },
            {
              "id": 3486,
              "year": 1999
            },
            {
              "id": 1154,
              "year": 2000
            },
            {
              "id": 100000062,
              "year": 2001
            },
            {
              "id": 3878,
              "year": 2002
            },
            {
              "id": 100502764,
              "year": 2003
            },
            {
              "id": 100503147,
              "year": 2004
            }
          ]
        },
        {
          "id": "Chrysler_Crossfire",
          "name": "Crossfire",
          "niceName": "crossfire",
          "years": [
            {
              "id": 100502655,
              "year": 2004
            },
            {
              "id": 100503149,
              "year": 2005
            },
            {
              "id": 100506850,
              "year": 2006
            },
            {
              "id": 100523009,
              "year": 2007
            },
            {
              "id": 100524769,
              "year": 2008
            }
          ]
        },
        {
          "id": "Chrysler_Grand_Voyager",
          "name": "Grand Voyager",
          "niceName": "grand-voyager",
          "years": [
            {
              "id": 100503413,
              "year": 2000
            }
          ]
        },
        {
          "id": "Chrysler_Imperial",
          "name": "Imperial",
          "niceName": "imperial",
          "years": [
            {
              "id": 2520,
              "year": 1992
            },
            {
              "id": 2521,
              "year": 1993
            }
          ]
        },
        {
          "id": "Chrysler_LHS",
          "name": "LHS",
          "niceName": "lhs",
          "years": [
            {
              "id": 2522,
              "year": 1994
            },
            {
              "id": 833,
              "year": 1995
            },
            {
              "id": 2523,
              "year": 1996
            },
            {
              "id": 2524,
              "year": 1997
            },
            {
              "id": 973,
              "year": 1999
            },
            {
              "id": 1155,
              "year": 2000
            },
            {
              "id": 100000061,
              "year": 2001
            }
          ]
        },
        {
          "id": "Chrysler_Le_Baron",
          "name": "Le Baron",
          "niceName": "le-baron",
          "years": [
            {
              "id": 2525,
              "year": 1990
            },
            {
              "id": 2526,
              "year": 1991
            },
            {
              "id": 2527,
              "year": 1992
            },
            {
              "id": 835,
              "year": 1993
            },
            {
              "id": 2528,
              "year": 1994
            },
            {
              "id": 2529,
              "year": 1995
            }
          ]
        },
        {
          "id": "Chrysler_New_Yorker",
          "name": "New Yorker",
          "niceName": "new-yorker",
          "years": [
            {
              "id": 2530,
              "year": 1990
            },
            {
              "id": 2531,
              "year": 1991
            },
            {
              "id": 2532,
              "year": 1992
            },
            {
              "id": 837,
              "year": 1993
            },
            {
              "id": 2533,
              "year": 1994
            },
            {
              "id": 2534,
              "year": 1995
            },
            {
              "id": 2535,
              "year": 1996
            }
          ]
        },
        {
          "id": "Chrysler_PT_Cruiser",
          "name": "PT Cruiser",
          "niceName": "pt-cruiser",
          "years": [
            {
              "id": 100000058,
              "year": 2001
            },
            {
              "id": 3727,
              "year": 2002
            },
            {
              "id": 100502690,
              "year": 2003
            },
            {
              "id": 100502689,
              "year": 2004
            },
            {
              "id": 100503806,
              "year": 2005
            },
            {
              "id": 100505885,
              "year": 2006
            },
            {
              "id": 100519284,
              "year": 2007
            },
            {
              "id": 100523554,
              "year": 2008
            },
            {
              "id": 100525933,
              "year": 2009
            },
            {
              "id": 100529491,
              "year": 2010
            }
          ]
        },
        {
          "id": "Chrysler_Pacifica",
          "name": "Pacifica",
          "niceName": "pacifica",
          "years": [
            {
              "id": 100502656,
              "year": 2004
            },
            {
              "id": 100504327,
              "year": 2005
            },
            {
              "id": 100506365,
              "year": 2006
            },
            {
              "id": 100519241,
              "year": 2007
            },
            {
              "id": 100523749,
              "year": 2008
            },
            {
              "id": 200728424,
              "year": 2017
            }
          ]
        },
        {
          "id": "Chrysler_Prowler",
          "name": "Prowler",
          "niceName": "prowler",
          "years": [
            {
              "id": 100000306,
              "year": 2001
            },
            {
              "id": 3880,
              "year": 2002
            }
          ]
        },
        {
          "id": "Chrysler_Sebring",
          "name": "Sebring",
          "niceName": "sebring",
          "years": [
            {
              "id": 2536,
              "year": 1995
            },
            {
              "id": 2537,
              "year": 1996
            },
            {
              "id": 2538,
              "year": 1997
            },
            {
              "id": 838,
              "year": 1998
            },
            {
              "id": 3487,
              "year": 1999
            },
            {
              "id": 1157,
              "year": 2000
            },
            {
              "id": 100000060,
              "year": 2001
            },
            {
              "id": 3881,
              "year": 2002
            },
            {
              "id": 100502766,
              "year": 2003
            },
            {
              "id": 100503118,
              "year": 2004
            },
            {
              "id": 100505022,
              "year": 2005
            },
            {
              "id": 100506560,
              "year": 2006
            },
            {
              "id": 100505987,
              "year": 2007
            },
            {
              "id": 100520389,
              "year": 2008
            },
            {
              "id": 100525932,
              "year": 2009
            },
            {
              "id": 100529642,
              "year": 2010
            }
          ]
        },
        {
          "id": "Chrysler_TC",
          "name": "TC",
          "niceName": "tc",
          "years": [
            {
              "id": 2540,
              "year": 1990
            },
            {
              "id": 839,
              "year": 1991
            }
          ]
        },
        {
          "id": "Chrysler_Town_and_Country",
          "name": "Town and Country",
          "niceName": "town-and-country",
          "years": [
            {
              "id": 2541,
              "year": 1990
            },
            {
              "id": 2542,
              "year": 1991
            },
            {
              "id": 840,
              "year": 1992
            },
            {
              "id": 2543,
              "year": 1993
            },
            {
              "id": 2544,
              "year": 1994
            },
            {
              "id": 2545,
              "year": 1995
            },
            {
              "id": 841,
              "year": 1996
            },
            {
              "id": 2546,
              "year": 1997
            },
            {
              "id": 2547,
              "year": 1998
            },
            {
              "id": 3489,
              "year": 1999
            },
            {
              "id": 1158,
              "year": 2000
            },
            {
              "id": 100000064,
              "year": 2001
            },
            {
              "id": 3882,
              "year": 2002
            },
            {
              "id": 100502767,
              "year": 2003
            },
            {
              "id": 100503327,
              "year": 2004
            },
            {
              "id": 100504118,
              "year": 2005
            },
            {
              "id": 100506485,
              "year": 2006
            },
            {
              "id": 100519562,
              "year": 2007
            },
            {
              "id": 100506513,
              "year": 2008
            },
            {
              "id": 100525869,
              "year": 2009
            },
            {
              "id": 100529210,
              "year": 2010
            },
            {
              "id": 100531271,
              "year": 2011
            },
            {
              "id": 100536669,
              "year": 2012
            },
            {
              "id": 200436309,
              "year": 2013
            },
            {
              "id": 200476049,
              "year": 2014
            },
            {
              "id": 200704317,
              "year": 2015
            },
            {
              "id": 200696428,
              "year": 2016
            }
          ]
        },
        {
          "id": "Chrysler_Voyager",
          "name": "Voyager",
          "niceName": "voyager",
          "years": [
            {
              "id": 431,
              "year": 2000
            },
            {
              "id": 100000059,
              "year": 2001
            },
            {
              "id": 3883,
              "year": 2002
            },
            {
              "id": 100502768,
              "year": 2003
            }
          ]
        }
      ]
    },
    {
      "id": 200312185,
      "name": "Daewoo",
      "niceName": "daewoo",
      "models": [
        {
          "id": "Daewoo_Lanos",
          "name": "Lanos",
          "niceName": "lanos",
          "years": [
            {
              "id": 1226,
              "year": 1999
            },
            {
              "id": 955,
              "year": 2000
            },
            {
              "id": 100000065,
              "year": 2001
            },
            {
              "id": 100027,
              "year": 2002
            }
          ]
        },
        {
          "id": "Daewoo_Leganza",
          "name": "Leganza",
          "niceName": "leganza",
          "years": [
            {
              "id": 1227,
              "year": 1999
            },
            {
              "id": 1097,
              "year": 2000
            },
            {
              "id": 100000066,
              "year": 2001
            },
            {
              "id": 100029,
              "year": 2002
            }
          ]
        },
        {
          "id": "Daewoo_Nubira",
          "name": "Nubira",
          "niceName": "nubira",
          "years": [
            {
              "id": 493,
              "year": 1999
            },
            {
              "id": 956,
              "year": 2000
            },
            {
              "id": 100000067,
              "year": 2001
            },
            {
              "id": 100028,
              "year": 2002
            }
          ]
        }
      ]
    },
    {
      "id": 200009788,
      "name": "Dodge",
      "niceName": "dodge",
      "models": [
        {
          "id": "Dodge_Avenger",
          "name": "Avenger",
          "niceName": "avenger",
          "years": [
            {
              "id": 2548,
              "year": 1995
            },
            {
              "id": 2549,
              "year": 1996
            },
            {
              "id": 2550,
              "year": 1997
            },
            {
              "id": 2551,
              "year": 1998
            },
            {
              "id": 3490,
              "year": 1999
            },
            {
              "id": 1144,
              "year": 2000
            },
            {
              "id": 100507620,
              "year": 2008
            },
            {
              "id": 100526030,
              "year": 2009
            },
            {
              "id": 100529634,
              "year": 2010
            },
            {
              "id": 100531272,
              "year": 2011
            },
            {
              "id": 100536411,
              "year": 2012
            },
            {
              "id": 200436355,
              "year": 2013
            },
            {
              "id": 200475801,
              "year": 2014
            }
          ]
        },
        {
          "id": "Dodge_Caliber",
          "name": "Caliber",
          "niceName": "caliber",
          "years": [
            {
              "id": 100505405,
              "year": 2007
            },
            {
              "id": 100523477,
              "year": 2008
            },
            {
              "id": 100525934,
              "year": 2009
            },
            {
              "id": 100529635,
              "year": 2010
            },
            {
              "id": 100533629,
              "year": 2011
            },
            {
              "id": 100536410,
              "year": 2012
            }
          ]
        },
        {
          "id": "Dodge_Caravan",
          "name": "Caravan",
          "niceName": "caravan",
          "years": [
            {
              "id": 2553,
              "year": 1990
            },
            {
              "id": 2554,
              "year": 1991
            },
            {
              "id": 2555,
              "year": 1992
            },
            {
              "id": 843,
              "year": 1993
            },
            {
              "id": 2556,
              "year": 1994
            },
            {
              "id": 2557,
              "year": 1995
            },
            {
              "id": 844,
              "year": 1996
            },
            {
              "id": 2558,
              "year": 1997
            },
            {
              "id": 3491,
              "year": 1999
            },
            {
              "id": 1059,
              "year": 2000
            },
            {
              "id": 100000075,
              "year": 2001
            },
            {
              "id": 3884,
              "year": 2002
            },
            {
              "id": 100502769,
              "year": 2003
            },
            {
              "id": 100503556,
              "year": 2004
            },
            {
              "id": 100504119,
              "year": 2005
            },
            {
              "id": 100506406,
              "year": 2006
            },
            {
              "id": 100519564,
              "year": 2007
            }
          ]
        },
        {
          "id": "Dodge_Challenger",
          "name": "Challenger",
          "niceName": "challenger",
          "years": [
            {
              "id": 100506205,
              "year": 2008
            },
            {
              "id": 100525509,
              "year": 2009
            },
            {
              "id": 100529211,
              "year": 2010
            },
            {
              "id": 100531889,
              "year": 2011
            },
            {
              "id": 100532569,
              "year": 2012
            },
            {
              "id": 200438999,
              "year": 2013
            },
            {
              "id": 200478085,
              "year": 2014
            },
            {
              "id": 200678191,
              "year": 2015
            },
            {
              "id": 200782175,
              "year": 2016
            },
            {
              "id": 401676479,
              "year": 2017
            }
          ]
        },
        {
          "id": "Dodge_Charger",
          "name": "Charger",
          "niceName": "charger",
          "years": [
            {
              "id": 100504262,
              "year": 2006
            },
            {
              "id": 100519301,
              "year": 2007
            },
            {
              "id": 100523491,
              "year": 2008
            },
            {
              "id": 100525871,
              "year": 2009
            },
            {
              "id": 100529212,
              "year": 2010
            },
            {
              "id": 100529290,
              "year": 2011
            },
            {
              "id": 100536289,
              "year": 2012
            },
            {
              "id": 200436977,
              "year": 2013
            },
            {
              "id": 200477061,
              "year": 2014
            },
            {
              "id": 200696410,
              "year": 2015
            },
            {
              "id": 200751340,
              "year": 2016
            },
            {
              "id": 401671902,
              "year": 2017
            }
          ]
        },
        {
          "id": "Dodge_Colt",
          "name": "Colt",
          "niceName": "colt",
          "years": [
            {
              "id": 845,
              "year": 1990
            },
            {
              "id": 2561,
              "year": 1991
            },
            {
              "id": 2562,
              "year": 1992
            },
            {
              "id": 846,
              "year": 1993
            },
            {
              "id": 2563,
              "year": 1994
            }
          ]
        },
        {
          "id": "Dodge_Dakota",
          "name": "Dakota",
          "niceName": "dakota",
          "years": [
            {
              "id": 847,
              "year": 1990
            },
            {
              "id": 2565,
              "year": 1991
            },
            {
              "id": 2566,
              "year": 1992
            },
            {
              "id": 2567,
              "year": 1993
            },
            {
              "id": 2568,
              "year": 1994
            },
            {
              "id": 2571,
              "year": 1997
            },
            {
              "id": 848,
              "year": 1998
            },
            {
              "id": 3492,
              "year": 1999
            },
            {
              "id": 413,
              "year": 2000
            },
            {
              "id": 100000074,
              "year": 2001
            },
            {
              "id": 3885,
              "year": 2002
            },
            {
              "id": 100502770,
              "year": 2003
            },
            {
              "id": 100503588,
              "year": 2004
            },
            {
              "id": 100502944,
              "year": 2005
            },
            {
              "id": 100506366,
              "year": 2006
            },
            {
              "id": 100519222,
              "year": 2007
            },
            {
              "id": 100522347,
              "year": 2008
            },
            {
              "id": 100526331,
              "year": 2010
            }
          ]
        },
        {
          "id": "Dodge_Dart",
          "name": "Dart",
          "niceName": "dart",
          "years": [
            {
              "id": 100538989,
              "year": 2013
            },
            {
              "id": 200492871,
              "year": 2014
            },
            {
              "id": 200704561,
              "year": 2015
            },
            {
              "id": 200738444,
              "year": 2016
            }
          ]
        },
        {
          "id": "Dodge_Daytona",
          "name": "Daytona",
          "niceName": "daytona",
          "years": [
            {
              "id": 2573,
              "year": 1990
            },
            {
              "id": 849,
              "year": 1991
            },
            {
              "id": 2574,
              "year": 1992
            },
            {
              "id": 2575,
              "year": 1993
            }
          ]
        },
        {
          "id": "Dodge_Durango",
          "name": "Durango",
          "niceName": "durango",
          "years": [
            {
              "id": 2576,
              "year": 1998
            },
            {
              "id": 974,
              "year": 1999
            },
            {
              "id": 378,
              "year": 2000
            },
            {
              "id": 100000073,
              "year": 2001
            },
            {
              "id": 100000509,
              "year": 2002
            },
            {
              "id": 100502771,
              "year": 2003
            },
            {
              "id": 100502946,
              "year": 2004
            },
            {
              "id": 100504963,
              "year": 2005
            },
            {
              "id": 100506620,
              "year": 2006
            },
            {
              "id": 100519563,
              "year": 2007
            },
            {
              "id": 100505529,
              "year": 2008
            },
            {
              "id": 100525936,
              "year": 2009
            },
            {
              "id": 100531274,
              "year": 2011
            },
            {
              "id": 100536689,
              "year": 2012
            },
            {
              "id": 200439581,
              "year": 2013
            },
            {
              "id": 200466041,
              "year": 2014
            },
            {
              "id": 200715841,
              "year": 2015
            },
            {
              "id": 401598014,
              "year": 2016
            },
            {
              "id": 401647934,
              "year": 2017
            }
          ]
        },
        {
          "id": "Dodge_Dynasty",
          "name": "Dynasty",
          "niceName": "dynasty",
          "years": [
            {
              "id": 2578,
              "year": 1990
            },
            {
              "id": 851,
              "year": 1991
            },
            {
              "id": 2579,
              "year": 1992
            },
            {
              "id": 2580,
              "year": 1993
            }
          ]
        },
        {
          "id": "Dodge_Grand_Caravan",
          "name": "Grand Caravan",
          "niceName": "grand-caravan",
          "years": [
            {
              "id": 100503329,
              "year": 1990
            },
            {
              "id": 100503337,
              "year": 1991
            },
            {
              "id": 100503343,
              "year": 1992
            },
            {
              "id": 100503350,
              "year": 1993
            },
            {
              "id": 100503355,
              "year": 1994
            },
            {
              "id": 100503361,
              "year": 1995
            },
            {
              "id": 100503370,
              "year": 1996
            },
            {
              "id": 3493,
              "year": 1997
            },
            {
              "id": 3494,
              "year": 1998
            },
            {
              "id": 975,
              "year": 1999
            },
            {
              "id": 100503414,
              "year": 2000
            },
            {
              "id": 100000072,
              "year": 2001
            },
            {
              "id": 3887,
              "year": 2002
            },
            {
              "id": 100502772,
              "year": 2003
            },
            {
              "id": 100503557,
              "year": 2004
            },
            {
              "id": 100504120,
              "year": 2005
            },
            {
              "id": 100506405,
              "year": 2006
            },
            {
              "id": 100519565,
              "year": 2007
            },
            {
              "id": 100506516,
              "year": 2008
            },
            {
              "id": 100525870,
              "year": 2009
            },
            {
              "id": 100529195,
              "year": 2010
            },
            {
              "id": 100533849,
              "year": 2011
            },
            {
              "id": 100536649,
              "year": 2012
            },
            {
              "id": 200436459,
              "year": 2013
            },
            {
              "id": 200476800,
              "year": 2014
            },
            {
              "id": 200704869,
              "year": 2015
            },
            {
              "id": 200741043,
              "year": 2016
            },
            {
              "id": 401647873,
              "year": 2017
            }
          ]
        },
        {
          "id": "Dodge_Intrepid",
          "name": "Intrepid",
          "niceName": "intrepid",
          "years": [
            {
              "id": 852,
              "year": 1993
            },
            {
              "id": 2581,
              "year": 1994
            },
            {
              "id": 2582,
              "year": 1995
            },
            {
              "id": 853,
              "year": 1996
            },
            {
              "id": 2583,
              "year": 1997
            },
            {
              "id": 2453,
              "year": 1998
            },
            {
              "id": 3495,
              "year": 1999
            },
            {
              "id": 512,
              "year": 2000
            },
            {
              "id": 100000071,
              "year": 2001
            },
            {
              "id": 3888,
              "year": 2002
            },
            {
              "id": 100502773,
              "year": 2003
            },
            {
              "id": 100503145,
              "year": 2004
            }
          ]
        },
        {
          "id": "Dodge_Journey",
          "name": "Journey",
          "niceName": "journey",
          "years": [
            {
              "id": 100522597,
              "year": 2009
            },
            {
              "id": 100529213,
              "year": 2010
            },
            {
              "id": 100531273,
              "year": 2011
            },
            {
              "id": 100537009,
              "year": 2012
            },
            {
              "id": 200437197,
              "year": 2013
            },
            {
              "id": 200480108,
              "year": 2014
            },
            {
              "id": 200700336,
              "year": 2015
            },
            {
              "id": 200741339,
              "year": 2016
            },
            {
              "id": 401654841,
              "year": 2017
            }
          ]
        },
        {
          "id": "Dodge_Magnum",
          "name": "Magnum",
          "niceName": "magnum",
          "years": [
            {
              "id": 100503119,
              "year": 2005
            },
            {
              "id": 100505606,
              "year": 2006
            },
            {
              "id": 100519302,
              "year": 2007
            },
            {
              "id": 100523490,
              "year": 2008
            }
          ]
        },
        {
          "id": "Dodge_Monaco",
          "name": "Monaco",
          "niceName": "monaco",
          "years": [
            {
              "id": 2455,
              "year": 1990
            },
            {
              "id": 2456,
              "year": 1991
            }
          ]
        },
        {
          "id": "Dodge_Neon",
          "name": "Neon",
          "niceName": "neon",
          "years": [
            {
              "id": 2457,
              "year": 1995
            },
            {
              "id": 2458,
              "year": 1996
            },
            {
              "id": 855,
              "year": 1997
            },
            {
              "id": 2459,
              "year": 1998
            },
            {
              "id": 3496,
              "year": 1999
            },
            {
              "id": 3497,
              "year": 2000
            },
            {
              "id": 100000069,
              "year": 2001
            },
            {
              "id": 3889,
              "year": 2002
            },
            {
              "id": 100502774,
              "year": 2003
            },
            {
              "id": 100503558,
              "year": 2004
            },
            {
              "id": 100505010,
              "year": 2005
            }
          ]
        },
        {
          "id": "Dodge_Nitro",
          "name": "Nitro",
          "niceName": "nitro",
          "years": [
            {
              "id": 100506515,
              "year": 2007
            },
            {
              "id": 100523750,
              "year": 2008
            },
            {
              "id": 100525935,
              "year": 2009
            },
            {
              "id": 100529637,
              "year": 2010
            },
            {
              "id": 100532989,
              "year": 2011
            }
          ]
        },
        {
          "id": "Dodge_Omni",
          "name": "Omni",
          "niceName": "omni",
          "years": [
            {
              "id": 856,
              "year": 1990
            }
          ]
        },
        {
          "id": "Dodge_RAM_150",
          "name": "RAM 150",
          "niceName": "ram-150",
          "years": [
            {
              "id": 2462,
              "year": 1990
            },
            {
              "id": 2463,
              "year": 1991
            },
            {
              "id": 2464,
              "year": 1992
            }
          ]
        },
        {
          "id": "Dodge_RAM_250",
          "name": "RAM 250",
          "niceName": "ram-250",
          "years": [
            {
              "id": 2467,
              "year": 1990
            },
            {
              "id": 2468,
              "year": 1991
            },
            {
              "id": 857,
              "year": 1992
            },
            {
              "id": 2469,
              "year": 1993
            }
          ]
        },
        {
          "id": "Dodge_RAM_350",
          "name": "RAM 350",
          "niceName": "ram-350",
          "years": [
            {
              "id": 2471,
              "year": 1990
            },
            {
              "id": 2472,
              "year": 1991
            },
            {
              "id": 2473,
              "year": 1992
            },
            {
              "id": 2474,
              "year": 1993
            }
          ]
        },
        {
          "id": "Dodge_Ram_50_Pickup",
          "name": "Ram 50 Pickup",
          "niceName": "ram-50-pickup",
          "years": [
            {
              "id": 2492,
              "year": 1990
            },
            {
              "id": 2493,
              "year": 1991
            },
            {
              "id": 2494,
              "year": 1992
            },
            {
              "id": 2495,
              "year": 1993
            }
          ]
        },
        {
          "id": "Dodge_Ram_Cargo",
          "name": "Ram Cargo",
          "niceName": "ram-cargo",
          "years": [
            {
              "id": 100000273,
              "year": 2001
            },
            {
              "id": 3890,
              "year": 2002
            },
            {
              "id": 100502775,
              "year": 2003
            }
          ]
        },
        {
          "id": "Dodge_Ram_Pickup_1500",
          "name": "Ram Pickup 1500",
          "niceName": "ram-pickup-1500",
          "years": [
            {
              "id": 858,
              "year": 1996
            },
            {
              "id": 2480,
              "year": 1998
            },
            {
              "id": 976,
              "year": 1999
            },
            {
              "id": 1052,
              "year": 2000
            },
            {
              "id": 100000070,
              "year": 2001
            },
            {
              "id": 3891,
              "year": 2002
            },
            {
              "id": 100502776,
              "year": 2003
            },
            {
              "id": 100503161,
              "year": 2004
            },
            {
              "id": 100504883,
              "year": 2005
            },
            {
              "id": 100506426,
              "year": 2006
            },
            {
              "id": 100519381,
              "year": 2007
            },
            {
              "id": 100524090,
              "year": 2008
            },
            {
              "id": 100523200,
              "year": 2009
            },
            {
              "id": 100529638,
              "year": 2010
            }
          ]
        },
        {
          "id": "Dodge_Ram_Pickup_2500",
          "name": "Ram Pickup 2500",
          "niceName": "ram-pickup-2500",
          "years": [
            {
              "id": 2482,
              "year": 1995
            },
            {
              "id": 2483,
              "year": 1996
            },
            {
              "id": 2485,
              "year": 1998
            },
            {
              "id": 3498,
              "year": 1999
            },
            {
              "id": 1051,
              "year": 2000
            },
            {
              "id": 100000078,
              "year": 2001
            },
            {
              "id": 100000369,
              "year": 2002
            },
            {
              "id": 100502657,
              "year": 2003
            },
            {
              "id": 100503500,
              "year": 2004
            },
            {
              "id": 100504884,
              "year": 2005
            },
            {
              "id": 100506427,
              "year": 2006
            },
            {
              "id": 100519382,
              "year": 2007
            },
            {
              "id": 100524089,
              "year": 2008
            },
            {
              "id": 100526317,
              "year": 2009
            },
            {
              "id": 100529639,
              "year": 2010
            }
          ]
        },
        {
          "id": "Dodge_Ram_Pickup_3500",
          "name": "Ram Pickup 3500",
          "niceName": "ram-pickup-3500",
          "years": [
            {
              "id": 100000370,
              "year": 2002
            },
            {
              "id": 100502658,
              "year": 2003
            },
            {
              "id": 100503501,
              "year": 2004
            },
            {
              "id": 100504885,
              "year": 2005
            },
            {
              "id": 100506428,
              "year": 2006
            },
            {
              "id": 100519383,
              "year": 2007
            },
            {
              "id": 100524091,
              "year": 2008
            },
            {
              "id": 100526318,
              "year": 2009
            },
            {
              "id": 100529640,
              "year": 2010
            }
          ]
        },
        {
          "id": "Dodge_Ram_Van",
          "name": "Ram Van",
          "niceName": "ram-van",
          "years": [
            {
              "id": 2497,
              "year": 1990
            },
            {
              "id": 2498,
              "year": 1991
            },
            {
              "id": 2499,
              "year": 1992
            },
            {
              "id": 2500,
              "year": 1993
            },
            {
              "id": 2501,
              "year": 1994
            },
            {
              "id": 2502,
              "year": 1995
            },
            {
              "id": 2503,
              "year": 1996
            },
            {
              "id": 2504,
              "year": 1997
            },
            {
              "id": 3500,
              "year": 1998
            },
            {
              "id": 3501,
              "year": 1999
            },
            {
              "id": 954,
              "year": 2000
            }
          ]
        },
        {
          "id": "Dodge_Ram_Wagon",
          "name": "Ram Wagon",
          "niceName": "ram-wagon",
          "years": [
            {
              "id": 2507,
              "year": 1991
            },
            {
              "id": 2508,
              "year": 1992
            },
            {
              "id": 2509,
              "year": 1993
            },
            {
              "id": 2510,
              "year": 1994
            },
            {
              "id": 2511,
              "year": 1995
            },
            {
              "id": 2512,
              "year": 1996
            },
            {
              "id": 2513,
              "year": 1997
            },
            {
              "id": 3503,
              "year": 1999
            },
            {
              "id": 1088,
              "year": 2000
            },
            {
              "id": 100000080,
              "year": 2001
            },
            {
              "id": 100000371,
              "year": 2002
            }
          ]
        },
        {
          "id": "Dodge_Ramcharger",
          "name": "Ramcharger",
          "niceName": "ramcharger",
          "years": [
            {
              "id": 2515,
              "year": 1990
            },
            {
              "id": 2516,
              "year": 1991
            },
            {
              "id": 2517,
              "year": 1992
            }
          ]
        },
        {
          "id": "Dodge_SRT_Viper",
          "name": "SRT Viper",
          "niceName": "srt-viper",
          "years": [
            {
              "id": 200474028,
              "year": 2013
            },
            {
              "id": 200474057,
              "year": 2014
            }
          ]
        },
        {
          "id": "Dodge_Shadow",
          "name": "Shadow",
          "niceName": "shadow",
          "years": [
            {
              "id": 2383,
              "year": 1990
            },
            {
              "id": 2384,
              "year": 1991
            },
            {
              "id": 2385,
              "year": 1993
            },
            {
              "id": 2386,
              "year": 1994
            }
          ]
        },
        {
          "id": "Dodge_Spirit",
          "name": "Spirit",
          "niceName": "spirit",
          "years": [
            {
              "id": 2388,
              "year": 1990
            },
            {
              "id": 860,
              "year": 1991
            },
            {
              "id": 2389,
              "year": 1992
            },
            {
              "id": 2390,
              "year": 1993
            },
            {
              "id": 2391,
              "year": 1994
            },
            {
              "id": 861,
              "year": 1995
            }
          ]
        },
        {
          "id": "Dodge_Sprinter",
          "name": "Sprinter",
          "niceName": "sprinter",
          "years": [
            {
              "id": 100503601,
              "year": 2004
            },
            {
              "id": 100505185,
              "year": 2005
            },
            {
              "id": 100506799,
              "year": 2006
            },
            {
              "id": 100522406,
              "year": 2007
            },
            {
              "id": 100524629,
              "year": 2008
            },
            {
              "id": 100525689,
              "year": 2009
            }
          ]
        },
        {
          "id": "Dodge_Sprinter_Cargo",
          "name": "Sprinter Cargo",
          "niceName": "sprinter-cargo",
          "years": [
            {
              "id": 100503144,
              "year": 2003
            },
            {
              "id": 100503602,
              "year": 2004
            },
            {
              "id": 100505186,
              "year": 2005
            },
            {
              "id": 100506800,
              "year": 2006
            },
            {
              "id": 100522407,
              "year": 2007
            },
            {
              "id": 100524630,
              "year": 2008
            },
            {
              "id": 100525690,
              "year": 2009
            }
          ]
        },
        {
          "id": "Dodge_Stealth",
          "name": "Stealth",
          "niceName": "stealth",
          "years": [
            {
              "id": 2392,
              "year": 1991
            },
            {
              "id": 2393,
              "year": 1992
            },
            {
              "id": 862,
              "year": 1993
            },
            {
              "id": 2394,
              "year": 1994
            },
            {
              "id": 2395,
              "year": 1995
            },
            {
              "id": 863,
              "year": 1996
            }
          ]
        },
        {
          "id": "Dodge_Stratus",
          "name": "Stratus",
          "niceName": "stratus",
          "years": [
            {
              "id": 2396,
              "year": 1995
            },
            {
              "id": 2397,
              "year": 1996
            },
            {
              "id": 2398,
              "year": 1997
            },
            {
              "id": 864,
              "year": 1998
            },
            {
              "id": 977,
              "year": 1999
            },
            {
              "id": 1159,
              "year": 2000
            },
            {
              "id": 100000077,
              "year": 2001
            },
            {
              "id": 100000372,
              "year": 2002
            },
            {
              "id": 100502778,
              "year": 2003
            },
            {
              "id": 100503117,
              "year": 2004
            },
            {
              "id": 100505012,
              "year": 2005
            },
            {
              "id": 100506619,
              "year": 2006
            }
          ]
        },
        {
          "id": "Dodge_Viper",
          "name": "Viper",
          "niceName": "viper",
          "years": [
            {
              "id": 2399,
              "year": 1992
            },
            {
              "id": 865,
              "year": 1993
            },
            {
              "id": 2400,
              "year": 1994
            },
            {
              "id": 2401,
              "year": 1995
            },
            {
              "id": 2402,
              "year": 1996
            },
            {
              "id": 2403,
              "year": 1997
            },
            {
              "id": 2404,
              "year": 1998
            },
            {
              "id": 3502,
              "year": 1999
            },
            {
              "id": 421,
              "year": 2000
            },
            {
              "id": 100000079,
              "year": 2001
            },
            {
              "id": 100000373,
              "year": 2002
            },
            {
              "id": 100502659,
              "year": 2003
            },
            {
              "id": 100503559,
              "year": 2004
            },
            {
              "id": 100505013,
              "year": 2005
            },
            {
              "id": 100506559,
              "year": 2006
            },
            {
              "id": 100522348,
              "year": 2008
            },
            {
              "id": 100525729,
              "year": 2009
            },
            {
              "id": 100529641,
              "year": 2010
            },
            {
              "id": 200722526,
              "year": 2015
            },
            {
              "id": 200734566,
              "year": 2016
            },
            {
              "id": 401649364,
              "year": 2017
            }
          ]
        }
      ]
    },
    {
      "id": 200347865,
      "name": "Eagle",
      "niceName": "eagle",
      "models": [
        {
          "id": "Eagle_Premier",
          "name": "Premier",
          "niceName": "premier",
          "years": [
            {
              "id": 2406,
              "year": 1990
            },
            {
              "id": 2407,
              "year": 1991
            },
            {
              "id": 867,
              "year": 1992
            }
          ]
        },
        {
          "id": "Eagle_Summit",
          "name": "Summit",
          "niceName": "summit",
          "years": [
            {
              "id": 2409,
              "year": 1990
            },
            {
              "id": 2410,
              "year": 1991
            },
            {
              "id": 868,
              "year": 1992
            },
            {
              "id": 2411,
              "year": 1993
            },
            {
              "id": 2412,
              "year": 1994
            },
            {
              "id": 869,
              "year": 1995
            },
            {
              "id": 2413,
              "year": 1996
            }
          ]
        },
        {
          "id": "Eagle_Talon",
          "name": "Talon",
          "niceName": "talon",
          "years": [
            {
              "id": 2414,
              "year": 1990
            },
            {
              "id": 870,
              "year": 1991
            },
            {
              "id": 2415,
              "year": 1992
            },
            {
              "id": 2416,
              "year": 1993
            },
            {
              "id": 871,
              "year": 1994
            },
            {
              "id": 2417,
              "year": 1995
            },
            {
              "id": 2418,
              "year": 1996
            },
            {
              "id": 2419,
              "year": 1997
            }
          ]
        },
        {
          "id": "Eagle_Vision",
          "name": "Vision",
          "niceName": "vision",
          "years": [
            {
              "id": 2421,
              "year": 1993
            },
            {
              "id": 872,
              "year": 1994
            },
            {
              "id": 2422,
              "year": 1995
            },
            {
              "id": 2423,
              "year": 1996
            },
            {
              "id": 873,
              "year": 1997
            }
          ]
        }
      ]
    },
    {
      "id": 200033022,
      "name": "FIAT",
      "niceName": "fiat",
      "models": [
        {
          "id": "FIAT_124_Spider",
          "name": "124 Spider",
          "niceName": "124-spider",
          "years": [
            {
              "id": 200742453,
              "year": 2017
            }
          ]
        },
        {
          "id": "FIAT_500",
          "name": "500",
          "niceName": "500",
          "years": [
            {
              "id": 100532699,
              "year": 2012
            },
            {
              "id": 200440779,
              "year": 2013
            },
            {
              "id": 200493793,
              "year": 2014
            },
            {
              "id": 200700812,
              "year": 2015
            },
            {
              "id": 401572290,
              "year": 2016
            },
            {
              "id": 401654792,
              "year": 2017
            }
          ]
        },
        {
          "id": "FIAT_500L",
          "name": "500L",
          "niceName": "500l",
          "years": [
            {
              "id": 200461884,
              "year": 2014
            },
            {
              "id": 200724260,
              "year": 2015
            },
            {
              "id": 401573921,
              "year": 2016
            },
            {
              "id": 401660159,
              "year": 2017
            }
          ]
        },
        {
          "id": "FIAT_500X",
          "name": "500X",
          "niceName": "500x",
          "years": [
            {
              "id": 200721405,
              "year": 2016
            },
            {
              "id": 401665073,
              "year": 2017
            }
          ]
        },
        {
          "id": "FIAT_500e",
          "name": "500e",
          "niceName": "500e",
          "years": [
            {
              "id": 200459014,
              "year": 2013
            },
            {
              "id": 200495814,
              "year": 2014
            },
            {
              "id": 200700793,
              "year": 2015
            },
            {
              "id": 401566592,
              "year": 2016
            },
            {
              "id": 401655398,
              "year": 2017
            }
          ]
        }
      ]
    },
    {
      "id": 200006023,
      "name": "Ferrari",
      "niceName": "ferrari",
      "models": [
        {
          "id": "Ferrari_360",
          "name": "360",
          "niceName": "360",
          "years": [
            {
              "id": 100000274,
              "year": 2001
            },
            {
              "id": 100502599,
              "year": 2002
            },
            {
              "id": 100503086,
              "year": 2003
            },
            {
              "id": 100503785,
              "year": 2004
            }
          ]
        },
        {
          "id": "Ferrari_430_Scuderia",
          "name": "430 Scuderia",
          "niceName": "430-scuderia",
          "years": [
            {
              "id": 100520246,
              "year": 2008
            },
            {
              "id": 100527253,
              "year": 2009
            }
          ]
        },
        {
          "id": "Ferrari_456M",
          "name": "456M",
          "niceName": "456m",
          "years": [
            {
              "id": 100000275,
              "year": 2001
            },
            {
              "id": 100502594,
              "year": 2002
            },
            {
              "id": 100503087,
              "year": 2003
            }
          ]
        },
        {
          "id": "Ferrari_458_Italia",
          "name": "458 Italia",
          "niceName": "458-italia",
          "years": [
            {
              "id": 100533590,
              "year": 2010
            },
            {
              "id": 100528870,
              "year": 2011
            },
            {
              "id": 100532092,
              "year": 2012
            },
            {
              "id": 200713299,
              "year": 2013
            },
            {
              "id": 200713329,
              "year": 2014
            },
            {
              "id": 200725112,
              "year": 2015
            }
          ]
        },
        {
          "id": "Ferrari_550",
          "name": "550",
          "niceName": "550",
          "years": [
            {
              "id": 100000276,
              "year": 2001
            }
          ]
        },
        {
          "id": "Ferrari_575M",
          "name": "575M",
          "niceName": "575m",
          "years": [
            {
              "id": 100502609,
              "year": 2002
            },
            {
              "id": 100503088,
              "year": 2003
            },
            {
              "id": 100503786,
              "year": 2004
            }
          ]
        },
        {
          "id": "Ferrari_599",
          "name": "599",
          "niceName": "599",
          "years": [
            {
              "id": 100506026,
              "year": 2007
            },
            {
              "id": 100523976,
              "year": 2008
            },
            {
              "id": 100527252,
              "year": 2009
            },
            {
              "id": 100533630,
              "year": 2010
            },
            {
              "id": 100531750,
              "year": 2011
            }
          ]
        },
        {
          "id": "Ferrari_612_Scaglietti",
          "name": "612 Scaglietti",
          "niceName": "612-scaglietti",
          "years": [
            {
              "id": 100503524,
              "year": 2005
            },
            {
              "id": 100507399,
              "year": 2006
            },
            {
              "id": 100524094,
              "year": 2007
            },
            {
              "id": 100526530,
              "year": 2008
            },
            {
              "id": 100527254,
              "year": 2009
            },
            {
              "id": 100533589,
              "year": 2010
            },
            {
              "id": 100539189,
              "year": 2011
            }
          ]
        },
        {
          "id": "Ferrari_California",
          "name": "California",
          "niceName": "california",
          "years": [
            {
              "id": 100524989,
              "year": 2009
            },
            {
              "id": 100531249,
              "year": 2010
            },
            {
              "id": 100539192,
              "year": 2011
            },
            {
              "id": 100539270,
              "year": 2012
            },
            {
              "id": 200713309,
              "year": 2013
            },
            {
              "id": 200725030,
              "year": 2014
            }
          ]
        },
        {
          "id": "Ferrari_California_T",
          "name": "California T",
          "niceName": "california-t",
          "years": [
            {
              "id": 200725168,
              "year": 2015
            }
          ]
        },
        {
          "id": "Ferrari_Enzo",
          "name": "Enzo",
          "niceName": "enzo",
          "years": [
            {
              "id": 100503326,
              "year": 2003
            }
          ]
        },
        {
          "id": "Ferrari_F12_Berlinetta",
          "name": "F12 Berlinetta",
          "niceName": "f12-berlinetta",
          "years": [
            {
              "id": 100539275,
              "year": 2013
            },
            {
              "id": 200724989,
              "year": 2014
            },
            {
              "id": 200725113,
              "year": 2015
            }
          ]
        },
        {
          "id": "Ferrari_F430",
          "name": "F430",
          "niceName": "f430",
          "years": [
            {
              "id": 100505745,
              "year": 2005
            },
            {
              "id": 100506859,
              "year": 2006
            },
            {
              "id": 100524058,
              "year": 2007
            },
            {
              "id": 100525658,
              "year": 2008
            },
            {
              "id": 100527269,
              "year": 2009
            }
          ]
        },
        {
          "id": "Ferrari_FF",
          "name": "FF",
          "niceName": "ff",
          "years": [
            {
              "id": 100534289,
              "year": 2012
            },
            {
              "id": 200724925,
              "year": 2013
            },
            {
              "id": 200724983,
              "year": 2014
            },
            {
              "id": 200725114,
              "year": 2015
            }
          ]
        },
        {
          "id": "Ferrari_Superamerica",
          "name": "Superamerica",
          "niceName": "superamerica",
          "years": [
            {
              "id": 100505385,
              "year": 2005
            }
          ]
        }
      ]
    },
    {
      "id": 200005745,
      "name": "Fisker",
      "niceName": "fisker",
      "models": [
        {
          "id": "Fisker_Karma",
          "name": "Karma",
          "niceName": "karma",
          "years": [
            {
              "id": 100536490,
              "year": 2012
            }
          ]
        }
      ]
    },
    {
      "id": 200005143,
      "name": "Ford",
      "niceName": "ford",
      "models": [
        {
          "id": "Ford_Aerostar",
          "name": "Aerostar",
          "niceName": "aerostar",
          "years": [
            {
              "id": 2425,
              "year": 1990
            },
            {
              "id": 2426,
              "year": 1991
            },
            {
              "id": 874,
              "year": 1992
            },
            {
              "id": 2427,
              "year": 1993
            },
            {
              "id": 2428,
              "year": 1994
            },
            {
              "id": 875,
              "year": 1995
            },
            {
              "id": 2429,
              "year": 1996
            },
            {
              "id": 2430,
              "year": 1997
            }
          ]
        },
        {
          "id": "Ford_Aspire",
          "name": "Aspire",
          "niceName": "aspire",
          "years": [
            {
              "id": 876,
              "year": 1994
            },
            {
              "id": 2431,
              "year": 1995
            },
            {
              "id": 2432,
              "year": 1996
            },
            {
              "id": 2433,
              "year": 1997
            }
          ]
        },
        {
          "id": "Ford_Bronco",
          "name": "Bronco",
          "niceName": "bronco",
          "years": [
            {
              "id": 2435,
              "year": 1990
            },
            {
              "id": 2436,
              "year": 1991
            },
            {
              "id": 2437,
              "year": 1992
            },
            {
              "id": 2438,
              "year": 1993
            },
            {
              "id": 2439,
              "year": 1994
            },
            {
              "id": 733,
              "year": 1995
            },
            {
              "id": 2440,
              "year": 1996
            }
          ]
        },
        {
          "id": "Ford_Bronco_II",
          "name": "Bronco II",
          "niceName": "bronco-ii",
          "years": [
            {
              "id": 2442,
              "year": 1990
            }
          ]
        },
        {
          "id": "Ford_C_Max_Energi",
          "name": "C-Max Energi",
          "niceName": "c-max-energi",
          "years": [
            {
              "id": 200429530,
              "year": 2013
            },
            {
              "id": 200493192,
              "year": 2014
            },
            {
              "id": 200704980,
              "year": 2015
            },
            {
              "id": 200741402,
              "year": 2016
            },
            {
              "id": 401671899,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ford_C_Max_Hybrid",
          "name": "C-Max Hybrid",
          "niceName": "c-max-hybrid",
          "years": [
            {
              "id": 100537689,
              "year": 2013
            },
            {
              "id": 200493257,
              "year": 2014
            },
            {
              "id": 200705031,
              "year": 2015
            },
            {
              "id": 200742267,
              "year": 2016
            },
            {
              "id": 401672228,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ford_Contour",
          "name": "Contour",
          "niceName": "contour",
          "years": [
            {
              "id": 734,
              "year": 1995
            },
            {
              "id": 2443,
              "year": 1996
            },
            {
              "id": 2444,
              "year": 1997
            },
            {
              "id": 735,
              "year": 1998
            },
            {
              "id": 3506,
              "year": 1999
            },
            {
              "id": 503,
              "year": 2000
            }
          ]
        },
        {
          "id": "Ford_Contour_SVT",
          "name": "Contour SVT",
          "niceName": "contour-svt",
          "years": [
            {
              "id": 100504004,
              "year": 1998
            },
            {
              "id": 100503920,
              "year": 1999
            },
            {
              "id": 1073,
              "year": 2000
            }
          ]
        },
        {
          "id": "Ford_Crown_Victoria",
          "name": "Crown Victoria",
          "niceName": "crown-victoria",
          "years": [
            {
              "id": 2447,
              "year": 1992
            },
            {
              "id": 2448,
              "year": 1993
            },
            {
              "id": 737,
              "year": 1994
            },
            {
              "id": 2449,
              "year": 1995
            },
            {
              "id": 2450,
              "year": 1996
            },
            {
              "id": 2451,
              "year": 1997
            },
            {
              "id": 2452,
              "year": 1998
            },
            {
              "id": 3507,
              "year": 1999
            },
            {
              "id": 1105,
              "year": 2000
            },
            {
              "id": 100000096,
              "year": 2001
            },
            {
              "id": 3767,
              "year": 2002
            },
            {
              "id": 100502620,
              "year": 2003
            },
            {
              "id": 100503530,
              "year": 2004
            },
            {
              "id": 100504782,
              "year": 2005
            },
            {
              "id": 100506425,
              "year": 2006
            },
            {
              "id": 100516841,
              "year": 2007
            },
            {
              "id": 100522991,
              "year": 2008
            },
            {
              "id": 100525712,
              "year": 2009
            },
            {
              "id": 100528510,
              "year": 2010
            },
            {
              "id": 100531949,
              "year": 2011
            }
          ]
        },
        {
          "id": "Ford_E_150",
          "name": "E-150",
          "niceName": "e-150",
          "years": [
            {
              "id": 2317,
              "year": 1990
            },
            {
              "id": 2318,
              "year": 1991
            },
            {
              "id": 2319,
              "year": 1992
            },
            {
              "id": 2320,
              "year": 1993
            },
            {
              "id": 2321,
              "year": 1994
            },
            {
              "id": 2322,
              "year": 1995
            },
            {
              "id": 2323,
              "year": 1996
            },
            {
              "id": 2324,
              "year": 1997
            }
          ]
        },
        {
          "id": "Ford_E_250",
          "name": "E-250",
          "niceName": "e-250",
          "years": [
            {
              "id": 2327,
              "year": 1990
            },
            {
              "id": 2328,
              "year": 1991
            },
            {
              "id": 2329,
              "year": 1992
            },
            {
              "id": 2330,
              "year": 1993
            },
            {
              "id": 2331,
              "year": 1994
            },
            {
              "id": 2332,
              "year": 1995
            },
            {
              "id": 2333,
              "year": 1996
            },
            {
              "id": 1056,
              "year": 1997
            },
            {
              "id": 1055,
              "year": 1998
            }
          ]
        },
        {
          "id": "Ford_E_350",
          "name": "E-350",
          "niceName": "e-350",
          "years": [
            {
              "id": 2335,
              "year": 1990
            },
            {
              "id": 2336,
              "year": 1991
            },
            {
              "id": 2337,
              "year": 1992
            },
            {
              "id": 2338,
              "year": 1993
            },
            {
              "id": 2339,
              "year": 1994
            },
            {
              "id": 2340,
              "year": 1995
            },
            {
              "id": 2341,
              "year": 1996
            },
            {
              "id": 2342,
              "year": 1997
            },
            {
              "id": 2343,
              "year": 1998
            }
          ]
        },
        {
          "id": "Ford_E_Series_Van",
          "name": "E-Series Van",
          "niceName": "e-series-van",
          "years": [
            {
              "id": 100530429,
              "year": 2010
            },
            {
              "id": 100531689,
              "year": 2011
            },
            {
              "id": 100537969,
              "year": 2012
            },
            {
              "id": 200434047,
              "year": 2013
            },
            {
              "id": 200498090,
              "year": 2014
            }
          ]
        },
        {
          "id": "Ford_E_Series_Wagon",
          "name": "E-Series Wagon",
          "niceName": "e-series-wagon",
          "years": [
            {
              "id": 100530430,
              "year": 2010
            },
            {
              "id": 100531709,
              "year": 2011
            },
            {
              "id": 100537869,
              "year": 2012
            },
            {
              "id": 200444204,
              "year": 2013
            }
          ]
        },
        {
          "id": "Ford_Econoline_Cargo",
          "name": "Econoline Cargo",
          "niceName": "econoline-cargo",
          "years": [
            {
              "id": 3508,
              "year": 1999
            },
            {
              "id": 1106,
              "year": 2000
            },
            {
              "id": 100000277,
              "year": 2001
            },
            {
              "id": 100000364,
              "year": 2002
            },
            {
              "id": 100502779,
              "year": 2003
            },
            {
              "id": 100503305,
              "year": 2004
            },
            {
              "id": 100505110,
              "year": 2005
            },
            {
              "id": 100505645,
              "year": 2006
            },
            {
              "id": 100520146,
              "year": 2007
            },
            {
              "id": 100524213,
              "year": 2008
            },
            {
              "id": 100525350,
              "year": 2009
            }
          ]
        },
        {
          "id": "Ford_Econoline_Wagon",
          "name": "Econoline Wagon",
          "niceName": "econoline-wagon",
          "years": [
            {
              "id": 3509,
              "year": 1999
            },
            {
              "id": 504,
              "year": 2000
            },
            {
              "id": 100000098,
              "year": 2001
            },
            {
              "id": 100000362,
              "year": 2002
            },
            {
              "id": 100502780,
              "year": 2003
            },
            {
              "id": 100503306,
              "year": 2004
            },
            {
              "id": 100505091,
              "year": 2005
            },
            {
              "id": 100505646,
              "year": 2006
            },
            {
              "id": 100520147,
              "year": 2007
            },
            {
              "id": 100524214,
              "year": 2008
            },
            {
              "id": 100525349,
              "year": 2009
            }
          ]
        },
        {
          "id": "Ford_Edge",
          "name": "Edge",
          "niceName": "edge",
          "years": [
            {
              "id": 100506881,
              "year": 2007
            },
            {
              "id": 100524175,
              "year": 2008
            },
            {
              "id": 100526609,
              "year": 2009
            },
            {
              "id": 100527730,
              "year": 2010
            },
            {
              "id": 100522473,
              "year": 2011
            },
            {
              "id": 100536369,
              "year": 2012
            },
            {
              "id": 100539193,
              "year": 2013
            },
            {
              "id": 200492822,
              "year": 2014
            },
            {
              "id": 200495939,
              "year": 2015
            },
            {
              "id": 401589394,
              "year": 2016
            },
            {
              "id": 401670676,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ford_Escape",
          "name": "Escape",
          "niceName": "escape",
          "years": [
            {
              "id": 100000094,
              "year": 2001
            },
            {
              "id": 3847,
              "year": 2002
            },
            {
              "id": 100502706,
              "year": 2003
            },
            {
              "id": 100502959,
              "year": 2004
            },
            {
              "id": 100503272,
              "year": 2005
            },
            {
              "id": 100505827,
              "year": 2006
            },
            {
              "id": 100512879,
              "year": 2007
            },
            {
              "id": 100507621,
              "year": 2008
            },
            {
              "id": 100525531,
              "year": 2009
            },
            {
              "id": 100528350,
              "year": 2010
            },
            {
              "id": 100532049,
              "year": 2011
            },
            {
              "id": 100532950,
              "year": 2012
            },
            {
              "id": 100535529,
              "year": 2013
            },
            {
              "id": 200466870,
              "year": 2014
            },
            {
              "id": 200702166,
              "year": 2015
            },
            {
              "id": 200733433,
              "year": 2016
            },
            {
              "id": 200735321,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ford_Escape_Hybrid",
          "name": "Escape Hybrid",
          "niceName": "escape-hybrid",
          "years": [
            {
              "id": 100505828,
              "year": 2006
            },
            {
              "id": 100512880,
              "year": 2007
            },
            {
              "id": 100522450,
              "year": 2008
            },
            {
              "id": 100525532,
              "year": 2009
            },
            {
              "id": 100528351,
              "year": 2010
            },
            {
              "id": 100532069,
              "year": 2011
            }
          ]
        },
        {
          "id": "Ford_Escort",
          "name": "Escort",
          "niceName": "escort",
          "years": [
            {
              "id": 2345,
              "year": 1990
            },
            {
              "id": 2346,
              "year": 1991
            },
            {
              "id": 2347,
              "year": 1992
            },
            {
              "id": 2348,
              "year": 1993
            },
            {
              "id": 2349,
              "year": 1994
            },
            {
              "id": 2350,
              "year": 1995
            },
            {
              "id": 738,
              "year": 1996
            },
            {
              "id": 2351,
              "year": 1997
            },
            {
              "id": 2352,
              "year": 1998
            },
            {
              "id": 3515,
              "year": 1999
            },
            {
              "id": 1112,
              "year": 2000
            },
            {
              "id": 100000099,
              "year": 2001
            },
            {
              "id": 3842,
              "year": 2002
            },
            {
              "id": 100502781,
              "year": 2003
            }
          ]
        },
        {
          "id": "Ford_Excursion",
          "name": "Excursion",
          "niceName": "excursion",
          "years": [
            {
              "id": 1245,
              "year": 2000
            },
            {
              "id": 100000100,
              "year": 2001
            },
            {
              "id": 100000351,
              "year": 2002
            },
            {
              "id": 100502702,
              "year": 2003
            },
            {
              "id": 100503325,
              "year": 2004
            },
            {
              "id": 100505109,
              "year": 2005
            }
          ]
        },
        {
          "id": "Ford_Expedition",
          "name": "Expedition",
          "niceName": "expedition",
          "years": [
            {
              "id": 739,
              "year": 1997
            },
            {
              "id": 2353,
              "year": 1998
            },
            {
              "id": 3516,
              "year": 1999
            },
            {
              "id": 1120,
              "year": 2000
            },
            {
              "id": 100000101,
              "year": 2001
            },
            {
              "id": 100000358,
              "year": 2002
            },
            {
              "id": 100502615,
              "year": 2003
            },
            {
              "id": 100503307,
              "year": 2004
            },
            {
              "id": 100505108,
              "year": 2005
            },
            {
              "id": 100505768,
              "year": 2006
            },
            {
              "id": 100505831,
              "year": 2007
            },
            {
              "id": 100523391,
              "year": 2008
            },
            {
              "id": 100526449,
              "year": 2009
            },
            {
              "id": 100528470,
              "year": 2010
            },
            {
              "id": 100531811,
              "year": 2011
            },
            {
              "id": 100537030,
              "year": 2012
            },
            {
              "id": 200433748,
              "year": 2013
            },
            {
              "id": 200485427,
              "year": 2014
            },
            {
              "id": 200495938,
              "year": 2015
            },
            {
              "id": 200734913,
              "year": 2016
            },
            {
              "id": 401639337,
              "year": 2017
            },
            {
              "id": 401582312,
              "year": 2018
            }
          ]
        },
        {
          "id": "Ford_Expedition_EL",
          "name": "Expedition EL",
          "niceName": "expedition-el",
          "years": [
            {
              "id": 100506149,
              "year": 2007
            },
            {
              "id": 100523449,
              "year": 2008
            },
            {
              "id": 100526450,
              "year": 2009
            }
          ]
        },
        {
          "id": "Ford_Explorer",
          "name": "Explorer",
          "niceName": "explorer",
          "years": [
            {
              "id": 2354,
              "year": 1991
            },
            {
              "id": 2355,
              "year": 1992
            },
            {
              "id": 740,
              "year": 1993
            },
            {
              "id": 2356,
              "year": 1994
            },
            {
              "id": 2357,
              "year": 1995
            },
            {
              "id": 741,
              "year": 1996
            },
            {
              "id": 2359,
              "year": 1998
            },
            {
              "id": 3517,
              "year": 1999
            },
            {
              "id": 1107,
              "year": 2000
            },
            {
              "id": 100000091,
              "year": 2001
            },
            {
              "id": 100000090,
              "year": 2002
            },
            {
              "id": 100502782,
              "year": 2003
            },
            {
              "id": 100503308,
              "year": 2004
            },
            {
              "id": 100505008,
              "year": 2005
            },
            {
              "id": 100505985,
              "year": 2006
            },
            {
              "id": 100519281,
              "year": 2007
            },
            {
              "id": 100523529,
              "year": 2008
            },
            {
              "id": 100525874,
              "year": 2009
            },
            {
              "id": 100527809,
              "year": 2010
            },
            {
              "id": 100524796,
              "year": 2011
            },
            {
              "id": 100535949,
              "year": 2012
            },
            {
              "id": 100539160,
              "year": 2013
            },
            {
              "id": 200467050,
              "year": 2014
            },
            {
              "id": 200699340,
              "year": 2015
            },
            {
              "id": 200693542,
              "year": 2016
            },
            {
              "id": 401638388,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ford_Explorer_Sport",
          "name": "Explorer Sport",
          "niceName": "explorer-sport",
          "years": [
            {
              "id": 100000092,
              "year": 2001
            },
            {
              "id": 100000360,
              "year": 2002
            },
            {
              "id": 100502704,
              "year": 2003
            }
          ]
        },
        {
          "id": "Ford_Explorer_Sport_Trac",
          "name": "Explorer Sport Trac",
          "niceName": "explorer-sport-trac",
          "years": [
            {
              "id": 100000093,
              "year": 2001
            },
            {
              "id": 100000365,
              "year": 2002
            },
            {
              "id": 100502705,
              "year": 2003
            },
            {
              "id": 100503310,
              "year": 2004
            },
            {
              "id": 100505009,
              "year": 2005
            },
            {
              "id": 100505388,
              "year": 2007
            },
            {
              "id": 100524109,
              "year": 2008
            },
            {
              "id": 100525875,
              "year": 2009
            },
            {
              "id": 100527810,
              "year": 2010
            }
          ]
        },
        {
          "id": "Ford_F_150",
          "name": "F-150",
          "niceName": "f-150",
          "years": [
            {
              "id": 2361,
              "year": 1990
            },
            {
              "id": 2362,
              "year": 1991
            },
            {
              "id": 2363,
              "year": 1992
            },
            {
              "id": 2365,
              "year": 1994
            },
            {
              "id": 2366,
              "year": 1995
            },
            {
              "id": 2367,
              "year": 1996
            },
            {
              "id": 2368,
              "year": 1997
            },
            {
              "id": 2369,
              "year": 1998
            },
            {
              "id": 979,
              "year": 1999
            },
            {
              "id": 1108,
              "year": 2000
            },
            {
              "id": 100000089,
              "year": 2001
            },
            {
              "id": 3843,
              "year": 2002
            },
            {
              "id": 100502783,
              "year": 2003
            },
            {
              "id": 100502974,
              "year": 2004
            },
            {
              "id": 100504965,
              "year": 2005
            },
            {
              "id": 100506563,
              "year": 2006
            },
            {
              "id": 100519062,
              "year": 2007
            },
            {
              "id": 100523752,
              "year": 2008
            },
            {
              "id": 100523032,
              "year": 2009
            },
            {
              "id": 100526529,
              "year": 2010
            },
            {
              "id": 100531609,
              "year": 2011
            },
            {
              "id": 100538129,
              "year": 2012
            },
            {
              "id": 200432704,
              "year": 2013
            },
            {
              "id": 200489498,
              "year": 2014
            },
            {
              "id": 200470590,
              "year": 2015
            },
            {
              "id": 401582329,
              "year": 2016
            },
            {
              "id": 200724856,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ford_F_150_Heritage",
          "name": "F-150 Heritage",
          "niceName": "f-150-heritage",
          "years": [
            {
              "id": 100503536,
              "year": 2004
            }
          ]
        },
        {
          "id": "Ford_F_150_SVT_Lightning",
          "name": "F-150 SVT Lightning",
          "niceName": "f-150-svt-lightning",
          "years": [
            {
              "id": 100504003,
              "year": 1993
            },
            {
              "id": 100504000,
              "year": 1994
            },
            {
              "id": 1229,
              "year": 1999
            }
          ]
        },
        {
          "id": "Ford_F_250",
          "name": "F-250",
          "niceName": "f-250",
          "years": [
            {
              "id": 2371,
              "year": 1990
            },
            {
              "id": 2372,
              "year": 1991
            },
            {
              "id": 2373,
              "year": 1992
            },
            {
              "id": 2376,
              "year": 1995
            },
            {
              "id": 2377,
              "year": 1996
            },
            {
              "id": 1068,
              "year": 1997
            },
            {
              "id": 2378,
              "year": 1998
            },
            {
              "id": 3518,
              "year": 1999
            }
          ]
        },
        {
          "id": "Ford_F_250_Super_Duty",
          "name": "F-250 Super Duty",
          "niceName": "f-250-super-duty",
          "years": [
            {
              "id": 3519,
              "year": 1999
            },
            {
              "id": 1109,
              "year": 2000
            },
            {
              "id": 100000102,
              "year": 2001
            },
            {
              "id": 3832,
              "year": 2002
            },
            {
              "id": 100502785,
              "year": 2003
            },
            {
              "id": 100503313,
              "year": 2004
            },
            {
              "id": 100503636,
              "year": 2005
            },
            {
              "id": 100505825,
              "year": 2006
            },
            {
              "id": 100515479,
              "year": 2007
            },
            {
              "id": 100522306,
              "year": 2008
            },
            {
              "id": 100526313,
              "year": 2009
            },
            {
              "id": 100529609,
              "year": 2010
            },
            {
              "id": 100527429,
              "year": 2011
            },
            {
              "id": 100536051,
              "year": 2012
            },
            {
              "id": 200442203,
              "year": 2013
            },
            {
              "id": 200481421,
              "year": 2014
            },
            {
              "id": 200689531,
              "year": 2015
            },
            {
              "id": 200730134,
              "year": 2016
            },
            {
              "id": 200729834,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ford_F_350",
          "name": "F-350",
          "niceName": "f-350",
          "years": [
            {
              "id": 2245,
              "year": 1990
            },
            {
              "id": 2246,
              "year": 1991
            },
            {
              "id": 2249,
              "year": 1994
            },
            {
              "id": 2250,
              "year": 1995
            },
            {
              "id": 2252,
              "year": 1997
            }
          ]
        },
        {
          "id": "Ford_F_350_Super_Duty",
          "name": "F-350 Super Duty",
          "niceName": "f-350-super-duty",
          "years": [
            {
              "id": 980,
              "year": 1999
            },
            {
              "id": 1130,
              "year": 2000
            },
            {
              "id": 100000081,
              "year": 2001
            },
            {
              "id": 3831,
              "year": 2002
            },
            {
              "id": 100502786,
              "year": 2003
            },
            {
              "id": 100503314,
              "year": 2004
            },
            {
              "id": 100504882,
              "year": 2005
            },
            {
              "id": 100505826,
              "year": 2006
            },
            {
              "id": 100512959,
              "year": 2007
            },
            {
              "id": 100522307,
              "year": 2008
            },
            {
              "id": 100526314,
              "year": 2009
            },
            {
              "id": 100529629,
              "year": 2010
            },
            {
              "id": 100531409,
              "year": 2011
            },
            {
              "id": 100536049,
              "year": 2012
            },
            {
              "id": 200445588,
              "year": 2013
            },
            {
              "id": 200482676,
              "year": 2014
            },
            {
              "id": 200689274,
              "year": 2015
            },
            {
              "id": 200730256,
              "year": 2016
            },
            {
              "id": 401611393,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ford_F_450_Super_Duty",
          "name": "F-450 Super Duty",
          "niceName": "f-450-super-duty",
          "years": [
            {
              "id": 100522506,
              "year": 2008
            },
            {
              "id": 100526315,
              "year": 2009
            },
            {
              "id": 100529889,
              "year": 2010
            },
            {
              "id": 100531410,
              "year": 2011
            },
            {
              "id": 100536050,
              "year": 2012
            },
            {
              "id": 200459723,
              "year": 2013
            },
            {
              "id": 200482557,
              "year": 2014
            },
            {
              "id": 200678168,
              "year": 2015
            },
            {
              "id": 200730703,
              "year": 2016
            },
            {
              "id": 401641440,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ford_Festiva",
          "name": "Festiva",
          "niceName": "festiva",
          "years": [
            {
              "id": 2255,
              "year": 1991
            },
            {
              "id": 2256,
              "year": 1992
            },
            {
              "id": 2257,
              "year": 1993
            }
          ]
        },
        {
          "id": "Ford_Fiesta",
          "name": "Fiesta",
          "niceName": "fiesta",
          "years": [
            {
              "id": 100524971,
              "year": 2011
            },
            {
              "id": 100534989,
              "year": 2012
            },
            {
              "id": 200421599,
              "year": 2013
            },
            {
              "id": 200443870,
              "year": 2014
            },
            {
              "id": 200692516,
              "year": 2015
            },
            {
              "id": 200733229,
              "year": 2016
            },
            {
              "id": 401677703,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ford_Five_Hundred",
          "name": "Five Hundred",
          "niceName": "five-hundred",
          "years": [
            {
              "id": 100502688,
              "year": 2005
            },
            {
              "id": 100506292,
              "year": 2006
            },
            {
              "id": 100512881,
              "year": 2007
            }
          ]
        },
        {
          "id": "Ford_Flex",
          "name": "Flex",
          "niceName": "flex",
          "years": [
            {
              "id": 100523029,
              "year": 2009
            },
            {
              "id": 100528251,
              "year": 2010
            },
            {
              "id": 100531549,
              "year": 2011
            },
            {
              "id": 100535089,
              "year": 2012
            },
            {
              "id": 100538589,
              "year": 2013
            },
            {
              "id": 200467387,
              "year": 2014
            },
            {
              "id": 200714516,
              "year": 2015
            },
            {
              "id": 401593852,
              "year": 2016
            },
            {
              "id": 401676499,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ford_Focus",
          "name": "Focus",
          "niceName": "focus",
          "years": [
            {
              "id": 1131,
              "year": 2000
            },
            {
              "id": 100000083,
              "year": 2001
            },
            {
              "id": 100000084,
              "year": 2002
            },
            {
              "id": 100502787,
              "year": 2003
            },
            {
              "id": 100503532,
              "year": 2004
            },
            {
              "id": 100504602,
              "year": 2005
            },
            {
              "id": 100506349,
              "year": 2006
            },
            {
              "id": 100512839,
              "year": 2007
            },
            {
              "id": 100512964,
              "year": 2008
            },
            {
              "id": 100525657,
              "year": 2009
            },
            {
              "id": 100528252,
              "year": 2010
            },
            {
              "id": 100531810,
              "year": 2011
            },
            {
              "id": 100531217,
              "year": 2012
            },
            {
              "id": 200421411,
              "year": 2013
            },
            {
              "id": 200473295,
              "year": 2014
            },
            {
              "id": 200696413,
              "year": 2015
            },
            {
              "id": 200740244,
              "year": 2016
            },
            {
              "id": 401670491,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ford_Focus_RS",
          "name": "Focus RS",
          "niceName": "focus-rs",
          "years": [
            {
              "id": 401590246,
              "year": 2016
            },
            {
              "id": 401657504,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ford_Focus_ST",
          "name": "Focus ST",
          "niceName": "focus-st",
          "years": [
            {
              "id": 100539449,
              "year": 2013
            },
            {
              "id": 200474926,
              "year": 2014
            },
            {
              "id": 200717991,
              "year": 2015
            },
            {
              "id": 200740480,
              "year": 2016
            },
            {
              "id": 401671802,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ford_Freestar",
          "name": "Freestar",
          "niceName": "freestar",
          "years": [
            {
              "id": 100504742,
              "year": 2005
            },
            {
              "id": 100505769,
              "year": 2006
            },
            {
              "id": 100512780,
              "year": 2007
            }
          ]
        },
        {
          "id": "Ford_Freestyle",
          "name": "Freestyle",
          "niceName": "freestyle",
          "years": [
            {
              "id": 100502697,
              "year": 2005
            },
            {
              "id": 100506309,
              "year": 2006
            },
            {
              "id": 100515439,
              "year": 2007
            }
          ]
        },
        {
          "id": "Ford_Fusion",
          "name": "Fusion",
          "niceName": "fusion",
          "years": [
            {
              "id": 100503262,
              "year": 2006
            },
            {
              "id": 100519143,
              "year": 2007
            },
            {
              "id": 100523642,
              "year": 2008
            },
            {
              "id": 100523194,
              "year": 2009
            },
            {
              "id": 100526689,
              "year": 2010
            },
            {
              "id": 100532110,
              "year": 2011
            },
            {
              "id": 100535369,
              "year": 2012
            },
            {
              "id": 100539152,
              "year": 2013
            },
            {
              "id": 200468412,
              "year": 2014
            },
            {
              "id": 200697193,
              "year": 2015
            },
            {
              "id": 200727079,
              "year": 2016
            },
            {
              "id": 200732915,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ford_Fusion_Energi",
          "name": "Fusion Energi",
          "niceName": "fusion-energi",
          "years": [
            {
              "id": 200443575,
              "year": 2013
            },
            {
              "id": 200470293,
              "year": 2014
            },
            {
              "id": 200696112,
              "year": 2015
            },
            {
              "id": 200728167,
              "year": 2016
            },
            {
              "id": 401630049,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ford_Fusion_Hybrid",
          "name": "Fusion Hybrid",
          "niceName": "fusion-hybrid",
          "years": [
            {
              "id": 100527072,
              "year": 2010
            },
            {
              "id": 100532149,
              "year": 2011
            },
            {
              "id": 200421146,
              "year": 2013
            },
            {
              "id": 200469775,
              "year": 2014
            },
            {
              "id": 200696803,
              "year": 2015
            },
            {
              "id": 200727948,
              "year": 2016
            },
            {
              "id": 401629469,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ford_GT",
          "name": "GT",
          "niceName": "gt",
          "years": [
            {
              "id": 100502961,
              "year": 2005
            },
            {
              "id": 100507041,
              "year": 2006
            },
            {
              "id": 200724872,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ford_LTD_Crown_Victoria",
          "name": "LTD Crown Victoria",
          "niceName": "ltd-crown-victoria",
          "years": [
            {
              "id": 2446,
              "year": 1990
            },
            {
              "id": 736,
              "year": 1991
            }
          ]
        },
        {
          "id": "Ford_Mustang",
          "name": "Mustang",
          "niceName": "mustang",
          "years": [
            {
              "id": 2258,
              "year": 1990
            },
            {
              "id": 2259,
              "year": 1991
            },
            {
              "id": 744,
              "year": 1992
            },
            {
              "id": 2260,
              "year": 1993
            },
            {
              "id": 745,
              "year": 1995
            },
            {
              "id": 2262,
              "year": 1996
            },
            {
              "id": 2263,
              "year": 1997
            },
            {
              "id": 2264,
              "year": 1998
            },
            {
              "id": 3522,
              "year": 1999
            },
            {
              "id": 509,
              "year": 2000
            },
            {
              "id": 100000082,
              "year": 2001
            },
            {
              "id": 3845,
              "year": 2002
            },
            {
              "id": 100502608,
              "year": 2003
            },
            {
              "id": 100502701,
              "year": 2004
            },
            {
              "id": 100503282,
              "year": 2005
            },
            {
              "id": 100506567,
              "year": 2006
            },
            {
              "id": 100516780,
              "year": 2007
            },
            {
              "id": 100523530,
              "year": 2008
            },
            {
              "id": 100525292,
              "year": 2009
            },
            {
              "id": 100522351,
              "year": 2010
            },
            {
              "id": 100530749,
              "year": 2011
            },
            {
              "id": 100533149,
              "year": 2012
            },
            {
              "id": 100538649,
              "year": 2013
            },
            {
              "id": 200465245,
              "year": 2014
            },
            {
              "id": 200465112,
              "year": 2015
            },
            {
              "id": 200734939,
              "year": 2016
            },
            {
              "id": 401640292,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ford_Mustang_SVT_Cobra",
          "name": "Mustang SVT Cobra",
          "niceName": "mustang-svt-cobra",
          "years": [
            {
              "id": 100504015,
              "year": 1994
            },
            {
              "id": 100504014,
              "year": 1995
            },
            {
              "id": 100504012,
              "year": 1997
            },
            {
              "id": 100504011,
              "year": 1998
            },
            {
              "id": 100504010,
              "year": 1999
            }
          ]
        },
        {
          "id": "Ford_Probe",
          "name": "Probe",
          "niceName": "probe",
          "years": [
            {
              "id": 2267,
              "year": 1991
            },
            {
              "id": 746,
              "year": 1992
            },
            {
              "id": 2268,
              "year": 1993
            },
            {
              "id": 2269,
              "year": 1994
            },
            {
              "id": 2270,
              "year": 1995
            },
            {
              "id": 747,
              "year": 1996
            },
            {
              "id": 2271,
              "year": 1997
            }
          ]
        },
        {
          "id": "Ford_Ranger",
          "name": "Ranger",
          "niceName": "ranger",
          "years": [
            {
              "id": 748,
              "year": 1990
            },
            {
              "id": 2273,
              "year": 1991
            },
            {
              "id": 2274,
              "year": 1992
            },
            {
              "id": 749,
              "year": 1993
            },
            {
              "id": 2275,
              "year": 1994
            },
            {
              "id": 2276,
              "year": 1995
            },
            {
              "id": 750,
              "year": 1996
            },
            {
              "id": 2277,
              "year": 1997
            },
            {
              "id": 2278,
              "year": 1998
            },
            {
              "id": 3523,
              "year": 1999
            },
            {
              "id": 1115,
              "year": 2000
            },
            {
              "id": 100000085,
              "year": 2001
            },
            {
              "id": 3844,
              "year": 2002
            },
            {
              "id": 100502703,
              "year": 2003
            },
            {
              "id": 100503315,
              "year": 2004
            },
            {
              "id": 100505023,
              "year": 2005
            },
            {
              "id": 100506505,
              "year": 2006
            },
            {
              "id": 100507479,
              "year": 2007
            },
            {
              "id": 100524110,
              "year": 2008
            },
            {
              "id": 100526492,
              "year": 2009
            },
            {
              "id": 100528771,
              "year": 2010
            },
            {
              "id": 100532189,
              "year": 2011
            }
          ]
        },
        {
          "id": "Ford_Shelby_GT350",
          "name": "Shelby GT350",
          "niceName": "shelby-gt350",
          "years": [
            {
              "id": 401632781,
              "year": 2015
            },
            {
              "id": 200736080,
              "year": 2016
            },
            {
              "id": 401640216,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ford_Shelby_GT500",
          "name": "Shelby GT500",
          "niceName": "shelby-gt500",
          "years": [
            {
              "id": 100505348,
              "year": 2007
            },
            {
              "id": 100524049,
              "year": 2008
            },
            {
              "id": 100525269,
              "year": 2009
            },
            {
              "id": 100526949,
              "year": 2010
            },
            {
              "id": 100531130,
              "year": 2011
            },
            {
              "id": 100533809,
              "year": 2012
            },
            {
              "id": 100538669,
              "year": 2013
            },
            {
              "id": 200467126,
              "year": 2014
            }
          ]
        },
        {
          "id": "Ford_Taurus",
          "name": "Taurus",
          "niceName": "taurus",
          "years": [
            {
              "id": 2280,
              "year": 1990
            },
            {
              "id": 2281,
              "year": 1991
            },
            {
              "id": 2282,
              "year": 1992
            },
            {
              "id": 2283,
              "year": 1993
            },
            {
              "id": 751,
              "year": 1994
            },
            {
              "id": 2284,
              "year": 1995
            },
            {
              "id": 2285,
              "year": 1996
            },
            {
              "id": 752,
              "year": 1997
            },
            {
              "id": 2286,
              "year": 1998
            },
            {
              "id": 3524,
              "year": 1999
            },
            {
              "id": 1084,
              "year": 2000
            },
            {
              "id": 100000086,
              "year": 2001
            },
            {
              "id": 3846,
              "year": 2002
            },
            {
              "id": 100502788,
              "year": 2003
            },
            {
              "id": 100503531,
              "year": 2004
            },
            {
              "id": 100504443,
              "year": 2005
            },
            {
              "id": 100505770,
              "year": 2006
            },
            {
              "id": 100507699,
              "year": 2007
            },
            {
              "id": 100512743,
              "year": 2008
            },
            {
              "id": 100525837,
              "year": 2009
            },
            {
              "id": 100525111,
              "year": 2010
            },
            {
              "id": 100531529,
              "year": 2011
            },
            {
              "id": 100534769,
              "year": 2012
            },
            {
              "id": 100535049,
              "year": 2013
            },
            {
              "id": 200474679,
              "year": 2014
            },
            {
              "id": 200699265,
              "year": 2015
            },
            {
              "id": 200700837,
              "year": 2016
            },
            {
              "id": 401672275,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ford_Taurus_X",
          "name": "Taurus X",
          "niceName": "taurus-x",
          "years": [
            {
              "id": 100522452,
              "year": 2008
            },
            {
              "id": 100525873,
              "year": 2009
            }
          ]
        },
        {
          "id": "Ford_Tempo",
          "name": "Tempo",
          "niceName": "tempo",
          "years": [
            {
              "id": 753,
              "year": 1990
            },
            {
              "id": 2288,
              "year": 1991
            },
            {
              "id": 2289,
              "year": 1992
            },
            {
              "id": 754,
              "year": 1993
            },
            {
              "id": 2290,
              "year": 1994
            }
          ]
        },
        {
          "id": "Ford_Thunderbird",
          "name": "Thunderbird",
          "niceName": "thunderbird",
          "years": [
            {
              "id": 2292,
              "year": 1990
            },
            {
              "id": 755,
              "year": 1991
            },
            {
              "id": 2293,
              "year": 1992
            },
            {
              "id": 2294,
              "year": 1993
            },
            {
              "id": 756,
              "year": 1994
            },
            {
              "id": 2295,
              "year": 1995
            },
            {
              "id": 2296,
              "year": 1996
            },
            {
              "id": 100000320,
              "year": 2002
            },
            {
              "id": 100502789,
              "year": 2003
            },
            {
              "id": 100503533,
              "year": 2004
            },
            {
              "id": 100504783,
              "year": 2005
            }
          ]
        },
        {
          "id": "Ford_Transit_Connect",
          "name": "Transit Connect",
          "niceName": "transit-connect",
          "years": [
            {
              "id": 100527649,
              "year": 2010
            },
            {
              "id": 100531789,
              "year": 2011
            },
            {
              "id": 100535069,
              "year": 2012
            },
            {
              "id": 200421953,
              "year": 2013
            },
            {
              "id": 200493351,
              "year": 2014
            },
            {
              "id": 200700367,
              "year": 2015
            },
            {
              "id": 200732435,
              "year": 2016
            },
            {
              "id": 401640459,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ford_Transit_Van",
          "name": "Transit Van",
          "niceName": "transit-van",
          "years": [
            {
              "id": 200675764,
              "year": 2015
            },
            {
              "id": 200735424,
              "year": 2016
            },
            {
              "id": 401643850,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ford_Transit_Wagon",
          "name": "Transit Wagon",
          "niceName": "transit-wagon",
          "years": [
            {
              "id": 200675706,
              "year": 2015
            },
            {
              "id": 200735346,
              "year": 2016
            },
            {
              "id": 401646996,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ford_Windstar",
          "name": "Windstar",
          "niceName": "windstar",
          "years": [
            {
              "id": 2298,
              "year": 1995
            },
            {
              "id": 2300,
              "year": 1996
            },
            {
              "id": 2301,
              "year": 1997
            },
            {
              "id": 757,
              "year": 1998
            },
            {
              "id": 3525,
              "year": 1999
            },
            {
              "id": 1111,
              "year": 2000
            },
            {
              "id": 100000088,
              "year": 2001
            },
            {
              "id": 100000361,
              "year": 2002
            },
            {
              "id": 100502790,
              "year": 2003
            }
          ]
        },
        {
          "id": "Ford_Windstar_Cargo",
          "name": "Windstar Cargo",
          "niceName": "windstar-cargo",
          "years": [
            {
              "id": 100503362,
              "year": 1995
            },
            {
              "id": 100503381,
              "year": 1997
            },
            {
              "id": 100503391,
              "year": 1998
            },
            {
              "id": 100503401,
              "year": 1999
            },
            {
              "id": 100503415,
              "year": 2000
            },
            {
              "id": 100000087,
              "year": 2001
            },
            {
              "id": 3854,
              "year": 2002
            },
            {
              "id": 100502791,
              "year": 2003
            }
          ]
        }
      ]
    },
    {
      "id": 200007302,
      "name": "GMC",
      "niceName": "gmc",
      "models": [
        {
          "id": "GMC_Acadia",
          "name": "Acadia",
          "niceName": "acadia",
          "years": [
            {
              "id": 100507140,
              "year": 2007
            },
            {
              "id": 100523392,
              "year": 2008
            },
            {
              "id": 100525771,
              "year": 2009
            },
            {
              "id": 100528429,
              "year": 2010
            },
            {
              "id": 100530951,
              "year": 2011
            },
            {
              "id": 100535629,
              "year": 2012
            },
            {
              "id": 100539234,
              "year": 2013
            },
            {
              "id": 200475828,
              "year": 2014
            },
            {
              "id": 200700858,
              "year": 2015
            },
            {
              "id": 200741268,
              "year": 2016
            },
            {
              "id": 200732912,
              "year": 2017
            }
          ]
        },
        {
          "id": "GMC_Acadia_Limited",
          "name": "Acadia Limited",
          "niceName": "acadia-limited",
          "years": [
            {
              "id": 401656954,
              "year": 2017
            }
          ]
        },
        {
          "id": "GMC_Canyon",
          "name": "Canyon",
          "niceName": "canyon",
          "years": [
            {
              "id": 100502686,
              "year": 2004
            },
            {
              "id": 100503974,
              "year": 2005
            },
            {
              "id": 100506566,
              "year": 2006
            },
            {
              "id": 100519024,
              "year": 2007
            },
            {
              "id": 100524375,
              "year": 2008
            },
            {
              "id": 100525578,
              "year": 2009
            },
            {
              "id": 100529530,
              "year": 2010
            },
            {
              "id": 100533229,
              "year": 2011
            },
            {
              "id": 100535509,
              "year": 2012
            },
            {
              "id": 200468549,
              "year": 2015
            },
            {
              "id": 401575440,
              "year": 2016
            }
          ]
        },
        {
          "id": "GMC_Envoy",
          "name": "Envoy",
          "niceName": "envoy",
          "years": [
            {
              "id": 2302,
              "year": 1998
            },
            {
              "id": 3528,
              "year": 1999
            },
            {
              "id": 1032,
              "year": 2000
            },
            {
              "id": 100000308,
              "year": 2002
            },
            {
              "id": 100502792,
              "year": 2003
            },
            {
              "id": 100503202,
              "year": 2004
            },
            {
              "id": 100503975,
              "year": 2005
            },
            {
              "id": 100506370,
              "year": 2006
            },
            {
              "id": 100507000,
              "year": 2007
            },
            {
              "id": 100523755,
              "year": 2008
            },
            {
              "id": 100525950,
              "year": 2009
            }
          ]
        },
        {
          "id": "GMC_Envoy_XL",
          "name": "Envoy XL",
          "niceName": "envoy-xl",
          "years": [
            {
              "id": 100502588,
              "year": 2002
            },
            {
              "id": 100502793,
              "year": 2003
            },
            {
              "id": 100503203,
              "year": 2004
            },
            {
              "id": 100503976,
              "year": 2005
            },
            {
              "id": 100506371,
              "year": 2006
            }
          ]
        },
        {
          "id": "GMC_Envoy_XUV",
          "name": "Envoy XUV",
          "niceName": "envoy-xuv",
          "years": [
            {
              "id": 100502950,
              "year": 2004
            },
            {
              "id": 100503977,
              "year": 2005
            }
          ]
        },
        {
          "id": "GMC_Jimmy",
          "name": "Jimmy",
          "niceName": "jimmy",
          "years": [
            {
              "id": 758,
              "year": 1990
            },
            {
              "id": 2304,
              "year": 1991
            },
            {
              "id": 2181,
              "year": 1992
            },
            {
              "id": 762,
              "year": 1993
            },
            {
              "id": 2305,
              "year": 1995
            },
            {
              "id": 759,
              "year": 1996
            },
            {
              "id": 2306,
              "year": 1997
            },
            {
              "id": 2307,
              "year": 1998
            },
            {
              "id": 3529,
              "year": 1999
            },
            {
              "id": 376,
              "year": 2000
            },
            {
              "id": 100000118,
              "year": 2001
            }
          ]
        },
        {
          "id": "GMC_R/V_3500_Series",
          "name": "R/V 3500 Series",
          "niceName": "rv-3500-series",
          "years": [
            {
              "id": 2309,
              "year": 1990
            },
            {
              "id": 773,
              "year": 1991
            }
          ]
        },
        {
          "id": "GMC_Rally_Wagon",
          "name": "Rally Wagon",
          "niceName": "rally-wagon",
          "years": [
            {
              "id": 2311,
              "year": 1990
            },
            {
              "id": 2312,
              "year": 1991
            },
            {
              "id": 2313,
              "year": 1992
            },
            {
              "id": 2314,
              "year": 1993
            },
            {
              "id": 2315,
              "year": 1994
            },
            {
              "id": 2176,
              "year": 1995
            },
            {
              "id": 2177,
              "year": 1996
            }
          ]
        },
        {
          "id": "GMC_S_15",
          "name": "S-15",
          "niceName": "s-15",
          "years": [
            {
              "id": 763,
              "year": 1990
            }
          ]
        },
        {
          "id": "GMC_S_15_Jimmy",
          "name": "S-15 Jimmy",
          "niceName": "s-15-jimmy",
          "years": [
            {
              "id": 2179,
              "year": 1990
            }
          ]
        },
        {
          "id": "GMC_Safari",
          "name": "Safari",
          "niceName": "safari",
          "years": [
            {
              "id": 2185,
              "year": 1990
            },
            {
              "id": 764,
              "year": 1991
            },
            {
              "id": 2186,
              "year": 1992
            },
            {
              "id": 2187,
              "year": 1993
            },
            {
              "id": 765,
              "year": 1994
            },
            {
              "id": 2188,
              "year": 1995
            },
            {
              "id": 2189,
              "year": 1996
            },
            {
              "id": 2190,
              "year": 1997
            },
            {
              "id": 2191,
              "year": 1998
            },
            {
              "id": 3530,
              "year": 1999
            },
            {
              "id": 1136,
              "year": 2000
            },
            {
              "id": 100000113,
              "year": 2001
            },
            {
              "id": 3866,
              "year": 2002
            },
            {
              "id": 100502794,
              "year": 2003
            },
            {
              "id": 100503204,
              "year": 2004
            },
            {
              "id": 100503979,
              "year": 2005
            }
          ]
        },
        {
          "id": "GMC_Safari_Cargo",
          "name": "Safari Cargo",
          "niceName": "safari-cargo",
          "years": [
            {
              "id": 100503330,
              "year": 1990
            },
            {
              "id": 100503344,
              "year": 1992
            },
            {
              "id": 100503351,
              "year": 1993
            },
            {
              "id": 100503356,
              "year": 1994
            },
            {
              "id": 100503363,
              "year": 1995
            },
            {
              "id": 100503372,
              "year": 1996
            },
            {
              "id": 100503392,
              "year": 1998
            },
            {
              "id": 981,
              "year": 1999
            },
            {
              "id": 1137,
              "year": 2000
            },
            {
              "id": 100000116,
              "year": 2001
            },
            {
              "id": 3865,
              "year": 2002
            },
            {
              "id": 100502795,
              "year": 2003
            },
            {
              "id": 100503205,
              "year": 2004
            },
            {
              "id": 100503978,
              "year": 2005
            }
          ]
        },
        {
          "id": "GMC_Savana",
          "name": "Savana",
          "niceName": "savana",
          "years": [
            {
              "id": 2192,
              "year": 1996
            },
            {
              "id": 2193,
              "year": 1997
            },
            {
              "id": 2194,
              "year": 1998
            },
            {
              "id": 3531,
              "year": 1999
            },
            {
              "id": 507,
              "year": 2000
            },
            {
              "id": 100000115,
              "year": 2001
            },
            {
              "id": 3809,
              "year": 2002
            },
            {
              "id": 100502671,
              "year": 2003
            },
            {
              "id": 100503206,
              "year": 2004
            },
            {
              "id": 100503981,
              "year": 2005
            },
            {
              "id": 100506518,
              "year": 2006
            },
            {
              "id": 100516982,
              "year": 2007
            },
            {
              "id": 100524271,
              "year": 2008
            },
            {
              "id": 100526209,
              "year": 2009
            },
            {
              "id": 100528729,
              "year": 2010
            },
            {
              "id": 100533429,
              "year": 2011
            },
            {
              "id": 100535849,
              "year": 2012
            },
            {
              "id": 200465908,
              "year": 2013
            },
            {
              "id": 200472679,
              "year": 2014
            },
            {
              "id": 200720940,
              "year": 2015
            },
            {
              "id": 401625993,
              "year": 2016
            }
          ]
        },
        {
          "id": "GMC_Savana_Cargo",
          "name": "Savana Cargo",
          "niceName": "savana-cargo",
          "years": [
            {
              "id": 100503373,
              "year": 1996
            },
            {
              "id": 100503393,
              "year": 1998
            },
            {
              "id": 100503402,
              "year": 1999
            },
            {
              "id": 505,
              "year": 2000
            },
            {
              "id": 100000114,
              "year": 2001
            },
            {
              "id": 3810,
              "year": 2002
            },
            {
              "id": 100502672,
              "year": 2003
            },
            {
              "id": 100503207,
              "year": 2004
            },
            {
              "id": 100503980,
              "year": 2005
            },
            {
              "id": 100506631,
              "year": 2006
            },
            {
              "id": 100519025,
              "year": 2007
            },
            {
              "id": 100524349,
              "year": 2008
            },
            {
              "id": 100526250,
              "year": 2009
            },
            {
              "id": 100529649,
              "year": 2010
            },
            {
              "id": 100533452,
              "year": 2011
            },
            {
              "id": 100535850,
              "year": 2012
            },
            {
              "id": 200462881,
              "year": 2013
            },
            {
              "id": 200472817,
              "year": 2014
            },
            {
              "id": 200720941,
              "year": 2015
            },
            {
              "id": 401626232,
              "year": 2016
            }
          ]
        },
        {
          "id": "GMC_Sierra_1500",
          "name": "Sierra 1500",
          "niceName": "sierra-1500",
          "years": [
            {
              "id": 766,
              "year": 1990
            },
            {
              "id": 2196,
              "year": 1991
            },
            {
              "id": 2197,
              "year": 1992
            },
            {
              "id": 2198,
              "year": 1993
            },
            {
              "id": 2199,
              "year": 1994
            },
            {
              "id": 2201,
              "year": 1996
            },
            {
              "id": 2202,
              "year": 1997
            },
            {
              "id": 2203,
              "year": 1998
            },
            {
              "id": 982,
              "year": 1999
            },
            {
              "id": 1113,
              "year": 2000
            },
            {
              "id": 100000106,
              "year": 2001
            },
            {
              "id": 3834,
              "year": 2002
            },
            {
              "id": 100502796,
              "year": 2003
            },
            {
              "id": 100503208,
              "year": 2004
            },
            {
              "id": 100503877,
              "year": 2005
            },
            {
              "id": 100506188,
              "year": 2006
            },
            {
              "id": 100505550,
              "year": 2007
            },
            {
              "id": 100524054,
              "year": 2008
            },
            {
              "id": 100526049,
              "year": 2009
            },
            {
              "id": 100529989,
              "year": 2010
            },
            {
              "id": 100532612,
              "year": 2011
            },
            {
              "id": 100536229,
              "year": 2012
            },
            {
              "id": 200430340,
              "year": 2013
            },
            {
              "id": 200459502,
              "year": 2014
            },
            {
              "id": 200715136,
              "year": 2015
            },
            {
              "id": 401589563,
              "year": 2016
            },
            {
              "id": 200732918,
              "year": 2017
            }
          ]
        },
        {
          "id": "GMC_Sierra_1500_Classic",
          "name": "Sierra 1500 Classic",
          "niceName": "sierra-1500-classic",
          "years": [
            {
              "id": 100512760,
              "year": 2007
            }
          ]
        },
        {
          "id": "GMC_Sierra_1500_Hybrid",
          "name": "Sierra 1500 Hybrid",
          "niceName": "sierra-1500-hybrid",
          "years": [
            {
              "id": 100526669,
              "year": 2009
            },
            {
              "id": 100529111,
              "year": 2010
            },
            {
              "id": 100533289,
              "year": 2011
            },
            {
              "id": 100536130,
              "year": 2012
            },
            {
              "id": 200445752,
              "year": 2013
            }
          ]
        },
        {
          "id": "GMC_Sierra_1500HD",
          "name": "Sierra 1500HD",
          "niceName": "sierra-1500hd",
          "years": [
            {
              "id": 100000112,
              "year": 2001
            },
            {
              "id": 3835,
              "year": 2002
            },
            {
              "id": 100502797,
              "year": 2003
            },
            {
              "id": 100504822,
              "year": 2005
            },
            {
              "id": 100506508,
              "year": 2006
            }
          ]
        },
        {
          "id": "GMC_Sierra_1500HD_Classic",
          "name": "Sierra 1500HD Classic",
          "niceName": "sierra-1500hd-classic",
          "years": [
            {
              "id": 100512803,
              "year": 2007
            }
          ]
        },
        {
          "id": "GMC_Sierra_2500",
          "name": "Sierra 2500",
          "niceName": "sierra-2500",
          "years": [
            {
              "id": 2204,
              "year": 1990
            },
            {
              "id": 2205,
              "year": 1991
            },
            {
              "id": 2206,
              "year": 1992
            },
            {
              "id": 2207,
              "year": 1993
            },
            {
              "id": 2208,
              "year": 1994
            },
            {
              "id": 2209,
              "year": 1995
            },
            {
              "id": 2210,
              "year": 1996
            },
            {
              "id": 2211,
              "year": 1997
            },
            {
              "id": 2212,
              "year": 1998
            },
            {
              "id": 3532,
              "year": 1999
            },
            {
              "id": 1091,
              "year": 2000
            },
            {
              "id": 100000119,
              "year": 2001
            },
            {
              "id": 3833,
              "year": 2002
            },
            {
              "id": 100502798,
              "year": 2003
            },
            {
              "id": 100503210,
              "year": 2004
            }
          ]
        },
        {
          "id": "GMC_Sierra_2500HD",
          "name": "Sierra 2500HD",
          "niceName": "sierra-2500hd",
          "years": [
            {
              "id": 100000117,
              "year": 2001
            },
            {
              "id": 3836,
              "year": 2002
            },
            {
              "id": 100502799,
              "year": 2003
            },
            {
              "id": 100503211,
              "year": 2004
            },
            {
              "id": 100503973,
              "year": 2005
            },
            {
              "id": 100506189,
              "year": 2006
            },
            {
              "id": 100507705,
              "year": 2007
            },
            {
              "id": 100524171,
              "year": 2008
            },
            {
              "id": 100526109,
              "year": 2009
            },
            {
              "id": 100530129,
              "year": 2010
            },
            {
              "id": 100530512,
              "year": 2011
            },
            {
              "id": 100537831,
              "year": 2012
            },
            {
              "id": 200431343,
              "year": 2013
            },
            {
              "id": 200482431,
              "year": 2014
            },
            {
              "id": 200484146,
              "year": 2015
            },
            {
              "id": 401630179,
              "year": 2016
            }
          ]
        },
        {
          "id": "GMC_Sierra_2500HD_Classic",
          "name": "Sierra 2500HD Classic",
          "niceName": "sierra-2500hd-classic",
          "years": [
            {
              "id": 100512821,
              "year": 2007
            }
          ]
        },
        {
          "id": "GMC_Sierra_3500",
          "name": "Sierra 3500",
          "niceName": "sierra-3500",
          "years": [
            {
              "id": 2214,
              "year": 1990
            },
            {
              "id": 2215,
              "year": 1991
            },
            {
              "id": 2216,
              "year": 1992
            },
            {
              "id": 2217,
              "year": 1993
            },
            {
              "id": 2218,
              "year": 1994
            },
            {
              "id": 2219,
              "year": 1995
            },
            {
              "id": 2222,
              "year": 1998
            },
            {
              "id": 100000111,
              "year": 2001
            },
            {
              "id": 3837,
              "year": 2002
            },
            {
              "id": 100502800,
              "year": 2003
            },
            {
              "id": 100503212,
              "year": 2004
            },
            {
              "id": 100503970,
              "year": 2005
            },
            {
              "id": 100506469,
              "year": 2006
            }
          ]
        },
        {
          "id": "GMC_Sierra_3500_Classic",
          "name": "Sierra 3500 Classic",
          "niceName": "sierra-3500-classic",
          "years": [
            {
              "id": 100512940,
              "year": 2007
            }
          ]
        },
        {
          "id": "GMC_Sierra_3500HD",
          "name": "Sierra 3500HD",
          "niceName": "sierra-3500hd",
          "years": [
            {
              "id": 100507706,
              "year": 2007
            },
            {
              "id": 100524215,
              "year": 2008
            },
            {
              "id": 100526151,
              "year": 2009
            },
            {
              "id": 100530431,
              "year": 2010
            },
            {
              "id": 100531813,
              "year": 2011
            },
            {
              "id": 100537930,
              "year": 2012
            },
            {
              "id": 200431922,
              "year": 2013
            },
            {
              "id": 200489236,
              "year": 2014
            },
            {
              "id": 200484147,
              "year": 2015
            },
            {
              "id": 401613795,
              "year": 2016
            }
          ]
        },
        {
          "id": "GMC_Sierra_C3",
          "name": "Sierra C3",
          "niceName": "sierra-c3",
          "years": [
            {
              "id": 100000279,
              "year": 2001
            }
          ]
        },
        {
          "id": "GMC_Sierra_Classic_1500",
          "name": "Sierra Classic 1500",
          "niceName": "sierra-classic-1500",
          "years": [
            {
              "id": 1099,
              "year": 1999
            }
          ]
        },
        {
          "id": "GMC_Sierra_Classic_2500",
          "name": "Sierra Classic 2500",
          "niceName": "sierra-classic-2500",
          "years": [
            {
              "id": 3526,
              "year": 1999
            },
            {
              "id": 951,
              "year": 2000
            }
          ]
        },
        {
          "id": "GMC_Sierra_Classic_3500",
          "name": "Sierra Classic 3500",
          "niceName": "sierra-classic-3500",
          "years": [
            {
              "id": 3527,
              "year": 1999
            }
          ]
        },
        {
          "id": "GMC_Sonoma",
          "name": "Sonoma",
          "niceName": "sonoma",
          "years": [
            {
              "id": 2223,
              "year": 1991
            },
            {
              "id": 768,
              "year": 1992
            },
            {
              "id": 2224,
              "year": 1993
            },
            {
              "id": 2225,
              "year": 1994
            },
            {
              "id": 2226,
              "year": 1995
            },
            {
              "id": 2227,
              "year": 1996
            },
            {
              "id": 2228,
              "year": 1997
            },
            {
              "id": 3533,
              "year": 1999
            },
            {
              "id": 1145,
              "year": 2000
            },
            {
              "id": 100000110,
              "year": 2001
            },
            {
              "id": 3867,
              "year": 2002
            },
            {
              "id": 100502687,
              "year": 2003
            },
            {
              "id": 100503221,
              "year": 2004
            }
          ]
        },
        {
          "id": "GMC_Suburban",
          "name": "Suburban",
          "niceName": "suburban",
          "years": [
            {
              "id": 2231,
              "year": 1990
            },
            {
              "id": 769,
              "year": 1991
            },
            {
              "id": 2232,
              "year": 1992
            },
            {
              "id": 2233,
              "year": 1993
            },
            {
              "id": 770,
              "year": 1994
            },
            {
              "id": 2234,
              "year": 1995
            },
            {
              "id": 2235,
              "year": 1996
            },
            {
              "id": 771,
              "year": 1997
            },
            {
              "id": 983,
              "year": 1999
            }
          ]
        },
        {
          "id": "GMC_Syclone",
          "name": "Syclone",
          "niceName": "syclone",
          "years": [
            {
              "id": 2237,
              "year": 1991
            }
          ]
        },
        {
          "id": "GMC_Terrain",
          "name": "Terrain",
          "niceName": "terrain",
          "years": [
            {
              "id": 100525209,
              "year": 2010
            },
            {
              "id": 100532869,
              "year": 2011
            },
            {
              "id": 100535969,
              "year": 2012
            },
            {
              "id": 100539369,
              "year": 2013
            },
            {
              "id": 200477771,
              "year": 2014
            },
            {
              "id": 200708752,
              "year": 2015
            },
            {
              "id": 200746361,
              "year": 2016
            },
            {
              "id": 401645483,
              "year": 2017
            }
          ]
        },
        {
          "id": "GMC_Typhoon",
          "name": "Typhoon",
          "niceName": "typhoon",
          "years": [
            {
              "id": 2238,
              "year": 1992
            },
            {
              "id": 772,
              "year": 1993
            }
          ]
        },
        {
          "id": "GMC_Vandura",
          "name": "Vandura",
          "niceName": "vandura",
          "years": [
            {
              "id": 2242,
              "year": 1990
            },
            {
              "id": 2243,
              "year": 1991
            },
            {
              "id": 2244,
              "year": 1992
            },
            {
              "id": 2106,
              "year": 1995
            },
            {
              "id": 2107,
              "year": 1996
            }
          ]
        },
        {
          "id": "GMC_Yukon",
          "name": "Yukon",
          "niceName": "yukon",
          "years": [
            {
              "id": 2108,
              "year": 1992
            },
            {
              "id": 2110,
              "year": 1994
            },
            {
              "id": 2111,
              "year": 1995
            },
            {
              "id": 2112,
              "year": 1996
            },
            {
              "id": 774,
              "year": 1997
            },
            {
              "id": 3534,
              "year": 1999
            },
            {
              "id": 423,
              "year": 2000
            },
            {
              "id": 100000109,
              "year": 2001
            },
            {
              "id": 3864,
              "year": 2002
            },
            {
              "id": 100502801,
              "year": 2003
            },
            {
              "id": 100503213,
              "year": 2004
            },
            {
              "id": 100503971,
              "year": 2005
            },
            {
              "id": 100506306,
              "year": 2006
            },
            {
              "id": 100505226,
              "year": 2007
            },
            {
              "id": 100520390,
              "year": 2008
            },
            {
              "id": 100525579,
              "year": 2009
            },
            {
              "id": 100529430,
              "year": 2010
            },
            {
              "id": 100532689,
              "year": 2011
            },
            {
              "id": 100536929,
              "year": 2012
            },
            {
              "id": 200427239,
              "year": 2013
            },
            {
              "id": 200467478,
              "year": 2014
            },
            {
              "id": 200467540,
              "year": 2015
            },
            {
              "id": 200779855,
              "year": 2016
            },
            {
              "id": 401660835,
              "year": 2017
            }
          ]
        },
        {
          "id": "GMC_Yukon_Denali",
          "name": "Yukon Denali",
          "niceName": "yukon-denali",
          "years": [
            {
              "id": 1033,
              "year": 2000
            }
          ]
        },
        {
          "id": "GMC_Yukon_Hybrid",
          "name": "Yukon Hybrid",
          "niceName": "yukon-hybrid",
          "years": [
            {
              "id": 100524590,
              "year": 2008
            },
            {
              "id": 100525580,
              "year": 2009
            },
            {
              "id": 100529449,
              "year": 2010
            },
            {
              "id": 100532832,
              "year": 2011
            },
            {
              "id": 100537429,
              "year": 2012
            },
            {
              "id": 200427749,
              "year": 2013
            }
          ]
        },
        {
          "id": "GMC_Yukon_XL",
          "name": "Yukon XL",
          "niceName": "yukon-xl",
          "years": [
            {
              "id": 424,
              "year": 2000
            },
            {
              "id": 100000107,
              "year": 2001
            },
            {
              "id": 3868,
              "year": 2002
            },
            {
              "id": 100502802,
              "year": 2003
            },
            {
              "id": 100503214,
              "year": 2004
            },
            {
              "id": 100503982,
              "year": 2005
            },
            {
              "id": 100506507,
              "year": 2006
            },
            {
              "id": 100507500,
              "year": 2007
            },
            {
              "id": 100523558,
              "year": 2008
            },
            {
              "id": 100525651,
              "year": 2009
            },
            {
              "id": 100529229,
              "year": 2010
            },
            {
              "id": 100532891,
              "year": 2011
            },
            {
              "id": 100537209,
              "year": 2012
            },
            {
              "id": 200427920,
              "year": 2013
            },
            {
              "id": 200467479,
              "year": 2014
            },
            {
              "id": 200467541,
              "year": 2015
            },
            {
              "id": 200779856,
              "year": 2016
            },
            {
              "id": 401660836,
              "year": 2017
            }
          ]
        }
      ]
    },
    {
      "id": 401626455,
      "name": "Genesis",
      "niceName": "genesis",
      "models": [
        {
          "id": "Genesis_G80",
          "name": "G80",
          "niceName": "g80",
          "years": [
            {
              "id": 401597817,
              "year": 2017
            }
          ]
        },
        {
          "id": "Genesis_G90",
          "name": "G90",
          "niceName": "g90",
          "years": [
            {
              "id": 401597818,
              "year": 2017
            }
          ]
        }
      ]
    },
    {
      "id": 200347866,
      "name": "Geo",
      "niceName": "geo",
      "models": [
        {
          "id": "Geo_Metro",
          "name": "Metro",
          "niceName": "metro",
          "years": [
            {
              "id": 775,
              "year": 1990
            },
            {
              "id": 2115,
              "year": 1991
            },
            {
              "id": 776,
              "year": 1993
            },
            {
              "id": 2118,
              "year": 1995
            },
            {
              "id": 2119,
              "year": 1996
            },
            {
              "id": 2120,
              "year": 1997
            }
          ]
        },
        {
          "id": "Geo_Prizm",
          "name": "Prizm",
          "niceName": "prizm",
          "years": [
            {
              "id": 2123,
              "year": 1991
            },
            {
              "id": 777,
              "year": 1993
            },
            {
              "id": 2125,
              "year": 1994
            },
            {
              "id": 2126,
              "year": 1995
            },
            {
              "id": 778,
              "year": 1996
            },
            {
              "id": 2127,
              "year": 1997
            }
          ]
        },
        {
          "id": "Geo_Storm",
          "name": "Storm",
          "niceName": "storm",
          "years": [
            {
              "id": 779,
              "year": 1991
            },
            {
              "id": 2131,
              "year": 1993
            }
          ]
        },
        {
          "id": "Geo_Tracker",
          "name": "Tracker",
          "niceName": "tracker",
          "years": [
            {
              "id": 2132,
              "year": 1990
            },
            {
              "id": 2133,
              "year": 1991
            },
            {
              "id": 781,
              "year": 1992
            },
            {
              "id": 2134,
              "year": 1993
            },
            {
              "id": 2136,
              "year": 1995
            },
            {
              "id": 2137,
              "year": 1996
            }
          ]
        }
      ]
    },
    {
      "id": 200004021,
      "name": "HUMMER",
      "niceName": "hummer",
      "models": [
        {
          "id": "HUMMER_H1",
          "name": "H1",
          "niceName": "h1",
          "years": [
            {
              "id": 100000268,
              "year": 2001
            },
            {
              "id": 100000547,
              "year": 2002
            },
            {
              "id": 100502808,
              "year": 2003
            },
            {
              "id": 100503200,
              "year": 2004
            }
          ]
        },
        {
          "id": "HUMMER_H1_Alpha",
          "name": "H1 Alpha",
          "niceName": "h1-alpha",
          "years": [
            {
              "id": 100505285,
              "year": 2006
            }
          ]
        },
        {
          "id": "HUMMER_H2",
          "name": "H2",
          "niceName": "h2",
          "years": [
            {
              "id": 100502708,
              "year": 2003
            },
            {
              "id": 100503201,
              "year": 2004
            },
            {
              "id": 100503955,
              "year": 2005
            },
            {
              "id": 100506152,
              "year": 2006
            },
            {
              "id": 100516941,
              "year": 2007
            },
            {
              "id": 100523646,
              "year": 2008
            },
            {
              "id": 100525789,
              "year": 2009
            }
          ]
        },
        {
          "id": "HUMMER_H2_SUT",
          "name": "H2 SUT",
          "niceName": "h2-sut",
          "years": [
            {
              "id": 100502968,
              "year": 2005
            },
            {
              "id": 100506153,
              "year": 2006
            },
            {
              "id": 100516942,
              "year": 2007
            },
            {
              "id": 100523647,
              "year": 2008
            },
            {
              "id": 100525790,
              "year": 2009
            }
          ]
        },
        {
          "id": "HUMMER_H3",
          "name": "H3",
          "niceName": "h3",
          "years": [
            {
              "id": 100503516,
              "year": 2006
            },
            {
              "id": 100516943,
              "year": 2007
            },
            {
              "id": 100523393,
              "year": 2008
            },
            {
              "id": 100525550,
              "year": 2009
            },
            {
              "id": 100530709,
              "year": 2010
            }
          ]
        },
        {
          "id": "HUMMER_H3T",
          "name": "H3T",
          "niceName": "h3t",
          "years": [
            {
              "id": 100524797,
              "year": 2009
            },
            {
              "id": 100530729,
              "year": 2010
            }
          ]
        }
      ]
    },
    {
      "id": 200001444,
      "name": "Honda",
      "niceName": "honda",
      "models": [
        {
          "id": "Honda_Accord",
          "name": "Accord",
          "niceName": "accord",
          "years": [
            {
              "id": 2141,
              "year": 1991
            },
            {
              "id": 782,
              "year": 1992
            },
            {
              "id": 783,
              "year": 1995
            },
            {
              "id": 2144,
              "year": 1996
            },
            {
              "id": 2145,
              "year": 1997
            },
            {
              "id": 784,
              "year": 1998
            },
            {
              "id": 984,
              "year": 1999
            },
            {
              "id": 1036,
              "year": 2000
            },
            {
              "id": 100000126,
              "year": 2001
            },
            {
              "id": 100000402,
              "year": 2002
            },
            {
              "id": 100502660,
              "year": 2003
            },
            {
              "id": 100503589,
              "year": 2004
            },
            {
              "id": 100504722,
              "year": 2005
            },
            {
              "id": 100506726,
              "year": 2006
            },
            {
              "id": 100506193,
              "year": 2007
            },
            {
              "id": 100522687,
              "year": 2008
            },
            {
              "id": 100520407,
              "year": 2009
            },
            {
              "id": 100529149,
              "year": 2010
            },
            {
              "id": 100532409,
              "year": 2011
            },
            {
              "id": 100537089,
              "year": 2012
            },
            {
              "id": 100537293,
              "year": 2013
            },
            {
              "id": 200487197,
              "year": 2014
            },
            {
              "id": 200709376,
              "year": 2015
            },
            {
              "id": 200751251,
              "year": 2016
            },
            {
              "id": 401649920,
              "year": 2017
            }
          ]
        },
        {
          "id": "Honda_Accord_Crosstour",
          "name": "Accord Crosstour",
          "niceName": "accord-crosstour",
          "years": [
            {
              "id": 100527329,
              "year": 2010
            },
            {
              "id": 100533989,
              "year": 2011
            }
          ]
        },
        {
          "id": "Honda_Accord_Hybrid",
          "name": "Accord Hybrid",
          "niceName": "accord-hybrid",
          "years": [
            {
              "id": 200491738,
              "year": 2014
            },
            {
              "id": 200709439,
              "year": 2015
            },
            {
              "id": 401644272,
              "year": 2017
            }
          ]
        },
        {
          "id": "Honda_Accord_Plug_In_Hybrid",
          "name": "Accord Plug-In Hybrid",
          "niceName": "accord-plug-in-hybrid",
          "years": [
            {
              "id": 200434262,
              "year": 2014
            }
          ]
        },
        {
          "id": "Honda_CR_V",
          "name": "CR-V",
          "niceName": "cr-v",
          "years": [
            {
              "id": 2147,
              "year": 1998
            },
            {
              "id": 3536,
              "year": 1999
            },
            {
              "id": 422,
              "year": 2000
            },
            {
              "id": 100000120,
              "year": 2001
            },
            {
              "id": 100000403,
              "year": 2002
            },
            {
              "id": 100502803,
              "year": 2003
            },
            {
              "id": 100503591,
              "year": 2004
            },
            {
              "id": 100505003,
              "year": 2005
            },
            {
              "id": 100506803,
              "year": 2006
            },
            {
              "id": 100506641,
              "year": 2007
            },
            {
              "id": 100524189,
              "year": 2008
            },
            {
              "id": 100526231,
              "year": 2009
            },
            {
              "id": 100529529,
              "year": 2010
            },
            {
              "id": 100533329,
              "year": 2011
            },
            {
              "id": 100532093,
              "year": 2012
            },
            {
              "id": 100535794,
              "year": 2013
            },
            {
              "id": 200484876,
              "year": 2014
            },
            {
              "id": 200701069,
              "year": 2015
            },
            {
              "id": 401582803,
              "year": 2016
            }
          ]
        },
        {
          "id": "Honda_CR_Z",
          "name": "CR-Z",
          "niceName": "cr-z",
          "years": [
            {
              "id": 100529589,
              "year": 2011
            },
            {
              "id": 100538149,
              "year": 2012
            },
            {
              "id": 200443500,
              "year": 2013
            },
            {
              "id": 200492712,
              "year": 2014
            },
            {
              "id": 200717067,
              "year": 2015
            },
            {
              "id": 401613419,
              "year": 2016
            }
          ]
        },
        {
          "id": "Honda_Civic",
          "name": "Civic",
          "niceName": "civic",
          "years": [
            {
              "id": 2148,
              "year": 1990
            },
            {
              "id": 2149,
              "year": 1991
            },
            {
              "id": 786,
              "year": 1992
            },
            {
              "id": 2150,
              "year": 1993
            },
            {
              "id": 2151,
              "year": 1994
            },
            {
              "id": 2153,
              "year": 1996
            },
            {
              "id": 2154,
              "year": 1997
            },
            {
              "id": 2155,
              "year": 1998
            },
            {
              "id": 3537,
              "year": 1999
            },
            {
              "id": 1037,
              "year": 2000
            },
            {
              "id": 100000125,
              "year": 2001
            },
            {
              "id": 100000404,
              "year": 2002
            },
            {
              "id": 100502614,
              "year": 2003
            },
            {
              "id": 100503590,
              "year": 2004
            },
            {
              "id": 100505002,
              "year": 2005
            },
            {
              "id": 100505525,
              "year": 2006
            },
            {
              "id": 100507585,
              "year": 2007
            },
            {
              "id": 100524174,
              "year": 2008
            },
            {
              "id": 100526054,
              "year": 2009
            },
            {
              "id": 100529531,
              "year": 2010
            },
            {
              "id": 100533309,
              "year": 2011
            },
            {
              "id": 100529573,
              "year": 2012
            },
            {
              "id": 200442557,
              "year": 2013
            },
            {
              "id": 200498296,
              "year": 2014
            },
            {
              "id": 200714221,
              "year": 2015
            },
            {
              "id": 200731211,
              "year": 2016
            },
            {
              "id": 401660820,
              "year": 2017
            }
          ]
        },
        {
          "id": "Honda_Civic_del_Sol",
          "name": "Civic del Sol",
          "niceName": "civic-del-sol",
          "years": [
            {
              "id": 2160,
              "year": 1994
            },
            {
              "id": 2161,
              "year": 1995
            },
            {
              "id": 2162,
              "year": 1996
            },
            {
              "id": 3538,
              "year": 1997
            }
          ]
        },
        {
          "id": "Honda_Clarity",
          "name": "Clarity",
          "niceName": "clarity",
          "years": [
            {
              "id": 401642054,
              "year": 2017
            }
          ]
        },
        {
          "id": "Honda_Crosstour",
          "name": "Crosstour",
          "niceName": "crosstour",
          "years": [
            {
              "id": 100536772,
              "year": 2012
            },
            {
              "id": 200433234,
              "year": 2013
            },
            {
              "id": 200491348,
              "year": 2014
            },
            {
              "id": 200712325,
              "year": 2015
            }
          ]
        },
        {
          "id": "Honda_Element",
          "name": "Element",
          "niceName": "element",
          "years": [
            {
              "id": 100502661,
              "year": 2003
            },
            {
              "id": 100503592,
              "year": 2004
            },
            {
              "id": 100505004,
              "year": 2005
            },
            {
              "id": 100507043,
              "year": 2006
            },
            {
              "id": 100519283,
              "year": 2007
            },
            {
              "id": 100523474,
              "year": 2008
            },
            {
              "id": 100526494,
              "year": 2009
            },
            {
              "id": 100530229,
              "year": 2010
            },
            {
              "id": 100533652,
              "year": 2011
            }
          ]
        },
        {
          "id": "Honda_Fit",
          "name": "Fit",
          "niceName": "fit",
          "years": [
            {
              "id": 100504587,
              "year": 2007
            },
            {
              "id": 100524129,
              "year": 2008
            },
            {
              "id": 100525430,
              "year": 2009
            },
            {
              "id": 100529013,
              "year": 2010
            },
            {
              "id": 100533889,
              "year": 2011
            },
            {
              "id": 100537109,
              "year": 2012
            },
            {
              "id": 100537292,
              "year": 2013
            },
            {
              "id": 200498131,
              "year": 2015
            },
            {
              "id": 200742363,
              "year": 2016
            },
            {
              "id": 401666660,
              "year": 2017
            }
          ]
        },
        {
          "id": "Honda_Fit_EV",
          "name": "Fit EV",
          "niceName": "fit-ev",
          "years": [
            {
              "id": 100537309,
              "year": 2013
            },
            {
              "id": 200692111,
              "year": 2014
            }
          ]
        },
        {
          "id": "Honda_HR_V",
          "name": "HR-V",
          "niceName": "hr-v",
          "years": [
            {
              "id": 200723508,
              "year": 2016
            },
            {
              "id": 401672334,
              "year": 2017
            }
          ]
        },
        {
          "id": "Honda_Insight",
          "name": "Insight",
          "niceName": "insight",
          "years": [
            {
              "id": 430,
              "year": 2000
            },
            {
              "id": 100000124,
              "year": 2001
            },
            {
              "id": 100000405,
              "year": 2002
            },
            {
              "id": 100502804,
              "year": 2003
            },
            {
              "id": 100503593,
              "year": 2004
            },
            {
              "id": 100505005,
              "year": 2005
            },
            {
              "id": 100506899,
              "year": 2006
            },
            {
              "id": 100523196,
              "year": 2010
            },
            {
              "id": 100533869,
              "year": 2011
            },
            {
              "id": 100538229,
              "year": 2012
            },
            {
              "id": 200437625,
              "year": 2013
            },
            {
              "id": 200497237,
              "year": 2014
            }
          ]
        },
        {
          "id": "Honda_Odyssey",
          "name": "Odyssey",
          "niceName": "odyssey",
          "years": [
            {
              "id": 787,
              "year": 1995
            },
            {
              "id": 2163,
              "year": 1996
            },
            {
              "id": 2164,
              "year": 1997
            },
            {
              "id": 3539,
              "year": 1999
            },
            {
              "id": 382,
              "year": 2000
            },
            {
              "id": 100000127,
              "year": 2001
            },
            {
              "id": 100000406,
              "year": 2002
            },
            {
              "id": 100502805,
              "year": 2003
            },
            {
              "id": 100503594,
              "year": 2004
            },
            {
              "id": 100504442,
              "year": 2005
            },
            {
              "id": 100506621,
              "year": 2006
            },
            {
              "id": 100519443,
              "year": 2007
            },
            {
              "id": 100524311,
              "year": 2008
            },
            {
              "id": 100526089,
              "year": 2009
            },
            {
              "id": 100528789,
              "year": 2010
            },
            {
              "id": 100530590,
              "year": 2011
            },
            {
              "id": 100537589,
              "year": 2012
            },
            {
              "id": 200433235,
              "year": 2013
            },
            {
              "id": 200480808,
              "year": 2014
            },
            {
              "id": 200707731,
              "year": 2015
            },
            {
              "id": 200751250,
              "year": 2016
            },
            {
              "id": 401633972,
              "year": 2017
            }
          ]
        },
        {
          "id": "Honda_Passport",
          "name": "Passport",
          "niceName": "passport",
          "years": [
            {
              "id": 2165,
              "year": 1994
            },
            {
              "id": 2166,
              "year": 1995
            },
            {
              "id": 789,
              "year": 1996
            },
            {
              "id": 2168,
              "year": 1998
            },
            {
              "id": 3540,
              "year": 1999
            },
            {
              "id": 415,
              "year": 2000
            },
            {
              "id": 100000123,
              "year": 2001
            },
            {
              "id": 100000407,
              "year": 2002
            }
          ]
        },
        {
          "id": "Honda_Pilot",
          "name": "Pilot",
          "niceName": "pilot",
          "years": [
            {
              "id": 100502700,
              "year": 2003
            },
            {
              "id": 100503595,
              "year": 2004
            },
            {
              "id": 100505006,
              "year": 2005
            },
            {
              "id": 100506446,
              "year": 2006
            },
            {
              "id": 100519282,
              "year": 2007
            },
            {
              "id": 100523489,
              "year": 2008
            },
            {
              "id": 100524031,
              "year": 2009
            },
            {
              "id": 100528269,
              "year": 2010
            },
            {
              "id": 100531729,
              "year": 2011
            },
            {
              "id": 100537269,
              "year": 2012
            },
            {
              "id": 200433126,
              "year": 2013
            },
            {
              "id": 200488647,
              "year": 2014
            },
            {
              "id": 200698679,
              "year": 2015
            },
            {
              "id": 200707980,
              "year": 2016
            }
          ]
        },
        {
          "id": "Honda_Prelude",
          "name": "Prelude",
          "niceName": "prelude",
          "years": [
            {
              "id": 2169,
              "year": 1990
            },
            {
              "id": 2171,
              "year": 1992
            },
            {
              "id": 2172,
              "year": 1993
            },
            {
              "id": 2173,
              "year": 1994
            },
            {
              "id": 2175,
              "year": 1997
            },
            {
              "id": 792,
              "year": 1998
            },
            {
              "id": 3541,
              "year": 1999
            },
            {
              "id": 425,
              "year": 2000
            },
            {
              "id": 100000122,
              "year": 2001
            }
          ]
        },
        {
          "id": "Honda_Ridgeline",
          "name": "Ridgeline",
          "niceName": "ridgeline",
          "years": [
            {
              "id": 100503987,
              "year": 2006
            },
            {
              "id": 100516825,
              "year": 2007
            },
            {
              "id": 100523475,
              "year": 2008
            },
            {
              "id": 100525909,
              "year": 2009
            },
            {
              "id": 100529410,
              "year": 2010
            },
            {
              "id": 100532631,
              "year": 2011
            },
            {
              "id": 100538549,
              "year": 2012
            },
            {
              "id": 200440544,
              "year": 2013
            },
            {
              "id": 200489096,
              "year": 2014
            },
            {
              "id": 401625742,
              "year": 2017
            }
          ]
        },
        {
          "id": "Honda_S2000",
          "name": "S2000",
          "niceName": "s2000",
          "years": [
            {
              "id": 389,
              "year": 2000
            },
            {
              "id": 100000121,
              "year": 2001
            },
            {
              "id": 100000409,
              "year": 2002
            },
            {
              "id": 100502807,
              "year": 2003
            },
            {
              "id": 100503596,
              "year": 2004
            },
            {
              "id": 100505007,
              "year": 2005
            },
            {
              "id": 100506843,
              "year": 2006
            },
            {
              "id": 100519444,
              "year": 2007
            },
            {
              "id": 100524309,
              "year": 2008
            },
            {
              "id": 100526169,
              "year": 2009
            }
          ]
        }
      ]
    },
    {
      "id": 200001398,
      "name": "Hyundai",
      "niceName": "hyundai",
      "models": [
        {
          "id": "Hyundai_Accent",
          "name": "Accent",
          "niceName": "accent",
          "years": [
            {
              "id": 2031,
              "year": 1995
            },
            {
              "id": 2032,
              "year": 1996
            },
            {
              "id": 793,
              "year": 1997
            },
            {
              "id": 2033,
              "year": 1998
            },
            {
              "id": 495,
              "year": 1999
            },
            {
              "id": 398,
              "year": 2000
            },
            {
              "id": 100000131,
              "year": 2001
            },
            {
              "id": 100000383,
              "year": 2002
            },
            {
              "id": 100502809,
              "year": 2003
            },
            {
              "id": 100503603,
              "year": 2004
            },
            {
              "id": 100505165,
              "year": 2005
            },
            {
              "id": 100505346,
              "year": 2006
            },
            {
              "id": 100505990,
              "year": 2007
            },
            {
              "id": 100524074,
              "year": 2008
            },
            {
              "id": 100526010,
              "year": 2009
            },
            {
              "id": 100529969,
              "year": 2010
            },
            {
              "id": 100532650,
              "year": 2011
            },
            {
              "id": 100532431,
              "year": 2012
            },
            {
              "id": 200422135,
              "year": 2013
            },
            {
              "id": 200496657,
              "year": 2014
            },
            {
              "id": 200721178,
              "year": 2015
            },
            {
              "id": 200759750,
              "year": 2016
            }
          ]
        },
        {
          "id": "Hyundai_Azera",
          "name": "Azera",
          "niceName": "azera",
          "years": [
            {
              "id": 100505648,
              "year": 2006
            },
            {
              "id": 100519441,
              "year": 2007
            },
            {
              "id": 100524069,
              "year": 2008
            },
            {
              "id": 100525169,
              "year": 2009
            },
            {
              "id": 100529469,
              "year": 2010
            },
            {
              "id": 100531211,
              "year": 2011
            },
            {
              "id": 100536269,
              "year": 2012
            },
            {
              "id": 200438114,
              "year": 2013
            },
            {
              "id": 200675619,
              "year": 2014
            },
            {
              "id": 200723217,
              "year": 2015
            },
            {
              "id": 401590268,
              "year": 2016
            }
          ]
        },
        {
          "id": "Hyundai_Elantra",
          "name": "Elantra",
          "niceName": "elantra",
          "years": [
            {
              "id": 2034,
              "year": 1992
            },
            {
              "id": 794,
              "year": 1993
            },
            {
              "id": 2035,
              "year": 1994
            },
            {
              "id": 2036,
              "year": 1995
            },
            {
              "id": 2037,
              "year": 1996
            },
            {
              "id": 795,
              "year": 1997
            },
            {
              "id": 2038,
              "year": 1998
            },
            {
              "id": 1232,
              "year": 1999
            },
            {
              "id": 1071,
              "year": 2000
            },
            {
              "id": 100000132,
              "year": 2001
            },
            {
              "id": 100000425,
              "year": 2002
            },
            {
              "id": 100502810,
              "year": 2003
            },
            {
              "id": 100503607,
              "year": 2004
            },
            {
              "id": 100505166,
              "year": 2005
            },
            {
              "id": 100505347,
              "year": 2006
            },
            {
              "id": 100507059,
              "year": 2007
            },
            {
              "id": 100523192,
              "year": 2008
            },
            {
              "id": 100526429,
              "year": 2009
            },
            {
              "id": 100528929,
              "year": 2010
            },
            {
              "id": 100533909,
              "year": 2011
            },
            {
              "id": 100531212,
              "year": 2012
            },
            {
              "id": 100539409,
              "year": 2013
            },
            {
              "id": 200499021,
              "year": 2014
            },
            {
              "id": 200700027,
              "year": 2015
            },
            {
              "id": 200711257,
              "year": 2016
            },
            {
              "id": 401627592,
              "year": 2017
            }
          ]
        },
        {
          "id": "Hyundai_Elantra_Coupe",
          "name": "Elantra Coupe",
          "niceName": "elantra-coupe",
          "years": [
            {
              "id": 100539232,
              "year": 2013
            },
            {
              "id": 200676051,
              "year": 2014
            }
          ]
        },
        {
          "id": "Hyundai_Elantra_GT",
          "name": "Elantra GT",
          "niceName": "elantra-gt",
          "years": [
            {
              "id": 100539233,
              "year": 2013
            },
            {
              "id": 200498782,
              "year": 2014
            },
            {
              "id": 200723534,
              "year": 2015
            },
            {
              "id": 200728304,
              "year": 2016
            },
            {
              "id": 401667436,
              "year": 2017
            }
          ]
        },
        {
          "id": "Hyundai_Elantra_Touring",
          "name": "Elantra Touring",
          "niceName": "elantra-touring",
          "years": [
            {
              "id": 100526849,
              "year": 2009
            },
            {
              "id": 100528930,
              "year": 2010
            },
            {
              "id": 100532449,
              "year": 2011
            },
            {
              "id": 100536069,
              "year": 2012
            }
          ]
        },
        {
          "id": "Hyundai_Entourage",
          "name": "Entourage",
          "niceName": "entourage",
          "years": [
            {
              "id": 100506106,
              "year": 2007
            },
            {
              "id": 100524070,
              "year": 2008
            }
          ]
        },
        {
          "id": "Hyundai_Equus",
          "name": "Equus",
          "niceName": "equus",
          "years": [
            {
              "id": 100528570,
              "year": 2011
            },
            {
              "id": 100538109,
              "year": 2012
            },
            {
              "id": 200423831,
              "year": 2013
            },
            {
              "id": 200481967,
              "year": 2014
            },
            {
              "id": 200738131,
              "year": 2016
            }
          ]
        },
        {
          "id": "Hyundai_Excel",
          "name": "Excel",
          "niceName": "excel",
          "years": [
            {
              "id": 796,
              "year": 1990
            },
            {
              "id": 2040,
              "year": 1991
            },
            {
              "id": 2041,
              "year": 1992
            },
            {
              "id": 2042,
              "year": 1993
            },
            {
              "id": 2043,
              "year": 1994
            }
          ]
        },
        {
          "id": "Hyundai_Genesis",
          "name": "Genesis",
          "niceName": "genesis",
          "years": [
            {
              "id": 100506639,
              "year": 2009
            },
            {
              "id": 100529770,
              "year": 2010
            },
            {
              "id": 100532610,
              "year": 2011
            },
            {
              "id": 100532951,
              "year": 2012
            },
            {
              "id": 200434721,
              "year": 2013
            },
            {
              "id": 200494125,
              "year": 2014
            },
            {
              "id": 200462824,
              "year": 2015
            },
            {
              "id": 401593919,
              "year": 2016
            }
          ]
        },
        {
          "id": "Hyundai_Genesis_Coupe",
          "name": "Genesis Coupe",
          "niceName": "genesis-coupe",
          "years": [
            {
              "id": 100524799,
              "year": 2010
            },
            {
              "id": 100533069,
              "year": 2011
            },
            {
              "id": 100534629,
              "year": 2012
            },
            {
              "id": 100538969,
              "year": 2013
            },
            {
              "id": 200676588,
              "year": 2014
            },
            {
              "id": 200706210,
              "year": 2015
            },
            {
              "id": 401597974,
              "year": 2016
            }
          ]
        },
        {
          "id": "Hyundai_Ioniq",
          "name": "Ioniq",
          "niceName": "ioniq",
          "years": [
            {
              "id": 401614157,
              "year": 2017
            }
          ]
        },
        {
          "id": "Hyundai_Santa_Fe",
          "name": "Santa Fe",
          "niceName": "santa-fe",
          "years": [
            {
              "id": 100000133,
              "year": 2001
            },
            {
              "id": 100000426,
              "year": 2002
            },
            {
              "id": 100502811,
              "year": 2003
            },
            {
              "id": 100503605,
              "year": 2004
            },
            {
              "id": 100505187,
              "year": 2005
            },
            {
              "id": 100506725,
              "year": 2006
            },
            {
              "id": 100506150,
              "year": 2007
            },
            {
              "id": 100524071,
              "year": 2008
            },
            {
              "id": 100527309,
              "year": 2009
            },
            {
              "id": 100530909,
              "year": 2010
            },
            {
              "id": 100533649,
              "year": 2011
            },
            {
              "id": 100536629,
              "year": 2012
            },
            {
              "id": 100537291,
              "year": 2013
            },
            {
              "id": 200495361,
              "year": 2014
            },
            {
              "id": 200719207,
              "year": 2015
            },
            {
              "id": 200744830,
              "year": 2016
            },
            {
              "id": 401628704,
              "year": 2017
            }
          ]
        },
        {
          "id": "Hyundai_Santa_Fe_Sport",
          "name": "Santa Fe Sport",
          "niceName": "santa-fe-sport",
          "years": [
            {
              "id": 200489878,
              "year": 2014
            },
            {
              "id": 200715969,
              "year": 2015
            },
            {
              "id": 200736734,
              "year": 2016
            },
            {
              "id": 401627422,
              "year": 2017
            }
          ]
        },
        {
          "id": "Hyundai_Scoupe",
          "name": "Scoupe",
          "niceName": "scoupe",
          "years": [
            {
              "id": 2044,
              "year": 1991
            },
            {
              "id": 2045,
              "year": 1992
            },
            {
              "id": 797,
              "year": 1993
            },
            {
              "id": 2046,
              "year": 1994
            },
            {
              "id": 2047,
              "year": 1995
            }
          ]
        },
        {
          "id": "Hyundai_Sonata",
          "name": "Sonata",
          "niceName": "sonata",
          "years": [
            {
              "id": 798,
              "year": 1990
            },
            {
              "id": 2049,
              "year": 1991
            },
            {
              "id": 2050,
              "year": 1992
            },
            {
              "id": 799,
              "year": 1993
            },
            {
              "id": 2051,
              "year": 1994
            },
            {
              "id": 2052,
              "year": 1995
            },
            {
              "id": 2053,
              "year": 1996
            },
            {
              "id": 800,
              "year": 1997
            },
            {
              "id": 2054,
              "year": 1998
            },
            {
              "id": 1233,
              "year": 1999
            },
            {
              "id": 1160,
              "year": 2000
            },
            {
              "id": 100000130,
              "year": 2001
            },
            {
              "id": 100000424,
              "year": 2002
            },
            {
              "id": 100502812,
              "year": 2003
            },
            {
              "id": 100503604,
              "year": 2004
            },
            {
              "id": 100503634,
              "year": 2005
            },
            {
              "id": 100505066,
              "year": 2006
            },
            {
              "id": 100516800,
              "year": 2007
            },
            {
              "id": 100523229,
              "year": 2008
            },
            {
              "id": 100524829,
              "year": 2009
            },
            {
              "id": 100528550,
              "year": 2010
            },
            {
              "id": 100526489,
              "year": 2011
            },
            {
              "id": 100535429,
              "year": 2012
            },
            {
              "id": 200417701,
              "year": 2013
            },
            {
              "id": 200491187,
              "year": 2014
            },
            {
              "id": 200485676,
              "year": 2015
            },
            {
              "id": 401575488,
              "year": 2016
            },
            {
              "id": 401655737,
              "year": 2017
            }
          ]
        },
        {
          "id": "Hyundai_Sonata_Hybrid",
          "name": "Sonata Hybrid",
          "niceName": "sonata-hybrid",
          "years": [
            {
              "id": 100531589,
              "year": 2011
            },
            {
              "id": 100539129,
              "year": 2012
            },
            {
              "id": 200463470,
              "year": 2013
            },
            {
              "id": 200689130,
              "year": 2014
            },
            {
              "id": 200706592,
              "year": 2015
            },
            {
              "id": 200741595,
              "year": 2016
            },
            {
              "id": 401676302,
              "year": 2017
            }
          ]
        },
        {
          "id": "Hyundai_Sonata_Plug_In_Hybrid",
          "name": "Sonata Plug-In Hybrid",
          "niceName": "sonata-plug-in-hybrid",
          "years": [
            {
              "id": 401597449,
              "year": 2016
            }
          ]
        },
        {
          "id": "Hyundai_Sonata_Plug_in_Hybrid",
          "name": "Sonata Plug-in Hybrid",
          "niceName": "sonata-plug-in-hybrid",
          "years": [
            {
              "id": 401672397,
              "year": 2017
            }
          ]
        },
        {
          "id": "Hyundai_Tiburon",
          "name": "Tiburon",
          "niceName": "tiburon",
          "years": [
            {
              "id": 2055,
              "year": 1997
            },
            {
              "id": 801,
              "year": 1998
            },
            {
              "id": 496,
              "year": 1999
            },
            {
              "id": 1161,
              "year": 2000
            },
            {
              "id": 100000129,
              "year": 2001
            },
            {
              "id": 100502601,
              "year": 2003
            },
            {
              "id": 100503606,
              "year": 2004
            },
            {
              "id": 100505188,
              "year": 2005
            },
            {
              "id": 100506920,
              "year": 2006
            },
            {
              "id": 100520366,
              "year": 2007
            },
            {
              "id": 100519102,
              "year": 2008
            }
          ]
        },
        {
          "id": "Hyundai_Tucson",
          "name": "Tucson",
          "niceName": "tucson",
          "years": [
            {
              "id": 100503789,
              "year": 2005
            },
            {
              "id": 100506919,
              "year": 2006
            },
            {
              "id": 100519401,
              "year": 2007
            },
            {
              "id": 100524073,
              "year": 2008
            },
            {
              "id": 100526394,
              "year": 2009
            },
            {
              "id": 100530829,
              "year": 2010
            },
            {
              "id": 100529749,
              "year": 2011
            },
            {
              "id": 100535889,
              "year": 2012
            },
            {
              "id": 200426222,
              "year": 2013
            },
            {
              "id": 200491825,
              "year": 2014
            },
            {
              "id": 200705603,
              "year": 2015
            },
            {
              "id": 200706999,
              "year": 2016
            },
            {
              "id": 401659779,
              "year": 2017
            }
          ]
        },
        {
          "id": "Hyundai_Veloster",
          "name": "Veloster",
          "niceName": "veloster",
          "years": [
            {
              "id": 100532094,
              "year": 2012
            },
            {
              "id": 100535749,
              "year": 2013
            },
            {
              "id": 200497333,
              "year": 2014
            },
            {
              "id": 200707492,
              "year": 2015
            },
            {
              "id": 200749829,
              "year": 2016
            }
          ]
        },
        {
          "id": "Hyundai_Veracruz",
          "name": "Veracruz",
          "niceName": "veracruz",
          "years": [
            {
              "id": 100522808,
              "year": 2007
            },
            {
              "id": 100512962,
              "year": 2008
            },
            {
              "id": 100527710,
              "year": 2009
            },
            {
              "id": 100523198,
              "year": 2010
            },
            {
              "id": 100532649,
              "year": 2011
            },
            {
              "id": 100537991,
              "year": 2012
            }
          ]
        },
        {
          "id": "Hyundai_XG300",
          "name": "XG300",
          "niceName": "xg300",
          "years": [
            {
              "id": 100000128,
              "year": 2001
            }
          ]
        },
        {
          "id": "Hyundai_XG350",
          "name": "XG350",
          "niceName": "xg350",
          "years": [
            {
              "id": 100000545,
              "year": 2002
            },
            {
              "id": 100502813,
              "year": 2003
            },
            {
              "id": 100503517,
              "year": 2004
            },
            {
              "id": 100505189,
              "year": 2005
            }
          ]
        }
      ]
    },
    {
      "id": 200000089,
      "name": "Infiniti",
      "niceName": "infiniti",
      "models": [
        {
          "id": "Infiniti_EX",
          "name": "EX",
          "niceName": "ex",
          "years": [
            {
              "id": 100533669,
              "year": 2011
            },
            {
              "id": 100537830,
              "year": 2012
            },
            {
              "id": 200437954,
              "year": 2013
            }
          ]
        },
        {
          "id": "Infiniti_EX35",
          "name": "EX35",
          "niceName": "ex35",
          "years": [
            {
              "id": 100506447,
              "year": 2008
            },
            {
              "id": 100528229,
              "year": 2009
            },
            {
              "id": 100530110,
              "year": 2010
            }
          ]
        },
        {
          "id": "Infiniti_FX",
          "name": "FX",
          "niceName": "fx",
          "years": [
            {
              "id": 100533530,
              "year": 2011
            },
            {
              "id": 100536749,
              "year": 2012
            },
            {
              "id": 200431549,
              "year": 2013
            }
          ]
        },
        {
          "id": "Infiniti_FX35",
          "name": "FX35",
          "niceName": "fx35",
          "years": [
            {
              "id": 100503099,
              "year": 2003
            },
            {
              "id": 100503098,
              "year": 2004
            },
            {
              "id": 100505190,
              "year": 2005
            },
            {
              "id": 100506660,
              "year": 2006
            },
            {
              "id": 100520187,
              "year": 2007
            },
            {
              "id": 100523369,
              "year": 2008
            },
            {
              "id": 100525409,
              "year": 2009
            },
            {
              "id": 100530389,
              "year": 2010
            }
          ]
        },
        {
          "id": "Infiniti_FX45",
          "name": "FX45",
          "niceName": "fx45",
          "years": [
            {
              "id": 100502681,
              "year": 2003
            },
            {
              "id": 100503581,
              "year": 2004
            },
            {
              "id": 100505191,
              "year": 2005
            },
            {
              "id": 100506659,
              "year": 2006
            },
            {
              "id": 100520188,
              "year": 2007
            },
            {
              "id": 100523370,
              "year": 2008
            }
          ]
        },
        {
          "id": "Infiniti_FX50",
          "name": "FX50",
          "niceName": "fx50",
          "years": [
            {
              "id": 100524029,
              "year": 2009
            },
            {
              "id": 100530409,
              "year": 2010
            }
          ]
        },
        {
          "id": "Infiniti_G_Convertible",
          "name": "G Convertible",
          "niceName": "g-convertible",
          "years": [
            {
              "id": 100533710,
              "year": 2011
            },
            {
              "id": 100535149,
              "year": 2012
            },
            {
              "id": 100538709,
              "year": 2013
            }
          ]
        },
        {
          "id": "Infiniti_G_Coupe",
          "name": "G Coupe",
          "niceName": "g-coupe",
          "years": [
            {
              "id": 100533709,
              "year": 2011
            },
            {
              "id": 100537729,
              "year": 2012
            },
            {
              "id": 200424002,
              "year": 2013
            }
          ]
        },
        {
          "id": "Infiniti_G_Sedan",
          "name": "G Sedan",
          "niceName": "g-sedan",
          "years": [
            {
              "id": 100533189,
              "year": 2011
            },
            {
              "id": 100537749,
              "year": 2012
            },
            {
              "id": 200437358,
              "year": 2013
            }
          ]
        },
        {
          "id": "Infiniti_G20",
          "name": "G20",
          "niceName": "g20",
          "years": [
            {
              "id": 2056,
              "year": 1991
            },
            {
              "id": 2057,
              "year": 1992
            },
            {
              "id": 2058,
              "year": 1993
            },
            {
              "id": 2059,
              "year": 1994
            },
            {
              "id": 2060,
              "year": 1995
            },
            {
              "id": 2061,
              "year": 1996
            },
            {
              "id": 3542,
              "year": 1999
            },
            {
              "id": 370,
              "year": 2000
            },
            {
              "id": 100000135,
              "year": 2001
            },
            {
              "id": 100000342,
              "year": 2002
            }
          ]
        },
        {
          "id": "Infiniti_G35",
          "name": "G35",
          "niceName": "g35",
          "years": [
            {
              "id": 100502587,
              "year": 2003
            },
            {
              "id": 100503582,
              "year": 2004
            },
            {
              "id": 100505192,
              "year": 2005
            },
            {
              "id": 100506661,
              "year": 2006
            },
            {
              "id": 100507179,
              "year": 2007
            },
            {
              "id": 100523589,
              "year": 2008
            }
          ]
        },
        {
          "id": "Infiniti_G37",
          "name": "G37",
          "niceName": "g37",
          "years": [
            {
              "id": 100522871,
              "year": 2008
            },
            {
              "id": 100526033,
              "year": 2009
            }
          ]
        },
        {
          "id": "Infiniti_G37_Convertible",
          "name": "G37 Convertible",
          "niceName": "g37-convertible",
          "years": [
            {
              "id": 100526871,
              "year": 2010
            }
          ]
        },
        {
          "id": "Infiniti_G37_Coupe",
          "name": "G37 Coupe",
          "niceName": "g37-coupe",
          "years": [
            {
              "id": 100530930,
              "year": 2010
            }
          ]
        },
        {
          "id": "Infiniti_G37_Sedan",
          "name": "G37 Sedan",
          "niceName": "g37-sedan",
          "years": [
            {
              "id": 100530931,
              "year": 2010
            }
          ]
        },
        {
          "id": "Infiniti_I30",
          "name": "I30",
          "niceName": "i30",
          "years": [
            {
              "id": 2062,
              "year": 1996
            },
            {
              "id": 802,
              "year": 1997
            },
            {
              "id": 2063,
              "year": 1998
            },
            {
              "id": 3543,
              "year": 1999
            },
            {
              "id": 513,
              "year": 2000
            },
            {
              "id": 100000137,
              "year": 2001
            }
          ]
        },
        {
          "id": "Infiniti_I35",
          "name": "I35",
          "niceName": "i35",
          "years": [
            {
              "id": 100000355,
              "year": 2002
            },
            {
              "id": 100502815,
              "year": 2003
            },
            {
              "id": 100503583,
              "year": 2004
            }
          ]
        },
        {
          "id": "Infiniti_J30",
          "name": "J30",
          "niceName": "j30",
          "years": [
            {
              "id": 2064,
              "year": 1993
            },
            {
              "id": 803,
              "year": 1994
            },
            {
              "id": 2065,
              "year": 1995
            },
            {
              "id": 2066,
              "year": 1996
            },
            {
              "id": 804,
              "year": 1997
            }
          ]
        },
        {
          "id": "Infiniti_JX",
          "name": "JX",
          "niceName": "jx",
          "years": [
            {
              "id": 100535129,
              "year": 2013
            }
          ]
        },
        {
          "id": "Infiniti_M",
          "name": "M",
          "niceName": "m",
          "years": [
            {
              "id": 100534509,
              "year": 2012
            },
            {
              "id": 200428546,
              "year": 2013
            }
          ]
        },
        {
          "id": "Infiniti_M30",
          "name": "M30",
          "niceName": "m30",
          "years": [
            {
              "id": 2068,
              "year": 1990
            },
            {
              "id": 805,
              "year": 1991
            },
            {
              "id": 2069,
              "year": 1992
            }
          ]
        },
        {
          "id": "Infiniti_M35",
          "name": "M35",
          "niceName": "m35",
          "years": [
            {
              "id": 100505466,
              "year": 2006
            },
            {
              "id": 100516861,
              "year": 2007
            },
            {
              "id": 100524610,
              "year": 2008
            },
            {
              "id": 100525410,
              "year": 2009
            },
            {
              "id": 100529669,
              "year": 2010
            }
          ]
        },
        {
          "id": "Infiniti_M37",
          "name": "M37",
          "niceName": "m37",
          "years": [
            {
              "id": 100531149,
              "year": 2011
            }
          ]
        },
        {
          "id": "Infiniti_M45",
          "name": "M45",
          "niceName": "m45",
          "years": [
            {
              "id": 100503584,
              "year": 2004
            },
            {
              "id": 100504142,
              "year": 2006
            },
            {
              "id": 100516862,
              "year": 2007
            },
            {
              "id": 100524611,
              "year": 2008
            },
            {
              "id": 100525411,
              "year": 2009
            },
            {
              "id": 100529670,
              "year": 2010
            }
          ]
        },
        {
          "id": "Infiniti_M56",
          "name": "M56",
          "niceName": "m56",
          "years": [
            {
              "id": 100529031,
              "year": 2011
            }
          ]
        },
        {
          "id": "Infiniti_Q40",
          "name": "Q40",
          "niceName": "q40",
          "years": [
            {
              "id": 200714132,
              "year": 2015
            }
          ]
        },
        {
          "id": "Infiniti_Q45",
          "name": "Q45",
          "niceName": "q45",
          "years": [
            {
              "id": 2070,
              "year": 1990
            },
            {
              "id": 2071,
              "year": 1991
            },
            {
              "id": 661,
              "year": 1992
            },
            {
              "id": 2072,
              "year": 1993
            },
            {
              "id": 2073,
              "year": 1994
            },
            {
              "id": 2074,
              "year": 1995
            },
            {
              "id": 2075,
              "year": 1996
            },
            {
              "id": 2076,
              "year": 1997
            },
            {
              "id": 662,
              "year": 1998
            },
            {
              "id": 3544,
              "year": 1999
            },
            {
              "id": 396,
              "year": 2000
            },
            {
              "id": 100000134,
              "year": 2001
            },
            {
              "id": 100000310,
              "year": 2002
            },
            {
              "id": 100502816,
              "year": 2003
            },
            {
              "id": 100503585,
              "year": 2004
            },
            {
              "id": 100504342,
              "year": 2005
            },
            {
              "id": 100506662,
              "year": 2006
            }
          ]
        },
        {
          "id": "Infiniti_Q50",
          "name": "Q50",
          "niceName": "q50",
          "years": [
            {
              "id": 200459660,
              "year": 2014
            },
            {
              "id": 200717535,
              "year": 2015
            },
            {
              "id": 401630272,
              "year": 2016
            }
          ]
        },
        {
          "id": "Infiniti_Q60_Convertible",
          "name": "Q60 Convertible",
          "niceName": "q60-convertible",
          "years": [
            {
              "id": 200485903,
              "year": 2014
            },
            {
              "id": 200720198,
              "year": 2015
            }
          ]
        },
        {
          "id": "Infiniti_Q60_Coupe",
          "name": "Q60 Coupe",
          "niceName": "q60-coupe",
          "years": [
            {
              "id": 200486875,
              "year": 2014
            },
            {
              "id": 200720252,
              "year": 2015
            },
            {
              "id": 200724867,
              "year": 2017
            }
          ]
        },
        {
          "id": "Infiniti_Q70",
          "name": "Q70",
          "niceName": "q70",
          "years": [
            {
              "id": 200676808,
              "year": 2014
            },
            {
              "id": 200711470,
              "year": 2015
            },
            {
              "id": 401613041,
              "year": 2016
            }
          ]
        },
        {
          "id": "Infiniti_QX",
          "name": "QX",
          "niceName": "qx",
          "years": [
            {
              "id": 100537550,
              "year": 2012
            },
            {
              "id": 200443082,
              "year": 2013
            }
          ]
        },
        {
          "id": "Infiniti_QX30",
          "name": "QX30",
          "niceName": "qx30",
          "years": [
            {
              "id": 200781954,
              "year": 2017
            }
          ]
        },
        {
          "id": "Infiniti_QX4",
          "name": "QX4",
          "niceName": "qx4",
          "years": [
            {
              "id": 2078,
              "year": 1997
            },
            {
              "id": 2079,
              "year": 1998
            },
            {
              "id": 3545,
              "year": 1999
            },
            {
              "id": 1162,
              "year": 2000
            },
            {
              "id": 100000136,
              "year": 2001
            },
            {
              "id": 100000510,
              "year": 2002
            },
            {
              "id": 100502817,
              "year": 2003
            }
          ]
        },
        {
          "id": "Infiniti_QX50",
          "name": "QX50",
          "niceName": "qx50",
          "years": [
            {
              "id": 200484163,
              "year": 2014
            },
            {
              "id": 401574226,
              "year": 2016
            },
            {
              "id": 401671430,
              "year": 2017
            }
          ]
        },
        {
          "id": "Infiniti_QX56",
          "name": "QX56",
          "niceName": "qx56",
          "years": [
            {
              "id": 100503281,
              "year": 2004
            },
            {
              "id": 100505193,
              "year": 2005
            },
            {
              "id": 100506622,
              "year": 2006
            },
            {
              "id": 100520189,
              "year": 2007
            },
            {
              "id": 100522366,
              "year": 2008
            },
            {
              "id": 100525412,
              "year": 2009
            },
            {
              "id": 100528049,
              "year": 2010
            },
            {
              "id": 100529489,
              "year": 2011
            }
          ]
        },
        {
          "id": "Infiniti_QX60",
          "name": "QX60",
          "niceName": "qx60",
          "years": [
            {
              "id": 200466055,
              "year": 2014
            },
            {
              "id": 200717061,
              "year": 2015
            },
            {
              "id": 401630503,
              "year": 2016
            }
          ]
        },
        {
          "id": "Infiniti_QX70",
          "name": "QX70",
          "niceName": "qx70",
          "years": [
            {
              "id": 200482321,
              "year": 2014
            },
            {
              "id": 200697893,
              "year": 2015
            },
            {
              "id": 200736081,
              "year": 2016
            },
            {
              "id": 401661090,
              "year": 2017
            }
          ]
        },
        {
          "id": "Infiniti_QX80",
          "name": "QX80",
          "niceName": "qx80",
          "years": [
            {
              "id": 200483976,
              "year": 2014
            },
            {
              "id": 200714541,
              "year": 2015
            },
            {
              "id": 401610857,
              "year": 2016
            }
          ]
        }
      ]
    },
    {
      "id": 200110731,
      "name": "Isuzu",
      "niceName": "isuzu",
      "models": [
        {
          "id": "Isuzu_Amigo",
          "name": "Amigo",
          "niceName": "amigo",
          "years": [
            {
              "id": 2080,
              "year": 1990
            },
            {
              "id": 2081,
              "year": 1991
            },
            {
              "id": 664,
              "year": 1992
            },
            {
              "id": 2082,
              "year": 1993
            },
            {
              "id": 2083,
              "year": 1994
            },
            {
              "id": 665,
              "year": 1998
            },
            {
              "id": 3546,
              "year": 1999
            },
            {
              "id": 294,
              "year": 2000
            }
          ]
        },
        {
          "id": "Isuzu_Ascender",
          "name": "Ascender",
          "niceName": "ascender",
          "years": [
            {
              "id": 100502683,
              "year": 2003
            },
            {
              "id": 100503637,
              "year": 2004
            },
            {
              "id": 100505194,
              "year": 2005
            },
            {
              "id": 100506801,
              "year": 2006
            },
            {
              "id": 100516983,
              "year": 2007
            },
            {
              "id": 100524216,
              "year": 2008
            }
          ]
        },
        {
          "id": "Isuzu_Axiom",
          "name": "Axiom",
          "niceName": "axiom",
          "years": [
            {
              "id": 100000307,
              "year": 2002
            },
            {
              "id": 100502818,
              "year": 2003
            },
            {
              "id": 100503660,
              "year": 2004
            }
          ]
        },
        {
          "id": "Isuzu_Hombre",
          "name": "Hombre",
          "niceName": "hombre",
          "years": [
            {
              "id": 2089,
              "year": 1996
            },
            {
              "id": 2090,
              "year": 1997
            },
            {
              "id": 2091,
              "year": 1998
            },
            {
              "id": 3547,
              "year": 1999
            },
            {
              "id": 426,
              "year": 2000
            }
          ]
        },
        {
          "id": "Isuzu_Impulse",
          "name": "Impulse",
          "niceName": "impulse",
          "years": [
            {
              "id": 668,
              "year": 1990
            },
            {
              "id": 2094,
              "year": 1991
            },
            {
              "id": 2095,
              "year": 1992
            }
          ]
        },
        {
          "id": "Isuzu_Oasis",
          "name": "Oasis",
          "niceName": "oasis",
          "years": [
            {
              "id": 669,
              "year": 1996
            },
            {
              "id": 2096,
              "year": 1997
            },
            {
              "id": 2097,
              "year": 1998
            },
            {
              "id": 3548,
              "year": 1999
            }
          ]
        },
        {
          "id": "Isuzu_Pickup",
          "name": "Pickup",
          "niceName": "pickup",
          "years": [
            {
              "id": 666,
              "year": 1991
            },
            {
              "id": 2086,
              "year": 1992
            },
            {
              "id": 2087,
              "year": 1993
            },
            {
              "id": 667,
              "year": 1994
            },
            {
              "id": 2088,
              "year": 1995
            }
          ]
        },
        {
          "id": "Isuzu_Rodeo",
          "name": "Rodeo",
          "niceName": "rodeo",
          "years": [
            {
              "id": 2101,
              "year": 1992
            },
            {
              "id": 2102,
              "year": 1993
            },
            {
              "id": 672,
              "year": 1994
            },
            {
              "id": 2103,
              "year": 1995
            },
            {
              "id": 1959,
              "year": 1996
            },
            {
              "id": 673,
              "year": 1997
            },
            {
              "id": 1960,
              "year": 1998
            },
            {
              "id": 3549,
              "year": 1999
            },
            {
              "id": 420,
              "year": 2000
            },
            {
              "id": 100000138,
              "year": 2001
            },
            {
              "id": 100000454,
              "year": 2002
            },
            {
              "id": 100502819,
              "year": 2003
            },
            {
              "id": 100503661,
              "year": 2004
            }
          ]
        },
        {
          "id": "Isuzu_Rodeo_Sport",
          "name": "Rodeo Sport",
          "niceName": "rodeo-sport",
          "years": [
            {
              "id": 100000140,
              "year": 2001
            },
            {
              "id": 100000455,
              "year": 2002
            },
            {
              "id": 100502820,
              "year": 2003
            }
          ]
        },
        {
          "id": "Isuzu_Stylus",
          "name": "Stylus",
          "niceName": "stylus",
          "years": [
            {
              "id": 1961,
              "year": 1991
            },
            {
              "id": 1962,
              "year": 1992
            },
            {
              "id": 1963,
              "year": 1993
            }
          ]
        },
        {
          "id": "Isuzu_Trooper",
          "name": "Trooper",
          "niceName": "trooper",
          "years": [
            {
              "id": 1964,
              "year": 1990
            },
            {
              "id": 1965,
              "year": 1991
            },
            {
              "id": 1966,
              "year": 1992
            },
            {
              "id": 1967,
              "year": 1993
            },
            {
              "id": 674,
              "year": 1994
            },
            {
              "id": 1968,
              "year": 1995
            },
            {
              "id": 1969,
              "year": 1996
            },
            {
              "id": 675,
              "year": 1997
            },
            {
              "id": 3550,
              "year": 1999
            },
            {
              "id": 100000139,
              "year": 2001
            },
            {
              "id": 100000531,
              "year": 2002
            }
          ]
        },
        {
          "id": "Isuzu_VehiCROSS",
          "name": "VehiCROSS",
          "niceName": "vehicross",
          "years": [
            {
              "id": 3551,
              "year": 1999
            },
            {
              "id": 443,
              "year": 2000
            },
            {
              "id": 100000141,
              "year": 2001
            }
          ]
        },
        {
          "id": "Isuzu_i_Series",
          "name": "i-Series",
          "niceName": "i-series",
          "years": [
            {
              "id": 100505570,
              "year": 2006
            },
            {
              "id": 100516984,
              "year": 2007
            }
          ]
        }
      ]
    },
    {
      "id": 200003196,
      "name": "Jaguar",
      "niceName": "jaguar",
      "models": [
        {
          "id": "Jaguar_F_PACE",
          "name": "F-PACE",
          "niceName": "f-pace",
          "years": [
            {
              "id": 200722245,
              "year": 2017
            }
          ]
        },
        {
          "id": "Jaguar_F_TYPE",
          "name": "F-TYPE",
          "niceName": "f-type",
          "years": [
            {
              "id": 200429469,
              "year": 2014
            },
            {
              "id": 200673383,
              "year": 2015
            },
            {
              "id": 200721393,
              "year": 2016
            },
            {
              "id": 401631556,
              "year": 2017
            }
          ]
        },
        {
          "id": "Jaguar_S_Type",
          "name": "S-Type",
          "niceName": "s-type",
          "years": [
            {
              "id": 497,
              "year": 2000
            },
            {
              "id": 100000144,
              "year": 2001
            },
            {
              "id": 100000475,
              "year": 2002
            },
            {
              "id": 100502822,
              "year": 2003
            },
            {
              "id": 100503518,
              "year": 2004
            },
            {
              "id": 100504363,
              "year": 2005
            },
            {
              "id": 100506006,
              "year": 2006
            },
            {
              "id": 100519421,
              "year": 2007
            },
            {
              "id": 100522787,
              "year": 2008
            }
          ]
        },
        {
          "id": "Jaguar_X_Type",
          "name": "X-Type",
          "niceName": "x-type",
          "years": [
            {
              "id": 100000345,
              "year": 2002
            },
            {
              "id": 100502825,
              "year": 2003
            },
            {
              "id": 100503643,
              "year": 2004
            },
            {
              "id": 100504942,
              "year": 2005
            },
            {
              "id": 100506007,
              "year": 2006
            },
            {
              "id": 100520081,
              "year": 2007
            },
            {
              "id": 100523049,
              "year": 2008
            }
          ]
        },
        {
          "id": "Jaguar_XE",
          "name": "XE",
          "niceName": "xe",
          "years": [
            {
              "id": 200716564,
              "year": 2017
            }
          ]
        },
        {
          "id": "Jaguar_XF",
          "name": "XF",
          "niceName": "xf",
          "years": [
            {
              "id": 100524579,
              "year": 2009
            },
            {
              "id": 100526191,
              "year": 2010
            },
            {
              "id": 100531869,
              "year": 2011
            },
            {
              "id": 100534770,
              "year": 2012
            },
            {
              "id": 200443906,
              "year": 2013
            },
            {
              "id": 200487071,
              "year": 2014
            },
            {
              "id": 200700118,
              "year": 2015
            },
            {
              "id": 200730062,
              "year": 2016
            },
            {
              "id": 401630426,
              "year": 2017
            }
          ]
        },
        {
          "id": "Jaguar_XJ",
          "name": "XJ",
          "niceName": "xj",
          "years": [
            {
              "id": 100525529,
              "year": 2009
            },
            {
              "id": 100527233,
              "year": 2011
            },
            {
              "id": 100535649,
              "year": 2012
            },
            {
              "id": 200426899,
              "year": 2013
            },
            {
              "id": 200466177,
              "year": 2014
            },
            {
              "id": 200701748,
              "year": 2015
            },
            {
              "id": 401583347,
              "year": 2016
            }
          ]
        },
        {
          "id": "Jaguar_XJ_Series",
          "name": "XJ-Series",
          "niceName": "xj-series",
          "years": [
            {
              "id": 676,
              "year": 1990
            },
            {
              "id": 1973,
              "year": 1991
            },
            {
              "id": 1974,
              "year": 1992
            },
            {
              "id": 677,
              "year": 1993
            },
            {
              "id": 1975,
              "year": 1994
            },
            {
              "id": 1976,
              "year": 1995
            },
            {
              "id": 678,
              "year": 1996
            },
            {
              "id": 1978,
              "year": 1998
            },
            {
              "id": 3552,
              "year": 1999
            },
            {
              "id": 957,
              "year": 2000
            },
            {
              "id": 100000145,
              "year": 2001
            },
            {
              "id": 100000476,
              "year": 2002
            },
            {
              "id": 100502823,
              "year": 2003
            },
            {
              "id": 100502985,
              "year": 2004
            },
            {
              "id": 100503657,
              "year": 2005
            },
            {
              "id": 100506005,
              "year": 2006
            },
            {
              "id": 100519303,
              "year": 2007
            },
            {
              "id": 100523249,
              "year": 2008
            }
          ]
        },
        {
          "id": "Jaguar_XJR",
          "name": "XJR",
          "niceName": "xjr",
          "years": [
            {
              "id": 100504025,
              "year": 1995
            },
            {
              "id": 100504024,
              "year": 1996
            },
            {
              "id": 100504023,
              "year": 1997
            },
            {
              "id": 100504021,
              "year": 1999
            },
            {
              "id": 959,
              "year": 2000
            }
          ]
        },
        {
          "id": "Jaguar_XK",
          "name": "XK",
          "niceName": "xk",
          "years": [
            {
              "id": 100525089,
              "year": 2009
            },
            {
              "id": 100527149,
              "year": 2010
            },
            {
              "id": 100531351,
              "year": 2011
            },
            {
              "id": 100534449,
              "year": 2012
            },
            {
              "id": 200419375,
              "year": 2013
            },
            {
              "id": 200470800,
              "year": 2014
            },
            {
              "id": 200677794,
              "year": 2015
            }
          ]
        },
        {
          "id": "Jaguar_XK_Series",
          "name": "XK-Series",
          "niceName": "xk-series",
          "years": [
            {
              "id": 3553,
              "year": 1997
            },
            {
              "id": 1979,
              "year": 1998
            },
            {
              "id": 985,
              "year": 1999
            },
            {
              "id": 958,
              "year": 2000
            },
            {
              "id": 100000142,
              "year": 2001
            },
            {
              "id": 100000479,
              "year": 2002
            },
            {
              "id": 100502824,
              "year": 2003
            },
            {
              "id": 100503519,
              "year": 2004
            },
            {
              "id": 100504622,
              "year": 2005
            },
            {
              "id": 100505805,
              "year": 2007
            },
            {
              "id": 100523050,
              "year": 2008
            }
          ]
        },
        {
          "id": "Jaguar_XKR",
          "name": "XKR",
          "niceName": "xkr",
          "years": [
            {
              "id": 399,
              "year": 2000
            }
          ]
        }
      ]
    },
    {
      "id": 200001510,
      "name": "Jeep",
      "niceName": "jeep",
      "models": [
        {
          "id": "Jeep_Cherokee",
          "name": "Cherokee",
          "niceName": "cherokee",
          "years": [
            {
              "id": 1981,
              "year": 1990
            },
            {
              "id": 1982,
              "year": 1991
            },
            {
              "id": 1983,
              "year": 1992
            },
            {
              "id": 1984,
              "year": 1993
            },
            {
              "id": 679,
              "year": 1994
            },
            {
              "id": 1985,
              "year": 1995
            },
            {
              "id": 680,
              "year": 1997
            },
            {
              "id": 1987,
              "year": 1998
            },
            {
              "id": 3554,
              "year": 1999
            },
            {
              "id": 1163,
              "year": 2000
            },
            {
              "id": 100000147,
              "year": 2001
            },
            {
              "id": 200462902,
              "year": 2014
            },
            {
              "id": 200700375,
              "year": 2015
            },
            {
              "id": 200735583,
              "year": 2016
            },
            {
              "id": 401648052,
              "year": 2017
            }
          ]
        },
        {
          "id": "Jeep_Comanche",
          "name": "Comanche",
          "niceName": "comanche",
          "years": [
            {
              "id": 681,
              "year": 1990
            },
            {
              "id": 1989,
              "year": 1991
            },
            {
              "id": 1990,
              "year": 1992
            }
          ]
        },
        {
          "id": "Jeep_Commander",
          "name": "Commander",
          "niceName": "commander",
          "years": [
            {
              "id": 100504628,
              "year": 2006
            },
            {
              "id": 100519201,
              "year": 2007
            },
            {
              "id": 100523771,
              "year": 2008
            },
            {
              "id": 100525938,
              "year": 2009
            },
            {
              "id": 100529630,
              "year": 2010
            }
          ]
        },
        {
          "id": "Jeep_Compass",
          "name": "Compass",
          "niceName": "compass",
          "years": [
            {
              "id": 100506107,
              "year": 2007
            },
            {
              "id": 100523772,
              "year": 2008
            },
            {
              "id": 100525941,
              "year": 2009
            },
            {
              "id": 100529509,
              "year": 2010
            },
            {
              "id": 100531275,
              "year": 2011
            },
            {
              "id": 100536350,
              "year": 2012
            },
            {
              "id": 200440226,
              "year": 2013
            },
            {
              "id": 200466209,
              "year": 2014
            },
            {
              "id": 200699329,
              "year": 2015
            },
            {
              "id": 200738833,
              "year": 2016
            },
            {
              "id": 401647282,
              "year": 2017
            }
          ]
        },
        {
          "id": "Jeep_Grand_Cherokee",
          "name": "Grand Cherokee",
          "niceName": "grand-cherokee",
          "years": [
            {
              "id": 682,
              "year": 1993
            },
            {
              "id": 1991,
              "year": 1994
            },
            {
              "id": 1993,
              "year": 1996
            },
            {
              "id": 1994,
              "year": 1997
            },
            {
              "id": 1995,
              "year": 1998
            },
            {
              "id": 986,
              "year": 1999
            },
            {
              "id": 1031,
              "year": 2000
            },
            {
              "id": 100000146,
              "year": 2001
            },
            {
              "id": 100000374,
              "year": 2002
            },
            {
              "id": 100502826,
              "year": 2003
            },
            {
              "id": 100503153,
              "year": 2004
            },
            {
              "id": 100503658,
              "year": 2005
            },
            {
              "id": 100506135,
              "year": 2006
            },
            {
              "id": 100519141,
              "year": 2007
            },
            {
              "id": 100523977,
              "year": 2008
            },
            {
              "id": 100525939,
              "year": 2009
            },
            {
              "id": 100529510,
              "year": 2010
            },
            {
              "id": 100527669,
              "year": 2011
            },
            {
              "id": 100532570,
              "year": 2012
            },
            {
              "id": 200435614,
              "year": 2013
            },
            {
              "id": 200459648,
              "year": 2014
            },
            {
              "id": 200701034,
              "year": 2015
            },
            {
              "id": 401589152,
              "year": 2016
            },
            {
              "id": 401647932,
              "year": 2017
            }
          ]
        },
        {
          "id": "Jeep_Grand_Cherokee_SRT",
          "name": "Grand Cherokee SRT",
          "niceName": "grand-cherokee-srt",
          "years": [
            {
              "id": 200701067,
              "year": 2015
            },
            {
              "id": 401598494,
              "year": 2016
            },
            {
              "id": 401657873,
              "year": 2017
            }
          ]
        },
        {
          "id": "Jeep_Grand_Wagoneer",
          "name": "Grand Wagoneer",
          "niceName": "grand-wagoneer",
          "years": [
            {
              "id": 1997,
              "year": 1990
            },
            {
              "id": 1998,
              "year": 1991
            },
            {
              "id": 683,
              "year": 1993
            }
          ]
        },
        {
          "id": "Jeep_Liberty",
          "name": "Liberty",
          "niceName": "liberty",
          "years": [
            {
              "id": 100000344,
              "year": 2002
            },
            {
              "id": 100502827,
              "year": 2003
            },
            {
              "id": 100503520,
              "year": 2004
            },
            {
              "id": 100504966,
              "year": 2005
            },
            {
              "id": 100506134,
              "year": 2006
            },
            {
              "id": 100519142,
              "year": 2007
            },
            {
              "id": 100520103,
              "year": 2008
            },
            {
              "id": 100525940,
              "year": 2009
            },
            {
              "id": 100529631,
              "year": 2010
            },
            {
              "id": 100531276,
              "year": 2011
            },
            {
              "id": 100536349,
              "year": 2012
            }
          ]
        },
        {
          "id": "Jeep_Patriot",
          "name": "Patriot",
          "niceName": "patriot",
          "years": [
            {
              "id": 100506862,
              "year": 2007
            },
            {
              "id": 100523773,
              "year": 2008
            },
            {
              "id": 100525942,
              "year": 2009
            },
            {
              "id": 100529632,
              "year": 2010
            },
            {
              "id": 100531277,
              "year": 2011
            },
            {
              "id": 100537189,
              "year": 2012
            },
            {
              "id": 200438522,
              "year": 2013
            },
            {
              "id": 200465705,
              "year": 2014
            },
            {
              "id": 200699914,
              "year": 2015
            },
            {
              "id": 200737268,
              "year": 2016
            },
            {
              "id": 401647283,
              "year": 2017
            }
          ]
        },
        {
          "id": "Jeep_Renegade",
          "name": "Renegade",
          "niceName": "renegade",
          "years": [
            {
              "id": 200676130,
              "year": 2015
            },
            {
              "id": 401566694,
              "year": 2016
            },
            {
              "id": 401662360,
              "year": 2017
            }
          ]
        },
        {
          "id": "Jeep_Wagoneer",
          "name": "Wagoneer",
          "niceName": "wagoneer",
          "years": [
            {
              "id": 2000,
              "year": 1990
            }
          ]
        },
        {
          "id": "Jeep_Wrangler",
          "name": "Wrangler",
          "niceName": "wrangler",
          "years": [
            {
              "id": 2001,
              "year": 1990
            },
            {
              "id": 685,
              "year": 1992
            },
            {
              "id": 2004,
              "year": 1994
            },
            {
              "id": 2005,
              "year": 1995
            },
            {
              "id": 686,
              "year": 1997
            },
            {
              "id": 2006,
              "year": 1998
            },
            {
              "id": 3555,
              "year": 1999
            },
            {
              "id": 1030,
              "year": 2000
            },
            {
              "id": 100000148,
              "year": 2001
            },
            {
              "id": 100000375,
              "year": 2002
            },
            {
              "id": 100502828,
              "year": 2003
            },
            {
              "id": 100503521,
              "year": 2004
            },
            {
              "id": 100505064,
              "year": 2005
            },
            {
              "id": 100506133,
              "year": 2006
            },
            {
              "id": 100505926,
              "year": 2007
            },
            {
              "id": 100523770,
              "year": 2008
            },
            {
              "id": 100525937,
              "year": 2009
            },
            {
              "id": 100529633,
              "year": 2010
            },
            {
              "id": 100531278,
              "year": 2011
            },
            {
              "id": 100536969,
              "year": 2012
            },
            {
              "id": 200438408,
              "year": 2013
            },
            {
              "id": 200478372,
              "year": 2014
            },
            {
              "id": 200701244,
              "year": 2015
            },
            {
              "id": 200747759,
              "year": 2016
            },
            {
              "id": 401661440,
              "year": 2017
            },
            {
              "id": 200781957,
              "year": 2018
            }
          ]
        }
      ]
    },
    {
      "id": 200003063,
      "name": "Kia",
      "niceName": "kia",
      "models": [
        {
          "id": "Kia_Amanti",
          "name": "Amanti",
          "niceName": "amanti",
          "years": [
            {
              "id": 100503263,
              "year": 2004
            },
            {
              "id": 100505195,
              "year": 2005
            },
            {
              "id": 100507379,
              "year": 2006
            },
            {
              "id": 100522527,
              "year": 2007
            },
            {
              "id": 100524469,
              "year": 2008
            },
            {
              "id": 100526753,
              "year": 2009
            }
          ]
        },
        {
          "id": "Kia_Borrego",
          "name": "Borrego",
          "niceName": "borrego",
          "years": [
            {
              "id": 100522468,
              "year": 2009
            }
          ]
        },
        {
          "id": "Kia_Cadenza",
          "name": "Cadenza",
          "niceName": "cadenza",
          "years": [
            {
              "id": 200443426,
              "year": 2014
            },
            {
              "id": 200709576,
              "year": 2015
            },
            {
              "id": 401583132,
              "year": 2016
            },
            {
              "id": 401610776,
              "year": 2017
            }
          ]
        },
        {
          "id": "Kia_Forte",
          "name": "Forte",
          "niceName": "forte",
          "years": [
            {
              "id": 100527370,
              "year": 2010
            },
            {
              "id": 100531650,
              "year": 2011
            },
            {
              "id": 100537029,
              "year": 2012
            },
            {
              "id": 100537290,
              "year": 2013
            },
            {
              "id": 200428940,
              "year": 2014
            },
            {
              "id": 200699092,
              "year": 2015
            },
            {
              "id": 200745336,
              "year": 2016
            },
            {
              "id": 401637969,
              "year": 2017
            }
          ]
        },
        {
          "id": "Kia_K900",
          "name": "K900",
          "niceName": "k900",
          "years": [
            {
              "id": 200497220,
              "year": 2015
            },
            {
              "id": 401612184,
              "year": 2016
            }
          ]
        },
        {
          "id": "Kia_Niro",
          "name": "Niro",
          "niceName": "niro",
          "years": [
            {
              "id": 401630225,
              "year": 2017
            }
          ]
        },
        {
          "id": "Kia_Optima",
          "name": "Optima",
          "niceName": "optima",
          "years": [
            {
              "id": 100000149,
              "year": 2001
            },
            {
              "id": 100000542,
              "year": 2002
            },
            {
              "id": 100502829,
              "year": 2003
            },
            {
              "id": 100503645,
              "year": 2004
            },
            {
              "id": 100505196,
              "year": 2005
            },
            {
              "id": 100507040,
              "year": 2006
            },
            {
              "id": 100506467,
              "year": 2007
            },
            {
              "id": 100524470,
              "year": 2008
            },
            {
              "id": 100526749,
              "year": 2009
            },
            {
              "id": 100530849,
              "year": 2010
            },
            {
              "id": 100531213,
              "year": 2011
            },
            {
              "id": 100538629,
              "year": 2012
            },
            {
              "id": 200425943,
              "year": 2013
            },
            {
              "id": 200491110,
              "year": 2014
            },
            {
              "id": 200697077,
              "year": 2015
            },
            {
              "id": 200710532,
              "year": 2016
            }
          ]
        },
        {
          "id": "Kia_Optima_Hybrid",
          "name": "Optima Hybrid",
          "niceName": "optima-hybrid",
          "years": [
            {
              "id": 200722570,
              "year": 2015
            },
            {
              "id": 401597525,
              "year": 2016
            }
          ]
        },
        {
          "id": "Kia_Rio",
          "name": "Rio",
          "niceName": "rio",
          "years": [
            {
              "id": 100000152,
              "year": 2001
            },
            {
              "id": 100000390,
              "year": 2002
            },
            {
              "id": 100502830,
              "year": 2003
            },
            {
              "id": 100503646,
              "year": 2004
            },
            {
              "id": 100505197,
              "year": 2005
            },
            {
              "id": 100504763,
              "year": 2006
            },
            {
              "id": 100505992,
              "year": 2007
            },
            {
              "id": 100524471,
              "year": 2008
            },
            {
              "id": 100526316,
              "year": 2009
            },
            {
              "id": 100530852,
              "year": 2010
            },
            {
              "id": 100533170,
              "year": 2011
            },
            {
              "id": 100534549,
              "year": 2012
            },
            {
              "id": 200419050,
              "year": 2013
            },
            {
              "id": 200673987,
              "year": 2014
            },
            {
              "id": 200706320,
              "year": 2015
            },
            {
              "id": 200739903,
              "year": 2016
            },
            {
              "id": 401670902,
              "year": 2017
            }
          ]
        },
        {
          "id": "Kia_Rondo",
          "name": "Rondo",
          "niceName": "rondo",
          "years": [
            {
              "id": 100520306,
              "year": 2007
            },
            {
              "id": 100512739,
              "year": 2008
            },
            {
              "id": 100526771,
              "year": 2009
            }
          ]
        },
        {
          "id": "Kia_Sedona",
          "name": "Sedona",
          "niceName": "sedona",
          "years": [
            {
              "id": 100000397,
              "year": 2002
            },
            {
              "id": 100502831,
              "year": 2003
            },
            {
              "id": 100503647,
              "year": 2004
            },
            {
              "id": 100505168,
              "year": 2005
            },
            {
              "id": 100505033,
              "year": 2006
            },
            {
              "id": 100520307,
              "year": 2007
            },
            {
              "id": 100524472,
              "year": 2008
            },
            {
              "id": 100526770,
              "year": 2009
            },
            {
              "id": 100530850,
              "year": 2010
            },
            {
              "id": 100533171,
              "year": 2011
            },
            {
              "id": 100535291,
              "year": 2012
            },
            {
              "id": 200470400,
              "year": 2014
            },
            {
              "id": 200674305,
              "year": 2015
            },
            {
              "id": 200743579,
              "year": 2016
            },
            {
              "id": 401678313,
              "year": 2017
            }
          ]
        },
        {
          "id": "Kia_Sephia",
          "name": "Sephia",
          "niceName": "sephia",
          "years": [
            {
              "id": 2007,
              "year": 1994
            },
            {
              "id": 687,
              "year": 1995
            },
            {
              "id": 2008,
              "year": 1996
            },
            {
              "id": 2009,
              "year": 1997
            },
            {
              "id": 688,
              "year": 1998
            },
            {
              "id": 3556,
              "year": 1999
            },
            {
              "id": 371,
              "year": 2000
            },
            {
              "id": 100000153,
              "year": 2001
            }
          ]
        },
        {
          "id": "Kia_Sorento",
          "name": "Sorento",
          "niceName": "sorento",
          "years": [
            {
              "id": 100502662,
              "year": 2003
            },
            {
              "id": 100503648,
              "year": 2004
            },
            {
              "id": 100505169,
              "year": 2005
            },
            {
              "id": 100507119,
              "year": 2006
            },
            {
              "id": 100520309,
              "year": 2007
            },
            {
              "id": 100524473,
              "year": 2008
            },
            {
              "id": 100526769,
              "year": 2009
            },
            {
              "id": 100529952,
              "year": 2011
            },
            {
              "id": 100535290,
              "year": 2012
            },
            {
              "id": 100539289,
              "year": 2013
            },
            {
              "id": 200460224,
              "year": 2014
            },
            {
              "id": 200674813,
              "year": 2015
            },
            {
              "id": 200707602,
              "year": 2016
            },
            {
              "id": 401643123,
              "year": 2017
            }
          ]
        },
        {
          "id": "Kia_Soul",
          "name": "Soul",
          "niceName": "soul",
          "years": [
            {
              "id": 100522472,
              "year": 2010
            },
            {
              "id": 100533249,
              "year": 2011
            },
            {
              "id": 100532952,
              "year": 2012
            },
            {
              "id": 200426348,
              "year": 2013
            },
            {
              "id": 200466049,
              "year": 2014
            },
            {
              "id": 200706808,
              "year": 2015
            },
            {
              "id": 200748658,
              "year": 2016
            }
          ]
        },
        {
          "id": "Kia_Soul_EV",
          "name": "Soul EV",
          "niceName": "soul-ev",
          "years": [
            {
              "id": 200690794,
              "year": 2015
            },
            {
              "id": 200746122,
              "year": 2016
            }
          ]
        },
        {
          "id": "Kia_Spectra",
          "name": "Spectra",
          "niceName": "spectra",
          "years": [
            {
              "id": 302,
              "year": 2000
            },
            {
              "id": 100000151,
              "year": 2001
            },
            {
              "id": 100000487,
              "year": 2002
            },
            {
              "id": 100502832,
              "year": 2003
            },
            {
              "id": 100503540,
              "year": 2004
            },
            {
              "id": 100503655,
              "year": 2005
            },
            {
              "id": 100506959,
              "year": 2006
            },
            {
              "id": 100520308,
              "year": 2007
            },
            {
              "id": 100524474,
              "year": 2008
            },
            {
              "id": 100526329,
              "year": 2009
            }
          ]
        },
        {
          "id": "Kia_Sportage",
          "name": "Sportage",
          "niceName": "sportage",
          "years": [
            {
              "id": 2010,
              "year": 1995
            },
            {
              "id": 2011,
              "year": 1996
            },
            {
              "id": 2012,
              "year": 1997
            },
            {
              "id": 2013,
              "year": 1998
            },
            {
              "id": 3557,
              "year": 1999
            },
            {
              "id": 1164,
              "year": 2000
            },
            {
              "id": 100000150,
              "year": 2001
            },
            {
              "id": 100000486,
              "year": 2002
            },
            {
              "id": 100502964,
              "year": 2005
            },
            {
              "id": 100506939,
              "year": 2006
            },
            {
              "id": 100520266,
              "year": 2007
            },
            {
              "id": 100524475,
              "year": 2008
            },
            {
              "id": 100526750,
              "year": 2009
            },
            {
              "id": 100530851,
              "year": 2010
            },
            {
              "id": 100531110,
              "year": 2011
            },
            {
              "id": 100535289,
              "year": 2012
            },
            {
              "id": 200432432,
              "year": 2013
            },
            {
              "id": 200499416,
              "year": 2014
            },
            {
              "id": 200707924,
              "year": 2015
            },
            {
              "id": 200743048,
              "year": 2016
            },
            {
              "id": 401578389,
              "year": 2017
            }
          ]
        }
      ]
    },
    {
      "id": 200005922,
      "name": "Lamborghini",
      "niceName": "lamborghini",
      "models": [
        {
          "id": "Lamborghini_Aventador",
          "name": "Aventador",
          "niceName": "aventador",
          "years": [
            {
              "id": 100532251,
              "year": 2012
            },
            {
              "id": 200441999,
              "year": 2013
            },
            {
              "id": 200690556,
              "year": 2014
            },
            {
              "id": 200717397,
              "year": 2015
            },
            {
              "id": 401638360,
              "year": 2016
            }
          ]
        },
        {
          "id": "Lamborghini_Diablo",
          "name": "Diablo",
          "niceName": "diablo",
          "years": [
            {
              "id": 100000305,
              "year": 2001
            }
          ]
        },
        {
          "id": "Lamborghini_Gallardo",
          "name": "Gallardo",
          "niceName": "gallardo",
          "years": [
            {
              "id": 100502975,
              "year": 2004
            },
            {
              "id": 100505485,
              "year": 2005
            },
            {
              "id": 100507039,
              "year": 2006
            },
            {
              "id": 100505993,
              "year": 2007
            },
            {
              "id": 100524949,
              "year": 2009
            },
            {
              "id": 100526872,
              "year": 2010
            },
            {
              "id": 100531350,
              "year": 2011
            },
            {
              "id": 100539389,
              "year": 2012
            },
            {
              "id": 200441600,
              "year": 2013
            },
            {
              "id": 200678115,
              "year": 2014
            }
          ]
        },
        {
          "id": "Lamborghini_Huracan",
          "name": "Huracan",
          "niceName": "huracan",
          "years": [
            {
              "id": 200717148,
              "year": 2015
            },
            {
              "id": 401637964,
              "year": 2016
            }
          ]
        },
        {
          "id": "Lamborghini_Murcielago",
          "name": "Murcielago",
          "niceName": "murcielago",
          "years": [
            {
              "id": 100502595,
              "year": 2002
            },
            {
              "id": 100503089,
              "year": 2003
            },
            {
              "id": 100504263,
              "year": 2004
            },
            {
              "id": 100504205,
              "year": 2005
            },
            {
              "id": 100506105,
              "year": 2006
            },
            {
              "id": 100507580,
              "year": 2007
            },
            {
              "id": 100523031,
              "year": 2008
            },
            {
              "id": 100525249,
              "year": 2009
            },
            {
              "id": 100527510,
              "year": 2010
            }
          ]
        },
        {
          "id": "Lamborghini_Reventon",
          "name": "Reventon",
          "niceName": "reventon",
          "years": [
            {
              "id": 100525489,
              "year": 2008
            }
          ]
        }
      ]
    },
    {
      "id": 200006582,
      "name": "Land Rover",
      "niceName": "land-rover",
      "models": [
        {
          "id": "Land_Rover_Defender",
          "name": "Defender",
          "niceName": "defender",
          "years": [
            {
              "id": 2014,
              "year": 1993
            },
            {
              "id": 2015,
              "year": 1994
            },
            {
              "id": 2016,
              "year": 1995
            },
            {
              "id": 3558,
              "year": 1997
            }
          ]
        },
        {
          "id": "Land_Rover_Discovery",
          "name": "Discovery",
          "niceName": "discovery",
          "years": [
            {
              "id": 2017,
              "year": 1994
            },
            {
              "id": 2018,
              "year": 1995
            },
            {
              "id": 689,
              "year": 1996
            },
            {
              "id": 3559,
              "year": 1999
            },
            {
              "id": 100502965,
              "year": 2003
            },
            {
              "id": 100503621,
              "year": 2004
            },
            {
              "id": 401672517,
              "year": 2017
            }
          ]
        },
        {
          "id": "Land_Rover_Discovery_Series_II",
          "name": "Discovery Series II",
          "niceName": "discovery-series-ii",
          "years": [
            {
              "id": 1094,
              "year": 2000
            },
            {
              "id": 100000154,
              "year": 2001
            },
            {
              "id": 100000541,
              "year": 2002
            }
          ]
        },
        {
          "id": "Land_Rover_Discovery_Sport",
          "name": "Discovery Sport",
          "niceName": "discovery-sport",
          "years": [
            {
              "id": 200711459,
              "year": 2015
            },
            {
              "id": 401575208,
              "year": 2016
            },
            {
              "id": 401671619,
              "year": 2017
            }
          ]
        },
        {
          "id": "Land_Rover_Freelander",
          "name": "Freelander",
          "niceName": "freelander",
          "years": [
            {
              "id": 100000419,
              "year": 2002
            },
            {
              "id": 100502835,
              "year": 2003
            },
            {
              "id": 100503622,
              "year": 2004
            },
            {
              "id": 100505170,
              "year": 2005
            }
          ]
        },
        {
          "id": "Land_Rover_LR2",
          "name": "LR2",
          "niceName": "lr2",
          "years": [
            {
              "id": 100505566,
              "year": 2008
            },
            {
              "id": 100526549,
              "year": 2009
            },
            {
              "id": 100529012,
              "year": 2010
            },
            {
              "id": 100533092,
              "year": 2011
            },
            {
              "id": 100538909,
              "year": 2012
            },
            {
              "id": 200436878,
              "year": 2013
            },
            {
              "id": 200496577,
              "year": 2014
            },
            {
              "id": 200695102,
              "year": 2015
            }
          ]
        },
        {
          "id": "Land_Rover_LR3",
          "name": "LR3",
          "niceName": "lr3",
          "years": [
            {
              "id": 100503283,
              "year": 2005
            },
            {
              "id": 100506488,
              "year": 2006
            },
            {
              "id": 100506487,
              "year": 2007
            },
            {
              "id": 100523643,
              "year": 2008
            },
            {
              "id": 100526869,
              "year": 2009
            }
          ]
        },
        {
          "id": "Land_Rover_LR4",
          "name": "LR4",
          "niceName": "lr4",
          "years": [
            {
              "id": 100525109,
              "year": 2010
            },
            {
              "id": 100533471,
              "year": 2011
            },
            {
              "id": 100536949,
              "year": 2012
            },
            {
              "id": 200445507,
              "year": 2013
            },
            {
              "id": 200496633,
              "year": 2014
            },
            {
              "id": 200701825,
              "year": 2015
            },
            {
              "id": 401575011,
              "year": 2016
            }
          ]
        },
        {
          "id": "Land_Rover_Range_Rover",
          "name": "Range Rover",
          "niceName": "range-rover",
          "years": [
            {
              "id": 690,
              "year": 1990
            },
            {
              "id": 2022,
              "year": 1991
            },
            {
              "id": 2023,
              "year": 1992
            },
            {
              "id": 691,
              "year": 1993
            },
            {
              "id": 2024,
              "year": 1994
            },
            {
              "id": 2028,
              "year": 1998
            },
            {
              "id": 3560,
              "year": 1999
            },
            {
              "id": 1093,
              "year": 2000
            },
            {
              "id": 100000155,
              "year": 2001
            },
            {
              "id": 100000540,
              "year": 2002
            },
            {
              "id": 100502616,
              "year": 2003
            },
            {
              "id": 100503623,
              "year": 2004
            },
            {
              "id": 100505171,
              "year": 2005
            },
            {
              "id": 100505785,
              "year": 2006
            },
            {
              "id": 100520226,
              "year": 2007
            },
            {
              "id": 100524313,
              "year": 2008
            },
            {
              "id": 100526490,
              "year": 2009
            },
            {
              "id": 100527750,
              "year": 2010
            },
            {
              "id": 100533391,
              "year": 2011
            },
            {
              "id": 100539009,
              "year": 2012
            },
            {
              "id": 100538089,
              "year": 2013
            },
            {
              "id": 200487464,
              "year": 2014
            },
            {
              "id": 200706931,
              "year": 2015
            },
            {
              "id": 200724860,
              "year": 2016
            }
          ]
        },
        {
          "id": "Land_Rover_Range_Rover_Evoque",
          "name": "Range Rover Evoque",
          "niceName": "range-rover-evoque",
          "years": [
            {
              "id": 100529830,
              "year": 2012
            },
            {
              "id": 200443884,
              "year": 2013
            },
            {
              "id": 200673422,
              "year": 2014
            },
            {
              "id": 200701757,
              "year": 2015
            },
            {
              "id": 200733989,
              "year": 2016
            },
            {
              "id": 200730058,
              "year": 2017
            }
          ]
        },
        {
          "id": "Land_Rover_Range_Rover_Sport",
          "name": "Range Rover Sport",
          "niceName": "range-rover-sport",
          "years": [
            {
              "id": 100503662,
              "year": 2006
            },
            {
              "id": 100520227,
              "year": 2007
            },
            {
              "id": 100524314,
              "year": 2008
            },
            {
              "id": 100526491,
              "year": 2009
            },
            {
              "id": 100527751,
              "year": 2010
            },
            {
              "id": 100533470,
              "year": 2011
            },
            {
              "id": 100539049,
              "year": 2012
            },
            {
              "id": 200423714,
              "year": 2013
            },
            {
              "id": 200465686,
              "year": 2014
            },
            {
              "id": 200706688,
              "year": 2015
            },
            {
              "id": 200724861,
              "year": 2016
            }
          ]
        }
      ]
    },
    {
      "id": 200001623,
      "name": "Lexus",
      "niceName": "lexus",
      "models": [
        {
          "id": "Lexus_CT_200h",
          "name": "CT 200h",
          "niceName": "ct-200h",
          "years": [
            {
              "id": 100531231,
              "year": 2011
            },
            {
              "id": 100537990,
              "year": 2012
            },
            {
              "id": 200437666,
              "year": 2013
            },
            {
              "id": 200673683,
              "year": 2014
            },
            {
              "id": 200706556,
              "year": 2015
            },
            {
              "id": 200747263,
              "year": 2016
            },
            {
              "id": 401657466,
              "year": 2017
            }
          ]
        },
        {
          "id": "Lexus_ES_250",
          "name": "ES 250",
          "niceName": "es-250",
          "years": [
            {
              "id": 2029,
              "year": 1990
            },
            {
              "id": 2030,
              "year": 1991
            }
          ]
        },
        {
          "id": "Lexus_ES_300",
          "name": "ES 300",
          "niceName": "es-300",
          "years": [
            {
              "id": 1886,
              "year": 1992
            },
            {
              "id": 1887,
              "year": 1993
            },
            {
              "id": 1890,
              "year": 1996
            },
            {
              "id": 3561,
              "year": 1997
            },
            {
              "id": 1891,
              "year": 1998
            },
            {
              "id": 3562,
              "year": 1999
            },
            {
              "id": 1038,
              "year": 2000
            },
            {
              "id": 100000160,
              "year": 2001
            },
            {
              "id": 100000432,
              "year": 2002
            },
            {
              "id": 100502836,
              "year": 2003
            }
          ]
        },
        {
          "id": "Lexus_ES_300h",
          "name": "ES 300h",
          "niceName": "es-300h",
          "years": [
            {
              "id": 200429078,
              "year": 2013
            },
            {
              "id": 200491101,
              "year": 2014
            },
            {
              "id": 200712379,
              "year": 2015
            },
            {
              "id": 200746206,
              "year": 2016
            },
            {
              "id": 401659437,
              "year": 2017
            }
          ]
        },
        {
          "id": "Lexus_ES_330",
          "name": "ES 330",
          "niceName": "es-330",
          "years": [
            {
              "id": 100503543,
              "year": 2004
            },
            {
              "id": 100504603,
              "year": 2005
            },
            {
              "id": 100506523,
              "year": 2006
            }
          ]
        },
        {
          "id": "Lexus_ES_350",
          "name": "ES 350",
          "niceName": "es-350",
          "years": [
            {
              "id": 100506512,
              "year": 2007
            },
            {
              "id": 100523789,
              "year": 2008
            },
            {
              "id": 100525671,
              "year": 2009
            },
            {
              "id": 100529650,
              "year": 2010
            },
            {
              "id": 100533011,
              "year": 2011
            },
            {
              "id": 100537330,
              "year": 2012
            },
            {
              "id": 100539469,
              "year": 2013
            },
            {
              "id": 200491099,
              "year": 2014
            },
            {
              "id": 200712378,
              "year": 2015
            },
            {
              "id": 200745233,
              "year": 2016
            },
            {
              "id": 401659438,
              "year": 2017
            }
          ]
        },
        {
          "id": "Lexus_GS_200t",
          "name": "GS 200t",
          "niceName": "gs-200t",
          "years": [
            {
              "id": 401611403,
              "year": 2016
            }
          ]
        },
        {
          "id": "Lexus_GS_300",
          "name": "GS 300",
          "niceName": "gs-300",
          "years": [
            {
              "id": 692,
              "year": 1993
            },
            {
              "id": 1892,
              "year": 1994
            },
            {
              "id": 1893,
              "year": 1995
            },
            {
              "id": 693,
              "year": 1996
            },
            {
              "id": 3564,
              "year": 1997
            },
            {
              "id": 1894,
              "year": 1998
            },
            {
              "id": 3563,
              "year": 1999
            },
            {
              "id": 1039,
              "year": 2000
            },
            {
              "id": 100000157,
              "year": 2001
            },
            {
              "id": 100000428,
              "year": 2002
            },
            {
              "id": 100502837,
              "year": 2003
            },
            {
              "id": 100503544,
              "year": 2004
            },
            {
              "id": 100504862,
              "year": 2005
            },
            {
              "id": 100505467,
              "year": 2006
            }
          ]
        },
        {
          "id": "Lexus_GS_350",
          "name": "GS 350",
          "niceName": "gs-350",
          "years": [
            {
              "id": 100519205,
              "year": 2007
            },
            {
              "id": 100524274,
              "year": 2008
            },
            {
              "id": 100525672,
              "year": 2009
            },
            {
              "id": 100530249,
              "year": 2010
            },
            {
              "id": 100532690,
              "year": 2011
            },
            {
              "id": 100536230,
              "year": 2013
            },
            {
              "id": 200491442,
              "year": 2014
            },
            {
              "id": 200714455,
              "year": 2015
            },
            {
              "id": 401611547,
              "year": 2016
            },
            {
              "id": 401678907,
              "year": 2017
            }
          ]
        },
        {
          "id": "Lexus_GS_400",
          "name": "GS 400",
          "niceName": "gs-400",
          "years": [
            {
              "id": 100503417,
              "year": 2000
            }
          ]
        },
        {
          "id": "Lexus_GS_430",
          "name": "GS 430",
          "niceName": "gs-430",
          "years": [
            {
              "id": 100000162,
              "year": 2001
            },
            {
              "id": 100000427,
              "year": 2002
            },
            {
              "id": 100502838,
              "year": 2003
            },
            {
              "id": 100503545,
              "year": 2004
            },
            {
              "id": 100504863,
              "year": 2005
            },
            {
              "id": 100503280,
              "year": 2006
            },
            {
              "id": 100519204,
              "year": 2007
            }
          ]
        },
        {
          "id": "Lexus_GS_450h",
          "name": "GS 450h",
          "niceName": "gs-450h",
          "years": [
            {
              "id": 100505774,
              "year": 2007
            },
            {
              "id": 100524275,
              "year": 2008
            },
            {
              "id": 100526230,
              "year": 2009
            },
            {
              "id": 100530371,
              "year": 2010
            },
            {
              "id": 100532691,
              "year": 2011
            },
            {
              "id": 100536329,
              "year": 2013
            },
            {
              "id": 200491445,
              "year": 2014
            },
            {
              "id": 200714969,
              "year": 2015
            },
            {
              "id": 401583471,
              "year": 2016
            }
          ]
        },
        {
          "id": "Lexus_GS_460",
          "name": "GS 460",
          "niceName": "gs-460",
          "years": [
            {
              "id": 100524269,
              "year": 2008
            },
            {
              "id": 100525673,
              "year": 2009
            },
            {
              "id": 100530370,
              "year": 2010
            },
            {
              "id": 100532692,
              "year": 2011
            }
          ]
        },
        {
          "id": "Lexus_GS_F",
          "name": "GS F",
          "niceName": "gs-f",
          "years": [
            {
              "id": 200724405,
              "year": 2016
            }
          ]
        },
        {
          "id": "Lexus_GX_460",
          "name": "GX 460",
          "niceName": "gx-460",
          "years": [
            {
              "id": 100529169,
              "year": 2010
            },
            {
              "id": 100533089,
              "year": 2011
            },
            {
              "id": 100537529,
              "year": 2012
            },
            {
              "id": 200424194,
              "year": 2013
            },
            {
              "id": 200493311,
              "year": 2014
            },
            {
              "id": 200707983,
              "year": 2015
            },
            {
              "id": 200747262,
              "year": 2016
            },
            {
              "id": 401659439,
              "year": 2017
            }
          ]
        },
        {
          "id": "Lexus_GX_470",
          "name": "GX 470",
          "niceName": "gx-470",
          "years": [
            {
              "id": 100502663,
              "year": 2003
            },
            {
              "id": 100503546,
              "year": 2004
            },
            {
              "id": 100505198,
              "year": 2005
            },
            {
              "id": 100506524,
              "year": 2006
            },
            {
              "id": 100519206,
              "year": 2007
            },
            {
              "id": 100523790,
              "year": 2008
            },
            {
              "id": 100525677,
              "year": 2009
            }
          ]
        },
        {
          "id": "Lexus_HS_250h",
          "name": "HS 250h",
          "niceName": "hs-250h",
          "years": [
            {
              "id": 100526989,
              "year": 2010
            },
            {
              "id": 100533369,
              "year": 2011
            },
            {
              "id": 100537750,
              "year": 2012
            }
          ]
        },
        {
          "id": "Lexus_IS_200t",
          "name": "IS 200t",
          "niceName": "is-200t",
          "years": [
            {
              "id": 200747202,
              "year": 2016
            }
          ]
        },
        {
          "id": "Lexus_IS_250",
          "name": "IS 250",
          "niceName": "is-250",
          "years": [
            {
              "id": 100506779,
              "year": 2006
            },
            {
              "id": 100519207,
              "year": 2007
            },
            {
              "id": 100523950,
              "year": 2008
            },
            {
              "id": 100525669,
              "year": 2009
            },
            {
              "id": 100529249,
              "year": 2010
            },
            {
              "id": 100533009,
              "year": 2011
            },
            {
              "id": 100537389,
              "year": 2012
            },
            {
              "id": 200432924,
              "year": 2013
            },
            {
              "id": 200443783,
              "year": 2014
            },
            {
              "id": 200705855,
              "year": 2015
            }
          ]
        },
        {
          "id": "Lexus_IS_250_C",
          "name": "IS 250 C",
          "niceName": "is-250-c",
          "years": [
            {
              "id": 100527229,
              "year": 2010
            },
            {
              "id": 100533013,
              "year": 2011
            },
            {
              "id": 100538249,
              "year": 2012
            },
            {
              "id": 200441459,
              "year": 2013
            },
            {
              "id": 200492532,
              "year": 2014
            },
            {
              "id": 200711006,
              "year": 2015
            }
          ]
        },
        {
          "id": "Lexus_IS_300",
          "name": "IS 300",
          "niceName": "is-300",
          "years": [
            {
              "id": 100000431,
              "year": 2002
            },
            {
              "id": 100502839,
              "year": 2003
            },
            {
              "id": 100503547,
              "year": 2004
            },
            {
              "id": 100504865,
              "year": 2005
            },
            {
              "id": 200747203,
              "year": 2016
            }
          ]
        },
        {
          "id": "Lexus_IS_350",
          "name": "IS 350",
          "niceName": "is-350",
          "years": [
            {
              "id": 100506780,
              "year": 2006
            },
            {
              "id": 100519208,
              "year": 2007
            },
            {
              "id": 100523951,
              "year": 2008
            },
            {
              "id": 100524390,
              "year": 2009
            },
            {
              "id": 100529250,
              "year": 2010
            },
            {
              "id": 100529575,
              "year": 2011
            },
            {
              "id": 100537409,
              "year": 2012
            },
            {
              "id": 200432925,
              "year": 2013
            },
            {
              "id": 200443784,
              "year": 2014
            },
            {
              "id": 200705856,
              "year": 2015
            },
            {
              "id": 200747204,
              "year": 2016
            }
          ]
        },
        {
          "id": "Lexus_IS_350_C",
          "name": "IS 350 C",
          "niceName": "is-350-c",
          "years": [
            {
              "id": 100526320,
              "year": 2010
            },
            {
              "id": 100533014,
              "year": 2011
            },
            {
              "id": 100538250,
              "year": 2012
            },
            {
              "id": 200441509,
              "year": 2013
            },
            {
              "id": 200492534,
              "year": 2014
            },
            {
              "id": 200711009,
              "year": 2015
            }
          ]
        },
        {
          "id": "Lexus_IS_F",
          "name": "IS F",
          "niceName": "is-f",
          "years": [
            {
              "id": 100507583,
              "year": 2008
            },
            {
              "id": 100525670,
              "year": 2009
            },
            {
              "id": 100529190,
              "year": 2010
            },
            {
              "id": 100533010,
              "year": 2011
            },
            {
              "id": 100537609,
              "year": 2012
            },
            {
              "id": 200442773,
              "year": 2013
            },
            {
              "id": 200492796,
              "year": 2014
            }
          ]
        },
        {
          "id": "Lexus_LC_500",
          "name": "LC 500",
          "niceName": "lc-500",
          "years": [
            {
              "id": 401626457,
              "year": 2018
            }
          ]
        },
        {
          "id": "Lexus_LFA",
          "name": "LFA",
          "niceName": "lfa",
          "years": [
            {
              "id": 100530309,
              "year": 2012
            }
          ]
        },
        {
          "id": "Lexus_LS_400",
          "name": "LS 400",
          "niceName": "ls-400",
          "years": [
            {
              "id": 1895,
              "year": 1990
            },
            {
              "id": 694,
              "year": 1991
            },
            {
              "id": 1896,
              "year": 1992
            },
            {
              "id": 1897,
              "year": 1993
            },
            {
              "id": 695,
              "year": 1994
            },
            {
              "id": 1898,
              "year": 1995
            },
            {
              "id": 1900,
              "year": 1997
            },
            {
              "id": 3565,
              "year": 1999
            },
            {
              "id": 387,
              "year": 2000
            }
          ]
        },
        {
          "id": "Lexus_LS_430",
          "name": "LS 430",
          "niceName": "ls-430",
          "years": [
            {
              "id": 100000163,
              "year": 2001
            },
            {
              "id": 100000429,
              "year": 2002
            },
            {
              "id": 100502840,
              "year": 2003
            },
            {
              "id": 100503170,
              "year": 2004
            },
            {
              "id": 100504723,
              "year": 2005
            },
            {
              "id": 100506325,
              "year": 2006
            }
          ]
        },
        {
          "id": "Lexus_LS_460",
          "name": "LS 460",
          "niceName": "ls-460",
          "years": [
            {
              "id": 100505927,
              "year": 2007
            },
            {
              "id": 100523952,
              "year": 2008
            },
            {
              "id": 100525675,
              "year": 2009
            },
            {
              "id": 100530330,
              "year": 2010
            },
            {
              "id": 100533353,
              "year": 2011
            },
            {
              "id": 100538509,
              "year": 2012
            },
            {
              "id": 200431707,
              "year": 2013
            },
            {
              "id": 200492235,
              "year": 2014
            },
            {
              "id": 200719678,
              "year": 2015
            },
            {
              "id": 401580676,
              "year": 2016
            }
          ]
        },
        {
          "id": "Lexus_LS_600h_L",
          "name": "LS 600h L",
          "niceName": "ls-600h-l",
          "years": [
            {
              "id": 100507720,
              "year": 2008
            },
            {
              "id": 100525676,
              "year": 2009
            },
            {
              "id": 100529729,
              "year": 2010
            },
            {
              "id": 100533411,
              "year": 2011
            },
            {
              "id": 100538150,
              "year": 2012
            },
            {
              "id": 200442806,
              "year": 2013
            },
            {
              "id": 200492246,
              "year": 2014
            },
            {
              "id": 200719679,
              "year": 2015
            },
            {
              "id": 401612857,
              "year": 2016
            }
          ]
        },
        {
          "id": "Lexus_LX_450",
          "name": "LX 450",
          "niceName": "lx-450",
          "years": [
            {
              "id": 3566,
              "year": 1997
            }
          ]
        },
        {
          "id": "Lexus_LX_470",
          "name": "LX 470",
          "niceName": "lx-470",
          "years": [
            {
              "id": 1903,
              "year": 1998
            },
            {
              "id": 3567,
              "year": 1999
            },
            {
              "id": 1024,
              "year": 2000
            },
            {
              "id": 100000156,
              "year": 2001
            },
            {
              "id": 100000543,
              "year": 2002
            },
            {
              "id": 100502841,
              "year": 2003
            },
            {
              "id": 100503548,
              "year": 2004
            },
            {
              "id": 100504724,
              "year": 2005
            },
            {
              "id": 100505925,
              "year": 2006
            },
            {
              "id": 100519202,
              "year": 2007
            }
          ]
        },
        {
          "id": "Lexus_LX_570",
          "name": "LX 570",
          "niceName": "lx-570",
          "years": [
            {
              "id": 100522911,
              "year": 2008
            },
            {
              "id": 100525678,
              "year": 2009
            },
            {
              "id": 100530269,
              "year": 2010
            },
            {
              "id": 100533169,
              "year": 2011
            },
            {
              "id": 100539159,
              "year": 2013
            },
            {
              "id": 200489288,
              "year": 2014
            },
            {
              "id": 200714375,
              "year": 2015
            },
            {
              "id": 401582735,
              "year": 2016
            },
            {
              "id": 401659440,
              "year": 2017
            }
          ]
        },
        {
          "id": "Lexus_NX_200t",
          "name": "NX 200t",
          "niceName": "nx-200t",
          "years": [
            {
              "id": 200478487,
              "year": 2015
            },
            {
              "id": 401610907,
              "year": 2016
            },
            {
              "id": 401661659,
              "year": 2017
            }
          ]
        },
        {
          "id": "Lexus_NX_300h",
          "name": "NX 300h",
          "niceName": "nx-300h",
          "years": [
            {
              "id": 200478496,
              "year": 2015
            },
            {
              "id": 401610908,
              "year": 2016
            },
            {
              "id": 401661660,
              "year": 2017
            }
          ]
        },
        {
          "id": "Lexus_RC_200t",
          "name": "RC 200t",
          "niceName": "rc-200t",
          "years": [
            {
              "id": 401594007,
              "year": 2016
            }
          ]
        },
        {
          "id": "Lexus_RC_300",
          "name": "RC 300",
          "niceName": "rc-300",
          "years": [
            {
              "id": 401594008,
              "year": 2016
            }
          ]
        },
        {
          "id": "Lexus_RC_350",
          "name": "RC 350",
          "niceName": "rc-350",
          "years": [
            {
              "id": 200483413,
              "year": 2015
            },
            {
              "id": 401594009,
              "year": 2016
            }
          ]
        },
        {
          "id": "Lexus_RC_F",
          "name": "RC F",
          "niceName": "rc-f",
          "years": [
            {
              "id": 200674916,
              "year": 2015
            },
            {
              "id": 401594010,
              "year": 2016
            }
          ]
        },
        {
          "id": "Lexus_RX_300",
          "name": "RX 300",
          "niceName": "rx-300",
          "years": [
            {
              "id": 3568,
              "year": 1999
            },
            {
              "id": 1025,
              "year": 2000
            },
            {
              "id": 100000159,
              "year": 2001
            },
            {
              "id": 100000430,
              "year": 2002
            },
            {
              "id": 100502842,
              "year": 2003
            }
          ]
        },
        {
          "id": "Lexus_RX_330",
          "name": "RX 330",
          "niceName": "rx-330",
          "years": [
            {
              "id": 100502953,
              "year": 2004
            },
            {
              "id": 100504725,
              "year": 2005
            },
            {
              "id": 100506522,
              "year": 2006
            }
          ]
        },
        {
          "id": "Lexus_RX_350",
          "name": "RX 350",
          "niceName": "rx-350",
          "years": [
            {
              "id": 100507279,
              "year": 2007
            },
            {
              "id": 100520286,
              "year": 2008
            },
            {
              "id": 100524710,
              "year": 2009
            },
            {
              "id": 100524801,
              "year": 2010
            },
            {
              "id": 100533091,
              "year": 2011
            },
            {
              "id": 100537390,
              "year": 2012
            },
            {
              "id": 200419750,
              "year": 2013
            },
            {
              "id": 200486458,
              "year": 2014
            },
            {
              "id": 200690685,
              "year": 2015
            },
            {
              "id": 200730077,
              "year": 2016
            },
            {
              "id": 401660462,
              "year": 2017
            }
          ]
        },
        {
          "id": "Lexus_RX_400h",
          "name": "RX 400h",
          "niceName": "rx-400h",
          "years": [
            {
              "id": 100503268,
              "year": 2006
            },
            {
              "id": 100519242,
              "year": 2007
            },
            {
              "id": 100524051,
              "year": 2008
            }
          ]
        },
        {
          "id": "Lexus_RX_450h",
          "name": "RX 450h",
          "niceName": "rx-450h",
          "years": [
            {
              "id": 100526710,
              "year": 2010
            },
            {
              "id": 100533109,
              "year": 2011
            },
            {
              "id": 100537391,
              "year": 2012
            },
            {
              "id": 200419837,
              "year": 2013
            },
            {
              "id": 200486459,
              "year": 2014
            },
            {
              "id": 200690768,
              "year": 2015
            },
            {
              "id": 401589089,
              "year": 2016
            },
            {
              "id": 401660463,
              "year": 2017
            }
          ]
        },
        {
          "id": "Lexus_SC_300",
          "name": "SC 300",
          "niceName": "sc-300",
          "years": [
            {
              "id": 1904,
              "year": 1992
            },
            {
              "id": 1905,
              "year": 1993
            },
            {
              "id": 1906,
              "year": 1994
            },
            {
              "id": 1907,
              "year": 1995
            },
            {
              "id": 1908,
              "year": 1996
            },
            {
              "id": 1909,
              "year": 1998
            },
            {
              "id": 3569,
              "year": 1999
            },
            {
              "id": 380,
              "year": 2000
            }
          ]
        },
        {
          "id": "Lexus_SC_400",
          "name": "SC 400",
          "niceName": "sc-400",
          "years": [
            {
              "id": 100503345,
              "year": 1992
            },
            {
              "id": 100503352,
              "year": 1993
            },
            {
              "id": 100503357,
              "year": 1994
            },
            {
              "id": 100503374,
              "year": 1996
            },
            {
              "id": 100503405,
              "year": 1999
            },
            {
              "id": 100503418,
              "year": 2000
            }
          ]
        },
        {
          "id": "Lexus_SC_430",
          "name": "SC 430",
          "niceName": "sc-430",
          "years": [
            {
              "id": 100000158,
              "year": 2002
            },
            {
              "id": 100502843,
              "year": 2003
            },
            {
              "id": 100503549,
              "year": 2004
            },
            {
              "id": 100504864,
              "year": 2005
            },
            {
              "id": 100506521,
              "year": 2006
            },
            {
              "id": 100519203,
              "year": 2007
            },
            {
              "id": 100523949,
              "year": 2008
            },
            {
              "id": 100525674,
              "year": 2009
            },
            {
              "id": 100529191,
              "year": 2010
            }
          ]
        }
      ]
    },
    {
      "id": 200001777,
      "name": "Lincoln",
      "niceName": "lincoln",
      "models": [
        {
          "id": "Lincoln_Aviator",
          "name": "Aviator",
          "niceName": "aviator",
          "years": [
            {
              "id": 100502677,
              "year": 2003
            },
            {
              "id": 100503502,
              "year": 2004
            },
            {
              "id": 100505102,
              "year": 2005
            }
          ]
        },
        {
          "id": "Lincoln_Blackwood",
          "name": "Blackwood",
          "niceName": "blackwood",
          "years": [
            {
              "id": 100000168,
              "year": 2002
            }
          ]
        },
        {
          "id": "Lincoln_Continental",
          "name": "Continental",
          "niceName": "continental",
          "years": [
            {
              "id": 1910,
              "year": 1990
            },
            {
              "id": 1911,
              "year": 1991
            },
            {
              "id": 1912,
              "year": 1992
            },
            {
              "id": 697,
              "year": 1993
            },
            {
              "id": 1913,
              "year": 1994
            },
            {
              "id": 1914,
              "year": 1995
            },
            {
              "id": 698,
              "year": 1996
            },
            {
              "id": 1915,
              "year": 1997
            },
            {
              "id": 1916,
              "year": 1998
            },
            {
              "id": 3571,
              "year": 1999
            },
            {
              "id": 100000167,
              "year": 2001
            },
            {
              "id": 3838,
              "year": 2002
            },
            {
              "id": 200730686,
              "year": 2017
            }
          ]
        },
        {
          "id": "Lincoln_LS",
          "name": "LS",
          "niceName": "ls",
          "years": [
            {
              "id": 100000166,
              "year": 2001
            },
            {
              "id": 3848,
              "year": 2002
            },
            {
              "id": 100502845,
              "year": 2003
            },
            {
              "id": 100503503,
              "year": 2004
            },
            {
              "id": 100505062,
              "year": 2005
            },
            {
              "id": 100506291,
              "year": 2006
            }
          ]
        },
        {
          "id": "Lincoln_MKC",
          "name": "MKC",
          "niceName": "mkc",
          "years": [
            {
              "id": 200471952,
              "year": 2015
            },
            {
              "id": 200732076,
              "year": 2016
            },
            {
              "id": 401630379,
              "year": 2017
            }
          ]
        },
        {
          "id": "Lincoln_MKS",
          "name": "MKS",
          "niceName": "mks",
          "years": [
            {
              "id": 100507319,
              "year": 2009
            },
            {
              "id": 100527812,
              "year": 2010
            },
            {
              "id": 100531629,
              "year": 2011
            },
            {
              "id": 100535909,
              "year": 2012
            },
            {
              "id": 100538850,
              "year": 2013
            },
            {
              "id": 200476149,
              "year": 2014
            },
            {
              "id": 200711333,
              "year": 2015
            },
            {
              "id": 401581230,
              "year": 2016
            }
          ]
        },
        {
          "id": "Lincoln_MKT",
          "name": "MKT",
          "niceName": "mkt",
          "years": [
            {
              "id": 100524800,
              "year": 2010
            },
            {
              "id": 100531649,
              "year": 2011
            },
            {
              "id": 100535190,
              "year": 2012
            },
            {
              "id": 100538789,
              "year": 2013
            },
            {
              "id": 200467860,
              "year": 2014
            },
            {
              "id": 200716688,
              "year": 2015
            },
            {
              "id": 401593848,
              "year": 2016
            },
            {
              "id": 401670628,
              "year": 2017
            }
          ]
        },
        {
          "id": "Lincoln_MKX",
          "name": "MKX",
          "niceName": "mkx",
          "years": [
            {
              "id": 100505686,
              "year": 2007
            },
            {
              "id": 100524176,
              "year": 2008
            },
            {
              "id": 100526610,
              "year": 2009
            },
            {
              "id": 100527729,
              "year": 2010
            },
            {
              "id": 100530952,
              "year": 2011
            },
            {
              "id": 100536389,
              "year": 2012
            },
            {
              "id": 100539209,
              "year": 2013
            },
            {
              "id": 200496850,
              "year": 2014
            },
            {
              "id": 200704057,
              "year": 2015
            },
            {
              "id": 200696421,
              "year": 2016
            },
            {
              "id": 401677052,
              "year": 2017
            }
          ]
        },
        {
          "id": "Lincoln_MKZ",
          "name": "MKZ",
          "niceName": "mkz",
          "years": [
            {
              "id": 100519402,
              "year": 2007
            },
            {
              "id": 100523809,
              "year": 2008
            },
            {
              "id": 100525309,
              "year": 2009
            },
            {
              "id": 100527049,
              "year": 2010
            },
            {
              "id": 100532309,
              "year": 2011
            },
            {
              "id": 100535189,
              "year": 2012
            },
            {
              "id": 100539470,
              "year": 2013
            },
            {
              "id": 200480225,
              "year": 2014
            },
            {
              "id": 200695842,
              "year": 2015
            },
            {
              "id": 200729075,
              "year": 2016
            },
            {
              "id": 401630475,
              "year": 2017
            }
          ]
        },
        {
          "id": "Lincoln_MKZ_Hybrid",
          "name": "MKZ Hybrid",
          "niceName": "mkz-hybrid",
          "years": [
            {
              "id": 100531551,
              "year": 2011
            }
          ]
        },
        {
          "id": "Lincoln_Mark_LT",
          "name": "Mark LT",
          "niceName": "mark-lt",
          "years": [
            {
              "id": 100503881,
              "year": 2006
            },
            {
              "id": 100519287,
              "year": 2007
            },
            {
              "id": 100523978,
              "year": 2008
            }
          ]
        },
        {
          "id": "Lincoln_Mark_VII",
          "name": "Mark VII",
          "niceName": "mark-vii",
          "years": [
            {
              "id": 1918,
              "year": 1990
            },
            {
              "id": 1919,
              "year": 1991
            },
            {
              "id": 1920,
              "year": 1992
            }
          ]
        },
        {
          "id": "Lincoln_Mark_VIII",
          "name": "Mark VIII",
          "niceName": "mark-viii",
          "years": [
            {
              "id": 699,
              "year": 1993
            },
            {
              "id": 1921,
              "year": 1994
            },
            {
              "id": 1922,
              "year": 1995
            },
            {
              "id": 700,
              "year": 1996
            },
            {
              "id": 1924,
              "year": 1998
            }
          ]
        },
        {
          "id": "Lincoln_Navigator",
          "name": "Navigator",
          "niceName": "navigator",
          "years": [
            {
              "id": 1925,
              "year": 1998
            },
            {
              "id": 987,
              "year": 1999
            },
            {
              "id": 1133,
              "year": 2000
            },
            {
              "id": 100000165,
              "year": 2001
            },
            {
              "id": 100000352,
              "year": 2002
            },
            {
              "id": 100502610,
              "year": 2003
            },
            {
              "id": 100503504,
              "year": 2004
            },
            {
              "id": 100505082,
              "year": 2005
            },
            {
              "id": 100505829,
              "year": 2006
            },
            {
              "id": 100505833,
              "year": 2007
            },
            {
              "id": 100523309,
              "year": 2008
            },
            {
              "id": 100526310,
              "year": 2009
            },
            {
              "id": 100528469,
              "year": 2010
            },
            {
              "id": 100532470,
              "year": 2011
            },
            {
              "id": 100537149,
              "year": 2012
            },
            {
              "id": 200433477,
              "year": 2013
            },
            {
              "id": 200480566,
              "year": 2014
            },
            {
              "id": 200491058,
              "year": 2015
            },
            {
              "id": 200737083,
              "year": 2016
            },
            {
              "id": 401640543,
              "year": 2017
            }
          ]
        },
        {
          "id": "Lincoln_Navigator_L",
          "name": "Navigator L",
          "niceName": "navigator-l",
          "years": [
            {
              "id": 100520326,
              "year": 2007
            },
            {
              "id": 100523389,
              "year": 2008
            },
            {
              "id": 100526311,
              "year": 2009
            }
          ]
        },
        {
          "id": "Lincoln_Town_Car",
          "name": "Town Car",
          "niceName": "town-car",
          "years": [
            {
              "id": 1926,
              "year": 1990
            },
            {
              "id": 1927,
              "year": 1991
            },
            {
              "id": 702,
              "year": 1992
            },
            {
              "id": 1928,
              "year": 1993
            },
            {
              "id": 1929,
              "year": 1994
            },
            {
              "id": 703,
              "year": 1995
            },
            {
              "id": 1930,
              "year": 1996
            },
            {
              "id": 1931,
              "year": 1997
            },
            {
              "id": 704,
              "year": 1998
            },
            {
              "id": 3573,
              "year": 1999
            },
            {
              "id": 514,
              "year": 2000
            },
            {
              "id": 100000164,
              "year": 2001
            },
            {
              "id": 3750,
              "year": 2002
            },
            {
              "id": 100502611,
              "year": 2003
            },
            {
              "id": 100503505,
              "year": 2004
            },
            {
              "id": 100505103,
              "year": 2005
            },
            {
              "id": 100506310,
              "year": 2006
            },
            {
              "id": 100516885,
              "year": 2007
            },
            {
              "id": 100524577,
              "year": 2008
            },
            {
              "id": 100525652,
              "year": 2009
            },
            {
              "id": 100530469,
              "year": 2010
            },
            {
              "id": 100531850,
              "year": 2011
            }
          ]
        },
        {
          "id": "Lincoln_Zephyr",
          "name": "Zephyr",
          "niceName": "zephyr",
          "years": [
            {
              "id": 100504422,
              "year": 2006
            }
          ]
        }
      ]
    },
    {
      "id": 200006242,
      "name": "Lotus",
      "niceName": "lotus",
      "models": [
        {
          "id": "Lotus_Elise",
          "name": "Elise",
          "niceName": "elise",
          "years": [
            {
              "id": 100503686,
              "year": 2005
            },
            {
              "id": 100506679,
              "year": 2006
            },
            {
              "id": 100522627,
              "year": 2007
            },
            {
              "id": 100524669,
              "year": 2008
            },
            {
              "id": 100527449,
              "year": 2009
            },
            {
              "id": 100528569,
              "year": 2010
            },
            {
              "id": 100531214,
              "year": 2011
            }
          ]
        },
        {
          "id": "Lotus_Esprit",
          "name": "Esprit",
          "niceName": "esprit",
          "years": [
            {
              "id": 100000304,
              "year": 2001
            },
            {
              "id": 100502600,
              "year": 2002
            },
            {
              "id": 100503090,
              "year": 2003
            },
            {
              "id": 100504523,
              "year": 2004
            }
          ]
        },
        {
          "id": "Lotus_Evora",
          "name": "Evora",
          "niceName": "evora",
          "years": [
            {
              "id": 100524972,
              "year": 2010
            },
            {
              "id": 100534429,
              "year": 2011
            },
            {
              "id": 200460798,
              "year": 2013
            },
            {
              "id": 200729917,
              "year": 2014
            }
          ]
        },
        {
          "id": "Lotus_Evora_400",
          "name": "Evora 400",
          "niceName": "evora-400",
          "years": [
            {
              "id": 401666186,
              "year": 2017
            }
          ]
        },
        {
          "id": "Lotus_Exige",
          "name": "Exige",
          "niceName": "exige",
          "years": [
            {
              "id": 100506700,
              "year": 2006
            },
            {
              "id": 100522628,
              "year": 2007
            },
            {
              "id": 100524670,
              "year": 2008
            },
            {
              "id": 100527450,
              "year": 2009
            },
            {
              "id": 100530449,
              "year": 2010
            },
            {
              "id": 100531215,
              "year": 2011
            }
          ]
        }
      ]
    },
    {
      "id": 200002305,
      "name": "MINI",
      "niceName": "mini",
      "models": [
        {
          "id": "MINI_Clubman",
          "name": "Clubman",
          "niceName": "clubman",
          "years": [
            {
              "id": 401656746,
              "year": 2017
            }
          ]
        },
        {
          "id": "MINI_Convertible",
          "name": "Convertible",
          "niceName": "convertible",
          "years": [
            {
              "id": 401655076,
              "year": 2017
            }
          ]
        },
        {
          "id": "MINI_Cooper",
          "name": "Cooper",
          "niceName": "cooper",
          "years": [
            {
              "id": 100502585,
              "year": 2002
            },
            {
              "id": 100502862,
              "year": 2003
            },
            {
              "id": 100503580,
              "year": 2004
            },
            {
              "id": 100503223,
              "year": 2005
            },
            {
              "id": 100506449,
              "year": 2006
            },
            {
              "id": 100505530,
              "year": 2007
            },
            {
              "id": 100524537,
              "year": 2008
            },
            {
              "id": 100525449,
              "year": 2009
            },
            {
              "id": 100529950,
              "year": 2010
            },
            {
              "id": 100531411,
              "year": 2011
            },
            {
              "id": 100529269,
              "year": 2012
            },
            {
              "id": 200434265,
              "year": 2013
            },
            {
              "id": 200484992,
              "year": 2014
            },
            {
              "id": 200483475,
              "year": 2015
            },
            {
              "id": 200738845,
              "year": 2016
            }
          ]
        },
        {
          "id": "MINI_Cooper_Clubman",
          "name": "Cooper Clubman",
          "niceName": "cooper-clubman",
          "years": [
            {
              "id": 100524631,
              "year": 2008
            },
            {
              "id": 100525450,
              "year": 2009
            },
            {
              "id": 100530069,
              "year": 2010
            },
            {
              "id": 100533352,
              "year": 2011
            },
            {
              "id": 100536029,
              "year": 2012
            },
            {
              "id": 200436105,
              "year": 2013
            },
            {
              "id": 200493690,
              "year": 2014
            },
            {
              "id": 200741085,
              "year": 2016
            }
          ]
        },
        {
          "id": "MINI_Cooper_Countryman",
          "name": "Cooper Countryman",
          "niceName": "cooper-countryman",
          "years": [
            {
              "id": 100533730,
              "year": 2011
            },
            {
              "id": 100535970,
              "year": 2012
            },
            {
              "id": 100539271,
              "year": 2013
            },
            {
              "id": 200491398,
              "year": 2014
            },
            {
              "id": 200708300,
              "year": 2015
            },
            {
              "id": 200736666,
              "year": 2016
            }
          ]
        },
        {
          "id": "MINI_Cooper_Coupe",
          "name": "Cooper Coupe",
          "niceName": "cooper-coupe",
          "years": [
            {
              "id": 100531652,
              "year": 2012
            },
            {
              "id": 200437417,
              "year": 2013
            },
            {
              "id": 200493420,
              "year": 2014
            },
            {
              "id": 200709232,
              "year": 2015
            }
          ]
        },
        {
          "id": "MINI_Cooper_Paceman",
          "name": "Cooper Paceman",
          "niceName": "cooper-paceman",
          "years": [
            {
              "id": 100537649,
              "year": 2013
            },
            {
              "id": 200492527,
              "year": 2014
            },
            {
              "id": 200709368,
              "year": 2015
            },
            {
              "id": 200745062,
              "year": 2016
            }
          ]
        },
        {
          "id": "MINI_Cooper_Roadster",
          "name": "Cooper Roadster",
          "niceName": "cooper-roadster",
          "years": [
            {
              "id": 100531653,
              "year": 2012
            },
            {
              "id": 200438514,
              "year": 2013
            },
            {
              "id": 200493713,
              "year": 2014
            },
            {
              "id": 200709219,
              "year": 2015
            }
          ]
        },
        {
          "id": "MINI_Hardtop",
          "name": "Hardtop",
          "niceName": "hardtop",
          "years": [
            {
              "id": 401658048,
              "year": 2017
            }
          ]
        }
      ]
    },
    {
      "id": 200028029,
      "name": "Maserati",
      "niceName": "maserati",
      "models": [
        {
          "id": "Maserati_Coupe",
          "name": "Coupe",
          "niceName": "coupe",
          "years": [
            {
              "id": 100502603,
              "year": 2002
            },
            {
              "id": 100502846,
              "year": 2003
            },
            {
              "id": 100503787,
              "year": 2004
            },
            {
              "id": 100505505,
              "year": 2005
            },
            {
              "id": 100507459,
              "year": 2006
            }
          ]
        },
        {
          "id": "Maserati_Ghibli",
          "name": "Ghibli",
          "niceName": "ghibli",
          "years": [
            {
              "id": 200477736,
              "year": 2014
            },
            {
              "id": 200719232,
              "year": 2015
            },
            {
              "id": 401583224,
              "year": 2016
            },
            {
              "id": 401661436,
              "year": 2017
            }
          ]
        },
        {
          "id": "Maserati_GranSport",
          "name": "GranSport",
          "niceName": "gransport",
          "years": [
            {
              "id": 100505506,
              "year": 2005
            },
            {
              "id": 100507460,
              "year": 2006
            }
          ]
        },
        {
          "id": "Maserati_GranTurismo",
          "name": "GranTurismo",
          "niceName": "granturismo",
          "years": [
            {
              "id": 100522453,
              "year": 2008
            },
            {
              "id": 100526431,
              "year": 2009
            },
            {
              "id": 100533790,
              "year": 2010
            },
            {
              "id": 100532949,
              "year": 2011
            },
            {
              "id": 100539309,
              "year": 2012
            },
            {
              "id": 100539273,
              "year": 2013
            },
            {
              "id": 200674297,
              "year": 2014
            },
            {
              "id": 200719343,
              "year": 2015
            },
            {
              "id": 401588487,
              "year": 2016
            }
          ]
        },
        {
          "id": "Maserati_GranTurismo_Convertible",
          "name": "GranTurismo Convertible",
          "niceName": "granturismo-convertible",
          "years": [
            {
              "id": 100530629,
              "year": 2010
            },
            {
              "id": 100533689,
              "year": 2011
            },
            {
              "id": 100539310,
              "year": 2012
            },
            {
              "id": 100539272,
              "year": 2013
            },
            {
              "id": 200674480,
              "year": 2014
            },
            {
              "id": 401590484,
              "year": 2016
            }
          ]
        },
        {
          "id": "Maserati_Levante",
          "name": "Levante",
          "niceName": "levante",
          "years": [
            {
              "id": 401633528,
              "year": 2017
            }
          ]
        },
        {
          "id": "Maserati_Quattroporte",
          "name": "Quattroporte",
          "niceName": "quattroporte",
          "years": [
            {
              "id": 100503150,
              "year": 2005
            },
            {
              "id": 100506860,
              "year": 2006
            },
            {
              "id": 100522727,
              "year": 2007
            },
            {
              "id": 100524929,
              "year": 2008
            },
            {
              "id": 100525352,
              "year": 2009
            },
            {
              "id": 100533789,
              "year": 2010
            },
            {
              "id": 100533651,
              "year": 2011
            },
            {
              "id": 100539158,
              "year": 2012
            },
            {
              "id": 200460818,
              "year": 2014
            },
            {
              "id": 200719263,
              "year": 2015
            },
            {
              "id": 401597824,
              "year": 2016
            },
            {
              "id": 401661437,
              "year": 2017
            }
          ]
        },
        {
          "id": "Maserati_Spyder",
          "name": "Spyder",
          "niceName": "spyder",
          "years": [
            {
              "id": 100502604,
              "year": 2002
            },
            {
              "id": 100502847,
              "year": 2003
            },
            {
              "id": 100503788,
              "year": 2004
            },
            {
              "id": 100505507,
              "year": 2005
            }
          ]
        }
      ]
    },
    {
      "id": 200043087,
      "name": "Maybach",
      "niceName": "maybach",
      "models": [
        {
          "id": "Maybach_57",
          "name": "57",
          "niceName": "57",
          "years": [
            {
              "id": 100502941,
              "year": 2004
            },
            {
              "id": 100505365,
              "year": 2005
            },
            {
              "id": 100507299,
              "year": 2006
            },
            {
              "id": 100516888,
              "year": 2007
            },
            {
              "id": 100524750,
              "year": 2008
            },
            {
              "id": 100526649,
              "year": 2009
            },
            {
              "id": 100531489,
              "year": 2010
            },
            {
              "id": 100534869,
              "year": 2011
            },
            {
              "id": 200418113,
              "year": 2012
            }
          ]
        },
        {
          "id": "Maybach_62",
          "name": "62",
          "niceName": "62",
          "years": [
            {
              "id": 100502942,
              "year": 2004
            },
            {
              "id": 100505366,
              "year": 2005
            },
            {
              "id": 100507300,
              "year": 2006
            },
            {
              "id": 100516889,
              "year": 2007
            },
            {
              "id": 100524751,
              "year": 2008
            },
            {
              "id": 100526789,
              "year": 2009
            },
            {
              "id": 100531849,
              "year": 2010
            },
            {
              "id": 100534889,
              "year": 2011
            },
            {
              "id": 200418114,
              "year": 2012
            }
          ]
        },
        {
          "id": "Maybach_Landaulet",
          "name": "Landaulet",
          "niceName": "landaulet",
          "years": [
            {
              "id": 100527709,
              "year": 2009
            },
            {
              "id": 100531929,
              "year": 2010
            },
            {
              "id": 100535169,
              "year": 2011
            },
            {
              "id": 200418115,
              "year": 2012
            }
          ]
        }
      ]
    },
    {
      "id": 200004100,
      "name": "Mazda",
      "niceName": "mazda",
      "models": [
        {
          "id": "Mazda_2",
          "name": "2",
          "niceName": "2",
          "years": [
            {
              "id": 100529730,
              "year": 2011
            },
            {
              "id": 100538809,
              "year": 2012
            },
            {
              "id": 200438361,
              "year": 2013
            },
            {
              "id": 200488823,
              "year": 2014
            }
          ]
        },
        {
          "id": "Mazda_3",
          "name": "3",
          "niceName": "3",
          "years": [
            {
              "id": 100503259,
              "year": 2004
            },
            {
              "id": 100505085,
              "year": 2005
            },
            {
              "id": 100506561,
              "year": 2006
            },
            {
              "id": 100519286,
              "year": 2007
            },
            {
              "id": 100523756,
              "year": 2008
            },
            {
              "id": 100524802,
              "year": 2009
            },
            {
              "id": 100525989,
              "year": 2010
            },
            {
              "id": 100532693,
              "year": 2011
            },
            {
              "id": 100534489,
              "year": 2012
            },
            {
              "id": 100534470,
              "year": 2013
            },
            {
              "id": 200475381,
              "year": 2014
            },
            {
              "id": 200703374,
              "year": 2015
            },
            {
              "id": 200743726,
              "year": 2016
            },
            {
              "id": 401676798,
              "year": 2017
            }
          ]
        },
        {
          "id": "Mazda_323",
          "name": "323",
          "niceName": "323",
          "years": [
            {
              "id": 1933,
              "year": 1990
            },
            {
              "id": 1934,
              "year": 1991
            },
            {
              "id": 1935,
              "year": 1992
            },
            {
              "id": 1936,
              "year": 1993
            },
            {
              "id": 1937,
              "year": 1994
            }
          ]
        },
        {
          "id": "Mazda_5",
          "name": "5",
          "niceName": "5",
          "years": [
            {
              "id": 100505130,
              "year": 2006
            },
            {
              "id": 100519181,
              "year": 2007
            },
            {
              "id": 100524369,
              "year": 2008
            },
            {
              "id": 100525660,
              "year": 2009
            },
            {
              "id": 100530610,
              "year": 2010
            },
            {
              "id": 100531051,
              "year": 2012
            },
            {
              "id": 200441888,
              "year": 2013
            },
            {
              "id": 200673501,
              "year": 2014
            },
            {
              "id": 200715548,
              "year": 2015
            }
          ]
        },
        {
          "id": "Mazda_6",
          "name": "6",
          "niceName": "6",
          "years": [
            {
              "id": 100502664,
              "year": 2003
            },
            {
              "id": 100503163,
              "year": 2004
            },
            {
              "id": 100505086,
              "year": 2005
            },
            {
              "id": 100506844,
              "year": 2006
            },
            {
              "id": 100519329,
              "year": 2007
            },
            {
              "id": 100512742,
              "year": 2008
            },
            {
              "id": 100524803,
              "year": 2009
            },
            {
              "id": 100528515,
              "year": 2010
            },
            {
              "id": 100531352,
              "year": 2011
            },
            {
              "id": 100535929,
              "year": 2012
            },
            {
              "id": 200420229,
              "year": 2013
            },
            {
              "id": 200428484,
              "year": 2014
            },
            {
              "id": 200673389,
              "year": 2015
            },
            {
              "id": 200724972,
              "year": 2016
            },
            {
              "id": 401662075,
              "year": 2017
            }
          ]
        },
        {
          "id": "Mazda_626",
          "name": "626",
          "niceName": "626",
          "years": [
            {
              "id": 1938,
              "year": 1990
            },
            {
              "id": 1939,
              "year": 1991
            },
            {
              "id": 706,
              "year": 1992
            },
            {
              "id": 1940,
              "year": 1993
            },
            {
              "id": 1941,
              "year": 1994
            },
            {
              "id": 707,
              "year": 1995
            },
            {
              "id": 1942,
              "year": 1996
            },
            {
              "id": 1943,
              "year": 1997
            },
            {
              "id": 1944,
              "year": 1998
            },
            {
              "id": 3574,
              "year": 1999
            },
            {
              "id": 385,
              "year": 2000
            },
            {
              "id": 100000174,
              "year": 2001
            },
            {
              "id": 100000442,
              "year": 2002
            }
          ]
        },
        {
          "id": "Mazda_929",
          "name": "929",
          "niceName": "929",
          "years": [
            {
              "id": 1945,
              "year": 1990
            },
            {
              "id": 1946,
              "year": 1991
            },
            {
              "id": 709,
              "year": 1992
            },
            {
              "id": 1947,
              "year": 1993
            },
            {
              "id": 1948,
              "year": 1994
            },
            {
              "id": 710,
              "year": 1995
            }
          ]
        },
        {
          "id": "Mazda_B_Series",
          "name": "B-Series",
          "niceName": "b-series",
          "years": [
            {
              "id": 100000173,
              "year": 2001
            }
          ]
        },
        {
          "id": "Mazda_B_Series_Pickup",
          "name": "B-Series Pickup",
          "niceName": "b-series-pickup",
          "years": [
            {
              "id": 1950,
              "year": 1990
            },
            {
              "id": 1951,
              "year": 1991
            },
            {
              "id": 1952,
              "year": 1992
            },
            {
              "id": 1953,
              "year": 1993
            },
            {
              "id": 711,
              "year": 1994
            },
            {
              "id": 1954,
              "year": 1995
            },
            {
              "id": 1955,
              "year": 1996
            },
            {
              "id": 712,
              "year": 1997
            },
            {
              "id": 1956,
              "year": 1998
            },
            {
              "id": 1224,
              "year": 1999
            },
            {
              "id": 395,
              "year": 2000
            }
          ]
        },
        {
          "id": "Mazda_B_Series_Truck",
          "name": "B-Series Truck",
          "niceName": "b-series-truck",
          "years": [
            {
              "id": 100503624,
              "year": 2004
            },
            {
              "id": 100505089,
              "year": 2005
            },
            {
              "id": 100506980,
              "year": 2006
            },
            {
              "id": 100519041,
              "year": 2007
            },
            {
              "id": 100524055,
              "year": 2008
            },
            {
              "id": 100525910,
              "year": 2009
            }
          ]
        },
        {
          "id": "Mazda_CX_3",
          "name": "CX-3",
          "niceName": "cx-3",
          "years": [
            {
              "id": 200719665,
              "year": 2016
            },
            {
              "id": 401658825,
              "year": 2017
            }
          ]
        },
        {
          "id": "Mazda_CX_5",
          "name": "CX-5",
          "niceName": "cx-5",
          "years": [
            {
              "id": 100534970,
              "year": 2013
            },
            {
              "id": 200459296,
              "year": 2014
            },
            {
              "id": 200673388,
              "year": 2015
            },
            {
              "id": 200726398,
              "year": 2016
            }
          ]
        },
        {
          "id": "Mazda_CX_7",
          "name": "CX-7",
          "niceName": "cx-7",
          "years": [
            {
              "id": 100505868,
              "year": 2007
            },
            {
              "id": 100523757,
              "year": 2008
            },
            {
              "id": 100525536,
              "year": 2009
            },
            {
              "id": 100527389,
              "year": 2010
            },
            {
              "id": 100533829,
              "year": 2011
            },
            {
              "id": 100539155,
              "year": 2012
            }
          ]
        },
        {
          "id": "Mazda_CX_9",
          "name": "CX-9",
          "niceName": "cx-9",
          "years": [
            {
              "id": 100507139,
              "year": 2007
            },
            {
              "id": 100523979,
              "year": 2008
            },
            {
              "id": 100526032,
              "year": 2009
            },
            {
              "id": 100527849,
              "year": 2010
            },
            {
              "id": 100533569,
              "year": 2011
            },
            {
              "id": 100537989,
              "year": 2012
            },
            {
              "id": 200441355,
              "year": 2013
            },
            {
              "id": 200490223,
              "year": 2014
            },
            {
              "id": 200710337,
              "year": 2015
            },
            {
              "id": 401626203,
              "year": 2016
            }
          ]
        },
        {
          "id": "Mazda_MPV",
          "name": "MPV",
          "niceName": "mpv",
          "years": [
            {
              "id": 1958,
              "year": 1990
            },
            {
              "id": 713,
              "year": 1991
            },
            {
              "id": 1814,
              "year": 1992
            },
            {
              "id": 1815,
              "year": 1993
            },
            {
              "id": 714,
              "year": 1994
            },
            {
              "id": 1816,
              "year": 1995
            },
            {
              "id": 1817,
              "year": 1996
            },
            {
              "id": 715,
              "year": 1997
            },
            {
              "id": 1818,
              "year": 1998
            },
            {
              "id": 1098,
              "year": 2000
            },
            {
              "id": 100000172,
              "year": 2001
            },
            {
              "id": 100002582,
              "year": 2002
            },
            {
              "id": 100502849,
              "year": 2003
            },
            {
              "id": 100503625,
              "year": 2004
            },
            {
              "id": 100505088,
              "year": 2005
            },
            {
              "id": 100506562,
              "year": 2006
            }
          ]
        },
        {
          "id": "Mazda_MX_3",
          "name": "MX-3",
          "niceName": "mx-3",
          "years": [
            {
              "id": 1819,
              "year": 1992
            },
            {
              "id": 716,
              "year": 1993
            },
            {
              "id": 1820,
              "year": 1994
            },
            {
              "id": 1821,
              "year": 1995
            }
          ]
        },
        {
          "id": "Mazda_MX_5_Miata",
          "name": "MX-5 Miata",
          "niceName": "mx-5-miata",
          "years": [
            {
              "id": 1829,
              "year": 1990
            },
            {
              "id": 1830,
              "year": 1991
            },
            {
              "id": 718,
              "year": 1992
            },
            {
              "id": 1831,
              "year": 1993
            },
            {
              "id": 1832,
              "year": 1994
            },
            {
              "id": 719,
              "year": 1995
            },
            {
              "id": 1833,
              "year": 1996
            },
            {
              "id": 1834,
              "year": 1997
            },
            {
              "id": 3576,
              "year": 1999
            },
            {
              "id": 392,
              "year": 2000
            },
            {
              "id": 100000171,
              "year": 2001
            },
            {
              "id": 100000444,
              "year": 2002
            },
            {
              "id": 100502850,
              "year": 2003
            },
            {
              "id": 100503626,
              "year": 2004
            },
            {
              "id": 100505090,
              "year": 2005
            },
            {
              "id": 100505034,
              "year": 2006
            },
            {
              "id": 100519289,
              "year": 2007
            },
            {
              "id": 100524177,
              "year": 2008
            },
            {
              "id": 100525114,
              "year": 2009
            },
            {
              "id": 100527412,
              "year": 2010
            },
            {
              "id": 100532696,
              "year": 2011
            },
            {
              "id": 100536769,
              "year": 2012
            },
            {
              "id": 200438623,
              "year": 2013
            },
            {
              "id": 200484575,
              "year": 2014
            },
            {
              "id": 200695187,
              "year": 2015
            },
            {
              "id": 200692013,
              "year": 2016
            }
          ]
        },
        {
          "id": "Mazda_MX_5_Miata_RF",
          "name": "MX-5 Miata RF",
          "niceName": "mx-5-miata-rf",
          "years": [
            {
              "id": 401678573,
              "year": 2017
            }
          ]
        },
        {
          "id": "Mazda_MX_6",
          "name": "MX-6",
          "niceName": "mx-6",
          "years": [
            {
              "id": 1823,
              "year": 1990
            },
            {
              "id": 1824,
              "year": 1991
            },
            {
              "id": 1825,
              "year": 1992
            },
            {
              "id": 1826,
              "year": 1993
            },
            {
              "id": 1827,
              "year": 1994
            },
            {
              "id": 1828,
              "year": 1995
            },
            {
              "id": 717,
              "year": 1996
            },
            {
              "id": 3575,
              "year": 1997
            }
          ]
        },
        {
          "id": "Mazda_Mazdaspeed_3",
          "name": "Mazdaspeed 3",
          "niceName": "mazdaspeed-3",
          "years": [
            {
              "id": 100506027,
              "year": 2007
            },
            {
              "id": 100523769,
              "year": 2008
            },
            {
              "id": 100525788,
              "year": 2009
            },
            {
              "id": 100527769,
              "year": 2010
            },
            {
              "id": 100532729,
              "year": 2011
            },
            {
              "id": 100537169,
              "year": 2012
            },
            {
              "id": 200442013,
              "year": 2013
            }
          ]
        },
        {
          "id": "Mazda_Mazdaspeed_6",
          "name": "Mazdaspeed 6",
          "niceName": "mazdaspeed-6",
          "years": [
            {
              "id": 100504762,
              "year": 2006
            },
            {
              "id": 100519328,
              "year": 2007
            }
          ]
        },
        {
          "id": "Mazda_Mazdaspeed_MX_5_Miata",
          "name": "Mazdaspeed MX-5 Miata",
          "niceName": "mazdaspeed-mx-5-miata",
          "years": [
            {
              "id": 100503865,
              "year": 2004
            },
            {
              "id": 100503526,
              "year": 2005
            }
          ]
        },
        {
          "id": "Mazda_Mazdaspeed_Protege",
          "name": "Mazdaspeed Protege",
          "niceName": "mazdaspeed-protege",
          "years": [
            {
              "id": 100502970,
              "year": 2003
            }
          ]
        },
        {
          "id": "Mazda_Millenia",
          "name": "Millenia",
          "niceName": "millenia",
          "years": [
            {
              "id": 720,
              "year": 1995
            },
            {
              "id": 1835,
              "year": 1996
            },
            {
              "id": 1836,
              "year": 1997
            },
            {
              "id": 1837,
              "year": 1998
            },
            {
              "id": 3577,
              "year": 1999
            },
            {
              "id": 1053,
              "year": 2000
            },
            {
              "id": 100000175,
              "year": 2001
            },
            {
              "id": 100000443,
              "year": 2002
            }
          ]
        },
        {
          "id": "Mazda_Navajo",
          "name": "Navajo",
          "niceName": "navajo",
          "years": [
            {
              "id": 1838,
              "year": 1991
            },
            {
              "id": 1839,
              "year": 1992
            },
            {
              "id": 1840,
              "year": 1993
            },
            {
              "id": 1841,
              "year": 1994
            }
          ]
        },
        {
          "id": "Mazda_Protege",
          "name": "Protege",
          "niceName": "protege",
          "years": [
            {
              "id": 1842,
              "year": 1990
            },
            {
              "id": 721,
              "year": 1991
            },
            {
              "id": 1843,
              "year": 1992
            },
            {
              "id": 1844,
              "year": 1993
            },
            {
              "id": 722,
              "year": 1994
            },
            {
              "id": 1845,
              "year": 1995
            },
            {
              "id": 1846,
              "year": 1996
            },
            {
              "id": 723,
              "year": 1997
            },
            {
              "id": 1847,
              "year": 1998
            },
            {
              "id": 3578,
              "year": 1999
            },
            {
              "id": 1054,
              "year": 2000
            },
            {
              "id": 100000170,
              "year": 2001
            },
            {
              "id": 100000441,
              "year": 2002
            },
            {
              "id": 100502851,
              "year": 2003
            }
          ]
        },
        {
          "id": "Mazda_Protege5",
          "name": "Protege5",
          "niceName": "protege5",
          "years": [
            {
              "id": 100000343,
              "year": 2002
            },
            {
              "id": 100502852,
              "year": 2003
            }
          ]
        },
        {
          "id": "Mazda_RX_7",
          "name": "RX-7",
          "niceName": "rx-7",
          "years": [
            {
              "id": 1849,
              "year": 1990
            },
            {
              "id": 724,
              "year": 1991
            },
            {
              "id": 1851,
              "year": 1994
            },
            {
              "id": 725,
              "year": 1995
            }
          ]
        },
        {
          "id": "Mazda_RX_8",
          "name": "RX-8",
          "niceName": "rx-8",
          "years": [
            {
              "id": 100502665,
              "year": 2004
            },
            {
              "id": 100505087,
              "year": 2005
            },
            {
              "id": 100507599,
              "year": 2006
            },
            {
              "id": 100519327,
              "year": 2007
            },
            {
              "id": 100524056,
              "year": 2008
            },
            {
              "id": 100524804,
              "year": 2009
            },
            {
              "id": 100528516,
              "year": 2010
            },
            {
              "id": 100533510,
              "year": 2011
            }
          ]
        },
        {
          "id": "Mazda_Tribute",
          "name": "Tribute",
          "niceName": "tribute",
          "years": [
            {
              "id": 100000169,
              "year": 2001
            },
            {
              "id": 100000423,
              "year": 2002
            },
            {
              "id": 100502853,
              "year": 2003
            },
            {
              "id": 100503522,
              "year": 2004
            },
            {
              "id": 100504097,
              "year": 2005
            },
            {
              "id": 100506230,
              "year": 2006
            },
            {
              "id": 100507622,
              "year": 2008
            },
            {
              "id": 100525929,
              "year": 2009
            },
            {
              "id": 100528749,
              "year": 2010
            },
            {
              "id": 100532849,
              "year": 2011
            }
          ]
        },
        {
          "id": "Mazda_Tribute_Hybrid",
          "name": "Tribute Hybrid",
          "niceName": "tribute-hybrid",
          "years": [
            {
              "id": 100524689,
              "year": 2008
            },
            {
              "id": 100525951,
              "year": 2009
            }
          ]
        },
        {
          "id": "Mazda_Truck",
          "name": "Truck",
          "niceName": "truck",
          "years": [
            {
              "id": 100000445,
              "year": 2002
            },
            {
              "id": 100502854,
              "year": 2003
            }
          ]
        }
      ]
    },
    {
      "id": 200051397,
      "name": "McLaren",
      "niceName": "mclaren",
      "models": [
        {
          "id": "McLaren_570S",
          "name": "570S",
          "niceName": "570s",
          "years": [
            {
              "id": 401638463,
              "year": 2016
            }
          ]
        },
        {
          "id": "McLaren_650S_Coupe",
          "name": "650S Coupe",
          "niceName": "650s-coupe",
          "years": [
            {
              "id": 200720532,
              "year": 2015
            }
          ]
        },
        {
          "id": "McLaren_650S_Spider",
          "name": "650S Spider",
          "niceName": "650s-spider",
          "years": [
            {
              "id": 200720482,
              "year": 2015
            }
          ]
        },
        {
          "id": "McLaren_MP4_12C",
          "name": "MP4-12C",
          "niceName": "mp4-12c",
          "years": [
            {
              "id": 100530169,
              "year": 2012
            },
            {
              "id": 200474666,
              "year": 2013
            }
          ]
        },
        {
          "id": "McLaren_MP4_12C_Spider",
          "name": "MP4-12C Spider",
          "niceName": "mp4-12c-spider",
          "years": [
            {
              "id": 200444183,
              "year": 2013
            }
          ]
        }
      ]
    },
    {
      "id": 200000130,
      "name": "Mercedes-Benz",
      "niceName": "mercedes-benz",
      "models": [
        {
          "id": "Mercedes_Benz_190_Class",
          "name": "190-Class",
          "niceName": "190-class",
          "years": [
            {
              "id": 1853,
              "year": 1990
            },
            {
              "id": 1854,
              "year": 1991
            },
            {
              "id": 1855,
              "year": 1992
            },
            {
              "id": 1856,
              "year": 1993
            }
          ]
        },
        {
          "id": "Mercedes_Benz_300_Class",
          "name": "300-Class",
          "niceName": "300-class",
          "years": [
            {
              "id": 726,
              "year": 1990
            },
            {
              "id": 1861,
              "year": 1992
            },
            {
              "id": 1862,
              "year": 1993
            }
          ]
        },
        {
          "id": "Mercedes_Benz_350_Class",
          "name": "350-Class",
          "niceName": "350-class",
          "years": [
            {
              "id": 727,
              "year": 1990
            },
            {
              "id": 1863,
              "year": 1991
            }
          ]
        },
        {
          "id": "Mercedes_Benz_400_Class",
          "name": "400-Class",
          "niceName": "400-class",
          "years": [
            {
              "id": 1866,
              "year": 1992
            },
            {
              "id": 729,
              "year": 1993
            }
          ]
        },
        {
          "id": "Mercedes_Benz_420_Class",
          "name": "420-Class",
          "niceName": "420-class",
          "years": [
            {
              "id": 1868,
              "year": 1990
            }
          ]
        },
        {
          "id": "Mercedes_Benz_500_Class",
          "name": "500-Class",
          "niceName": "500-class",
          "years": [
            {
              "id": 1873,
              "year": 1993
            }
          ]
        },
        {
          "id": "Mercedes_Benz_560_Class",
          "name": "560-Class",
          "niceName": "560-class",
          "years": [
            {
              "id": 1877,
              "year": 1991
            }
          ]
        },
        {
          "id": "Mercedes_Benz_AMG_GT",
          "name": "AMG GT",
          "niceName": "amg-gt",
          "years": [
            {
              "id": 200700831,
              "year": 2016
            },
            {
              "id": 401665249,
              "year": 2017
            }
          ]
        },
        {
          "id": "Mercedes_Benz_B_Class_Electric_Drive",
          "name": "B-Class Electric Drive",
          "niceName": "b-class-electric-drive",
          "years": [
            {
              "id": 200466756,
              "year": 2014
            },
            {
              "id": 200731903,
              "year": 2015
            },
            {
              "id": 401598100,
              "year": 2016
            },
            {
              "id": 401667829,
              "year": 2017
            }
          ]
        },
        {
          "id": "Mercedes_Benz_C_Class",
          "name": "C-Class",
          "niceName": "c-class",
          "years": [
            {
              "id": 732,
              "year": 1996
            },
            {
              "id": 1884,
              "year": 1998
            },
            {
              "id": 3579,
              "year": 1999
            },
            {
              "id": 1062,
              "year": 2000
            },
            {
              "id": 100000184,
              "year": 2001
            },
            {
              "id": 100000433,
              "year": 2002
            },
            {
              "id": 100502855,
              "year": 2003
            },
            {
              "id": 100503627,
              "year": 2004
            },
            {
              "id": 100504143,
              "year": 2005
            },
            {
              "id": 100506245,
              "year": 2006
            },
            {
              "id": 100516820,
              "year": 2007
            },
            {
              "id": 100505967,
              "year": 2008
            },
            {
              "id": 100525772,
              "year": 2009
            },
            {
              "id": 100528649,
              "year": 2010
            },
            {
              "id": 100530853,
              "year": 2011
            },
            {
              "id": 100531654,
              "year": 2012
            },
            {
              "id": 200432338,
              "year": 2013
            },
            {
              "id": 200467373,
              "year": 2014
            },
            {
              "id": 200467378,
              "year": 2015
            },
            {
              "id": 200773057,
              "year": 2016
            },
            {
              "id": 401578396,
              "year": 2017
            }
          ]
        },
        {
          "id": "Mercedes_Benz_C36_AMG",
          "name": "C36 AMG",
          "niceName": "c36-amg",
          "years": [
            {
              "id": 100503375,
              "year": 1996
            },
            {
              "id": 100503385,
              "year": 1997
            }
          ]
        },
        {
          "id": "Mercedes_Benz_C43_AMG",
          "name": "C43 AMG",
          "niceName": "c43-amg",
          "years": [
            {
              "id": 100503396,
              "year": 1998
            },
            {
              "id": 100503419,
              "year": 2000
            }
          ]
        },
        {
          "id": "Mercedes_Benz_CL_Class",
          "name": "CL-Class",
          "niceName": "cl-class",
          "years": [
            {
              "id": 1885,
              "year": 1998
            },
            {
              "id": 3580,
              "year": 1999
            },
            {
              "id": 298,
              "year": 2000
            },
            {
              "id": 100000177,
              "year": 2001
            },
            {
              "id": 100000438,
              "year": 2002
            },
            {
              "id": 100502856,
              "year": 2003
            },
            {
              "id": 100503665,
              "year": 2004
            },
            {
              "id": 100505063,
              "year": 2005
            },
            {
              "id": 100506247,
              "year": 2006
            },
            {
              "id": 100505994,
              "year": 2007
            },
            {
              "id": 100523253,
              "year": 2008
            },
            {
              "id": 100525775,
              "year": 2009
            },
            {
              "id": 100530230,
              "year": 2010
            },
            {
              "id": 100531970,
              "year": 2011
            },
            {
              "id": 100536189,
              "year": 2012
            },
            {
              "id": 200436905,
              "year": 2013
            },
            {
              "id": 200488276,
              "year": 2014
            }
          ]
        },
        {
          "id": "Mercedes_Benz_CLA_Class",
          "name": "CLA-Class",
          "niceName": "cla-class",
          "years": [
            {
              "id": 200460819,
              "year": 2014
            },
            {
              "id": 200721179,
              "year": 2015
            },
            {
              "id": 401601386,
              "year": 2016
            },
            {
              "id": 401665028,
              "year": 2017
            }
          ]
        },
        {
          "id": "Mercedes_Benz_CLK_Class",
          "name": "CLK-Class",
          "niceName": "clk-class",
          "years": [
            {
              "id": 3581,
              "year": 1998
            },
            {
              "id": 988,
              "year": 1999
            },
            {
              "id": 391,
              "year": 2000
            },
            {
              "id": 100000176,
              "year": 2001
            },
            {
              "id": 100000435,
              "year": 2002
            },
            {
              "id": 100502699,
              "year": 2003
            },
            {
              "id": 100502990,
              "year": 2004
            },
            {
              "id": 100504642,
              "year": 2005
            },
            {
              "id": 100506250,
              "year": 2006
            },
            {
              "id": 100516822,
              "year": 2007
            },
            {
              "id": 100524536,
              "year": 2008
            },
            {
              "id": 100523201,
              "year": 2009
            }
          ]
        },
        {
          "id": "Mercedes_Benz_CLS_Class",
          "name": "CLS-Class",
          "niceName": "cls-class",
          "years": [
            {
              "id": 100505509,
              "year": 2006
            },
            {
              "id": 100516821,
              "year": 2007
            },
            {
              "id": 100524450,
              "year": 2008
            },
            {
              "id": 100522875,
              "year": 2009
            },
            {
              "id": 100530190,
              "year": 2010
            },
            {
              "id": 100532889,
              "year": 2011
            },
            {
              "id": 100527169,
              "year": 2012
            },
            {
              "id": 200434978,
              "year": 2013
            },
            {
              "id": 200479902,
              "year": 2014
            },
            {
              "id": 200709876,
              "year": 2015
            },
            {
              "id": 200745885,
              "year": 2016
            },
            {
              "id": 401670634,
              "year": 2017
            }
          ]
        },
        {
          "id": "Mercedes_Benz_E_Class",
          "name": "E-Class",
          "niceName": "e-class",
          "years": [
            {
              "id": 592,
              "year": 1994
            },
            {
              "id": 1744,
              "year": 1995
            },
            {
              "id": 1745,
              "year": 1996
            },
            {
              "id": 1746,
              "year": 1997
            },
            {
              "id": 1747,
              "year": 1998
            },
            {
              "id": 3583,
              "year": 1999
            },
            {
              "id": 1061,
              "year": 2000
            },
            {
              "id": 100000182,
              "year": 2001
            },
            {
              "id": 100000434,
              "year": 2002
            },
            {
              "id": 100502666,
              "year": 2003
            },
            {
              "id": 100502962,
              "year": 2004
            },
            {
              "id": 100504322,
              "year": 2005
            },
            {
              "id": 100505605,
              "year": 2006
            },
            {
              "id": 100512741,
              "year": 2007
            },
            {
              "id": 100512802,
              "year": 2008
            },
            {
              "id": 100525773,
              "year": 2009
            },
            {
              "id": 100522591,
              "year": 2010
            },
            {
              "id": 100530149,
              "year": 2011
            },
            {
              "id": 100536429,
              "year": 2012
            },
            {
              "id": 100539169,
              "year": 2013
            },
            {
              "id": 200459654,
              "year": 2014
            },
            {
              "id": 200464867,
              "year": 2015
            },
            {
              "id": 200732924,
              "year": 2016
            },
            {
              "id": 401626400,
              "year": 2017
            }
          ]
        },
        {
          "id": "Mercedes_Benz_E55_AMG",
          "name": "E55 AMG",
          "niceName": "e55-amg",
          "years": [
            {
              "id": 100503407,
              "year": 1999
            },
            {
              "id": 388,
              "year": 2000
            }
          ]
        },
        {
          "id": "Mercedes_Benz_G_Class",
          "name": "G-Class",
          "niceName": "g-class",
          "years": [
            {
              "id": 100000553,
              "year": 2002
            },
            {
              "id": 100502857,
              "year": 2003
            },
            {
              "id": 100503629,
              "year": 2004
            },
            {
              "id": 100505199,
              "year": 2005
            },
            {
              "id": 100519541,
              "year": 2006
            },
            {
              "id": 100522747,
              "year": 2007
            },
            {
              "id": 100524372,
              "year": 2008
            },
            {
              "id": 100526531,
              "year": 2009
            },
            {
              "id": 100530489,
              "year": 2010
            },
            {
              "id": 100533511,
              "year": 2011
            },
            {
              "id": 100536730,
              "year": 2012
            },
            {
              "id": 200442509,
              "year": 2013
            },
            {
              "id": 200496013,
              "year": 2014
            },
            {
              "id": 200699607,
              "year": 2015
            },
            {
              "id": 401597152,
              "year": 2016
            },
            {
              "id": 401646829,
              "year": 2017
            }
          ]
        },
        {
          "id": "Mercedes_Benz_GL_Class",
          "name": "GL-Class",
          "niceName": "gl-class",
          "years": [
            {
              "id": 100505526,
              "year": 2007
            },
            {
              "id": 100523980,
              "year": 2008
            },
            {
              "id": 100525776,
              "year": 2009
            },
            {
              "id": 100527752,
              "year": 2010
            },
            {
              "id": 100532749,
              "year": 2011
            },
            {
              "id": 100536729,
              "year": 2012
            },
            {
              "id": 100539489,
              "year": 2013
            },
            {
              "id": 200484923,
              "year": 2014
            },
            {
              "id": 200704454,
              "year": 2015
            },
            {
              "id": 200732530,
              "year": 2016
            }
          ]
        },
        {
          "id": "Mercedes_Benz_GLA_Class",
          "name": "GLA-Class",
          "niceName": "gla-class",
          "years": [
            {
              "id": 200468095,
              "year": 2015
            },
            {
              "id": 401597610,
              "year": 2016
            },
            {
              "id": 401660386,
              "year": 2017
            }
          ]
        },
        {
          "id": "Mercedes_Benz_GLC_Class",
          "name": "GLC-Class",
          "niceName": "glc-class",
          "years": [
            {
              "id": 200735398,
              "year": 2016
            },
            {
              "id": 401638662,
              "year": 2017
            }
          ]
        },
        {
          "id": "Mercedes_Benz_GLC_Class_Coupe",
          "name": "GLC-Class Coupe",
          "niceName": "glc-class-coupe",
          "years": [
            {
              "id": 401638663,
              "year": 2017
            }
          ]
        },
        {
          "id": "Mercedes_Benz_GLE_Class",
          "name": "GLE-Class",
          "niceName": "gle-class",
          "years": [
            {
              "id": 200694317,
              "year": 2016
            },
            {
              "id": 401660730,
              "year": 2017
            }
          ]
        },
        {
          "id": "Mercedes_Benz_GLE_Class_Coupe",
          "name": "GLE-Class Coupe",
          "niceName": "gle-class-coupe",
          "years": [
            {
              "id": 200749645,
              "year": 2016
            },
            {
              "id": 401661206,
              "year": 2017
            }
          ]
        },
        {
          "id": "Mercedes_Benz_GLK_Class",
          "name": "GLK-Class",
          "niceName": "glk-class",
          "years": [
            {
              "id": 100505968,
              "year": 2010
            },
            {
              "id": 100532613,
              "year": 2011
            },
            {
              "id": 100536209,
              "year": 2012
            },
            {
              "id": 100539412,
              "year": 2013
            },
            {
              "id": 200482710,
              "year": 2014
            },
            {
              "id": 200701074,
              "year": 2015
            }
          ]
        },
        {
          "id": "Mercedes_Benz_GLS_Class",
          "name": "GLS-Class",
          "niceName": "gls-class",
          "years": [
            {
              "id": 401641435,
              "year": 2017
            }
          ]
        },
        {
          "id": "Mercedes_Benz_M_Class",
          "name": "M-Class",
          "niceName": "m-class",
          "years": [
            {
              "id": 593,
              "year": 1998
            },
            {
              "id": 3584,
              "year": 1999
            },
            {
              "id": 1063,
              "year": 2000
            },
            {
              "id": 100000181,
              "year": 2001
            },
            {
              "id": 100030,
              "year": 2002
            },
            {
              "id": 100502858,
              "year": 2003
            },
            {
              "id": 100503628,
              "year": 2004
            },
            {
              "id": 100503224,
              "year": 2005
            },
            {
              "id": 100504565,
              "year": 2006
            },
            {
              "id": 100516824,
              "year": 2007
            },
            {
              "id": 100524273,
              "year": 2008
            },
            {
              "id": 100525777,
              "year": 2009
            },
            {
              "id": 100527850,
              "year": 2010
            },
            {
              "id": 100532614,
              "year": 2011
            },
            {
              "id": 100532170,
              "year": 2012
            },
            {
              "id": 200435760,
              "year": 2013
            },
            {
              "id": 200486055,
              "year": 2014
            },
            {
              "id": 200703885,
              "year": 2015
            }
          ]
        },
        {
          "id": "Mercedes_Benz_ML55_AMG",
          "name": "ML55 AMG",
          "niceName": "ml55-amg",
          "years": [
            {
              "id": 1081,
              "year": 2000
            }
          ]
        },
        {
          "id": "Mercedes_Benz_Maybach",
          "name": "Maybach",
          "niceName": "maybach",
          "years": [
            {
              "id": 200721611,
              "year": 2016
            },
            {
              "id": 401670461,
              "year": 2017
            }
          ]
        },
        {
          "id": "Mercedes_Benz_Metris",
          "name": "Metris",
          "niceName": "metris",
          "years": [
            {
              "id": 200721408,
              "year": 2016
            }
          ]
        },
        {
          "id": "Mercedes_Benz_R_Class",
          "name": "R-Class",
          "niceName": "r-class",
          "years": [
            {
              "id": 100503225,
              "year": 2006
            },
            {
              "id": 100516823,
              "year": 2007
            },
            {
              "id": 100524429,
              "year": 2008
            },
            {
              "id": 100525774,
              "year": 2009
            },
            {
              "id": 100530209,
              "year": 2010
            },
            {
              "id": 100530890,
              "year": 2011
            },
            {
              "id": 100536149,
              "year": 2012
            }
          ]
        },
        {
          "id": "Mercedes_Benz_S_Class",
          "name": "S-Class",
          "niceName": "s-class",
          "years": [
            {
              "id": 1752,
              "year": 1994
            },
            {
              "id": 1753,
              "year": 1995
            },
            {
              "id": 594,
              "year": 1996
            },
            {
              "id": 1754,
              "year": 1997
            },
            {
              "id": 1755,
              "year": 1998
            },
            {
              "id": 989,
              "year": 1999
            },
            {
              "id": 1228,
              "year": 2000
            },
            {
              "id": 100000180,
              "year": 2001
            },
            {
              "id": 100000436,
              "year": 2002
            },
            {
              "id": 100502859,
              "year": 2003
            },
            {
              "id": 100503667,
              "year": 2004
            },
            {
              "id": 100505201,
              "year": 2005
            },
            {
              "id": 100503988,
              "year": 2006
            },
            {
              "id": 100505665,
              "year": 2007
            },
            {
              "id": 100523270,
              "year": 2008
            },
            {
              "id": 100519162,
              "year": 2009
            },
            {
              "id": 100527289,
              "year": 2010
            },
            {
              "id": 100530889,
              "year": 2011
            },
            {
              "id": 100534269,
              "year": 2012
            },
            {
              "id": 200434466,
              "year": 2013
            },
            {
              "id": 200460854,
              "year": 2014
            },
            {
              "id": 200464866,
              "year": 2015
            },
            {
              "id": 200713462,
              "year": 2016
            },
            {
              "id": 401578397,
              "year": 2017
            }
          ]
        },
        {
          "id": "Mercedes_Benz_SL_Class",
          "name": "SL-Class",
          "niceName": "sl-class",
          "years": [
            {
              "id": 595,
              "year": 1995
            },
            {
              "id": 1757,
              "year": 1996
            },
            {
              "id": 1758,
              "year": 1997
            },
            {
              "id": 596,
              "year": 1998
            },
            {
              "id": 3585,
              "year": 1999
            },
            {
              "id": 386,
              "year": 2000
            },
            {
              "id": 100000179,
              "year": 2001
            },
            {
              "id": 100000346,
              "year": 2002
            },
            {
              "id": 100502612,
              "year": 2003
            },
            {
              "id": 100503666,
              "year": 2004
            },
            {
              "id": 100504784,
              "year": 2005
            },
            {
              "id": 100506288,
              "year": 2006
            },
            {
              "id": 100507359,
              "year": 2007
            },
            {
              "id": 100523451,
              "year": 2008
            },
            {
              "id": 100522594,
              "year": 2009
            },
            {
              "id": 100531511,
              "year": 2011
            },
            {
              "id": 100531912,
              "year": 2012
            },
            {
              "id": 100539112,
              "year": 2013
            },
            {
              "id": 200487897,
              "year": 2014
            },
            {
              "id": 200699751,
              "year": 2015
            },
            {
              "id": 200739147,
              "year": 2016
            },
            {
              "id": 401655566,
              "year": 2017
            }
          ]
        },
        {
          "id": "Mercedes_Benz_SLC_Class",
          "name": "SLC-Class",
          "niceName": "slc-class",
          "years": [
            {
              "id": 401612388,
              "year": 2017
            }
          ]
        },
        {
          "id": "Mercedes_Benz_SLK_Class",
          "name": "SLK-Class",
          "niceName": "slk-class",
          "years": [
            {
              "id": 3586,
              "year": 1998
            },
            {
              "id": 990,
              "year": 1999
            },
            {
              "id": 1064,
              "year": 2000
            },
            {
              "id": 100000183,
              "year": 2001
            },
            {
              "id": 100000437,
              "year": 2002
            },
            {
              "id": 100502860,
              "year": 2003
            },
            {
              "id": 100503586,
              "year": 2004
            },
            {
              "id": 100502969,
              "year": 2005
            },
            {
              "id": 100506156,
              "year": 2006
            },
            {
              "id": 100519285,
              "year": 2007
            },
            {
              "id": 100522595,
              "year": 2008
            },
            {
              "id": 100525191,
              "year": 2009
            },
            {
              "id": 100530090,
              "year": 2010
            },
            {
              "id": 100532893,
              "year": 2011
            },
            {
              "id": 100531450,
              "year": 2012
            },
            {
              "id": 200433342,
              "year": 2013
            },
            {
              "id": 200485383,
              "year": 2014
            },
            {
              "id": 200700020,
              "year": 2015
            },
            {
              "id": 200745344,
              "year": 2016
            }
          ]
        },
        {
          "id": "Mercedes_Benz_SLR_McLaren",
          "name": "SLR McLaren",
          "niceName": "slr-mclaren",
          "years": [
            {
              "id": 100505487,
              "year": 2005
            },
            {
              "id": 100506386,
              "year": 2006
            },
            {
              "id": 100522950,
              "year": 2007
            },
            {
              "id": 100522673,
              "year": 2008
            },
            {
              "id": 100526432,
              "year": 2009
            }
          ]
        },
        {
          "id": "Mercedes_Benz_SLS_AMG",
          "name": "SLS AMG",
          "niceName": "sls-amg",
          "years": [
            {
              "id": 100524393,
              "year": 2011
            },
            {
              "id": 100535249,
              "year": 2012
            }
          ]
        },
        {
          "id": "Mercedes_Benz_SLS_AMG_GT",
          "name": "SLS AMG GT",
          "niceName": "sls-amg-gt",
          "years": [
            {
              "id": 200423824,
              "year": 2013
            },
            {
              "id": 200485792,
              "year": 2014
            }
          ]
        },
        {
          "id": "Mercedes_Benz_SLS_AMG_GT_Final_Edition",
          "name": "SLS AMG GT Final Edition",
          "niceName": "sls-amg-gt-final-edition",
          "years": [
            {
              "id": 200695445,
              "year": 2015
            }
          ]
        },
        {
          "id": "Mercedes_Benz_Sprinter",
          "name": "Sprinter",
          "niceName": "sprinter",
          "years": [
            {
              "id": 100530270,
              "year": 2010
            },
            {
              "id": 100533970,
              "year": 2011
            },
            {
              "id": 100539249,
              "year": 2012
            },
            {
              "id": 200459762,
              "year": 2013
            },
            {
              "id": 200674455,
              "year": 2014
            },
            {
              "id": 200728850,
              "year": 2015
            },
            {
              "id": 200779920,
              "year": 2016
            }
          ]
        },
        {
          "id": "Mercedes_Benz_Sprinter_Worker",
          "name": "Sprinter Worker",
          "niceName": "sprinter-worker",
          "years": [
            {
              "id": 401631621,
              "year": 2016
            }
          ]
        }
      ]
    },
    {
      "id": 200007711,
      "name": "Mercury",
      "niceName": "mercury",
      "models": [
        {
          "id": "Mercury_Capri",
          "name": "Capri",
          "niceName": "capri",
          "years": [
            {
              "id": 1759,
              "year": 1991
            },
            {
              "id": 1760,
              "year": 1992
            },
            {
              "id": 1761,
              "year": 1993
            },
            {
              "id": 1762,
              "year": 1994
            }
          ]
        },
        {
          "id": "Mercury_Cougar",
          "name": "Cougar",
          "niceName": "cougar",
          "years": [
            {
              "id": 1764,
              "year": 1990
            },
            {
              "id": 1765,
              "year": 1991
            },
            {
              "id": 1766,
              "year": 1992
            },
            {
              "id": 1767,
              "year": 1993
            },
            {
              "id": 1768,
              "year": 1994
            },
            {
              "id": 597,
              "year": 1995
            },
            {
              "id": 1769,
              "year": 1996
            },
            {
              "id": 3588,
              "year": 1997
            },
            {
              "id": 3587,
              "year": 1999
            },
            {
              "id": 1165,
              "year": 2000
            },
            {
              "id": 100000185,
              "year": 2001
            },
            {
              "id": 100000353,
              "year": 2002
            }
          ]
        },
        {
          "id": "Mercury_Grand_Marquis",
          "name": "Grand Marquis",
          "niceName": "grand-marquis",
          "years": [
            {
              "id": 1771,
              "year": 1990
            },
            {
              "id": 598,
              "year": 1991
            },
            {
              "id": 1772,
              "year": 1992
            },
            {
              "id": 1773,
              "year": 1993
            },
            {
              "id": 599,
              "year": 1994
            },
            {
              "id": 1774,
              "year": 1995
            },
            {
              "id": 1775,
              "year": 1996
            },
            {
              "id": 1777,
              "year": 1998
            },
            {
              "id": 3589,
              "year": 1999
            },
            {
              "id": 372,
              "year": 2000
            },
            {
              "id": 100000189,
              "year": 2001
            },
            {
              "id": 3849,
              "year": 2002
            },
            {
              "id": 100502613,
              "year": 2003
            },
            {
              "id": 100503506,
              "year": 2004
            },
            {
              "id": 100505122,
              "year": 2005
            },
            {
              "id": 100506430,
              "year": 2006
            },
            {
              "id": 100516840,
              "year": 2007
            },
            {
              "id": 100522969,
              "year": 2008
            },
            {
              "id": 100525711,
              "year": 2009
            },
            {
              "id": 100530470,
              "year": 2010
            },
            {
              "id": 100531950,
              "year": 2011
            }
          ]
        },
        {
          "id": "Mercury_Marauder",
          "name": "Marauder",
          "niceName": "marauder",
          "years": [
            {
              "id": 100502617,
              "year": 2003
            },
            {
              "id": 100503507,
              "year": 2004
            }
          ]
        },
        {
          "id": "Mercury_Mariner",
          "name": "Mariner",
          "niceName": "mariner",
          "years": [
            {
              "id": 100503271,
              "year": 2005
            },
            {
              "id": 100505771,
              "year": 2006
            },
            {
              "id": 100512882,
              "year": 2007
            },
            {
              "id": 100522310,
              "year": 2008
            },
            {
              "id": 100525229,
              "year": 2009
            },
            {
              "id": 100528431,
              "year": 2010
            },
            {
              "id": 100532109,
              "year": 2011
            }
          ]
        },
        {
          "id": "Mercury_Mariner_Hybrid",
          "name": "Mariner Hybrid",
          "niceName": "mariner-hybrid",
          "years": [
            {
              "id": 100506110,
              "year": 2006
            },
            {
              "id": 100512883,
              "year": 2007
            },
            {
              "id": 100522486,
              "year": 2008
            },
            {
              "id": 100525530,
              "year": 2009
            },
            {
              "id": 100528432,
              "year": 2010
            },
            {
              "id": 100532129,
              "year": 2011
            }
          ]
        },
        {
          "id": "Mercury_Milan",
          "name": "Milan",
          "niceName": "milan",
          "years": [
            {
              "id": 100505065,
              "year": 2006
            },
            {
              "id": 100516994,
              "year": 2007
            },
            {
              "id": 100523751,
              "year": 2008
            },
            {
              "id": 100525294,
              "year": 2009
            },
            {
              "id": 100526495,
              "year": 2010
            },
            {
              "id": 100532191,
              "year": 2011
            }
          ]
        },
        {
          "id": "Mercury_Milan_Hybrid",
          "name": "Milan Hybrid",
          "niceName": "milan-hybrid",
          "years": [
            {
              "id": 100526496,
              "year": 2010
            },
            {
              "id": 100532192,
              "year": 2011
            }
          ]
        },
        {
          "id": "Mercury_Montego",
          "name": "Montego",
          "niceName": "montego",
          "years": [
            {
              "id": 100503156,
              "year": 2005
            },
            {
              "id": 100506311,
              "year": 2006
            },
            {
              "id": 100512941,
              "year": 2007
            }
          ]
        },
        {
          "id": "Mercury_Monterey",
          "name": "Monterey",
          "niceName": "monterey",
          "years": [
            {
              "id": 100502980,
              "year": 2004
            },
            {
              "id": 100505123,
              "year": 2005
            },
            {
              "id": 100505830,
              "year": 2006
            },
            {
              "id": 100512779,
              "year": 2007
            }
          ]
        },
        {
          "id": "Mercury_Mountaineer",
          "name": "Mountaineer",
          "niceName": "mountaineer",
          "years": [
            {
              "id": 1779,
              "year": 1998
            },
            {
              "id": 3590,
              "year": 1999
            },
            {
              "id": 1166,
              "year": 2000
            },
            {
              "id": 100000190,
              "year": 2001
            },
            {
              "id": 100000186,
              "year": 2002
            },
            {
              "id": 100502861,
              "year": 2003
            },
            {
              "id": 100503508,
              "year": 2004
            },
            {
              "id": 100505124,
              "year": 2005
            },
            {
              "id": 100505685,
              "year": 2006
            },
            {
              "id": 100505706,
              "year": 2007
            },
            {
              "id": 100523450,
              "year": 2008
            },
            {
              "id": 100525876,
              "year": 2009
            },
            {
              "id": 100527811,
              "year": 2010
            }
          ]
        },
        {
          "id": "Mercury_Mystique",
          "name": "Mystique",
          "niceName": "mystique",
          "years": [
            {
              "id": 1780,
              "year": 1995
            },
            {
              "id": 600,
              "year": 1996
            },
            {
              "id": 1781,
              "year": 1997
            },
            {
              "id": 1782,
              "year": 1998
            },
            {
              "id": 3592,
              "year": 1999
            },
            {
              "id": 1117,
              "year": 2000
            }
          ]
        },
        {
          "id": "Mercury_Sable",
          "name": "Sable",
          "niceName": "sable",
          "years": [
            {
              "id": 1783,
              "year": 1990
            },
            {
              "id": 1784,
              "year": 1991
            },
            {
              "id": 602,
              "year": 1992
            },
            {
              "id": 1785,
              "year": 1993
            },
            {
              "id": 1786,
              "year": 1994
            },
            {
              "id": 1787,
              "year": 1995
            },
            {
              "id": 603,
              "year": 1996
            },
            {
              "id": 1788,
              "year": 1997
            },
            {
              "id": 1789,
              "year": 1998
            },
            {
              "id": 3593,
              "year": 1999
            },
            {
              "id": 1121,
              "year": 2000
            },
            {
              "id": 100000188,
              "year": 2001
            },
            {
              "id": 100000354,
              "year": 2002
            },
            {
              "id": 100502709,
              "year": 2003
            },
            {
              "id": 100503509,
              "year": 2004
            },
            {
              "id": 100504302,
              "year": 2005
            },
            {
              "id": 100512744,
              "year": 2008
            },
            {
              "id": 100525838,
              "year": 2009
            }
          ]
        },
        {
          "id": "Mercury_Topaz",
          "name": "Topaz",
          "niceName": "topaz",
          "years": [
            {
              "id": 1790,
              "year": 1990
            },
            {
              "id": 1791,
              "year": 1991
            },
            {
              "id": 605,
              "year": 1992
            },
            {
              "id": 1792,
              "year": 1993
            },
            {
              "id": 1793,
              "year": 1994
            }
          ]
        },
        {
          "id": "Mercury_Tracer",
          "name": "Tracer",
          "niceName": "tracer",
          "years": [
            {
              "id": 1795,
              "year": 1991
            },
            {
              "id": 1796,
              "year": 1992
            },
            {
              "id": 1797,
              "year": 1993
            },
            {
              "id": 606,
              "year": 1994
            },
            {
              "id": 1798,
              "year": 1995
            },
            {
              "id": 1799,
              "year": 1996
            },
            {
              "id": 607,
              "year": 1997
            },
            {
              "id": 1800,
              "year": 1998
            },
            {
              "id": 3594,
              "year": 1999
            }
          ]
        },
        {
          "id": "Mercury_Villager",
          "name": "Villager",
          "niceName": "villager",
          "years": [
            {
              "id": 1801,
              "year": 1993
            },
            {
              "id": 1802,
              "year": 1994
            },
            {
              "id": 608,
              "year": 1995
            },
            {
              "id": 1803,
              "year": 1996
            },
            {
              "id": 1804,
              "year": 1997
            },
            {
              "id": 609,
              "year": 1998
            },
            {
              "id": 3595,
              "year": 1999
            },
            {
              "id": 1167,
              "year": 2000
            },
            {
              "id": 100000187,
              "year": 2001
            },
            {
              "id": 100000357,
              "year": 2002
            }
          ]
        }
      ]
    },
    {
      "id": 200002915,
      "name": "Mitsubishi",
      "niceName": "mitsubishi",
      "models": [
        {
          "id": "Mitsubishi_3000GT",
          "name": "3000GT",
          "niceName": "3000gt",
          "years": [
            {
              "id": 1805,
              "year": 1991
            },
            {
              "id": 1806,
              "year": 1992
            },
            {
              "id": 610,
              "year": 1993
            },
            {
              "id": 1807,
              "year": 1994
            },
            {
              "id": 1808,
              "year": 1995
            },
            {
              "id": 1809,
              "year": 1996
            },
            {
              "id": 3596,
              "year": 1999
            }
          ]
        },
        {
          "id": "Mitsubishi_Diamante",
          "name": "Diamante",
          "niceName": "diamante",
          "years": [
            {
              "id": 611,
              "year": 1992
            },
            {
              "id": 1812,
              "year": 1993
            },
            {
              "id": 1813,
              "year": 1994
            },
            {
              "id": 1675,
              "year": 1995
            },
            {
              "id": 612,
              "year": 1996
            },
            {
              "id": 1676,
              "year": 1997
            },
            {
              "id": 1677,
              "year": 1998
            },
            {
              "id": 3597,
              "year": 1999
            },
            {
              "id": 401,
              "year": 2000
            },
            {
              "id": 100000195,
              "year": 2001
            },
            {
              "id": 100000410,
              "year": 2002
            },
            {
              "id": 100502863,
              "year": 2003
            },
            {
              "id": 100503264,
              "year": 2004
            }
          ]
        },
        {
          "id": "Mitsubishi_Eclipse",
          "name": "Eclipse",
          "niceName": "eclipse",
          "years": [
            {
              "id": 1678,
              "year": 1990
            },
            {
              "id": 613,
              "year": 1991
            },
            {
              "id": 1679,
              "year": 1992
            },
            {
              "id": 1680,
              "year": 1993
            },
            {
              "id": 614,
              "year": 1994
            },
            {
              "id": 1681,
              "year": 1995
            },
            {
              "id": 1683,
              "year": 1997
            },
            {
              "id": 615,
              "year": 1998
            },
            {
              "id": 3598,
              "year": 1999
            },
            {
              "id": 1146,
              "year": 2000
            },
            {
              "id": 100000191,
              "year": 2001
            },
            {
              "id": 100000411,
              "year": 2002
            },
            {
              "id": 100502618,
              "year": 2003
            },
            {
              "id": 100503672,
              "year": 2004
            },
            {
              "id": 100503671,
              "year": 2005
            },
            {
              "id": 100504629,
              "year": 2006
            },
            {
              "id": 100507759,
              "year": 2007
            },
            {
              "id": 100522951,
              "year": 2008
            },
            {
              "id": 100525029,
              "year": 2009
            },
            {
              "id": 100528369,
              "year": 2010
            },
            {
              "id": 100531169,
              "year": 2011
            },
            {
              "id": 100534390,
              "year": 2012
            }
          ]
        },
        {
          "id": "Mitsubishi_Eclipse_Spyder",
          "name": "Eclipse Spyder",
          "niceName": "eclipse-spyder",
          "years": [
            {
              "id": 100503376,
              "year": 1996
            },
            {
              "id": 3599,
              "year": 1997
            },
            {
              "id": 992,
              "year": 1998
            },
            {
              "id": 3600,
              "year": 1999
            },
            {
              "id": 100000196,
              "year": 2001
            },
            {
              "id": 100000412,
              "year": 2002
            },
            {
              "id": 100502619,
              "year": 2003
            },
            {
              "id": 100503673,
              "year": 2004
            },
            {
              "id": 100505125,
              "year": 2005
            },
            {
              "id": 100506287,
              "year": 2007
            },
            {
              "id": 100523269,
              "year": 2008
            },
            {
              "id": 100525030,
              "year": 2009
            },
            {
              "id": 100528370,
              "year": 2010
            },
            {
              "id": 100531170,
              "year": 2011
            },
            {
              "id": 100534391,
              "year": 2012
            }
          ]
        },
        {
          "id": "Mitsubishi_Endeavor",
          "name": "Endeavor",
          "niceName": "endeavor",
          "years": [
            {
              "id": 100502931,
              "year": 2004
            },
            {
              "id": 100505126,
              "year": 2005
            },
            {
              "id": 100505286,
              "year": 2006
            },
            {
              "id": 100519581,
              "year": 2007
            },
            {
              "id": 100524149,
              "year": 2008
            },
            {
              "id": 100528409,
              "year": 2010
            },
            {
              "id": 100532829,
              "year": 2011
            }
          ]
        },
        {
          "id": "Mitsubishi_Expo",
          "name": "Expo",
          "niceName": "expo",
          "years": [
            {
              "id": 1684,
              "year": 1992
            }
          ]
        },
        {
          "id": "Mitsubishi_Galant",
          "name": "Galant",
          "niceName": "galant",
          "years": [
            {
              "id": 1689,
              "year": 1990
            },
            {
              "id": 616,
              "year": 1991
            },
            {
              "id": 1690,
              "year": 1992
            },
            {
              "id": 1691,
              "year": 1993
            },
            {
              "id": 617,
              "year": 1994
            },
            {
              "id": 1692,
              "year": 1995
            },
            {
              "id": 1693,
              "year": 1996
            },
            {
              "id": 1694,
              "year": 1997
            },
            {
              "id": 618,
              "year": 1998
            },
            {
              "id": 3601,
              "year": 1999
            },
            {
              "id": 1141,
              "year": 2000
            },
            {
              "id": 100000197,
              "year": 2001
            },
            {
              "id": 100000413,
              "year": 2002
            },
            {
              "id": 100502864,
              "year": 2003
            },
            {
              "id": 100502963,
              "year": 2004
            },
            {
              "id": 100505127,
              "year": 2005
            },
            {
              "id": 100505287,
              "year": 2006
            },
            {
              "id": 100519144,
              "year": 2007
            },
            {
              "id": 100523981,
              "year": 2008
            },
            {
              "id": 100524639,
              "year": 2009
            },
            {
              "id": 100529193,
              "year": 2010
            },
            {
              "id": 100532698,
              "year": 2011
            },
            {
              "id": 100536549,
              "year": 2012
            }
          ]
        },
        {
          "id": "Mitsubishi_Lancer",
          "name": "Lancer",
          "niceName": "lancer",
          "years": [
            {
              "id": 100000420,
              "year": 2002
            },
            {
              "id": 100502865,
              "year": 2003
            },
            {
              "id": 100503114,
              "year": 2004
            },
            {
              "id": 100505128,
              "year": 2005
            },
            {
              "id": 100506623,
              "year": 2006
            },
            {
              "id": 100522767,
              "year": 2008
            },
            {
              "id": 100524389,
              "year": 2009
            },
            {
              "id": 100528829,
              "year": 2010
            },
            {
              "id": 100533090,
              "year": 2011
            },
            {
              "id": 100539069,
              "year": 2012
            },
            {
              "id": 200427402,
              "year": 2013
            },
            {
              "id": 200471803,
              "year": 2014
            },
            {
              "id": 200705845,
              "year": 2015
            },
            {
              "id": 401582332,
              "year": 2016
            },
            {
              "id": 401658210,
              "year": 2017
            }
          ]
        },
        {
          "id": "Mitsubishi_Lancer_Evolution",
          "name": "Lancer Evolution",
          "niceName": "lancer-evolution",
          "years": [
            {
              "id": 100503171,
              "year": 2003
            },
            {
              "id": 100503674,
              "year": 2004
            },
            {
              "id": 100505202,
              "year": 2005
            },
            {
              "id": 100505767,
              "year": 2006
            },
            {
              "id": 100506232,
              "year": 2008
            },
            {
              "id": 100528770,
              "year": 2010
            },
            {
              "id": 100533469,
              "year": 2011
            },
            {
              "id": 100539070,
              "year": 2012
            },
            {
              "id": 200427468,
              "year": 2013
            },
            {
              "id": 200471801,
              "year": 2014
            },
            {
              "id": 200713655,
              "year": 2015
            }
          ]
        },
        {
          "id": "Mitsubishi_Lancer_Sportback",
          "name": "Lancer Sportback",
          "niceName": "lancer-sportback",
          "years": [
            {
              "id": 100503745,
              "year": 2004
            },
            {
              "id": 100524990,
              "year": 2010
            },
            {
              "id": 100533172,
              "year": 2011
            },
            {
              "id": 100539153,
              "year": 2012
            },
            {
              "id": 200427502,
              "year": 2013
            },
            {
              "id": 200471802,
              "year": 2014
            }
          ]
        },
        {
          "id": "Mitsubishi_Mighty_Max_Pickup",
          "name": "Mighty Max Pickup",
          "niceName": "mighty-max-pickup",
          "years": [
            {
              "id": 619,
              "year": 1990
            },
            {
              "id": 1696,
              "year": 1991
            },
            {
              "id": 1697,
              "year": 1992
            },
            {
              "id": 1698,
              "year": 1993
            },
            {
              "id": 620,
              "year": 1994
            },
            {
              "id": 1699,
              "year": 1995
            },
            {
              "id": 1700,
              "year": 1996
            }
          ]
        },
        {
          "id": "Mitsubishi_Mirage",
          "name": "Mirage",
          "niceName": "mirage",
          "years": [
            {
              "id": 1703,
              "year": 1991
            },
            {
              "id": 1704,
              "year": 1992
            },
            {
              "id": 1705,
              "year": 1993
            },
            {
              "id": 621,
              "year": 1994
            },
            {
              "id": 1706,
              "year": 1995
            },
            {
              "id": 1707,
              "year": 1996
            },
            {
              "id": 1708,
              "year": 1997
            },
            {
              "id": 622,
              "year": 1998
            },
            {
              "id": 3602,
              "year": 1999
            },
            {
              "id": 1095,
              "year": 2000
            },
            {
              "id": 100000194,
              "year": 2001
            },
            {
              "id": 100000422,
              "year": 2002
            },
            {
              "id": 200466865,
              "year": 2014
            },
            {
              "id": 200699487,
              "year": 2015
            },
            {
              "id": 401638164,
              "year": 2017
            }
          ]
        },
        {
          "id": "Mitsubishi_Mirage_G4",
          "name": "Mirage G4",
          "niceName": "mirage-g4",
          "years": [
            {
              "id": 401637700,
              "year": 2017
            }
          ]
        },
        {
          "id": "Mitsubishi_Montero",
          "name": "Montero",
          "niceName": "montero",
          "years": [
            {
              "id": 1710,
              "year": 1990
            },
            {
              "id": 623,
              "year": 1991
            },
            {
              "id": 1711,
              "year": 1992
            },
            {
              "id": 1712,
              "year": 1993
            },
            {
              "id": 624,
              "year": 1994
            },
            {
              "id": 1713,
              "year": 1995
            },
            {
              "id": 1714,
              "year": 1996
            },
            {
              "id": 1715,
              "year": 1997
            },
            {
              "id": 993,
              "year": 1999
            },
            {
              "id": 1096,
              "year": 2000
            },
            {
              "id": 100000192,
              "year": 2001
            },
            {
              "id": 100000414,
              "year": 2002
            },
            {
              "id": 100502867,
              "year": 2003
            },
            {
              "id": 100503825,
              "year": 2004
            },
            {
              "id": 100505203,
              "year": 2005
            },
            {
              "id": 100506882,
              "year": 2006
            }
          ]
        },
        {
          "id": "Mitsubishi_Montero_Sport",
          "name": "Montero Sport",
          "niceName": "montero-sport",
          "years": [
            {
              "id": 1717,
              "year": 1997
            },
            {
              "id": 1718,
              "year": 1998
            },
            {
              "id": 3603,
              "year": 1999
            },
            {
              "id": 1028,
              "year": 2000
            },
            {
              "id": 100000193,
              "year": 2001
            },
            {
              "id": 100000415,
              "year": 2002
            },
            {
              "id": 100502868,
              "year": 2003
            },
            {
              "id": 100503826,
              "year": 2004
            }
          ]
        },
        {
          "id": "Mitsubishi_Outlander",
          "name": "Outlander",
          "niceName": "outlander",
          "years": [
            {
              "id": 100502667,
              "year": 2003
            },
            {
              "id": 100503675,
              "year": 2004
            },
            {
              "id": 100505129,
              "year": 2005
            },
            {
              "id": 100506624,
              "year": 2006
            },
            {
              "id": 100505245,
              "year": 2007
            },
            {
              "id": 100524489,
              "year": 2008
            },
            {
              "id": 100526152,
              "year": 2009
            },
            {
              "id": 100530290,
              "year": 2010
            },
            {
              "id": 100533453,
              "year": 2011
            },
            {
              "id": 100536531,
              "year": 2012
            },
            {
              "id": 100539290,
              "year": 2013
            },
            {
              "id": 200427661,
              "year": 2014
            },
            {
              "id": 200701309,
              "year": 2015
            },
            {
              "id": 200734282,
              "year": 2016
            },
            {
              "id": 401666428,
              "year": 2017
            }
          ]
        },
        {
          "id": "Mitsubishi_Outlander_Sport",
          "name": "Outlander Sport",
          "niceName": "outlander-sport",
          "years": [
            {
              "id": 100530275,
              "year": 2011
            },
            {
              "id": 100538829,
              "year": 2012
            },
            {
              "id": 200427609,
              "year": 2013
            },
            {
              "id": 200481103,
              "year": 2014
            },
            {
              "id": 200704226,
              "year": 2015
            },
            {
              "id": 401612355,
              "year": 2016
            },
            {
              "id": 401677107,
              "year": 2017
            }
          ]
        },
        {
          "id": "Mitsubishi_Precis",
          "name": "Precis",
          "niceName": "precis",
          "years": [
            {
              "id": 626,
              "year": 1990
            },
            {
              "id": 1723,
              "year": 1991
            },
            {
              "id": 1724,
              "year": 1992
            },
            {
              "id": 627,
              "year": 1993
            },
            {
              "id": 1725,
              "year": 1994
            }
          ]
        },
        {
          "id": "Mitsubishi_Raider",
          "name": "Raider",
          "niceName": "raider",
          "years": [
            {
              "id": 100505175,
              "year": 2006
            },
            {
              "id": 100520230,
              "year": 2007
            },
            {
              "id": 100524909,
              "year": 2008
            },
            {
              "id": 100526369,
              "year": 2009
            }
          ]
        },
        {
          "id": "Mitsubishi_Sigma",
          "name": "Sigma",
          "niceName": "sigma",
          "years": [
            {
              "id": 1727,
              "year": 1990
            }
          ]
        },
        {
          "id": "Mitsubishi_Vanwagon",
          "name": "Vanwagon",
          "niceName": "vanwagon",
          "years": [
            {
              "id": 1729,
              "year": 1990
            }
          ]
        },
        {
          "id": "Mitsubishi_i_MiEV",
          "name": "i-MiEV",
          "niceName": "i-miev",
          "years": [
            {
              "id": 100527990,
              "year": 2012
            },
            {
              "id": 200498271,
              "year": 2014
            },
            {
              "id": 200726943,
              "year": 2016
            },
            {
              "id": 401643578,
              "year": 2017
            }
          ]
        }
      ]
    },
    {
      "id": 200000201,
      "name": "Nissan",
      "niceName": "nissan",
      "models": [
        {
          "id": "Nissan_200SX",
          "name": "200SX",
          "niceName": "200sx",
          "years": [
            {
              "id": 629,
              "year": 1995
            },
            {
              "id": 1730,
              "year": 1996
            },
            {
              "id": 1731,
              "year": 1997
            },
            {
              "id": 1732,
              "year": 1998
            }
          ]
        },
        {
          "id": "Nissan_240SX",
          "name": "240SX",
          "niceName": "240sx",
          "years": [
            {
              "id": 1734,
              "year": 1990
            },
            {
              "id": 1735,
              "year": 1991
            },
            {
              "id": 1736,
              "year": 1992
            },
            {
              "id": 1737,
              "year": 1993
            },
            {
              "id": 630,
              "year": 1994
            },
            {
              "id": 1738,
              "year": 1995
            },
            {
              "id": 1739,
              "year": 1996
            },
            {
              "id": 631,
              "year": 1997
            },
            {
              "id": 1740,
              "year": 1998
            }
          ]
        },
        {
          "id": "Nissan_300ZX",
          "name": "300ZX",
          "niceName": "300zx",
          "years": [
            {
              "id": 632,
              "year": 1990
            },
            {
              "id": 1742,
              "year": 1991
            },
            {
              "id": 1743,
              "year": 1992
            },
            {
              "id": 1604,
              "year": 1993
            },
            {
              "id": 633,
              "year": 1994
            },
            {
              "id": 1606,
              "year": 1996
            }
          ]
        },
        {
          "id": "Nissan_350Z",
          "name": "350Z",
          "niceName": "350z",
          "years": [
            {
              "id": 100502586,
              "year": 2003
            },
            {
              "id": 100503159,
              "year": 2004
            },
            {
              "id": 100505083,
              "year": 2005
            },
            {
              "id": 100506845,
              "year": 2006
            },
            {
              "id": 100522386,
              "year": 2007
            },
            {
              "id": 100523596,
              "year": 2008
            },
            {
              "id": 100526319,
              "year": 2009
            }
          ]
        },
        {
          "id": "Nissan_370Z",
          "name": "370Z",
          "niceName": "370z",
          "years": [
            {
              "id": 100523691,
              "year": 2009
            },
            {
              "id": 100526509,
              "year": 2010
            },
            {
              "id": 100533650,
              "year": 2011
            },
            {
              "id": 100538209,
              "year": 2012
            },
            {
              "id": 100539252,
              "year": 2013
            },
            {
              "id": 200483759,
              "year": 2014
            },
            {
              "id": 200707556,
              "year": 2015
            },
            {
              "id": 200732068,
              "year": 2016
            },
            {
              "id": 401647595,
              "year": 2017
            }
          ]
        },
        {
          "id": "Nissan_Altima",
          "name": "Altima",
          "niceName": "altima",
          "years": [
            {
              "id": 634,
              "year": 1993
            },
            {
              "id": 1607,
              "year": 1994
            },
            {
              "id": 1608,
              "year": 1995
            },
            {
              "id": 635,
              "year": 1996
            },
            {
              "id": 1611,
              "year": 1998
            },
            {
              "id": 3604,
              "year": 1999
            },
            {
              "id": 373,
              "year": 2000
            },
            {
              "id": 100000204,
              "year": 2001
            },
            {
              "id": 100000377,
              "year": 2002
            },
            {
              "id": 100502869,
              "year": 2003
            },
            {
              "id": 100503644,
              "year": 2004
            },
            {
              "id": 100504121,
              "year": 2005
            },
            {
              "id": 100506625,
              "year": 2006
            },
            {
              "id": 100505176,
              "year": 2007
            },
            {
              "id": 100520386,
              "year": 2008
            },
            {
              "id": 100525415,
              "year": 2009
            },
            {
              "id": 100530009,
              "year": 2010
            },
            {
              "id": 100533389,
              "year": 2011
            },
            {
              "id": 100535389,
              "year": 2012
            },
            {
              "id": 100537289,
              "year": 2013
            },
            {
              "id": 200485036,
              "year": 2014
            },
            {
              "id": 200698431,
              "year": 2015
            },
            {
              "id": 200737431,
              "year": 2016
            },
            {
              "id": 401670609,
              "year": 2017
            }
          ]
        },
        {
          "id": "Nissan_Altima_Hybrid",
          "name": "Altima Hybrid",
          "niceName": "altima-hybrid",
          "years": [
            {
              "id": 100522526,
              "year": 2007
            },
            {
              "id": 100524173,
              "year": 2008
            },
            {
              "id": 100525849,
              "year": 2009
            },
            {
              "id": 100529909,
              "year": 2010
            },
            {
              "id": 100533390,
              "year": 2011
            }
          ]
        },
        {
          "id": "Nissan_Armada",
          "name": "Armada",
          "niceName": "armada",
          "years": [
            {
              "id": 100503152,
              "year": 2004
            },
            {
              "id": 100505204,
              "year": 2005
            },
            {
              "id": 100506626,
              "year": 2006
            },
            {
              "id": 100519483,
              "year": 2007
            },
            {
              "id": 100522669,
              "year": 2008
            },
            {
              "id": 100525129,
              "year": 2009
            },
            {
              "id": 100527929,
              "year": 2010
            },
            {
              "id": 100533370,
              "year": 2011
            },
            {
              "id": 100537489,
              "year": 2012
            },
            {
              "id": 200441614,
              "year": 2013
            },
            {
              "id": 200491198,
              "year": 2014
            },
            {
              "id": 200718685,
              "year": 2015
            },
            {
              "id": 401629994,
              "year": 2017
            }
          ]
        },
        {
          "id": "Nissan_Axxess",
          "name": "Axxess",
          "niceName": "axxess",
          "years": [
            {
              "id": 1612,
              "year": 1990
            }
          ]
        },
        {
          "id": "Nissan_Cube",
          "name": "Cube",
          "niceName": "cube",
          "years": [
            {
              "id": 100527410,
              "year": 2009
            },
            {
              "id": 100505389,
              "year": 2010
            },
            {
              "id": 100534009,
              "year": 2011
            },
            {
              "id": 100539151,
              "year": 2012
            },
            {
              "id": 200443260,
              "year": 2013
            },
            {
              "id": 200496919,
              "year": 2014
            }
          ]
        },
        {
          "id": "Nissan_Frontier",
          "name": "Frontier",
          "niceName": "frontier",
          "years": [
            {
              "id": 1613,
              "year": 1998
            },
            {
              "id": 994,
              "year": 1999
            },
            {
              "id": 1238,
              "year": 2000
            },
            {
              "id": 100000202,
              "year": 2001
            },
            {
              "id": 100000382,
              "year": 2002
            },
            {
              "id": 100502870,
              "year": 2003
            },
            {
              "id": 100503729,
              "year": 2004
            },
            {
              "id": 100503552,
              "year": 2005
            },
            {
              "id": 100506846,
              "year": 2006
            },
            {
              "id": 100519567,
              "year": 2007
            },
            {
              "id": 100523593,
              "year": 2008
            },
            {
              "id": 100525534,
              "year": 2009
            },
            {
              "id": 100529189,
              "year": 2010
            },
            {
              "id": 100533454,
              "year": 2011
            },
            {
              "id": 100537909,
              "year": 2012
            },
            {
              "id": 200464993,
              "year": 2013
            },
            {
              "id": 200493964,
              "year": 2014
            },
            {
              "id": 200709679,
              "year": 2015
            },
            {
              "id": 401581494,
              "year": 2016
            }
          ]
        },
        {
          "id": "Nissan_GT_R",
          "name": "GT-R",
          "niceName": "gt-r",
          "years": [
            {
              "id": 100505184,
              "year": 2009
            },
            {
              "id": 100525589,
              "year": 2010
            },
            {
              "id": 100531429,
              "year": 2011
            },
            {
              "id": 100532432,
              "year": 2012
            },
            {
              "id": 100538609,
              "year": 2013
            },
            {
              "id": 200460656,
              "year": 2014
            },
            {
              "id": 200676441,
              "year": 2015
            },
            {
              "id": 200729794,
              "year": 2016
            },
            {
              "id": 401648671,
              "year": 2017
            }
          ]
        },
        {
          "id": "Nissan_Juke",
          "name": "Juke",
          "niceName": "juke",
          "years": [
            {
              "id": 100531030,
              "year": 2011
            },
            {
              "id": 100538409,
              "year": 2012
            },
            {
              "id": 200435481,
              "year": 2013
            },
            {
              "id": 200493429,
              "year": 2014
            },
            {
              "id": 200722106,
              "year": 2015
            },
            {
              "id": 401612909,
              "year": 2016
            }
          ]
        },
        {
          "id": "Nissan_Leaf",
          "name": "Leaf",
          "niceName": "leaf",
          "years": [
            {
              "id": 100528850,
              "year": 2011
            },
            {
              "id": 100536150,
              "year": 2012
            },
            {
              "id": 200446071,
              "year": 2013
            },
            {
              "id": 200674101,
              "year": 2014
            },
            {
              "id": 200700590,
              "year": 2015
            },
            {
              "id": 401610729,
              "year": 2016
            }
          ]
        },
        {
          "id": "Nissan_Maxima",
          "name": "Maxima",
          "niceName": "maxima",
          "years": [
            {
              "id": 1630,
              "year": 1990
            },
            {
              "id": 1631,
              "year": 1991
            },
            {
              "id": 1632,
              "year": 1992
            },
            {
              "id": 1633,
              "year": 1993
            },
            {
              "id": 1634,
              "year": 1994
            },
            {
              "id": 638,
              "year": 1995
            },
            {
              "id": 1635,
              "year": 1996
            },
            {
              "id": 1636,
              "year": 1997
            },
            {
              "id": 1637,
              "year": 1998
            },
            {
              "id": 3605,
              "year": 1999
            },
            {
              "id": 1239,
              "year": 2000
            },
            {
              "id": 100000198,
              "year": 2001
            },
            {
              "id": 100000376,
              "year": 2002
            },
            {
              "id": 100502710,
              "year": 2003
            },
            {
              "id": 100502947,
              "year": 2004
            },
            {
              "id": 100505025,
              "year": 2005
            },
            {
              "id": 100506627,
              "year": 2006
            },
            {
              "id": 100507061,
              "year": 2007
            },
            {
              "id": 100523592,
              "year": 2008
            },
            {
              "id": 100523030,
              "year": 2009
            },
            {
              "id": 100528969,
              "year": 2010
            },
            {
              "id": 100533211,
              "year": 2011
            },
            {
              "id": 100537449,
              "year": 2012
            },
            {
              "id": 200436505,
              "year": 2013
            },
            {
              "id": 200487718,
              "year": 2014
            },
            {
              "id": 200719509,
              "year": 2016
            },
            {
              "id": 401646961,
              "year": 2017
            }
          ]
        },
        {
          "id": "Nissan_Murano",
          "name": "Murano",
          "niceName": "murano",
          "years": [
            {
              "id": 100502668,
              "year": 2003
            },
            {
              "id": 100503730,
              "year": 2004
            },
            {
              "id": 100505205,
              "year": 2005
            },
            {
              "id": 100506847,
              "year": 2006
            },
            {
              "id": 100520061,
              "year": 2007
            },
            {
              "id": 100523692,
              "year": 2009
            },
            {
              "id": 100530189,
              "year": 2010
            },
            {
              "id": 100528209,
              "year": 2011
            },
            {
              "id": 100532953,
              "year": 2012
            },
            {
              "id": 200440678,
              "year": 2013
            },
            {
              "id": 200491537,
              "year": 2014
            },
            {
              "id": 200678197,
              "year": 2015
            },
            {
              "id": 401613849,
              "year": 2016
            },
            {
              "id": 401677870,
              "year": 2017
            }
          ]
        },
        {
          "id": "Nissan_Murano_CrossCabriolet",
          "name": "Murano CrossCabriolet",
          "niceName": "murano-crosscabriolet",
          "years": [
            {
              "id": 100533791,
              "year": 2011
            },
            {
              "id": 100537970,
              "year": 2012
            },
            {
              "id": 200459033,
              "year": 2013
            }
          ]
        },
        {
          "id": "Nissan_NV",
          "name": "NV",
          "niceName": "nv",
          "years": [
            {
              "id": 100534389,
              "year": 2012
            },
            {
              "id": 200442103,
              "year": 2013
            }
          ]
        },
        {
          "id": "Nissan_NV_Cargo",
          "name": "NV Cargo",
          "niceName": "nv-cargo",
          "years": [
            {
              "id": 200690592,
              "year": 2014
            },
            {
              "id": 200724563,
              "year": 2015
            },
            {
              "id": 401583839,
              "year": 2016
            }
          ]
        },
        {
          "id": "Nissan_NV_Passenger",
          "name": "NV Passenger",
          "niceName": "nv-passenger",
          "years": [
            {
              "id": 100539351,
              "year": 2012
            },
            {
              "id": 200442671,
              "year": 2013
            },
            {
              "id": 200689938,
              "year": 2014
            },
            {
              "id": 200724376,
              "year": 2015
            },
            {
              "id": 401582661,
              "year": 2016
            }
          ]
        },
        {
          "id": "Nissan_NV200",
          "name": "NV200",
          "niceName": "nv200",
          "years": [
            {
              "id": 200461958,
              "year": 2013
            },
            {
              "id": 200677525,
              "year": 2014
            },
            {
              "id": 200715793,
              "year": 2015
            },
            {
              "id": 401627754,
              "year": 2016
            },
            {
              "id": 401671863,
              "year": 2017
            }
          ]
        },
        {
          "id": "Nissan_NX",
          "name": "NX",
          "niceName": "nx",
          "years": [
            {
              "id": 639,
              "year": 1991
            },
            {
              "id": 1638,
              "year": 1992
            },
            {
              "id": 1639,
              "year": 1993
            }
          ]
        },
        {
          "id": "Nissan_Pathfinder",
          "name": "Pathfinder",
          "niceName": "pathfinder",
          "years": [
            {
              "id": 1640,
              "year": 1990
            },
            {
              "id": 1641,
              "year": 1991
            },
            {
              "id": 641,
              "year": 1992
            },
            {
              "id": 1642,
              "year": 1993
            },
            {
              "id": 1643,
              "year": 1994
            },
            {
              "id": 1644,
              "year": 1995
            },
            {
              "id": 1645,
              "year": 1996
            },
            {
              "id": 1646,
              "year": 1997
            },
            {
              "id": 1647,
              "year": 1998
            },
            {
              "id": 3606,
              "year": 1999
            },
            {
              "id": 1040,
              "year": 2000
            },
            {
              "id": 100000200,
              "year": 2001
            },
            {
              "id": 100000378,
              "year": 2002
            },
            {
              "id": 100502871,
              "year": 2003
            },
            {
              "id": 100503765,
              "year": 2004
            },
            {
              "id": 100503525,
              "year": 2005
            },
            {
              "id": 100506848,
              "year": 2006
            },
            {
              "id": 100519482,
              "year": 2007
            },
            {
              "id": 100522670,
              "year": 2008
            },
            {
              "id": 100525839,
              "year": 2009
            },
            {
              "id": 100529389,
              "year": 2010
            },
            {
              "id": 100533412,
              "year": 2011
            },
            {
              "id": 100537629,
              "year": 2012
            },
            {
              "id": 100539157,
              "year": 2013
            },
            {
              "id": 200466060,
              "year": 2014
            },
            {
              "id": 200716822,
              "year": 2015
            },
            {
              "id": 401611671,
              "year": 2016
            },
            {
              "id": 401667885,
              "year": 2017
            }
          ]
        },
        {
          "id": "Nissan_Quest",
          "name": "Quest",
          "niceName": "quest",
          "years": [
            {
              "id": 1649,
              "year": 1993
            },
            {
              "id": 1650,
              "year": 1994
            },
            {
              "id": 643,
              "year": 1995
            },
            {
              "id": 1651,
              "year": 1996
            },
            {
              "id": 1652,
              "year": 1997
            },
            {
              "id": 644,
              "year": 1998
            },
            {
              "id": 995,
              "year": 1999
            },
            {
              "id": 1078,
              "year": 2000
            },
            {
              "id": 100000199,
              "year": 2001
            },
            {
              "id": 100000379,
              "year": 2002
            },
            {
              "id": 100502957,
              "year": 2004
            },
            {
              "id": 100505172,
              "year": 2005
            },
            {
              "id": 100506429,
              "year": 2006
            },
            {
              "id": 100507439,
              "year": 2007
            },
            {
              "id": 100523594,
              "year": 2008
            },
            {
              "id": 100525417,
              "year": 2009
            },
            {
              "id": 100531049,
              "year": 2011
            },
            {
              "id": 100538310,
              "year": 2012
            },
            {
              "id": 200437065,
              "year": 2013
            },
            {
              "id": 200489432,
              "year": 2014
            },
            {
              "id": 200720401,
              "year": 2015
            },
            {
              "id": 401610779,
              "year": 2016
            }
          ]
        },
        {
          "id": "Nissan_Rogue",
          "name": "Rogue",
          "niceName": "rogue",
          "years": [
            {
              "id": 100512800,
              "year": 2008
            },
            {
              "id": 100525416,
              "year": 2009
            },
            {
              "id": 100529651,
              "year": 2010
            },
            {
              "id": 100532969,
              "year": 2011
            },
            {
              "id": 100537829,
              "year": 2012
            },
            {
              "id": 200429083,
              "year": 2013
            },
            {
              "id": 200488582,
              "year": 2014
            },
            {
              "id": 200711150,
              "year": 2015
            },
            {
              "id": 401581354,
              "year": 2016
            }
          ]
        },
        {
          "id": "Nissan_Rogue_Select",
          "name": "Rogue Select",
          "niceName": "rogue-select",
          "years": [
            {
              "id": 200675407,
              "year": 2014
            },
            {
              "id": 200726752,
              "year": 2015
            }
          ]
        },
        {
          "id": "Nissan_Sentra",
          "name": "Sentra",
          "niceName": "sentra",
          "years": [
            {
              "id": 1654,
              "year": 1990
            },
            {
              "id": 645,
              "year": 1991
            },
            {
              "id": 1655,
              "year": 1992
            },
            {
              "id": 1656,
              "year": 1993
            },
            {
              "id": 646,
              "year": 1994
            },
            {
              "id": 1658,
              "year": 1995
            },
            {
              "id": 1659,
              "year": 1996
            },
            {
              "id": 647,
              "year": 1997
            },
            {
              "id": 1660,
              "year": 1998
            },
            {
              "id": 3607,
              "year": 1999
            },
            {
              "id": 441,
              "year": 2000
            },
            {
              "id": 100000201,
              "year": 2001
            },
            {
              "id": 100000380,
              "year": 2002
            },
            {
              "id": 100502873,
              "year": 2003
            },
            {
              "id": 100503274,
              "year": 2004
            },
            {
              "id": 100505024,
              "year": 2005
            },
            {
              "id": 100506628,
              "year": 2006
            },
            {
              "id": 100505836,
              "year": 2007
            },
            {
              "id": 100523591,
              "year": 2008
            },
            {
              "id": 100525413,
              "year": 2009
            },
            {
              "id": 100528989,
              "year": 2010
            },
            {
              "id": 100533292,
              "year": 2011
            },
            {
              "id": 100535689,
              "year": 2012
            },
            {
              "id": 200434604,
              "year": 2013
            },
            {
              "id": 200497014,
              "year": 2014
            },
            {
              "id": 200723420,
              "year": 2015
            },
            {
              "id": 401614164,
              "year": 2016
            },
            {
              "id": 401678482,
              "year": 2017
            }
          ]
        },
        {
          "id": "Nissan_Stanza",
          "name": "Stanza",
          "niceName": "stanza",
          "years": [
            {
              "id": 1663,
              "year": 1991
            },
            {
              "id": 1664,
              "year": 1992
            }
          ]
        },
        {
          "id": "Nissan_Titan",
          "name": "Titan",
          "niceName": "titan",
          "years": [
            {
              "id": 100503101,
              "year": 2004
            },
            {
              "id": 100505206,
              "year": 2005
            },
            {
              "id": 100506629,
              "year": 2006
            },
            {
              "id": 100519566,
              "year": 2007
            },
            {
              "id": 100520387,
              "year": 2008
            },
            {
              "id": 100523693,
              "year": 2009
            },
            {
              "id": 100530089,
              "year": 2010
            },
            {
              "id": 100526189,
              "year": 2011
            },
            {
              "id": 100537369,
              "year": 2012
            },
            {
              "id": 200440964,
              "year": 2013
            },
            {
              "id": 200492362,
              "year": 2014
            },
            {
              "id": 200724499,
              "year": 2015
            },
            {
              "id": 401638704,
              "year": 2017
            }
          ]
        },
        {
          "id": "Nissan_Titan_XD",
          "name": "Titan XD",
          "niceName": "titan-xd",
          "years": [
            {
              "id": 401666732,
              "year": 2017
            }
          ]
        },
        {
          "id": "Nissan_Truck",
          "name": "Truck",
          "niceName": "truck",
          "years": [
            {
              "id": 3256,
              "year": 1990
            },
            {
              "id": 1046,
              "year": 1991
            },
            {
              "id": 3257,
              "year": 1992
            },
            {
              "id": 887,
              "year": 1993
            },
            {
              "id": 3258,
              "year": 1994
            },
            {
              "id": 888,
              "year": 1995
            },
            {
              "id": 1047,
              "year": 1996
            },
            {
              "id": 1060,
              "year": 1997
            }
          ]
        },
        {
          "id": "Nissan_Van",
          "name": "Van",
          "niceName": "van",
          "years": [
            {
              "id": 1666,
              "year": 1990
            }
          ]
        },
        {
          "id": "Nissan_Versa",
          "name": "Versa",
          "niceName": "versa",
          "years": [
            {
              "id": 100506190,
              "year": 2007
            },
            {
              "id": 100523549,
              "year": 2008
            },
            {
              "id": 100525414,
              "year": 2009
            },
            {
              "id": 100529810,
              "year": 2010
            },
            {
              "id": 100532271,
              "year": 2011
            },
            {
              "id": 100534971,
              "year": 2012
            },
            {
              "id": 200439761,
              "year": 2013
            },
            {
              "id": 200470026,
              "year": 2014
            },
            {
              "id": 200693707,
              "year": 2015
            },
            {
              "id": 200744978,
              "year": 2016
            },
            {
              "id": 401667375,
              "year": 2017
            }
          ]
        },
        {
          "id": "Nissan_Versa_Note",
          "name": "Versa Note",
          "niceName": "versa-note",
          "years": [
            {
              "id": 200471258,
              "year": 2014
            },
            {
              "id": 200698494,
              "year": 2015
            },
            {
              "id": 200752583,
              "year": 2016
            }
          ]
        },
        {
          "id": "Nissan_Xterra",
          "name": "Xterra",
          "niceName": "xterra",
          "years": [
            {
              "id": 1242,
              "year": 2000
            },
            {
              "id": 100000203,
              "year": 2001
            },
            {
              "id": 100000381,
              "year": 2002
            },
            {
              "id": 100502874,
              "year": 2003
            },
            {
              "id": 100503731,
              "year": 2004
            },
            {
              "id": 100503990,
              "year": 2005
            },
            {
              "id": 100506849,
              "year": 2006
            },
            {
              "id": 100519481,
              "year": 2007
            },
            {
              "id": 100523595,
              "year": 2008
            },
            {
              "id": 100525533,
              "year": 2009
            },
            {
              "id": 100529429,
              "year": 2010
            },
            {
              "id": 100533351,
              "year": 2011
            },
            {
              "id": 100537551,
              "year": 2012
            },
            {
              "id": 200463927,
              "year": 2013
            },
            {
              "id": 200493591,
              "year": 2014
            },
            {
              "id": 200709613,
              "year": 2015
            }
          ]
        }
      ]
    },
    {
      "id": 200249342,
      "name": "Oldsmobile",
      "niceName": "oldsmobile",
      "models": [
        {
          "id": "Oldsmobile_Achieva",
          "name": "Achieva",
          "niceName": "achieva",
          "years": [
            {
              "id": 648,
              "year": 1992
            },
            {
              "id": 1667,
              "year": 1993
            },
            {
              "id": 1668,
              "year": 1994
            },
            {
              "id": 649,
              "year": 1995
            },
            {
              "id": 1669,
              "year": 1996
            },
            {
              "id": 1670,
              "year": 1997
            },
            {
              "id": 1671,
              "year": 1998
            }
          ]
        },
        {
          "id": "Oldsmobile_Alero",
          "name": "Alero",
          "niceName": "alero",
          "years": [
            {
              "id": 3608,
              "year": 1999
            },
            {
              "id": 438,
              "year": 2000
            },
            {
              "id": 100000211,
              "year": 2001
            },
            {
              "id": 3875,
              "year": 2002
            },
            {
              "id": 100502875,
              "year": 2003
            },
            {
              "id": 100503234,
              "year": 2004
            }
          ]
        },
        {
          "id": "Oldsmobile_Aurora",
          "name": "Aurora",
          "niceName": "aurora",
          "years": [
            {
              "id": 650,
              "year": 1995
            },
            {
              "id": 1672,
              "year": 1996
            },
            {
              "id": 1673,
              "year": 1997
            },
            {
              "id": 651,
              "year": 1998
            },
            {
              "id": 3609,
              "year": 1999
            },
            {
              "id": 100000206,
              "year": 2001
            },
            {
              "id": 3828,
              "year": 2002
            },
            {
              "id": 100502876,
              "year": 2003
            }
          ]
        },
        {
          "id": "Oldsmobile_Bravada",
          "name": "Bravada",
          "niceName": "bravada",
          "years": [
            {
              "id": 1674,
              "year": 1991
            },
            {
              "id": 1537,
              "year": 1992
            },
            {
              "id": 652,
              "year": 1993
            },
            {
              "id": 1538,
              "year": 1994
            },
            {
              "id": 1539,
              "year": 1996
            },
            {
              "id": 1540,
              "year": 1997
            },
            {
              "id": 3610,
              "year": 1999
            },
            {
              "id": 1123,
              "year": 2000
            },
            {
              "id": 100000207,
              "year": 2001
            },
            {
              "id": 100000209,
              "year": 2002
            },
            {
              "id": 100502877,
              "year": 2003
            },
            {
              "id": 100503235,
              "year": 2004
            }
          ]
        },
        {
          "id": "Oldsmobile_Ciera",
          "name": "Ciera",
          "niceName": "ciera",
          "years": [
            {
              "id": 1542,
              "year": 1995
            }
          ]
        },
        {
          "id": "Oldsmobile_Custom_Cruiser",
          "name": "Custom Cruiser",
          "niceName": "custom-cruiser",
          "years": [
            {
              "id": 1544,
              "year": 1990
            },
            {
              "id": 654,
              "year": 1991
            },
            {
              "id": 1545,
              "year": 1992
            }
          ]
        },
        {
          "id": "Oldsmobile_Cutlass",
          "name": "Cutlass",
          "niceName": "cutlass",
          "years": [
            {
              "id": 1546,
              "year": 1997
            },
            {
              "id": 3611,
              "year": 1999
            }
          ]
        },
        {
          "id": "Oldsmobile_Cutlass_Calais",
          "name": "Cutlass Calais",
          "niceName": "cutlass-calais",
          "years": [
            {
              "id": 1549,
              "year": 1991
            }
          ]
        },
        {
          "id": "Oldsmobile_Cutlass_Ciera",
          "name": "Cutlass Ciera",
          "niceName": "cutlass-ciera",
          "years": [
            {
              "id": 1550,
              "year": 1990
            },
            {
              "id": 1551,
              "year": 1991
            },
            {
              "id": 1552,
              "year": 1992
            },
            {
              "id": 657,
              "year": 1993
            },
            {
              "id": 1553,
              "year": 1994
            }
          ]
        },
        {
          "id": "Oldsmobile_Cutlass_Supreme",
          "name": "Cutlass Supreme",
          "niceName": "cutlass-supreme",
          "years": [
            {
              "id": 1555,
              "year": 1990
            },
            {
              "id": 1556,
              "year": 1991
            },
            {
              "id": 1557,
              "year": 1992
            },
            {
              "id": 1558,
              "year": 1993
            },
            {
              "id": 1559,
              "year": 1994
            },
            {
              "id": 1560,
              "year": 1995
            },
            {
              "id": 1561,
              "year": 1996
            },
            {
              "id": 1562,
              "year": 1997
            }
          ]
        },
        {
          "id": "Oldsmobile_Eighty_Eight",
          "name": "Eighty-Eight",
          "niceName": "eighty-eight",
          "years": [
            {
              "id": 658,
              "year": 1996
            },
            {
              "id": 3612,
              "year": 1997
            },
            {
              "id": 3613,
              "year": 1999
            }
          ]
        },
        {
          "id": "Oldsmobile_Eighty_Eight_Royale",
          "name": "Eighty-Eight Royale",
          "niceName": "eighty-eight-royale",
          "years": [
            {
              "id": 1565,
              "year": 1990
            },
            {
              "id": 659,
              "year": 1991
            },
            {
              "id": 1566,
              "year": 1992
            },
            {
              "id": 1567,
              "year": 1993
            },
            {
              "id": 1568,
              "year": 1994
            },
            {
              "id": 1569,
              "year": 1995
            }
          ]
        },
        {
          "id": "Oldsmobile_Intrigue",
          "name": "Intrigue",
          "niceName": "intrigue",
          "years": [
            {
              "id": 1570,
              "year": 1998
            },
            {
              "id": 3614,
              "year": 1999
            },
            {
              "id": 1134,
              "year": 2000
            },
            {
              "id": 100000205,
              "year": 2001
            },
            {
              "id": 3817,
              "year": 2002
            }
          ]
        },
        {
          "id": "Oldsmobile_LSS",
          "name": "LSS",
          "niceName": "lss",
          "years": [
            {
              "id": 1571,
              "year": 1997
            },
            {
              "id": 1572,
              "year": 1998
            },
            {
              "id": 3615,
              "year": 1999
            }
          ]
        },
        {
          "id": "Oldsmobile_Ninety_Eight",
          "name": "Ninety-Eight",
          "niceName": "ninety-eight",
          "years": [
            {
              "id": 660,
              "year": 1990
            },
            {
              "id": 1574,
              "year": 1991
            },
            {
              "id": 1575,
              "year": 1992
            },
            {
              "id": 1576,
              "year": 1993
            },
            {
              "id": 519,
              "year": 1994
            },
            {
              "id": 1577,
              "year": 1995
            },
            {
              "id": 1578,
              "year": 1996
            }
          ]
        },
        {
          "id": "Oldsmobile_Regency",
          "name": "Regency",
          "niceName": "regency",
          "years": [
            {
              "id": 520,
              "year": 1997
            }
          ]
        },
        {
          "id": "Oldsmobile_Silhouette",
          "name": "Silhouette",
          "niceName": "silhouette",
          "years": [
            {
              "id": 1580,
              "year": 1990
            },
            {
              "id": 521,
              "year": 1992
            },
            {
              "id": 1582,
              "year": 1993
            },
            {
              "id": 1583,
              "year": 1994
            },
            {
              "id": 1584,
              "year": 1995
            },
            {
              "id": 1585,
              "year": 1996
            },
            {
              "id": 1586,
              "year": 1997
            },
            {
              "id": 1587,
              "year": 1998
            },
            {
              "id": 3616,
              "year": 1999
            },
            {
              "id": 1027,
              "year": 2000
            },
            {
              "id": 100000208,
              "year": 2001
            },
            {
              "id": 3818,
              "year": 2002
            },
            {
              "id": 100502878,
              "year": 2003
            },
            {
              "id": 100503236,
              "year": 2004
            }
          ]
        },
        {
          "id": "Oldsmobile_Toronado",
          "name": "Toronado",
          "niceName": "toronado",
          "years": [
            {
              "id": 1589,
              "year": 1990
            },
            {
              "id": 522,
              "year": 1991
            },
            {
              "id": 1590,
              "year": 1992
            }
          ]
        }
      ]
    },
    {
      "id": 200194838,
      "name": "Panoz",
      "niceName": "panoz",
      "models": [
        {
          "id": "Panoz_Esperante",
          "name": "Esperante",
          "niceName": "esperante",
          "years": [
            {
              "id": 100502976,
              "year": 2002
            },
            {
              "id": 100502977,
              "year": 2003
            },
            {
              "id": 100504098,
              "year": 2004
            },
            {
              "id": 100505445,
              "year": 2005
            },
            {
              "id": 100507639,
              "year": 2006
            }
          ]
        }
      ]
    },
    {
      "id": 200339126,
      "name": "Plymouth",
      "niceName": "plymouth",
      "models": [
        {
          "id": "Plymouth_Acclaim",
          "name": "Acclaim",
          "niceName": "acclaim",
          "years": [
            {
              "id": 523,
              "year": 1990
            },
            {
              "id": 1592,
              "year": 1991
            },
            {
              "id": 1593,
              "year": 1992
            },
            {
              "id": 524,
              "year": 1993
            },
            {
              "id": 1594,
              "year": 1994
            },
            {
              "id": 1595,
              "year": 1995
            }
          ]
        },
        {
          "id": "Plymouth_Breeze",
          "name": "Breeze",
          "niceName": "breeze",
          "years": [
            {
              "id": 1596,
              "year": 1996
            },
            {
              "id": 525,
              "year": 1997
            },
            {
              "id": 1597,
              "year": 1998
            },
            {
              "id": 3617,
              "year": 1999
            },
            {
              "id": 517,
              "year": 2000
            }
          ]
        },
        {
          "id": "Plymouth_Colt",
          "name": "Colt",
          "niceName": "colt",
          "years": [
            {
              "id": 526,
              "year": 1990
            },
            {
              "id": 1599,
              "year": 1991
            },
            {
              "id": 1600,
              "year": 1992
            },
            {
              "id": 1601,
              "year": 1993
            },
            {
              "id": 1602,
              "year": 1994
            }
          ]
        },
        {
          "id": "Plymouth_Grand_Voyager",
          "name": "Grand Voyager",
          "niceName": "grand-voyager",
          "years": [
            {
              "id": 100503331,
              "year": 1990
            },
            {
              "id": 100503340,
              "year": 1991
            },
            {
              "id": 100503346,
              "year": 1992
            },
            {
              "id": 100503353,
              "year": 1993
            },
            {
              "id": 100503358,
              "year": 1994
            },
            {
              "id": 100503366,
              "year": 1995
            },
            {
              "id": 100503377,
              "year": 1996
            },
            {
              "id": 100503386,
              "year": 1997
            },
            {
              "id": 100503397,
              "year": 1998
            },
            {
              "id": 100503408,
              "year": 1999
            },
            {
              "id": 100503420,
              "year": 2000
            }
          ]
        },
        {
          "id": "Plymouth_Laser",
          "name": "Laser",
          "niceName": "laser",
          "years": [
            {
              "id": 527,
              "year": 1990
            },
            {
              "id": 1468,
              "year": 1991
            },
            {
              "id": 1469,
              "year": 1992
            },
            {
              "id": 1470,
              "year": 1993
            },
            {
              "id": 528,
              "year": 1994
            }
          ]
        },
        {
          "id": "Plymouth_Neon",
          "name": "Neon",
          "niceName": "neon",
          "years": [
            {
              "id": 1471,
              "year": 1995
            },
            {
              "id": 1472,
              "year": 1996
            },
            {
              "id": 529,
              "year": 1997
            },
            {
              "id": 1473,
              "year": 1998
            },
            {
              "id": 996,
              "year": 1999
            },
            {
              "id": 3618,
              "year": 2000
            },
            {
              "id": 100000212,
              "year": 2001
            }
          ]
        },
        {
          "id": "Plymouth_Prowler",
          "name": "Prowler",
          "niceName": "prowler",
          "years": [
            {
              "id": 1474,
              "year": 1997
            },
            {
              "id": 3619,
              "year": 1999
            },
            {
              "id": 429,
              "year": 2000
            },
            {
              "id": 100000213,
              "year": 2001
            }
          ]
        },
        {
          "id": "Plymouth_Sundance",
          "name": "Sundance",
          "niceName": "sundance",
          "years": [
            {
              "id": 1476,
              "year": 1990
            },
            {
              "id": 1477,
              "year": 1991
            },
            {
              "id": 531,
              "year": 1992
            },
            {
              "id": 1478,
              "year": 1993
            },
            {
              "id": 1479,
              "year": 1994
            }
          ]
        },
        {
          "id": "Plymouth_Voyager",
          "name": "Voyager",
          "niceName": "voyager",
          "years": [
            {
              "id": 1481,
              "year": 1990
            },
            {
              "id": 1482,
              "year": 1991
            },
            {
              "id": 1483,
              "year": 1992
            },
            {
              "id": 532,
              "year": 1993
            },
            {
              "id": 1484,
              "year": 1994
            },
            {
              "id": 1485,
              "year": 1995
            },
            {
              "id": 533,
              "year": 1996
            },
            {
              "id": 1487,
              "year": 1998
            },
            {
              "id": 997,
              "year": 1999
            },
            {
              "id": 1090,
              "year": 2000
            }
          ]
        }
      ]
    },
    {
      "id": 200002634,
      "name": "Pontiac",
      "niceName": "pontiac",
      "models": [
        {
          "id": "Pontiac_6000",
          "name": "6000",
          "niceName": "6000",
          "years": [
            {
              "id": 1488,
              "year": 1990
            }
          ]
        },
        {
          "id": "Pontiac_Aztek",
          "name": "Aztek",
          "niceName": "aztek",
          "years": [
            {
              "id": 100000214,
              "year": 2001
            },
            {
              "id": 100000484,
              "year": 2002
            },
            {
              "id": 100502879,
              "year": 2003
            },
            {
              "id": 100503237,
              "year": 2004
            },
            {
              "id": 100504166,
              "year": 2005
            }
          ]
        },
        {
          "id": "Pontiac_Bonneville",
          "name": "Bonneville",
          "niceName": "bonneville",
          "years": [
            {
              "id": 535,
              "year": 1990
            },
            {
              "id": 1491,
              "year": 1991
            },
            {
              "id": 1492,
              "year": 1992
            },
            {
              "id": 536,
              "year": 1993
            },
            {
              "id": 1493,
              "year": 1994
            },
            {
              "id": 1494,
              "year": 1995
            },
            {
              "id": 1495,
              "year": 1996
            },
            {
              "id": 1496,
              "year": 1997
            },
            {
              "id": 3620,
              "year": 1999
            },
            {
              "id": 1135,
              "year": 2000
            },
            {
              "id": 100000215,
              "year": 2001
            },
            {
              "id": 3826,
              "year": 2002
            },
            {
              "id": 100502880,
              "year": 2003
            },
            {
              "id": 100503046,
              "year": 2004
            },
            {
              "id": 100504167,
              "year": 2005
            }
          ]
        },
        {
          "id": "Pontiac_Firebird",
          "name": "Firebird",
          "niceName": "firebird",
          "years": [
            {
              "id": 537,
              "year": 1990
            },
            {
              "id": 1500,
              "year": 1992
            },
            {
              "id": 1501,
              "year": 1993
            },
            {
              "id": 538,
              "year": 1994
            },
            {
              "id": 1502,
              "year": 1995
            },
            {
              "id": 1503,
              "year": 1996
            },
            {
              "id": 539,
              "year": 1997
            },
            {
              "id": 1504,
              "year": 1998
            },
            {
              "id": 3621,
              "year": 1999
            },
            {
              "id": 377,
              "year": 2000
            },
            {
              "id": 100000217,
              "year": 2001
            },
            {
              "id": 100000350,
              "year": 2002
            }
          ]
        },
        {
          "id": "Pontiac_G3",
          "name": "G3",
          "niceName": "g3",
          "years": [
            {
              "id": 100526497,
              "year": 2009
            }
          ]
        },
        {
          "id": "Pontiac_G5",
          "name": "G5",
          "niceName": "g5",
          "years": [
            {
              "id": 100507579,
              "year": 2007
            },
            {
              "id": 100524112,
              "year": 2008
            },
            {
              "id": 100525581,
              "year": 2009
            }
          ]
        },
        {
          "id": "Pontiac_G6",
          "name": "G6",
          "niceName": "g6",
          "years": [
            {
              "id": 100503073,
              "year": 2005
            },
            {
              "id": 100505906,
              "year": 2006
            },
            {
              "id": 100512886,
              "year": 2007
            },
            {
              "id": 100523758,
              "year": 2008
            },
            {
              "id": 100525582,
              "year": 2009
            },
            {
              "id": 100534929,
              "year": 2010
            }
          ]
        },
        {
          "id": "Pontiac_G8",
          "name": "G8",
          "niceName": "g8",
          "years": [
            {
              "id": 100524371,
              "year": 2008
            },
            {
              "id": 100522469,
              "year": 2009
            }
          ]
        },
        {
          "id": "Pontiac_GTO",
          "name": "GTO",
          "niceName": "gto",
          "years": [
            {
              "id": 100502928,
              "year": 2004
            },
            {
              "id": 100504165,
              "year": 2005
            },
            {
              "id": 100506155,
              "year": 2006
            }
          ]
        },
        {
          "id": "Pontiac_Grand_Am",
          "name": "Grand Am",
          "niceName": "grand-am",
          "years": [
            {
              "id": 1506,
              "year": 1990
            },
            {
              "id": 540,
              "year": 1991
            },
            {
              "id": 1507,
              "year": 1992
            },
            {
              "id": 1508,
              "year": 1993
            },
            {
              "id": 541,
              "year": 1994
            },
            {
              "id": 1509,
              "year": 1995
            },
            {
              "id": 1510,
              "year": 1996
            },
            {
              "id": 1512,
              "year": 1998
            },
            {
              "id": 998,
              "year": 1999
            },
            {
              "id": 1119,
              "year": 2000
            },
            {
              "id": 100000218,
              "year": 2001
            },
            {
              "id": 3876,
              "year": 2002
            },
            {
              "id": 100502882,
              "year": 2003
            },
            {
              "id": 100503239,
              "year": 2004
            },
            {
              "id": 100504163,
              "year": 2005
            }
          ]
        },
        {
          "id": "Pontiac_Grand_Prix",
          "name": "Grand Prix",
          "niceName": "grand-prix",
          "years": [
            {
              "id": 1514,
              "year": 1990
            },
            {
              "id": 1515,
              "year": 1991
            },
            {
              "id": 542,
              "year": 1992
            },
            {
              "id": 1516,
              "year": 1993
            },
            {
              "id": 1517,
              "year": 1994
            },
            {
              "id": 543,
              "year": 1995
            },
            {
              "id": 1518,
              "year": 1996
            },
            {
              "id": 1519,
              "year": 1997
            },
            {
              "id": 1520,
              "year": 1998
            },
            {
              "id": 3622,
              "year": 1999
            },
            {
              "id": 515,
              "year": 2000
            },
            {
              "id": 100000220,
              "year": 2001
            },
            {
              "id": 3815,
              "year": 2002
            },
            {
              "id": 100502692,
              "year": 2003
            },
            {
              "id": 100502693,
              "year": 2004
            },
            {
              "id": 100504164,
              "year": 2005
            },
            {
              "id": 100505305,
              "year": 2006
            },
            {
              "id": 100516804,
              "year": 2007
            },
            {
              "id": 100522830,
              "year": 2008
            }
          ]
        },
        {
          "id": "Pontiac_Le_Mans",
          "name": "Le Mans",
          "niceName": "le-mans",
          "years": [
            {
              "id": 1521,
              "year": 1990
            },
            {
              "id": 1522,
              "year": 1991
            },
            {
              "id": 545,
              "year": 1992
            },
            {
              "id": 1523,
              "year": 1993
            }
          ]
        },
        {
          "id": "Pontiac_Montana",
          "name": "Montana",
          "niceName": "montana",
          "years": [
            {
              "id": 3623,
              "year": 1999
            },
            {
              "id": 1026,
              "year": 2000
            },
            {
              "id": 100000216,
              "year": 2001
            },
            {
              "id": 3816,
              "year": 2002
            },
            {
              "id": 100502883,
              "year": 2003
            },
            {
              "id": 100503240,
              "year": 2004
            },
            {
              "id": 100504563,
              "year": 2005
            }
          ]
        },
        {
          "id": "Pontiac_Montana_SV6",
          "name": "Montana SV6",
          "niceName": "montana-sv6",
          "years": [
            {
              "id": 100506466,
              "year": 2006
            }
          ]
        },
        {
          "id": "Pontiac_Solstice",
          "name": "Solstice",
          "niceName": "solstice",
          "years": [
            {
              "id": 100503878,
              "year": 2006
            },
            {
              "id": 100505966,
              "year": 2007
            },
            {
              "id": 100523394,
              "year": 2008
            },
            {
              "id": 100524032,
              "year": 2009
            }
          ]
        },
        {
          "id": "Pontiac_Sunbird",
          "name": "Sunbird",
          "niceName": "sunbird",
          "years": [
            {
              "id": 546,
              "year": 1990
            },
            {
              "id": 1526,
              "year": 1991
            },
            {
              "id": 1527,
              "year": 1992
            },
            {
              "id": 1528,
              "year": 1993
            },
            {
              "id": 1529,
              "year": 1994
            }
          ]
        },
        {
          "id": "Pontiac_Sunfire",
          "name": "Sunfire",
          "niceName": "sunfire",
          "years": [
            {
              "id": 1530,
              "year": 1995
            },
            {
              "id": 547,
              "year": 1996
            },
            {
              "id": 1531,
              "year": 1997
            },
            {
              "id": 1532,
              "year": 1998
            },
            {
              "id": 999,
              "year": 1999
            },
            {
              "id": 510,
              "year": 2000
            },
            {
              "id": 100000219,
              "year": 2001
            },
            {
              "id": 3827,
              "year": 2002
            },
            {
              "id": 100502884,
              "year": 2003
            },
            {
              "id": 100503241,
              "year": 2004
            },
            {
              "id": 100504168,
              "year": 2005
            }
          ]
        },
        {
          "id": "Pontiac_Torrent",
          "name": "Torrent",
          "niceName": "torrent",
          "years": [
            {
              "id": 100505032,
              "year": 2006
            },
            {
              "id": 100516805,
              "year": 2007
            },
            {
              "id": 100523645,
              "year": 2008
            },
            {
              "id": 100525584,
              "year": 2009
            }
          ]
        },
        {
          "id": "Pontiac_Trans_Sport",
          "name": "Trans Sport",
          "niceName": "trans-sport",
          "years": [
            {
              "id": 1533,
              "year": 1990
            },
            {
              "id": 1534,
              "year": 1992
            },
            {
              "id": 1535,
              "year": 1993
            },
            {
              "id": 549,
              "year": 1994
            },
            {
              "id": 1536,
              "year": 1995
            },
            {
              "id": 1390,
              "year": 1996
            },
            {
              "id": 1391,
              "year": 1997
            }
          ]
        },
        {
          "id": "Pontiac_Vibe",
          "name": "Vibe",
          "niceName": "vibe",
          "years": [
            {
              "id": 100000594,
              "year": 2003
            },
            {
              "id": 100503242,
              "year": 2004
            },
            {
              "id": 100504162,
              "year": 2005
            },
            {
              "id": 100506154,
              "year": 2006
            },
            {
              "id": 100516806,
              "year": 2007
            },
            {
              "id": 100520128,
              "year": 2008
            },
            {
              "id": 100523351,
              "year": 2009
            },
            {
              "id": 100527230,
              "year": 2010
            }
          ]
        }
      ]
    },
    {
      "id": 200000886,
      "name": "Porsche",
      "niceName": "porsche",
      "models": [
        {
          "id": "Porsche_718_Boxster",
          "name": "718 Boxster",
          "niceName": "718-boxster",
          "years": [
            {
              "id": 401627328,
              "year": 2017
            }
          ]
        },
        {
          "id": "Porsche_718_Cayman",
          "name": "718 Cayman",
          "niceName": "718-cayman",
          "years": [
            {
              "id": 401643316,
              "year": 2017
            }
          ]
        },
        {
          "id": "Porsche_911",
          "name": "911",
          "niceName": "911",
          "years": [
            {
              "id": 551,
              "year": 1990
            },
            {
              "id": 1393,
              "year": 1991
            },
            {
              "id": 1394,
              "year": 1992
            },
            {
              "id": 552,
              "year": 1993
            },
            {
              "id": 1397,
              "year": 1996
            },
            {
              "id": 1398,
              "year": 1997
            },
            {
              "id": 553,
              "year": 1998
            },
            {
              "id": 3624,
              "year": 1999
            },
            {
              "id": 417,
              "year": 2000
            },
            {
              "id": 100000222,
              "year": 2001
            },
            {
              "id": 100000482,
              "year": 2002
            },
            {
              "id": 100502885,
              "year": 2003
            },
            {
              "id": 100502989,
              "year": 2004
            },
            {
              "id": 100504117,
              "year": 2005
            },
            {
              "id": 100505565,
              "year": 2006
            },
            {
              "id": 100507480,
              "year": 2007
            },
            {
              "id": 100506271,
              "year": 2008
            },
            {
              "id": 100525452,
              "year": 2009
            },
            {
              "id": 100525570,
              "year": 2010
            },
            {
              "id": 100527151,
              "year": 2011
            },
            {
              "id": 100534249,
              "year": 2012
            },
            {
              "id": 200444178,
              "year": 2013
            },
            {
              "id": 200464123,
              "year": 2014
            },
            {
              "id": 200693821,
              "year": 2015
            },
            {
              "id": 200729205,
              "year": 2016
            },
            {
              "id": 401578403,
              "year": 2017
            }
          ]
        },
        {
          "id": "Porsche_918_Spyder",
          "name": "918 Spyder",
          "niceName": "918-spyder",
          "years": [
            {
              "id": 200676633,
              "year": 2015
            }
          ]
        },
        {
          "id": "Porsche_928",
          "name": "928",
          "niceName": "928",
          "years": [
            {
              "id": 1400,
              "year": 1990
            },
            {
              "id": 554,
              "year": 1991
            },
            {
              "id": 1401,
              "year": 1993
            },
            {
              "id": 1402,
              "year": 1994
            },
            {
              "id": 555,
              "year": 1995
            }
          ]
        },
        {
          "id": "Porsche_944",
          "name": "944",
          "niceName": "944",
          "years": [
            {
              "id": 1405,
              "year": 1990
            },
            {
              "id": 1406,
              "year": 1991
            }
          ]
        },
        {
          "id": "Porsche_968",
          "name": "968",
          "niceName": "968",
          "years": [
            {
              "id": 1407,
              "year": 1993
            },
            {
              "id": 1408,
              "year": 1995
            }
          ]
        },
        {
          "id": "Porsche_Boxster",
          "name": "Boxster",
          "niceName": "boxster",
          "years": [
            {
              "id": 1409,
              "year": 1997
            },
            {
              "id": 559,
              "year": 1998
            },
            {
              "id": 3625,
              "year": 1999
            },
            {
              "id": 416,
              "year": 2000
            },
            {
              "id": 100000221,
              "year": 2001
            },
            {
              "id": 100000483,
              "year": 2002
            },
            {
              "id": 100502886,
              "year": 2003
            },
            {
              "id": 100503316,
              "year": 2004
            },
            {
              "id": 100505207,
              "year": 2005
            },
            {
              "id": 100506759,
              "year": 2006
            },
            {
              "id": 100519321,
              "year": 2007
            },
            {
              "id": 100524853,
              "year": 2008
            },
            {
              "id": 100527189,
              "year": 2009
            },
            {
              "id": 100531069,
              "year": 2010
            },
            {
              "id": 100534569,
              "year": 2011
            },
            {
              "id": 100527153,
              "year": 2012
            },
            {
              "id": 100539161,
              "year": 2013
            },
            {
              "id": 200469909,
              "year": 2014
            },
            {
              "id": 200696624,
              "year": 2015
            },
            {
              "id": 200731946,
              "year": 2016
            }
          ]
        },
        {
          "id": "Porsche_Carrera_GT",
          "name": "Carrera GT",
          "niceName": "carrera-gt",
          "years": [
            {
              "id": 100502929,
              "year": 2004
            },
            {
              "id": 100505208,
              "year": 2005
            }
          ]
        },
        {
          "id": "Porsche_Cayenne",
          "name": "Cayenne",
          "niceName": "cayenne",
          "years": [
            {
              "id": 100502669,
              "year": 2003
            },
            {
              "id": 100503317,
              "year": 2004
            },
            {
              "id": 100505209,
              "year": 2005
            },
            {
              "id": 100505567,
              "year": 2006
            },
            {
              "id": 100505569,
              "year": 2008
            },
            {
              "id": 100525783,
              "year": 2009
            },
            {
              "id": 100522811,
              "year": 2010
            },
            {
              "id": 100531109,
              "year": 2011
            },
            {
              "id": 100536609,
              "year": 2012
            },
            {
              "id": 100539509,
              "year": 2013
            },
            {
              "id": 200465905,
              "year": 2014
            },
            {
              "id": 200707124,
              "year": 2015
            },
            {
              "id": 200732826,
              "year": 2016
            },
            {
              "id": 401633797,
              "year": 2017
            }
          ]
        },
        {
          "id": "Porsche_Cayman",
          "name": "Cayman",
          "niceName": "cayman",
          "years": [
            {
              "id": 100515460,
              "year": 2007
            },
            {
              "id": 100524754,
              "year": 2008
            },
            {
              "id": 100527190,
              "year": 2009
            },
            {
              "id": 100531070,
              "year": 2010
            },
            {
              "id": 100529576,
              "year": 2011
            },
            {
              "id": 100532954,
              "year": 2012
            },
            {
              "id": 200460094,
              "year": 2014
            },
            {
              "id": 200698739,
              "year": 2015
            },
            {
              "id": 200729980,
              "year": 2016
            }
          ]
        },
        {
          "id": "Porsche_Cayman_S",
          "name": "Cayman S",
          "niceName": "cayman-s",
          "years": [
            {
              "id": 100503989,
              "year": 2006
            }
          ]
        },
        {
          "id": "Porsche_Macan",
          "name": "Macan",
          "niceName": "macan",
          "years": [
            {
              "id": 200497476,
              "year": 2015
            },
            {
              "id": 200731398,
              "year": 2016
            },
            {
              "id": 401597832,
              "year": 2017
            }
          ]
        },
        {
          "id": "Porsche_Panamera",
          "name": "Panamera",
          "niceName": "panamera",
          "years": [
            {
              "id": 100506011,
              "year": 2010
            },
            {
              "id": 100530513,
              "year": 2011
            },
            {
              "id": 100535329,
              "year": 2012
            },
            {
              "id": 200419840,
              "year": 2013
            },
            {
              "id": 200466953,
              "year": 2014
            },
            {
              "id": 200695255,
              "year": 2015
            },
            {
              "id": 200734259,
              "year": 2016
            },
            {
              "id": 401655426,
              "year": 2017
            }
          ]
        }
      ]
    },
    {
      "id": 200393150,
      "name": "Ram",
      "niceName": "ram",
      "models": [
        {
          "id": "Ram_1500",
          "name": "1500",
          "niceName": "1500",
          "years": [
            {
              "id": 100532809,
              "year": 2011
            },
            {
              "id": 100537469,
              "year": 2012
            },
            {
              "id": 100539471,
              "year": 2013
            },
            {
              "id": 200481909,
              "year": 2014
            },
            {
              "id": 200715990,
              "year": 2015
            },
            {
              "id": 200742272,
              "year": 2016
            },
            {
              "id": 401655765,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ram_2500",
          "name": "2500",
          "niceName": "2500",
          "years": [
            {
              "id": 100532709,
              "year": 2011
            },
            {
              "id": 100537509,
              "year": 2012
            },
            {
              "id": 200461661,
              "year": 2013
            },
            {
              "id": 200487815,
              "year": 2014
            },
            {
              "id": 200709848,
              "year": 2015
            },
            {
              "id": 200743476,
              "year": 2016
            },
            {
              "id": 401630229,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ram_3500",
          "name": "3500",
          "niceName": "3500",
          "years": [
            {
              "id": 100532789,
              "year": 2011
            },
            {
              "id": 100538449,
              "year": 2012
            },
            {
              "id": 200461157,
              "year": 2013
            },
            {
              "id": 200488612,
              "year": 2014
            },
            {
              "id": 200710030,
              "year": 2015
            },
            {
              "id": 200743122,
              "year": 2016
            }
          ]
        },
        {
          "id": "Ram_C/V_Cargo_Van",
          "name": "C/V Cargo Van",
          "niceName": "cv-cargo-van",
          "years": [
            {
              "id": 100538369,
              "year": 2012
            }
          ]
        },
        {
          "id": "Ram_C/V_Tradesman",
          "name": "C/V Tradesman",
          "niceName": "cv-tradesman",
          "years": [
            {
              "id": 200440747,
              "year": 2013
            }
          ]
        },
        {
          "id": "Ram_CV_Tradesman",
          "name": "CV Tradesman",
          "niceName": "cv-tradesman",
          "years": [
            {
              "id": 200476712,
              "year": 2014
            },
            {
              "id": 200705559,
              "year": 2015
            }
          ]
        },
        {
          "id": "Ram_Dakota",
          "name": "Dakota",
          "niceName": "dakota",
          "years": [
            {
              "id": 100533291,
              "year": 2011
            }
          ]
        },
        {
          "id": "Ram_Promaster_Cargo_Van",
          "name": "Promaster Cargo Van",
          "niceName": "promaster-cargo-van",
          "years": [
            {
              "id": 200467588,
              "year": 2014
            },
            {
              "id": 200705184,
              "year": 2015
            },
            {
              "id": 200734551,
              "year": 2016
            },
            {
              "id": 401649492,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ram_Promaster_City",
          "name": "Promaster City",
          "niceName": "promaster-city",
          "years": [
            {
              "id": 200696467,
              "year": 2015
            },
            {
              "id": 401582284,
              "year": 2016
            },
            {
              "id": 401654857,
              "year": 2017
            }
          ]
        },
        {
          "id": "Ram_Promaster_Window_Van",
          "name": "Promaster Window Van",
          "niceName": "promaster-window-van",
          "years": [
            {
              "id": 200467795,
              "year": 2014
            },
            {
              "id": 200705346,
              "year": 2015
            },
            {
              "id": 200734214,
              "year": 2016
            },
            {
              "id": 401660392,
              "year": 2017
            }
          ]
        }
      ]
    },
    {
      "id": 200005044,
      "name": "Rolls-Royce",
      "niceName": "rolls-royce",
      "models": [
        {
          "id": "Rolls_Royce_Corniche",
          "name": "Corniche",
          "niceName": "corniche",
          "years": [
            {
              "id": 100502598,
              "year": 2002
            }
          ]
        },
        {
          "id": "Rolls_Royce_Dawn",
          "name": "Dawn",
          "niceName": "dawn",
          "years": [
            {
              "id": 401628476,
              "year": 2016
            }
          ]
        },
        {
          "id": "Rolls_Royce_Ghost",
          "name": "Ghost",
          "niceName": "ghost",
          "years": [
            {
              "id": 100524806,
              "year": 2010
            },
            {
              "id": 100533971,
              "year": 2011
            },
            {
              "id": 100535029,
              "year": 2012
            },
            {
              "id": 200476545,
              "year": 2013
            },
            {
              "id": 200674395,
              "year": 2014
            }
          ]
        },
        {
          "id": "Rolls_Royce_Ghost_Series_II",
          "name": "Ghost Series II",
          "niceName": "ghost-series-ii",
          "years": [
            {
              "id": 200701497,
              "year": 2015
            },
            {
              "id": 401630684,
              "year": 2016
            }
          ]
        },
        {
          "id": "Rolls_Royce_Park_Ward",
          "name": "Park Ward",
          "niceName": "park-ward",
          "years": [
            {
              "id": 100000281,
              "year": 2001
            },
            {
              "id": 100502596,
              "year": 2002
            }
          ]
        },
        {
          "id": "Rolls_Royce_Phantom",
          "name": "Phantom",
          "niceName": "phantom",
          "years": [
            {
              "id": 100502960,
              "year": 2004
            },
            {
              "id": 100505425,
              "year": 2005
            },
            {
              "id": 100506880,
              "year": 2006
            },
            {
              "id": 100522849,
              "year": 2007
            },
            {
              "id": 100524578,
              "year": 2008
            },
            {
              "id": 100530515,
              "year": 2010
            },
            {
              "id": 100534649,
              "year": 2011
            },
            {
              "id": 200419917,
              "year": 2012
            },
            {
              "id": 200472803,
              "year": 2013
            },
            {
              "id": 200675917,
              "year": 2014
            },
            {
              "id": 200726518,
              "year": 2015
            },
            {
              "id": 401629131,
              "year": 2016
            }
          ]
        },
        {
          "id": "Rolls_Royce_Phantom_Coupe",
          "name": "Phantom Coupe",
          "niceName": "phantom-coupe",
          "years": [
            {
              "id": 100527570,
              "year": 2009
            },
            {
              "id": 100530516,
              "year": 2010
            },
            {
              "id": 100534829,
              "year": 2011
            },
            {
              "id": 200420020,
              "year": 2012
            },
            {
              "id": 200474474,
              "year": 2013
            },
            {
              "id": 200676523,
              "year": 2014
            },
            {
              "id": 200727167,
              "year": 2015
            },
            {
              "id": 401627841,
              "year": 2016
            }
          ]
        },
        {
          "id": "Rolls_Royce_Phantom_Drophead_Coupe",
          "name": "Phantom Drophead Coupe",
          "niceName": "phantom-drophead-coupe",
          "years": [
            {
              "id": 100519325,
              "year": 2008
            },
            {
              "id": 100527569,
              "year": 2009
            },
            {
              "id": 100530517,
              "year": 2010
            },
            {
              "id": 100534589,
              "year": 2011
            },
            {
              "id": 200420091,
              "year": 2012
            },
            {
              "id": 200474457,
              "year": 2013
            },
            {
              "id": 200676795,
              "year": 2014
            },
            {
              "id": 200727168,
              "year": 2015
            },
            {
              "id": 401631105,
              "year": 2016
            }
          ]
        },
        {
          "id": "Rolls_Royce_Silver_Seraph",
          "name": "Silver Seraph",
          "niceName": "silver-seraph",
          "years": [
            {
              "id": 100000282,
              "year": 2001
            },
            {
              "id": 100502597,
              "year": 2002
            }
          ]
        },
        {
          "id": "Rolls_Royce_Wraith",
          "name": "Wraith",
          "niceName": "wraith",
          "years": [
            {
              "id": 200488210,
              "year": 2014
            },
            {
              "id": 200464761,
              "year": 2015
            },
            {
              "id": 401629127,
              "year": 2016
            }
          ]
        }
      ]
    },
    {
      "id": 200074504,
      "name": "Saab",
      "niceName": "saab",
      "models": [
        {
          "id": "Saab_9_2X",
          "name": "9-2X",
          "niceName": "9-2x",
          "years": [
            {
              "id": 100503265,
              "year": 2005
            },
            {
              "id": 100507060,
              "year": 2006
            }
          ]
        },
        {
          "id": "Saab_9_3",
          "name": "9-3",
          "niceName": "9-3",
          "years": [
            {
              "id": 3626,
              "year": 1999
            },
            {
              "id": 1072,
              "year": 2000
            },
            {
              "id": 100000224,
              "year": 2001
            },
            {
              "id": 100000480,
              "year": 2002
            },
            {
              "id": 100502691,
              "year": 2003
            },
            {
              "id": 100502995,
              "year": 2004
            },
            {
              "id": 100505014,
              "year": 2005
            },
            {
              "id": 100503659,
              "year": 2006
            },
            {
              "id": 100519081,
              "year": 2007
            },
            {
              "id": 100520206,
              "year": 2008
            },
            {
              "id": 100525585,
              "year": 2009
            },
            {
              "id": 100531449,
              "year": 2010
            },
            {
              "id": 100534090,
              "year": 2011
            }
          ]
        },
        {
          "id": "Saab_9_3_Griffin",
          "name": "9-3 Griffin",
          "niceName": "9-3-griffin",
          "years": [
            {
              "id": 100537889,
              "year": 2012
            }
          ]
        },
        {
          "id": "Saab_9_4X",
          "name": "9-4X",
          "niceName": "9-4x",
          "years": [
            {
              "id": 100535469,
              "year": 2011
            }
          ]
        },
        {
          "id": "Saab_9_5",
          "name": "9-5",
          "niceName": "9-5",
          "years": [
            {
              "id": 3627,
              "year": 1999
            },
            {
              "id": 390,
              "year": 2000
            },
            {
              "id": 100000223,
              "year": 2001
            },
            {
              "id": 100000481,
              "year": 2002
            },
            {
              "id": 100502887,
              "year": 2003
            },
            {
              "id": 100503635,
              "year": 2004
            },
            {
              "id": 100505015,
              "year": 2005
            },
            {
              "id": 100506861,
              "year": 2006
            },
            {
              "id": 100519082,
              "year": 2007
            },
            {
              "id": 100524052,
              "year": 2008
            },
            {
              "id": 100525540,
              "year": 2009
            },
            {
              "id": 100531851,
              "year": 2010
            },
            {
              "id": 100531369,
              "year": 2011
            }
          ]
        },
        {
          "id": "Saab_9_7X",
          "name": "9-7X",
          "niceName": "9-7x",
          "years": [
            {
              "id": 100503266,
              "year": 2005
            },
            {
              "id": 100507042,
              "year": 2006
            },
            {
              "id": 100519083,
              "year": 2007
            },
            {
              "id": 100523829,
              "year": 2008
            },
            {
              "id": 100525654,
              "year": 2009
            }
          ]
        },
        {
          "id": "Saab_900",
          "name": "900",
          "niceName": "900",
          "years": [
            {
              "id": 1411,
              "year": 1990
            },
            {
              "id": 560,
              "year": 1991
            },
            {
              "id": 1412,
              "year": 1992
            },
            {
              "id": 1413,
              "year": 1993
            },
            {
              "id": 1414,
              "year": 1994
            },
            {
              "id": 1415,
              "year": 1995
            },
            {
              "id": 561,
              "year": 1996
            },
            {
              "id": 1416,
              "year": 1997
            },
            {
              "id": 1417,
              "year": 1998
            }
          ]
        },
        {
          "id": "Saab_9000",
          "name": "9000",
          "niceName": "9000",
          "years": [
            {
              "id": 1418,
              "year": 1990
            },
            {
              "id": 1419,
              "year": 1991
            },
            {
              "id": 1420,
              "year": 1992
            },
            {
              "id": 563,
              "year": 1993
            },
            {
              "id": 1421,
              "year": 1994
            },
            {
              "id": 1422,
              "year": 1995
            },
            {
              "id": 564,
              "year": 1996
            },
            {
              "id": 1423,
              "year": 1997
            },
            {
              "id": 1424,
              "year": 1998
            }
          ]
        }
      ]
    },
    {
      "id": 200004446,
      "name": "Saturn",
      "niceName": "saturn",
      "models": [
        {
          "id": "Saturn_Astra",
          "name": "Astra",
          "niceName": "astra",
          "years": [
            {
              "id": 100512960,
              "year": 2008
            }
          ]
        },
        {
          "id": "Saturn_Aura",
          "name": "Aura",
          "niceName": "aura",
          "years": [
            {
              "id": 100505067,
              "year": 2007
            },
            {
              "id": 100522352,
              "year": 2008
            },
            {
              "id": 100525655,
              "year": 2009
            }
          ]
        },
        {
          "id": "Saturn_Aura_Hybrid",
          "name": "Aura Hybrid",
          "niceName": "aura-hybrid",
          "years": [
            {
              "id": 100524316,
              "year": 2008
            },
            {
              "id": 100525656,
              "year": 2009
            }
          ]
        },
        {
          "id": "Saturn_ION",
          "name": "ION",
          "niceName": "ion",
          "years": [
            {
              "id": 100502670,
              "year": 2003
            },
            {
              "id": 100503726,
              "year": 2004
            },
            {
              "id": 100505210,
              "year": 2005
            },
            {
              "id": 100506465,
              "year": 2006
            },
            {
              "id": 100512920,
              "year": 2007
            }
          ]
        },
        {
          "id": "Saturn_L_Series",
          "name": "L-Series",
          "niceName": "l-series",
          "years": [
            {
              "id": 100000440,
              "year": 2002
            },
            {
              "id": 100502888,
              "year": 2003
            }
          ]
        },
        {
          "id": "Saturn_L300",
          "name": "L300",
          "niceName": "l300",
          "years": [
            {
              "id": 100505213,
              "year": 2005
            }
          ]
        },
        {
          "id": "Saturn_Outlook",
          "name": "Outlook",
          "niceName": "outlook",
          "years": [
            {
              "id": 100506572,
              "year": 2007
            },
            {
              "id": 100523476,
              "year": 2008
            },
            {
              "id": 100525785,
              "year": 2009
            }
          ]
        },
        {
          "id": "Saturn_Relay",
          "name": "Relay",
          "niceName": "relay",
          "years": [
            {
              "id": 100503226,
              "year": 2005
            },
            {
              "id": 100506372,
              "year": 2006
            },
            {
              "id": 100507519,
              "year": 2007
            }
          ]
        },
        {
          "id": "Saturn_S_Series",
          "name": "S-Series",
          "niceName": "s-series",
          "years": [
            {
              "id": 565,
              "year": 1991
            },
            {
              "id": 1425,
              "year": 1992
            },
            {
              "id": 1426,
              "year": 1993
            },
            {
              "id": 566,
              "year": 1994
            },
            {
              "id": 1427,
              "year": 1995
            },
            {
              "id": 1428,
              "year": 1996
            },
            {
              "id": 567,
              "year": 1997
            },
            {
              "id": 1429,
              "year": 1998
            },
            {
              "id": 3332,
              "year": 1999
            },
            {
              "id": 1077,
              "year": 2000
            },
            {
              "id": 100000225,
              "year": 2001
            },
            {
              "id": 100000439,
              "year": 2002
            }
          ]
        },
        {
          "id": "Saturn_Sky",
          "name": "Sky",
          "niceName": "sky",
          "years": [
            {
              "id": 100505387,
              "year": 2007
            },
            {
              "id": 100507719,
              "year": 2008
            },
            {
              "id": 100525586,
              "year": 2009
            }
          ]
        },
        {
          "id": "Saturn_VUE",
          "name": "VUE",
          "niceName": "vue",
          "years": [
            {
              "id": 100000593,
              "year": 2002
            },
            {
              "id": 100502890,
              "year": 2003
            },
            {
              "id": 100503727,
              "year": 2004
            },
            {
              "id": 100505212,
              "year": 2005
            },
            {
              "id": 100506085,
              "year": 2006
            },
            {
              "id": 100507739,
              "year": 2007
            },
            {
              "id": 100506999,
              "year": 2008
            },
            {
              "id": 100522470,
              "year": 2009
            }
          ]
        },
        {
          "id": "Saturn_VUE_Hybrid",
          "name": "VUE Hybrid",
          "niceName": "vue-hybrid",
          "years": [
            {
              "id": 100524451,
              "year": 2008
            },
            {
              "id": 100524807,
              "year": 2009
            }
          ]
        }
      ]
    },
    {
      "id": 200006515,
      "name": "Scion",
      "niceName": "scion",
      "models": [
        {
          "id": "Scion_FR_S",
          "name": "FR-S",
          "niceName": "fr-s",
          "years": [
            {
              "id": 100539211,
              "year": 2013
            },
            {
              "id": 200486319,
              "year": 2014
            },
            {
              "id": 200696271,
              "year": 2015
            },
            {
              "id": 200734751,
              "year": 2016
            }
          ]
        },
        {
          "id": "Scion_iA",
          "name": "iA",
          "niceName": "ia",
          "years": [
            {
              "id": 200730054,
              "year": 2016
            }
          ]
        },
        {
          "id": "Scion_iM",
          "name": "iM",
          "niceName": "im",
          "years": [
            {
              "id": 200722068,
              "year": 2016
            }
          ]
        },
        {
          "id": "Scion_iQ",
          "name": "iQ",
          "niceName": "iq",
          "years": [
            {
              "id": 100535309,
              "year": 2012
            },
            {
              "id": 200427367,
              "year": 2013
            },
            {
              "id": 200471221,
              "year": 2014
            },
            {
              "id": 200709073,
              "year": 2015
            }
          ]
        },
        {
          "id": "Scion_tC",
          "name": "tC",
          "niceName": "tc",
          "years": [
            {
              "id": 100503867,
              "year": 2005
            },
            {
              "id": 100506065,
              "year": 2006
            },
            {
              "id": 100512980,
              "year": 2007
            },
            {
              "id": 100523289,
              "year": 2008
            },
            {
              "id": 100525069,
              "year": 2009
            },
            {
              "id": 100527930,
              "year": 2010
            },
            {
              "id": 100529829,
              "year": 2011
            },
            {
              "id": 100531829,
              "year": 2012
            },
            {
              "id": 200423139,
              "year": 2013
            },
            {
              "id": 200466852,
              "year": 2014
            },
            {
              "id": 200696272,
              "year": 2015
            },
            {
              "id": 200745612,
              "year": 2016
            }
          ]
        },
        {
          "id": "Scion_xA",
          "name": "xA",
          "niceName": "xa",
          "years": [
            {
              "id": 100503102,
              "year": 2004
            },
            {
              "id": 100503983,
              "year": 2005
            },
            {
              "id": 100506312,
              "year": 2006
            }
          ]
        },
        {
          "id": "Scion_xB",
          "name": "xB",
          "niceName": "xb",
          "years": [
            {
              "id": 100503162,
              "year": 2004
            },
            {
              "id": 100503984,
              "year": 2005
            },
            {
              "id": 100506313,
              "year": 2006
            },
            {
              "id": 100522349,
              "year": 2008
            },
            {
              "id": 100525049,
              "year": 2009
            },
            {
              "id": 100527790,
              "year": 2010
            },
            {
              "id": 100531509,
              "year": 2011
            },
            {
              "id": 100535870,
              "year": 2012
            },
            {
              "id": 200461782,
              "year": 2013
            },
            {
              "id": 200497115,
              "year": 2014
            },
            {
              "id": 200722132,
              "year": 2015
            }
          ]
        },
        {
          "id": "Scion_xD",
          "name": "xD",
          "niceName": "xd",
          "years": [
            {
              "id": 100522350,
              "year": 2008
            },
            {
              "id": 100525791,
              "year": 2009
            },
            {
              "id": 100528529,
              "year": 2010
            },
            {
              "id": 100533529,
              "year": 2011
            },
            {
              "id": 100538429,
              "year": 2012
            },
            {
              "id": 200442985,
              "year": 2013
            },
            {
              "id": 200486318,
              "year": 2014
            }
          ]
        }
      ]
    },
    {
      "id": 200046567,
      "name": "Spyker",
      "niceName": "spyker",
      "models": [
        {
          "id": "Spyker_C8",
          "name": "C8",
          "niceName": "c8",
          "years": [
            {
              "id": 100528189,
              "year": 2009
            }
          ]
        }
      ]
    },
    {
      "id": 200004491,
      "name": "Subaru",
      "niceName": "subaru",
      "models": [
        {
          "id": "Subaru_B9_Tribeca",
          "name": "B9 Tribeca",
          "niceName": "b9-tribeca",
          "years": [
            {
              "id": 100505386,
              "year": 2006
            },
            {
              "id": 100516905,
              "year": 2007
            }
          ]
        },
        {
          "id": "Subaru_BRZ",
          "name": "BRZ",
          "niceName": "brz",
          "years": [
            {
              "id": 100537650,
              "year": 2013
            },
            {
              "id": 200481637,
              "year": 2014
            },
            {
              "id": 200699113,
              "year": 2015
            },
            {
              "id": 200772765,
              "year": 2016
            },
            {
              "id": 401659390,
              "year": 2017
            }
          ]
        },
        {
          "id": "Subaru_Baja",
          "name": "Baja",
          "niceName": "baja",
          "years": [
            {
              "id": 100502673,
              "year": 2003
            },
            {
              "id": 100503267,
              "year": 2004
            },
            {
              "id": 100504542,
              "year": 2005
            },
            {
              "id": 100506270,
              "year": 2006
            }
          ]
        },
        {
          "id": "Subaru_Crosstrek",
          "name": "Crosstrek",
          "niceName": "crosstrek",
          "years": [
            {
              "id": 401575886,
              "year": 2016
            }
          ]
        },
        {
          "id": "Subaru_Forester",
          "name": "Forester",
          "niceName": "forester",
          "years": [
            {
              "id": 572,
              "year": 1998
            },
            {
              "id": 1000,
              "year": 1999
            },
            {
              "id": 375,
              "year": 2000
            },
            {
              "id": 100000230,
              "year": 2001
            },
            {
              "id": 100000340,
              "year": 2002
            },
            {
              "id": 100502707,
              "year": 2003
            },
            {
              "id": 100503158,
              "year": 2004
            },
            {
              "id": 100504562,
              "year": 2005
            },
            {
              "id": 100505773,
              "year": 2006
            },
            {
              "id": 100516807,
              "year": 2007
            },
            {
              "id": 100523252,
              "year": 2008
            },
            {
              "id": 100524808,
              "year": 2009
            },
            {
              "id": 100527989,
              "year": 2010
            },
            {
              "id": 100533449,
              "year": 2011
            },
            {
              "id": 100538689,
              "year": 2012
            },
            {
              "id": 200426208,
              "year": 2013
            },
            {
              "id": 200441857,
              "year": 2014
            },
            {
              "id": 200689817,
              "year": 2015
            },
            {
              "id": 200740435,
              "year": 2016
            },
            {
              "id": 401645884,
              "year": 2017
            }
          ]
        },
        {
          "id": "Subaru_Impreza",
          "name": "Impreza",
          "niceName": "impreza",
          "years": [
            {
              "id": 573,
              "year": 1993
            },
            {
              "id": 1443,
              "year": 1994
            },
            {
              "id": 1444,
              "year": 1995
            },
            {
              "id": 1445,
              "year": 1996
            },
            {
              "id": 574,
              "year": 1997
            },
            {
              "id": 1446,
              "year": 1998
            },
            {
              "id": 3335,
              "year": 1999
            },
            {
              "id": 1029,
              "year": 2000
            },
            {
              "id": 100000229,
              "year": 2001
            },
            {
              "id": 100000341,
              "year": 2002
            },
            {
              "id": 100502891,
              "year": 2003
            },
            {
              "id": 100503216,
              "year": 2004
            },
            {
              "id": 100504543,
              "year": 2005
            },
            {
              "id": 100505867,
              "year": 2006
            },
            {
              "id": 100512805,
              "year": 2007
            },
            {
              "id": 100506012,
              "year": 2008
            },
            {
              "id": 100526153,
              "year": 2009
            },
            {
              "id": 100525470,
              "year": 2010
            },
            {
              "id": 100531510,
              "year": 2011
            },
            {
              "id": 100534369,
              "year": 2012
            },
            {
              "id": 200432628,
              "year": 2013
            },
            {
              "id": 200487683,
              "year": 2014
            },
            {
              "id": 200717212,
              "year": 2015
            },
            {
              "id": 401574186,
              "year": 2016
            },
            {
              "id": 401597110,
              "year": 2017
            }
          ]
        },
        {
          "id": "Subaru_Impreza_WRX",
          "name": "Impreza WRX",
          "niceName": "impreza-wrx",
          "years": [
            {
              "id": 100538469,
              "year": 2013
            },
            {
              "id": 200437613,
              "year": 2014
            }
          ]
        },
        {
          "id": "Subaru_Justy",
          "name": "Justy",
          "niceName": "justy",
          "years": [
            {
              "id": 1448,
              "year": 1990
            },
            {
              "id": 1449,
              "year": 1991
            },
            {
              "id": 1450,
              "year": 1992
            },
            {
              "id": 575,
              "year": 1993
            },
            {
              "id": 1451,
              "year": 1994
            }
          ]
        },
        {
          "id": "Subaru_Legacy",
          "name": "Legacy",
          "niceName": "legacy",
          "years": [
            {
              "id": 1452,
              "year": 1990
            },
            {
              "id": 576,
              "year": 1991
            },
            {
              "id": 1453,
              "year": 1992
            },
            {
              "id": 1454,
              "year": 1993
            },
            {
              "id": 1455,
              "year": 1994
            },
            {
              "id": 577,
              "year": 1995
            },
            {
              "id": 1456,
              "year": 1996
            },
            {
              "id": 1457,
              "year": 1997
            },
            {
              "id": 578,
              "year": 1998
            },
            {
              "id": 3336,
              "year": 1999
            },
            {
              "id": 1170,
              "year": 2000
            },
            {
              "id": 100000228,
              "year": 2001
            },
            {
              "id": 3855,
              "year": 2002
            },
            {
              "id": 100502892,
              "year": 2003
            },
            {
              "id": 100503318,
              "year": 2004
            },
            {
              "id": 100503245,
              "year": 2005
            },
            {
              "id": 100505865,
              "year": 2006
            },
            {
              "id": 100512801,
              "year": 2007
            },
            {
              "id": 100522909,
              "year": 2008
            },
            {
              "id": 100525432,
              "year": 2009
            },
            {
              "id": 100527089,
              "year": 2010
            },
            {
              "id": 100532010,
              "year": 2011
            },
            {
              "id": 100538049,
              "year": 2012
            },
            {
              "id": 200418088,
              "year": 2013
            },
            {
              "id": 200472196,
              "year": 2014
            },
            {
              "id": 200480465,
              "year": 2015
            },
            {
              "id": 200738270,
              "year": 2016
            },
            {
              "id": 401646454,
              "year": 2017
            }
          ]
        },
        {
          "id": "Subaru_Loyale",
          "name": "Loyale",
          "niceName": "loyale",
          "years": [
            {
              "id": 1458,
              "year": 1990
            },
            {
              "id": 1459,
              "year": 1991
            },
            {
              "id": 579,
              "year": 1992
            },
            {
              "id": 1460,
              "year": 1993
            },
            {
              "id": 1461,
              "year": 1994
            }
          ]
        },
        {
          "id": "Subaru_Outback",
          "name": "Outback",
          "niceName": "outback",
          "years": [
            {
              "id": 1171,
              "year": 2000
            },
            {
              "id": 100000227,
              "year": 2001
            },
            {
              "id": 3856,
              "year": 2002
            },
            {
              "id": 100502893,
              "year": 2003
            },
            {
              "id": 100503319,
              "year": 2004
            },
            {
              "id": 100504463,
              "year": 2005
            },
            {
              "id": 100505866,
              "year": 2006
            },
            {
              "id": 100519122,
              "year": 2007
            },
            {
              "id": 100522910,
              "year": 2008
            },
            {
              "id": 100525433,
              "year": 2009
            },
            {
              "id": 100527829,
              "year": 2010
            },
            {
              "id": 100532029,
              "year": 2011
            },
            {
              "id": 100538009,
              "year": 2012
            },
            {
              "id": 200418089,
              "year": 2013
            },
            {
              "id": 200471865,
              "year": 2014
            },
            {
              "id": 200693969,
              "year": 2015
            },
            {
              "id": 200738662,
              "year": 2016
            },
            {
              "id": 401646453,
              "year": 2017
            }
          ]
        },
        {
          "id": "Subaru_SVX",
          "name": "SVX",
          "niceName": "svx",
          "years": [
            {
              "id": 1462,
              "year": 1992
            },
            {
              "id": 1463,
              "year": 1993
            },
            {
              "id": 1464,
              "year": 1994
            },
            {
              "id": 1465,
              "year": 1995
            },
            {
              "id": 1318,
              "year": 1996
            },
            {
              "id": 581,
              "year": 1997
            }
          ]
        },
        {
          "id": "Subaru_Tribeca",
          "name": "Tribeca",
          "niceName": "tribeca",
          "years": [
            {
              "id": 100522809,
              "year": 2008
            },
            {
              "id": 100525549,
              "year": 2009
            },
            {
              "id": 100529890,
              "year": 2010
            },
            {
              "id": 100533349,
              "year": 2011
            },
            {
              "id": 100538569,
              "year": 2012
            },
            {
              "id": 200437724,
              "year": 2013
            },
            {
              "id": 200489091,
              "year": 2014
            }
          ]
        },
        {
          "id": "Subaru_WRX",
          "name": "WRX",
          "niceName": "wrx",
          "years": [
            {
              "id": 200485180,
              "year": 2015
            },
            {
              "id": 200733182,
              "year": 2016
            },
            {
              "id": 401645640,
              "year": 2017
            }
          ]
        },
        {
          "id": "Subaru_XT",
          "name": "XT",
          "niceName": "xt",
          "years": [
            {
              "id": 1320,
              "year": 1991
            }
          ]
        },
        {
          "id": "Subaru_XV_Crosstrek",
          "name": "XV Crosstrek",
          "niceName": "xv-crosstrek",
          "years": [
            {
              "id": 100537651,
              "year": 2013
            },
            {
              "id": 200465901,
              "year": 2014
            },
            {
              "id": 200721396,
              "year": 2015
            }
          ]
        }
      ]
    },
    {
      "id": 200001853,
      "name": "Suzuki",
      "niceName": "suzuki",
      "models": [
        {
          "id": "Suzuki_Aerio",
          "name": "Aerio",
          "niceName": "aerio",
          "years": [
            {
              "id": 100502602,
              "year": 2002
            },
            {
              "id": 100502894,
              "year": 2003
            },
            {
              "id": 100503632,
              "year": 2004
            },
            {
              "id": 100505214,
              "year": 2005
            },
            {
              "id": 100506721,
              "year": 2006
            },
            {
              "id": 100519442,
              "year": 2007
            }
          ]
        },
        {
          "id": "Suzuki_Equator",
          "name": "Equator",
          "niceName": "equator",
          "years": [
            {
              "id": 100525473,
              "year": 2009
            },
            {
              "id": 100530551,
              "year": 2010
            },
            {
              "id": 100534089,
              "year": 2011
            },
            {
              "id": 100538529,
              "year": 2012
            }
          ]
        },
        {
          "id": "Suzuki_Esteem",
          "name": "Esteem",
          "niceName": "esteem",
          "years": [
            {
              "id": 582,
              "year": 1995
            },
            {
              "id": 1321,
              "year": 1996
            },
            {
              "id": 1322,
              "year": 1997
            },
            {
              "id": 1323,
              "year": 1998
            },
            {
              "id": 1001,
              "year": 1999
            },
            {
              "id": 1034,
              "year": 2000
            },
            {
              "id": 100000234,
              "year": 2001
            },
            {
              "id": 100000505,
              "year": 2002
            }
          ]
        },
        {
          "id": "Suzuki_Forenza",
          "name": "Forenza",
          "niceName": "forenza",
          "years": [
            {
              "id": 100503169,
              "year": 2004
            },
            {
              "id": 100504462,
              "year": 2005
            },
            {
              "id": 100506723,
              "year": 2006
            },
            {
              "id": 100520107,
              "year": 2007
            },
            {
              "id": 100524413,
              "year": 2008
            }
          ]
        },
        {
          "id": "Suzuki_Grand_Vitara",
          "name": "Grand Vitara",
          "niceName": "grand-vitara",
          "years": [
            {
              "id": 3337,
              "year": 1999
            },
            {
              "id": 1079,
              "year": 2000
            },
            {
              "id": 100000231,
              "year": 2001
            },
            {
              "id": 100000507,
              "year": 2002
            },
            {
              "id": 100502896,
              "year": 2003
            },
            {
              "id": 100503639,
              "year": 2004
            },
            {
              "id": 100505173,
              "year": 2005
            },
            {
              "id": 100506719,
              "year": 2006
            },
            {
              "id": 100520106,
              "year": 2007
            },
            {
              "id": 100524411,
              "year": 2008
            },
            {
              "id": 100526629,
              "year": 2009
            },
            {
              "id": 100530550,
              "year": 2010
            },
            {
              "id": 100534050,
              "year": 2011
            },
            {
              "id": 100538729,
              "year": 2012
            },
            {
              "id": 200438168,
              "year": 2013
            }
          ]
        },
        {
          "id": "Suzuki_Kizashi",
          "name": "Kizashi",
          "niceName": "kizashi",
          "years": [
            {
              "id": 100525112,
              "year": 2010
            },
            {
              "id": 100531651,
              "year": 2011
            },
            {
              "id": 100538769,
              "year": 2012
            },
            {
              "id": 200440171,
              "year": 2013
            }
          ]
        },
        {
          "id": "Suzuki_Reno",
          "name": "Reno",
          "niceName": "reno",
          "years": [
            {
              "id": 100503870,
              "year": 2005
            },
            {
              "id": 100506722,
              "year": 2006
            },
            {
              "id": 100519223,
              "year": 2007
            },
            {
              "id": 100524412,
              "year": 2008
            }
          ]
        },
        {
          "id": "Suzuki_SX4",
          "name": "SX4",
          "niceName": "sx4",
          "years": [
            {
              "id": 100507260,
              "year": 2007
            },
            {
              "id": 100524230,
              "year": 2008
            },
            {
              "id": 100525691,
              "year": 2009
            },
            {
              "id": 100530549,
              "year": 2010
            },
            {
              "id": 100534049,
              "year": 2011
            },
            {
              "id": 100538309,
              "year": 2012
            },
            {
              "id": 200439066,
              "year": 2013
            }
          ]
        },
        {
          "id": "Suzuki_Samurai",
          "name": "Samurai",
          "niceName": "samurai",
          "years": [
            {
              "id": 1324,
              "year": 1990
            },
            {
              "id": 1325,
              "year": 1991
            },
            {
              "id": 584,
              "year": 1992
            },
            {
              "id": 1326,
              "year": 1993
            },
            {
              "id": 1327,
              "year": 1994
            },
            {
              "id": 1328,
              "year": 1995
            }
          ]
        },
        {
          "id": "Suzuki_Sidekick",
          "name": "Sidekick",
          "niceName": "sidekick",
          "years": [
            {
              "id": 1329,
              "year": 1990
            },
            {
              "id": 1330,
              "year": 1991
            },
            {
              "id": 1331,
              "year": 1992
            },
            {
              "id": 1332,
              "year": 1993
            },
            {
              "id": 1333,
              "year": 1994
            },
            {
              "id": 1334,
              "year": 1995
            },
            {
              "id": 1335,
              "year": 1996
            },
            {
              "id": 1336,
              "year": 1997
            },
            {
              "id": 586,
              "year": 1998
            }
          ]
        },
        {
          "id": "Suzuki_Swift",
          "name": "Swift",
          "niceName": "swift",
          "years": [
            {
              "id": 1338,
              "year": 1990
            },
            {
              "id": 587,
              "year": 1991
            },
            {
              "id": 1339,
              "year": 1992
            },
            {
              "id": 1340,
              "year": 1993
            },
            {
              "id": 588,
              "year": 1994
            },
            {
              "id": 1341,
              "year": 1995
            },
            {
              "id": 1342,
              "year": 1996
            },
            {
              "id": 589,
              "year": 1997
            },
            {
              "id": 1343,
              "year": 1998
            },
            {
              "id": 3338,
              "year": 1999
            },
            {
              "id": 1169,
              "year": 2000
            },
            {
              "id": 100000235,
              "year": 2001
            }
          ]
        },
        {
          "id": "Suzuki_Verona",
          "name": "Verona",
          "niceName": "verona",
          "years": [
            {
              "id": 100503168,
              "year": 2004
            },
            {
              "id": 100505174,
              "year": 2005
            },
            {
              "id": 100506724,
              "year": 2006
            }
          ]
        },
        {
          "id": "Suzuki_Vitara",
          "name": "Vitara",
          "niceName": "vitara",
          "years": [
            {
              "id": 1002,
              "year": 1999
            },
            {
              "id": 374,
              "year": 2000
            },
            {
              "id": 100000232,
              "year": 2001
            },
            {
              "id": 100000506,
              "year": 2002
            },
            {
              "id": 100502897,
              "year": 2003
            },
            {
              "id": 100503640,
              "year": 2004
            }
          ]
        },
        {
          "id": "Suzuki_X_90",
          "name": "X-90",
          "niceName": "x-90",
          "years": [
            {
              "id": 1344,
              "year": 1996
            },
            {
              "id": 1345,
              "year": 1997
            },
            {
              "id": 590,
              "year": 1998
            }
          ]
        },
        {
          "id": "Suzuki_XL_7",
          "name": "XL-7",
          "niceName": "xl-7",
          "years": [
            {
              "id": 100000233,
              "year": 2001
            },
            {
              "id": 100000508,
              "year": 2002
            },
            {
              "id": 100502898,
              "year": 2003
            },
            {
              "id": 100503638,
              "year": 2004
            },
            {
              "id": 100505215,
              "year": 2005
            },
            {
              "id": 100506720,
              "year": 2006
            }
          ]
        },
        {
          "id": "Suzuki_XL7",
          "name": "XL7",
          "niceName": "xl7",
          "years": [
            {
              "id": 100507723,
              "year": 2007
            },
            {
              "id": 100524409,
              "year": 2008
            },
            {
              "id": 100526809,
              "year": 2009
            }
          ]
        }
      ]
    },
    {
      "id": 200018920,
      "name": "Tesla",
      "niceName": "tesla",
      "models": [
        {
          "id": "Tesla_Model_3",
          "name": "Model 3",
          "niceName": "model-3",
          "years": [
            {
              "id": 401630289,
              "year": 2018
            }
          ]
        },
        {
          "id": "Tesla_Model_S",
          "name": "Model S",
          "niceName": "model-s",
          "years": [
            {
              "id": 100525710,
              "year": 2012
            },
            {
              "id": 100536530,
              "year": 2013
            },
            {
              "id": 200690691,
              "year": 2014
            },
            {
              "id": 200725282,
              "year": 2015
            },
            {
              "id": 401632873,
              "year": 2016
            }
          ]
        },
        {
          "id": "Tesla_Model_X",
          "name": "Model X",
          "niceName": "model-x",
          "years": [
            {
              "id": 200720386,
              "year": 2016
            }
          ]
        },
        {
          "id": "Tesla_Roadster",
          "name": "Roadster",
          "niceName": "roadster",
          "years": [
            {
              "id": 100525149,
              "year": 2008
            },
            {
              "id": 100522466,
              "year": 2010
            },
            {
              "id": 100532769,
              "year": 2011
            }
          ]
        }
      ]
    },
    {
      "id": 200003381,
      "name": "Toyota",
      "niceName": "toyota",
      "models": [
        {
          "id": "Toyota_4Runner",
          "name": "4Runner",
          "niceName": "4runner",
          "years": [
            {
              "id": 591,
              "year": 1990
            },
            {
              "id": 1347,
              "year": 1991
            },
            {
              "id": 1348,
              "year": 1992
            },
            {
              "id": 1349,
              "year": 1993
            },
            {
              "id": 1350,
              "year": 1994
            },
            {
              "id": 445,
              "year": 1997
            },
            {
              "id": 1353,
              "year": 1998
            },
            {
              "id": 3339,
              "year": 1999
            },
            {
              "id": 1050,
              "year": 2000
            },
            {
              "id": 100000246,
              "year": 2001
            },
            {
              "id": 100000385,
              "year": 2002
            },
            {
              "id": 100502674,
              "year": 2003
            },
            {
              "id": 100503599,
              "year": 2004
            },
            {
              "id": 100504842,
              "year": 2005
            },
            {
              "id": 100506539,
              "year": 2006
            },
            {
              "id": 100516991,
              "year": 2007
            },
            {
              "id": 100523580,
              "year": 2008
            },
            {
              "id": 100525885,
              "year": 2009
            },
            {
              "id": 100528869,
              "year": 2010
            },
            {
              "id": 100532892,
              "year": 2011
            },
            {
              "id": 100538849,
              "year": 2012
            },
            {
              "id": 200438196,
              "year": 2013
            },
            {
              "id": 200470521,
              "year": 2014
            },
            {
              "id": 200710304,
              "year": 2015
            },
            {
              "id": 200747158,
              "year": 2016
            }
          ]
        },
        {
          "id": "Toyota_86",
          "name": "86",
          "niceName": "86",
          "years": [
            {
              "id": 401628160,
              "year": 2017
            }
          ]
        },
        {
          "id": "Toyota_Avalon",
          "name": "Avalon",
          "niceName": "avalon",
          "years": [
            {
              "id": 1354,
              "year": 1995
            },
            {
              "id": 446,
              "year": 1996
            },
            {
              "id": 3340,
              "year": 1999
            },
            {
              "id": 1074,
              "year": 2000
            },
            {
              "id": 100000243,
              "year": 2001
            },
            {
              "id": 100000386,
              "year": 2002
            },
            {
              "id": 100502899,
              "year": 2003
            },
            {
              "id": 100503276,
              "year": 2004
            },
            {
              "id": 100505486,
              "year": 2005
            },
            {
              "id": 100504564,
              "year": 2006
            },
            {
              "id": 100516986,
              "year": 2007
            },
            {
              "id": 100523574,
              "year": 2008
            },
            {
              "id": 100525880,
              "year": 2009
            },
            {
              "id": 100529109,
              "year": 2010
            },
            {
              "id": 100530929,
              "year": 2011
            },
            {
              "id": 100538869,
              "year": 2012
            },
            {
              "id": 200418086,
              "year": 2013
            },
            {
              "id": 200493856,
              "year": 2014
            },
            {
              "id": 200718729,
              "year": 2015
            },
            {
              "id": 401583408,
              "year": 2016
            }
          ]
        },
        {
          "id": "Toyota_Avalon_Hybrid",
          "name": "Avalon Hybrid",
          "niceName": "avalon-hybrid",
          "years": [
            {
              "id": 200442095,
              "year": 2013
            },
            {
              "id": 200493834,
              "year": 2014
            },
            {
              "id": 200718730,
              "year": 2015
            },
            {
              "id": 401583409,
              "year": 2016
            },
            {
              "id": 401678607,
              "year": 2017
            }
          ]
        },
        {
          "id": "Toyota_C_HR",
          "name": "C-HR",
          "niceName": "c-hr",
          "years": [
            {
              "id": 401628172,
              "year": 2018
            }
          ]
        },
        {
          "id": "Toyota_Camry",
          "name": "Camry",
          "niceName": "camry",
          "years": [
            {
              "id": 1357,
              "year": 1990
            },
            {
              "id": 1358,
              "year": 1991
            },
            {
              "id": 1359,
              "year": 1992
            },
            {
              "id": 448,
              "year": 1993
            },
            {
              "id": 449,
              "year": 1996
            },
            {
              "id": 1363,
              "year": 1998
            },
            {
              "id": 1003,
              "year": 1999
            },
            {
              "id": 1138,
              "year": 2000
            },
            {
              "id": 100000245,
              "year": 2001
            },
            {
              "id": 100000387,
              "year": 2002
            },
            {
              "id": 100502900,
              "year": 2003
            },
            {
              "id": 100503563,
              "year": 2004
            },
            {
              "id": 100504323,
              "year": 2005
            },
            {
              "id": 100506286,
              "year": 2006
            },
            {
              "id": 100506010,
              "year": 2007
            },
            {
              "id": 100523570,
              "year": 2008
            },
            {
              "id": 100524711,
              "year": 2009
            },
            {
              "id": 100526470,
              "year": 2010
            },
            {
              "id": 100531189,
              "year": 2011
            },
            {
              "id": 100532209,
              "year": 2012
            },
            {
              "id": 200444380,
              "year": 2013
            },
            {
              "id": 200485954,
              "year": 2014
            },
            {
              "id": 200693837,
              "year": 2015
            },
            {
              "id": 401647948,
              "year": 2017
            }
          ]
        },
        {
          "id": "Toyota_Camry_Hybrid",
          "name": "Camry Hybrid",
          "niceName": "camry-hybrid",
          "years": [
            {
              "id": 100512887,
              "year": 2007
            },
            {
              "id": 100523584,
              "year": 2008
            },
            {
              "id": 100524729,
              "year": 2009
            },
            {
              "id": 100527129,
              "year": 2010
            },
            {
              "id": 100531190,
              "year": 2011
            },
            {
              "id": 100536569,
              "year": 2012
            },
            {
              "id": 200444381,
              "year": 2013
            },
            {
              "id": 200485955,
              "year": 2014
            },
            {
              "id": 200711464,
              "year": 2015
            },
            {
              "id": 200747124,
              "year": 2016
            },
            {
              "id": 401647949,
              "year": 2017
            }
          ]
        },
        {
          "id": "Toyota_Camry_Solara",
          "name": "Camry Solara",
          "niceName": "camry-solara",
          "years": [
            {
              "id": 3341,
              "year": 1999
            },
            {
              "id": 1139,
              "year": 2000
            },
            {
              "id": 100000244,
              "year": 2001
            },
            {
              "id": 100000388,
              "year": 2002
            },
            {
              "id": 100502901,
              "year": 2003
            },
            {
              "id": 100503269,
              "year": 2004
            },
            {
              "id": 100504726,
              "year": 2005
            },
            {
              "id": 100505647,
              "year": 2006
            },
            {
              "id": 100512979,
              "year": 2007
            },
            {
              "id": 100523571,
              "year": 2008
            }
          ]
        },
        {
          "id": "Toyota_Celica",
          "name": "Celica",
          "niceName": "celica",
          "years": [
            {
              "id": 1365,
              "year": 1990
            },
            {
              "id": 1366,
              "year": 1991
            },
            {
              "id": 1367,
              "year": 1992
            },
            {
              "id": 1368,
              "year": 1993
            },
            {
              "id": 1369,
              "year": 1994
            },
            {
              "id": 1370,
              "year": 1995
            },
            {
              "id": 450,
              "year": 1996
            },
            {
              "id": 1371,
              "year": 1997
            },
            {
              "id": 1372,
              "year": 1998
            },
            {
              "id": 3342,
              "year": 1999
            },
            {
              "id": 1075,
              "year": 2000
            },
            {
              "id": 100000251,
              "year": 2001
            },
            {
              "id": 100000389,
              "year": 2002
            },
            {
              "id": 100502902,
              "year": 2003
            },
            {
              "id": 100503598,
              "year": 2004
            },
            {
              "id": 100504727,
              "year": 2005
            }
          ]
        },
        {
          "id": "Toyota_Corolla",
          "name": "Corolla",
          "niceName": "corolla",
          "years": [
            {
              "id": 1373,
              "year": 1990
            },
            {
              "id": 1374,
              "year": 1991
            },
            {
              "id": 1375,
              "year": 1992
            },
            {
              "id": 452,
              "year": 1993
            },
            {
              "id": 1376,
              "year": 1994
            },
            {
              "id": 1377,
              "year": 1995
            },
            {
              "id": 453,
              "year": 1996
            },
            {
              "id": 1004,
              "year": 1999
            },
            {
              "id": 516,
              "year": 2000
            },
            {
              "id": 100000249,
              "year": 2001
            },
            {
              "id": 100000347,
              "year": 2002
            },
            {
              "id": 100002584,
              "year": 2003
            },
            {
              "id": 100503275,
              "year": 2004
            },
            {
              "id": 100504324,
              "year": 2005
            },
            {
              "id": 100506346,
              "year": 2006
            },
            {
              "id": 100516985,
              "year": 2007
            },
            {
              "id": 100519101,
              "year": 2008
            },
            {
              "id": 100523349,
              "year": 2009
            },
            {
              "id": 100526471,
              "year": 2010
            },
            {
              "id": 100533929,
              "year": 2011
            },
            {
              "id": 100539156,
              "year": 2012
            },
            {
              "id": 200431094,
              "year": 2013
            },
            {
              "id": 200465937,
              "year": 2014
            },
            {
              "id": 200707275,
              "year": 2015
            },
            {
              "id": 200746612,
              "year": 2016
            },
            {
              "id": 401668008,
              "year": 2017
            }
          ]
        },
        {
          "id": "Toyota_Corolla_iM",
          "name": "Corolla iM",
          "niceName": "corolla-im",
          "years": [
            {
              "id": 401628158,
              "year": 2017
            }
          ]
        },
        {
          "id": "Toyota_Cressida",
          "name": "Cressida",
          "niceName": "cressida",
          "years": [
            {
              "id": 1380,
              "year": 1990
            },
            {
              "id": 1381,
              "year": 1991
            },
            {
              "id": 1382,
              "year": 1992
            }
          ]
        },
        {
          "id": "Toyota_ECHO",
          "name": "ECHO",
          "niceName": "echo",
          "years": [
            {
              "id": 1076,
              "year": 2000
            },
            {
              "id": 100000250,
              "year": 2001
            },
            {
              "id": 100000391,
              "year": 2002
            },
            {
              "id": 100502903,
              "year": 2003
            },
            {
              "id": 100503562,
              "year": 2004
            },
            {
              "id": 100504502,
              "year": 2005
            }
          ]
        },
        {
          "id": "Toyota_FJ_Cruiser",
          "name": "FJ Cruiser",
          "niceName": "fj-cruiser",
          "years": [
            {
              "id": 100505527,
              "year": 2007
            },
            {
              "id": 100523573,
              "year": 2008
            },
            {
              "id": 100525882,
              "year": 2009
            },
            {
              "id": 100529049,
              "year": 2010
            },
            {
              "id": 100533472,
              "year": 2011
            },
            {
              "id": 100536509,
              "year": 2012
            },
            {
              "id": 200438197,
              "year": 2013
            },
            {
              "id": 200490776,
              "year": 2014
            }
          ]
        },
        {
          "id": "Toyota_Highlander",
          "name": "Highlander",
          "niceName": "highlander",
          "years": [
            {
              "id": 100000242,
              "year": 2001
            },
            {
              "id": 100000392,
              "year": 2002
            },
            {
              "id": 100502904,
              "year": 2003
            },
            {
              "id": 100503554,
              "year": 2004
            },
            {
              "id": 100503866,
              "year": 2005
            },
            {
              "id": 100505224,
              "year": 2006
            },
            {
              "id": 100519288,
              "year": 2007
            },
            {
              "id": 100505838,
              "year": 2008
            },
            {
              "id": 100525883,
              "year": 2009
            },
            {
              "id": 100530049,
              "year": 2010
            },
            {
              "id": 100532890,
              "year": 2011
            },
            {
              "id": 100536510,
              "year": 2012
            },
            {
              "id": 200436557,
              "year": 2013
            },
            {
              "id": 200465938,
              "year": 2014
            },
            {
              "id": 200706712,
              "year": 2015
            },
            {
              "id": 401596890,
              "year": 2016
            },
            {
              "id": 401633259,
              "year": 2017
            }
          ]
        },
        {
          "id": "Toyota_Highlander_Hybrid",
          "name": "Highlander Hybrid",
          "niceName": "highlander-hybrid",
          "years": [
            {
              "id": 100505728,
              "year": 2006
            },
            {
              "id": 100512888,
              "year": 2007
            },
            {
              "id": 100522671,
              "year": 2008
            },
            {
              "id": 100525884,
              "year": 2009
            },
            {
              "id": 100530050,
              "year": 2010
            },
            {
              "id": 100533093,
              "year": 2011
            },
            {
              "id": 100536511,
              "year": 2012
            },
            {
              "id": 200436558,
              "year": 2013
            },
            {
              "id": 200498461,
              "year": 2014
            },
            {
              "id": 200708166,
              "year": 2015
            },
            {
              "id": 401596891,
              "year": 2016
            }
          ]
        },
        {
          "id": "Toyota_Land_Cruiser",
          "name": "Land Cruiser",
          "niceName": "land-cruiser",
          "years": [
            {
              "id": 1246,
              "year": 1990
            },
            {
              "id": 1247,
              "year": 1991
            },
            {
              "id": 1248,
              "year": 1992
            },
            {
              "id": 456,
              "year": 1993
            },
            {
              "id": 1249,
              "year": 1994
            },
            {
              "id": 1250,
              "year": 1995
            },
            {
              "id": 457,
              "year": 1996
            },
            {
              "id": 1251,
              "year": 1997
            },
            {
              "id": 1252,
              "year": 1998
            },
            {
              "id": 3343,
              "year": 1999
            },
            {
              "id": 1041,
              "year": 2000
            },
            {
              "id": 100000247,
              "year": 2001
            },
            {
              "id": 100000393,
              "year": 2002
            },
            {
              "id": 100502905,
              "year": 2003
            },
            {
              "id": 100503600,
              "year": 2004
            },
            {
              "id": 100504728,
              "year": 2005
            },
            {
              "id": 100505945,
              "year": 2006
            },
            {
              "id": 100516989,
              "year": 2007
            },
            {
              "id": 100522596,
              "year": 2008
            },
            {
              "id": 100525881,
              "year": 2009
            },
            {
              "id": 100529192,
              "year": 2010
            },
            {
              "id": 100533209,
              "year": 2011
            },
            {
              "id": 100539349,
              "year": 2013
            },
            {
              "id": 200494245,
              "year": 2014
            },
            {
              "id": 200710728,
              "year": 2015
            },
            {
              "id": 401581941,
              "year": 2016
            },
            {
              "id": 401659091,
              "year": 2017
            }
          ]
        },
        {
          "id": "Toyota_MR2",
          "name": "MR2",
          "niceName": "mr2",
          "years": [
            {
              "id": 1254,
              "year": 1991
            },
            {
              "id": 1255,
              "year": 1992
            },
            {
              "id": 1256,
              "year": 1993
            },
            {
              "id": 1257,
              "year": 1994
            },
            {
              "id": 1258,
              "year": 1995
            }
          ]
        },
        {
          "id": "Toyota_MR2_Spyder",
          "name": "MR2 Spyder",
          "niceName": "mr2-spyder",
          "years": [
            {
              "id": 439,
              "year": 2000
            },
            {
              "id": 100000248,
              "year": 2001
            },
            {
              "id": 100000394,
              "year": 2002
            },
            {
              "id": 100502906,
              "year": 2003
            },
            {
              "id": 100503654,
              "year": 2004
            },
            {
              "id": 100504729,
              "year": 2005
            }
          ]
        },
        {
          "id": "Toyota_Matrix",
          "name": "Matrix",
          "niceName": "matrix",
          "years": [
            {
              "id": 100502582,
              "year": 2003
            },
            {
              "id": 100503164,
              "year": 2004
            },
            {
              "id": 100504325,
              "year": 2005
            },
            {
              "id": 100506347,
              "year": 2006
            },
            {
              "id": 100516987,
              "year": 2007
            },
            {
              "id": 100520127,
              "year": 2008
            },
            {
              "id": 100523350,
              "year": 2009
            },
            {
              "id": 100526472,
              "year": 2010
            },
            {
              "id": 100533949,
              "year": 2011
            },
            {
              "id": 100539154,
              "year": 2012
            },
            {
              "id": 200431210,
              "year": 2013
            }
          ]
        },
        {
          "id": "Toyota_Mirai",
          "name": "Mirai",
          "niceName": "mirai",
          "years": [
            {
              "id": 200711329,
              "year": 2016
            }
          ]
        },
        {
          "id": "Toyota_Paseo",
          "name": "Paseo",
          "niceName": "paseo",
          "years": [
            {
              "id": 1262,
              "year": 1992
            },
            {
              "id": 1263,
              "year": 1993
            },
            {
              "id": 459,
              "year": 1994
            },
            {
              "id": 1264,
              "year": 1995
            },
            {
              "id": 1265,
              "year": 1996
            }
          ]
        },
        {
          "id": "Toyota_Pickup",
          "name": "Pickup",
          "niceName": "pickup",
          "years": [
            {
              "id": 1384,
              "year": 1990
            },
            {
              "id": 1385,
              "year": 1991
            },
            {
              "id": 1386,
              "year": 1992
            },
            {
              "id": 1387,
              "year": 1993
            },
            {
              "id": 1388,
              "year": 1994
            },
            {
              "id": 1389,
              "year": 1995
            }
          ]
        },
        {
          "id": "Toyota_Previa",
          "name": "Previa",
          "niceName": "previa",
          "years": [
            {
              "id": 1266,
              "year": 1991
            },
            {
              "id": 1267,
              "year": 1992
            },
            {
              "id": 461,
              "year": 1993
            },
            {
              "id": 1268,
              "year": 1994
            },
            {
              "id": 1269,
              "year": 1995
            },
            {
              "id": 1270,
              "year": 1996
            }
          ]
        },
        {
          "id": "Toyota_Prius",
          "name": "Prius",
          "niceName": "prius",
          "years": [
            {
              "id": 100000241,
              "year": 2001
            },
            {
              "id": 100000363,
              "year": 2002
            },
            {
              "id": 100502907,
              "year": 2003
            },
            {
              "id": 100503270,
              "year": 2004
            },
            {
              "id": 100504983,
              "year": 2005
            },
            {
              "id": 100507080,
              "year": 2006
            },
            {
              "id": 100516993,
              "year": 2007
            },
            {
              "id": 100523577,
              "year": 2008
            },
            {
              "id": 100525809,
              "year": 2009
            },
            {
              "id": 100523694,
              "year": 2010
            },
            {
              "id": 100533450,
              "year": 2011
            },
            {
              "id": 100534149,
              "year": 2012
            },
            {
              "id": 200440599,
              "year": 2013
            },
            {
              "id": 200492958,
              "year": 2014
            },
            {
              "id": 200474302,
              "year": 2015
            },
            {
              "id": 200706801,
              "year": 2016
            },
            {
              "id": 401658851,
              "year": 2017
            }
          ]
        },
        {
          "id": "Toyota_Prius_Plug_in",
          "name": "Prius Plug-in",
          "niceName": "prius-plug-in",
          "years": [
            {
              "id": 100534969,
              "year": 2012
            },
            {
              "id": 200441422,
              "year": 2013
            },
            {
              "id": 200495857,
              "year": 2014
            },
            {
              "id": 200710957,
              "year": 2015
            }
          ]
        },
        {
          "id": "Toyota_Prius_Prime",
          "name": "Prius Prime",
          "niceName": "prius-prime",
          "years": [
            {
              "id": 401649189,
              "year": 2017
            }
          ]
        },
        {
          "id": "Toyota_Prius_c",
          "name": "Prius c",
          "niceName": "prius-c",
          "years": [
            {
              "id": 100535709,
              "year": 2012
            },
            {
              "id": 200444382,
              "year": 2013
            },
            {
              "id": 200496060,
              "year": 2014
            },
            {
              "id": 200722835,
              "year": 2015
            },
            {
              "id": 401597745,
              "year": 2016
            }
          ]
        },
        {
          "id": "Toyota_Prius_v",
          "name": "Prius v",
          "niceName": "prius-v",
          "years": [
            {
              "id": 100534169,
              "year": 2012
            },
            {
              "id": 200440735,
              "year": 2013
            },
            {
              "id": 200490605,
              "year": 2014
            },
            {
              "id": 200722020,
              "year": 2015
            },
            {
              "id": 200748018,
              "year": 2016
            },
            {
              "id": 401641255,
              "year": 2017
            }
          ]
        },
        {
          "id": "Toyota_RAV4",
          "name": "RAV4",
          "niceName": "rav4",
          "years": [
            {
              "id": 1272,
              "year": 1996
            },
            {
              "id": 1273,
              "year": 1997
            },
            {
              "id": 462,
              "year": 1998
            },
            {
              "id": 3344,
              "year": 1999
            },
            {
              "id": 1049,
              "year": 2000
            },
            {
              "id": 100000240,
              "year": 2001
            },
            {
              "id": 100000395,
              "year": 2002
            },
            {
              "id": 100502908,
              "year": 2003
            },
            {
              "id": 100503642,
              "year": 2004
            },
            {
              "id": 100504730,
              "year": 2005
            },
            {
              "id": 100506642,
              "year": 2006
            },
            {
              "id": 100506146,
              "year": 2007
            },
            {
              "id": 100523579,
              "year": 2008
            },
            {
              "id": 100525829,
              "year": 2009
            },
            {
              "id": 100529110,
              "year": 2010
            },
            {
              "id": 100532909,
              "year": 2011
            },
            {
              "id": 100529577,
              "year": 2012
            },
            {
              "id": 100539236,
              "year": 2013
            },
            {
              "id": 200433886,
              "year": 2014
            },
            {
              "id": 200710542,
              "year": 2015
            },
            {
              "id": 200731829,
              "year": 2016
            },
            {
              "id": 401658883,
              "year": 2017
            }
          ]
        },
        {
          "id": "Toyota_RAV4_EV",
          "name": "RAV4 EV",
          "niceName": "rav4-ev",
          "years": [
            {
              "id": 200466970,
              "year": 2012
            },
            {
              "id": 200466971,
              "year": 2013
            },
            {
              "id": 200495460,
              "year": 2014
            }
          ]
        },
        {
          "id": "Toyota_RAV4_Hybrid",
          "name": "RAV4 Hybrid",
          "niceName": "rav4-hybrid",
          "years": [
            {
              "id": 401598559,
              "year": 2016
            },
            {
              "id": 401658945,
              "year": 2017
            }
          ]
        },
        {
          "id": "Toyota_Sequoia",
          "name": "Sequoia",
          "niceName": "sequoia",
          "years": [
            {
              "id": 100000236,
              "year": 2001
            },
            {
              "id": 100000396,
              "year": 2002
            },
            {
              "id": 100502909,
              "year": 2003
            },
            {
              "id": 100503597,
              "year": 2004
            },
            {
              "id": 100504731,
              "year": 2005
            },
            {
              "id": 100506345,
              "year": 2006
            },
            {
              "id": 100516988,
              "year": 2007
            },
            {
              "id": 100520126,
              "year": 2008
            },
            {
              "id": 100527789,
              "year": 2010
            },
            {
              "id": 100533371,
              "year": 2011
            },
            {
              "id": 100536771,
              "year": 2012
            },
            {
              "id": 200442349,
              "year": 2013
            },
            {
              "id": 200486611,
              "year": 2014
            },
            {
              "id": 200710307,
              "year": 2015
            },
            {
              "id": 401566717,
              "year": 2016
            }
          ]
        },
        {
          "id": "Toyota_Sienna",
          "name": "Sienna",
          "niceName": "sienna",
          "years": [
            {
              "id": 1274,
              "year": 1998
            },
            {
              "id": 1005,
              "year": 1999
            },
            {
              "id": 1114,
              "year": 2000
            },
            {
              "id": 100000238,
              "year": 2001
            },
            {
              "id": 100000398,
              "year": 2002
            },
            {
              "id": 100502675,
              "year": 2003
            },
            {
              "id": 100502952,
              "year": 2004
            },
            {
              "id": 100504982,
              "year": 2005
            },
            {
              "id": 100506486,
              "year": 2006
            },
            {
              "id": 100516990,
              "year": 2007
            },
            {
              "id": 100523576,
              "year": 2008
            },
            {
              "id": 100525629,
              "year": 2009
            },
            {
              "id": 100528009,
              "year": 2010
            },
            {
              "id": 100530529,
              "year": 2011
            },
            {
              "id": 100536770,
              "year": 2012
            },
            {
              "id": 200435873,
              "year": 2013
            },
            {
              "id": 200489889,
              "year": 2014
            },
            {
              "id": 200705264,
              "year": 2015
            },
            {
              "id": 401611598,
              "year": 2016
            },
            {
              "id": 401659111,
              "year": 2017
            }
          ]
        },
        {
          "id": "Toyota_Supra",
          "name": "Supra",
          "niceName": "supra",
          "years": [
            {
              "id": 1277,
              "year": 1992
            },
            {
              "id": 464,
              "year": 1993
            },
            {
              "id": 1278,
              "year": 1994
            },
            {
              "id": 1279,
              "year": 1995
            },
            {
              "id": 1280,
              "year": 1996
            },
            {
              "id": 465,
              "year": 1997
            }
          ]
        },
        {
          "id": "Toyota_T100",
          "name": "T100",
          "niceName": "t100",
          "years": [
            {
              "id": 1282,
              "year": 1993
            },
            {
              "id": 466,
              "year": 1994
            },
            {
              "id": 1283,
              "year": 1995
            },
            {
              "id": 1284,
              "year": 1996
            },
            {
              "id": 467,
              "year": 1997
            },
            {
              "id": 1285,
              "year": 1998
            }
          ]
        },
        {
          "id": "Toyota_Tacoma",
          "name": "Tacoma",
          "niceName": "tacoma",
          "years": [
            {
              "id": 1286,
              "year": 1995
            },
            {
              "id": 1287,
              "year": 1996
            },
            {
              "id": 1288,
              "year": 1997
            },
            {
              "id": 1289,
              "year": 1998
            },
            {
              "id": 3345,
              "year": 1999
            },
            {
              "id": 1042,
              "year": 2000
            },
            {
              "id": 100000237,
              "year": 2001
            },
            {
              "id": 100000399,
              "year": 2002
            },
            {
              "id": 100502910,
              "year": 2003
            },
            {
              "id": 100503633,
              "year": 2004
            },
            {
              "id": 100503155,
              "year": 2005
            },
            {
              "id": 100506540,
              "year": 2006
            },
            {
              "id": 100516992,
              "year": 2007
            },
            {
              "id": 100523575,
              "year": 2008
            },
            {
              "id": 100525230,
              "year": 2009
            },
            {
              "id": 100529089,
              "year": 2010
            },
            {
              "id": 100532371,
              "year": 2011
            },
            {
              "id": 100529578,
              "year": 2012
            },
            {
              "id": 200431825,
              "year": 2013
            },
            {
              "id": 200491998,
              "year": 2014
            },
            {
              "id": 200708472,
              "year": 2015
            },
            {
              "id": 200722298,
              "year": 2016
            },
            {
              "id": 401659110,
              "year": 2017
            }
          ]
        },
        {
          "id": "Toyota_Tercel",
          "name": "Tercel",
          "niceName": "tercel",
          "years": [
            {
              "id": 1291,
              "year": 1990
            },
            {
              "id": 1292,
              "year": 1991
            },
            {
              "id": 1293,
              "year": 1992
            },
            {
              "id": 468,
              "year": 1993
            },
            {
              "id": 1294,
              "year": 1994
            },
            {
              "id": 1295,
              "year": 1995
            },
            {
              "id": 469,
              "year": 1996
            },
            {
              "id": 1297,
              "year": 1998
            }
          ]
        },
        {
          "id": "Toyota_Tundra",
          "name": "Tundra",
          "niceName": "tundra",
          "years": [
            {
              "id": 1237,
              "year": 2000
            },
            {
              "id": 100000239,
              "year": 2001
            },
            {
              "id": 100000400,
              "year": 2002
            },
            {
              "id": 100502911,
              "year": 2003
            },
            {
              "id": 100503103,
              "year": 2004
            },
            {
              "id": 100504662,
              "year": 2005
            },
            {
              "id": 100506348,
              "year": 2006
            },
            {
              "id": 100504204,
              "year": 2007
            },
            {
              "id": 100523582,
              "year": 2008
            },
            {
              "id": 100526474,
              "year": 2009
            },
            {
              "id": 100527869,
              "year": 2010
            },
            {
              "id": 100533250,
              "year": 2011
            },
            {
              "id": 100536789,
              "year": 2012
            },
            {
              "id": 200438609,
              "year": 2013
            },
            {
              "id": 200466835,
              "year": 2014
            },
            {
              "id": 200711788,
              "year": 2015
            },
            {
              "id": 200771502,
              "year": 2016
            },
            {
              "id": 401671449,
              "year": 2017
            }
          ]
        },
        {
          "id": "Toyota_Venza",
          "name": "Venza",
          "niceName": "venza",
          "years": [
            {
              "id": 100524749,
              "year": 2009
            },
            {
              "id": 100530349,
              "year": 2010
            },
            {
              "id": 100533473,
              "year": 2011
            },
            {
              "id": 100539150,
              "year": 2012
            },
            {
              "id": 200422449,
              "year": 2013
            },
            {
              "id": 200488728,
              "year": 2014
            },
            {
              "id": 200708942,
              "year": 2015
            }
          ]
        },
        {
          "id": "Toyota_Yaris",
          "name": "Yaris",
          "niceName": "yaris",
          "years": [
            {
              "id": 100506819,
              "year": 2007
            },
            {
              "id": 100523578,
              "year": 2008
            },
            {
              "id": 100526309,
              "year": 2009
            },
            {
              "id": 100529009,
              "year": 2010
            },
            {
              "id": 100533012,
              "year": 2011
            },
            {
              "id": 100536589,
              "year": 2012
            },
            {
              "id": 200442447,
              "year": 2013
            },
            {
              "id": 200482940,
              "year": 2014
            },
            {
              "id": 200705964,
              "year": 2015
            },
            {
              "id": 401598558,
              "year": 2016
            },
            {
              "id": 401659058,
              "year": 2017
            }
          ]
        },
        {
          "id": "Toyota_Yaris_iA",
          "name": "Yaris iA",
          "niceName": "yaris-ia",
          "years": [
            {
              "id": 401628159,
              "year": 2017
            }
          ]
        }
      ]
    },
    {
      "id": 200000238,
      "name": "Volkswagen",
      "niceName": "volkswagen",
      "models": [
        {
          "id": "Volkswagen_Beetle",
          "name": "Beetle",
          "niceName": "beetle",
          "years": [
            {
              "id": 100531913,
              "year": 2012
            },
            {
              "id": 100536309,
              "year": 2013
            },
            {
              "id": 200482948,
              "year": 2014
            },
            {
              "id": 200713844,
              "year": 2015
            },
            {
              "id": 401575740,
              "year": 2016
            }
          ]
        },
        {
          "id": "Volkswagen_Beetle_Convertible",
          "name": "Beetle Convertible",
          "niceName": "beetle-convertible",
          "years": [
            {
              "id": 200443618,
              "year": 2013
            },
            {
              "id": 200482949,
              "year": 2014
            },
            {
              "id": 200713845,
              "year": 2015
            },
            {
              "id": 401578621,
              "year": 2016
            }
          ]
        },
        {
          "id": "Volkswagen_CC",
          "name": "CC",
          "niceName": "cc",
          "years": [
            {
              "id": 100524549,
              "year": 2009
            },
            {
              "id": 100529351,
              "year": 2010
            },
            {
              "id": 100532329,
              "year": 2011
            },
            {
              "id": 100534190,
              "year": 2012
            },
            {
              "id": 100539269,
              "year": 2013
            },
            {
              "id": 200487173,
              "year": 2014
            },
            {
              "id": 200709303,
              "year": 2015
            },
            {
              "id": 401593704,
              "year": 2016
            },
            {
              "id": 401666499,
              "year": 2017
            }
          ]
        },
        {
          "id": "Volkswagen_Cabrio",
          "name": "Cabrio",
          "niceName": "cabrio",
          "years": [
            {
              "id": 1298,
              "year": 1995
            },
            {
              "id": 1299,
              "year": 1996
            },
            {
              "id": 1300,
              "year": 1997
            },
            {
              "id": 471,
              "year": 1998
            },
            {
              "id": 3346,
              "year": 1999
            },
            {
              "id": 1057,
              "year": 2000
            },
            {
              "id": 100000259,
              "year": 2001
            },
            {
              "id": 100024,
              "year": 2002
            }
          ]
        },
        {
          "id": "Volkswagen_Cabriolet",
          "name": "Cabriolet",
          "niceName": "cabriolet",
          "years": [
            {
              "id": 1302,
              "year": 1990
            },
            {
              "id": 472,
              "year": 1991
            },
            {
              "id": 1303,
              "year": 1992
            },
            {
              "id": 1304,
              "year": 1993
            }
          ]
        },
        {
          "id": "Volkswagen_Corrado",
          "name": "Corrado",
          "niceName": "corrado",
          "years": [
            {
              "id": 1305,
              "year": 1990
            },
            {
              "id": 1306,
              "year": 1991
            },
            {
              "id": 1307,
              "year": 1992
            },
            {
              "id": 1308,
              "year": 1993
            },
            {
              "id": 1309,
              "year": 1994
            }
          ]
        },
        {
          "id": "Volkswagen_CrossBlue",
          "name": "CrossBlue",
          "niceName": "crossblue",
          "years": [
            {
              "id": 200705024,
              "year": 2017
            }
          ]
        },
        {
          "id": "Volkswagen_Eos",
          "name": "Eos",
          "niceName": "eos",
          "years": [
            {
              "id": 100505725,
              "year": 2007
            },
            {
              "id": 100523982,
              "year": 2008
            },
            {
              "id": 100525174,
              "year": 2009
            },
            {
              "id": 100530029,
              "year": 2010
            },
            {
              "id": 100532330,
              "year": 2011
            },
            {
              "id": 100532252,
              "year": 2012
            },
            {
              "id": 200436417,
              "year": 2013
            },
            {
              "id": 200486635,
              "year": 2014
            },
            {
              "id": 200709495,
              "year": 2015
            },
            {
              "id": 200771658,
              "year": 2016
            }
          ]
        },
        {
          "id": "Volkswagen_EuroVan",
          "name": "EuroVan",
          "niceName": "eurovan",
          "years": [
            {
              "id": 1310,
              "year": 1993
            },
            {
              "id": 1312,
              "year": 1997
            },
            {
              "id": 1006,
              "year": 1999
            },
            {
              "id": 506,
              "year": 2000
            },
            {
              "id": 100000256,
              "year": 2001
            },
            {
              "id": 100025,
              "year": 2002
            },
            {
              "id": 100502913,
              "year": 2003
            }
          ]
        },
        {
          "id": "Volkswagen_Fox",
          "name": "Fox",
          "niceName": "fox",
          "years": [
            {
              "id": 473,
              "year": 1990
            },
            {
              "id": 1314,
              "year": 1991
            },
            {
              "id": 1315,
              "year": 1992
            },
            {
              "id": 1316,
              "year": 1993
            }
          ]
        },
        {
          "id": "Volkswagen_GLI",
          "name": "GLI",
          "niceName": "gli",
          "years": [
            {
              "id": 100523641,
              "year": 2008
            },
            {
              "id": 100525291,
              "year": 2009
            },
            {
              "id": 100534689,
              "year": 2012
            }
          ]
        },
        {
          "id": "Volkswagen_GTI",
          "name": "GTI",
          "niceName": "gti",
          "years": [
            {
              "id": 100503332,
              "year": 1990
            },
            {
              "id": 100503341,
              "year": 1991
            },
            {
              "id": 100503347,
              "year": 1992
            },
            {
              "id": 100503367,
              "year": 1995
            },
            {
              "id": 474,
              "year": 1996
            },
            {
              "id": 100002583,
              "year": 1997
            },
            {
              "id": 3347,
              "year": 1999
            },
            {
              "id": 100002586,
              "year": 2000
            },
            {
              "id": 100000255,
              "year": 2001
            },
            {
              "id": 100023,
              "year": 2002
            },
            {
              "id": 100502915,
              "year": 2003
            },
            {
              "id": 100503320,
              "year": 2004
            },
            {
              "id": 100505106,
              "year": 2005
            },
            {
              "id": 100506568,
              "year": 2006
            },
            {
              "id": 100516902,
              "year": 2007
            },
            {
              "id": 100524169,
              "year": 2008
            },
            {
              "id": 100525171,
              "year": 2009
            },
            {
              "id": 100527851,
              "year": 2010
            },
            {
              "id": 100532349,
              "year": 2011
            },
            {
              "id": 100535869,
              "year": 2012
            },
            {
              "id": 200435539,
              "year": 2013
            },
            {
              "id": 200486979,
              "year": 2014
            }
          ]
        },
        {
          "id": "Volkswagen_Golf",
          "name": "Golf",
          "niceName": "golf",
          "years": [
            {
              "id": 475,
              "year": 1991
            },
            {
              "id": 1173,
              "year": 1992
            },
            {
              "id": 1174,
              "year": 1993
            },
            {
              "id": 1175,
              "year": 1994
            },
            {
              "id": 1176,
              "year": 1995
            },
            {
              "id": 1177,
              "year": 1996
            },
            {
              "id": 1178,
              "year": 1997
            },
            {
              "id": 1179,
              "year": 1998
            },
            {
              "id": 3348,
              "year": 1999
            },
            {
              "id": 411,
              "year": 2000
            },
            {
              "id": 100000257,
              "year": 2001
            },
            {
              "id": 100026,
              "year": 2002
            },
            {
              "id": 100502914,
              "year": 2003
            },
            {
              "id": 100503321,
              "year": 2004
            },
            {
              "id": 100505107,
              "year": 2005
            },
            {
              "id": 100503167,
              "year": 2006
            },
            {
              "id": 100524810,
              "year": 2010
            },
            {
              "id": 100532331,
              "year": 2011
            },
            {
              "id": 100535618,
              "year": 2012
            },
            {
              "id": 200431775,
              "year": 2013
            },
            {
              "id": 200436002,
              "year": 2014
            },
            {
              "id": 200466065,
              "year": 2015
            },
            {
              "id": 401572276,
              "year": 2016
            },
            {
              "id": 401665871,
              "year": 2017
            }
          ]
        },
        {
          "id": "Volkswagen_Golf_GTI",
          "name": "Golf GTI",
          "niceName": "golf-gti",
          "years": [
            {
              "id": 200464112,
              "year": 2015
            },
            {
              "id": 200751185,
              "year": 2016
            },
            {
              "id": 401665935,
              "year": 2017
            }
          ]
        },
        {
          "id": "Volkswagen_Golf_R",
          "name": "Golf R",
          "niceName": "golf-r",
          "years": [
            {
              "id": 100531989,
              "year": 2012
            },
            {
              "id": 200431798,
              "year": 2013
            },
            {
              "id": 200673996,
              "year": 2015
            },
            {
              "id": 200749648,
              "year": 2016
            },
            {
              "id": 401665996,
              "year": 2017
            }
          ]
        },
        {
          "id": "Volkswagen_Golf_SportWagen",
          "name": "Golf SportWagen",
          "niceName": "golf-sportwagen",
          "years": [
            {
              "id": 200481647,
              "year": 2015
            },
            {
              "id": 401572277,
              "year": 2016
            },
            {
              "id": 401666026,
              "year": 2017
            }
          ]
        },
        {
          "id": "Volkswagen_Golf_SportWagen_Alltrack",
          "name": "Golf SportWagen Alltrack",
          "niceName": "golf-sportwagen-alltrack",
          "years": [
            {
              "id": 200731841,
              "year": 2017
            }
          ]
        },
        {
          "id": "Volkswagen_Jetta",
          "name": "Jetta",
          "niceName": "jetta",
          "years": [
            {
              "id": 1180,
              "year": 1990
            },
            {
              "id": 1181,
              "year": 1991
            },
            {
              "id": 477,
              "year": 1992
            },
            {
              "id": 1182,
              "year": 1993
            },
            {
              "id": 1183,
              "year": 1994
            },
            {
              "id": 1184,
              "year": 1995
            },
            {
              "id": 478,
              "year": 1996
            },
            {
              "id": 1186,
              "year": 1998
            },
            {
              "id": 1007,
              "year": 1999
            },
            {
              "id": 1126,
              "year": 2000
            },
            {
              "id": 100000258,
              "year": 2001
            },
            {
              "id": 100021,
              "year": 2002
            },
            {
              "id": 100502916,
              "year": 2003
            },
            {
              "id": 100503322,
              "year": 2004
            },
            {
              "id": 100503523,
              "year": 2005
            },
            {
              "id": 100505144,
              "year": 2006
            },
            {
              "id": 100505839,
              "year": 2007
            },
            {
              "id": 100522454,
              "year": 2008
            },
            {
              "id": 100525290,
              "year": 2009
            },
            {
              "id": 100529349,
              "year": 2010
            },
            {
              "id": 100527991,
              "year": 2011
            },
            {
              "id": 100535619,
              "year": 2012
            },
            {
              "id": 200434618,
              "year": 2013
            },
            {
              "id": 200484093,
              "year": 2014
            },
            {
              "id": 200711325,
              "year": 2015
            },
            {
              "id": 401575136,
              "year": 2016
            },
            {
              "id": 401666227,
              "year": 2017
            }
          ]
        },
        {
          "id": "Volkswagen_Jetta_GLI",
          "name": "Jetta GLI",
          "niceName": "jetta-gli",
          "years": [
            {
              "id": 200435060,
              "year": 2013
            },
            {
              "id": 200484687,
              "year": 2014
            }
          ]
        },
        {
          "id": "Volkswagen_Jetta_Hybrid",
          "name": "Jetta Hybrid",
          "niceName": "jetta-hybrid",
          "years": [
            {
              "id": 100539191,
              "year": 2013
            },
            {
              "id": 200484094,
              "year": 2014
            }
          ]
        },
        {
          "id": "Volkswagen_Jetta_SportWagen",
          "name": "Jetta SportWagen",
          "niceName": "jetta-sportwagen",
          "years": [
            {
              "id": 100533409,
              "year": 2011
            },
            {
              "id": 100535620,
              "year": 2012
            },
            {
              "id": 200434946,
              "year": 2013
            },
            {
              "id": 200484686,
              "year": 2014
            }
          ]
        },
        {
          "id": "Volkswagen_New_Beetle",
          "name": "New Beetle",
          "niceName": "new-beetle",
          "years": [
            {
              "id": 479,
              "year": 1998
            },
            {
              "id": 3349,
              "year": 1999
            },
            {
              "id": 511,
              "year": 2000
            },
            {
              "id": 100000253,
              "year": 2001
            },
            {
              "id": 100022,
              "year": 2002
            },
            {
              "id": 100502917,
              "year": 2003
            },
            {
              "id": 100503323,
              "year": 2004
            },
            {
              "id": 100505105,
              "year": 2005
            },
            {
              "id": 100506632,
              "year": 2006
            },
            {
              "id": 100516901,
              "year": 2007
            },
            {
              "id": 100523813,
              "year": 2008
            },
            {
              "id": 100525295,
              "year": 2009
            },
            {
              "id": 100529549,
              "year": 2010
            }
          ]
        },
        {
          "id": "Volkswagen_Passat",
          "name": "Passat",
          "niceName": "passat",
          "years": [
            {
              "id": 1187,
              "year": 1990
            },
            {
              "id": 1188,
              "year": 1991
            },
            {
              "id": 480,
              "year": 1992
            },
            {
              "id": 1189,
              "year": 1993
            },
            {
              "id": 1190,
              "year": 1994
            },
            {
              "id": 1191,
              "year": 1995
            },
            {
              "id": 1192,
              "year": 1996
            },
            {
              "id": 1193,
              "year": 1997
            },
            {
              "id": 1194,
              "year": 1998
            },
            {
              "id": 3351,
              "year": 1999
            },
            {
              "id": 1058,
              "year": 2000
            },
            {
              "id": 100000252,
              "year": 2001
            },
            {
              "id": 100020,
              "year": 2002
            },
            {
              "id": 100502918,
              "year": 2003
            },
            {
              "id": 100503324,
              "year": 2004
            },
            {
              "id": 100503513,
              "year": 2005
            },
            {
              "id": 100505143,
              "year": 2006
            },
            {
              "id": 100507339,
              "year": 2007
            },
            {
              "id": 100505969,
              "year": 2008
            },
            {
              "id": 100525173,
              "year": 2009
            },
            {
              "id": 100529352,
              "year": 2010
            },
            {
              "id": 100532253,
              "year": 2012
            },
            {
              "id": 200431134,
              "year": 2013
            },
            {
              "id": 200485271,
              "year": 2014
            },
            {
              "id": 200705145,
              "year": 2015
            },
            {
              "id": 401589418,
              "year": 2016
            },
            {
              "id": 401666332,
              "year": 2017
            }
          ]
        },
        {
          "id": "Volkswagen_Phaeton",
          "name": "Phaeton",
          "niceName": "phaeton",
          "years": [
            {
              "id": 100502680,
              "year": 2004
            },
            {
              "id": 100505084,
              "year": 2005
            },
            {
              "id": 100506570,
              "year": 2006
            }
          ]
        },
        {
          "id": "Volkswagen_R32",
          "name": "R32",
          "niceName": "r32",
          "years": [
            {
              "id": 100502982,
              "year": 2004
            },
            {
              "id": 100506807,
              "year": 2008
            }
          ]
        },
        {
          "id": "Volkswagen_Rabbit",
          "name": "Rabbit",
          "niceName": "rabbit",
          "years": [
            {
              "id": 100516890,
              "year": 2006
            },
            {
              "id": 100515459,
              "year": 2007
            },
            {
              "id": 100523791,
              "year": 2008
            },
            {
              "id": 100525170,
              "year": 2009
            }
          ]
        },
        {
          "id": "Volkswagen_Routan",
          "name": "Routan",
          "niceName": "routan",
          "years": [
            {
              "id": 100503109,
              "year": 2009
            },
            {
              "id": 100529769,
              "year": 2010
            },
            {
              "id": 100534029,
              "year": 2011
            },
            {
              "id": 100537329,
              "year": 2012
            }
          ]
        },
        {
          "id": "Volkswagen_Tiguan",
          "name": "Tiguan",
          "niceName": "tiguan",
          "years": [
            {
              "id": 100505246,
              "year": 2009
            },
            {
              "id": 100529350,
              "year": 2010
            },
            {
              "id": 100531412,
              "year": 2011
            },
            {
              "id": 100535621,
              "year": 2012
            },
            {
              "id": 200435713,
              "year": 2013
            },
            {
              "id": 200485597,
              "year": 2014
            },
            {
              "id": 200709535,
              "year": 2015
            },
            {
              "id": 200749526,
              "year": 2016
            },
            {
              "id": 401578392,
              "year": 2017
            }
          ]
        },
        {
          "id": "Volkswagen_Touareg",
          "name": "Touareg",
          "niceName": "touareg",
          "years": [
            {
              "id": 100502679,
              "year": 2004
            },
            {
              "id": 100505104,
              "year": 2005
            },
            {
              "id": 100506569,
              "year": 2006
            },
            {
              "id": 100519043,
              "year": 2007
            },
            {
              "id": 100529789,
              "year": 2010
            },
            {
              "id": 100528709,
              "year": 2011
            },
            {
              "id": 100537129,
              "year": 2012
            },
            {
              "id": 200436466,
              "year": 2013
            },
            {
              "id": 200487360,
              "year": 2014
            },
            {
              "id": 200723600,
              "year": 2015
            },
            {
              "id": 200759788,
              "year": 2016
            },
            {
              "id": 401666615,
              "year": 2017
            }
          ]
        },
        {
          "id": "Volkswagen_Touareg_2",
          "name": "Touareg 2",
          "niceName": "touareg-2",
          "years": [
            {
              "id": 100520267,
              "year": 2008
            },
            {
              "id": 100525175,
              "year": 2009
            }
          ]
        },
        {
          "id": "Volkswagen_Vanagon",
          "name": "Vanagon",
          "niceName": "vanagon",
          "years": [
            {
              "id": 1195,
              "year": 1990
            },
            {
              "id": 1196,
              "year": 1991
            }
          ]
        },
        {
          "id": "Volkswagen_e_Golf",
          "name": "e-Golf",
          "niceName": "e-golf",
          "years": [
            {
              "id": 200498562,
              "year": 2015
            },
            {
              "id": 401597166,
              "year": 2016
            }
          ]
        }
      ]
    },
    {
      "id": 200010382,
      "name": "Volvo",
      "niceName": "volvo",
      "models": [
        {
          "id": "Volvo_240",
          "name": "240",
          "niceName": "240",
          "years": [
            {
              "id": 1197,
              "year": 1990
            },
            {
              "id": 1198,
              "year": 1991
            },
            {
              "id": 483,
              "year": 1992
            },
            {
              "id": 1199,
              "year": 1993
            }
          ]
        },
        {
          "id": "Volvo_740",
          "name": "740",
          "niceName": "740",
          "years": [
            {
              "id": 1201,
              "year": 1990
            },
            {
              "id": 484,
              "year": 1991
            },
            {
              "id": 1202,
              "year": 1992
            }
          ]
        },
        {
          "id": "Volvo_760",
          "name": "760",
          "niceName": "760",
          "years": [
            {
              "id": 485,
              "year": 1990
            }
          ]
        },
        {
          "id": "Volvo_850",
          "name": "850",
          "niceName": "850",
          "years": [
            {
              "id": 1206,
              "year": 1993
            },
            {
              "id": 1207,
              "year": 1994
            },
            {
              "id": 1208,
              "year": 1995
            },
            {
              "id": 1209,
              "year": 1996
            }
          ]
        },
        {
          "id": "Volvo_940",
          "name": "940",
          "niceName": "940",
          "years": [
            {
              "id": 1211,
              "year": 1991
            },
            {
              "id": 486,
              "year": 1992
            },
            {
              "id": 1212,
              "year": 1993
            },
            {
              "id": 1213,
              "year": 1994
            },
            {
              "id": 487,
              "year": 1995
            }
          ]
        },
        {
          "id": "Volvo_960",
          "name": "960",
          "niceName": "960",
          "years": [
            {
              "id": 1214,
              "year": 1992
            },
            {
              "id": 1215,
              "year": 1993
            },
            {
              "id": 488,
              "year": 1994
            },
            {
              "id": 1216,
              "year": 1995
            },
            {
              "id": 1217,
              "year": 1996
            }
          ]
        },
        {
          "id": "Volvo_C30",
          "name": "C30",
          "niceName": "c30",
          "years": [
            {
              "id": 100504123,
              "year": 2008
            },
            {
              "id": 100525877,
              "year": 2009
            },
            {
              "id": 100528333,
              "year": 2010
            },
            {
              "id": 100530273,
              "year": 2011
            },
            {
              "id": 100536370,
              "year": 2012
            },
            {
              "id": 200425618,
              "year": 2013
            }
          ]
        },
        {
          "id": "Volvo_C70",
          "name": "C70",
          "niceName": "c70",
          "years": [
            {
              "id": 1218,
              "year": 1998
            },
            {
              "id": 1009,
              "year": 1999
            },
            {
              "id": 99,
              "year": 2000
            },
            {
              "id": 100000260,
              "year": 2001
            },
            {
              "id": 100000467,
              "year": 2002
            },
            {
              "id": 100502919,
              "year": 2003
            },
            {
              "id": 100503229,
              "year": 2004
            },
            {
              "id": 100507141,
              "year": 2006
            },
            {
              "id": 100506191,
              "year": 2007
            },
            {
              "id": 100523493,
              "year": 2008
            },
            {
              "id": 100525878,
              "year": 2009
            },
            {
              "id": 100528549,
              "year": 2010
            },
            {
              "id": 100530274,
              "year": 2011
            },
            {
              "id": 100536371,
              "year": 2012
            },
            {
              "id": 200426019,
              "year": 2013
            }
          ]
        },
        {
          "id": "Volvo_Coupe",
          "name": "Coupe",
          "niceName": "coupe",
          "years": [
            {
              "id": 1219,
              "year": 1991
            }
          ]
        },
        {
          "id": "Volvo_S40",
          "name": "S40",
          "niceName": "s40",
          "years": [
            {
              "id": 102,
              "year": 2000
            },
            {
              "id": 100000261,
              "year": 2001
            },
            {
              "id": 100000468,
              "year": 2002
            },
            {
              "id": 100502920,
              "year": 2003
            },
            {
              "id": 100502996,
              "year": 2004
            },
            {
              "id": 100503247,
              "year": 2005
            },
            {
              "id": 100506125,
              "year": 2006
            },
            {
              "id": 100519084,
              "year": 2007
            },
            {
              "id": 100523509,
              "year": 2008
            },
            {
              "id": 100525779,
              "year": 2009
            },
            {
              "id": 100528329,
              "year": 2010
            },
            {
              "id": 100533251,
              "year": 2011
            }
          ]
        },
        {
          "id": "Volvo_S60",
          "name": "S60",
          "niceName": "s60",
          "years": [
            {
              "id": 100000262,
              "year": 2001
            },
            {
              "id": 100000469,
              "year": 2002
            },
            {
              "id": 100502921,
              "year": 2003
            },
            {
              "id": 100502955,
              "year": 2004
            },
            {
              "id": 100505028,
              "year": 2005
            },
            {
              "id": 100506126,
              "year": 2006
            },
            {
              "id": 100506571,
              "year": 2007
            },
            {
              "id": 100523559,
              "year": 2008
            },
            {
              "id": 100525781,
              "year": 2009
            },
            {
              "id": 100526929,
              "year": 2011
            },
            {
              "id": 100533729,
              "year": 2012
            },
            {
              "id": 200425877,
              "year": 2013
            },
            {
              "id": 200482808,
              "year": 2014
            },
            {
              "id": 200675370,
              "year": 2015
            },
            {
              "id": 200737680,
              "year": 2016
            },
            {
              "id": 401660136,
              "year": 2017
            }
          ]
        },
        {
          "id": "Volvo_S60_Cross_Country",
          "name": "S60 Cross Country",
          "niceName": "s60-cross-country",
          "years": [
            {
              "id": 401660113,
              "year": 2017
            }
          ]
        },
        {
          "id": "Volvo_S70",
          "name": "S70",
          "niceName": "s70",
          "years": [
            {
              "id": 490,
              "year": 1998
            },
            {
              "id": 100503409,
              "year": 1999
            },
            {
              "id": 101,
              "year": 2000
            }
          ]
        },
        {
          "id": "Volvo_S80",
          "name": "S80",
          "niceName": "s80",
          "years": [
            {
              "id": 3353,
              "year": 1999
            },
            {
              "id": 498,
              "year": 2000
            },
            {
              "id": 100000263,
              "year": 2001
            },
            {
              "id": 100000470,
              "year": 2002
            },
            {
              "id": 100502922,
              "year": 2003
            },
            {
              "id": 100503231,
              "year": 2004
            },
            {
              "id": 100505029,
              "year": 2005
            },
            {
              "id": 100506128,
              "year": 2006
            },
            {
              "id": 100505832,
              "year": 2007
            },
            {
              "id": 100523452,
              "year": 2008
            },
            {
              "id": 100525780,
              "year": 2009
            },
            {
              "id": 100527511,
              "year": 2010
            },
            {
              "id": 100533271,
              "year": 2011
            },
            {
              "id": 100536489,
              "year": 2012
            },
            {
              "id": 200425750,
              "year": 2013
            },
            {
              "id": 200483357,
              "year": 2014
            },
            {
              "id": 200675797,
              "year": 2015
            },
            {
              "id": 200737889,
              "year": 2016
            }
          ]
        },
        {
          "id": "Volvo_S90",
          "name": "S90",
          "niceName": "s90",
          "years": [
            {
              "id": 1220,
              "year": 1997
            },
            {
              "id": 1221,
              "year": 1998
            },
            {
              "id": 401588247,
              "year": 2017
            }
          ]
        },
        {
          "id": "Volvo_V40",
          "name": "V40",
          "niceName": "v40",
          "years": [
            {
              "id": 103,
              "year": 2000
            },
            {
              "id": 100000264,
              "year": 2001
            },
            {
              "id": 100000471,
              "year": 2002
            },
            {
              "id": 100502923,
              "year": 2003
            },
            {
              "id": 100503230,
              "year": 2004
            }
          ]
        },
        {
          "id": "Volvo_V50",
          "name": "V50",
          "niceName": "v50",
          "years": [
            {
              "id": 100503248,
              "year": 2005
            },
            {
              "id": 100506129,
              "year": 2006
            },
            {
              "id": 100519085,
              "year": 2007
            },
            {
              "id": 100523560,
              "year": 2008
            },
            {
              "id": 100525782,
              "year": 2009
            },
            {
              "id": 100528349,
              "year": 2010
            },
            {
              "id": 100533310,
              "year": 2011
            }
          ]
        },
        {
          "id": "Volvo_V60",
          "name": "V60",
          "niceName": "v60",
          "years": [
            {
              "id": 200493189,
              "year": 2015
            },
            {
              "id": 200737643,
              "year": 2016
            },
            {
              "id": 401659019,
              "year": 2017
            }
          ]
        },
        {
          "id": "Volvo_V60_Cross_Country",
          "name": "V60 Cross Country",
          "niceName": "v60-cross-country",
          "years": [
            {
              "id": 200721798,
              "year": 2015
            },
            {
              "id": 200737895,
              "year": 2016
            },
            {
              "id": 401659666,
              "year": 2017
            }
          ]
        },
        {
          "id": "Volvo_V70",
          "name": "V70",
          "niceName": "v70",
          "years": [
            {
              "id": 491,
              "year": 1998
            },
            {
              "id": 100503410,
              "year": 1999
            },
            {
              "id": 100,
              "year": 2000
            },
            {
              "id": 100000265,
              "year": 2001
            },
            {
              "id": 100000472,
              "year": 2002
            },
            {
              "id": 100502924,
              "year": 2003
            },
            {
              "id": 100502956,
              "year": 2004
            },
            {
              "id": 100505030,
              "year": 2005
            },
            {
              "id": 100506130,
              "year": 2006
            },
            {
              "id": 100519086,
              "year": 2007
            },
            {
              "id": 100524638,
              "year": 2008
            },
            {
              "id": 100522592,
              "year": 2009
            },
            {
              "id": 100528514,
              "year": 2010
            }
          ]
        },
        {
          "id": "Volvo_V90",
          "name": "V90",
          "niceName": "v90",
          "years": [
            {
              "id": 1222,
              "year": 1997
            },
            {
              "id": 492,
              "year": 1998
            },
            {
              "id": 401645674,
              "year": 2018
            }
          ]
        },
        {
          "id": "Volvo_V90_Cross_Country",
          "name": "V90 Cross Country",
          "niceName": "v90-cross-country",
          "years": [
            {
              "id": 401689298,
              "year": 2017
            }
          ]
        },
        {
          "id": "Volvo_XC",
          "name": "XC",
          "niceName": "xc",
          "years": [
            {
              "id": 100000473,
              "year": 2002
            }
          ]
        },
        {
          "id": "Volvo_XC60",
          "name": "XC60",
          "niceName": "xc60",
          "years": [
            {
              "id": 100527231,
              "year": 2010
            },
            {
              "id": 100533269,
              "year": 2011
            },
            {
              "id": 100536469,
              "year": 2012
            },
            {
              "id": 200424122,
              "year": 2013
            },
            {
              "id": 200484223,
              "year": 2014
            },
            {
              "id": 200675369,
              "year": 2015
            },
            {
              "id": 200737697,
              "year": 2016
            },
            {
              "id": 401657921,
              "year": 2017
            }
          ]
        },
        {
          "id": "Volvo_XC70",
          "name": "XC70",
          "niceName": "xc70",
          "years": [
            {
              "id": 100502925,
              "year": 2003
            },
            {
              "id": 100503227,
              "year": 2004
            },
            {
              "id": 100505045,
              "year": 2005
            },
            {
              "id": 100506145,
              "year": 2006
            },
            {
              "id": 100519087,
              "year": 2007
            },
            {
              "id": 100520207,
              "year": 2008
            },
            {
              "id": 100525889,
              "year": 2009
            },
            {
              "id": 100528331,
              "year": 2010
            },
            {
              "id": 100533350,
              "year": 2011
            },
            {
              "id": 100536449,
              "year": 2012
            },
            {
              "id": 200425522,
              "year": 2013
            },
            {
              "id": 200483721,
              "year": 2014
            },
            {
              "id": 200676008,
              "year": 2015
            },
            {
              "id": 200739112,
              "year": 2016
            }
          ]
        },
        {
          "id": "Volvo_XC90",
          "name": "XC90",
          "niceName": "xc90",
          "years": [
            {
              "id": 100502676,
              "year": 2003
            },
            {
              "id": 100503228,
              "year": 2004
            },
            {
              "id": 100504122,
              "year": 2005
            },
            {
              "id": 100506132,
              "year": 2006
            },
            {
              "id": 100507722,
              "year": 2007
            },
            {
              "id": 100523561,
              "year": 2008
            },
            {
              "id": 100525890,
              "year": 2009
            },
            {
              "id": 100528332,
              "year": 2010
            },
            {
              "id": 100533270,
              "year": 2011
            },
            {
              "id": 100536529,
              "year": 2012
            },
            {
              "id": 100539229,
              "year": 2013
            },
            {
              "id": 200484498,
              "year": 2014
            },
            {
              "id": 200711225,
              "year": 2016
            },
            {
              "id": 401657970,
              "year": 2017
            }
          ]
        }
      ]
    },
    {
      "id": 200038885,
      "name": "smart",
      "niceName": "smart",
      "models": [
        {
          "id": "smart_fortwo",
          "name": "fortwo",
          "niceName": "fortwo",
          "years": [
            {
              "id": 100519045,
              "year": 2008
            },
            {
              "id": 100526395,
              "year": 2009
            },
            {
              "id": 100530969,
              "year": 2010
            },
            {
              "id": 100533749,
              "year": 2011
            },
            {
              "id": 100532009,
              "year": 2012
            },
            {
              "id": 200418482,
              "year": 2013
            },
            {
              "id": 200497815,
              "year": 2014
            },
            {
              "id": 200704750,
              "year": 2015
            },
            {
              "id": 200705423,
              "year": 2016
            }
          ]
        }
      ]
    }
  ],
  "makesCount": 62
}
} 