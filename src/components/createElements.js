const app = document.getElementById("app");
const BUTTONS_NUMBER = 3;
const sounds = ["summer", "rain", "winter"];

export function createElements() {
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
    audio.loop = true;
    audio.src = `./assets/sounds/${sounds[i]}.mp3`;

    btn.append(audio);
    btnWrapper.append(btn)
  }

  const volumeInput = document.createElement("input");
  volumeInput.setAttribute("min", 0);
  volumeInput.setAttribute("max", 1);
  volumeInput.setAttribute("step", 0.1);
  volumeInput.setAttribute("type", "range");
  volumeInput.setAttribute("id", "volume");

  app.append(title, btnWrapper, volumeInput)
}