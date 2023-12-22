var mainMenuAudio = new Audio('./public/assets/music/mainmenu-music.mp3');
var gameMenuAudio = new Audio('./public/assets/music/fight-music.mp3');

function playMainMenuMusic() {
    mainMenuAudio.loop = true;
    mainMenuAudio.play();
}

function playGameMenuMusic() {
    gameMenuAudio.loop = true;
    gameMenuAudio.play();
}

function stopMainMenuMusic() {
    mainMenuAudio.pause();
    mainMenuAudio.currentTime = 0;
}

function stopGameMenuMusic() {
    gameMenuAudio.pause();
    gameMenuAudio.currentTime = 0;
}

document.getElementById("startGameBtn").addEventListener("click", function() {
    stopMainMenuMusic();
    playGameMenuMusic();
});

document.getElementById("replayGameBtn").addEventListener("click", function() {
    stopGameMenuMusic();
    playGameMenuMusic();
});

document.getElementById("goToMainMenuBtn").addEventListener("click", function() {
    stopGameMenuMusic();
    playMainMenuMusic();
});

function sound() {
    var snd = new Audio('./public/assets/music/button-soundeffect.mp3');
    snd.play();
}