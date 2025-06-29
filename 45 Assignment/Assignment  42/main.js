// define the function to show the magician name 
function show_magicians(magicians) {
    magicians.forEach(function (show_magicians) { return console.log(show_magicians); });
}
//function to make magician great through map it will modify array
function make_great(magicians) {
    return magicians.map(function (make_great) { return "the great ".concat(make_great); });
}
//define an array of magicians name 
var magicians_names = ["Harry potter", "Hamza", "Usman"];
//call make_great function to modify magician name
var great_magician = make_great(magicians_names);
//call show magician that show modified list of magicians
show_magicians(great_magician);
