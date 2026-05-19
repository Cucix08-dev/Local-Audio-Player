async function loadSongs() {
    const container = document.getElementById("songs");

    try {
        const response = await fetch("songs/");
        const htmlText = await response.text();

        const parser = new DOMParser();
        const html = parser.parseFromString(htmlText, "text/html");

        const links = [...html.querySelectorAll("a")];

        const audioFiles = links
            .map(a => a.getAttribute("href"))
            .filter(name =>
                name.endsWith(".mp3") ||
                name.endsWith(".wav") ||
                name.endsWith(".ogg") ||
                name.endsWith(".m4a")
            );

        container.innerHTML = "";

        audioFiles.forEach(file => {
            const fileName = decodeURIComponent(file.split("/").pop());

            const div = document.createElement("div");
            div.classList.add("song-container");

            div.innerHTML = `
                <div class="song">
                    <h3 class="song-name-file">${fileName}</h3>
                    <audio src="songs/${fileName}" style="display:none"></audio>
                </div>
            `;

            container.appendChild(div);
        });

        document.dispatchEvent(new Event("songsLoaded"));

    } catch (err) {
        console.error("Errore nel caricamento dei file:", err);
    }
}

loadSongs();
