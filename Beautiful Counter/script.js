var number = document.querySelector('.number');
var decreaseButton = document.querySelector('.decrease');
var resetButton = document.querySelector('.reset');
var increaseButton = document.querySelector('.increase');
var zeroed = 0;
//var buttons = document.querySelector('.some')
var buttn = document.querySelectorAll('.buttn')

increaseButton.addEventListener('click', function(){
    zeroed++;
    number.textContent = zeroed;
    checkIfNegative()
})
decreaseButton.addEventListener('click', function(){
    zeroed--;
    number.textContent = zeroed;
    checkIfNegative()
})
resetButton.addEventListener('click', function(){
    zeroed = 0;
    number.textContent = zeroed;
    number.style.color = 'black';
    checkIfNegative();
})
//This is not working because it adds also the event listener to the div container - check the way out
// buttons.addEventListener('mouseover', function(e){
// e.target.classList.add('hover_over')
// })
// buttons.addEventListener('mouseout', function(e){
//     e.target.classList.remove('hover_over')
// })
for (let i = 0; i < buttn.length; i++) {
    buttn[i].addEventListener('mouseover', function(){
        buttn[i].classList.add('hover_over')
    })
    buttn[i].addEventListener('mouseout', function(){
        buttn[i].classList.remove('hover_over')
    })
}
function checkIfNegative(){
    if (Math.sign(zeroed) === 1) {
        number.style.color = 'green';
    } else if (Math.sign(zeroed) === -1) {
        number.style.color = 'red';
    } else if (Math.sign(zeroed) === -0 || Math.sign(zeroed) === 0) {
      number.style.color = 'black';  
    } 
}




