var getRandomNumber = function (min, max) {
  var randomDecimal = Math.random() * (max - min + 1);
  var randomNumber = Math.floor(randomDecimal) + min;
  return randomNumber;
};

var correctGuesses = 0;

var secretWordBaseMain = function (input) {
  var myOutputValue = "Guess the secret word twice to win!";
  var secretWord = "";
  var randomNum = getRandomNumber(1, 4);

  if (randomNum == 1) {
    secretWord = "pikachu";
  } else if (randomNum == 2) {
    secretWord = "bulbasaur";
  } else if (randomNum == 3) {
    secretWord = "charmander";
  } else {
    secretWord = "squirtle";
  }
  console.log(randomNum, secretWord);

  if (input == secretWord) {
    correctGuesses += 1;
    myOutputValue =
      "You guessed it right once! Guess the secret word again to win :)";
  }

  if (correctGuesses == 2) {
    myOutputValue = "You got 2 correct guesses, you win!";
    correctGuesses = 0;
  }
  return myOutputValue;
};

// -----------------------------------------------------
// Comfortable:
var secretWordTwiceRowMain = function (input) {
  var myOutputValue =
    "That's not it... Guess the secret word twice in a row to win!";
  var secretWord = "";
  var randomNum = getRandomNumber(1, 4);

  if (randomNum == 1) {
    secretWord = "pikachu";
  } else if (randomNum == 2) {
    secretWord = "bulbasaur";
  } else if (randomNum == 3) {
    secretWord = "charmander";
  } else {
    secretWord = "squirtle";
  }
  console.log(randomNum, secretWord);

  if (input == secretWord) {
    correctGuesses += 1;
    myOutputValue =
      "You guessed it right once! Guess the secret word again to win :)";
  } else {
    correctGuesses = 0;
  }

  if (correctGuesses == 2) {
    myOutputValue = "You got 2 correct guesses, you win!";
    correctGuesses = 0;
  }

  return myOutputValue;
};

// -----------------------------------------------------
// Comfortable:
var correctGuessesNeeded = getRandomNumber(2, 4);

var secretWordXRowMain = function (input) {
  var myOutputValue = `That's not it... Guess the secret word ${correctGuessesNeeded} times in a row to win!`;

  var secretWord = "";
  var randomNum = getRandomNumber(2, 4);

  if (randomNum == 1) {
    secretWord = "pikachu";
  } else if (randomNum == 2) {
    secretWord = "bulbasaur";
  } else if (randomNum == 3) {
    secretWord = "charmander";
  } else {
    secretWord = "squirtle";
  }
  console.log(randomNum, secretWord);

  if (input == secretWord) {
    correctGuesses += 1;
    myOutputValue = `You guessed it right once! How many more guesses you need to win: ${
      correctGuessesNeeded - correctGuesses
    } :)`;
  } else {
    correctGuesses = 0;
  }

  if (correctGuesses == correctGuessesNeeded) {
    myOutputValue = `You guessed the secret word ${correctGuessesNeeded} times in a row! You win!!!`;
    correctGuesses = 0;
  }

  return myOutputValue;
};

// -----------------------------------------------------

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
