const mainAudio = document.getElementById("main-audio");
const slider = document.getElementById("song-duration");
const playBtn = document.getElementById("play-pause");
const playIcon = document.getElementById("play");
const pauseIcon = document.getElementById("pause");
const disco = document.getElementById("disco");
const songsContainer = document.getElementById("songs");
const songName = document.getElementById("song-name");
let playStatus = false; // false = pausa, true = play