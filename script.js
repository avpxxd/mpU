const songs = ["song1.mp3", "song2.mp3", "song3.mp3"];
let currentSong = 0;
const player = document.getElementById("musicPlayer");

player.addEventListener("ended", () => {
    currentSong = (currentSong + 1) % songs.length; // Loops playlist
    player.src = songs[currentSong];
    player.play();
});

player.play(); // Start playing when the page loads
