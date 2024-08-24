//your JS code here. If required.
// Function to stop all currently playing audio
function stopAllSounds() {
    const sounds = document.querySelectorAll('audio');
    sounds.forEach(sound => {
        sound.pause();
        sound.currentTime = 0;  // Reset the audio to the beginning
    });
}

// Function to play a specific sound
function playSound(soundId) {
    stopAllSounds();  // Stop any other sounds that might be playing
    const sound = document.getElementById(soundId);
    if (sound) {
        sound.play();
    }
}

// Adding event listeners to buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const soundId = button.getAttribute('data-sound');
            if (soundId) {
                playSound(soundId);
            } else if (button.classList.contains('stop')) {
                stopAllSounds();
            }
        });
    });
});
