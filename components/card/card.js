const decrBtn = document.querySelector("#decr-btn");
const incrBtn = document.querySelector("#incr-btn");
const countText = document.querySelector(".count");

let count = 0;

decrBtn.addEventListener("click",()=>{
    if(count > 0){
        countText.innerHTML = --count;    
    }
})

incrBtn.addEventListener("click",()=>{
        countText.innerHTML = ++count;
})
