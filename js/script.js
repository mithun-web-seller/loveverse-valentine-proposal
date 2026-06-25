const yesBtn =
document.getElementById("yesBtn");

const noBtn =
document.getElementById("noBtn");

const msg =
document.getElementById("message");

const success =
document.getElementById("successScreen");

let noClicks = 0;

let accepted = false;

const messages = [

"Are you sure? 😢",

"Think again 🥺",

"Please ❤️",

"Really? 💔",

"Last Chance 😭",

"I am getting tiny 😭",

"Almost Gone 🥹"

];

noBtn.addEventListener(
"click",
()=>{

    noClicks++;

    if(
    noClicks <= messages.length
    ){

        msg.innerText =
        messages[noClicks-1];

    }

    const noScale =
    Math.max(
    1 - noClicks*0.10,
    0
    );

    const yesScale =
    1 + noClicks*0.06;

    noBtn.style.transform =
    `scale(${noScale})`;

    yesBtn.style.transform =
    `scale(${yesScale})`;

    if(noClicks >= 7){

        noBtn.style.opacity = "0";

        noBtn.style.pointerEvents =
        "none";

        noBtn.style.display =
        "none";

        msg.innerText =
        "Only YES remains 💖";

    }

});

yesBtn.addEventListener("click",()=>{

    accepted = true;

    success.style.display = "flex";

    confetti({

    particleCount:250,

    spread:120,

    startVelocity:40,

    zIndex:9999999,

    origin:{
        x:0.5,
        y:0.3
    }

    });

    setTimeout(()=>{

    success.style.display="none";

    },5000);

});

const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

});

const loveBtn =
document.getElementById("loveBtn");

const loveModal =
document.getElementById("loveModal");

const closeModal =
document.getElementById("closeModal");

loveBtn.onclick = () => {

    if(!accepted){

        msg.innerText =
        "First click YES ❤️ then unlock the Love Letter";

        return;
    }

    loveModal.style.display = "flex";

};

closeModal.onclick = () => {

    loveModal.style.display="none";

};

const music =
document.getElementById("bgMusic");

document.body.addEventListener(
"click",
()=>{

    music.play().catch(() => {});

},
{once:true}
);


const musicToggle =
document.getElementById("musicToggle");

let isPlaying = true;

musicToggle.addEventListener(
"click",
()=>{

    if(isPlaying){

        music.pause();

        musicToggle.innerHTML =
        "🔇";

    }

    else{

        music.play();

        musicToggle.innerHTML =
        "🎵";

    }

    isPlaying =
    !isPlaying;

});