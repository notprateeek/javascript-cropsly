const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const country = document.querySelector('#country')
const score = document.querySelector('#score')
const button = document.querySelector('#addPlayer')
const alert = document.querySelector('p')
const list = document.querySelector('#list')

const data = []

class Person {
  constructor(firstName, lastName, country, score) {
    this.firstName = firstName
    this.lastName = lastName
    this.country = country
    this.score = score
  }
}

button.addEventListener('click', entry)

function entry(event) {
  event.preventDefault()

  // new person

  const person = new Person(
    firstName.value,
    lastName.value,
    country.value,
    score.value
  )

  // add person to array and sort array

  if (
    person.firstName == '' ||
    person.lastName == '' ||
    person.country == '' ||
    person.score == ''
  ) {
    console.log('error')
  } else {
    if (data.length === 0) {
      data.push(person)
    } else {
      if (data.includes(person) == false) {
        console.log('repeat')
      } else {
        data.push(person)
      }
    }
  }
  data.sort((a, b) => b.score - a.score)

  // create required elements
  const item = document.createElement('li')
  const nameDiv = document.createElement('div')
  const countryDiv = document.createElement('div')
  const scoreDiv = document.createElement('div')
  const buttons = document.createElement('div')
  const del = document.createElement('button')
  del.classList.add('del')
  const plusFive = document.createElement('button')
  plusFive.classList.add('plusFive')
  const minusFive = document.createElement('button')
  minusFive.classList.add('minusFive')

  nameDiv.innerText = `${person.firstName} ${person.lastName}`
  countryDiv.innerText = person.country
  scoreDiv.innerText = person.score
  del.innerText = 'x'
  plusFive.innerText = '+5'
  minusFive.innerText = '-5'

  // append item to list

  if (
    person.firstName == '' ||
    person.lastName == '' ||
    person.country == '' ||
    person.score == ''
  ) {
    console.log('error')
  } else {
    item.appendChild(nameDiv)
    item.appendChild(countryDiv)
    item.appendChild(scoreDiv)
    buttons.appendChild(del)
    buttons.appendChild(plusFive)
    buttons.appendChild(minusFive)
    item.appendChild(buttons)
    list.appendChild(item)
  }

  remove()
  addFive()
  subtractFive()
  empty()

  function remove() {
    document.querySelector('.del').addEventListener('click', (event) => {
      event.target.parentElement.remove()
    })
  }

  function addFive() {
    document.querySelector('.plusFive').addEventListener('click', () => {
      scoreDiv.innerText = Number(scoreDiv.innerText) + 5
    })
  }

  function subtractFive() {
    document.querySelector('.minusFive').addEventListener('click', () => {
      scoreDiv.innerText = Number(scoreDiv.innerText) - 5
    })
  }

  function empty() {
    firstName.value = ''
    lastName.value = ''
    country.value = ''
    score.value = ''
  }
}
