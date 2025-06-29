//creating a guest list array
var guestList = ["Hafsa", "Fariha", "Humaira", "Sanaa"];
//making variable for those guest who cant come
var dontCome = guestList[0];
//print the name of guest who cant come
console.log(dontCome, "Not Coming");
//add or removes value from guest list array
guestList.splice(0, 1, "Riffat");
//message print from bigger table 
console.log("Godd News !!!! we have found a bigger table for dinner,,,");
//adding a new value at starting index of array
guestList.unshift("Dua");
//adding a new value at ending index of array
guestList.push("Zain");
//get a middle inex of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
//adding a new value at middle index of array
guestList.splice(middleIndex, 0, "Osama");
//print a message of update list
console.log("update list of our guest");
//sending the invitatin of our guest one by one by name
guestList.forEach(function (guestList) { return console.log("Salam !! ".concat(guestList, " , would you like to dinner with me..")); });
