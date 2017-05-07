# Javascript Objects and Prototypes

## Goal

Develop a program that uses classes

## Assignment
After being contracted to make the next big juice app for a local juice bar, you need to start thinking about how you're going to represent your fruity ingredients in code form.

### Getting Started

**Part 1**

* Create a `Food` class.
    * All food at our bar can be juiced. Add a method to `juice()` the `Food` class that prints out the attribute `juicingMessage`.
    * Once something has been juiced, it cannot be juiced again. Keep track of if something has been juiced, and log if someone tries to juice something twice.
    * Example code:
      ```js
      class Food {
        constructor() {
          this.juicingMessage = "Juicing!";
          this.hasBeenJuiced = false;
        }

        juice() {
          if (this.hasBeenJuiced) {
            console.log("This has already been juiced!");
          } else {
            console.log(this.juicingMessage);
          }
        }
      }
      ```

* Create a `Fruit` class that inherits from `Food` using `extends`.
    * Fruits have names (orange, apple, banana etc.) Make sure each fruit has and saves its name.
    * Add a method to log the name of the fruit called `sayName()`.
    * Set the `juicingMessage` to include the fruit name.
* Create an `Apple` class that inherits from the `Fruit` class.
    * Define an `Apple` constructor that takes the name of the apple variety - red delicious, gala, fuji, etc.
    * `Apple` needs to have a boolean `isPeeled` member.
    * Add a method to peel the apple and set `isPeeled`. Also, log the variety of the apple and log that it's been peeled.
    * Apples cannot be juiced until they're peeled, so add this check the `juice` method. Log if someone tries to juice an apple without peeling it first. Keep `Food`'s juicing functionality by using `super`.
    * Set the `juicingMessage` to include what type of apple.
* Create a `Strawberries` class that also inherits from the `Fruit` class.
    * The `Strawberries` constructor should take in a number, for the number of strawberries we're using.
    * `Strawberries` needs to keep track of if they've been washed yet, and have a method for washing them. Log how many we washed.
    * Before we `juice` strawberries, we need to make sure they're washed. We also want to log how many strawberries we juice. Log if we try to juice unwashed strawberries. Again, use super to maintain the original `juice` functionality.
    * Set the `juicingMessage` to include how many strawberries were juiced.


**Part 2**

Now that you've set the ground work, let's start using our fruits and vegetables. Create a `JuiceBar` singleton that has a `makeJuice` function that does everything below. But try to split out the functionality amongst other singleton functions, like `listIngredients` or `prepareIngredients`.

* Creates the following instances:
  * two `Apple` instances with different names
  * a `Strawberries` instance
  * and one other `Fruit` of your choosing
* Says each fruit's name. (Remember: apples & strawberries are also fruit)
* Peels each apple.
* Washes the strawberries.
* Juice all of the fruit.

Now run `makeJuice`, and check that the output matches the output in the Grading Criteria below.


## Grading Criteria

The completed assignment should:

* demonstrate inheritance between `Food -> Fruit -> Apple` and `Food -> Fruit -> Strawberries`
* have an output similar to the following in the browser's console (Doesn't need to be exact)

    ```
    Apple
    Apple
    Strawberries
    [your custom fruit]
    Peeling [apple type 1] apple
    Peeling [apple type 2] apple
    Washing [number] strawberries
    Juicing [apple type 1] apple
    Juicing [apple type 2] apple
    Juicing [number] strawberries
    Juicing [your custom fruit]
    ```

* good indentation and variable naming!

**Complete** = Meets all grading criteria above.

**Incomplete** = Does not meet all grading criteria above. Needs improvement or missing submission.
