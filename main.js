const container = document.querySelector("#container");

const redText = document.createElement("p");
redText.style.color = "red";
redText.textContent = "Hey I'm Red!";

container.appendChild(redText);

const blueText = document.createElement("h3");
blueText.style.color = "blue";
blueText.textContent = "Hey I'm Blue!";

container.appendChild(blueText);

const myDiv = document.createElement("div");
myDiv.style.backgroundColor = "pink";
myDiv.style.border = "1px solid black";

const newDivText = document.createElement("h1");
newDivText.textContent = "I'm a div";
myDiv.appendChild(newDivText);

const newP = document.createElement("p");
newP.textContent = "ME TOO";
myDiv.appendChild(newP);

container.appendChild(myDiv);

// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});

btn.addEventListener('click', function (e) {
    console.log(e);
  });

btn.addEventListener('click', function (e) {
    console.log(e.target);
  });

  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });