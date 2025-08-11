// let para = document.querySelector("p"); 

// let divEl = document.querySelector("div");

let btn1=document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("Button 1 was clicked ");
    let a =1;
    a++;
    console.log(a);
}
let btn2 =document.querySelector("#btn2");

btn2.onclick = () => {
    console.log('Button was pressed 2 times'); 
    let a=1;
    a++;
    alert ('Byeeee!!!');
}

let btn3 =document.querySelector("#btn3");
btn3.onclick = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY)
}


btn4.addEventListener("click", (event) => {
    console.log("button 4 was pressed,handler 1 ")
    console.log(event);
}
)
btn4.addEventListener("click", () => {
    console.log("button 4 was pressed,handler 2 ")
}
)

const handler3 = () => {
    console.log("button 4 was pressed,handler 3 ")
}

btn4.addEventListener("click",handler3)

btn4.addEventListener("click", () => {
    console.log("button 4 was pressed,handler 4 ")
}
)

btn4.removeEventListener("click",handler3);

// TOGGLE BUTTON FOR DARK AND LIGHT MODE 

let mainbtn = document.querySelector("#mainbtn");
let cur = "lightmode";
let body = document.querySelector("body")
mainbtn.addEventListener("click", () => {
    if (cur === "lightmode")
    {
        cur = "darkmode";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else {
        cur ="lightmode";
        body.classList.add("white");
        body.classList.remove("dark");
    }
    console.log(cur);
});
