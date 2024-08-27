let age = document.querySelector("input")

let btn = document.querySelector("button")
 let ressult = document.querySelector("h1") 


 btn.addEventListener("click",function () {
    if (age.value >= 18) {
        ressult.innerHTML = "tmi biye koro"   
       
            ressult.style.color = "white";
            ressult.style.background = "red";      
         
        }
 
        else{
            ressult.innerHTML = "tmi choto"
       
            ressult.style.color = "white";
            ressult.style.background = "green";

        }
 })