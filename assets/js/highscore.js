var highscore = document.getElementById('highscore');
var score = JSON.parse(localStorage.getItem('highscore'));

// Need name variable set up like score variable.  Add to highscore innerHTML before score
highscore.innerHTML = score;
score.append(highscore);

