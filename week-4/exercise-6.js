function h1click() {
    const naga = document.getElementById("heading");
    naga.innerHTML = "value changed";
}

function p1click(){
    const simple = document.getElementById("paragraph");
    simple.firstChild.nodeValue = "your paragraph change";
}

function h1enter() {
    const h1 = document.getElementById("heading")
    h1.style.color = "red";
}

function h1exit() {
    const h1 = document.getElementById("heading")
    h1.style.color = "black";
}
function whenUpdated() {
    const h1 = document.getElementById("heading");
    h1.addEventListener("click", h1click);
    h1.addEventListener("mouseenter", h1enter);
    h1.addEventListener("mouseleave", h1exit);

    const maps1 = document.getElementById("paragraph");
    maps1.addEventListener("click",p1click)
}


document.addEventListener("click", whenUpdated);