function myFunc(){
    var element= document.getElementById("circle");
    element.style.opacity=1;
    element.addEventListener('click',clickFunc);

}
function clickFunc(){
    var element= document.getElementById("circle");
    var circleOpacity=parseFloat(element.style.opacity);
    element.style.opacity=circleOpacity-0.1;
    
}
document.addEventListener('DOMContentLoaded',myFunc);