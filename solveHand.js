const Hand = require("pokersolver").Hand;
const deck = require("./deck.js");

//Run Pokersolver function to evaluate player hand and output it.
const solveHand = function solveHand(deck) {
  if (typeof deck === "undefined") {
    console.log("Error! Wrong type used for function parameter!");

    return;
  }

  let handStrength = Hand.solve(deck.playerHand, deck.typeOfGame);

  console.log(`Your hand: ${handStrength}`);

  console.log(
    `You have: ${handStrength.descr}, \nwith a rank of: ${handStrength.rank}`
  );
};

module.exports.solveHand = solveHand;
