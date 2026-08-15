let wheel=document.getElementById("wheel");
let result=document.getElementById("result");
let next=document.querySelector(".next");

const gifts=[

"❤️ Unlimited Hugs",

"🍫 Chocolate",

"💋 One Cute Smile",

"🎂 Extra Cake",

"💖 My Love Forever"

];

document.getElementById("spin").onclick=function(){

let deg=Math.floor(Math.random()*2000)+1000;

wheel.style.transform="rotate("+deg+"deg)";

setTimeout(()=>{

let prize=gifts[Math.floor(Math.random()*gifts.length)];

result.innerHTML="You Won : "+prize;

next.style.display="inline-block";

},4000);

}