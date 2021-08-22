var highscore ='';
var timer = '';
var answers = [];
var buttons = [];
var buttonContainer = document.getElementById('buttons');
var codingContainer = document.getElementById('coding-Container');
var sentenceContainer = document.getElementById('sentences');

function GFG_Fun() {
    // Create anchor element.
    var a = document.createElement('a'); 

    // Create the text node for anchor element.
    var link = document.createTextNode("This is link");
      
    // Append the text node to anchor element.
    a.appendChild(link); 
      
    // Set the title.
    a.title = "This is Link"; 
      
    // Set the href property.
    a.href = " ";
}

// Link to highscore page
function link() {
    window.location='https://sirmaaalik.github.io/Coding-Quiz/highscores.html';
}

// Hide a function
function dontShow(id) {
    $(id).hide();
}

// Show a function
function doShow(id) {
    $(id).show();
}

// Time left Function
function countdown() {
    var timeLeft = 10;
    var timer = document.getElementById('timer');
    var timeInterval = setInterval( function () {
        if(timeLeft >= 1) {
            timer.innerText = 'Time: ' + timeLeft;
            timeLeft--;
            JSON.stringify(localStorage.setItem('highscore', timeLeft))

        } else {
            timer.innerText = 'Time: ' + timeLeft;
            clearInterval(timeInterval);
            JSON.stringify(localStorage.setItem('highscore', timeLeft));
            link();
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
    // question1();
    userHighscore();
});

// Functions for questions duplicated
function question1() {
    var question = document.createElement('p');
    $(question).attr('id', "first-question");
    $(question).text('What is the difference between single and double quotes??');
    $(sentenceContainer).append(question);


    answers[0] = document.createElement('button');
    $(answers[0]).attr('id', "first-answer");   
    answers[0].innerHTML = "Bye";
    $(answers[0]).on('click', function () {
        dontShow(question); dontShow(buttons[0]); doShow(question2()); console.log("right");
    });

    answers[1] = document.createElement('button');
    $(answers[1]).attr('id', "second-answer");
    answers[1].innerHTML = "Zoom";
    $(answers[1]).on('click', function () {
        dontShow(question); dontShow(buttons[0]); doShow(question2()); console.log("wrong");
    });
    
    answers[2] = document.createElement('button');
    $(answers[2]).attr('id', "third-answer");
    answers[2].innerHTML = "Boom";
    $(answers[2]).on('click', function () {
        dontShow(question); dontShow(buttons[0]); doShow(question2()); console.log("wrong");
    });
    
    answers[3] = document.createElement('button');
    $(answers[3]).attr('id', "fourth-answer");
    answers[3].innerHTML = "Hi";
    $(answers[3]).on('click', function () {
        dontShow(question); dontShow(buttons[0]); doShow(question2()); console.log("wrong");
    });

    buttons[0] = document.createElement('button');
    $(buttons[0]).attr('id', "first-set");
    $(buttons[0]).append(answers);
    $(buttonContainer).append(buttons[0]);   
}

function question2() {
    var question = document.createElement('p');
    $(question).attr('id', "first-question");
    $(question).text('Is html interactive as much as Javascript??');
    $(sentenceContainer).append(question);


    answers[0] = document.createElement('button');
    $(answers[0]).attr('id', "first-answer");   
    answers[0].innerHTML = "Jeremy";

    answers[1] = document.createElement('button');
    $(answers[1]).attr('id', "second-answer");
    answers[1].innerHTML = "Abby";
    
    answers[2] = document.createElement('button');
    $(answers[2]).attr('id', "third-answer");
    answers[2].innerHTML = "Diana";
    
    answers[3] = document.createElement('button');
    $(answers[3]).attr('id', "fourth-answer");
    answers[3].innerHTML = "Catherine";

    buttons[1] = document.createElement('button');
    $(buttons[1]).attr('id', "second-set");
    $(buttons[1]).append(answers);
    $(buttonContainer).append(buttons[1]);

    $(answers[0]).on('click', function () {
        //Hiding button and introduction statement
        dontShow(question);
        dontShow(buttons[1]); 
    });
}

function question3() {
    var question = document.createElement('p');
    $(question).attr('id', "first-question");
    $(question).text('Is html interactive as much as Javascript??');
    $(sentenceContainer).append(question);


    answers[0] = document.createElement('button');
    answers[0].innerHTML = "Hi";
    $(answers[0]).attr('id', "first-answer");   

    answers[1] = document.createElement('button');
    $(answers[1]).attr('id', "second-answer");
    answers[1].innerHTML = "Hi";
    
    answers[2] = document.createElement('button');
    $(answers[2]).attr('id', "third-answer");
    answers[2].innerHTML = "Hi";
    
    answers[3] = document.createElement('button');
    $(answers[3]).attr('id', "fourth-answer");
    answers[3].innerHTML = "Hi";

    buttons[2] = document.createElement('button');
    $(buttons[2]).attr('id', "second-set");
    $(buttons[2]).append(answers);
    $(buttonContainer).append(buttons[2]);

    $(answers[0]).on('click', function () {
        //Hiding button and introduction statement
        dontShow(question);
        dontShow(buttons[2]);
    });
}

function question4() {
    var question = document.createElement('p');
    $(question).attr('id', "first-question");
    $(question).text('Is html interactive as much as Javascript??');
    $(sentenceContainer).append(question);


    answers[0] = document.createElement('button');
    answers[0].innerHTML = "Hi";
    $(answers[0]).attr('id', "first-answer");   

    answers[1] = document.createElement('button');
    $(answers[1]).attr('id', "second-answer");
    answers[1].innerHTML = "Hi";
    
    answers[2] = document.createElement('button');
    $(answers[2]).attr('id', "third-answer");
    answers[2].innerHTML = "Hi";
    
    answers[3] = document.createElement('button');
    $(answers[3]).attr('id', "fourth-answer");
    answers[3].innerHTML = "Hi";

    buttons[2] = document.createElement('button');
    $(buttons[2]).attr('id', "second-set");
    $(buttons[2]).append(answers);
    $(buttonContainer).append(buttons[2]);

    $(answers[0]).on('click', function () {
        //Hiding button and introduction statement
        dontShow(question);
        dontShow(buttons[2]);
    });
}

function question5() {
    var question = document.createElement('p');
    $(question).attr('id', "first-question");
    $(question).text('Is html interactive as much as Javascript??');
    $(sentenceContainer).append(question);


    answers[0] = document.createElement('button');
    answers[0].innerHTML = "Hi";
    $(answers[0]).attr('id', "first-answer");   

    answers[1] = document.createElement('button');
    $(answers[1]).attr('id', "second-answer");
    answers[1].innerHTML = "Hi";
    
    answers[2] = document.createElement('button');
    $(answers[2]).attr('id', "third-answer");
    answers[2].innerHTML = "Hi";
    
    answers[3] = document.createElement('button');
    $(answers[3]).attr('id', "fourth-answer");
    answers[3].innerHTML = "Hi";

    buttons[2] = document.createElement('button');
    $(buttons[2]).attr('id', "second-set");
    $(buttons[2]).append(answers);
    $(buttonContainer).append(buttons[2]);

    $(answers[0]).on('click', function () {
        //Hiding button and introduction statement
        dontShow(question);
        dontShow(buttons[2]);
    });
}

// Input to set highscore
function userHighscore () {
    var instructions = document.createElement('p');
    $(instructions).text('Please input name for highscore.');
    sentenceContainer.append(instructions);
    var input = document.createElement('input');
    input.type = "text";
    input.placeholder = "Name";
    input.name = "user";
    input.id = "userInput";
    // while (!userInput = "") {
    //     alert("You need to type a name.  No numbers or special characters.");
    // }
    buttonContainer.append(input);
}
