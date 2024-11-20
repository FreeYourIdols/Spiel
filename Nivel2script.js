function checkAnswer2(correctAnswer,nextpage) {
    
    const userAnswer = document.getElementById('answer').value;
    if (userAnswer.toLowerCase() == correctAnswer.toLowerCase()) 
        {   
        saveScore(10);
  
        window.location.href = nextpage;
        } 
    else {
        alert('Falsche Antwort! Versuche es noch einmal!');
    }
}
function saveScore(score) {
    let totalScore = sessionStorage.getItem('totalScore');
    if (!totalScore) {
        totalScore = 100;
    }
    totalScore = parseInt(totalScore) + score;
    sessionStorage.setItem('totalScore', totalScore);
    document.getElementById('message').textContent = "Die Gesamtpunktzahl: " + totalScore;
    
}


