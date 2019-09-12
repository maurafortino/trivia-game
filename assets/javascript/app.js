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
var currentTriviaIndex = 0;

function addQuestion() {
    var questionDiv = $("<div>")
    questionDiv.addClass("question")
    questionDiv.text(trivia[currentTriviaIndex].question);
    gameContainer.html(questionDiv);
}

function addOptions() {
    for (var j = 0; j < trivia[currentTriviaIndex].options.length; j++) {
        var optionsPar = $("<p>");
        optionsPar.text(trivia[currentTriviaIndex].options[j]);
        // optionsPar.val(trivia[currentTriviaIndex].options[j]);
        optionsPar.attr("data-answer", trivia[currentTriviaIndex].options[j]);
        optionsPar.addClass("trivia");
        gameContainer.append(optionsPar);
    };
};

function nextQuestion() {
    clearInterval(timer);
    clock = 10;
    timer = setInterval(subtract, 1000);

    var isGameOver = trivia.length - 1;
    if (isGameOver === currentTriviaIndex) {
        submit();
    } else {
        currentTriviaIndex++;
        addQuestion();
        addOptions();
    }
};

function timesUp(){
    clearInterval(timer);
};

function subtract() {
    clock--;
    $("#display").html(clock)
    if (clock === 0) {
        timesUp();
        nextQuestion();
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
    currentTriviaIndex = 0;
    startContainer.style.display = "none";
    gameContainer.css("display", "block");
    endContainer.css("display", "none");
    addQuestion();
    addOptions();

    clock = 10;
    timer = setInterval(subtract, 1000);

};


$(document).on("click", ".trivia", function () {
    var userAnswer = $(this).attr("data-answer");
    if (gameAnswers.includes(userAnswer)) {
        correctGuesses.push(userAnswer);
    } else {
        wrongGuesses.push(userAnswer)
    }
    nextQuestion();
});


function submit() {
    stopClock();
    endContainer.empty();
    gameContainer.css("display", "none");
    endContainer.css("display", "block");
    var newDiv = $("<div>");
    newDiv.addClass("scores")
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
        winButton.addClass("end-game-button")
        winButton.attr("onclick", "enterGame()");
        newDiv.append(winButton)

    } else {
        $("#game-over-text").text("You're going to need a redemtion arc greater than Zuko's if you think you'll ever be on Team Avatar.")
        var loseButton = $("<button>").text("Redeem Yourself?");
        loseButton.addClass("end-game-button");
        loseButton.attr("onclick", "enterGame()");
        newDiv.append(loseButton)
    }

};







