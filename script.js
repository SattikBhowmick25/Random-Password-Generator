//For generating the random password
let length=document.querySelector("#len");
let passwordGen=document.getElementById("password");
let generate = document.querySelector(".btn");

const upperCase="ABCDEFHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const special="@#$%^&*()_+|~[]<>/-=?";
const allChar=upperCase+lowerCase+number+special;
generate.addEventListener("click", ()=>{
    let password="";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += special[Math.floor(Math.random()*special.length)];

    while(length.value>password.length){
        password += allChar[Math.floor(Math.random()*allChar.length)];
    }

    passwordGen.value=password;
    console.log(password);
});

//For copy 
let copy = document.querySelector("img");

copy.addEventListener("click", ()=>{
    passwordGen.select();
    document.execCommand("copy");
});