const fonts = [
  'Arial',
  'Verdana',
  'Georgia',
  'Courier new',
  'Times New Roman',
  'Garamond',
  'Sans-serif',
]

const text = document.querySelector('.text')

const split = text.textContent.trim().replace(/ /g, ' ').split('')

text.textContent = ''

for (let i = 0; i < split.length; i++) {
  text.innerHTML += `<span>${split[i]}</span>`
}

const spans = document.querySelectorAll('span')

function randomColor() {
  const red = Math.floor(Math.random() * 255)
  const green = Math.floor(Math.random() * 255)
  const blue = Math.floor(Math.random() * 255)
  return `rgb(${red}, ${green}, ${blue})`
}

function randomFont() {
  const font = fonts[Math.floor(Math.random() * fonts.length)]
  return font
}

function change() {
  for (let i = 0; i < spans.length; i++) {
    spans[i].style.color = randomColor()
  }
  text.style.fontFamily = randomFont()
}

let timer = setInterval(() => {
  change()
}, 1000)
