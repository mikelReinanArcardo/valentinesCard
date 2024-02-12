import nextQuestion from "./nextQuestion.js";
import processWrongChoice from "./processWrongChoice.js";

export default function verification() {
	const content = document.querySelector("#content"),
		questionDiv = document.createElement("div"),
		choicesDiv = document.createElement("div"),
		footer = document.createElement("div"),
		questionNumber = document.createElement("h1"),
		question = document.createElement("h1"),
		choice1Div = document.createElement("div"),
		choice2Div = document.createElement("div"),
		choice3Div = document.createElement("div"),
		choice4Div = document.createElement("div"),
		choice1 = document.createElement("h2"),
		choice2 = document.createElement("h2"),
		choice3 = document.createElement("h2"),
		choice4 = document.createElement("h2"),
		livesLeft = document.createElement("h2");

    
	questionDiv.id = "questionDiv";
	content.appendChild(questionDiv);
	choicesDiv.id = "choicesDiv";
	content.appendChild(choicesDiv);
	footer.id = "footer";
	content.appendChild(footer);

	questionNumber.textContent = "1";
	questionNumber.id = "questionNumber-1";
	questionNumber.className = "questionNumber";
	questionDiv.appendChild(questionNumber);

	question.textContent = "Which of these restaurants have neither of you experienced a date at so far?";
	questionNumber.id = "question-1";
	question.className = "question";
	questionDiv.appendChild(question);

	choice1.textContent = "Sobra Cafe";
	choice1Div.appendChild(choice1);
	choice1Div.id = "choice1";
	choice1Div.classList = "choice wrong";
	choicesDiv.appendChild(choice1Div);
        
	choice2.textContent = "King Bee";
	choice2Div.appendChild(choice2);
	choice2Div.id = "choice2";
	choice2Div.classList = "choice right";
	choicesDiv.appendChild(choice2Div);

	choice3.textContent = "Ramen Nagi";
	choice3Div.appendChild(choice3);
	choice3Div.id = "choice3";
	choice3Div.classList = "choice wrong";
	choicesDiv.appendChild(choice3Div);

	choice4.textContent = "Katsu Sora";
	choice4Div.appendChild(choice4);
	choice4Div.id = "choice4";
	choice4Div.classList = "choice wrong";
	choicesDiv.appendChild(choice4Div);

	livesLeft.textContent = "Lives: 3";
	livesLeft.id = "livesLeft";
	footer.appendChild(livesLeft);

	const rightChoice = document.querySelector(".right"),
		wrongChoices = document.querySelectorAll(".wrong");
        
	rightChoice.addEventListener("click", nextQuestion);

	for (let wrongChoice of wrongChoices){
		wrongChoice.addEventListener("click", processWrongChoice);
	}
}