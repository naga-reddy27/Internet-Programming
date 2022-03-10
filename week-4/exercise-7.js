function buttonClick() {
    const input = document.getElementById("text_no");
    const value = input.value;
    const valueDiv = document.getElementById("button_no");
    valueDiv.innerHTML = value;
}

function load() {
    const text = document.getElementById("text_no");
    text.addEventListener("keyup",buttonClick )
}

document.addEventListener("DOMContentLoaded", load);