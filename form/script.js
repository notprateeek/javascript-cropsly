const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const tel = document.querySelector('#tel')
const bio = document.querySelector('#bio')

const fields = {
  firstName: /^[a-z\d]{3,16}$/i,
  lastName: /^[a-z\d]{3,16}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/,
  password: /^[\w@_-]{6,20}$/,
  tel: /^\d{11}$/,
  bio: /^[a-z\d]{8-50}$/,
}

function validate(field, regex) {
  regex.test(field.value)
    ? (field.className = 'valid')
    : (field.className = 'invalid')
}

let keys = document.querySelectorAll('input')
keys.forEach((item) =>
  item.addEventListener('keyup', (e) => {
    validate(e.target, fields[e.target.attributes.name.value])
  })
)
