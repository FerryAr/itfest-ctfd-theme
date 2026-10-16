function a(){return "light"}
function c(t){const r=document.querySelector(".theme-switch i.fas");if(r){r.classList.toggle("fa-moon",false);r.classList.toggle("fa-sun",true)}}
document.documentElement.setAttribute("data-bs-theme","light");
try{localStorage.setItem("theme","light")}catch(e){}
window.addEventListener("load",()=>{c("light")});
