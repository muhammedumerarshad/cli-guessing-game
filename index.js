#! /usr/bin/env node
import inquirer from "inquirer";
// // let computer guessa a random number
// // user input for guessig number
// // compare user input with generated number
const randomNumber = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6",
    }
]);
if (answers.UserGuessedNumber === randomNumber) {
    console.log("Your answer is correct congratz!");
}
else {
    console.log("You guessed the wrong answer");
}
