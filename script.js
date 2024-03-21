
setInterval(rain, 10);
function rain()
{
    var rainning=document.createElement("i");
    rainning.classList.add("fas");
    rainning.classList.add("fa-burn");

    rainning.style.fontSize=Math.random()*7+"px";
    rainning.style.animationDuration=Math.random()*2+"s";
    rainning.style.opacity=Math.random()*0.5;
    rainning.style.left=Math.random()*window.innerWidth+"px";

    document.body.appendChild(rainning);

    setTimeout(()=>
    {
        rainning.remove();
    },6000);
}