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

function resetGame() {
    compScore = 0;
    userScore = 0;
    compScoreDisplay.textContent = 0;
    userScoreDisplay.textContent = 0;
    leftSide.classList.remove(`win`)
        leftSide.classList.remove(`lose`)
        rightSide.classList.remove(`win`)
        rightSide.classList.remove(`lose`)
        leftSide.classList.remove(`tie`)
        rightSide.classList.remove(`tie`)

}

reset.addEventListener(`click`, resetGame)
reset.addEventListener(`click`, resetClicked)

function resetClicked() {
    reset.classList.add(`selected`)
    reset.addEventListener(`transitionend`, removeTransition)
}

//messing around

const leftSide = document.querySelector(`.left-side`)
const rightSide = document.querySelector(`.right-side`)

//messing

rock.addEventListener(`click`, game)
paper.addEventListener(`click`, game)
scissors.addEventListener(`click`, game)



let compScore = 0
let userScore = 0

function game(e) {
    let userChoice = e.target.id;
    computerChoice = computerPlay();
    // console.log(`computer chose ${computerChoice}`);


    // if computer choice === userchoice, ask to choose again
    //     have computer run again here as well 

    if (computerChoice === userChoice) {
        leftSide.classList.remove(`win`)
        leftSide.classList.remove(`lose`)
        rightSide.classList.remove(`win`)
        rightSide.classList.remove(`lose`)
        leftSide.classList.add(`tie`)
        rightSide.classList.add(`tie`)


    } else if (computerChoice === `rock` && userChoice === `scissors` ||
        computerChoice === `scissors` && userChoice === `paper` ||
        computerChoice === `paper` && userChoice === `rock`
    ) {
        leftSide.classList.remove(`tie`)
        leftSide.classList.remove(`win`)
        rightSide.classList.remove(`tie`)
        rightSide.classList.remove(`lose`)


        compScore += 1
        compScoreDisplay.textContent = compScore
        leftSide.classList.add(`lose`)
        rightSide.classList.add(`win`)



        // let user know if they win and to keep playing
    } else if (userChoice === `rock` && computerChoice === `scissors` ||
        userChoice === `scissors` && computerChoice === `paper` ||
        userChoice === `paper` && computerChoice === `rock`
    ) {
        userScore += 1
        userScoreDisplay.textContent = userScore
        leftSide.classList.remove(`tie`)
        leftSide.classList.remove(`lose`)
        rightSide.classList.remove(`tie`)
        rightSide.classList.remove(`win`)

        leftSide.classList.add(`win`)
        rightSide.classList.add(`lose`)
        

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
    // //messing
//     leftSide.addEventListener(`transitionend`, removeBackgroundWin)
//     rightSide.addEventListener(`transitionend`, removeBackgroundWin)

// }




function removeTransition(e) {
    if (e.propertyName !== `border-bottom-color`) return;
    this.classList.remove(`selected`);
   
    // console.log(e)
}

// function removeBackgroundWin(e) {
//     if (e.propertyName == `background-color`)
//     this.classList.remove(`win`)
//     this.classList.remove(`lose`)
//     this.classList.remove(`tie`)
//     // console.log(e)
// }


// function removeBackground() {
//     if ()
// }