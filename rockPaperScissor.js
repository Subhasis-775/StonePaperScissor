let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompchoice =()=>{
    const options=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}

const drawgame= () =>{
    msg.innerText="game was draw";
    msg.style.backgroundColor ="#081b31";
}

const showwinner=(userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You won! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`You lost  ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor ="red";
    }
}

const playgame= (userchoice) =>{
    console.log("userchoice= ",userchoice);
    const compchoice=gencompchoice();
    console.log("comp choice-",compchoice);

    if(userchoice==compchoice){
        drawgame();
    }
    
    else {
    let userwin=true;
    if(userchoice=="rock"){
        userwin=compchoice=="paper" ? false : true;
    }

    else if(userchoice=="paper"){
        userwin=compchoice=="scissor" ? false: true;
    }

    else{
        userwin=compchoice=="rock" ? false: true;
    }

    showwinner(userwin,userchoice,compchoice);
    }

};

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
    const userchoice=choice.getAttribute("id");
    playgame(userchoice);
    });
});
