// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " From World";

// console.log("h2 = ",h2);

// let divs = document.querySelectorAll(".box")

// let count=1;
// for (div of divs)
// {
//     div.innerText = `New Value for box ${count}`;
//     count ++;
// }

//=======

// let div=document.querySelector("div");

// div.style.backgroundColor="red";
// div.style.fontSize="20px";

// let newDiv = document.createElement("button");
// newDiv.innerText = ("Press here");
// console.log(newDiv);

// let div= document.querySelector("div");
// div.after(newDiv);

// let newHeading = document.createElement("h2");
// newHeading.innerText = "Main Heading";

// document.querySelector("body").prepend(newHeading);

// newDiv.remove();

let newbutton= document.createElement("button");
newbutton.innerText = "Click me ";
newbutton.style.backgroundColor="red";
newbutton.style.color="white";
document.querySelector("body").prepend(newbutton);