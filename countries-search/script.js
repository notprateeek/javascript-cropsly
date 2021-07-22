fetch('https://restcountries.eu/rest/v2/all')
  .then((response) => response.json())
  .then((data) => {
    let result = document.querySelector('.result')

    const countriesCount = document.querySelector('.countries-count')

    countriesCount.innerText = data.length

    let names = []

    document.querySelector('.sort').addEventListener('click', sort)
    document.querySelector('.startWord').addEventListener('click', startWord)
    document.querySelector('.anyWord').addEventListener('click', anyWord)

    data.forEach((name) => {
      names.push(name.name)
    })

    names.forEach((name) => {
      const wrapper = document.createElement('div')
      wrapper.classList.add('wrapper')
      wrapper.innerText = name
      result.appendChild(wrapper)
    })

    function sort() {
      names = names.reverse()
      result.textContent = ''
      names.forEach((name) => {
        const wrapper = document.createElement('div')
        wrapper.classList.add('wrapper')
        wrapper.innerText = name
        result.appendChild(wrapper)
      })
    }

    function startWord() {
      document.querySelector('.search').addEventListener('keyup', (event) => {
        const update = document.querySelector('.update')

        const text = event.target.value.toLowerCase()
        result.textContent = ''
        let count = []
        names.forEach((element) => {
          if (element.toLowerCase().startsWith(text)) {
            const wrapper = document.createElement('div')
            wrapper.classList.add('wrapper')
            wrapper.innerText = element
            result.appendChild(wrapper)
            count.push(element)
          }
        })
        update.textContent =
          'Countries starting with ' +
          event.target.value +
          ' are ' +
          count.length
      })
    }

    function anyWord() {
      document.querySelector('.search').addEventListener('keyup', (event) => {
        const update = document.querySelector('.update')

        const text = event.target.value.toLowerCase()
        result.textContent = ''
        let count = []

        names.forEach((element) => {
          if (element.toLowerCase().indexOf(text) != -1) {
            const wrapper = document.createElement('div')
            wrapper.classList.add('wrapper')
            wrapper.innerText = element
            result.appendChild(wrapper)
            count.push(element)
          }
        })
        update.textContent =
          'Countries containing ' + event.target.value + ' are ' + count.length
      })
    }
  })
