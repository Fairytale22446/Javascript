function describe_city(city:string , country:string = "PAKISTAN") {
    console.log(`${city} city is in ${country}`);
}
//calling the function
describe_city("karachi");
describe_city("lahore");
describe_city("berlin", "germany");
