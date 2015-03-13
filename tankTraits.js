//Connor Ring
//February 18th, 2015
//Tier 10 Tanks Traits

//Edit (2/25/2015): Changed the layout of the ENTIRE app. Looks a bit better.
//Edit (2/26/2015): Removed quotation marks from places that it didn't belong.
//Edit (2/27/2015): Filter prep. Added a few marks and an export if-statement.
//Edit (2/28/2015): ADDED BACK QUOTATIONS!
//Edit (3/1/2015): Removed text values in the numerical value areas. Changed values to be average rather than lowest to highest where applicable. Also changed value "Engine" to "Top Speed" for clarity.

// Create an array for the tanks and their properties.
var Tanks = "[\n  " + [
'{"Name":"T92","Damage":"2250","Penetration":"120","Top Speed":"32","Weight":"57.84"}',
'{"Name":"T57 Heavy","Damage":"400","Penetration":"258","Top Speed":"35","Weight":"54.93"}',
'{"Name":"T110E4","Damage":"750","Penetration":"295","Top Speed":"35","Weight":"64.73"}',
'{"Name":"T110E3","Damage":"750","Penetration":"295","Top Speed":"24","Weight":"76.73"}',
'{"Name":"M48A1 Patton","Damage":"390","Penetration":"268","Top Speed":"45","Weight":"48.17"}',
'{"Name":"T110E5","Damage":"400","Penetration":"258","Top Speed":"37","Weight":"53.76"}',
'{"Name":"FV4202","Damage":"390","Penetration":"268","Top Speed":"40","Weight":"40"}',
'{"Name":"FV215b (183)","Damage":"1150","Penetration":"310","Top Speed":"34","Weight":"60"}',
'{"Name":"FV215b","Damage":"400","Penetration":"259","Top Speed":"34","Weight":"70"}',
'{"Name":"FV4005 Stage II","Damage":"1150 HP","Penetration":"310","Top Speed":"35","Weight":"50.8"}',
'{"Name":"Conqueror Gun Carriage","Damage":"2200","Penetration":"117","Top Speed":"34","Weight":"55"}',
'{"Name":"G.W.E 100","Damage":"2000","Penetration":"105","Top Speed":"40","Weight":"87"}',
'{"Name":"Waffentrager auf E 100","Damage":"560","Penetration":"276","Top Speed":"40","Weight":"98.05"}',
'{"Name":"Jagdpanzer E 100","Damage":"1050","Penetration":"299","Top Speed":"30","Weight":"133.94"}',
'{"Name":"Maus","Damage":"490","Penetration":"246","Top Speed":"20","Weight":"188.98"}',
'{"Name":"E 100","Damage":"750","Penetration":"235","Top Speed":"30","Weight":"129.69"}',
'{"Name":"E 50 Ausf. M","Damage":"390","Penetration":"270","Top Speed":"60","Weight":"62.31"}',
'{"Name":"Leopard 1","Damage":"390","Penetration":"268","Top Speed":"65","Weight":"40"}',
'{"Name":"AMX 50 Foch (155)","Damage":"750","Penetration":"293","Top Speed":"50","Weight":"57.6"}',
'{"Name":"AMX 50 B","Damage":"400","Penetration":"","Top Speed":"65","Weight":"62.21"}',
'{"Name":"Bat.-Chatillon 25 t","Damage":"390","Penetration":"257","Top Speed":"65","Weight":"24.48"}',
'{"Name":"Bat.-Chatillon 155 58","Damage":"1250","Penetration":"95","Top Speed":"62","Weight":"35"}',
'{"Name":"Object 268","Damage":"750","Penetration":"303","Top Speed":"48","Weight":"50.97"}',
'{"Name":"Object 263","Damage":"560","Penetration":"295","Top Speed":"55","Weight":"60.01"}',
'{"Name":"Object 430","Damage":"320","Penetration":"264","Top Speed":"55","Weight":"35.3"}',
'{"Name":"T-62A","Damage":"320","Penetration":"264","Top Speed":"50","Weight":"37"}',
'{"Name":"Object 140","Damage":"320","Penetration":"","Top Speed":"55","Weight":"36"}',
'{"Name":"IS-7","Damage":"490","Penetration":"250","Top Speed":"59.6","Weight":"68.19"}',
'{"Name":"IS-4","Damage":"440","Penetration":"258","Top Speed":"43","Weight":"60.02"}',
'{"Name":"Object 261","Damage":"1700","Penetration":"102","Top Speed":"50","Weight":"59.1"}',
'{"Name":"121","Damage":"440","Penetration":"258","Top Speed":"56","Weight":"39"}',
'{"Name":"113","Damage":"440","Penetration":"249","Top Speed":"50","Weight":"45"}',
'{"Name":"STB-1","Damage":"390","Penetration":"258","Top Speed":"53","Weight":"37.4"}'
].join(",\n  ") + "\n]";

if (typeof module != "undefined" && module.exports)
  module.exports = Tanks;
