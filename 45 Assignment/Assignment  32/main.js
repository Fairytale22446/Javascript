var current_user = ["osman", "ali", "areeba", "zain", "osama"];
var new_user = ["hamza", "ayesha", "ali", "mahad", "areeba"];
new_user.forEach(function (new_user) {
    var ourCondition = current_user.some(function (current_user) { return current_user.toLowerCase() === new_user.toLowerCase(); });
    if (ourCondition) {
        console.log("sorry ".concat(new_user, " !!! is already taken."));
    }
    else {
        console.log("this username ".concat(new_user, " is available."));
    }
});
