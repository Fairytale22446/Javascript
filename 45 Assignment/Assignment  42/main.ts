// define the function to show the magician name 
function show_magicians(magicians:string[]){
    magicians.forEach(show_magicians => console.log(show_magicians));
}
//function to make magician great through map it will modify array
function make_great(magicians:string[]){
    return magicians.map(make_great => `the great ${make_great}`)
}
//define an array of magicians name 
let magicians_names = ["Harry potter" , "Hamza" , "Usman"]
//call make_great function to modify magician name
let great_magician = make_great(magicians_names);
//call show magician that show modified list of magicians
show_magicians(great_magician);