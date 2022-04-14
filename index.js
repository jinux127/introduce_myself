const introduce_myself = document.querySelector('#introduce_myself');
const whoami = document.querySelector('#whoami');
const btnUp = document.querySelector('#upBtn');

let cur_mode = "light";

whoami.addEventListener('click',()=>{
    introduce_myself.style.display = "block";
    introduce_myself.scrollIntoView({behavior:'smooth'});
});

btnUp.addEventListener('click',()=>{
    document.body.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector("#show").addEventListener('click', ()=>{
    document.querySelector(".background").className = "background show";
});
document.querySelector("#close").addEventListener('click', ()=>{
    document.querySelector(".background").className = "background";
});




