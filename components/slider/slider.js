const sliderRate = document.querySelector(".slider-rate");
const slider = document.querySelector(".slider");
const progress = document.querySelector(".progress");
const selector = document.querySelector(".selector")

slider.oninput = function (){
    selector.style.left = this.value + "%";
    progress.style.width = this.value + "%";
}