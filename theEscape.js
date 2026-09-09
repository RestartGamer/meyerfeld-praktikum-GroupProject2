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

    alert(`Project WWW has been initiated. The countdown sequence has started...\nYou have one minute to abort the World Wide Wipe.`)
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
            alert(`Knowledge can be a blessing or a curse.`)
            alert(`There is one thing a warrior should take before his departure, and that is wisdom.`)
            alert(`How many attempts does it take before fortune finally favors you?\nChances are, whatever you wish to achieve won't work out the first time.`);
            isAffirmative = confirm(`Will you take this wisdom?`)

            if (isAffirmative) {
                room3Obj.currentState = 2;
                room2Obj.currentState = 3;
                room1Obj.currentState = 5;
                alert(`You have obtained "Wisdom"`)
                chooseRoom(0);
            } else {
                alert(`You have confidently declined this wisdom`)
                room3Obj.currentState = 1;
                room1Obj.currentState = 5;
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
        case 5:
            alert(`You returned indecisively and died like a dog`)
            gameOver();
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
                room2Obj.currentState = 5;
                alert(`You have chosen to not open the door just yet.`)
                chooseRoom(0);
                isAffirmative = false;
            }
            break;
        case 1:
            alert(`I admire your patience. Sometimes the best victory is a fight unfought, so that you may live to fight another day.`)
            isAffirmative = confirm(`Will you open the door now?`)
            if (isAffirmative) {
                gameOver()
            } else {
                room2Obj.currentState = 5;
                alert(`You have chosen to not open the door just yet.`)
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
                alert(`You tried the exit door, but walked incorrectly, fell in slow motion, and died like a lousy dog.`);
                gameOver();
            }
            break;
        case 3:
            alert(`Ah...I see that you have acquired wisdom in your travels, stranger...Wisdom enough to face what lies ahead?`)
            isAffirmative = confirm(`Will you open the door now?`)
            if (isAffirmative) {
                alert(`You were wise, but died like a dog`)
                gameOver();
            } else {
                room2Obj.currentState = 5;
                alert(`You have chosen to not open the door just yet.`)
                chooseRoom(0);
            }
            break;
        case 5:
            alert(`You returned indecisively and died like the lousiest dog of all doghood`)
            gameOver();
            break;
        case 6:
            alert(`You look stronger than ever before. Are you a man that is willing to "learn", to "fight" or to make a "decision" RIGHT NOW?!`)
            isAffirmative = confirm(`Will you open the door now?`)
            if (isAffirmative) {
                alert(`You have folded like a lousy piece of cheap furniture and died`)
                gameOver()
            } else {
                alert(`You have chosen to not open the door just yet.`)
                room2Obj.currentState = 5;
                chooseRoom(0);
                isAffirmative = false;
            }
            break;
    }
}

function room3() {


    room3Obj.currentState === 0 || room3Obj.currentState === 2
    ? alert(`You see a strong fighter in front of you. He has studied his opponents well.`) 
    : room3Obj.currentState !== 5 ? alert(`The fighter is enthused about your return`) : null

    if (room3Obj.currentState !== 5) {
        
        alert(`Fight me!`)
        isAffirmative = confirm(`"Yes" or "No"?`);
    }


    switch (room3Obj.currentState) {
        case 0:
            if (isAffirmative) {
                alert(`You lost the fight!...and died like an innocent penguin eaten by a dog.`)
                gameOver();
            } else {
                room3Obj.currentState = 5;
                alert(`You have studied your opponent and decided to wait for the right moment to strike`)
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
                room3Obj.currentState = 5;
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
                room3Obj.currentState = 5;
                alert(`You couldn't land a punch, he landed a punch , but left no mark. I was able to get away and survive.`)
                chooseRoom(0);
            }
            break;
        case 3:
            if (isAffirmative) {
                alert(`I've seen you a second time, but...you were impatient, lost the fight, and got dismantled like a low-cost IKEA chair.`);
                gameOver();
            } else {
                room1Obj.currentState = 2;
                room2Obj.currentState = 6;
                room3Obj.currentState = 5;
                alert(`You couldn't land a punch, and nor could he. I got away confidently with faith on my side.`)
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
                alert(`You were not able to flee this time and fell like a sack of potatoes to your untimely demise.`);
                room3Obj.currentState = 5;
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


    let endFunction = false;

    do {
        alert(`You see 3 Doors. Each one with something written on it...`)
        alert(`1 - A new beginning | 2 - A choice | 3 - A challenge`)
        roomChoice = prompt(`Which one do you choose?`);
        roomChoice = Number(roomChoice);
        if (/^[1-3]$/.test(roomChoice)) {
            chooseRoom(roomChoice);
            endFunction = true;
        } else {
            roomChoice === 0 ? null : alert(`Error. Please insert a valid number from 1 to 3.`)
        }

    } while (!endFunction)
}




function gameOver() {
    isAffirmative = confirm(`Game Over! The entire Internet has been wiped. Would you like to try again? Type "yes" or "no"`)
    isAffirmative ? gameInitiate() : null;
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