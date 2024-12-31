let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let msgcont = document.querySelector(".msg-container");
let playagain = document.querySelector("#play-again");
let btncnt=0, win=0;

const crtposs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

let turnx = true, turno = false;

const disableboxes=()=>{
    for(let box of boxes) box.disabled=true;
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("button was clicked");
        btncnt++;
        if (turnx) {
            box.innerText = "X";
            box.style.color="red";
            turnx = false;
            turno = true;
        } else {
            box.innerText = "O";
            box.style.color="green";
            turnx = true;
            turno = false;
        }
        box.disabled = true;
        check();
    });
});

const check = () => {
    for (let pattern of crtposs) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                console.log(`Player ${val1} is the WINNER!`);
                win=1;
                disableboxes();
                showwinner(val1);
            }
        }
        if(btncnt==9 && win==0){
            msg.innerHTML = `<p style="color: yellow;"><b>DRAW!</b></p>`;
            msgcont.classList.remove("hide");
        }
    }
};

const showwinner = (winner) => {
    msg.innerHTML = `<p style="color: yellow;">Player with symbol ${winner} is the WINNER!</p>`;
    msgcont.classList.remove("hide");
};

const resetgame=()=>{
    turnx=true;
    enableboxes();
    msgcont.classList.add("hide");
}

reset.onclick = () => {
    resetgame();
}

playagain.onclick = () => {
    resetgame();
}
