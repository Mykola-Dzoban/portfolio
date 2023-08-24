const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");
const navItems = document.querySelectorAll('.nav-link');
const body=document.body;

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active"); 
    navMenu.classList.toggle("active");
    body.classList.toggle("noscroll");
})

navItems.forEach((item)=>{
    item.addEventListener('click', ()=>{
        hamburger.classList.toggle("active"); 
        navMenu.classList.toggle("active");
        body.classList.toggle("noscroll");
    })
})