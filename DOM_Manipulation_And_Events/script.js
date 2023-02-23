const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redTxt = document.createElement('p');
redTxt.classList.add('p');
redTxt.textContent = 'Hey I\' red!';
redTxt.style.cssText = "color: red";

container.appendChild(redTxt);


const blueTxt = document.createElement('p');
blueTxt.classList.add('h3');
blueTxt.textContent = 'Hey I\' blue h3!';
blueTxt.style.cssText = "color: blue";

container.appendChild(blueTxt);




const secondDiv = document.createElement('div');
secondDiv.classList.add('secondDiv');
secondDiv.style.cssText = "background-color:pink";
secondDiv.style.borderStyle = "solid"

const inDivOne = document.createElement('h1');
inDivOne.classList.add('inDivOne');
inDivOne.textContent = "I'am in a div";

const inDivTwo = document.createElement('p');
inDivTwo.classList.add('inDivTwo');
inDivTwo.textContent = "ME TOO!";


secondDiv.appendChild(inDivOne);
secondDiv.appendChild(inDivTwo);

container.appendChild(secondDiv);

//const btn = document.querySelector('#btn');

//btn.onclick = () => alert("Hello World");

/*const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});*/

btn.addEventListener('click', function (e) {
  console.log(e);
});

btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});