function describe_city(city, country) {
    if (country === void 0) { country = "PAKISTAN"; }
    console.log("".concat(city, " city is in ").concat(country));
}
//calling the function
describe_city("karachi");
describe_city("lahore");
describe_city("berlin", "germany");
