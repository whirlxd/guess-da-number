function guessNumber() {

    
    const random = Math.floor(Math.random() * 10) + 1;

   
    let number = parseInt(prompt('Guess a number from 1 to 10: '));

  =
    while(number !== random) {
        number = parseInt(prompt('Nah man this does not seem like the right number try again :'));
    }

    // check if the guess is correct
    if(number == random) {
        console.log('tf dude who knew you would be able to guess this no.? ');
    }

  }




let check = prompt("You want to play the game")
if(check.toLowerCase.startsWith("y"){
guessNumber();
else {
console.log("OK MOMMY")
