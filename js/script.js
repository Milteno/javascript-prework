
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
        return printMessage('kamień');
      }
      else if (argMoveId == 2){
        return printMessage('papier');
        }
      else if(argMoveId == 3){
          return printMessage('nożyce');
        }
  }
  //console.log('moves:', argComputerMove, argPlayerMove);
}