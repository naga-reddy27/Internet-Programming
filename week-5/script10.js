var timer=0;
function myFunc(){

    document.addEventListener('keydown',clickFunc);

}
function moveLeft(){
    var element= document.getElementById("circle");
    var positionLeft=element.offsetLeft;
    element.style.left=positionLeft-1+'px';
}
function moveRight(){
    var element= document.getElementById("circle");
    var positionLeft=element.offsetLeft;
    element.style.left=positionLeft+1+'px';
}
function moveTop(){
    var element= document.getElementById("circle");
    var positionTop=element.offsetTop;
    element.style.top=positionTop-1+'px';
}
function moveBottom(){
    var element= document.getElementById("circle");
    var positionTop=element.offsetTop;
    element.style.top=positionTop+1+'px'
}
function clickFunc(event){
    console.log(event.keyCode);
    clearInterval(timer);

    if(event.keyCode==37){
        timer=setInterval(moveLeft,10);
        
    }
    else if(event.keyCode==39){
        timer=setInterval(moveRight,10);
        
    }
    else if(event.keyCode==38){
        timer=setInterval(moveTop,10);
        
    }
    else if(event.keyCode==40){
        timer=setInterval(moveBottom,10);
        
    }
    
}
document.addEventListener('DOMContentLoaded',myFunc);