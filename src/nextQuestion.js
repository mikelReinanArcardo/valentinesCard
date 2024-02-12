import processWrongChoice from "./processWrongChoice.js";
import chewToy1 from "./images/toy1.png";
import chewToy2 from "./images/toy2.png";
import chewToy3 from "./images/toy3.png";
import chewToy4 from "./images/toy4.png";
import xMark from "./images/xMark.png";
import shovelImg from "./images/shovel.png";
import finalQuestion from "./finalQuestion.js";
import render from "./render.js";
import ding from "./audio/ding.mp3";

export default function nextQuestion() {
	const questionNumber = document.querySelector(".questionNumber"),
		question = document.querySelector(".question"),
		choicesDiv = document.querySelector("#choicesDiv"),
		choice1Div = document.querySelector("#choice1"),
		choice2Div = document.querySelector("#choice2"),
		choice3Div = document.querySelector("#choice3"),
		choice4Div = document.querySelector("#choice4"),
		choice1 = choice1Div.querySelector("h2"),
		choice2 = choice2Div.querySelector("h2"),
		choice3 = choice3Div.querySelector("h2"),
		choice4 = choice4Div.querySelector("h2");
    
	

	let rightChoice = document.querySelector(".right"),
		wrongChoices = document.querySelectorAll(".wrong");

        
	rightChoice.removeEventListener("click", nextQuestion);
	for (let wrongChoice of wrongChoices){
		wrongChoice.removeEventListener("click", processWrongChoice);
	}

	const content = document.querySelector("#content"),
		dingSound = document.createElement("audio");

	dingSound.src = ding;
	dingSound.autoplay = "true";
	dingSound.volume = .6;
	content.appendChild(dingSound);
    
	let newQuestionNumber = +questionNumber.id.at(-1) + 1;
	questionNumber.id = `question-${newQuestionNumber}`;

	// Question 2
	if (newQuestionNumber == 2){
		questionNumber.textContent = 2;
		question.innerHTML = "What <span class=\"hidden-choice right\">color</span> was kuya Mikel wearing during your first meetup / date?";

		choice1Div.classList = "choice wrong";
		choice2Div.classList = "choice wrong";
		choice3Div.classList = "choice wrong";
		choice4Div.classList = "choice wrong";

		choice1.textContent = "color";
		choice1.style.color = "maroon";

		choice2.textContent = "color";
		choice2.style.color = "green";

		choice3.textContent = "color";
		choice3.style.color = "blue";

		choice4.textContent = "color";
		choice4.style.color = "purple";

		rightChoice = document.querySelector(".right");
		wrongChoices = document.querySelectorAll(".wrong");

		rightChoice.addEventListener("click", nextQuestion);

		for (let wrongChoice of wrongChoices){
			wrongChoice.addEventListener("click", processWrongChoice);
		}
	}
 
	// Question 3
	if (newQuestionNumber == 3){
		questionNumber.innerHTML = "3<span class=\"hidden-number\">1</span>";
		questionNumber.classList = "questionNumber hiddenAnswer right";
		question.textContent = "Your first date / meetup was October __, 2022";

		choice1Div.classList = "choice wrong";
		choice2Div.classList = "choice wrong";
		choice3Div.classList = "choice wrong";
		choice4Div.classList = "choice wrong";

		choice1.textContent = "13";
		choice1.style.color = "black";

		choice2.textContent = "29";
		choice2.style.color = "black";

		choice3.textContent = "30";
		choice3.style.color = "black";

		choice4.textContent = "01";
		choice4.style.color = "black";

		rightChoice = document.querySelector(".right");
		wrongChoices = document.querySelectorAll(".wrong");

		rightChoice.addEventListener("click", nextQuestion);

		for (let wrongChoice of wrongChoices){
			wrongChoice.addEventListener("click", processWrongChoice);
		}
	}

	// Question 4
	if (newQuestionNumber == 4){
		questionNumber.textContent = 4;
		questionNumber.className = "questionNumber";
		question.textContent = "Find my toy using the shovel by dragging it into a certain spot";

		choicesDiv.className = "garden";

		choice1Div.className = "digSpot";
		choice2Div.className = "digSpot";
		choice3Div.className = "digSpot";
		choice4Div.className = "digSpot";

		choice1Div.id = "dig1";
		choice2Div.id = "dig2";
		choice3Div.id = "dig3";
		choice4Div.id = "dig4";

		const toy1 = document.createElement("img"),
			toy2 = document.createElement("img"),
			toy3 = document.createElement("img"),
			toy4 = document.createElement("img"),
			shovelDiv = document.createElement("div"),
			shovel = document.createElement("img");
        
		shovelDiv.id = "shovelDiv";
		choicesDiv.appendChild(shovelDiv);

		shovel.id = "shovel";
		shovel.src = shovelImg;
		shovel.draggable = "true";
		shovelDiv.appendChild(shovel);
        

		toy1.classList = "toy right";
		toy1.src = xMark;
		choice1Div.removeChild(choice1Div.firstChild);
		choice1Div.appendChild(toy1);

		toy2.classList = "toy wrong";
		toy2.src = xMark;
		choice2Div.removeChild(choice2Div.firstChild);
		choice2Div.appendChild(toy2);

		toy3.classList = "toy wrong";
		toy3.src = xMark;
		choice3Div.removeChild(choice3Div.firstChild);
		choice3Div.appendChild(toy3);

		toy4.classList = "toy wrong";
		toy4.src = xMark;
		choice4Div.removeChild(choice4Div.firstChild);
		choice4Div.appendChild(toy4);

		const choices = document.querySelectorAll(".digSpot");
		for (let choice of choices) {
			choice.addEventListener("dragover", (event) => {
				event.preventDefault();
			});
			choice.addEventListener("drop", (event) => {
				event.target.parentNode.className = "dug";
				const number = event.target.parentNode.id.at(-1);
				const chewToy = (number == 1)? chewToy1 : 
					(number == 2)? chewToy2 :
						(number == 3)? chewToy3 : chewToy4;
				event.target.src = chewToy;

				rightChoice = document.querySelector(".right");
				wrongChoices = document.querySelectorAll(".wrong");

				if (rightChoice.parentNode.className == "dug"){
					rightChoice.addEventListener("click", () => {
						render();
						finalQuestion();
					});
				}

				for (let wrongChoice of wrongChoices){
					if (wrongChoice.parentNode.className == "dug"){
						wrongChoice.addEventListener("click", processWrongChoice);
					}
				}
			});
		}

	}
}