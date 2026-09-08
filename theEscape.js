
let messageApr = false;
var playerName = "";
function startMessage() {
    messageApr = confirm("Project WWW initiating...");
    messageApr ? playerName = prompt("Please identify yourself") : null;
}
function introductionMessage() {
    if (messageApr) {
        messageApr = confirm(`Hello, Mr. ${playerName}`)
    }
    if (messageApr) {
        messageApr = confirm(`Project WWW has been initiated. Your Authentication has failed and the countdown sequence has started...
            After this message you will have exactly 120 seconds to abort the sequence with the correct access code`)
    }
}

function sectionHall(){
    
}

function gameOver(){
    confirm(`Game Over! Would you like to try again? Type "yes" or "no"`)
}


function countdown() {
let secondsLeft = 120;
const timer = setInterval(()=> {
    secondsLeft--;
    if (secondsLeft <= 0){
        alert(`The countdown has ended. No access code has been received. Commencing World Wide Wipe...`)
        gameOver();
    }
}, 1000);
}