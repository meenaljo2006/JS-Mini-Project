let gameSeq = [];
let userSeq = [];
let btns = ["box1","box2","box3","box4"];

let Gamestarted = false;
let level = 0;

let highScore = 0;
let hScore = document.querySelector(".score"); 

let h3 = document.querySelector("h3");

hScore.innerText = `Highest Score = ${highScore}`;
document.addEventListener("keypress",function(){
    if(Gamestarted == false){
        console.log('game started');
        levelUp();
    }
    Gamestarted = true;
    
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function levelUp(){

    userSeq = [];

    level++;
    console.log(level);
    h3.innerText = `Level ${level}`;

    let randIndx = Math.floor(Math.random()*4);
    let randBox = btns[randIndx];
    let randBtn = document.querySelector(`.${randBox}`);

    gameSeq.push(randBox);
    console.log("gameseq",gameSeq);

    btnFlash(randBtn);
}

function checkSeq(indx){
     if(userSeq[indx] == gameSeq[indx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
     }
     else{
        let score = level-1;
        h3.innerHTML = `Game over! Your score is <b>${level-1}</b>. <br> Press any key to start.`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },100);

        if(score>highScore){
            highScore=score;
            hScore.innerText = `Highest Score = ${highScore}`;
        }

        reset();
     }

}

function btnpress(){
    let btn = this;
    userBox = btn.getAttribute("id");

    userSeq.push(userBox);
    console.log("USERseq",userSeq);

    checkSeq(userSeq.length-1);
}

allBtn = document.querySelectorAll(".btn");
for(let btn of allBtn){
    btn.addEventListener("click",btnpress);
}


function reset(){

    gameSeq = [];
    userSeq = [];
    
    Gamestarted = false;
    level = 0;

}



