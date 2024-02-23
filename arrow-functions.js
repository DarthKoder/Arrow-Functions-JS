/*
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    // Code block
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum)


// Arrow Function With Parameters
/* When defining arrow functions, we use a constant and set it equal to a set of parentheses that contains our parameters, 
then a "fat arrow", and then our curly braces with the function body. */
const addTwoNumber = (a,b) => {
    // Code block
    return a + b;
}
let sums = addTwoNumber(3, 5);
console.log(sums)


// Single Line Arrow Function With Parameters

/* in this case since all the function body does is return a + b, we can actually remove the curly braces, 
and remove the return statement entirely, and just put a + b on the same line.

In this way, the “fat arrow” can be thought of as a sort of implicit way of stating what you want the function to return.

So for simple functions, you can just put what you want to return right after the "fat arrow" on the same line.

But if your function has more complex logic, you'll need to set open a set of curly braces and then use the return statement like a normal function.*/ 
const addTwoNumbers2 = (a, b) => a + b;
// You may see the part after the "fat arrow" wrappend in parentheses and this is still a valid way of writing it. const addTwoNumbers2 = (a, b) => (a + b);



// Implicit Returns
/*For even simpler functions, such as those that only take a single parameter, you can
leave off the first set of parentheses too.
Since there’s only one parameter "message", it doesn’t need the parentheses around it, but if you have more than one, you just wrap them with parentheses.*/
const saySomething = message => console.log(message);
saySomething("Hello, young Padawan!");

const sayHello = () => console.log("Hello There!, General Kenobi")
sayHello();


// Returning Multiple Lines
/* Whenever an arrow function needs to return multiple lines of code, such as this one which returns a multi-line string, the parentheses mentioned in the implicit return function above are required.
This goes for using an explicit return statement inside a set of curly braces, too.
If you need to return multiple lines of code, you must wrap whatever comes after the return keyword in parentheses. */
const returnMultipleLines = () => (
    `
    <p>
        This is a multiline string!
    <p>
    `
)
console.log(returnMultipleLines());