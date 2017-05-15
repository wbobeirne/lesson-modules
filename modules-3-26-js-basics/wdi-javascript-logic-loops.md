autoscale: true
footer: © New York Code + Design Academy 2016
slidenumbers: true

# [fit] JavaScript:<br>Logic &<br>Loops

---

# What is logic (as it pertains to programming)?

- Logic is the control flow of your program

- Think of logic as a river that branches off in a few different ways

- It allows you to make the computer do the thinking for you!

---

# First stop: testing

- Any test returns a boolean true or false

- To test if two strings are equal:

```js
"stringone" === "string two";
>false
```

- Using three equals signs instead of two also checks the object type

- If you don't check type, these are both true:

```js
(10 - 5) == 5;
(10 - 5) == "5";
```
- *Always use 3 equals signs.* Otherwise, it can cause bugs down the road!

---

# More testing examples

To test if two strings are NOT equal:

```js
"stringone" !== "string two";
>true
```


To test if one number is greater than another:

```js
5 > 10;
> false
```

`<`, `>`, `<=`, `>=` are also valid comparison operators

---

# The `if` statement

The `if` statement allows us to run code only if a certain test evaluates to `true`

```js
if (5 > 10) {
  console.log("You'll never see this in the console because 5 is not greater than 10");
}

if (5 < 10) {
  console.log("But you'll definitely see this");
}
```

---

# The `else` statement

The `else` statement runs only if the statement in the `if` statement is false

```js
if (5 > 10) {
  console.log("You'll never see this because 5 is not greater than 10");
} else {
  console.log("You will see this though, since 5 < 10 evaluates to false");
}
```
---

# Exercises


- Write a conditional that checks if a variable is less than 10. If it is, alert the user that their variable is less than 10. If it is not, let the user know what the variable was and that it was greater than 10.

- Try running the script and then changing the variable's value to see how this affects the program output

- If you have extra time, write a similar conditional to check if a string stored in a variable is the same as another string

---

# The `else if` statement

If you want to run another test before getting to `else`, you'll want to use `else if`

```js
if (5 > 10) {
  console.log("You'll never see this because 5 is not greater than 10");
} else if (5 === 5) {
  console.log("Yes, 5 really is equal to 5, so this will show up in the console");
} else {
  console.log("We won't get here because our else if evaluates to true");
}
```
---

# Functions

- A `function` is a way to encapsulate code for later use

- It can take arguments, which are used as variables inside the function

- It usually returns a value, which can be used later on or displayed immediately

---

```js
// Declare a function called someName that takes
// two arguments: numberOne and otherNumber
function someName(numberOne, otherNumber){
  // return the sum of numberOne, 10, and otherNumber
  return numberOne + 10 + otherNumber;
}
// call your new function, giving it 2 argument values
// numberOne = 4, otherNumber = 14
// log the result to the console
console.log(someName(4, 14));
// Calling a function is also known as "invoking" it
> 28
```
---

# Another simple function example

```js
// declare a function with the name alertName
// that takes one argument, somePersonsName
function alertName(somePersonsName){
  // the function returns an alert with their name
  return alert(somePersonsName);
}

// invoke the function
alertName("Zach");
```

---

# Exercises

- Declare a function that takes any string as an argument and console logs to the user the text they've entered, try invoking it after it has been declared

- Declare a function that takes no arguments but prints something to the console, try invoking it after it has been declared

- No Whammies!!! Declare a function that receives an input of door 1, 2 or 3. Depending upon which virtual "door" was entered, the function will tell the user they've received a different "prize" in an alert. Tell them if their door is invalid. Try running it after it has been declared a few times with each door option.

---

# Identifying data types

- JavaScript has plenty of useful built in functions

- Assuming you have a variable with some data stored inside of it, and are unaware of its data type…

- You can ask (or query) the variable for its datatype using the `typeof` operator

```js
var yourData = "This is my data.";
typeof yourData;
> "string"
```
---

# Accessing Array items

- If you're unsure of an items' index number inside of an array, or the length of the array, you can use `indexOf(item)` and `length` respectively.

```js
var myArray = ["Linus", "Snoopy", "Peppermint Patty"];
console.log("My array is " + myArray.length + " items long");
> "My array is 3 items long"

var snoopyPosition = myArray.indexOf("Snoopy");
console.log(snoopyPosition + ": " + myArray[snoopyPosition]);
> "1: Snoopy"
```
---

# Loops

- A loop is a block of code that gets repeated for a defined amount of iterations (for loop) or until a certain condition is met (while loop)

- Typically one variable or condition in the loop changes each time it is run

---

# Loops - `for`

```js
for (var i = 0; i < 10; i++) {
  console.log(i);
}
```
```
> 0
> 1
> 2
...
> 9
```
---

# Loops - `for`

```js
var beers = ["Lagunitas", "Brooklyn", "Mermaid"];
for (var i = 0; i < beers.length; i++) {
  console.log(beers[i]);
}
```

```
> "Lagunitas"
> "Peak"
> "Mermaid"
```



---

# Exercise - `for` loop

- Create an array filled with several strings of names

- Use a loop to print out the names, followed by 'is my friend'. Like so:

```
> "Jake is my friend"
> "John is my friend"
> "Samantha is my friend"
> "Billy is my friend"
```
---

# Loops - `while`

```js
var x = 6;
while (x < 10) {
  console.log("On number " + x);
  x++;
}
```

```
> On number 6
> On number 7
> On number 8
> On number 9
```

*WARNING*. While loops can run _forever_ if they're not handled correctly. Use with caution!

---

# Exercise - `while` loop

- Create a while loop that "sings" the classic song "99 Bottles of Root Beer on the Wall". The code it outputs to the console should look similar to this:

- For example, it should look like the following all the way down to zero.
```
> "99 bottles of root beer on the wall, 99 bottles of root beer..."
> "take one down, pass it around 98 bottles of root beer on the wall"
> "98 bottles of root beer on the wall, 98 bottles of root beer...
> "take one downpass it around 97 bottles of root beer on the wall"
```

---

# Resources

### Codecademy

[JavaScript - Functions, 'For' Loops in JavaScript, 'While' Loops in JavaScript](https://github.com/nycda-staff/nycda-curriculum/pull/148/files)

### TeamTreeHouse

[JavaScript Loops, Arrays and Objects - Simply Repetitive Tasks with Loops](https://teamtreehouse.com/library/javascript-loops-arrays-and-objects)
