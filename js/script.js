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

    const computerMove = getMoveName(Math.floor(Math.random() * 3 + 1));
    const playerMove = getMoveName(playerInput);  
    printMessage('Mój ruch to: ' + computerMove);

  // console.log('Gracz wpisał: ' + playerInput);

    

    printMessage('Twój ruch to: ' + playerMove);

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
            printMessage ('Partia nierozegrana');
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

  let playerScore = 0;
  let computerScore = 0;
}