//Connor Ring
//CMP237 Filter File for Tanks
// This is meant to find any tank between 50 and 60 in the "Weight" data and pri
nt them.
// Edit (3/1/2015): Fixed a slight bug with "load". Fixed indentation.
load('tankTraits.js');
var tanks = JSON.parse(Tanks);
function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}

print(JSON.stringify(filter(tanks, function(tanks) {
  return tanks.Weight > 50 && tanks.Weight < 52;
})));















 

