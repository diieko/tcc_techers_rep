    timeLeft = 5;

function countdown() {
    
    document.getElementById("seconds").innerHTML = String( timeLeft );
    if (timeLeft > 0) {
        setTimeout(countdown, 1000);
    }timeLeft--;
};