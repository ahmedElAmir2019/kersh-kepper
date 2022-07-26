
const repassword = document.getElementById('repassword')
const empassword = document.getElementById('empassword')
const email = document.getElementById('email')
rename  = document.getElementById('rename')
const newform = document.getElementById('Register')
const newerrorElement = document.getElementById('reg')
newform.addEventListener('submit', (e) => {
  let messages = []
  if (email.value === '' || email.value == null) {
    alert('Name is required')

  }
  if (rename.value === '' || rename.value == null) {
    alert('Name is required')
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
    newerrorElement.innerText = messages.join(', ')
  }
  if (empassword.value != repassword.value) {
    alert('Password not match')
  }
})
