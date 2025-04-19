const songs = ["Sleep1.aac", "Sleep3.aac"];
let shuffledSongs = [...songs].sort(() => Math.random() - 0.5);
let currentSong = 0;
const player = new Audio(); // Create an audio object

function playSong(song) {
    fetch(song)
        .then(response => response.blob()) // Convert file into a playable format
        .then(blob => {
            player.src = URL.createObjectURL(blob);
            player.play();
        })
        .catch(error => console.log("Error loading file:", error));
}

player.addEventListener("ended", () => {
    currentSong = (currentSong + 1) % shuffledSongs.length;
    playSong(shuffledSongs[currentSong]); // Load the next song
});

// Start playing
playSong(shuffledSongs[currentSong]);
