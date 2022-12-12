// Add user input

let userName = "Hisoka";
let userQuestion = "Is it snowing today?";

// Variables for EightBall random number

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

// If user decides on a Name, else say Hello.
userName ? console.log(`Hello ${userName}!`) : console.log("Hello!");

// Print the user's name and question to console
console.log(`${userName} asked: ${userQuestion}`);

// Control the flow of EightBall random number and assign it to the variable using switch statements

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  default:
    eightBall = "Signs point to yes";
    break;
}

// Priting the EightBall answer to the Question
console.log(eightBall);
