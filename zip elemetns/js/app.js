var inputs = document.querySelectorAll('input') 
var image = document.querySelector('.background-image')
var color = document.querySelector('.background-color')
console.log(inputs)
function setThis(){
    console.log(this.value);
}
for(i = 0; i<inputs.length; i++){
    inputs[i].addEventListener('change', function(){
        console.log(this.value);
        if(this.name == 'blur'){
            console.log(this.name)
            image.style.filter = `blur(${this.value}px)`
        }else if(this.name == 'colors'){
            console.group(this.name)
            color.style.background = `${this.value}`
        }else if(this.name == 'range'){
            console.group(this.name)
            color.style.padding = `${this.value}` + "px"
        }
    });
}



