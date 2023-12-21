let mainMenu = document.querySelector('#mainMenu')
let gameMenu = document.querySelector('#gameMenu')
let replayMenu = document.querySelector('#replayMenu')
let startGameBtn = document.querySelector('#startGameBtn')
let goToMainMenuBtn = document.querySelector('#goToMainMenuBtn')
let replayGameBtn = document.querySelector('#replayGameBtn')
let fatalBazookaThunderBtn = document.querySelector('#fatalBazookaThunderBtn')
let doNotMoveBtn = document.querySelector('#doNotMoveBtn')
let textBox = document.querySelector('#textBox')
let pakemoun = document.querySelectorAll('pakemoun-a')
let messageIndex = 0

// start menu function
function start() {
    gameMenu.style.display = 'none';
    replayMenu.style.display = 'none';
    mainMenu.style.display = 'flex'
}

startGameBtn.addEventListener('click', game)

// replay menu function
function replay() {
    gameMenu.style.display = 'none';
    mainMenu.style.display = 'none';
    replayMenu.style.display = 'flex';
}

replayGameBtn.addEventListener('click', game)
goToMainMenuBtn.addEventListener('click', start)

// random function
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// textbox function

textBox.addEventListener('click', function () {
    const messages = generateMessages();

    if (messageIndex < messages.length) {
        textBox.innerHTML = messages[messageIndex];
        messageIndex++;
    }
});

// game function
function game() {
    gameMenu.style.display = 'flex';
    mainMenu.style.display = 'none';
    replayMenu.style.display = 'none';

    // creating both pakémoun
    let paquetchou = {
        name: 'paquetchou',
        maxHp: 100,
        hp: 90,
        attack: 15,
        speed: 9
    }

    let carapills = {
        name: 'carapills',
        maxHp: 100,
        hp: 100,
        attack: 20,
        speed: 7
    }

    // this variable will make sure we have a turn-based system
    let turn = 1
    let messages = []

    // creating the game loop
    while (carapills.hp > 0 && paquetchou.hp > 0) {
        // this condition will make carapills take his turn
        if (turn%2 == 0) {
            fatalBazookaThunderBtn.style.display = 'none'
            // this will decide which attack carapills will use
            let proba = getRandomInt(2)
            // in this case carapills will use 'Vomit Gun'
            if (proba == 0) {
                // 1% chance of hitting
                let proba = getRandomInt(100)
                // 1/100 chance of one-shotting his opponent
                if (proba == 0) {
                    paquetchou.hp -= 100;
                    messages.push("unbelievable! carapills just hit paquetchou with a critical 'Vomit Gun' which beats paquetchou in a single shot!!!");
                    turn += 1;
                // otherwise it will just be a normal attack
                } else {
                    paquetchou.hp -= carapills.attack;

                    if (paquetchou.hp > 0) {
                        messages.push("carapills just used 'Vomit Gun' paquetchou's health drops to " + paquetchou.hp + "HP!");
                    } else {
                        messages.push("this attack was fatal, carapills just beat paquetchou!");
                    }
                    turn += 1;
                }
            } else {
                    // cannot heal over max HP
                    if (carapills.hp > 90){
                        carapills.hp += (carapills.maxHp - carapills.hp);
                        messages.push("carapills used 'My Shell Is Soft' which grants him 10% of his max health points. He now has " + carapills.hp + "HP!");
                        turn += 1;
                    } else if (carapills.hp == 100) {
                        messages.push("carapills used 'My Shell Is Soft' which grants him 10% of his max health points. But having already all of his health, it wasn't really effective!");
                        turn += 1;
                    } else {
                        carapills.hp += 10;
                        messages.push("carapills used 'My Shell Is Soft' which grants him 10% of his max health points. He now has " + carapills.hp + "HP!");
                        turn += 1;
                    }
                };
        } else {
            let choice = +prompt('what are you gonna do?')

            if (choice == 0) {
                carapills.hp -= (2 * paquetchou.attack);
                if (carapills.hp > 0) {
                    messages.push("this attack was really effective! carapills' health drops to " + carapills.hp + "HP!");
                } else {
                    messages.push("this attack was fatal, paquetchou just beat carapills!");
                }
                turn += 1;
            } else if (choice == 1) {
                // 50% chance of hitting
                let proba = getRandomInt(2)

                if (proba == 0) {
                    messages.push("oh, paquetchou used 'do not move!' which means carapills needs to wait another turn before attacking!");
                    turn += 2;
                } else {
                    messages.push("paquetchou failed to use 'do not move!', nothing changes.");
                    turn += 1;
                }
            }
        }
    }

    if (carapills.hp <= 0 || paquetchou.hp <= 0) {
        replay();
    }

    textBox.addEventListener('click', function () {
    
        if (messageIndex < messages.length) {
            textBox.innerHTML = messages[messageIndex];
            messageIndex++;
        }
    });
}