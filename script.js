let modalbutton=document.querySelector(".btn-m");
let modalbg=document.querySelector(".modal-bg");
let modalclose=document.querySelector(".close");
//open the modal
modalbutton.addEventListener("click",()=>{
    modalbg.classList.add("bg-active")
});
//close the modal
modalclose.addEventListener("click",()=>{
    modalbg.classList.remove("bg-active")
});