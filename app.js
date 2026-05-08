
//Player 1 Variables
const player1_score = document.querySelector('#score_1');
const btn_add_1 = document.querySelector('#plus_score_1');
const btn_minus_1 = document.querySelector('#minus_score_1');

let score_1 = 0;    
player1_score.innerText = score_1;


//Player 2 Variables
const player2_score = document.querySelector('#score_2');
const btn_add_2 = document.querySelector('#plus_score_2');
const btn_minus_2 = document.querySelector('#minus_score_2');

let score_2 = 0;    
player2_score.innerText = score_2;


//Reset Score
const reset_btn = document.querySelector('#restart');


function add_score(x){
    x += 1;

    return x;
}

function minus_score(x){
    x -=1;

    return x;
}




btn_add_1.addEventListener('click', ()=>{

    score_1 = add_score(score_1);    
    player1_score.innerText = score_1;
   
})


btn_minus_1.addEventListener('click', ()=>{

    score_1 = minus_score(score_1);
    player1_score.innerText = score_1;
    console.log("minus number");
})


btn_add_2.addEventListener('click', ()=>{

    score_2 = add_score(score_2);    
    player2_score.innerText = score_2;
   
})


btn_minus_2.addEventListener('click', ()=>{

    score_2 = minus_score(score_2);
    player2_score.innerText = score_2;
    console.log("minus number");
})

reset_btn.addEventListener('click', ()=>{
    score_1 = 0;
    score_2 = 0;
    player1_score.innerText = score_1;  
    player2_score.innerText = score_2;  

    console.log("Reset Scores")
})