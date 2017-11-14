//JavaScript for GA Memory Game
//by Gwen Latasa

var cards= [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
var cardsInPlay = [];
var totalWins = 0;

var checkForMatch = function(){
  if(cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
    totalWins += 1;
    document.querySelector(".numOfWins").textContent =
    "Number of Wins: " + totalWins;
  }
  else{
    alert("Sorry, try again.");
    resetBoard();
  }
};

var flipCard = function(){

  var cardId = this.getAttribute('data-id');
  this.setAttribute('src', cards[cardId].cardImage)
  cardsInPlay.push(cards[cardId].rank);

  if(cardsInPlay.length === 2){

    setTimeout(checkForMatch, 300);
  }
}; //end function flipCard

var createBoard = function(){
  for(var i = 0; i< cards.length; i++)
  {
    var cardElement  = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id', i);

    cardElement.addEventListener('click', flipCard);

    document.getElementById('game-board').appendChild(cardElement);
  }//end for
};

var resetBoard = function(){
  listImg = document.getElementsByTagName('img');
  for(var i = 0; i< cards.length; i++)
  {
    //reset variables
    cardsInPlay = [];
    //reset card images
    listImg[i].setAttribute('src', "images/back.png");
  }
};

var resetGame = function(){
  resetBoard();
  totalWins = 0;
  document.querySelector(".numOfWins").textContent =
  "Number of Wins: 0";
};

createBoard();
document.getElementById('resetBoard').addEventListener('click', resetBoard);
document.getElementById('resetGame').addEventListener('click', resetGame);
