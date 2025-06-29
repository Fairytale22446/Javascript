function show_magician(magician:string[]){
    magician.forEach(magician => console.log(magician))
}
//function to great magician great through .map() it will modify array
function make_great(magician:string[]){
    return magician.map(make_great => `the great ${make_great}`)
}
//define an array of magician name 
let magician_name =["Harry potter","zain","usman"];
//making a copy of original array through .slice() function
let copy_magician_name=magician_name.slice()
//modify the copied array to include "the great"  with their names 
let copy_great_magician=make_great(copy_magician_name)
//original
show_magician(magician_name)
//copied
show_magician( copy_great_magician)