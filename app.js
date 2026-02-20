'use strict';
console.log("Hello")
const form =document.getElementById("jsonForm")
const input =document.getElementById("jsonInput")
const output =document.querySelector("#output")
const output2 =document.querySelector("#output2")
const output3 =document.querySelector("#output3")

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    try{
        let items =JSON.parse(input.value)
        console.log(items)
        output.textContent = items[0]
        output2.textContent = items[1]
        output3.textContent = items[2]

    }
catch(error){
    console.error("error parsing JSON", error)
}


});

