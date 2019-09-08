var questions = [
    {
        number: "1. ",
        question: "How long had the avatar been gone before Sokka and Katara found Aang?",
        options: ["50 years", "1000 years", "250 years", "100 years"],
        radioName: "one"
    },
    {
        number: "2. ",
        question: "What type of bender was the avatar before Aang?",
        options: ["air", "fire", "earth", "water"],
        radioName:"two"
    },
    {
        number: "3. ",
        question: "What sub-skill does Katara learn in the third season?",
        options: ["blood-bending", "metal bending", "lighting generation", "spiritual projection"],
        radioName:"three"
    },
    {
        number: "4. ",
        question: "What is Toph's fighting name in Earth Ruble VI?",
        options: ["kid wonder", "the runaway", "the blind bandit", "the great toph"],
        radioName: "four"
    },
    {
        number: "5. ",
        question: "What happened to Sokka's first girlfriend",
        options: ["turned into the moon", "died in battle", "ran away", "he never had a girlfriend"],
        radioName: "five"
    },
    {
        number: "6. ",
        question: "What type of merchant is Team Avatar always running into?",
        options: ["squash", "cabbage", "watermelon", "cantelope"],
        radioName: "six"
    },
    {
        number: "7. ",
        question: "What were the names of Aang's animal companions?",
        options: ["Miko and Maki", "Fluffy and Tiny", "Appa and Momo", "Simba and Nala"],
        radioName: "seven"
    },
    {
        number: "8. ",
        question: "How old is Aang when he is frozen in ice?",
        options: ["9", "13", "18", "12"],
        radioName: "eight"
    }
]
var containerDiv = $("#container");
var gameAnswers =[questions[0].options[3], questions[1].options[1], questions[2].options[0], questions[3].options[2], questions[4].options[0], questions[5].options[1], questions[6].options[2], questions[7].options[3]]
var userGuesses = [];
var isAnswerChosen = false;


for(var i = 0; i < questions.length; i ++){
    var rowDiv = $("<div>").addClass("row question")
    var colDiv = $("<div>").addClass("col-12")
    var questionHeader = $("<h3>").text(questions[i].number + questions[i].question)
    var secondRow = $("<div>").addClass("row options")
    var secondCol = $("<div>").addClass("col-12")

    colDiv.append(questionHeader)
    rowDiv.append(colDiv);
    containerDiv.append(rowDiv)

    for(var j = 0; j < questions[i].options.length; j++){
        var radioInput = $("<input>");
        var radioLabel = $("<label>");
        var radioDiv =$("<div>")
        radioLabel.text(questions[i].options[j]);
        radioInput.attr("type", "radio");
        radioInput.attr("value", questions[i].options[j])
        radioInput.addClass(questions[i].className)
        radioInput.attr("name", questions[i].radioName)
        radioInput.attr("onclick", "optionChoice(this.value)");
        radioDiv.append(radioInput, radioLabel)
        secondCol.append(radioDiv);
        secondRow.append(secondCol);
        containerDiv.append(secondRow)
    }
}

document.getElementsByName(questions.radioName)
for(var i = 0, r=radioInput, l=r.length; i < l; i++){
    r[i].disable = true
}

function submit(){
    console.log(userGuesses)
}