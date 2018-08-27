$(document).ready(function() {
  //Varables
  var gameArea = $('#gameArea')
  var listOfQueens = ['adoreDelano', 'alyssaEdwards', 'jigglyCaliente', 'jinxMonsoon', 'jujubee', 'kimChi', 'missFame', 'raja', 'raven', 'sharronNeedles', 'sheaCoulee', 'violetChachki', 'adoreDelano', 'alyssaEdwards', 'jigglyCaliente', 'jinxMonsoon', 'jujubee', 'kimChi', 'missFame', 'raja', 'raven', 'sharronNeedles', 'sheaCoulee', 'violetChachki']

  // Using Durstenfeld shuffle algorithm.
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  }

  function addCardToGameArea(array) {
    for (i = 0; i < array.length; i++) {
      gameArea.append('<div class="card"><div class="card-image ' + array[i] + '"></div></div>')
    }

  }

  function puttingAllTheCardsOnTheTable(listOfQueens) {
    //list of Queens

    //This is a random list of queens. I'll use this for the cards
    shuffleArray(listOfQueens)

    // create cards
    // inCart.append('<div class="card"><div class="card-image' + adoreDelano + '"></div></div>')
    addCardToGameArea(listOfQueens)
    //put cards on the table

  }
  puttingAllTheCardsOnTheTable(listOfQueens)

});
