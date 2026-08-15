function showMessage(){

document.getElementById("secret").style.display="block";

confetti();

}

function confetti(){

for(let i=0;i<120;i++){

let heart=document.createElement("div");

heart.innerHTML=["❤️","🎉","✨","🎈"][Math.floor(Math.random()*4)];

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-20px";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.transition="4s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.top="100vh";

},100);

setTimeout(()=>{

heart.remove();

},4500);

}

}
const text = `Happy Birthday Roshan ❤️

Thank you for taking this little journey.

I hope this surprise made you smile.

May this year bring happiness, success, laughter,
new adventures and countless beautiful memories.

Stay happy.
Stay blessed.
Keep smiling.

🎂 Happy Birthday Once Again ❤️`;

let i = 0;

function typeWriter(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter,40);

}

}

window.onload = typeWriter;