const cardBaseURL = "http://h3h.net/images/cards/{suit}_{card}.svg";
const deck = new Array();
const suits = ['spade', 'heart', 'diamond', 'club'];
const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const getDeck = () => {
  let deck = new Array();

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < cards.length; j++) {
      let card = { Value: cards[j], Suits: suits[i] };
      deck.push(card);
    }
  }
  return deck;
}

const shuffle = deck => {
  for (let i = 0; i < 1001; i++) {
    const location1 = Math.floor((Math.random() * deck.length));
    const location2 = Math.floor((Math.random() * deck.length));
    let tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }
}

const generateHand = (size, deck, chance) => {
  let hand = [size];
  const luck = (Math.random() < chance / 100);

  if (luck) {

    hand[0] = deck[deck.length - 1];
    deck.splice(deck.length - 1, 1);
    hand[1] = deck.find(element => element.Value === hand[0].Value);

    for (let i = 2; i < 5; i++) {
      hand[i] = deck.pop();
    }
    return hand;
  }
  else {
    deck.forEach (hand[i] = deck.pop());
    return hand;
  }
}

const countPair = hand => {
  let pair = 0;
  let pairedArray = {};
  hand.forEach(inner => {
    pairedArray[inner.Value] = 1 + (pairedArray[inner.Value] || 0);
  });
  for (let [key, value] of Object.entries(pairedArray)) {
    pair = value > 1 && value < 4 ? pair + 1 : pair;
  }
  return pair;
}

let deck1 = getDeck();
shuffle(deck1);
const firstHand = generateHand(5, deck1, 90);
console.log(firstHand);
const secondHand = generateHand(5, deck1, 90);
console.log(secondHand);
console.log(countPair(firstHand), countPair(secondHand));

