let userscore=0;
let compuser=0;

let choices= document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let score1 = document.querySelector("#user");
let score2 = document.querySelector("#comp");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choice1 = choice.getAttribute("id");
        game(choice1);
    });
});

const compchoice = () => {
    const options = ["rock","paper","scissors"];
    const ranindex = Math.floor(Math.random() * 3);
    return options[ranindex];
};

const drawgame = () => {
    console.log("Game was Draw");
    
}

const showwinner = (userwin,userChoice,compchoice) => {
    if (userwin)
    {
        userscore++;
        score1.innerText = userscore;
        //console.log("You win!");
        msg.innerText = (`You win! your's ${userChoice} beats ${compchoice}`);
        msg.style.backgroundColor="green";
    }else{
        compuser++;
        score2.innerText = compuser;
        //console.log("You lose!");
        msg.innerText = (`You Lose! ${compchoice} beats your's ${userChoice}`);
        msg.style.backgroundColor="red";
    }
}

const game = (choice1 ) => {
    console.log("UserChoice = ",choice1 );
    const choice2 = compchoice();
    console.log("CompChoice =",choice2);
    let userwin = true;
    if (choice1 === choice2)
    {
        drawgame();
        msg.innerText = ("Draw");
        msg.style.backgroundColor="#081b31";
        return;
    }
    else{
        
        if(choice1 === "rock"){
            userwin = choice2 === "paper" ? false : true;
        }
        else if(choice1 === "paper"){
            userwin = choice2 === "scissors" ? false : true;
        }
        else{
            userwin = choice2 === "rock" ? false : true;
        }
    }
    showwinner (userwin,choice1,choice2);
}; 