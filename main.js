// Selección de elementos del DOM (botones, controles y etiquetas del reproductor)
const btnPlay = document.querySelector("#btn-play"); 
const btnPlayIcon = document.querySelector("#btn-play-icon");
const btnRepeat = document.querySelector("#btn-repeat");
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
const btnVolume = document.querySelector("#btn-volume");
const btnVolumeIcon = document.querySelector("#btn-volume i");
const playerVolume = document.querySelector("#player-volume");
const songName = document.querySelector("#song-name");
const songAuthor = document.querySelector("#song-author");
const playerCurrentTime = document.querySelector("#player-current-time");
const playerDuration = document.querySelector("#player-duration");
const playerProgress = document.querySelector("#player-progress");
const audioPlayer = document.querySelector("#audio-player");

// Variables de control
let currentSong = 0;       // Índice de la canción actual en la lista
let repeatSong = false;    // Bandera para repetir la canción

// ====== Lista de canciones con sus datos ======
const songs = [ 
    {
        name: "Huapango de las Amazonas",
        author: "Humildad de la Musica Nortena",
        path: "./songs/Las amazonas.mp3",
        caratula: "./caratulas/amazonas.jpg"
    },
    {
        name: "Huapango la Gitarra de Lolo",
        author: "La Kumbre con K",
        path: "./songs/La guitarra.mp3",
        caratula: "./caratulas/guitarra.jpg"
    },
    {
        name: "Zapateado Antrax",
        author: "Los Rugars",
        path: "./songs/za.mp3",
        caratula: "./caratulas/za.jpg"
    },
    {
        name: "Jinetes en el Cielo",
        author: "La Kumbre con K",
        path: "./songs/jn.mp3",
        caratula: "./caratulas/jn.jpg"
    },
    {
        name: "Taca Ta",
        author: "Conjunto Nuevo Amanecer",
        path: "./songs/Taca ta.mp3",
        caratula: "./caratulas/taca ta.jpg"
    }
];

// ====== Eventos de los botones y controles ======
btnPlay.addEventListener("click", () => togglePlaySong());       // Play/Pause
btnPrev.addEventListener("click", () => changeSong(false));      // Canción anterior
btnNext.addEventListener("click", () => changeSong());           // Canción siguiente
btnRepeat.addEventListener("click", () => toggleRepeatSong());   // Activar/desactivar repetir
playerVolume.addEventListener("input", () => changeVolume());    // Cambiar volumen
playerProgress.addEventListener("input", () => changeTime());    // Cambiar tiempo de reproducción
audioPlayer.addEventListener("timeupdate", () => timeUpdate());  // Actualizar tiempo en pantalla
audioPlayer.addEventListener("ended", () => ended());            // Acción al terminar canción

// ====== Funciones ======

// Alterna entre reproducir y pausar la canción
const togglePlaySong = () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        btnPlayIcon.classList.replace("bi-play-fill", "bi-pause-fill"); // Cambia ícono a pausa
    } else {
        audioPlayer.pause();
        btnPlayIcon.classList.replace("bi-pause-fill", "bi-play-fill"); // Cambia ícono a play
    }
};

// Cambia de canción (siguiente o anterior)
const changeSong = (next = true) => {
    if (next && currentSong < songs.length - 1) {
        currentSong++; // Avanza a la siguiente
    } else if (!next && currentSong > 0) {
        currentSong--; // Retrocede a la anterior
    } else {
        return; // Si no hay más canciones, no hace nada
    }

    updatePlayer();     // Actualiza la información del reproductor
    togglePlaySong();   // Reproduce automáticamente la nueva canción
};

// Actualiza la información del reproductor con la canción actual
const updatePlayer = () => {
    const song = songs[currentSong];

    songName.innerHTML = song.name;
    songAuthor.innerHTML = song.author;
    audioPlayer.src = song.path;
    playerProgress.value = audioPlayer.currentTime;

    // Actualiza la carátula de la canción
    const cover = document.querySelector("#song-caratula");
    if (cover) {
        cover.src = song.caratula;
    }
};

// Activa o desactiva el modo repetir
const toggleRepeatSong = () => {
    repeatSong = !repeatSong;
    btnRepeat.classList.toggle("btn-activated"); // Cambia estilo del botón
};

// Actualiza el tiempo de reproducción en pantalla
const timeUpdate = () => {
    const { currentTime, duration } = audioPlayer;

    if (isNaN(duration)) return; // Si no hay duración válida, no hace nada

    playerDuration.innerHTML = formatSecondsToMinutes(duration);   // Duración total
    playerCurrentTime.innerHTML = formatSecondsToMinutes(currentTime); // Tiempo actual
    playerProgress.max = duration;   // Máximo del slider
    playerProgress.value = currentTime; // Valor actual del slider
};

// Cambia el volumen del reproductor
const changeVolume = () => {
    const { value } = playerVolume;

    audioPlayer.volume = value;

    // Cambia el ícono según el volumen
    if (value == 0) {
        btnVolumeIcon.classList.replace("bi-volume-up-fill", "bi-volume-mute-fill");
    } else {
        btnVolumeIcon.classList.replace("bi-volume-mute-fill", "bi-volume-up-fill");
    }
};

// Cambia el tiempo de reproducción según el slider
const changeTime = () => {
    audioPlayer.currentTime = playerProgress.value;
};

// Convierte segundos a formato mm:ss
const formatSecondsToMinutes = (seconds) => {
    return new Date(seconds * 1000).toISOString().slice(14, 19);
};

// Acción cuando termina la canción
const ended = () => {
    repeatSong ? togglePlaySong() : changeSong(true); // Repite o pasa a la siguiente
};

// Al cargar la página, inicializa el reproductor con la primera canción
window.onload = () => {
    updatePlayer();
};
