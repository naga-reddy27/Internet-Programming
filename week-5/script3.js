function myFunc(){
    var element= document.getElementById("circle");
    element.addEventListener('click',clickFunc);

}
function clickFunc(){
    var element= document.getElementById("circle");
    element.style.opacity="1";
    
}
document.addEventListener('DOMContentLoaded',myFunc);