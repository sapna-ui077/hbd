document.addEventListener("mousemove",function(e){

let heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";
heart.style.left=e.clientX+"px";
heart.style.top=e.clientY+"px";
heart.style.fontSize="18px";
heart.style.pointerEvents="none";
heart.style.transition=".8s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.opacity="0";
heart.style.transform="translateY(-30px)";

},50);

setTimeout(()=>{

heart.remove();

},800);

});