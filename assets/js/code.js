var highscore ='';
var timer = '';
var answers = [];
var buttons = [];
var buttonContainer = document.getElementById('buttons');
var codingContainer = document.getElementById('coding-Container');
var sentenceContainer = document.getElementById('sentences');
// window.location='https://sirmaaalik.github.io/Coding-Quiz/highscores.html';

// Hide a function
function dontShow(id) {
    $(id).hide();
}

// Show a function
function doShow(id) {
    $(id).show();
}

// Time left Function
var timeLeft = 305;
function countdown() {
    var timer = document.getElementById('timer');
    var timeInterval = setInterval( function () {
        // if (timeLeft < 0) {
        //     timeLeft = 0;
        // }
        if(timeLeft >= 1) {
            timer.innerText = 'Time: ' + timeLeft;
            timeLeft--;
            JSON.stringify(localStorage.setItem('highscore', timeLeft))

        } else {
            clearInterval(timeInterval);
            JSON.stringify(localStorage.setItem('highscore', timeLeft));
            dontShow(buttons); dontShow('#question'); userHighscore();
        }
        timer.innerText = 'Time: ' + timeLeft;
        let submit = document.querySelector('#submit');
        if(document.querySelector('#buttons').contains(submit) == true) {
            clearInterval(timeInterval);
            console.log(document.querySelector('#buttons').contains(submit) == true)
        }
    },1000)
}

// Start function and variables
var statement = document.getElementById('intro-Statement');
var startButton = document.getElementById('start-Button');
$(startButton).on('click', function () {
    //Hiding button and introduction statement
    countdown(); dontShow(startButton); dontShow(statement);

    //First Question and buttons
    question1();
});

// Functions for questions duplicated from 1-5
let question = document.createElement('p');
$(question).attr('id', "question");
function question1() {
    $(question).text('What is the difference between single and double quotes??');
    $(sentenceContainer).append(question);

    answers[0] = document.createElement('button');
    $(answers[0]).addClass('row');
    answers[0].innerHTML = "Nothing";
    $(answers[0]).on('click', function () {
        timeLeft = timeLeft -5; dontShow(buttons[0]); doShow(question2());
    });

    answers[1] = document.createElement('button');
    $(answers[1]).addClass('row');
    answers[1].innerHTML = "Single is for JSON";
    $(answers[1]).on('click', function () {
        timeLeft = timeLeft -5; dontShow(buttons[0]); doShow(question2());
    });
    
    answers[2] = document.createElement('button');
    $(answers[2]).addClass('row');
    answers[2].innerHTML = "Double is for Js";
    $(answers[2]).on('click', function () {
        timeLeft = timeLeft -5; dontShow(buttons[0]); doShow(question2());
    });
    
    answers[3] = document.createElement('button');
    $(answers[3]).addClass('row');
    answers[3].innerHTML = "Double is for JSON";
    $(answers[3]).on('click', function () {
        dontShow(buttons[0]); doShow(question2());
    });

    buttons[0] = document.createElement('div');
    $(buttons[0]).attr('id', "set");
    $(buttons[0]).append(answers);
    $(buttonContainer).append(buttons[0]);   
}

function question2() {
    $(question).text('What way can you change the style in css of a property?');
    $(sentenceContainer).append(question);

    answers[0] = document.createElement('button');
    $(answers[0]).addClass('row');
    answers[0].innerHTML = "ID";
    $(answers[0]).on('click', function () {
        timeLeft = timeLeft -5; dontShow(buttons[0]); doShow(question3());
    });

    answers[1] = document.createElement('button');
    $(answers[1]).addClass('row');
    answers[1].innerHTML = "Class";
    $(answers[1]).on('click', function () {
        timeLeft = timeLeft -5; dontShow(buttons[0]); doShow(question3());
    });
    
    answers[2] = document.createElement('button');
    $(answers[2]).addClass('row');
    answers[2].innerHTML = "Property";
    $(answers[2]).on('click', function () {
        timeLeft = timeLeft -5; dontShow(buttons[0]); doShow(question3());
    });
    
    answers[3] = document.createElement('button');
    $(answers[3]).addClass('row');
    answers[3].innerHTML = "All of the above";
    $(answers[3]).on('click', function () {
        dontShow(buttons[0]); doShow(question3());
    });

    buttons[0] = document.createElement('div');
    $(buttons[0]).attr('id', "set");
    $(buttons[0]).append(answers);
    $(buttonContainer).append(buttons[0]);   
}

function question3() {
    $(question).text('What is the best way to adjust the page to the size of the device the user is using?');
    $(sentenceContainer).append(question);

    answers[0] = document.createElement('button');
    $(answers[0]).addClass('row');
    answers[0].innerHTML = "Psuedo classes";
    $(answers[0]).on('click', function () {
        timeLeft = timeLeft -5; dontShow(buttons[0]); doShow(question4());
    });

    answers[1] = document.createElement('button');
    $(answers[1]).addClass('row');
    answers[1].innerHTML = "Media queries";
    $(answers[1]).on('click', function () {
        dontShow(buttons[0]); doShow(question4());
    });
    
    answers[2] = document.createElement('button');
    $(answers[2]).addClass('row');
    answers[2].innerHTML = "JS";
    $(answers[2]).on('click', function () {
        timeLeft = timeLeft -5; dontShow(buttons[0]); doShow(question4());
    });
    
    answers[3] = document.createElement('button');
    $(answers[3]).addClass('row');
    answers[3].innerHTML = "JSON";
    $(answers[3]).on('click', function () {
        timeLeft = timeLeft -5; dontShow(buttons[0]); doShow(question4());
    });

    buttons[0] = document.createElement('div');
    $(buttons[0]).attr('id', "set");
    $(buttons[0]).append(answers);
    $(buttonContainer).append(buttons[0]);   
}

function question4() {
    $(question).text('How can you link to another page in your code?');
    $(sentenceContainer).append(question);

    answers[0] = document.createElement('button');
    $(answers[0]).addClass('row');
    answers[0].innerHTML = "HTML nav";
    $(answers[0]).on('click', function () {
        timeLeft = timeLeft -5; dontShow(buttons[0]); doShow(question5());
    });

    answers[1] = document.createElement('button');
    $(answers[1]).addClass('row');
    answers[1].innerHTML = "JS window.location";
    $(answers[1]).on('click', function () {
        timeLeft = timeLeft -5; dontShow(buttons[0]); doShow(question5());
    });
    
    answers[2] = document.createElement('button');
    $(answers[2]).addClass('row');
    answers[2].innerHTML = "A & B";
    $(answers[2]).on('click', function () {
        dontShow(buttons[0]); doShow(question5());
    });
    
    answers[3] = document.createElement('button');
    $(answers[3]).addClass('row');
    answers[3].innerHTML = "CSS styling";
    $(answers[3]).on('click', function () {
        timeLeft = timeLeft -5; dontShow(buttons[0]); doShow(question5());
    });

    buttons[0] = document.createElement('div');
    $(buttons[0]).attr('id', "set");
    $(buttons[0]).append(answers);
    $(buttonContainer).append(buttons[0]);   
}

function question5() {
    $(question).text('Why do you code inside the body of the html?');
    $(sentenceContainer).append(question);

    answers[0] = document.createElement('button');
    $(answers[0]).addClass('row');
    answers[0].innerHTML = "Nothing will show otherwise";
    $(answers[0]).on('click', function () {
        dontShow(buttons[0]); userHighscore();
    });

    answers[1] = document.createElement('button');
    $(answers[1]).addClass('row');
    answers[1].innerHTML = "CSS styling shows";
    $(answers[1]).on('click', function () {
        timeLeft = timeLeft -5; dontShow(buttons[0]); userHighscore();
    });
    
    answers[2] = document.createElement('button');
    $(answers[2]).addClass('row');
    answers[2].innerHTML = "You see JS interactions";
    $(answers[2]).on('click', function () {
        timeLeft = timeLeft -5; dontShow(buttons[0]); userHighscore();
    });
    
    answers[3] = document.createElement('button');
    $(answers[3]).addClass('row');
    answers[3].innerHTML = "You can only link other pages in the body";
    $(answers[3]).on('click', function () {
        timeLeft = timeLeft -5; dontShow(buttons[0]); userHighscore();
    });

    buttons[0] = document.createElement('div');
    $(buttons[0]).attr('id', "set");
    $(buttons[0]).append(answers);
    $(buttonContainer).append(buttons[0]);   
}

// Input to set highscore
function userHighscore () {
    dontShow('#question');
    var instructions = document.createElement('p');
    $(instructions).text('Please input name for highscore.');
    sentenceContainer.append(instructions);
    var input = document.createElement('input');
    input.type = "text";
    input.placeholder = "Name";
    input.name = "user";
    input.id = "userInput";
    let button = document.createElement('button');
    $(button).attr('id', "submit");
    button.innerHTML = "submit";
    buttonContainer.append(input);
    buttonContainer.append(button);
    console.log(button);

    $(button).on('click', function () {
        let highscores = JSON.parse(localStorage.getItem('highscores')) || [];
        let name = {
            name: document.querySelector('#userInput').value,
            score: localStorage.getItem('highscore')
        }
        highscores.push(name);
        localStorage.setItem('highscores', JSON.stringify(highscores));
        console.log(highscores);
        window.location.replace("./highscores.html");
    }) 
}
