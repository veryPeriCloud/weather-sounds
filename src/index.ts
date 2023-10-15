import './style.scss';
import { createElements } from './components/createElements';
import { changeVolume } from './components/changeVolume';

const appBody = document.querySelector("body") as HTMLBodyElement;
const sounds: string[] = ["summer", "rain", "winter"];

// set inital background
setAppBackground(sounds[0]);

createElements();

const buttons = document.querySelectorAll("button") as NodeListOf<HTMLButtonElement>;
const audios = document.querySelectorAll("audio") as NodeListOf<HTMLAudioElement>;

changeVolume(audios);

buttons
  .forEach((btn: HTMLButtonElement, index: number) => {
    btn.addEventListener("click", () => {
      handleBtn(btn, index);
    })
  });

function clear(): void {
  buttons.forEach((btn: HTMLButtonElement) => {
    btn.classList.remove("play")
  })
  audios.forEach((a: HTMLAudioElement) => {
    a.pause();
  })
}

function playMusic(btn: HTMLButtonElement, id: number): void {
  clear();
  btn.classList.add("play");
  const audio = document.getElementById(`${id}`) as HTMLAudioElement;
  audio.play();  
}

function pauseMusic(btn: HTMLButtonElement, id: number): void {
  btn.classList.remove("play");
  const audio = document.getElementById(`${id}`) as HTMLAudioElement;
  audio.pause()
}

function handleBtn(btn: HTMLButtonElement, id: number): void {
  const isPaused = audios[id].paused;

  isPaused
    ? playMusic(btn, id)
    : pauseMusic(btn, id);

  setAppBackground(sounds[id]);
}

function setAppBackground(bg: string): void {
  appBody.className = `${bg}`
}