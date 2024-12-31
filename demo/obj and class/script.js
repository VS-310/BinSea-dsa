// const employee={
//     calctax(){
//         console.log("he is paying this amount of tax");
//     }
// };

// const karan={
//     salary:500000,
// };

// karan.__proto__=employee;
// karan.calctax();



// class car{
//     constructor(brand,x){
//         console.log("car");
//         this.brand=brand;
//         this.mileage=x;
//     }
//     start(){
//         console.log("go");
//     }
//     stop(){
//         console.log("end");
//     }
// }

// let rr=new car("rolls",10);



// class Parent{
//     constructor(branch){
//         this.dep=branch;
//         console.log("enter the parent");
//     }
//     printp(){
//         console.log("parent");
//     }
// }

// class Child extends Parent{
//     constructor(branch){
//         console.log("enter the child");
//         super(branch);
//         this.branch=branch;
//         console.log("exit the child");
//     }
//     printc(){
//         super.printp();
//         console.log("child");
//     }
// }

// let fam = new Child("EE");
// let famp = new Parent("CS");
// fam.printc();



// let a=true;
// try{
//     console.log(b);
// }
// catch(err){
//     console.log(err);
// }
// console.log(a);



// function hello(){console.log("timed out");}
// setTimeout(hello,2000);
// setTimeout(()=>{
//     console.log("timed out 1");
// }, 2000);

// console.log("this is not timed out as it is asynchronous progg");



// function sum(a,b){
//     console.log(a+b);
// }
// function calc(a,b,sumcallback){
//     sumcallback(10,20);
// }
// calc(1,2,sum);



// function getdata(id,getval){
//     setTimeout(() => {
//         console.log(`this is ${id}'s data`);
//         if(getval) getval();
//     }, 2000);
// }

// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3);
//     });
// });



// let prom = new Promise((resolve,reject) => {
//     console.log("It's a promise");
//     resolve("123");
//     // reject("namo");
// });



// const getPromise=()=>{
//     return new Promise((resolve,reject) => {
//         console.log("This is a Promise");
//         resolve("success");
//         // reject("network error");
//     });
// };

// let promise=getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled", res);
// });
// promise.catch((err)=>{
//     console.log("rejected", err);
// });



// function api(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("weather data", id);
//             resolve("success");
//         }, 2000);
//     });
// }

// console.log("getting data 1...");
// api(1)
//     .then((res)=>{
//         console.log("getting data 2...");
//         return api(2);
//     })
//     .then((res)=>{
//         console.log("getting data 3...");
//         return api(3);
//     })
//     .then((res)=>{
//         console.log(res);
//     })



// async function getweather(){
//     console.log("getting data 1...");
//     await getdata(1);
//     console.log("getting data 2...");
//     await getdata(2);
//     console.log("getting data 3...");
//     await getdata(3);
// }

// function getdata(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data", id);
//             resolve("success");
//         }, 2000);
//     });
// }

// getweather();



(async function(){
    console.log("getting data 1...");
    await getdata(1);
    console.log("getting data 2...");
    await getdata(2);
    console.log("getting data 3...");
    await getdata(3);
})(); // automatically code executes

function getdata(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data", id);
            resolve("success");
        }, 2000);
    });
}

