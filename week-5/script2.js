function myFunc(){
    var element= document.getElementById("circle");
    element.addEventListener('click',clickFunc);

}
function clickFunc(){
    var element= document.getElementById("circle");
    element.style.backgroundColor='blue';
    
}
document.addEventListener('DOMContentLoaded',myFunc);