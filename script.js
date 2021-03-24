document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
                checkAnswer();
            } else {
                let gametype = this.getAttribute("data-type");
                rungame(gametype);
            }
        });
    }
    rungame("addition");
});

function rungame(gametype) {
    let num1 = Math.floor(Math.random() * 25 + 1);
    let num2 = Math.floor(Math.random() * 25 + 1);

    if (gametype === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gametype === "Multiplicaiton") {
        displayMultiplyQuestion(num1, num2);
    } else {
        alert(`you have selected unknown gametype ${gametype}`);
        throw `you have selected unknown gametype ${gametype}`;
    }
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("you got it right this time you moron");
        incrementScore();
    } else {
        alert(`WROOONNGGG correct answer is ${correctAnswer[0]}`);
        incrementWrongAnswer();
    }
    rungame(calculatedAnswer[1]);
}
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x") {
        return [operand1 * operand2, "Multiplicaiton"];
    } else {
        alert("wrong operator");
        throw "wronnngggg";
    }
}

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion() { }

function displayMultiplyQuestion() {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";
}

function displayDivisionQuestion() { }
