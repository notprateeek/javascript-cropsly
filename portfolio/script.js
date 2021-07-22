const titles = [
  'Instructor',
  'Motivational Speaker',
  'Programmer',
  'Motivator',
  'Content Creator',
  'Educator',
]

const tech = {
  HTML: 'orange',
  JAVASCRIPT: 'blue',
  REACT: 'green',
  REDUX: 'grey',
  NODE: 'brown',
  PYTHON: 'pink',
  MONGODB: 'yellow',
  PANDAS: 'red',
  NUMPY: 'purple',
}

const span = document.querySelector('.tech')
const marquee = document.querySelector('marquee')

const keys = Object.keys(tech)
const values = Object.values(tech)

const techLoop = setInterval(techInterval, 3000)
const titlesLoop = setInterval(titlesInterval, 3000)

let number1 = 0
let number2 = 0

function techInterval() {
  if (number1 > 8) {
    number1 = 0
  } else {
    span.textContent = keys[number1]
    span.style.color = values[number1]
    span.style.fontSize = '2em'
    number1++
  }
}

function titlesInterval() {
  if (number2 > 5) {
    number2 = 0
  }
  marquee.textContent = titles[number2]
  number2++
}
