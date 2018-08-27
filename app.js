$(document).ready(function() {
  //Varables
  var gameArea = $('#gameArea')

  var easy = ['adoreDelano', 'alyssaEdwards', 'jigglyCaliente', 'adoreDelano', 'alyssaEdwards', 'jigglyCaliente']
  var medium = ['jinxMonsoon', 'jujubee', 'kimChi', 'missFame', 'raja', 'raven', 'sharronNeedles', 'sheaCoulee', 'violetChachki', 'jinxMonsoon', 'jujubee', 'kimChi', 'missFame', 'raja', 'raven', 'sharronNeedles', 'sheaCoulee', 'violetChachki']
  var hard = ['adoreDelano', 'alyssaEdwards', 'jigglyCaliente', 'jinxMonsoon', 'jujubee', 'kimChi', 'missFame', 'raja', 'raven', 'sharronNeedles', 'sheaCoulee', 'violetChachki', 'adoreDelano', 'alyssaEdwards', 'jigglyCaliente', 'jinxMonsoon', 'jujubee', 'kimChi', 'missFame', 'raja', 'raven', 'sharronNeedles', 'sheaCoulee', 'violetChachki']
  
  //easy list
  var listOfQueens, attempts
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
        attempts = attempts + 1
        attemptMessage.text("Failed Attempts: " + attempts)
      }, 800);

    }
  }


  $('#startGame').on('click', function(){
    attempts = 0
    //Ask for number of cards 
    getDifficulty()
    // hide start 
    $('#startContainer').addClass('d-none')
    $('#attempts').removeClass('d-none')

    //Shuffle list of cards
    shuffleArray(listOfQueens)
    // put cards on table
    addCardToGameArea(listOfQueens)
    //put cards on the table

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
