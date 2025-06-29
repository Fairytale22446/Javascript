var userName = ["Mahad", "Zeeshan", "Admin", "Usman"];
userName.forEach(function (userName) {
    if (userName === "Admin") {
        console.log("hello ".concat(userName, " !!! would you like to see a status report"));
    }
    else {
        console.log("hello ".concat(userName, " !!! thankyou for logging in again"));
    }
});
