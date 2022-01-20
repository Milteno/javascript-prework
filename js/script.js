
{
document.getElementById("play-rock").addEventListener("click", function() {
  playGame(1);
});
document.getElementById("play-paper").addEventListener("click", function() {
  playGame(2);
});
document.getElementById("play-scissors").addEventListener("click", function() {
  playGame(3);
});

const playGame = function(argMoveId) {
  clearMessages();

  const getMoveName = function(argMoveId){
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
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  const argPlayerMove = getMoveName(argMoveId);
  const argComputerMove = getMoveName(randomNumber);

  printMessage("Mój ruch: " + argPlayerMove);
  printMessage("Ruch komputera: " + argComputerMove);

  const displayResult = function(argComputerMove, argPlayerMove){
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    }
    if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
      printMessage('Przegrywasz!');
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
    if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Ty wygrywasz!');
    }  
    if( argComputerMove == argPlayerMove){
      printMessage('Remis!');
    }
  }
  displayResult(argComputerMove, argPlayerMove);
  //console.log('moves:', argComputerMove, argPlayerMove);
}
}