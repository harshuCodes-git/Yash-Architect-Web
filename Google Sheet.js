const scriptURL = 'https://script.google.com/macros/s/AKfycbx0iUM8_zpf8bSMNCZ-Yqe4oINwukWXyolsyBVCkKpl6vSB4sqhlz52RMI_Qg7moKfZ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})