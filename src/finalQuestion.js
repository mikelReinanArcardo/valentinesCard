import verificationIntro from "./verificationIntro.js";

export default function finalQuestion() {
	verificationIntro();

	const dialogBox = document.querySelector("#dialogBox"),
		haruText = document.querySelector(".dialog");

	dialogBox.className = "dialog-4";
	haruText.textContent = "WOOF! Pretty convincing I'd say.";
}