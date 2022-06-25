const space = document.getElementById("space");

const myParagraph = document.createElement("p");
myParagraph.innerText = "T	his text added using JS";
document.body.appendChild(myParagraph);

const btn = document.createElement("button");
btn.innerText = "click";

space.innerHTML = "<p> hi </p>"

// space.remove();