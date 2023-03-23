const player = document.querySelector("#player"),
      playPauseButton = document.querySelector("#playPauseButton"),
      prevButton = document.querySelector("#prevButton"),
      nextButton = document.querySelector("#nextButton");
      

import songs from "./songs.js";

const textButtonPlay = "<i class='bx bx-caret-right'></i>",
      textButtonPause = "<i class='bx bx-pause'></i>";

let index = 0;

prevButton.onclick = () => prevNextMusic("prev");
nextButton.onclick = () => prevNextMusic();

playPauseButton.onclick = () => playPause();

const playPause = () => {
  if (player.paused) {
    player.play();
    playPauseButton.innerHTML = textButtonPause;
  } else {
    player.pause();
    playPauseButton.innerHTML = textButtonPlay;
  }
};





const prevNextMusic = (type = "next") => {
  if((type == "next" && index + 1 === songs.length) || type === "init") {
    index = 0;
  } else if (type == "prev" && index === 0) {
    index = songs.length;
  } else {
    index = type === "prev" && index ? index - 1 : index + 1;
  }

  player.src = songs[index].src;
 
  if(type !== "init") playPause();

}

prevNextMusic("init");
