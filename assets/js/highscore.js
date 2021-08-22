var highscore = document.getElementById('highscore');
var allHighscores = document.getElementById('allHighscores');
var score = JSON.parse(localStorage.getItem('highscore'));

// Need name variable set up like score variable.  Add to highscore innerHTML before score
highscore.innerHTML = score;
