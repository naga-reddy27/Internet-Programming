function myFunc(){
    var element= document.getElementById("circle");
    element.addEventListener('click',clickFunc);

}
function clickFunc(){
    alert("The button was pressed");
}
document.addEventListener('DOMContentLoaded',myFunc);