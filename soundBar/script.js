//your JS code here. If required.
let currentAudio = null;
        
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        // Stop any currently playing audio
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        // Play the selected sound
        const soundFile = this.getAttribute('data-sound');
        currentAudio = new Audio(`sounds/${soundFile}`);
        currentAudio.play();
    });
});

document.querySelector('.stop').addEventListener('click', function() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
});