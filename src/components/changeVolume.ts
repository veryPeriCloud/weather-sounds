export function changeVolume(nodeList: NodeListOf<HTMLAudioElement>): void {
  const volumeInput = document.getElementById("volume") as HTMLInputElement;

  volumeInput.addEventListener("input", (e: Event) => {
    if (e.target !== null) {
      const value: string = (e.target as HTMLInputElement).value
      nodeList.forEach((node: HTMLAudioElement) => {
        node.volume = +value;
      })
    }
  })
}