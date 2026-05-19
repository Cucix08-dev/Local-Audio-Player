playBtn.addEventListener("click", () => {
    if (playStatus) {
        disco.classList.add("rotate");
    } else {
        disco.classList.remove("rotate");
    }
});
