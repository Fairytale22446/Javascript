function make_shirt( size:string, printMessage:string = "i live typescript"){
    console.log(`you selected ${size} shirt with ${printMessage} prints on shirt`)
}
//calling a function with by defaults values
make_shirt
//calling a function now with medium size and default message
make_shirt("medium")
//calling a function now with small size and also print message
make_shirt("small" , "i love javascript")