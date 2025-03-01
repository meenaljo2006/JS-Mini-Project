// play with computer - 
const board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
const boxes = document.querySelectorAll(".box");
const msgContainer = document.querySelector(".msg-container");
const msg = document.getElementById("msg");
const newBtn = document.getElementById("new-btn");
const resetBtn = document.getElementById("reset-btn");

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function checkWinner() {
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            msg.innerText = `${board[a]} Wins!`;
            msgContainer.classList.remove("hide");
            return true;
        }
    }
    if (!board.includes("")) {
        msg.innerText = "It's a Tie!";
        msgContainer.classList.remove("hide");
        return true;
    }
    return false;
}

function getBestMove() {
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        let values = [board[a], board[b], board[c]];
        if (values.filter(v => v === "O").length === 2 && values.includes("")) {
            return pattern[values.indexOf("")]; // Winning move
        }
        if (values.filter(v => v === "X").length === 2 && values.includes("")) {
            return pattern[values.indexOf("")]; // Blocking move
        }
    }
    return board[4] === "" ? 4 : board.findIndex(cell => cell === ""); // Choose center or first available
}

function computerMove() {
    let move = getBestMove();
    if (move !== -1) {
        board[move] = "O";
        boxes[move].innerText = "O";
        currentPlayer = "X";
        checkWinner();
    }
}

function makeMove(index) {
    if (board[index] === "" && currentPlayer === "X") {
        board[index] = "X";
        boxes[index].innerText = "X";
        if (!checkWinner()) {
            currentPlayer = "O";
            setTimeout(computerMove, 500);
        }
    }
}

boxes.forEach((box, index) => {
    box.addEventListener("click", () => makeMove(index));
});

resetBtn.addEventListener("click", () => {
    board.fill("");
    boxes.forEach(box => box.innerText = "");
    currentPlayer = "X";
    msgContainer.classList.add("hide");
});

newBtn.addEventListener("click", () => {
    board.fill("");
    boxes.forEach(box => box.innerText = "");
    currentPlayer = "X";
    msgContainer.classList.add("hide");
});


// To play with friend

// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let newGameBtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");

// let turnO = true; //playerX, playerO
// let count = 0; //To Track Draw

// const winPatterns = [
//   [0, 1, 2],
//   [0, 3, 6],
//   [0, 4, 8],
//   [1, 4, 7],
//   [2, 5, 8],
//   [2, 4, 6],
//   [3, 4, 5],
//   [6, 7, 8],
// ];

// const resetGame = () => {
//   turnO = true;
//   count = 0;
//   enableBoxes();
//   msgContainer.classList.add("hide");
// };

// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     if (turnO) {
//       //playerO
//       box.innerText = "O";
//       turnO = false;
//     } else {
//       //playerX
//       box.innerText = "X";
//       turnO = true;
//     }
//     box.disabled = true;
//     count++;

//     let isWinner = checkWinner();

//     if (count === 9 && !isWinner) {
//       gameDraw();
//     }
//   });
// });

// const gameDraw = () => {
//   msg.innerText = `Game was a Draw.`;
//   msgContainer.classList.remove("hide");
//   disableBoxes();
// };

// const disableBoxes = () => {
//   for (let box of boxes) {
//     box.disabled = true;
//   }
// };

// const enableBoxes = () => {
//   for (let box of boxes) {
//     box.disabled = false;
//     box.innerText = "";
//   }
// };

// const showWinner = (winner) => {
//   msg.innerText = `Congratulations, Winner is ${winner}`;
//   msgContainer.classList.remove("hide");
//   disableBoxes();
// };

// const checkWinner = () => {
//   for (let pattern of winPatterns) {
//     let pos1Val = boxes[pattern[0]].innerText;
//     let pos2Val = boxes[pattern[1]].innerText;
//     let pos3Val = boxes[pattern[2]].innerText;

//     if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
//       if (pos1Val === pos2Val && pos2Val === pos3Val) {
//         showWinner(pos1Val);
//         return true;
//       }
//     }
//   }
// };

// newGameBtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);