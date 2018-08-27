$(document).ready(function() {
  //Varables
  var gameArea = $('#gameArea')
  // var listOfQueens = ['adoreDelano', 'alyssaEdwards', 'jigglyCaliente', 'jinxMonsoon', 'jujubee', 'kimChi', 'missFame', 'raja', 'raven', 'sharronNeedles', 'sheaCoulee', 'violetChachki', 'adoreDelano', 'alyssaEdwards', 'jigglyCaliente', 'jinxMonsoon', 'jujubee', 'kimChi', 'missFame', 'raja', 'raven', 'sharronNeedles', 'sheaCoulee', 'violetChachki']
  
  //easy list
  var listOfQueens = ['adoreDelano', 'alyssaEdwards', 'jigglyCaliente', 'adoreDelano', 'alyssaEdwards', 'jigglyCaliente']
  var pick = [];
  var pickId = [];


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
      var data = 'data-name="' + array[i] + '"'
      gameArea.append('<div class="card"' + data + 'id="card-' + i + '" ><div class="card-image ' + array[i] + '"></div></div>')
    }

  }

  function puttingAllTheCardsOnTheTable(listOfQueens) {
    //Shuffle list of cards
    shuffleArray(listOfQueens)
    // put cards on table
    addCardToGameArea(listOfQueens)
    //put cards on the table
  }
  // generating the cards for the game
  puttingAllTheCardsOnTheTable(listOfQueens)

  // Update pick variables 
  function updatePicks(choice, id) { 
    pick.length == 2 ? pick = [choice] : pick.push(choice); 
    pickId.length == 2 ? pickId = [id] : pickId.push(id); 
  }

  // remove cards if match
  function removeIfMatched() {
    //check for match & make sure they don't click the same card
    if (pick[0] === pick[1] && pickId[0] !== pickId[1]) {
      $('#' + pickId[0]).addClass('correct')
      $('#' + pickId[1]).addClass('correct')
    } else {
      setTimeout( function() {
        $('#' + pickId[0]).delay( 800 ).removeClass('flip')
        $('#' + pickId[1]).delay( 800 ).removeClass('flip')
      }, 800);

    }
  }

  $('.card').on('click', function() {
    var choice = $(this).data('name')
    var choiceId = $(this).attr('id')
    var correct = $(this).hasClass('correct')

    $(this).addClass('flip')
    console.log(correct)
    //set pick array variables if card has not flipped
    correct === false ? updatePicks(choice, choiceId) : null


    console.log(pick)
    console.log(pickId)
    if (pick.length == 2) {
      removeIfMatched()
    }  else {
      //allow for a second pick
    }



    // cart.slideToggle(300);
  })

});
