document.addEventListener("songsLoaded", () => {

    const songContainers = document.querySelectorAll(".song-container");

    songContainers.forEach(container => {
        container.addEventListener("click", (event) => {

            event.stopPropagation();

            const hiddenAudio = container.querySelector("audio");
            const src = hiddenAudio.getAttribute("src");

            mainAudio.src = src;
            mainAudio.play();
            playStatus = true;

            disco.classList.add("rotate");
            playIcon.style.display = "none";
            pauseIcon.style.display = "block";

            console.log("Playing:", src);
        });
    });

});
