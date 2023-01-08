//In the JS file, create a function called playTheGame() that takes no parameter.
let userNumber;
function playTheGame(){
let answer = confirm( "Would you like to play the game?")
    if (answer==false){
        return  alert('No problem, Goodbye')
    }else{
       userNumber = prompt('Enter a number between 0 and 10')
        } 
        if(isNaN(userNumber)){
             return alert('Sorry Not a number, Goodbye')
        }
            if(userNumber <0 ||  userNumber > 10){
                return alert("Sorry it’s not a good number, Goodbye")
            }else{
                   let computerNumber = Math.floor(Math.random()* 11);
                   compareNumbers(userNumber, computerNumber);//Calling the compareNumbers in playTheGame function.

        }
}


/*Second Part
Outside of the playTheGame() function, create a new function named compareNumbers(userNumber,computerNumber) that takes 2 parameters : userNumber and computerNumber

The point of this function is to check if the userNumber is the same as the computerNumber:
If userNumber is equal to computerNumber, alert “WINNER” and stop the game.

If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

If the user guessed more than 3 times, alert “out of chances” and exit the function.
*/

function compareNumbers(userNumber,computerNumber){//*// Condition when the user's number is the biggest
     computerNumber = Math.floor(Math.random()* 11);
    let numberOfChance = 1;
    while(numberOfChance < 3){
        if(userNumber == compareNumbers){
          alert("WINNER")
          break;
        
        }else if(userNumber > computerNumber){
                alert("Your number is bigger than computer's number,guess again")
                userNumber = prompt('Enter a number between 0 and 10')
                while(isNaN(userNumber) || userNumber <0 ||  userNumber > 10){
                    alert("Please enter a good number");
                    userNumber = prompt("Enter a number between 0 and 10");
                }
         }else{
            alert("Your number is smaller than computer's number, guess again")
            userNumber = prompt('Enter a number between 0 and 10')
            while(isNaN(userNumber) || userNumber <0 ||  userNumber > 10){
                alert("Please enter a good number");
                userNumber = prompt("Enter a number between 0 and 10");
            }

        }
            
      numberOfChance+=1
    }

}


