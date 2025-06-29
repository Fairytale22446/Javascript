let guestList = ["Fariha","Hafsa","Humaira","Riffat"];
let dontCome = guestList[0];
console.log(dontCome , "not coming");

guestList.splice(0, 0, "Sanaa");
guestList.forEach(guestList => console.log(`Salam!!! ${guestList} : would you like to dinner with me...`));