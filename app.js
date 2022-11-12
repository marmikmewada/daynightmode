

"use strict";
const button = document.querySelector("button");
const outer = document.querySelector(".outer");
const inner = document.querySelector(".inner");


console.log(button);
console.log(inner);
console.log(outer);
    button.addEventListener("click", function(event){
        event.stopPropagation ();
        if(outer.classList.contains("colorGreen") && inner.classList.contains("colorRed")){
            outer.classList.remove("colorGreen");
            outer.classList.add("colorRed")
            inner.classList.add("colorGreen");
            inner.classList.remove("colorRed");
        }
        else {
            outer.classList.add("colorGreen");
            outer.classList.remove("colorRed");
            inner.classList.add("colorRed")
            inner.classList.remove("colorGreen");
        }
    
    }

); //closing of event listener


