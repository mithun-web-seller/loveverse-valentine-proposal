const container =
document.querySelector(".hearts-container");

for(let i=0;i<40;i++){

    const heart =
    document.createElement("img");

    heart.src =
    "images/heart.png";

    heart.classList.add("floating-heart");

    heart.style.left =
    Math.random()*100+"%";

    heart.style.width =
    Math.random()*25+15+"px";

    heart.style.animationDuration =
    Math.random()*8+5+"s";

    container.appendChild(heart);
}