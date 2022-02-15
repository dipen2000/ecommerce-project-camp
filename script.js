const toProduct = document.querySelector(".to-product");
const loginBtn = document.querySelector(".login-btn");
toProduct.addEventListener("click" , ()=>{
    window.location = "/pages/product/product.html";
});

loginBtn.addEventListener("click" , ()=>{
    window.location = "/pages/login-signup/login-signup.html";
});