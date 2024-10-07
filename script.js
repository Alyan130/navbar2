const menu=document.getElementById("menu");
const cross=document.getElementById("cross")
const slider=document.querySelector(".slider")

menu.addEventListener("click",()=>{
    slider.classList.toggle("show");
    menu.style.display="none";
    cross.style.display="block";
});


cross.addEventListener("click",()=>{
    slider.classList.toggle("show");
    menu.style.display="block";
    cross.style.display="none";
});