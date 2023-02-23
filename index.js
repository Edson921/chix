function getById(id) {
  return document.getElementById(id)
}


// const intencity = calculate()
function calculate(){
  const potency = Number(getById('potency').value)
  const tension = Number(getById('tension').value)
  const result = getById('result')
  console.log(potency)
  console.log(tension)
  console.log(Math.sqrt(3))
  let intencity = potency/( (Math.sqrt(3))*tension*0.8)
  result.innerHTML =  `<h4>hello your result is: </h4>
  <span id="resultFinal">${intencity}</span>`
  return intencity
}