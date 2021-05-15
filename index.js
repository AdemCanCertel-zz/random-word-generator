var items = ["Excalibur", "History", "Science", "Nasa", "Space", "Mause"];


var content = document.getElementById("calculus");
var btn = document.getElementById("click");

var pickWord = function () {
var word = items[Math.floor(Math.random() * items.length)];
content.innerHTML = word;
};

btn.addEventListener("click", pickWord);



