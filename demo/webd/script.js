// age=undefined;
// console.log(age);
// b= 5>="6";
// console.log(b);
// console.log("2 + 1 =",2+1);
// console.log(`2 + 1 = ${1+2}`);

// const expr = 'Manoes';
// switch(expr){
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

// // let y=prompt("enter y");
// // if(y%3==0) console.log("true");
// // else console.log("false");

// for(let i=0;i<5;i++){
//     console.log("num",i);
// }

// let str="the hindustan times"

// for(let i of str){
//     console.log("alpha",i);
// }

// let student={
//     fname:"subbu",
//     age:19,
//     cgpa:8.3,
//     town:"vizag"
// };

// for(let i in student){
//     console.log("key =",i,"; value =",student[i]);
// }

// // let crt=25;
// // let input=prompt("Guess the number");

// // while(input!=crt){
// //     input=prompt("Guess the number");
// // }
// // console.log("Congrats, your guess is correct");

// let w=`the ${1+2+3}`;
// let e=`${'a'+'b'+'c'}`;
// console.log(w,e);

// console.log(str[0],str[1],str[2]);
// console.log("the\nthing")
// console.log(str.toUpperCase());
// let x="       super nova       "
// console.log(x.trim());
// console.log(str.slice(1,8));
// console.log(x.concat(str));
// console.log(str.replaceAll("hi",'y'));
// console.log(str.charAt(1));

// let arr=["1","2","3","4","5"];

// console.log(arr.slice(1,3));
// arr.splice(1, 2, 101,102,103);//start, delete cnt, replacement elements
// arr.push(104);
// arr.unshift(100);
// for(let i of arr){
//     console.log(i);
// }

// function add(a,b){
//     return a+b;
// }
// console.log(add(1,5));

// const mul=(a,b)=>{
//     return a*b;
// };
// console.log(mul(5,5));

// brr=[1,2,3,4,5];
// brr.forEach(val => {
//     console.log(val**2);
// });

window.console.log("namasthe");
console.log(document.body);
console.dir(document.body.childNodes[1]);

console.log(document.getElementById("para"));
console.log(document.getElementsByClassName("new"));
console.log(document.getElementsByTagName("p"));

console.log(document.querySelector("#hi"));
console.log(document.querySelector(".new"));
console.log(document.querySelectorAll("p"));

let firstel=document.querySelector("#heading");
console.log(firstel.children);
console.log(firstel.firstChild);

let ans=document.querySelector("#cars");
console.log(ans.innerHTML);
console.log(ans.innerText);

ans.innerText+="abcd";
ans.innerHTML="<div><i>Market</i></div>"

console.log(document.querySelector("#hide").innerText);
console.log(document.querySelector("#hide").textContent);

let div=document.querySelector("#box1");
console.log(div);
console.log(div.getAttribute("name"));
div.setAttribute("name","jsdiv");
console.log(div.getAttribute("name"));
div.style.backgroundColor="blue";
div.style.color="yellow";
div.style.fontSize="20px";

let newbtn=document.createElement("button");
console.log(newbtn);
newbtn.innerText="Save and Next"

let newh = document.createElement("h2");
newh.innerHTML="<i>Naya wala</i>";
document.querySelector("body").prepend(newh);

div.append(newbtn);
div.prepend(newbtn);
div.before(newbtn);
div.after(newbtn);

let del=document.querySelector("#ppp");
del.remove();

document.querySelector(".class1").classList.add("class2");
document.querySelector(".class1").classList.remove("class3");


let btn1=document.querySelector("#btn1");
btn1.onclick=(evt)=>{
    console.log(evt);
}
btn1.onclick=()=>{
    console.log("btn1 was clicked");
};

let handler = () => {
    console.log("button2")
};
btn1.addEventListener("dblclick",() => {
    console.log("button1")
});
btn1.addEventListener("dblclick",handler);
btn1.addEventListener("dblclick",() => {
    console.log("button3")
});
btn1.removeEventListener("dblclick",handler);

//dark-mode enabler
let mode=document.querySelector("#mode");
let currmode="light";
mode.onmouseover=()=>{
    console.log("you are trying to change mode");
    if(currmode=="light") {
        currmode="dark";
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="white";
    }
    else {
        currmode="light";
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").style.color="black";
    }
    console.log(currmode);
};
