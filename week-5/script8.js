function myFunc(){

    document.addEventListener('keydown',clickFunc);

}
function clickFunc(event){
    console.log(event.keyCode);
    if(event.keyCode==37){
        var element= document.getElementById("circle");
        var positionLeft=element.offsetLeft;
        element.style.left=positionLeft-10+'px';
    }
    
}
document.addEventListener('DOMContentLoaded',myFunc);