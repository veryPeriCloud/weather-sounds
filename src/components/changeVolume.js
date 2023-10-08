export function changeVolume(nodeList) {
  const volumeInput = document.getElementById("volume");

  volumeInput.addEventListener("input", (e) => {
    const value = e.target.value
    nodeList.forEach((node) =>{
      node.volume = value;
    })
  })
}