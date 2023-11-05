
const min = 1;
const max = 200;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
let enteredNumber;
let answer;
let numberInput = document.getElementById("numberInput");
let clickCount = 0; 
let clickCounterElement = document.getElementById("clickCounter");  
let counterButton = document.getElementById("sendButton"); 

function reloadPage() {
    setTimeout(function() {
        location.reload();
    }, 15000);
}

counterButton.addEventListener("click", function() {
    clickCount++;
    clickCounterElement.textContent = clickCount; 
});

sendButton.addEventListener("click", function(guessNumber) {
    enteredNumber = parseInt(numberInput.value);
        console.log(enteredNumber);
guessNumber();

function guessNumber(){
    if (enteredNumber === randomNum) {
        answer = "Вы вгадали число! Сторінка буде автоматично перезавантажена через 15 секунд!";
            reloadPage();
    } else if (enteredNumber > randomNum) {
        answer = "Число меньше вказаного!";
    } else if (enteredNumber < randomNum) {
        answer = "Число більше вказаного!";
    } else if (isNaN(enteredNumber)) {
        answer = "Для початку роботи потрібно ввести число";
    }
    console.log(answer);
    document.getElementById("text").innerHTML = answer;
}})



