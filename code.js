document.getElementById("bgChanger").addEventListener("click", changeBackground);

function changeBackground() {
    const colors = ['ivory', 'lemonchiffon', 'antiquewhite', 'cornsilk', "white", "brown"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

}