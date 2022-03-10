function whenLoded() {
    const naga = document.getElementById("heading");
    naga.firstChild.nodeValue = "value changed";

    const simple = document.getElementById("paragraph");
    simple.firstChild.nodeValue = "your paragraph change";
}

addEventListener("click", whenLoded);