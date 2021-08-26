var highscore = document.getElementById('highscore');
var allHighscores = document.getElementById('allHighscores');
var score = JSON.parse(localStorage.getItem('highscores'));
var newHighschore = document.createElement('div');

score.forEach(element => {
    let name = document.createElement('span')
    let score = document.createElement('span')
    name.textContent = element.name + ":  ";
    score.textContent = element.score;
    newHighschore.append(name, score);
    newHighschore.classList.add('col');
    let br = document.createElement('br');
    newHighschore.append(br);
});
allHighscores.append(newHighschore);
// Need name variable set up like score variable.  Add to highscore innerHTML before score
