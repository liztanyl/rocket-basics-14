// dice roll
var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);

  var diceNumber = randomInteger + 1;

  return diceNumber;
};

// all the diff game state
var gameStateDiceRoll = `GameStateDiceRoll`;
var gameStateChooseDiceOrder = `GameStateChooseDiceOrder`;
var gameStateCompareScore = `GameStateCompareScore`;
var gameState = gameStateDiceRoll;

//storing of players' output
var playerRolls = [];
// start off with player 1
var currentPlayer = 1;
//storing of the combined numbers
var allPlayersScore = [];

//reset the game
var restartGame = function () {
  currentPlayer = 1;
  gameState = gameStateDiceRoll;
  allPlayersScore = [];
  console.log(
    `Reset Game. Current player ${currentPlayer}. GameState ${gameState}`
  );
};

// player dice roll
var rollDiceForPlayer = function () {
  var counter = 0;
  // player rolls two dice values and add into an array that stores the player's dice roll
  while (counter < 2) {
    playerRolls.push(rollDice());
    counter = counter + 1;
  }
  console.log(playerRolls);
  return `Welcome Player ${currentPlayer} <br> You rolled: <br> Dice 1: ${playerRolls[0]} | Dice 2: ${playerRolls[1]} <br><br> Submit '1' or '2' to choose the order of the dice.`;
};

// choosing the order of the dice
var getPlayerScore = function (input) {
  var playerScore;
  // validating input
  if (input != 1 && input != 2) {
    return `Error! Please input only 1 or 2`;
  }
  // first number chosen for the order of the dice
  if (input == 1) {
    var playerScore = Number(String(playerRolls[0]) + String(playerRolls[1]));
    playerScore = `Your chosen value is ${playerScore}`;
  }
  //second number chosen for the order of the dice
  if (input == 2) {
    var playerScore = Number(String(playerRolls[1]) + String(playerRolls[0]));
    playerScore = `Your chosen value is ${playerScore}`;
  }
  // store the values into the array
  allPlayersScore.push(playerScore);
  console.log(allPlayersScore);
  // to clear the array for the next player.
  // Understood that this variable here clears the array for the next player.
  playerRolls = [];

  return `Your chosen value is ${playerScore}`;
};

// comparsion of score function logic
var comparePlayerScore = function () {
  var output = `Player 1 score : ${allPlayersScore[0]} <br> Player 2 score : ${allPlayersScore[1]}`;
  // if player 1 score is more than player 2 score
  if (allPlayersScore[0] > allPlayersScore[1]) {
    output =
      output + `<br><br> Player 1 Wins! <br><br> Press submit to play again.`;
  }
  // if player 2 score is more than player 1 score
  if (allPlayersScore[1] > allPlayersScore[0]) {
    output =
      output + `<br><br> Player 2 Wins! <br><br> Press submit to play again.`;
  }
  // if player 1 score is equal to player 2 score
  if (allPlayersScore[0] == allPlayersScore[1]) {
    output =
      output + `<br><br> Its a tie! <br><br> Press submit to play again.`;
  }
  return output;
};

// running the game functions
var main = function (input) {
  var output = ``;

  // first step of the game
  // creating the dice roll values of the player
  if (gameState == gameStateDiceRoll) {
    // generating the dice roll value for player one
    output = rollDiceForPlayer();

    gameState = gameStateChooseDiceOrder;
    console.log(gameState);
    return output;
  }

  if (gameState == gameStateChooseDiceOrder) {
    // getting the player ONE dice ORDER value first
    output = getPlayerScore(input);
    // switching players
    if (currentPlayer == 1) {
      currentPlayer = 2;
      // player two's turn to roll the dice
      // gamestate returned to gameStateDiceRoll and choosing dice order after
      gameState = gameStateDiceRoll;
      return output + `<br><br> It is now Player 2's turn!`;
    }
    // Switching to comparing the scores
    if (currentPlayer == 2) {
      gameState = gameStateCompareScore;
      console.log(gameState);
      return output + `<br><br> Press submit to calculate scores!`;
    }
  }
  //
  if (gameState == gameStateCompareScore) {
    // logic that compares the score and outputs a winner.
    output = comparePlayerScore();
    // resetting the game
    // turning the player back to one
    //clearing of store values in the array
    // gamestate returned to dice roll
    restartGame();

    return output;
  }
};
