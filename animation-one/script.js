const wrapper = document.querySelector('.wrapper')
const text = document.querySelector('.text')
const split = text.textContent.split('')
text.textContent = ''

for (let i = 0; i < split.length; i++) {
  text.innerHTML += `<span>${split[i]}</span>`
}

const spans = document.querySelectorAll('span')
for (let i = 0; i < spans.length; i++) {
  spans[i].style.color = random()
}

function random() {
  const red = Math.floor(Math.random() * 255)
  const green = Math.floor(Math.random() * 255)
  const blue = Math.floor(Math.random() * 255)
  return `rgb(${red}, ${green}, ${blue})`
}

let timer = setInterval(() => {
  wrapper.classList.toggle('fade')
}, 5000)
