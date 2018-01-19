// Variables For Objects on the DOM 
var wins = document.querySelector("#wins"); 
var losses = document.querySelector("#losses"); 
var guessesLeft = document.querySelector("#guesses-left");
var guessedLetters = document.querySelector("#guessed-letters");
var gameStatus = document.querySelector("#game-status");
var guessedLettersString = ""; 

//Array to hold letters of the alphabet 
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 

//Random Selection of letter
var randomLetter = alphabet[Math.floor(Math.random() * 26)]; 

//boolean to flag if user has won a game
var gamesWon = 0;  
var gameLosses = 0; 
var numberOfGuesses = 9; 

document.onkeyup = function(event){
	//Start with Game Status equal to empty string. 
	gameStatus.textContent = "";
	//Conditonal Checks
	if(alphabet.includes(event.key)){
		//Computer Choice Use to make sure wins is being incremented. Will only show in Console. 
		console.log("Computer chose: " + randomLetter); 
		if(event.key == randomLetter){
			gamesWon++; 
			wins.textContent = gamesWon; 
			gameStatus.textContent = "YOU WON PRESS ANOTHER KEY TO PLAY AGAIN!!!";
			numberOfGuessses = 9;
			resetGame(); 
		}
		else{
			//decrement number of guesses
			numberOfGuesses--; 
			// Check if number of guesses is 0 or (shouldn't happen) less.
			if (numberOfGuesses <= 0){
				gameLosses++; 
				losses.textContent = gameLosses; 
				gameStatus.textContent = "YOU LOST PRESS ANOTHER KEY TO PLAY AGAIN!!!";
				numberOfGuessses = 9;
				resetGame();
			}
			else{
				guessesLeft.textContent = numberOfGuesses;
				//Remove Letter from Array
				alphabet.splice(alphabet.indexOf(event.key), 1); 
				guessedLettersString += event.key + "  ";
				guessedLetters.textContent = guessedLettersString;
			}
		}
	}
	else {
		//Displays if User types same letter or key that is not in the alphabet. 
		alert(" Incorrect Input.\n\nYou Pressed a key that isn't a lowercase letter, or typed a letter that you have already guessed before."); 
	}
}

///Resets The DOM Tags and Game Variables to the Defualt Start Settings. Keeps Scores the Same
function resetGame(){
	console.log("Game Was Reset"); 
	//Reset the number of Guesses To 9
	numberOfGuesses = 9;
	guessesLeft.textContent = numberOfGuesses;
	//Reset the array to hold all the letters again
	alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
	//Set a new random letter 
	randomLetter = alphabet[Math.floor(Math.random() * 26)];
	//Set the guessed String to empty string. 
	guessedLettersString = ""; 
	guessedLetters.textContent = guessedLettersString;
}