// creating both pakémoun 
let paquetchou = {
    name: 'paquetchou',
    maxHp: 100,
    hp: 100,
    attack: 20,
    turn: true
}

let carapills = {
    name: 'carapills',
    maxHp: 100,
    hp: 100,
    attack: 20,
    turn: false
}

// creating the different attacks

function fatalBazookaThunder() {
    carapills.hp -= (2 * paquetchou.attack);
}

function dontMove() {
    let proba = getRandomInt(2)

    if (proba == 0) {}
}

function vomitGun() {
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