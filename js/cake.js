let button = document.getElementById("cutCake");
let cake = document.getElementById("cake");
let message = document.getElementById("message");

button.onclick = function(){

cake.innerHTML = "🍰";

button.style.display = "none";

message.style.display = "block";

}