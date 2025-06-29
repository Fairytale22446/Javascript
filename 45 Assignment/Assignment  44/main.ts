//define a function with a rest of parameter that accept items arguments representing our
function makeSandwich(...items:string[]){
    console.log("\nmaking a sandwich with the following items:\n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nnow enjoy sandwich");
}
//call a function with three times with three different arguments
makeSandwich("chicken" , "cheese" , "mayo" , "egg")
makeSandwich("bread" , "butter")
makeSandwich("bread" , "butter" , "mayo" , "egg" , "cheese" , "chicken")
