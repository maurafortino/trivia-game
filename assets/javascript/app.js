var trivia = [
    {
        question: "How long had the avatar been gone before Sokka and Katara found Aang?",
        options: ["50 years", "1000 years", "250 years", "100 years"],
        className: "question-one"
    },
    {
        question: "What type of bender was the avatar before Aang?",
        options: ["air", "fire", "earth", "water"],
        className: "question-two"
    },
    {
        question: "What sub-skill does Katara learn in the third season?",
        options: ["blood-bending", "metal bending", "lighting generation", "spiritual projection"],
        className: "question-three"
    },
    {
        question: "What is Toph's fighting name in Earth Ruble VI?",
        options: ["kid wonder", "the runaway", "the blind bandit", "the great toph"],
        className: "question-four"
    },
    {

        question: "What happened to Sokka's first girlfriend",
        options: ["turned into the moon", "died in battle", "ran away", "they married"],
        className: "question-five"
    },
    {

        question: "What type of merchant is Team Avatar always running into?",
        options: ["squash", "cabbage", "watermelon", "cantelope"],
        className: "question-six"
    },
    {

        question: "What were the names of Aang's animal companions?",
        options: ["Miko and Maki", "Fluffy and Tiny", "Appa and Momo", "Simba and Nala"],
        className: "question-seven"
    },
    {
        question: "How old is Aang when he is frozen in ice?",
        options: ["9", "13", "18", "12"],
        className: "question-eight"
    }
]
var clock = 120;
var timer;
var gameAnswers = ["100 years", "12", "cabbage", "Appa and Momo", "turned into the moon", "the blind bandit", "blood-bending", "fire"];
var correctGuesses = [];
var wrongGuesses = [];
var startContainer = document.getElementById("start-container");
var gameContainer = $("#game-container");
var endContainer = $("#end-container");
// var currentTriviaIndex = 0;

function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }

    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
};

function subtract() {
    clock--
    var setTime = timeConverter(clock);
    $("#display").html(setTime)
    if(clock === 0){
        stopClock();
        submit();
    }
};

function stopClock() {
    clearInterval(timer);
    $("#display").html("00:00");

};

function enterGame() {
    clearInterval(timer);
    gameContainer.empty();
    wrongGuesses = [];
    correctGuesses = [];
    userGuesses = [];
    startContainer.style.display = "none";
    gameContainer.css("display", "block");
    endContainer.css("display", "none");

    for (var i = 0; i < trivia.length; i++) {
        var newDiv = $("<div>");
        var questionHeader = $("<h4>");
        isAnswerChosen = false;
        questionHeader.text(trivia[i].question);
        newDiv.append(questionHeader);
        for (var j = 0; j < trivia[i].options.length; j++) {
            var optionsPar = $("<p>");
            optionsPar.text(trivia[i].options[j]);
            optionsPar.addClass(trivia[i].className);
            optionsPar.attr("onclick", "addAnswer(this.textContent)");
            newDiv.addClass("trivia-div");
            newDiv.append(optionsPar);
            newDiv.css("margin-bottom", "10px");
        };
        gameContainer.append(newDiv);
    };
    var submitButton = $("<button>");
    submitButton.text("submit");
    submitButton.attr("onclick", "submit()");
    gameContainer.append(submitButton);
    
    clock = 120;
    timer = setInterval(subtract, 1000);

};

function addAnswer(parameter) {

    if (gameAnswers.includes(parameter)) {
        correctGuesses.push(parameter);
    } else {
        wrongGuesses.push(parameter);
    }

};

function submit() {
    stopClock();
    endContainer.empty();
    gameContainer.css("display", "none");
    endContainer.css("display", "block");
    var newDiv = $("<div>");
    newDiv.html("<p>Correct Guesses: " + correctGuesses.length + "</p>"
        + "<p> Wrong Guesses: " + wrongGuesses.length + "</p>");
    endContainer.append(newDiv);


    if (correctGuesses.length + wrongGuesses.length !== gameAnswers.length) {
        var guessesChosen = correctGuesses.length + wrongGuesses.length;
        var omittedAnswers = gameAnswers.length - guessesChosen;
        var ommitedDiv = $("<div>");
        ommitedDiv.text("Omitted Answers: " + omittedAnswers);
    }
    newDiv.append(ommitedDiv);

    if (correctGuesses.length > wrongGuesses.length) {
        $("#game-over-text").text("Welcome to Team Avatar! We're happy to have you!")
        var winButton = $("<button>").text("Play again?");
        winButton.attr("onclick", "enterGame()");
        newDiv.append(winButton)

    } else {
        $("#game-over-text").text("You're going to need a redemtion arc greater than Zuko's if you think you'll ever be on Team Avatar.")
        var loseButton = $("<button>").text("Redeem Yourself?");
        loseButton.attr("onclick", "enterGame()");
        newDiv.append(loseButton)
    }

};







