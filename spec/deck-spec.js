const Deck = require("../deck.js");

describe("Class functions.", () => {
  it("It should return the type of game.", () => {
    const deck = new Deck();
    const spy = spyOnProperty(deck, "typeOfGame").and.returnValue("standard");

    expect(deck.typeOfGame).toEqual("standard");

    expect(spy).toHaveBeenCalled();
  });

  it("It should return the number of cards in deck at initialisation.", () => {
    const deck = new Deck();
    expect(deck.deckRemaining).toEqual(52);
  });

  it("It should return number of cards after dealing 5 cards.", () => {
    const deck = new Deck();
    spyOnProperty(deck, "sizeOfHand").and.returnValue(5);

    deck.deal();

    expect(deck.deckRemaining).toEqual(47);
  });

  it("It should compare initial deck with shuffled deck.", () => {
    const deck = new Deck();
    expect(deck.deckRemaining).toEqual(52);

    const oldDeck = [...deck.deck];
    deck.shuffle();

    expect(deck.deck).not.toEqual(oldDeck);
  });

  describe("Deal method.", () => {
    it("Should deal 5 cards to player.", () => {
      const deck = new Deck();

      spyOnProperty(deck, "sizeOfHand").and.returnValue(5);

      deck.deal();

      expect(deck.playerHand.length).toEqual(5);
    });
    // it("Should deal 4 cards to the player.", () => {
    //   const deck = new Deck();
    //   if ((deck.handSize = 4)) {
    //     spyOn(deck, "deal").and.returnValues(["3c", "8s", "Ah", "Qc"]);
    //   }

    //   const result = deck.deal();

    //   expect(result).toEqual(["3c", "8s", "Ah", "Qc"]);
    // });
  });
});
