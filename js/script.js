{

function playGame(playerInput){
  clearMessages();

  function getMoveName(argMoveId){
      if(argMoveId == 1){
        return 'kamień';
      } else if(argMoveId == 2) {
          return 'papier';
      } else if(argMoveId == 3) {
          return 'nożyce';
      } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
      }
    }


  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);
  /*
  if(randomNumber == 1){
    computerMove = 'kamień';
  } else if(randomNumber == 2){
      computerMove = 'papier';
  } else if(randomNumber == 3){
      computerMove = 'nożyce';
  }*/

  printMessage('Mój ruch to: ' + computerMove);

  //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + playerMove);

  /*
  if(playerInput == '1'){
    playerMove = 'kamień';
  } else if(playerInput == '2'){
      playerMove = 'papier';
  } else if(playerInput == '3'){
      playerMove = 'nożyce';
  }*/

  function displayResult(argComputerMove, argPlayerMove){
      if ((argComputerMove == 'kamień' && argPlayerMove == 'papier')
          ||(argComputerMove == 'papier' && argPlayerMove == 'kamień')
          ||(argComputerMove == 'nożyce' && argPlayerMove == 'kamień')){
          printMessage('Ty wygrywasz!');
          playerScore++;
          }else if(( argComputerMove == 'kamień' && argPlayerMove == 'kamień')
          ||( argComputerMove == 'papier' && argPlayerMove == 'papier')
          ||( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'))
          {
          printMessage('Remis!');
          }else if (( argComputerMove == 'kamień' && argPlayerMove == 'nożyce')
          ||(argComputerMove == 'papier' && argPlayerMove == 'nożyce')
          ||(argComputerMove == 'nożyce' && argPlayerMove == 'papier'))
          {
          printMessage('Ja wygrywam!');
          computerScore++;
          }else {
          printMessage ('Partia nierozegrana, wpisano niewłaściwą wartość');
          }
      }

  displayResult(playerMove,computerMove)
  printMessageWins ('Twój wynik: ' + playerScore);
  printMessageWins ('Mój wynik: ' + computerScore);
}


document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});

//Results of entire game:


let playerScore = 0;
let computerScore = 0;
}