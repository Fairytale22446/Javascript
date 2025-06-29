//define a function with a rest of parameter that accept items arguments representing our
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nmaking a sandwich with the following items:\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nnow enjoy sandwich");
}
//call a function with three times with three different arguments
makeSandwich("chicken", "cheese", "mayo", "egg");
makeSandwich("bread", "butter");
makeSandwich("bread", "butter", "mayo", "egg", "cheese", "chicken");
