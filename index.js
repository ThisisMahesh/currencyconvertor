let inputValue = document.getElementById('input-value')
let fromVal = document.getElementById('fromValue')
let toVal = document.getElementById('toValue')
let result = document.getElementById('result')
let convert = document.getElementById('convert')

convert.addEventListener('click', async () => {    
  let value = fromVal.value    
  let to = toVal.value 
  let amt = inputValue.value     
  const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=${amt}&from=${value}&to=${to}`)
    .then(resp => resp.json())
    .then((data) => {      
      document.getElementById('result').innerText = data.rates[`${to}`]
    });
})


