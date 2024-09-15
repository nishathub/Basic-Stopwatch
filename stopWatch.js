const countNumber = document.getElementById('count-number');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

let intervalId;
startButton.addEventListener('click',function(){
    console.log('clicked');
    let countValue = parseInt(countNumber.innerText);
    console.log(countValue);
    intervalId = setInterval(()=> {
        countNumber.innerText = countValue + 1;
        countValue++;
    }, 1000)
})

stopButton.addEventListener('click',function(){
    clearInterval(intervalId);
    
})

resetButton.addEventListener('click', function(){
    clearInterval(intervalId);
    countNumber.innerText = 0;
})