function show_magician(magician) {
    magician.forEach(function (magician) { return console.log(magician); });
}
//function to great magician great through .map() it will modify array
function make_great(magician) {
    return magician.map(function (make_great) { return "the great ".concat(make_great); });
}
//define an array of magician name 
var magician_name = ["Harry potter", "zain", "usman"];
//making a copy of original array through .slice() function
var copy_magician_name = magician_name.slice();
//modify the copied array to include "the great"  with their names 
var copy_great_magician = make_great(copy_magician_name);
//original
show_magician(magician_name);
//copied
show_magician(copy_great_magician);
