//Connor Ring
////CMP237 Mapping Arrangement
////This is meant to be used for updating the data of any given tank
function map(array, transform) {
          var mapped = [];
  i           for (var i = 0; i < array.length; i++)
                        mapped.push(transform(array[i]));
              return mapped;
}
var overweight = Tanks.filter(function(tank) {
          return Tanks.Weight - Tanks.Weight > 90;
});
console.log(map(overweight, function(tank) {
          return Tanks.Name;
}));
