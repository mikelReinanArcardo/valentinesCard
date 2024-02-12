import valentinesCard from "./valentinesCard.js";
import verificationIntro from "./verificationIntro.js";
import render from "./render.js";
import verification from "./verification.js";
import nextQuestion from "./nextQuestion.js";
import growl from "./audio/growl.mp3";

export default function livesLost() {
	verificationIntro();

	const content = document.querySelector("#content"),
		dialogBox = document.querySelector("#dialogBox"),
		haruText = document.querySelector(".dialog"),
		nextBtn = document.querySelector("#nextBtn"),
		tryAgain = document.createElement("dialog"),
		tryAgainMessage = document.createElement("h3"),
		yesBtn = document.createElement("button"),
		noBtn = document.createElement("button"),
		growlSound = document.createElement("audio");

	dialogBox.className = "dialog-lost";
	haruText.textContent = "WOOF! UR NOT MY ATE!";

	growlSound.src = growl;
	growlSound.autoplay = "true";
	growlSound.volume = .6;
	content.appendChild(growlSound);

	// BUG: MAY REMOVE NON-AUDIO NODE
	// growlSound.addEventListener("ended", () => {
	// content.removeChild(content.lastChild);
	// });

	tryAgain.id = "tryAgain";
	content.appendChild(tryAgain);

	tryAgainMessage.id = "tryAgainMessage";
	tryAgainMessage.textContent = "Try Again?";
	tryAgain.appendChild(tryAgainMessage);

	yesBtn.id = "yesBtn";
	yesBtn.textContent = "Yes";
	yesBtn.addEventListener("click", () => {
		render();
		verification();
	});
	tryAgain.appendChild(yesBtn);

	noBtn.id = "noBtn";
	noBtn.textContent = "No";
	noBtn.addEventListener("click", () => {
		render();
		valentinesCard();
	});
	tryAgain.appendChild(noBtn);

	nextBtn.removeEventListener("click", nextQuestion);

	nextBtn.addEventListener("click", () => {
		tryAgain.showModal(); 
	});
}