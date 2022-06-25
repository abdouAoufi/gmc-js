const titleH1 = document.getElementById("title");
const button = document.getElementsByClassName("my-button"); // ! return list!!
const pars = document.getElementsByTagName("p"); // ! return list!!
const anotherButton = document.querySelector("p");

// anotherButton.removeAttribute("class", "my-btn");
// anotherButton.setAttribute("class", "my-pink-btn");

function changeTextGlobal(element, text = "No text") {
    element.innerText = text;
}

changeTextGlobal(titleH1, "this is text");
changeTextGlobal(button[0]);

function paintText(listElements) {
    for (let i = 0; i < listElements.length; i++) {
        if (i % 2 === 0) {
            listElements[i].style.color = "green";
        } else {
            listElements[i].style.color = "red";
        }
    }
}

paintText(pars);

function cloneQuery(element) {
    if (element[0] === ".") {
        const classTarget = element.replace(".", "");
        document.getElementsByClassName(classTarget);
    }
    if (element[0] === "#") {
        const classTarget = element.replace("#", "");
        document.getElementById(classTarget);
    }
}