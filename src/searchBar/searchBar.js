const searchBar = document.getElementById("search-bar");

searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase().trim();
    const songs = document.querySelectorAll(".song-container");

    songs.forEach(song => {
        const title = song.querySelector(".song-name-file").textContent.toLowerCase();

        if (title.includes(query)) {
            song.style.display = "flex";
        } else {
            song.style.display = "none";
        }
    });
});
