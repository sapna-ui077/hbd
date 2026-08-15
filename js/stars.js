const stars=document.querySelectorAll(".star");

const msg=document.getElementById("message");

const next=document.getElementById("next");

stars.forEach(star=>{

star.onclick=function(){

msg.style.display="block";

next.style.display="inline-block";

this.innerHTML="💖";

}

});