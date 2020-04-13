let suits = ["hearts", "diamonds", "clubs", "spades"];
let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let handPlayerOne = [];
let handPlayerTwo = [];
let playerOneCardInPlay = [];
let playerTwoCardInPlay = [];

class Card {
  constructor(suit, rank, value) {
    (this.suit = suit), (this.rank = rank), (this.value = value);
  }
}

class Deck {
  constructor() {
    this.deck = [];
  }

  createDeck(suits, ranks, values) {
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        let card = {
          rank: ranks[j],
          suit: suits[i],
          value: values[j],
        };
        this.deck.push(card);
      }
    }
    return this.deck;
  }

  shuffle() {
    let currentIndex = this.deck.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle…
    while (0 !== currentIndex) {
      // Pick a remaining element…
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And move it to the new array.
      temporaryValue = this.deck[currentIndex];
      this.deck[currentIndex] = this.deck[randomIndex];
      this.deck[randomIndex] = temporaryValue;
    }
    return this.deck;
  }

  deal() {
    handPlayerOne.push(this.deck.slice(0, 26));
    handPlayerTwo.push(this.deck.slice(26, 52));
    console.log(handPlayerOne, handPlayerTwo);
  }
}
// let compareCards = function () {
//   if (handPlayerOne.length === 52) {
//     console.log("Player 1 wins the game!");
//   } else {
//     handPlayerTwo.length === 52;
//     console.log("Player 2 wins the game!");
//   }
// };

let flipTopCard = function () {
  playerOneCardInPlay.unshift(handPlayerOne[0][0]);
  handPlayerOne[0].shift();
  playerTwoCardInPlay.unshift(handPlayerTwo[0][0]);
  handPlayerTwo[0].shift();
  console.log(
    `Player 1 flipped a ${playerOneCardInPlay[0].rank} of ${playerOneCardInPlay[0].suit} and Player 2 flipped a ${playerTwoCardInPlay[0].rank} of ${playerTwoCardInPlay[0].suit}`
  );
};

// let warComparison = function () {

// };
// let flipCard2 = function () {
//   playerOneCardInPlay.unshift(handPlayerOne[0]);
//   handPlayerOne.shift();
//   playerTwoCardInPlay.unshift(handPlayerTwo[0]);
//   handPlayerTwo.shift();
//   console.log("WE ARE AT WAR!");
// };

let war = function () {
  //   if (handPlayerOne[0].length >= 4 && handPlayerTwo[0].length >= 4) {
  flipTopCard();
  flipTopCard();
  flipTopCard();
  flipTopCard();
  console.log(
    `Player 1 submitted 3 cards face down and flipped over a ${playerOneCardInPlay[0].rank} of ${playerOneCardInPlay[0].suit}.
    Player 2 submitted 3 cards face down and flipped over a ${playerTwoCardInPlay[0].rank} of ${playerTwoCardInPlay[0].suit}`
  );
  if (playerOneCardInPlay[0].value > playerTwoCardInPlay[0].value) {
    handPlayerOne[0].push(
      playerOneCardInPlay[0],
      playerOneCardInPlay[1],
      playerOneCardInPlay[2],
      playerOneCardInPlay[3],
      playerTwoCardInPlay[4],
      playerTwoCardInPlay[0],
      playerTwoCardInPlay[1],
      playerTwoCardInPlay[2],
      playerTwoCardInPlay[3],
      playerTwoCardInPlay[4]
    );
    console.log("PLAYER 1 WINS THE WAR!");
    console.log(`Player 1 has ${handPlayerOne[0].length} cards left.`);
    console.log(`Player 2 has ${handPlayerTwo[0].length} cards left.`);
  }
  // if (playerTwoCardInPlay[0].value > playerOneCardInPlay[0].value)
  else {
    handPlayerTwo[0].push(
      playerOneCardInPlay[0],
      playerOneCardInPlay[1],
      playerOneCardInPlay[2],
      playerOneCardInPlay[3],
      playerOneCardInPlay[4],
      playerTwoCardInPlay[0],
      playerTwoCardInPlay[1],
      playerTwoCardInPlay[2],
      playerTwoCardInPlay[3],
      playerTwoCardInPlay[4]
    );
    console.log(
      `Player 2 played a ${playerTwoCardInPlay[0].rank} of ${playerTwoCardInPlay[0].suit} and Player 1 played a ${playerOneCardInPlay[0].rank} of ${playerOneCardInPlay[0].suit}. PLAYER 2 WINS THE WAR!`
    );
    console.log(`Player 1 has ${handPlayerOne[0].length} cards left.`);
    console.log(`Player 2 has ${handPlayerTwo[0].length} cards left.`);
  }
};

let checkWinner = function () {
  if (handPlayerOne[0].length === 52 || handPlayerTwo[0].length < 5) {
    console.log("PLAYER ONE IS THE WINNER!");
    return null;
  } else if (handPlayerTwo[0].length === 52 || handPlayerOne[0].length < 5) {
    console.log("PLAYER TWO IS THE WINNER!");
    return null;
  } else console.log("keep playing");
};

let playGame = function () {
  while (handPlayerOne[0].length < 52 && handPlayerOne[0].length > 4) {
    flipTopCard();
    if (playerOneCardInPlay[0].value > playerTwoCardInPlay[0].value) {
      console.log(
        `Player 1 wins the round! Player 1 played a ${playerOneCardInPlay[0].rank} of ${playerOneCardInPlay[0].suit} and Player 2 played a ${playerTwoCardInPlay[0].rank} of ${playerTwoCardInPlay[0].suit}`
      );
      handPlayerOne[0].push(playerTwoCardInPlay[0], playerOneCardInPlay[0]);
      console.log(
        `Player 1 holds ${handPlayerOne[0].length} cards and Player 2 holds ${handPlayerTwo[0].length} cards`
      );
      checkWinner();
    } else if (playerTwoCardInPlay[0].value > playerOneCardInPlay[0].value) {
      console.log(
        `Player 2 wins the round! Player 1 played a ${playerOneCardInPlay[0].rank} of ${playerOneCardInPlay[0].suit} and Player 2 played a ${playerTwoCardInPlay[0].rank} of ${playerTwoCardInPlay[0].suit}`
      );
      handPlayerTwo[0].push(playerTwoCardInPlay[0], playerTwoCardInPlay[0]);
      console.log(
        `Player 1 holds ${handPlayerOne[0].length} cards and Player 2 holds ${handPlayerTwo[0].length} cards`
      );
      checkWinner();
    } else {
      console.log("WE ARE AT WAR!");
      war();
    }
  }
  return checkWinner();
};
let deck = new Deck();
deck.createDeck(suits, ranks, values);
deck.shuffle();
deck.deal();
playGame();
