const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('box')
const errorElement = document.getElementById('login')
const repassword = document.getElementById('repassword')
const empassword = document.getElementById('empassword')
const email = document.getElementById('email')
rename  = document.getElementById('rename')
const newform = document.getElementById('Register')
const newerrorElement = document.getElementById('reg')
form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    alert('Name is required')

  }
  if (email.value === '' || email.value == null) {
    alert('Name is required')

  }
  if (rename.value === '' || rename.value == null) {
    alert('Name is required')

  }

  if (password.value.length <= 6) {
    alert('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
  alert('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    alert('Password cannot be password')
  }
  if (empassword.value.length <= 6) {
    alert('Password must be longer than 6 characters')
  }

  if (empassword.value.length >= 20) {
  alert('Password must be less than 20 characters')
  }

  if (empassword.value === 'password') {
    alert('Password cannot be password')
  }
  if (repassword.value.length <= 6) {
    alert('Password must be longer than 6 characters')
  }

  if (repassword.value.length >= 20) {
  alert('Password must be less than 20 characters')
  }

  if (repassword.value === 'password') {
    alert('Password cannot be password')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
  if (messages.length > 0) {
    e.preventDefault()
    newerrorElement.innerText = messages.join(', ')
  }
  if (empassword.value != repassword.value) {
    alert('Password not match')
  }
})
newform.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    alert('Name is required')

  }
  if (email.value === '' || email.value == null) {
    alert('Name is required')

  }
  if (rename.value === '' || rename.value == null) {
    alert('Name is required')

  }

  if (password.value.length <= 6) {
    alert('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
  alert('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    alert('Password cannot be password')
  }
  if (empassword.value.length <= 6) {
    alert('Password must be longer than 6 characters')
  }

  if (empassword.value.length >= 20) {
  alert('Password must be less than 20 characters')
  }

  if (empassword.value === 'password') {
    alert('Password cannot be password')
  }
  if (repassword.value.length <= 6) {
    alert('Password must be longer than 6 characters')
  }

  if (repassword.value.length >= 20) {
  alert('Password must be less than 20 characters')
  }

  if (repassword.value === 'password') {
    alert('Password cannot be password')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
  if (messages.length > 0) {
    e.preventDefault()
    newerrorElement.innerText = messages.join(', ')
  }
  if (empassword.value != repassword.value) {
    alert('Password not match')
  }
})
