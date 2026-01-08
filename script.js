console.log("The js file is connected")

window.addEventListener('click', () => {
    const audio = document.getElementById('myMusic');
    audio.volume = 0.2;
    audio.play();
}, { once: true });
