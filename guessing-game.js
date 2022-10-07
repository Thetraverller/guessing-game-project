const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//-----------------


function randomInRange(min, max) {
    minimum = Math.ceil(min);
    maximum = Math.floor(max);

    return Math.floor(Math.random() * (maximum - minimum) + minimum)
  }

//-------------


// const secretNumber = randomInRange(0, 100)

let checkGuess = num => {

    if (num > secretNumber) {
        console.log("Too high")
        return false
    } else if (num < secretNumber) {
        console.log("Too low")
        return false
    } else {
        console.log("Correct!")
        return true
    }

}
//-------

function askGuess(n) {
    rl.question("Enter a guess: ", answer => {
        let num = Number(answer)
        numAttempts--;
        if (numAttempts === 0) {
            console.log("You Lose!");
            rl.close();
        } else if (checkGuess(num) === true) {
            console.log("You win!")
        } else {
            return askGuess()
        }
          rl.close();
    });
}
//------------
let askRange = () => {
    rl.question("Enter a max number: ", handleR1)
    let int1;
    let int2;

    function handleR1(firstAnswer) {
        int1 = Number(firstAnswer);
        rl.question("Enter a min number: ", handleR2);    // donot close block here but at the end

    function handleR2(secondAnswer) {
        int2 = Number(secondAnswer)
        console.log("I'm thinking of a number between " + int1 + " and " + int2 + "...")
        //can not close rl (rl.close())
        secretNumber = randomInRange(int1, int2)
        askGuess()
    }
    }
}
///-----------
function askLimit() {
    rl.question("Enter the number of attempts: ", attempts => {
        numAttempts = attempts;
        askRange();
      })
}


askLimit()
//askRang()
// askGuess()
// ////
// console.log(checkGuess(01))
