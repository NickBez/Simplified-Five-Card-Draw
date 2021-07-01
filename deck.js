const readline = require("readline-sync");
class Deck {
  constructor() {
    this.deck = [];
    this.handSize = 0;
    this.gameType;

    const suits = ["h", "d", "c", "s"];
    const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "T", "J", "Q", "K"];

    //Loop to create a deck of cards based on the number of values and suits 4 x 13 = 52 cards.
    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]}${suits[suit]}`);
      }
    }
  }

  shuffle() {
    console.log("Shuffling... Shuffling...");

    const deck = this.deck;
    let length = deck.length;

    //While cards remain in the deck to shuffle....
    while (length) {
      //Pick a random remaining card.
      let current = Math.floor(Math.random() * length--);

      //Swap card with current card.
      [deck[length], deck[current]] = [deck[current], deck[length]];
    }
    return this;
  }

  game() {
    //Prompt user for game type.
    const gameInput = readline.question(
      "What game would you like to play? [Five Card Draw | Badugi]"
    );

    console.log(`You have chosen to play ${gameInput}`);

    //Use gameInput to get the hand size as well as the type of game for pokersolver.
    if (gameInput.toUpperCase() === "FIVE CARD DRAW") {
      this.handSize = 5;

      this.gametype = "standard";
    } else if (gameInput.toUpperCase() === "BADUGI") {
      this.handSize = 4;

      this.gameType = "standard";
    } else {
      console.log("Error! Invalid input! Please try again.");
      this.game();
    }
  }

  deal() {
    //Initialise player hand to empty array.
    this.playerHand = [];

    //Loop to deal cards based on how many the gametype requires.
    for (let k = 0; k < this.sizeOfHand; k++) {
      let dealtCards = this.deck.pop();

      this.playerHand.push(dealtCards);
    }

    return this.playerHand;
  }
  //Getter function for number of remaining cards in deck.
  get deckRemaining() {
    return this.deck.length;
  }
  //Getter for type of game to be played.
  get typeOfGame() {
    return this.gameType;
  }

  get sizeOfHand() {
    return this.handSize;
  }
}

module.exports = Deck;
