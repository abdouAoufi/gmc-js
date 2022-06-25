const possibleCarts = [3, 9, 12, 18, 21, 0];
const playerCart = document.getElementById("cart");
const playerChoice = document.getElementById("btn-player");
const playerConfirm = document.getElementById("btn-confirm");
const pcCart = document.getElementById("computer-cart");
const winner = document.getElementById("winner");

const getRandomCar = function() {
    const random = Math.random() * possibleCarts.length - 1;
    const index = Math.abs(Math.round(random));
    return possibleCarts[index];
};

let tries = 1;
let playerNum = 0;

function playerCallback() {
    if (tries < 2) {
        tries = tries + 1;
        const cart = getRandomCar();
        playerCart.innerText = cart;
        playerNum = cart;
    } else if (tries === 2) {
        computerChoice();
    }
}

function computerChoice() {
    const pcCartNum = getRandomCar();
    pcCart.innerText = pcCartNum;
    if (pcCartNum === playerNum) {
        winner.innerText = "draw";
    }
    if (pcCartNum > playerNum) {
        winner.innerText = "You lost";
        winner.style.color = "red";
    } else {
        winner.innerText = "You Win";
        winner.style.color = "green";
    }
}

playerChoice.addEventListener("click", playerCallback);
playerConfirm.addEventListener("click", computerChoice);