var highscore = document.getElementById('highscore');
var allHighscores = document.getElementById('allHighscores');
var score = JSON.parse(localStorage.getItem('highscores'));
var newHighschore = document.createElement('div');

score.forEach(element => {
    let name = document.createElement('span')
    let score = document.createElement('span')
    name.textContent = element.name + ":  ";
    score.textContent = element.score;
    newHighschore.append(name);
    newHighschore.append(score);
    newHighschore.classList.add('col');
    let div = document.createElement('div');
    div.classList.add('row');
    newHighschore.append(div);
});
allHighscores.append(newHighschore);
// Need name variable set up like score variable.  Add to highscore innerHTML before score
