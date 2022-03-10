function h1click() {
    const naga = document.getElementById("heading");
    naga.innerHTML = "value changed";
}

function p1click(){
    const simple = document.getElementById("paragraph");
    simple.firstChild.nodeValue = "your paragraph change";
}

function whenUpdated() {
    const h1 = document.getElementById("heading");
    h1.addEventListener("click", h1click);

    const maps1 = document.getElementById("paragraph");
    maps1.addEventListener("click",p1click)
}


document.addEventListener("click", whenUpdated);