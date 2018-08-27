$(document).ready(function() {
  //Varables
  var gameArea = $('#gameArea')

  var easy = ['adoreDelano', 'alyssaEdwards', 'jigglyCaliente', 'adoreDelano', 'alyssaEdwards', 'jigglyCaliente', 'missFame', 'missFame']
  var medium = ['jinxMonsoon', 'jujubee', 'kimChi', 'raja', 'raven', 'sharronNeedles', 'sheaCoulee', 'violetChachki', 'jinxMonsoon', 'jujubee', 'kimChi', 'raja', 'raven', 'sharronNeedles', 'sheaCoulee', 'violetChachki']
  var hard = ['adoreDelano', 'alyssaEdwards', 'jigglyCaliente', 'jinxMonsoon', 'jujubee', 'kimChi', 'missFame', 'raja', 'raven', 'sharronNeedles', 'sheaCoulee', 'violetChachki', 'adoreDelano', 'alyssaEdwards', 'jigglyCaliente', 'jinxMonsoon', 'jujubee', 'kimChi', 'missFame', 'raja', 'raven', 'sharronNeedles', 'sheaCoulee', 'violetChachki']
  
  //easy list
  var listOfQueens, attempts, currentCorrect, maxCorrect
  var pick = [];
  var pickId = [];
  var attemptMessage = $('#attempts')



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

  //finding the difficulty of the selected
  function getDifficulty() {
    var difficulty = $('#difficulty option:selected').text()
    switch(difficulty) {
      case 'Easy':
        listOfQueens = easy 
        break
      case 'Medium':
        listOfQueens = medium
        break
      case 'Hard':
        listOfQueens = hard
        break
    }
  }

  // Update pick variables 
  function updatePicks(choice, id) { 
    pick.length == 2 ? pick = [choice] : pick.push(choice); 
    pickId.length == 2 ? pickId = [id] : pickId.push(id); 
  }

  //Check for win 
  function checkforWin() {
    if (currentCorrect === maxCorrect) {
      attemptMessage.text("You Win!!! Play Again?").addClass('winner')
      $('#startContainer').removeClass('d-none')
    }
  }

  // remove cards if match
  function removeIfMatched() {
    //check for match & make sure they don't click the same card
    if (pick[0] === pick[1] && pickId[0] !== pickId[1]) {
      $('#' + pickId[0]).addClass('correct')
      $('#' + pickId[1]).addClass('correct')
      currentCorrect = currentCorrect + 2
      checkforWin()
    } else {
      setTimeout( function() {
        $('#' + pickId[0]).delay( 800 ).removeClass('flip')
        $('#' + pickId[1]).delay( 800 ).removeClass('flip')
        attempts = attempts + 1
        attemptMessage.text("Failed Attempts: " + attempts)
      }, 800);

    }
  }

  function resetGame() {
    attempts = 0
    currentCorrect = 0
    attemptMessage.text("Failed Attempts: " + attempts)
    $('#startContainer').addClass('d-none')
    $('#attempts').removeClass('d-none').removeClass('winner')
    //remove old game stuff
    $('#gameArea').empty()
    //Shuffle list of cards
    shuffleArray(listOfQueens)
    // put cards on table
    addCardToGameArea(listOfQueens)

    //need the count to win;
    maxCorrect = listOfQueens.length
  }


  $('#startGame').on('click', function(){

    //Ask for number of cards 
    getDifficulty()
    // hide start 
    resetGame()

    //picking cards
    $('.card').on('click', function() {
      var choice = $(this).data('name')
      var choiceId = $(this).attr('id')
      var correct = $(this).hasClass('correct')
      console.log('Clicked card')
  
      $(this).addClass('flip')
      console.log(correct)
      //set pick array variables if card has not flipped
      correct === false ? updatePicks(choice, choiceId) : null
  
      if (pick.length == 2) {
        removeIfMatched()
      }  else {
      }
    })
  })



});
