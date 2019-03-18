var some = document.querySelector(".minutes-pointer")
var some1 = document.querySelector(".hours-pointer")

console.log(some)
function time (){
    var now = new Date();
    var minutes = now.getSeconds();
    var minDeg = ((minutes/60)*360);
    some.style.transform = `rotate(${minDeg}deg)`;


    var minutes1 = now.getMinutes();
    var minDeg1 = ((minutes1/60)*360);
    some1.style.transform = `rotate(${minDeg1}deg)`
}
setInterval(time,1000);