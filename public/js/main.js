// creating both pakémoun 
let paquetchou = {
    name: 'paquetchou',
    maxHp: 100,
    hp: 100,
    attack: 20,
    speed: 9
}

let carapills = {
    name: 'carapills',
    maxHp: 100,
    hp: 100,
    attack: 20,
    speed: 7
}

// creating the different attacks

function fatalBazookaThunder() {
    carapills.hp -= (2 * paquetchou.attack);
}

function dontMove() {
    // 50% chance of hitting
    let proba = getRandomInt(2)

    if (proba == 0) {}
}

function vomitGun() {
    // 1% chance of hitting
    let proba = getRandomInt(100)

    if (proba == 0) {
        paquetchou.hp -= 100;
    } else {
        paquetchou.hp -= carapills.attack;
    }
}

function myShellIsSoft() {
    carapills.hp += 10;
}

// creating the game loop

while (carapills.hp > 0 && paquetchou.hp > 0) {
    let turn = 1

    if (turn%2 == 0) {
        getComputerChoice()
    } else {
        
    }
}

// getting the computer choice

function getComputerChoice() {
    let proba = getRandomInt(2)

    if (proba == 0) {
        vomitGun()
    } else {
        myShellIsSoft()
    }
}

// getting the player choice 

function getPlayerChoice() {

}