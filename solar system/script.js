const input = document.querySelector('input')
const select = document.querySelector('select')
const options = document.querySelectorAll('option')
const resultBox = document.querySelector('#result')

const values = {
  mercury: 0.38,
  venus: 0.91,
  earth: 1.0,
  mars: 0.38,
  jupiter: 2.34,
  saturn: 0.93,
  uranus: 0.92,
  neptune: 1.12,
  pluto: 0.62,
}

document.querySelector('button').addEventListener('click', calculate)

function calculate() {
  resultBox.innerHTML = ''
  const mass = input.value
  const planet = select.options[select.selectedIndex].value

  const array = []
  options.forEach((planet) => {
    array.push(planet.value)
  })
  array.shift()

  let result
  array.forEach((option) => {
    switch (planet) {
      case option:
        result = mass * values[option]
    }
  })

  const box = document.createElement('div')
  if (mass == '' || planet == 'none') {
    box.textContent = 'Mass is required'
    resultBox.appendChild(box)
  } else {
    const image = document.createElement('img')
    image.src = `./assets/${planet}.png`

    const type = document.createElement('div')
    type.className = 'type'
    type.textContent = result

    resultBox.appendChild(image)
    resultBox.appendChild(type)
  }
}
