console.log("Welcome to JavaScript")

//Printing string of Name 
let fullName = "Muaaz Asif Khan";
console.log(fullName);

//Printing age 
const age = 22;
console.log(age);

// Printing properties of pen through class
const pen = {
    fullName : "Parker Jotter Stndard CT Ball Pen (Black)",
    rating: 4,
    offer: 5,
    price: 274,
    
};
console.log(pen);

// This is an object 
const account={
    username: "@themuaazkhan",
    followers: 500,
    following: 400,
    isFollow: true,

}
console.log(account);

//Artihematic Operations 
let a=5;
let b=5;
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);
console.log("a % b = ", a%b);
console.log("a ** b = ", a**b);

// Conditional Statements 
let studentAge =22;
if (studentAge > 18)
{
    console.log("You can apply for license! ")
}
else
    {
    console.log("You cannot apply for license! ")
}

// CHecking even or dd number
let num=4;
if (num % 2==0){
    console.log(num, "is an even number")
}
else 
    {
    console.log(num, "is an odd number")
}

// Else If conditions
let day=3;
if (day = 1){
    console.log(day , "st day is monday")
}
else if (day = 2){
    console.log(day , " nd day is tuesday")
}
else if (day = 3){
    console.log(day , " rs day is wednesday")
}
else{
    console.log("Invalid Input")
}

// Ternary operator

let license = age >= 18 ? "Can apply for license " : "Underage "; 
console.log(license);

/*
let license = age >= 18 ? console.log("Can apply for license") : console.log("Underage"); 
*/

// Prompt question
/*let stdName = prompt("Enter your name");
console.log(stdName);

let num1= prompt("Enter the number");
if (num%5 == 0)
    {
        console.log(num1, "is multiple of 5");
    }else{
        console.log(num1, "is not a multiple of 5");
    }
*/
/*
let stdGrade= prompt("Enter the number of students");
if (stdGrade >= 90 && stdGrade <= 100 )
    {
        console.log("Grade A");
    }
    else if (stdGrade >= 70 && stdGrade <= 89 )
        {
        console.log("Grade B");
    }
    else if (stdGrade >= 60 && stdGrade <= 69 )
        {
        console.log("Grade C");
    }
    else if (stdGrade >= 50 && stdGrade <= 59 )
        {
        console.log("Grade D");
    }
    else if (stdGrade >= 0 && stdGrade <= 49 )
        {
        console.log("Grade F");
    }
    else{
        console.log("Invalid Input");
    }
*/
    // Loops in js
    for (let i=0;i<5;i++)
        {
        console.log("Hello JavaScript!");
    }
    console.log("LOOP HAS ENDED...")

    let sum1=0;
    for (i=0;i<5;i++){
        sum1=sum1+1;
    }
    console.log("sum1 =",sum1);


    do{
        console.log("Hellooo....");
        i++;
    } while( i < 10)


// FOR of LOOOPPP
    let str = "Javascript";
    size=0;
    for (let i of str)
    {
        console.log("i=",i);
        size++;
    }
    console.log(size);

// FOR IN LOOOPPP
    let std = {
        fName:"Muaaz",
        age:22,
        cga:2.8,
        pass:true,
    }   
    for (let i in std){
        console.log("std",i);
    } 

// Pratice qs
for (let i=0;i<100;i++)
{
    if(i%2==0){
        console.log("Number = ",i);
    }
}

/*let guessnum = 4;
let usernum3= prompt("Guess the number (HINT=(1-50))");
while(guessnum != usernum3)
{
    usernum3= prompt("Guess the number (HINT=(1-50))");
}
console.log("Congratulations you guessed it right...");
*/


// STRINGSSS
let str1="hellooo";
 console.log(str1[2]);

 // TEMLATE LITERALS
 const pen1 = {
    fullName : "Parker Jotter Stndard CT Ball Pen (Black)",
    rating: 4,
    offer: 5,
    price: 274,
};
let pen1details = `The price of ${pen1.fullName} is ${pen1.price} rupees `;
console.log(pen1details);

/* THROUGH THIS CONTEXT
const pen1 = {
    fullName : "Parker Jotter Stndard CT Ball Pen (Black)",
    rating: 4,
    offer: 5,
    price: 274,
    sum(){
        console.log("sum ", this.rating+this.offer)
    }
};
pen1.sum();
*/

let str2= "Hello JavaScript... ";
console.log(str2);
let str3=str2.toUpperCase();
console.log(str2,"            ", str3);

// Practice qs
/*
let fullname = prompt ("Enter Full Name without spaces");
let username = "@" + fullname + fullname.length;
console.log(username);
*/

//  ARRAYSSS
let numArr = [10,20,30,40,50,60,70,80,90,100]
for(let i=0;i<numArr.length;i++)
{
    console.log(numArr[i]);
}

//PRATICE QS

let stdMarks=[80,60,70,90,85,90,60];
let markssum = 0;
for (let i of stdMarks)
{
    markssum += i;
}
let marksAvg = markssum / stdMarks.length;
console.log(marksAvg);

// QUESTION 2

let itemPrice = [550,660,490,790,590,850];

for (let i=0; i<itemPrice.length; i++)
{
    itemPrice[i] = itemPrice[i]-(itemPrice[i]*0.1);

}
console.log(itemPrice);

// ARRAY METHODSSS
// SPLICE
let numArr2=[101,102,103,104,105];
console.log(numArr2);
numArr2.splice(2,3,404,505,606,707,808);
console.log(numArr2);
numArr2.splice(4);
console.log(numArr2);

//PRACTICE QS 

let company=['bloomberg','microsoft','uber','google','Ibm','netfix'];
console.log(company);
company.shift();
console.log(company);
company.splice('uber',1,'ola');
console.log(company);
company.push('amazon');
console.log(company);

//  FUNCTIONSSS
/*
function sum(a,b)
{
    console.log(a+b);
    return a+b;
}
sum(3,9);
}
*/

let s2=(a,b) =>{
    console.log(a+b);
}

let mul2=(a,b) =>{
    console.log(a*b);
}

//PRACTICE QUESTIONS
/*let str4 = prompt("Enter a string...")
function vowelsCount (str4) 
{
    let count = 0;
    for (const i of str4)
        {
            if (i === 'a' || i === 'e' || i ==='i' || i ==='o' || i === 'u' )
            {
                count++;
            }
        }
        console.log(count);
}
vowelsCount(str4);

let str4 = prompt("Enter a string...");
let vowelCount = (str4) => {
    let count = 0;
    for (const i of str4)
        {
            if (i === 'a' || i === 'e' || i ==='i' || i ==='o' || i === 'u' )
            {
                count++;
            }
        }
        console.log(count);
}

vowelCount(str4); 
*/

// CALL BACK FUNCTION

let numarr3=[101,102,103,104,105];
numarr3.forEach((val) => {
    console.log(val);
});

let numarr4=['ali','ahmed','raza'];
numarr4.forEach((val, idx1) => {
    console.log(val,idx1);
}); 

// Practice qs
/*
let numarr5=[1,2,3,4,5];
numarr5.forEach((val) =>{
    console.log(val*val)
})
    */
let numarr5=[1,2,3,4,5,6,7,8,9,10];
let calcSq = (val) => {
    console.log(val*val)
};
numarr5.forEach(calcSq);

// THROUGH MAPPING
let newarr6 = numarr5.map((val) =>
{
    return(val*2);
}
)
console.log(newarr6);

// BIGGER VLUE 
let newarr7 = [10,20,30,40,,50,60];
let result3 = newarr7.reduce((pre,cur) => {
    return pre > cur ? pre : cur;
});
console.log(result3);

/*let newarr7 = [10,20,30,40,50,60];
let result3 = newarr7.reduce((pre,cur) => {
    console.log(pre > cur ? ` previous - ${pre}` : ` current - ${cur}`);
    return pre > cur ? pre : cur;
});
console.log(result3);
*/

// PRACTICE QS
let marks=[88,99,55,66,90,87,93];
let finalmarks = marks.filter((val) =>
{
    return val >= 90;
})
console.log(finalmarks);


// QUESTION 2
/*let input1 =prompt("Enter a number");
let arr1=[];

for (let i=1; i< input1; i++){
    arr1[i-1]=i;
}
console.log(arr1);

let sum3 = arr1.reduce((pre,cur) => {
    return (pre +cur);
});
console.log("sum = " , sum3);

let product3 = arr1.reduce((pre,cur) => {
    return pre*cur;
});
console.log("product = " , product3);
*/          