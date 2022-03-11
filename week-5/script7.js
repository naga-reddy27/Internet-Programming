function myFunc(){
    var element= document.getElementById("circle");
    document.addEventListener('keydown',clickFunc);

}
function clickFunc(){
    var element= document.getElementById("circle");
    var positionLeft=element.offsetLeft;
    element.style.left=positionLeft-10+'px';
    
}
document.addEventListener('DOMContentLoaded',myFunc);