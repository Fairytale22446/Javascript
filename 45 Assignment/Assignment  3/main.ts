let personName:string="Fakiha Khalid";
// lower case
console.log("lowerCase" , personName.toLowerCase());
// upper case
console.log("lowerCase" , personName.toUpperCase());
// title case
console.log("titleCase" , personName.replace(/\b\w/g,c=> c.toUpperCase()));