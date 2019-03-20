var canvas = document.querySelector('#canvi');
console.log(canvas)
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var ctx = canvas.getContext('2d');
ctx.strokeStyle = "#BADA55";
ctx.lineJoint = 'round';
ctx.lineCap = 'round';
var isPainting = false;
var x = 0;
var y = 0;
hue = 0;
console.log(x,y)



function draw (e){
    if(!isPainting){
        return
    }else {
        if(clearingOn == true){
            ctx.strokeStyle = "#ffff"
        } else if(clearingOn == false){
            ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
        }
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(e.offsetX,e.offsetY)
        ctx.stroke()
        ctx.lineWidth = 50;
        x = e.offsetX;
        y = e.offsetY;
        hue++;
        

    }
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', function(e){
    x = e.offsetX;
    y = e.offsetY;
    isPainting = true;
});
canvas.addEventListener('mouseup', function(){
    isPainting = false;
});
canvas.addEventListener('mouseout', function(){
    isPainting = false;
});

// CLEAR FUNC

var clear = document.querySelector('.clear');
var clearingOn = false;

clear.addEventListener('click', function(){
    if(clearingOn == false){
        clearingOn = true 
    } else {
        clearingOn = false
    }
console.log(clearingOn)

});
