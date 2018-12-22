
//Defining the variables.
var won = 0;
var lost = 0;
var attempts = 10;
var usedArray = [];
var ranLetter = ranLetter;
var letters = "qwertyuiopasdfghjklzxcvbnm"


//This code picks the letter for the computer.
ranLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(ranLetter);

//Assigning the computers letter.
function jsGuess() {
      ranLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log(ranLetter);

}

//This event tells the computer what the player guesses.
document.onkeyup = function (event) {
      var playerGuess = event.key;

     //This resets the games if the players guess is right. 
      if (playerGuess === ranLetter) {
            won++;
            attempts = 10;
            usedArray = [];
        alert("Lucky Guess.  You win!")
      }

     //takes away guesses by 1
      jsGuess();
      if (playerGuess !== ranLetter) {
            attempts--;
        
      }

     //adds the loss and resets everything
      if (attempts == 0) {
            lost++;
            usedArray = []
            attempts = 10;
            alert("Take the L!")
      }

      //prevents the same letter from being picked 
      if (usedArray.indexOf(playerGuess) >= 0) {

      } else {
         //shows incorrect guess in the browser
            usedArray.push(playerGuess);
            document.getElementById('playerGuess').innerHTML = usedArray;
            console.log(usedArray);

      }
    //pushes the results to the browser
      document.getElementById('won').innerHTML = won;
      document.getElementById('lost').innerHTML = lost;
      document.getElementById('attempts').innerHTML = attempts;

}
