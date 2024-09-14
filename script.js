let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg");
let p = document.querySelector(".message");
let newBtn = document.querySelector(".new");
let resetBtn = document.querySelector(".reset");

let turnO = true;
let winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true; //to disable button once clicked so its value do not change

    checkWinner(); // Function to check winner
  });
});

const checkWinner = () => {
  winningPatterns.forEach((pattern) => {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        p.innerText = "Congrats winner is : " + pos1val;
        msgContainer.classList.remove("hide");

        boxes.forEach((box) => {
          box.disabled = true;
        });
      }
    }
  });
};

// Function to add in new-game and reset button
const enableAllBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
    msgContainer.classList.add("hide");
  });
};

// Adding function for reset and new-game
newBtn.addEventListener("click", enableAllBoxes);
resetBtn.addEventListener("click", enableAllBoxes);
