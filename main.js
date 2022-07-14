const pixels = document.querySelector(".pixelContainer");
const color = document.querySelectorAll(".cores");
const resetarBtn = document.querySelector('.btn');
let divSelecionada = 0;
const quadrados = 540;
let colorir = false

function corIndex() {
  for (let i = 0; i < color.length; i++) {
    color[i].addEventListener("click", function () {
      divSelecionada = i;
    });
  }
}

function criarDiv(quadrados) {
  for (let i = 0; i < quadrados; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "pixels");
    
    div.addEventListener("mouseover", function () {
        if(!colorir) return
        let cor = getComputedStyle( color[divSelecionada])
      div.style.backgroundColor = cor['background-color'];
    });

    div.addEventListener("mousedown", function () {
        let cor = getComputedStyle( color[divSelecionada])
      div.style.backgroundColor = cor['background-color'];
    });
    pixels.appendChild(div);
  }
}
window.onload = () => {
  criarDiv(quadrados);
  corIndex();
};
window.addEventListener('mousedown', function () {
    colorir = true;
})
window.addEventListener('mouseup', function () {
    colorir = false;
})

function resetar() {
    pixels.innerHTML = ''
    criarDiv(quadrados)
}
resetarBtn.addEventListener('click', resetar)
