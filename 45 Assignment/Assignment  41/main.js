// define a function to print eacj magician name from an array
function show_magician(magician) {
    magician.forEach(function (magician) { return console.log(magician); });
}
var magician_names = ["Hary potter", "Hamza", "Usman"];
show_magician(magician_names);
