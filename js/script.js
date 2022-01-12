let randomNumber = Math.floor(Math.random() * 3 + 1);
let playerMove = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let argPlayerMove = getMoveName(playerMove);
let argComputerMove = getMoveName(randomNumber);

function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    if(argMoveId == 2){
        return 'papier';
      }
      if(argMoveId == 3){
        return 'nożyce';
      }
    
}
console.log('moves:', argComputerMove, argPlayerMove);