function make_shirt(size, printMessage) {
    if (printMessage === void 0) { printMessage = "i live typescript"; }
    console.log("you selected ".concat(size, " shirt with ").concat(printMessage, " prints on shirt"));
}
//calling a function with by defaults values
make_shirt;
//calling a function now with medium size and default message
make_shirt("medium");
//calling a function now with small size and also print message
make_shirt("small", "i love javascript");
