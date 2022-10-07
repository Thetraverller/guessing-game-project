const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//-----------------
const secretNumber = 33

let checkGuess = num => {

    if (num > secretNumber) {
        console.log("Too high")
        return false
    } else if (num < secretNumber) {
        console.log("Too low")
        return false
    } else if (num === secretNumber) {
        console.log("Correct!")
        return true
    }
    return false
}
//-------

function askGuess() {
    rl.question("Enter a guess: ", answer => {
        let num = Number(answer)
        if (checkGuess(num) === true) {
            console.log("You win!")
        } else {
            return askGuess()
        }
          rl.close();
    });
}
//------------


askGuess()
// ////
// console.log(checkGuess(01))
