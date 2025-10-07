
```javascript
const form = document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  const range = document.querySelector('#range')

  if(height === ''|| height < 0 || isNaN(height)){ 
    results.innerHTML = "Please give  me valid height"
  }else if(weight === ''|| weight < 0 || isNaN(weight)){ 
    results.innerHTML = "Please give  me valid weight"
  } else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    //show the result
    results.innerHTML = `<span>${bmi}</span>`

    // range 
    if(bmi < 18.6){
      range.innerHTML = "Your Weight Is Under Weight"
    }else if(bmi >= 18.6 && bmi <= 24.9){
      range.innerHTML = "Your Weight Is Range"
    }else{
      range.innerHTML = "Your Weight Is Overweight"
    }
  }
  
});