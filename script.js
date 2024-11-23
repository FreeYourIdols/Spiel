function downloadImage(imageUrl) {
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = 'spike.png'; // Name der Datei
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
function KlamixButton()
{
    Klamix(-9);
    showImage();
 
 
f
}
function Klamix(score)
    {   
        saveScore(score);
    }
function checkAnswers(minimumCorrect,nextpage) {
    const correctAnswers = document.getElementById('answers').value;
    const message = document.getElementById('message');
  

    if (correctAnswers >= minimumCorrect) {
        message.style.color = 'green';
        message.textContent = "Glückwunsch! Du bist im nächsten Level.";
       
        saveScore(1);
        window.location.href = nextpage;
        
    } else {
        alert('Du hast nicht alle Fragen richtig beantwortet. Versuche es noch einmal!');
        
    }
}
function saveScore(score) {
    let totalScore = sessionStorage.getItem('totalScore');
    if (!totalScore) {
        totalScore = 100;
    }
    totalScore = parseInt(totalScore) + (score - 1);
    sessionStorage.setItem('totalScore', totalScore);
    document.getElementById('message').textContent = "Die Gesamtpunktzahl: " + totalScore;
    
}

function startTimer(display) {
    let timer = sessionStorage.getItem('timer') ? parseInt(sessionStorage.getItem('timer')) : 0; // Start from saved time or 0
    let minutes, seconds;

    interval=setInterval(function () {
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
        totalScore = 100;
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
        
    
        saveScore(1);
        window.location.href = nextpage;
        
    } else {
        message.textContent = "Hoppla! Das war die falsche Antwort.";
        message.style.color = "red";
    }
}
function stopTimer() {
    clearInterval(interval); // Oprește intervalul
    alert("Die Zeit ist stehen geblieben");
}
function showImage() {
    // Obține elementul imagine
    var img = document.getElementById("newImage");
    // Schimbă stilul pentru a-l face vizibil
    img.style.display = "block"; // Schimbă display-ul la "block" pentru a-l face vizibil
}
function checkAnswer2(correctAnswer,nextpage) {
    
    const userAnswer = document.getElementById('answer').value;
    if (userAnswer.toLowerCase() == correctAnswer.toLowerCase()) 
        {   
        saveScore(1);
  
        window.location.href = nextpage;
        } 
    else {
        alert('Falsche Antwort! Versuche es noch einmal!');
    }
}

  