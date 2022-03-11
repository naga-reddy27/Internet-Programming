function myFunc(){
    var element= document.getElementById("circle");
    element.style.opacity="1";
    element.addEventListener('click',clickFunc);

}
function clickFunc(){
    var element= document.getElementById("circle");
    element.style.opacity="0.5";
    
}
document.addEventListener('DOMContentLoaded',myFunc);