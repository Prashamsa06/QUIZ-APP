let questions = [
    {
        question: "Which language is used for web page structure?",
        options: ["HTML", "CSS", "Python", "Java"],
        answer: 0
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "CSS", "C", "Java"],
        answer: 1
    },
    {
        question: "Which language makes web pages interactive?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: 2
    }
];

let current = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").innerText = questions[current].question;

    for (let i = 0; i < 4; i++) {
        document.getElementById("option" + i).innerText =
            questions[current].options[i];
    }

    document.getElementById("result").innerText = "";
}

function checkAnswer(choice) {
    if (choice === questions[current].answer) {
        score++;
        document.getElementById("result").innerText = "Correct!";
    } else {
        document.getElementById("result").innerText = "Wrong!";
    }
}

function nextQuestion() {
    current++;

    if (current < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText =
            "Quiz Completed!";
        document.getElementById("result").innerText =
            "Your score: " + score + "/" + questions.length;
    }
}

loadQuestion();