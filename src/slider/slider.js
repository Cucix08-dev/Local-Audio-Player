slider.addEventListener("input", () => {
    const percent = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.setProperty("--value", percent + "%");
});
