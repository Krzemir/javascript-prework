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

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

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
        }else {
        printMessage ('Partia nierozegrana, wpisano niewłaściwą wartość');
        }
        



//wersja rozszerzona, którą skróciłem powyżej dla zabawy, ale w zadaniu chyba chodziło o tą właśnie:
   /* if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
        } else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis!');
        } else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Ja wygrywam!');
        } else if ( argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis!');
        } else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz');
        } else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ja wygrywam!');
        } else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Ja wygrywam!');
        } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz');
        } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Remis!');
        } else {
        printMessage ('Partia nierozegrana, wpisano niewłaściwą wartość');
    }*/
}


displayResult(playerMove,computerMove)

