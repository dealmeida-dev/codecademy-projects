// Race numbers are assigned randomly
let raceNumber = Math.floor(Math.random() * 1000);

// Understading runner's age and if registred early
let registredRunner = false;
let runnersAge = 18;


// If runners is an adult and registred ealry, we add 1000 to their racing number
if (registredRunner == true && runnersAge > 18) raceNumber += 1000;


// Check the conditions and printing the racing time and racing number to the console.
if (registredRunner == true && runnersAge > 18) {
  console.log(
    `Your race number is: ${raceNumber}. You will start running at 9:30am`
  );
} else if (registredRunner != true && runnersAge > 18) {
  console.log(
    `Late adults run at 11:00 am. Your racing number is: ${raceNumber}`
  );
} else if (runnersAge < 18) {
  console.log(
    `Youth registrants run at 12:30 pm (regardless of registration). Your racing number is: ${raceNumber}`
  );
} else {
  console.log("Please see registration desk for more information.");
}
