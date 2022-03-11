function myFunc(){
    var element= document.getElementById("circle");
    element.style.opacity=1;
    element.addEventListener('click',clickFunc);

}
function myInterval(){
    console.log("myInterval is called");
    var element= document.getElementById("circle");
    var circleOpacity=parseFloat(element.style.opacity);
    element.style.opacity=circleOpacity-0.01;
}
function clickFunc(){
    setInterval(myInterval,10);
    
    
}

document.addEventListener('DOMContentLoaded',myFunc);