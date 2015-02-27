//Connor Ring
//February 18th, 2015
//Tier 10 Tanks Traits

//Edit (2/25/2015): Changed the layout of the ENTIRE app. Looks a bit better.
//Edit (2/26/2015): Removed quotation marks from places that it didn't belong.
//Edit (2/27/2015): Filter prep. Added a few marks and an export if-statement.

// Create an array for the tanks and their properties.
var Tanks = [ "[\n  " + [
'{Name:"T92",Damage:"1688-2813 HP",Penetration:"90-150 mm",Engine:"32 km/h",Weight:"57.84 tons"}',
'{Name:"T57 Heavy",Damage:"300-500 HP",Penetration:"194-323 mm",Engine:"35 km/h",Weight:"54.93 tons"}',
'{Name:"T110E4",Damage:"563-938 HP",Penetration:"221-369 mm",Engine:"35 km/h",Weight:"64.73 tons"}',
'{Name:"T110E3",Damage:"563-938 HP",Penetration:"221-369 mm",Engine:"24 km/h",Weight:"76.73 tons"}',
'{Name:"M48A1 Patton",Damage:"293-488 HP",Penetration:"201-335 mm",Engine:"45 km/h",Weight:"48.17 tons"}',
'{Name:"T110E5",Damage:"300-500 HP",Penetration:"194-323 mm",Engine:"37 km/h",Weight:"53.76 tons"}',
'{Name:"FV4202",Damage:"293-488 HP",Penetration:"201-335 mm",Engine:"40 km/h",Weight:"40 tons"}',
'{Name:"FV215b (183)",Damage:"863-1438 HP",Penetration:"233-388 mm",Engine:"34 km/h",Weight:"60 tons"}',
{Name:"FV215b",Damage:"300-500 HP",Penetration:"194-324 mm",Engine:"34 km/h",Weight:"70 tons"},
'{Name:"FV4005 Stage II",Damage:"863-1438 HP",Penetration:"233-388 mm",Engine:"35 km/h",Weight:"50.8 tons"}',
'{Name:"Conqueror Gun Carriage",Damage:"1650-2750 HP",Penetration:"88-146 mm",Engine:"34 km/h",Weight:"55 tons"}',
'{Name:"G.W.E 100",Damage:"1500-2500 HP",Penetration:"79-131 mm",Engine:"40 km/h",Weight:"87 tons"}',
'{Name:"Waffentrager auf E 100",Damage:"563-938 HP",Penetration:"176-294 mm",Engine:"40 km/h",Weight:"98.05 tons"}',
'{Name:"Jagdpanzer E 100",Damage:"788-1313 HP",Penetration:"224-374 mm",Engine:"30 km/h",Weight:"133.94 tons"}',
'{Name:"Maus",Damage:"368-613 HP",Penetration:"185-308 mm",Engine:"20 km/h",Weight:"188.98 tons"}',
'{Name:"E 100",Damage:"563-938 HP",Penetration:"177-294 mm",Engine:"30 km/h",Weight:"129.69 tons"}',
'{Name:"E 50 Ausf. M",Damage:"293-488 HP",Penetration:"203-338 mm",Engine:"60 km/h",Weight:"62.31 tons"}',
'{Name:"Leopard 1",Damage:"293-488 HP",Penetration:"201-335 mm",Engine:"65 km/h",Weight:"40 tons"}',
'{Name:"AMX 50 Foch (155)",Damage:"563-938 HP",Penetration:"220-366 mm",Engine:"50 km/h",Weight:"57.6 tons"}',
'{Name:"AMX 50 B",Damage:"300-500 HP",Penetration:"193-321 mm",Engine:"65 km/h",Weight:"62.21 tons"}',
'{Name:"Bat.-Chatillon 25 t",Damage:"293-488 HP",Penetration:"195-324 mm",Engine:"65 km/h",Weight:"24.48 tons"}',
'{Name:"Bat.-Chatillon 155 58",Damage:"938-1563 HP",Penetration:"71-119 mm",Engine:"62 km/h",Weight:"35 tons"}',
'{Name:"Object 268",Damage:"563-938 HP",Penetration:"227-379 mm",Engine:"48 km/h",Weight:"50.97 tons"}',
'{Name:"Object 263",Damage:"413-688 HP",Penetration:"218-363 mm",Engine:"55 km/h",Weight:"60.01 tons"}',
'{Name:"Object 430",Damage:"240-400 HP",Penetration:"198-330 mm",Engine:"55 km/h",Weight:"35.3 tons"}',
'{Name:"T-62A",Damage:"240-400 HP",Penetration:"198-330 mm",Engine:"50 km/h",Weight:"37 tons"}',
'{Name:"Object 140",Damage:"240-400 HP",Penetration:"198-330 mm",Engine:"55 km/h",Weight:"36 tons"}',
{'Name:"IS-7",Damage:"368-613 HP",Penetration:"188-313 mm",Engine:"59.6 km/h",Weight:"68.19 tons"}',
'{Name:"IS-4",Damage:"293-488 HP",Penetration:"131-219 mm",Engine:"43 km/h",Weight:"60.02 tons"}',
'{Name:"Object 261",Damage:"1275-2125 HP",Penetration:"77-128 mm",Engine:"50 km/h",Weight:"59.1 tons"}',
'{Name:"121",Damage:"330-550 HP",Penetration:"194-323 mm",Engine:"56 km/h",Weight:"39 tons"}',
'{Name:"113",Damage:"330-550",Penetration:"187-311 mm",Engine:"50 km/h",Weight:"45 tons"}',
'{Name:"STB-1",Damage:"293-488 HP",Penetration:"194-323 mm", Engine:"53 km/h",Weight:"37.4 tons"}'
].join(",\n  ") + "\n]";

if (typeof module != "undefined" && module.exports)
  module.exports = Tanks;
