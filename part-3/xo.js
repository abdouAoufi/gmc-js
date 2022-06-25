const cells = document.getElementsByClassName("cell");

const player1 = [];
const player2 = [];
let turn = "p1";

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function() {
        if (turn === "p1") {
            player1.push(i);
            checkWinner(player1);
            turn = "p2";
            cells[i].innerHTML = "<p> X </p>";
        } else {
            player2.push(i);
            checkWinner(player2);
            turn = "p1";
            cells[i].innerHTML = "<p> 0 </p>";
        }
    });
}

function checkWinner(player) {
    let didWin = false;
    if (player.length < 3) return;

    const str = player.join("");

    switch (str) {
        case "012":
        case "345":
        case "678":
        case "036":
        case "147":
        case "258":
        case "048":
        case "246":
            didWin = true;
    }

    if (!didWin) {
        checkWinner(player.reveres());
    }

    if (turn === "p1" && didWin === true) {
        alert("player 1 wins");
    } else if (turn === "p2" && didWin === true) {
        alert("player 2 wins");
    }
}