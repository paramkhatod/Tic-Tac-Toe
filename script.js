let boxs = document.querySelectorAll(".box");
let resetbut = document.querySelector("#reset");
let newbut = document.querySelector("#new-but");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPat = [
    [0 , 1 , 2] , 
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    turn0 = true;
    count =0;
    enableBox();
    msgContainer.classList.add("hide");
};

const gameDraw = () =>
{
    msg.innerText = "Game was Draw.";
    msgContainer.classList.remove("hide");
    disableBoxs();
}

const disableBoxs = () =>{
    for(let box of boxs){
        box.disabled = true;
    }
};

const enableBox = () =>{
    for(let box of boxs){
        box.disabled = false;
        box.innerText = "";
    }
}
boxs.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("box was clicked");
        if(turn0)
        {
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
        
    });
});

const showWinner = (winner) =>{
    if(turn0)
    {
        msg.innerText = 'Congratulation, winner is X';
    }else{
        msg.innerText = 'Congratulation, winner is O';
    }
    msgContainer.classList.remove("hide");
}
const checkWinner = () => {
    for(pattern of winPat) {

            let pos1val = boxs[pattern[0]].innerText;
            let pos2val = boxs[pattern[1]].innerText;
            let pos3val = boxs[pattern[2]].innerText;

            if(pos1val != "" && pos2val != "" && pos3val != "" ){
                if(pos1val === pos2val && pos2val === pos3val){
                    console.log("winner" , pos1val);
                    showWinner(pos1val);
                    disableBoxs();
                }
            }
    }
};

newbut.addEventListener("click" , resetGame);
resetbut.addEventListener("click" , resetGame);