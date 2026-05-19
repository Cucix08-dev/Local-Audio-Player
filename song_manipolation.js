// Play / Pause
playBtn.addEventListener("click", (event) => {
    event.stopPropagation();

    playStatus = !playStatus;

    if (playStatus) {
        mainAudio.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
        disco.classList.add("rotate");
    } else {
        mainAudio.pause();
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";
        disco.classList.remove("rotate");
    }
});


mainAudio.addEventListener("loadedmetadata", () => {
    slider.max = mainAudio.duration;
});

mainAudio.addEventListener("timeupdate", () => {
    slider.value = mainAudio.currentTime;

    const percent = (slider.value / slider.max) * 100;
    slider.style.setProperty("--value", percent + "%");
});

slider.addEventListener("input", () => {
    mainAudio.currentTime = slider.value;

    const percent = (slider.value / slider.max) * 100;
    slider.style.setProperty("--value", percent + "%");
});


