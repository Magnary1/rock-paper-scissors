// create function called computerPlay
// computer will randomly choose rock, paper or scissors

function computerPlay() {
    let computerOptions = ["rock", "paper", "scissors"];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

let computerChoice = computerPlay();
console.log(`computer chose ${computerChoice}`);


const rockComp = document.getElementById(`rockComp`)
const paperComp = document.getElementById(`paperComp`)
const scissorsComp = document.getElementById(`scissorsComp`)

// computer stuff above ^^^^^^^^^^^

const rock = document.getElementById(`rock`)
const paper = document.getElementById(`paper`)
const scissors = document.getElementById(`scissors`)
const userScoreDisplay = document.getElementById(`player-score`)
const compScoreDisplay = document.getElementById(`computer-score`)
const reset = document.getElementById(`reset`)

//messing around
function resetGame() {
    compScore = 0;
    userScore = 0;
    compScoreDisplay.textContent = 0;
    userScoreDisplay.textContent = 0;
}

reset.addEventListener(`click`, resetGame)

//messing

rock.addEventListener(`click`, game)
paper.addEventListener(`click`, game)
scissors.addEventListener(`click`, game)



let compScore = 0
let userScore = 0

function game(e) {
    let userChoice = e.target.id
    computerChoice = computerPlay();
    console.log(`computer chose ${computerChoice}`);


    // if computer choice === userchoice, ask to choose again
    //     have computer run again here as well 

    if (computerChoice === userChoice) {

    } else if (computerChoice === `rock` && userChoice === `scissors` ||
        computerChoice === `scissors` && userChoice === `paper` ||
        computerChoice === `paper` && userChoice === `rock`
    ) {
        compScore += 1
        compScoreDisplay.textContent = compScore

        // let user know if they win and to keep playing
    } else if (userChoice === `rock` && computerChoice === `scissors` ||
        userChoice === `scissors` && computerChoice === `paper` ||
        userChoice === `paper` && computerChoice === `rock`
    ) {
        userScore += 1
        userScoreDisplay.textContent = userScore

    }

    // trying something

    


    if (userChoice === `rock`) {
        rock.classList.add(`selected`)
    }
    
    if (computerChoice === `rock`) {
        rockComp.classList.add(`selected`)
    }

    if (userChoice === `paper`) {
        paper.classList.add(`selected`)
    }
    
    if (computerChoice === `paper`) {
        paperComp.classList.add(`selected`)
    }
    if (userChoice === `scissors`) {
        scissors.classList.add(`selected`)
    }
    
    if (computerChoice === `scissors`) {
        scissorsComp.classList.add(`selected`)
    }
    rockComp.addEventListener(`transitionend`, removeTransition)
    paperComp.addEventListener(`transitionend`, removeTransition)
    scissorsComp.addEventListener(`transitionend`, removeTransition)
    rock.addEventListener(`transitionend`, removeTransition)
    paper.addEventListener(`transitionend`, removeTransition)
    scissors.addEventListener(`transitionend`, removeTransition)

}




function removeTransition(e) {
    if (e.propertyName !== `border-bottom-color`) return;
    this.classList.remove(`selected`);
    console.log(e)
}





































// // create function called computerPlay
// // computer will randomly choose rock, paper or scissors

// function computerPlay() {
//     let computerOptions = ["rock", "paper", "scissors"];
//     return computerOptions[Math.floor(Math.random() * computerOptions.length)];
// }

// let computerChoice = computerPlay();
// console.log(computerChoice);

// // create variable UserPlay to = prompt which allows user to choose rock, paper, or scissors

// function userPlay(text) {
// return prompt(text).toLowerCase();
// }

// let userChoice = userPlay(`Choose Rock, Paper, or Scissors`);
// console.log(userChoice);



// // wrapping everything in large function "round"

// function round() {
// // if computer choice === userchoice, ask to choose again
// //     have computer run again here as well 

// if (computerChoice === userChoice) {
//     alert(`You've both selected ${computerChoice}, please pick again!`)

//     computerChoice = computerPlay();
//     console.log(computerChoice);

//     userChoice = userPlay(`Choose Rock, Paper, or Scissors`)
//     console.log(userChoice)

// // let user know if they lose and to try again

//     } else if   (computerChoice === `rock` && userChoice === `scissors` || 
//                 computerChoice === `scissors` && userChoice === `paper` ||
//                 computerChoice === `paper` && userChoice === `rock`
//                 )
//                     {   alert(`Sorry, ${computerChoice} beats ${userChoice}! Try again :)`)

//                         computerChoice = computerPlay();
//                         console.log(computerChoice);

//                         userChoice = userPlay(`Choose Rock, Paper, or Scissors`)
//                         console.log(userChoice)






// // let user know if they win and to keep playing
//     } else if   (userChoice === `rock` && computerChoice === `scissors` || 
//                 userChoice === `scissors` && computerChoice === `paper` ||
//                 userChoice === `paper` && computerChoice === `rock`
//             )
//                 {   alert(`Nice, ${userChoice} beats ${computerChoice}! Go again!`)

//                     computerChoice = computerPlay();
//                     console.log(computerChoice);

//                     userChoice = userPlay(`Choose Rock, Paper, or Scissors`)
//                     console.log(userChoice)

// // if user doesn't choose rock, paper, or scissors, let them know and to play again

//      } else {
//             alert(`Please check your spelling and try again! :)`)

//             computerChoice = computerPlay();
//             console.log(computerChoice);

//             userChoice = userPlay(`Choose Rock, Paper, or Scissors`)
//             console.log(userChoice)
//      }


// //ending "round" function
//     }

// //making a bunch of rounds 
//     round(2)
//     round(3)
//     round(4)
//     round(5)


//     //need closing statements


//     if (computerChoice === userChoice) {
//     alert(`You've both selected ${computerChoice}. That was the last round!`)

// // let user know if they lose

//     } else if   (computerChoice === `rock` && userChoice === `scissors` || 
//                 computerChoice === `scissors` && userChoice === `paper` ||
//                 computerChoice === `paper` && userChoice === `rock`
//                 )
//                     {   alert(`Sorry, ${computerChoice} beats ${userChoice}!`)





// // let user know if they win

//     } else if   (userChoice === `rock` && computerChoice === `scissors` || 
//                 userChoice === `scissors` && computerChoice === `paper` ||
//                 userChoice === `paper` && computerChoice === `rock`
//             )
//                 {   alert(`Nice, ${userChoice} beats ${computerChoice}!`)



// // let user know if they don't choose rock, paper, or scissors

//      } else {
//             alert(`Make sure to spell correctly! That was the last round!`)

//      }


//      //final alert

//     alert(`That was the end of the 5 rounds, did you win?`)
