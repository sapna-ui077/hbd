let heart=document.getElementById("heart");

let score=0;

let next=document.getElementById("next");

function moveHeart(){

heart.style.left=Math.random()*80+"vw";

heart.style.top=Math.random()*60+"vh";

}

moveHeart();

heart.onclick=function(){

score++;

document.getElementById("score").innerHTML="Score : "+score+" / 10";

moveHeart();

if(score==10){

next.style.display="block";

}

}