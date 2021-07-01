const Deck = require("./deck.js");
const readline = require("readline-sync");
const solver = require("./solveHand.js");

function setUpGame() {
  //Create a new instance of the Deck class.
  const deck = new Deck();

  if (typeof deck === undefined) {
    console.log("ERROR! Wrong type passed for deck.");

    return;
  }

  //Ask user for type of game to be played.
  deck.game();

  //Shuffle the deck.
  deck.shuffle();

  //Deal the required amount of cards to the player.
  deck.deal();

  return deck;
}

const playAgain = function playAgain(deck) {
  if (typeof deck === undefined) {
    console.log("Error-playAgain. Wrong type used for function parameter!");

    return;
  }
  //Ask user if they would like to play again without resetting the deck.
  const anotherRound = readline.question(
    "\nWould you like to play again? [y/n]\n"
  );

  if (anotherRound === "y" && deck.deckRemaining >= deck.sizeOfHand) {
    //If user chose yes,given a new hand from the deck.
    deck.deal();

    //Use pokersolver on player hand.
    solver.solveHand(deck);

    //Use recursion to ask the player if they would like to play again or stop.
    playAgain(deck);
  } else if (anotherRound === "n" || deck.deckRemaining < deck.sizeOfHand) {
    //End the game if user chose no or if there are not enough cards remaining in the deck for a new hand.
    console.log("The game has ended...");

    return;
  } else {
    console.log("Error! Invalid input! Please try again.");
    playAgain(deck);
  }
};

const playGame = function playGame() {
  //Run set up function to start game.
  const deck = setUpGame();

  //Use pokersolver to figure out strength of the player hand, show their cards and inform the user of what rank they have.
  solver.solveHand(deck);

  //Ask user if they want to play again.
  playAgain(deck);
};

module.exports.playGame = playGame;
module.exports.setUpGame = setUpGame;
module.exports.playAgain = playAgain;
