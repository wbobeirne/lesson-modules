
# Pass by reference vs value

- Some function arguments are passed as a reference to the variable's value
- Other function arguments are passed by copying the value to a new variable
- Complex data types (Arrays, Objects) are by **reference**
- Simpler data types (Bools, Numbers, Strings) are by **value**

---

# Pass by reference vs value

```js
var myArray = [1, 2];
var myString = "Howdy";

function addToArray(array, value) {
  array.push(value);
  return array;
}

function addToString(string, moreString) {
  string = string + moreString;
  return string;
}

console.log(addToArray(myArray, 3)); // Prints [1, 2, 3]
console.log(addToString(myString, "Partner")); // Prints "HowdyPartner"
console.log(myArray); // Prints [1, 2, 3], NOT [1, 2]
console.log(myString); // Prints "Howdy", NOT "HowdyPartner"
```
