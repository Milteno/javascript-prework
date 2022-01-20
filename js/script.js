
document.getElementById("play-rock").addEventListener("click", function() {
  playGame(1);
});
document.getElementById("play-paper").addEventListener("click", function() {
  playGame(2);
});
document.getElementById("play-scissors").addEventListener("click", function() {
  playGame(3);
});

function playGame(argMoveId) {
  clearMessages();
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let argPlayerMove = getMoveName(argMoveId);
  let argComputerMove = getMoveName(randomNumber);

  function getMoveName(argMoveId){
      if(argMoveId == 1){
        return 'kamień';
      }
      else if (argMoveId == 2){
        return 'papier';
        }
      else if(argMoveId == 3){
          return 'nożyce';
        }
  }
  printMessage("Mój ruch: " + argPlayerMove);
  printMessage("Ruch komputera: " + argComputerMove);
  function displayResult(argComputerMove, argPlayerMove){
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    }
    if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
      printMessage('Przegrywasz!');
    }
    if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
      printMessage('Remis!');
    }
    if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
      printMessage('Remis!');  
    }
    if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');  
    }
    if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
      printMessage('Przegrywasz!');
    }  
    if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      printMessage('Przegrywasz!');
    }  
    if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
      printMessage('Remis!');
    }  
    if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Ty wygrywasz!');
    }  
  }
  displayResult(argComputerMove, argPlayerMove);
  //console.log('moves:', argComputerMove, argPlayerMove);
}