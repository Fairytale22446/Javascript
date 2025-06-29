var guestList = ["Fariha", "Hafsa", "Humaira", "Riffat"];
var dontCome = guestList[0];
console.log(dontCome, "not coming");
guestList.splice(0, 0, "Sanaa");
guestList.forEach(function (guestList) { return console.log("Salam!!! ".concat(guestList, " : would you like to dinner with me...")); });
