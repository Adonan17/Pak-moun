// start menu function
function startMenu() {
    let wannaPlay = confirm('do you want to play?')

    if (wannaPlay == true) {
        game()
    } else {
        alert("okay, have a nice day!")
    }
}

// replay menu function
function replayMenu() {
    let wannaPlay = confirm('do you want to play again?')

    if (wannaPlay == true) {
        game()
    } else {
        startMenu()
    }
}

// random function
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// game function
function game() {

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

    // creating the game loop
    while (carapills.hp > 0 && paquetchou.hp > 0) {
        // this condition will make carapills take his turn
        if (turn%2 == 0) {
            // this will decide which attack carapills will use
            let proba = getRandomInt(2)
            // in this case carapills will use 'Vomit Gun'
            if (proba == 0) {
                // 1% chance of hitting
                let proba = getRandomInt(100)
                // 1/100 chance of one-shotting his opponent
                if (proba == 0) {
                    paquetchou.hp -= 100;
                    alert("unbelievable! carapills just hit paquetchou with a critical 'Vomit Gun' which beats paquetchou in a single shot!!!");
                    turn += 1;
                // otherwise it will just be a normal attack
                } else {
                    paquetchou.hp -= carapills.attack;

                    if (paquetchou.hp > 0) {
                        alert("carapills just used 'Vomit Gun' paquetchou's health drops to " + paquetchou.hp + "HP!");
                    } else {
                        alert("this attack was fatal, carapills just beat paquetchou!");
                    }
                    turn += 1;
                }
            } else {
                    // cannot heal over max HP
                    if (carapills.hp > 90){
                        carapills.hp += (carapills.maxHp - carapills.hp);
                        alert("carapills used 'My Shell Is Soft' which grants him 10% of his max health points. He now has " + carapills.hp + "HP!");
                        turn += 1;
                    } else if (carapills.hp == 100) {
                        alert("carapills used 'My Shell Is Soft' which grants him 10% of his max health points. But having already all of his health, it wasn't really effective!");
                        turn += 1;
                    } else {
                        carapills.hp += 10;
                        alert("carapills used 'My Shell Is Soft' which grants him 10% of his max health points. He now has " + carapills.hp + "HP!");
                        turn += 1;
                    }
                };
        } else {
            let choice = +prompt('what are you gonna do?')

            if (choice == 0) {
                carapills.hp -= (2 * paquetchou.attack);
                if (carapills.hp > 0) {
                    alert("this attack was really effective! carapills' health drops to " + carapills.hp + "HP!");
                } else {
                    alert("this attack was fatal, paquetchou just beat carapills!");
                }
                turn += 1;
            } else if (choice == 1) {
                // 50% chance of hitting
                let proba = getRandomInt(2)

                if (proba == 0) {
                    alert("oh, paquetchou used 'do not move!' which means carapills needs to wait another turn before attacking!");
                    turn += 2;
                } else {
                    alert("paquetchou failed to use 'do not move!', nothing changes.")
                    turn += 1;
                }
            }
        }
    }

    if (carapills.hp <= 0 || paquetchou.hp <= 0) {
        replayMenu();
    }
}

startMenu()