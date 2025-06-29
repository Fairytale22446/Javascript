//TEST FOR EQUALITY AND INEQUALITY
var apple = "apple";
console.log("is apple is equal to APPLE");
console.log(apple == "APPLE");
console.log("\nis apple is equal to banana");
console.log(apple == "banana");
//TESTS USING THE LOWERCASE FUNCTION
console.log("\nis APPLE is equal to apple");
console.log(apple.toLowerCase() === "apple");
//NUMERICAL TEST 
//EQUALITY AND INEQUALITY
var num1 = 10;
var num2 = 20;
console.log("\n num1 is not equal to num2");
console.log(num1 != num2);
console.log("\nnum2 is equal to num1 ");
console.log(num2 == num1);
//GREATER THAN OR LESS THAN 
console.log("\nnum1 is less than num2");
console.log(num1 < num2);
console.log("\nnum2 is greater than num2");
console.log(num2 > num1);
//LESS THAN OR EQUAL TO 
console.log("\nis 10 is greater than and equal to 5");
console.log(num1 >= 5);
console.log("\nis 10 isless than or equal to 5");
console.log(num1 <= 5);
//USING AND OR OPERATOR
//&&
console.log("\ntwenty is not equal to 10 and twenty is greater than 10");
console.log(num2 != num1 && num2 > num1);
console.log("\ntwenty is not equal to 10 and twenty is greater than 30");
console.log(num2 != num1 && num2 > 30);
//OR
console.log("\ntwenty is greater than 50 or twenty is equal to twenty");
console.log(num2 > 50 || num2 == num2);
//TEST WEATHER AN ITEM IS IN THE ARRAY
var fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log("\nis mango is include in my array ???");
console.log(fruits.includes("Mango"));
console.log("\nis orange is not include in my array");
console.log(fruits.includes("orange"));
