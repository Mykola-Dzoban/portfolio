const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");
const body=document.body;

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("noscroll");
})