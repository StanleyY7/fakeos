const audio = document.querySelector("audio");
audio.autoplay = true;
audio.addEventListener("ended", () => {
  audio.remove;
});
