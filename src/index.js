import styles from './style.scss';

const app = document.getElementById("app");
const appBody = document.querySelector("body");
const BUTTONS_NUMBER = 3;
const sounds = ["summer", "rain", "winter"];

// set inital background
setAppBackground(sounds[0]);

function createElements() {
  const title = document.createElement("h1");
  title.classList.add("weather__title");
  title.textContent = "Weather sounds";

  const btnWrapper = document.createElement("div");
  btnWrapper.classList.add("weather__buttons");

  for (let i = 0; i < BUTTONS_NUMBER; i++) {
    const btn = document.createElement("button");
    btn.classList.add("weather__btn", `weather__btn--${sounds[i]}`);

    const audio = document.createElement("audio");
    audio.id = i;
    audio.src = `./assets/sounds/${sounds[i]}.mp3`;

    btn.append(audio);
    btnWrapper.append(btn)
  }

  const volumeInput = document.createElement("input");
  volumeInput.setAttribute("min", 0);
  volumeInput.setAttribute("max", 1);
  volumeInput.setAttribute("step", 0.1);
  volumeInput.setAttribute("type", "range");

  app.append(title, btnWrapper, volumeInput)
}

createElements();

const buttons = document.querySelectorAll("button");
const audios = document.querySelectorAll("audio");

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