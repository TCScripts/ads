canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var last_x, last_y, current_x, current_y;
var mouseEvent="empty";
colour= "black";
width= 5;
radius= 10;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
colour= document.getElementById("colour").value;
width= document.getElementById("width").value;
radius= document.getElementById("radius").value;
mouseEvent="mouseDown";


}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent= "mouseleave";

}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent= "mouseup";
    
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=colour;
        
        ctx.lineWidth=width;
        //ctx.moveTo(last_x, last_y);
        //ctx.lineTo(current_x, current_y);
        ctx.arc(current_x, current_y, radius, 0, 2*Math.PI);
        ctx.stroke();
        last_x=current_x;
        last_y=current_y;

    }

}