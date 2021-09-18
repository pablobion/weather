const hours = new Date().getHours();
const image = document.getElementById("background-image");
const background = document.getElementById("background");
image.style.backgroundImage = hours > 18 ? 'url("./assets/floripa_noite.png")' : 'url("./assets/floripa_dia.png")';
hours > 18 ? background.classList.add("bg-blue-900") : background.classList.add("bg-blue-400");
