const pixels = document.querySelector('.pixelContainer')
const qntElemento = document.querySelector('.tamanho')
let tamanho = qntElemento.value
const color = document.querySelector('.cores')
const resetarBtn = document.querySelector('.btn')

let colorir = false

function populate(tamanho) {
  pixels.style.setProperty('--size', tamanho)
  for (let i = 0; i < tamanho * tamanho; i++) {
    const div = document.createElement('div')
    div.classList.add('pixel')

    div.addEventListener('mouseover', function(){
        if(!colorir) return
        div.style.backgroundColor = color.value
    })
    div.addEventListener('click', function(){
        div.style.backgroundColor = color.value
    })

    pixels.appendChild(div)
  }
}

window.addEventListener("mousedown", function(){
    colorir = true
})
window.addEventListener("mouseup", function(){
    colorir = false
})

function reset(){
    pixels.innerHTML = ''
    populate(tamanho)
}

resetarBtn.addEventListener('click', reset)

qntElemento.addEventListener('keyup', function(){
    tamanho = qntElemento.value
    reset()
})
populate(tamanho)
