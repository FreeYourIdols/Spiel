
function saveScore(score) {
    let totalScore = sessionStorage.getItem('totalScore');
    if (!totalScore) {
        totalScore = 100;
    }
    totalScore = parseInt(totalScore) + score -1;
    sessionStorage.setItem('totalScore', totalScore);
    document.getElementById('message').textContent = "Die Gesamtpunktzahl: " + totalScore;
    
}


