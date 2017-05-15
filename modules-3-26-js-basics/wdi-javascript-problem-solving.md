autoscale: true
footer: © New York Code + Design Academy 2016
slidenumbers: true

#[fit] JavaScript<br>Problem<br>Solving

---

# Why learn more about solving programming problems?

- Most beginners can program a basic web page, but troubleshooting interactions and algorithmic thinking are more rare

- These kinds of problems are much harder to Google for and teach you to think on your feet

- Your code and thought process will be better organized

- Many coding interview questions ask you to solve problems

---

# What is an **algorithm**?

- A set of simple instructions to complete a task

- Computers aren't smart, they have no intuition: an algorithm tells them everything step by step in a language they can understand

---

# Peanut Butter + Jelly Sandwich algorithm

```js
// Get the jelly

// Get the peanut butter

// Get the bread

// Spread peanut butter on one side and jelly on the other

// Combine the two sides
```

Here's an example of an algorithm. What steps could we add before, after, or in between steps?

---

# As applied to a web development problem

How do I make an automatic slideshow?

```js
// Wait for 3 seconds.

// Select the image DOM element.

// Move the image across the screen somehow (positioning? margins?)

// Repeat the process.
```

How can we break up the above algorithm even further?

What is some actual code that can help us solve each step?

---

# Another problem

We want to display an array's contents along with the index number (position of the element) of each array element.

```js
// First, we'll need an array with some items in it.

// Next, we'll need to iterate (loop) over the array.

// Within our loop, we'll log each array item to the console
// within this log statement, we'll concatenate (add) together
// the array item along with the index number we're currently on
```

---

# Adding code to our algorithm

```js
// First, we'll need an array with some items in it
var myArray = ["giraffe", "zebra", "antelope"];

// Next, we'll need to iterate (loop) over the array
for (var i = 0; i < myArr.length; i++) {
  // Within our loop, we'll log each array item to the console
  // within this log statement, we'll concatenate (add) together
  // the array item with the index number we're currently on
  console.log(i + ": " + myArr[i]);
}

```


---

# Exercise

- Write a pseudo-code algorithm (a list of steps in comments) that goes through an array of numbers, in reverse, and prints out the number, then itself doubled, and then itself cut in half, i.e. "Number: 10", "Doubled: 20", "Half: 5".

- Break the problem down into as many steps as possible

- Begin researching the code behind each of the steps

---

# Debugging Tips

---

# Stack Trace

- Many times, you'll find the answer to the bug in the error message you get

- Occasionally it will even indicate the exact file and line number the problem was caused by:

```js
console.lg("hi")
> Uncaught TypeError: undefined is not a function at <anonymous>:1:9
// You tried to call something that wasn't a function
// In this case, "lg" is not a function of the console, "log" is
```

- Read error messages closely to see if you can figure out what went wrong. If you can't figure it out, you can expand the "stack trace" and / or jump directly to the problem code.

---

# Debugger

- The keyword, 'debugger' allows you to stop time in your scrips.
- This will stop and inspect your code, with the option of continuing on in the developer tools.

```js
var message = "hello world";
console.log(message);
debugger;
alert("I think I found the bug!");
// the alert will not fire while debugger is on (developer tools)
```

- With the debugger turned on, the third line will not be invoked immediately.

---

# Debugger Exercise

- Try adding a debugger statement into a script then opening the web page.
- By default the debugger functionality is turned off.
- To turn it on, open the developer tools, and refresh the page!

---

# A final note

- Remember that nobody has all the answers or knows literally everything that there is to know about programming, especially not about your code

- Chrome dev tools are your friend. Log in your code, open it when things don't work, and inspect variables in debug mode.

- Don't be ashamed to use Google (and Stack Overflow), ask a fellow student, or ask your instructor if you have a question. The only way to get better is to learn from those around you!
