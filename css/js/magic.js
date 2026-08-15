const door = document.getElementById("door");

door.onclick = function(){

door.innerHTML="✨";

door.style.transform="scale(1.5)";
door.style.opacity="0";

setTimeout(function(){

window.location.href="final.html";

},1500);

}