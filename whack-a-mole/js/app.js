const fly = document.querySelectorAll('.housefly');
console.log(fly)

// adding function to lottery the housefly

const pickBox = () => {
    let hf = Math.floor(Math.random()*24);
    fly[hf].classList.add('active');
    fly[hf].addEventListener('click', ()=>{
        fly[hf].style.backgroundImage = `url('../images/punchy.png')`
       let more = setInterval(()=>{
            fly[hf].style.backgroundImage = `none`
            console.log(1)
        },1000)
clearInterval(more)
    })
}

pickBox()

// adding function to active click event

// const punch = () => {
//     let some = pickBox;
//     console.log(some)
// }
// punch()
