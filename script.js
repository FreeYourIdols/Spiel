function downloadImage(imageUrl) {
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = 'spike.png'; // Numele fișierului care va fi descărcat
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
function checkAnswers(minimumCorrect,nextpage) {
    const correctAnswers = document.getElementById('answers').value;
    const message = document.getElementById('message');
  

    if (correctAnswers >= minimumCorrect) {
        message.style.color = 'green';
        message.textContent = "Glückwunsch! Du bist zum nächsten Level gegangen.";
       
        saveScore(10);
        window.location.href = nextpage;
        
    } else {
        alert('Sie haben nicht alle Fragen richtig beantwortet. Versuchen Sie es erneut!');
        
    }
}
function saveScore(score) {
    let totalScore = sessionStorage.getItem('totalScore');
    if (!totalScore) {
        totalScore = 100;
    }
    totalScore = parseInt(totalScore) + score;
    sessionStorage.setItem('totalScore', totalScore);
    
}

function startTimer(display) {
    let timer = sessionStorage.getItem('timer') ? parseInt(sessionStorage.getItem('timer')) : 0; // Start from saved time or 0
    let minutes, seconds;

    const interval = setInterval(function () {
        // Increment the timer every second
        timer++;

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        // Save the elapsed time in sessionStorage
        sessionStorage.setItem('timer', timer);
    }, 1000);
}

window.onload = function () {
    let totalScore = sessionStorage.getItem('totalScore');
    if (!totalScore) {
        totalScore = 0;
    }
    document.getElementById('message').textContent = "Die Gesamtpunktzahl: " + totalScore;
    const timerDisplay = document.getElementById('timer');

    // Start the timer
    startTimer(timerDisplay);
};
function checkAnswer(isCorrect,nextpage) {
    const message = document.getElementById('message');
    if (isCorrect) {
        setTimeout(function() {
            message.textContent = "Richtig! Gut gemacht.";
            message.style.color = "green";
           
        }, 10000);
        
    
        saveScore(10);
        window.location.href = nextpage;
        
    } else {
        message.textContent = "Hoppla! Das war die falsche Antwort.";
        message.style.color = "red";
    }
}

