import styles from './style.scss';
import { createElements } from './components/createElements';
import { changeVolume } from './components/changeVolume';

const appBody = document.querySelector("body");
const sounds = ["summer", "rain", "winter"];

// set inital background
setAppBackground(sounds[0]);

createElements();

const buttons = document.querySelectorAll("button");
const audios = document.querySelectorAll("audio");

changeVolume(audios)

buttons
  .forEach((btn, index) => {
    btn.addEventListener("click", () => {
      handleBtn(btn, index);
    })
  });

function clear() {
  buttons.forEach((btn) => {
    btn.classList.remove("play")
  })
  audios.forEach((a) => {
    a.pause();
  })
}

function playMusic(btn, id) {
  clear();
  btn.classList.add("play");
  const audio = document.getElementById(id)
  audio.play();  
}

function pauseMusic(btn, id) {
  btn.classList.remove("play");
  const audio = document.getElementById(id);
  audio.pause()
}

function handleBtn(btn, id) {
  const isPaused = audios[id].paused;

  isPaused
    ? playMusic(btn, id)
    : pauseMusic(btn, id);

  setAppBackground(sounds[id]);
}

function setAppBackground(bg) {
  appBody.className = `${bg}`
}