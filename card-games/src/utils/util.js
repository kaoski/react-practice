function generateNewDeck() {
  const { ranks, suits } = getRanksAndSuitsList();
  const deckOfCard = ranks.reduce((currentDeck, rank) => {
    const set = suits.reduce((currentSet, suit) => {
      currentSet.push(rank + suit);
      return currentSet;
    }, []);
    currentDeck = currentDeck.concat(set);
    return currentDeck;
  }, []);
  shuffle(deckOfCard);
  return deckOfCard;
}

export function getInitialBoardState() {
  const deck = generateNewDeck();
  const boardState = {};
  deck.forEach((card, index) => {
    boardState[card] = {
      row: Math.floor(index / 13),
      col: index % 13,
      shouldHide: false,
      showFront: false,
    };
  });
  return boardState;
}

function shuffle(deckOfCard) {
  let currentPos = deckOfCard.length - 1;
  while (currentPos >= 0) {
    let currentIndex = currentPos;
    let randomIndex = Math.floor(Math.random() * currentIndex);
    [deckOfCard[currentIndex], deckOfCard[randomIndex]] = [
      deckOfCard[randomIndex],
      deckOfCard[currentIndex],
    ];
    currentPos--;
  }
}

export function getCardRankAndSuit(card) {
  return { rank: card.charAt(0), suit: card.charAt(1) };
}

function getRanksAndSuitsList() {
  const ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
    "A",
  ];

  const suits = ["c", "h", "s", "d"];

  return { ranks, suits };
}

function areSameColor(firstCard, secondCard) {
  const { suit: firstCardSuit } = getCardRankAndSuit(firstCard);
  const { suit: secondCardSuit } = getCardRankAndSuit(secondCard);
  if (
    (firstCardSuit === "c" || firstCardSuit === "s") &&
    (secondCardSuit === "c" || secondCardSuit === "s")
  ) {
    return true;
  } else if (
    (firstCardSuit === "h" || firstCardSuit === "d") &&
    (secondCardSuit === "h" || secondCardSuit === "d")
  ) {
    return true;
  }
  return false;
}

export function isWinningPair(firstCard, secondCard) {
  const { rank: firstCardRank } = getCardRankAndSuit(firstCard);
  const { rank: secondCardRank } = getCardRankAndSuit(secondCard);
  if (firstCardRank === secondCardRank && areSameColor(firstCard, secondCard)) {
    return true;
  }
  return false;
}
