class roomObj {
    constructor() {
        this.currentState = 0;
    }
}
const room1Obj = new roomObj();
const room2Obj = new roomObj();
const room3Obj = new roomObj();

var playerName = null;

function startMessage() {
    alert("Project WWW initiating...");

    let endFunction = false;
    do {
        playerName = prompt("Please identify yourself");
        if (/^[A-Za-z]+$/.test(playerName.trim())) {
            introductionMessage(playerName)
            endFunction = true;
        } else {
            alert(`Error. Please insert a valid name`)

        }

    } while (!endFunction)
}

function introductionMessage(playerName = "") {
    alert(`Hello, ${playerName}`)

    alert(`Project WWW has been initiated. Your Authentication has failed and the countdown sequence has started...\nAfter this message you will have exactly 1 minute to abort the process with the correct access code or it shall wipe.`)
    countdown();
    chooseRoom(0);
}


function gameInitiate() {
    room1Obj.currentState = 0;
    room2Obj.currentState = 0;
    room3Obj.currentState = 0;

    startMessage();
}

function chooseRoom(room) {
    switch (room) {
        case 0: sectionHall()
            break;
        case 1: room1()
            break;
        case 2: room2()
            break;
        case 3: room3()
            break

    }
}

let isAffirmative = false;

function room1() {

    switch (room1Obj.currentState) {
        case 0:
            alert(`There is one thing a warrior should take before his departure, and that is wisdom.`)
            alert(`How many times do you have to do something, until it becomes a charm?\nChances are, that whatever you wish to achieve, rarely works out the first time. `)
            isAffirmative = confirm(`Will you take this wisdom?`)

            if (isAffirmative) {
                room3Obj.currentState = 2;
                chooseRoom(0);
            } else {
                room3Obj.currentState = 1;
                chooseRoom(0);
            }
            isAffirmative = false;
            break;
        case 1:
            alert(`I see you have returned unscathed. You have the momentum, don't stop now!`)
            room3Obj.currentState = 3;
            chooseRoom(0);
            break;
        case 2:
            alert(`Third time's the charm, 'ey? Well now is the time to strike!`)
            room3Obj.currentState = 4;
            chooseRoom(0);
            break;
    }



}

function room2() {
    switch (room2Obj.currentState) {
        case 0: alert(`You can make a choice, but do you have what it takes to deal with the consequence?`)
            isAffirmative = confirm(`Will you open the door now?`)
            if (isAffirmative) {
                gameOver()
            } else {
                chooseRoom(0);
                isAffirmative = false;
            }
            break;
        case 1:
            alert(`I admire your patience. Sometimes the best victory is a fight unfought.`)
            isAffirmative = confirm(`Will you open the door now?`)
            if (isAffirmative) {
                gameOver()
            } else {
                chooseRoom(0);
                isAffirmative = false;
            }
            break;
        case 2:
            alert(`You see light shining through the door...it is calling for you`)
            isAffirmative = confirm(`Will you open the door now?`)
            if (isAffirmative) {
                gameWon();
            } else {
                gameOver();
            }
            break;
    }
}

function room3() {
    if (room3Obj.currentState !== 5) {
        alert(`Fight me!`)
        isAffirmative = confirm(`"Yes" or "No"?`);
    }


    switch (room3Obj.currentState) {
        case 0:
            if (isAffirmative) {
                alert(`You lost the fight!.........and died like a dog...`)
                gameOver();
            } else {
                room3Obj.currentState = 5;
                chooseRoom(0);
            }
            break;
        case 1:
            if (isAffirmative) {
                alert(`You have quite the resolve! I have been beat.\nFair and square. Here, take this...you shall have my perseverance`);
                alert(`The item "Perserverance" has been obtained.`)
                room2Obj.currentState = 2;
                chooseRoom(0);
            } else {
                alert(`Neither hot nor cold, no story to be told. You return to the beginning, with no silver and no gold."`)
                chooseRoom(0)
            }
            break;
        case 2:
            if (isAffirmative) {
                alert(`You were impatient, lost the fight and died like a dog...`)
                gameOver()
            } else {
                room2Obj.currentState = 1;
                room1Obj.currentState = 1;
                chooseRoom(0);
            }
            break;
        case 3:
            if (isAffirmative) {
                alert(`I've seen you a second time, but...You were impatient, lost the fight and died like a dog...`);
                gameOver();
            } else {
                room1Obj.currentState = 2;
                chooseRoom(0);
            }
            break;
        case 4:
            if (isAffirmative) {
                alert(`I've seen you a third time and I have been beat. How is that possible?\nAnyways. Here, take this...you shall have my perseverance`);
                alert(`The item "Perserverance" has been obtained.`)
                room2Obj.currentState = 2;
                chooseRoom(0);
            } else {
                alert(`You were not able to flee this time, and were killed...like a dog`)
                gameOver();
            }
            break;
        case 5:
            alert(`You returned indecisively and died like a dog`)
            gameOver();
            break;
    }
}



let roomChoice = 0;
function sectionHall() {
    alert(`You are in the Hall.`);
    alert(`You see 3 Doors. Each door has something written on it...`)
    alert(`1 - A new beginning | 2 - A choice | 3 - A challenge`)
    roomChoice = prompt(`Which one do you choose?`);
    roomChoice = Number(roomChoice);

    let endFunction = false;

    do {

        if (/^[1-3]$/.test(roomChoice)) {
            chooseRoom(roomChoice);
            endFunction = true;
        } else {
            alert(`Error. Please insert a valid number from 1 to 3.`)
        }

    } while (!endFunction)
}




function gameOver() {
    isAffirmative = confirm(`Game Over! Would you like to try again? Type "yes" or "no"`)
    isAffirmative ? gameInitiate() : window.close;
}

function gameWon() {
    alert(`Correct Access Code Inserted. The World Wide Wipe has been aborted. Congratulations!`)
}


function countdown() {
    let secondsLeft = 60;
    const timer = setInterval(() => {
        secondsLeft--;
        if (secondsLeft <= 0) {
            alert(`The countdown has ended. No access code has been received. Commencing World Wide Wipe...`)
            gameOver();
        }

        if (secondsLeft % 15 === 0) { alert(`${secondsLeft} seconds left`) }

    }, 1000);
}

gameInitiate();