# Project related to DOM

## Project link 
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 solution

```javascript
console.log("sanskar")


const buttons = document.querySelectorAll('.button')
console.log(buttons);
const body = document.querySelector('body')

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
  })
});
```

## project 2 solution

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

```
## project 3 solution

```javascript
const clock = document.getElementById('clock')
//we can use it 
//const clock = document.querySelector('#clock')

setInterval(function(){
  let data = new Date();
  //console.log(data.toLocaleTimeString());
  clock.innerHTML = data.toLocaleTimeString();
}, 1000)

```