const cardBaseURL = "http://h3h.net/images/cards/{suit}_{card}.svg";
const deck = new Array();
const suits = ['spade', 'heart', 'diamond', 'club'];
const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const getDeck =()=> {
let deck = new Array();

for(let i = 0; i < suits.length; i++)
	{
	for(let j = 0; j < cards.length; j++)
		{
    let card = [cards[j],  suits[i]];
		deck.push(card);
		}
	}

	return deck;
}

const shuffle = deck => {
	for (let i = 0; i < 1001; i++)
	{
		const location1 = Math.floor((Math.random() * deck.length));
		const location2 = Math.floor((Math.random() * deck.length));
		let tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}

const generateHand = (size,deck) => {
let hand =[size];
for(let i =0; i<size; i++)
{
  hand[i] = deck.pop();
}
return hand;
}

const countPair = hand => {
  let pair=0;
  let pairedArray = {};
  hand.forEach(inner => {
    pairedArray[inner[0]] = 1 + (pairedArray[inner[0]] || 0);
  });
  for (let [key, value] of Object.entries(pairedArray)) {
 
  //  console.log(`${key}: ${value}`);
    pair = value > 1 && value <4 ? pair +1 : pair;
  }
  return pair;
}


let deck1 = getDeck().slice().sort();
console.log(deck1);
shuffle(deck1);
console.log(deck1);
const firstHand =  generateHand(5,deck1).slice().sort();
const secondHand = generateHand(5,deck1).slice().sort();
console.log(firstHand,secondHand);
console.log(countPair(firstHand));
console.log(countPair(secondHand));

