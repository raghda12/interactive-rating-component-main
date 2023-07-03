const mainContainar=document.querySelector(".containar");
const thankContainar=document.querySelector(".thank-you");
const submitButton=document.querySelector(".btn-submit");
const rate=document.querySelector("#rating");
const rating=document.querySelectorAll(".btn");
const tryAgain=document.querySelector(".btn-tryAgain")

submitButton.addEventListener('click',()=>{
    mainContainar.style.display="none";
    thankContainar.classList.remove('hidden');
    
})
tryAgain.addEventListener('click',()=>{
    mainContainar.style.display="block";
    thankContainar.classList.add('hidden');
})
rating.forEach((elem) => {
    elem.addEventListener("click",() =>{
        rate.innerHTML=elem.innerHTML
    })
});
