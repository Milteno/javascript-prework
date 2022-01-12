let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);
let computerMove = "kamień";
let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == "2") {
    playerMove = "papier";
}
else if(playerInput == "3") {
    playerMove = "nożyce";
}
window.printMessage('Ruch komputera to: ' + computerMove);
window.printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
else if (computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Przegrywasz!');
}
else if (computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
}
else if (playerMove == 'nieznany ruch') {
    printMessage("Nieznany ruch!");
}
else {
    printMessage("Nieznany ruch!");
}