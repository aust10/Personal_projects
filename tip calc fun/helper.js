
const container = document.getElementById('container')
const tipForm = document.getElementById('tipForm')

let percentage = 0
let count = 0
// create a slider, total box, percent slot
const total = document.createElement('input')
const slider = document.createElement('input')
const percent = document.createElement('p')

// set the atributes of the above
total.setAttribute('type', 'number')
slider.setAttribute('type', 'range')
total.id = 'total'
total.placeholder = 'Enter your bill total'
slider.id = 'tipSlider'
slider.value = 0
container.insertBefore(total, tipForm)
tipForm.appendChild(slider)
tipForm.appendChild(percent)

// get the tip percentage when the slider moves
tipForm.onchange = function () {
  percentage = slider.value
  percent.innerText = percentage + '%'
}

// submit the amount and tip to get the total ballance 
const submit = document.createElement('input')
submit.setAttribute('type', 'button')
submit.setAttribute('value', 'Submit')
tipForm.appendChild(submit)

submit.onclick = function () {
  count += 1
  const checkVal = document.getElementById('finalTotal')
  const tip = (parseInt(total.value) * percentage / 100) + parseInt(total.value)
  if (checkVal === null) {
    const finalTotal = document.createElement('p')
    finalTotal.setAttribute('id', 'finalTotal')
    
    finalTotal.innerText = 'Your final bill is $' + tip
    total.value = ''
    percent.innerText = ''
    slider.value = 0
    container.appendChild(finalTotal)
  } else {
    checkVal.innerText = 'Your final bill is $' + tip
    total.value = ''
    percent.innerText = ''
    slider.value = 0
  }
}
