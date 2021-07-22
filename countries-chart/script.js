const number = document.querySelector('.number')
const desc = document.querySelector('.desc')
const result = document.querySelector('.result')

const url = 'https://restcountries.eu/rest/v2/all'
let languageArray = []
let populationArray = []
let langArray = []

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    number.textContent = data.length

    document.querySelector('.population').addEventListener('click', population)
    document.querySelector('.language').addEventListener('click', language)

    populationArray = data.sort((a, b) => b.population - a.population)

    const world = []
    populationArray.forEach((pop) => {
      world.push(pop.population)
    })

    const sum = world.reduce((a, b) => a + b, 0)

    data.forEach((country) => {
      languageArray.push(country.languages)
    })

    languageArray.forEach((langs) => {
      langs.forEach((lang) => {
        langArray.push(lang.name)
      })
    })

    langArray.sort()

    const counts = {}
    langArray.forEach((item) => {
      counts[item] = (counts[item] || 0) + 1
    })

    const sortable = Object.fromEntries(
      Object.entries(counts).sort(([, a], [, b]) => b - a)
    )

    const name = Object.keys(sortable)
    const count = Object.values(sortable)

    function population() {
      desc.textContent = '10 most populated countries in the world'

      result.innerHTML = ''

      for (let i = 0; i < 10; i++) {
        const li = document.createElement('li')
        const country = document.createElement('p')
        const outer = document.createElement('div')
        outer.classList.add('outer')
        const box = document.createElement('div')
        const population = document.createElement('p')

        country.textContent = populationArray[i].name
        box.classList.add('box')
        outer.style.width = (sum / sum) * 100 + '%'
        box.style.width = (populationArray[i].population / sum) * 100 + '%'

        population.textContent = populationArray[i].population

        outer.append(box)
        li.appendChild(country)
        li.appendChild(outer)
        li.appendChild(population)
        result.appendChild(li)
      }
    }

    function language() {
      desc.textContent = '10 most spoken languages in the world'

      result.innerHTML = ''

      for (let i = 0; i < 10; i++) {
        const li = document.createElement('li')
        const langName = document.createElement('p')
        const outer = document.createElement('div')
        outer.classList.add('outer')
        const box = document.createElement('div')
        const langCount = document.createElement('p')

        langName.textContent = name[i]
        box.classList.add('box')
        outer.style.width = (sum / sum) * 100 + '%'
        box.style.width = (populationArray[i].population / sum) * 100 + '%'

        langCount.textContent = count[i]

        outer.append(box)
        li.appendChild(langName)
        li.appendChild(outer)
        li.appendChild(langCount)
        result.appendChild(li)
      }
    }
  })
