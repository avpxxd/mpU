const songs = ["Test1.mp3", "Test2.mp3", "Test3.mp3" "Test4.mp3"];
let shuffledSongs = [...songs].sort(() => Math.random() - 0.5); // Shuffle the playlist
let currentSong = 0;
const player = document.getElementById("musicPlayer");

player.addEventListener("ended", () => {
    currentSong = (currentSong + 1) % shuffledSongs.length; // Loop through shuffled playlist
    player.src = shuffledSongs[currentSong];
    player.play();
});

player.play(); // Start playing when the page loads
player.play().catch(error => console.log("Autoplay blocked, user must interact first."));
