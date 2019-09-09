var trivia = [
    {
        question: "How long had the avatar been gone before Sokka and Katara found Aang?",
        options: ["50 years", "1000 years", "250 years", "100 years"],
    },
    {
        question: "What type of bender was the avatar before Aang?",
        options: ["air", "fire", "earth", "water"],
    },
    {
        question: "What sub-skill does Katara learn in the third season?",
        options: ["blood-bending", "metal bending", "lighting generation", "spiritual projection"],
    },
    {
        question: "What is Toph's fighting name in Earth Ruble VI?",
        options: ["kid wonder", "the runaway", "the blind bandit", "the great toph"],
    },
    {

        question: "What happened to Sokka's first girlfriend",
        options: ["turned into the moon", "died in battle", "ran away", "they married"],
    },
    {

        question: "What type of merchant is Team Avatar always running into?",
        options: ["squash", "cabbage", "watermelon", "cantelope"],
    },
    {

        question: "What were the names of Aang's animal companions?",
        options: ["Miko and Maki", "Fluffy and Tiny", "Appa and Momo", "Simba and Nala"],
    },
    {
        question: "How old is Aang when he is frozen in ice?",
        options: ["9", "13", "18", "12"],
    }
]

var gameAnswers =[trivia[0].options[3], trivia[1].options[1], trivia[2].options[0], trivia[3].options[2], trivia[4].options[0], trivia[5].options[1], trivia[6].options[2], trivia[7].options[3]]
var userGuesses = [];
var isAnswerChosen = false;
var startContainer = document.getElementById("start-container");
var gameContainer = $("#game-container");
function enterGame(){
    userGuesses = [];
    isAnswerChosen = false;
    startContainer.style.display = "none";
    gameContainer.css("display", "block");

    for(var i=0; i < trivia.length; i++){
        var newDiv = $("<div>");
        var questionHeader = $("<h4>");
        questionHeader.text(trivia[i].question);
        newDiv.append(questionHeader);
        for(var j = 0; j < trivia[i].options.length; j++){
            var optionsPar = $("<p>");
            optionsPar.text(trivia[i].options[j]);
            optionsPar.attr("onclick", "addAnswer(this.textContent)")
            newDiv.append(optionsPar)
            newDiv.css("margin-bottom", "10px")
        }
        gameContainer.append(newDiv);
    }
}
 
function addAnswer(parameter){
    userGuesses.push(parameter)
}

console.log(gameAnswers)
function submit(){
    if(userGuesses === gameAnswers){
        alert("you won!");
    } alert("you lose");
    console.log(userGuesses);
    console.log(gameAnswers)
}






