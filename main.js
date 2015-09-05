'use strict';
var _ = require('lodash');
let cardsCreateAndShuffle = () => {
	let suits = ['\u2665','\u2660','\u2663','\u2666'];
	var cardVal = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
	var theDeck = [];

	for (var s = 0 ; s <=3 ; s ++){
		for (let v = 0; v <= cardVal.length - 1; v++){
			theDeck.push(
			cardVal[v] + suits[s]
			)
		}
	}
	var shuffledDeck = _.shuffle(theDeck);
	return (shuffledDeck);
}

let dealCards = (shuffledDeck) => {
	var playerHand = [];
	var playerHandValue = 0;
	var computer = [];
	var player = shuffledDeck.splice(0,2);
	var computer = shuffledDeck.splice(0,2);
	console.log( 'Your cards are: ' + player);
	console.log('Would you like to hit or stick? [ H | S ]');
	calcValOfHand(player);
	
}

let hit = (playersHand) => {
	calcValOfHand();

}

let calcValOfHand = (theHand) => {
	var cardValues = theHand.map(function(card){
		return card.split('')[0];
		
	})
	for (let i =0 ; i < cardValues.length ; i ++){
		var faceCards = ['A','J','Q','K'];
		if (faceCards.indexOf(cardValues[i]) < 0){
			cardValues[i] = parseInt(cardValues[i]);

		}else if (cardValues[i] === 'A'){
			cardValues[i] = 11;
		}else {
			cardValues[i] = 10;
		}
	}
	console.log(cardValues);
}
let shuffledDeck = cardsCreateAndShuffle();
dealCards(shuffledDeck);


