function playSound() {
    let sound = document.getElementById('scarySound');
    sound.play();
    document.body.style.backgroundColor = "black";
    setTimeout(() => {
        document.body.style.backgroundColor = "#0a0a0a";
    }, 500);
}

// Creepy text glitch effect
document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector("header h1");
    setInterval(() => {
        header.style.opacity = Math.random() > 0.5 ? "0.6" : "1";
    }, 200);
});