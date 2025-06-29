var userName = ["Mahad", "Ali", "Zeeshan", "Admin", "Usman"];
userName = [];
if (userName.length === 0) {
    console.log("your array in empty we need to find some user");
}
else {
    userName.forEach(function (userName) {
        if (userName === "Admin") {
            console.log("hello ".concat(userName, " !!! would you like to see a status report"));
        }
        else {
            console.log("hello ".concat(userName, " !!! thankyou for logging in again"));
        }
    });
}
