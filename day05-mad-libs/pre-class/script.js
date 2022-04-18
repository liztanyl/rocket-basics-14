// #######################################################
// #######################################################

// Attempt the Follow Along exercise from the Arrays module below with followArraysMain as the main function.

var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.ceil(randomDecimal);
  var diceNumber = randomInteger;
  return diceNumber;
};

// Store guesses in a global array that persists across Submits.
var guesses = [];

var followArraysMain = function (input) {
  // Add the user's guess to the guesses array.
  guesses.push(input);

  // Generate a random dice number.
  var randomDiceNumber = rollDice();

  // Initialise output to communicate loss.
  // Output the record of all guesses regardless of loss or win.
  var myOutputValue = `Dice rolled ${randomDiceNumber}. You guessed ${input}. <br>`;

  // If the guess matches the dice roll, change output to communicate win.
  if (randomDiceNumber == input) {
    myOutputValue += "You win!";
  } else {
    myOutputValue += "You lose!";
  }

  myOutputValue += `<br>
  Your guesses: ${guesses}`;

  // Return output value.
  return myOutputValue;
};

// #######################################################
// #######################################################

// Attempt the Follow Along exercise from the Looping Over An Array module below with followArraysLoopsMain as the main function.

// Initialise an empty names array
var names = ["adam", "dom", "ming sheng"];
//   0      1       2
var followArraysLoopsMain = function (input) {
  // Set a boolean value found to a default value of false
  var found = false;

  // Loop over the names array, and set found to true if the input name already exists in the names array
  for (var index = 0; index < names.length; index += 1) {
    var currentName = names[index];
    if (currentName == input) {
      found = true;
    }
  }

  // If no duplicate name was found, add the input name to the names array
  if (!found && names.length < 10) {
    names.push(input);
  }

  // Return the full array of names
  var myOutputValue = "All names: ";

  for (var j = 0; j < names.length; j += 1) {
    myOutputValue += `<br> ${names[j]}`;
  }

  return myOutputValue;

  //

  // // Return each name on a separate line
  // var myOutputValue = "All names: <br>";

  // for (var index = 0; index < names.length; index += 1) {
  //   myOutputValue += `${names[index]}<br>`;
  // }

  // return myOutputValue;
};
