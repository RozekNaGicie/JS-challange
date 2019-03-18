document.addEventListener('DOMContentLoaded', function(){
    console.log('sukces')

var wraith = document.getElementById('wraith-icon');
var bangalore = document.getElementById('bangalore-icon');
var lifeline = document.getElementById('lifeline-icon');
var pathfinder = document.getElementById('pathfinder-icon');
var mirage = document.getElementById('mirage-icon');
var gibraltar = document.getElementById('gibraltar-icon');
var caustic = document.getElementById('caustic-icon');
var bloodhound = document.getElementById('bloodhound-icon');



var audioWraith1 = new Audio('music/wraith/wraith1.mp3');
var audioWraith2 = new Audio('music/wraith/wraith2.mp3');
var audioWraith3 = new Audio('music/wraith/wraith3.mp3');

var audioBangalore1 = new Audio('music/bangalore/bang1.mp3');
var audioBangalore2 = new Audio('music/bangalore/bang2.mp3');
var audioBangalore3 = new Audio('music/bangalore/bang3.mp3');

var audioBloodhound1 = new Audio('music/bloodhound/blood1.mp3');
var audioBloodhound2 = new Audio('music/bloodhound/blood2.mp3');
var audioBloodhound3 = new Audio('music/bloodhound/blood3.mp3');
var audioBloodhound4 = new Audio('music/bloodhound/blood4.mp3');
var audioBloodhound5 = new Audio('music/bloodhound/blood5.mp3');


var audioMirage1 = new Audio('music/mirage/mirage1.mp3');
var audioMirage2 = new Audio('music/mirage/mirage2.mp3');
var audioMirage3 = new Audio('music/mirage/mirage3.mp3');
var audioMirage4 = new Audio('music/mirage/mirage4.mp3');
var audioMirage5 = new Audio('music/mirage/mirage5.mp3');


var arrayOfVars = [audioWraith1, audioWraith2, audioWraith3, audioBangalore1, audioBangalore2, audioBangalore3, audioBloodhound1, audioBloodhound2, audioBloodhound3, audioBloodhound4, audioBloodhound5, audioMirage1, audioMirage2, audioMirage3, audioMirage4, audioMirage5];


var drumButtons = [wraith,
    bangalore,
    lifeline,
    pathfinder,
    mirage,
    gibraltar,
    caustic,
    bloodhound]

console.log(arrayOfVars);
console.log(drumButtons);


//wraith

wraith.addEventListener('click', function(){
    // audioToneE.play();
    var lottery = Math.floor(Math.random() * 3) + 1
    for(i = 0; i<arrayOfVars.length; i++){
        arrayOfVars[i].pause();
        arrayOfVars[i].currentTime = 0;
    }
    if(lottery == 1){
        audioWraith1.play();
    } else if(lottery == 2){
        audioWraith2.play();
    } else if(lottery == 3){
        audioWraith3.play();
    }

    
});

//bangalore

bangalore.addEventListener('click', function(){
    // audioToneE.play();
    var lottery = Math.floor(Math.random() * 3) + 1
    console.log(lottery)
    for(i = 0; i<arrayOfVars.length; i++){
        arrayOfVars[i].pause();
        arrayOfVars[i].currentTime = 0;
    }
    if(lottery == 1){
        audioBangalore1.play();
    } else if(lottery == 2){
        audioBangalore2.play();
    } else if(lottery == 3){
        audioBangalore3.play();
    }
    
});

// bloodhound

bloodhound.addEventListener('click', function(){
    // audioToneE.play();
    var lottery = Math.floor(Math.random() * 5) + 1
    // console.log(lottery)
    for(i = 0; i<arrayOfVars.length; i++){
        arrayOfVars[i].pause();
        arrayOfVars[i].currentTime = 0;
        // arrayOfVars[i].src = '';

    }
    if(lottery == 1){
        audioBloodhound1.play();
    } else if(lottery == 2){
        audioBloodhound2.play();
    } else if(lottery == 3){
        audioBloodhound3.play();
    } else if(lottery == 4){
        audioBloodhound4.play();
    } else if(lottery == 5){
        audioBloodhound5.play();
    }
});

// mirage

mirage.addEventListener('click', function(){
    // audioToneE.play();
    var lottery = Math.floor(Math.random() * 5) + 1
    // console.log(lottery)
    for(i = 0; i<arrayOfVars.length; i++){
        arrayOfVars[i].pause();
        arrayOfVars[i].currentTime = 0;
    }
    if(lottery == 1){
        audioMirage1.play();
    } else if(lottery == 2){
        audioMirage2.play();
    } else if(lottery == 3){
        audioMirage3.play();
    } else if(lottery == 4){
        audioMirage4.play();
    } else if(lottery == 5){
        audioMirage5.play();
    }
})

// dodanie okna modalnego
var modalWindow = document.querySelector('.modal-section');
console.log(modalWindow)
// var drumButtons = document.querySelectorAll('.drum-button');
var bodyBackground = document.querySelector('body');
console.log(bodyBackground)
// console.log(drumButtons)
for(i = 0; i<drumButtons.length; i++){
    drumButtons[i].addEventListener('click', function (){
        modalWindow.style.display = "block";
        console.log(this)
        var character = this.cloneNode(true);
        modalWindow.appendChild(character)
        character.classList.add('modal-window')
        var aboutLegend = document.createElement("div")
        aboutLegend.classList.add('about-legend')
        modalWindow.appendChild(aboutLegend);
        character.style.transform = "scale(1.1)"
        // console.log(i)
        
    });
    
}
window.addEventListener('click', function(e){
    if(e.target==modalWindow){
        modalWindow.style.display = "none"
        var temporeryChild = modalWindow.querySelector('.drum-button')
        var temporeryAbout = modalWindow.querySelector('.about-legend')
        modalWindow.removeChild(temporeryChild)
        modalWindow.removeChild(temporeryAbout)

    }
});
  



});