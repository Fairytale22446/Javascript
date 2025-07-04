// define a function to create a car object with optional options

function create_car(manufacture , model , ...options){
    // initialize a car object with manufacturer and model
    
    let car = {
        manufacture : manufacture,
        model : model,
    };
    //add additional option to the car object

    options.forEach(option => {
        let[key , value] = option.split(":");
        car[key.trim()] = value.trim();
    })
    return car;
}
// call the function to create a car object
let my_car = create_car("toyota" , "corolla" , "color:black" , "sunroof:true" , "year:2024")

console.log(my_car )


