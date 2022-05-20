// What is a variable?
// Something that stores data



// Make me a variable called name and put your name as the value
var name = "Nichole";
// Make sure you are storing the proper data type into your variable, if you're using a string don't forget the quotation marks


// Make me a variable called age and put your age as the value
var age = 27;



// Pretend it's your birthday and add 1 to your age
// Option 1: age = age + 1;
// Option 2: age+=1;
// Option 3: age++; This option only works if you're adding 1 it does not work for any other values



// Make me a variable called isStudent and set the value to true
var isStudent = true;
// True is NOT in quotation marks
// True is NOT spelled with a capital T - it is lower case and so is false



// What do we call the variable type I just had you make?
// Boolean



// What is a conditional statement and why are they handy?
// Condition statements are if/else statements, for loops, while loops, etc....
// Check for a certain outcome, and if that outcome is true then perform an action
// Conditional statements are good for only running certain actions when you want them to
// Ex: if health = 0 then show a game over screen



// Write me a conditional statement that checks if your age is under 25. If it is, print "Wow, you're pretty young!" if it's not, print "Age = wisdom"
if(age < 25) {
    console.log("Wow, you're pretty young!");
} else if (age == 30){
    console.log("Hey, you're 30!");
} else {
    console.log("Age = wisdom");
}
// Else means in ALL OTHER CASES which means we DON'T need a condition



// Write me a conditional statement that checks if you are a student. If you are, print "Good on you for learning to code!"
if(isStudent){
    console.log("Good on you for learning to code!");
}
// When the variable put into the condition is a boolean you don't need to include == true/false


// The great == or === debate
// == checks for equality but does NOT account for type
// === checks for equality and DOES account for type
// ex:
if(7 == "7"){
    // This would be true with the double equal because the value is 7
}

if(7 === "7"){
    // This would NOT run because an integer is NOT the same thing as a string
}

// {} -> curly braces
// [] -> square brackets
// () -> parentheses




// Write a for loop that starts at 0, ends at 10, and increments up by 1. Inside the loop, print the value of i
for(var i = 0; i <=10; i++) {
    console.log(i);
}
// i++ = i = i + 1



// Now write me a for loop that starts at 20, ends at 1, and decrements by 2. Inside the loop, print the value of i
for(var i = 20; i >= 1; i-=2) {
    console.log(i);
}



// Make me an array with the values [3,7,10,2,4,18]
var arr = [3,7,10,2,4,18];
//         0 1  2 3 4  5
// Length -> 6
// If I went to arr[6] I would get an undefined



// Pop quiz: what index value do arrays ALWAYS start on?
// 0



// Pop quiz: if I wanted to grab the 2nd value in an array, how would I write that?
var value = arr[1];



// Pop quiz: how would I grab the LAST value in an array?
var last = arr[arr.length-1];
// Make sure to minus 1 off the back of your length to make sure you're grabbing that last value



// Push the value 5 into the array you made
arr.push(5);
// This adds a 5 to my array
// This adds a 5 to the BACK of my array



// Quick question: how would I REMOVE a value from the back?
arr.pop();
// This will always remove the BACK VALUE
// There are built in features that remove from other areas of the array...but we'll use those later
// ONLY concern yourself with push and pop



// Write me a for loop that traverses through the array from before and prints the values at each index
for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    // Why would using console.log(i) be wrong?
    // i is the INDEX not the VALUE at that index
}
// Nichole's tip: make sure you know how to write a loop that goes through an array
// You will do it A LOT



// Now add to that loop some logic that checks if the value is greater than 5 and ONLY print the value if it is larger than 5
for(var i = 0; i < arr.length; i++) {
    if(arr[i] > 5)
    {
        console.log(arr[i]);
    }
    // We DON'T need an else statement because we're not doing anything after
}



// Function time! Tell me what a function is and why we use them?
// Functions can run an argument and return a value
// Functions can hold info for later to call back upon
// Functions exist so we don't need to write the same code over and over
// Functions are a block of code that does something to data
// Functions can accept different parameters to give us different answers to varying solutions



// If I write function doAThing(value)...what is the term we use for that "value" inside the parentheses?
// parameter
// Bonus: what is the purpose of a parameter?
// To pass data into the function
// It's info needed by a function to produce an output
// Often it's what will be modified or adjusted in the argument



// Write me a function that, when called, prints out "Hello there!"
// function greeting() {
//     console.log("Hello there!");
// }
// greeting();



// Now add the ability for the function to accept a name and print out 
function greeting(name) {
    // Add strings together
    // console.log("Hello there " + name + "!");
    // String concatenation
    return `Hello there ${name}!`;
}
console.log(greeting("Nichole"));



// Quick! Tell me the coolest thing you've learned this week!




// What are you most proud of yourself for figuring out this week?




// Are you excited to learn more?




// What can we do to make your time with us even better?