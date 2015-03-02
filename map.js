//Connor Ring
////CMP237 Mapping Arrangement
////This is meant to be used for updating the data of any given tank
//Edit (3/1/2015): Added the import of data. Fixed a very odd bug that involved the letter "i" being in the middle of nowhere.
var data = require('./tankTraits.js');
var Tanks = JSON.parse(data);

function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
    return mapped;
}

var overweight = Tanks.filter(function(tank) {
  return tank.Weight > 90 && tank.Weight < 150;
});
console.log(map(overweight, function(tank) {
  return tank.Name + " :  " + tank.Weight + " tons";
}));
