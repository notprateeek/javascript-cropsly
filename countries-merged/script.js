fetch('https://restcountries.eu/rest/v2/all')
  .then((response) => response.json())
  .then((data) => {
    const result = document.querySelector('.result')
    const headTotal = document.querySelector('.head-total')
    const headSearch = document.querySelector('.head-search')

    headTotal.innerText = data.length

    document.querySelector('input').addEventListener('input', search)
    // document.querySelector('.btn-name').addEventListener('click', nameSort)
    // document
    //   .querySelector('.btn-capital')
    //   .addEventListener('click', capitalSort)
    // document
    //   .querySelector('.btn-population')
    //   .addEventListener('click', populationSort)

    function search(event) {
      const searchInput = event.target.value.trim().toLowerCase()

      setGrid(
        data.filter((query) => {
          let array1 = []
          query.languages.forEach((element) => {
            array1.push(element.name.toLowerCase())
          })

          if (query.name.toLowerCase().includes(searchInput)) {
            return query
          }
          if (query.capital.toLowerCase().includes(searchInput)) {
            return query
          }
          if (array1.includes(searchInput)) {
            return query
          }
        })
      )
    }

    function setGrid(group) {
      clearGrid()

      headSearch.innerText = group.length

      for (const element of group) {
        let array2 = []
        const language = element.languages
        language.forEach((item) => {
          array2.push(item.name)
        })

        const wrapper = document.createElement('div')
        const flag = document.createElement('img')
        const name = document.createElement('p')
        name.classList.add('name')
        const capital = document.createElement('span')
        capital.classList.add('capital')
        const languages = document.createElement('span')
        languages.classList.add('languages')
        const population = document.createElement('span')
        population.classList.add('population')

        flag.src = element.flag
        name.innerText = element.name
        capital.innerText = 'Capital: ' + element.capital
        languages.innerText = 'Languages: ' + array2.join(', ')
        population.innerText = 'Population: ' + element.population

        wrapper.appendChild(flag)
        wrapper.appendChild(name)
        wrapper.appendChild(capital)
        wrapper.appendChild(languages)
        wrapper.appendChild(population)
        result.appendChild(wrapper)
      }

      if (group.length === 0) {
        noResults()
      }
    }

    setGrid(data)

    function clearGrid() {
      while (result.firstChild) {
        result.removeChild(result.firstChild)
      }
    }

    function noResults() {
      const wrapper = document.createElement('div')
      const text = document.createElement('p')
      text.innerText = 'No results found'
      wrapper.appendChild(text)
      result.appendChild(wrapper)
    }

    // function nameSort() {}
    // function capitalSort() {}
    // function populationSort() {}
  })
