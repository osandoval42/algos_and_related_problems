/*
	One single deck I assume?
*/

class Card{
	constructor(suit, value){
		if (!Card.prototype.values[value] || !Card.prototype.suits[suit])
			throw ("Invalid card type");
		const suit = Card.prototype.suits[suit]
		const rank = Card.prototype.values[value]
		const val = Card.prototype.value;
		this.suit = function(){return suit;};
		this.rank = function(){return rank;};
		this.val = function(){return val;};
	}
}

Card.prototype.suits = Object.freeze({"HEARTS": 4, "SPADES": 3, "ClOVERS": 2, "DIAMONDS": 1}); //disallow set

Card.prototype.values = //frozen hashmap of numbers 2 through 14 mapping to respective names
//disallow set


class Deck{
	constructor(numOfDecks = 1){
		if (numOfDecks < 1)
			throw ("no decks");
		this.numOfDecks = numOfDecks;
		this.undrawnCards = []
		for (let i = 0; i < numOfDecks; i++){
			this.undrawnCards += Deck.prototype.createSingleDeck;
		}
	}
}

Deck.prototype.shuffle = function(){ 
	this.undrawnCards.forEach((currIdxCard, currIdx) => {
		const replacerIdx = Math.floor(Math.random() * this.undrawnCards.length - currIdx);
		this.undrawnCards[currIdx] = this.undrawnCards[replacerIdx];
		this.undrawnCards[replacerIdx] = currIdxCard
	})
}

Deck.prototype.draw = function(){
	if (this.undrawnCards.length < 1)
		throw ("no cards yet")
	return this.undrawnCards.pop();
}

Deck.prototype.undraw = function(card){
	this.undrawnCards.push(card);
}

Deck.prototype.resetDeck = function(){
	if (this.undrawnCards.length !== this.numOfDecks * 52)
		throw ("Missing Cards");
	this.shuffle();
}

Deck.prototype.createSingleDeck(){
	let singleDeck = [];
	Object.keys(Card.prototype.suits).forEach((suit) => {
		Object.keys(Card.prototype.values).forEach((val) => {
			singleDeck.push new Card(suit, val);
		})
	})
	return singleDeck;
}