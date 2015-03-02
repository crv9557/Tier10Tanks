// Connor Ring
// CMP237 Reduce function
// This program will reduce the list of tanks down to the lowest weight out of the entire set of tanks.
load("tankTraits.js");
var tanks = JSON.parse(Tanks);

print(JSON.stringify(tanks.reduce(function(min, cur) {
  if (cur.Weight < min.Weight) return cur;
  else return min;
})));
