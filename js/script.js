//practicing objects
var me = {
  name:'Kenneth Melendez',
  age: null,
  address: 'Planet Earth',
  speak: 'Hello!!!'
}

//practicing creating a button using the querySelector
var button = document.querySelector('button');
//eventlistener waits for the event then activates function
button.addEventListener('click',btnpress);
//created a button press function
function btnpress(){
  document.querySelector('h1').textContent = me.speak;
}

//makes the page say welcome
var pChange = document.querySelector('p');
var sentence = 'Welcome to my page';
pChange.textContent = sentence;



//changing the lists on the html file to say something in an array
var liChange = document.querySelectorAll('li');
var content = "This is a loop"

for (var x = 0; x < liChange.length; x++){
  liChange[x].textContent = content;
}


//playing more with loops
var h2s = document.querySelectorAll('h2');

for (var x = 0; x < h2s.length; x++){
  h2s[x].textContent = 'More Loops!! ' + x;
}

//changes the backgroundColor
var body = document.querySelector('body');
body.style.backgroundColor = 'tomato';

//button that changes backgroundcolor!!!
var changeBg = document.querySelector('#bgchange');
var colors = ['white','purple','orange','red'];
var clicks = 0;

changeBg.addEventListener('click',changeColor);


function changeColor(){
  document.body.style.backgroundColor = colors[clicks];
  clicks++;
  if (clicks === colors.length){
    clicks = 0;
  }
}




//FIZZBUZZ CHALLENGE

/*
for (var x = 0; x <= 100; x++) {
  if (x === 0) {
    console.log(x);
  } else if (x % 3 === 0 && x % 5 === 0) {
    console.log("fizzbuzz");
  } else if (x % 5 === 0) {
    console.log("buzz");
  } else if (x % 3 === 0) {
    console.log("fizz");
  } else {
    console.log(x);
  }
}
*/
