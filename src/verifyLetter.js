import letter from "./letter.js";
import renderLetter from "./renderLetter.js";

export default function verifyLetter() {
	const cardMessageDiv = document.querySelector("#cardMessageDiv"),
		titleForm = document.createElement("h1"),
		validateForm = document.createElement("form"),
		validateLabel = document.createElement("label"),
		validateInput = document.createElement("input"),
		submitBtn = document.createElement("button"),
		errorMessage = document.createElement("span");

	titleForm.id = "titleForm";
	titleForm.textContent = "Answer the following question to access letter:";
	cardMessageDiv.appendChild(titleForm);

	validateForm.id = "validateForm";
	cardMessageDiv.appendChild(validateForm);

	validateLabel.textContent = "Lio is what kind of animal: ";
	validateLabel.id = "validateLabel";
	validateForm.appendChild(validateLabel);

	validateInput.id = "validateInput";
	validateLabel.appendChild(validateInput);

	errorMessage.id = "errorMessage";
	validateLabel.appendChild(errorMessage);

	submitBtn.id = "submitBtn";
	submitBtn.textContent = "Submit";
	submitBtn.addEventListener("click", (e) => {
		if (validateInput.value.toLowerCase() === "panda"){
			renderLetter();
			letter();
		}
		else {
			validateInput.value = "";
			errorMessage.textContent = "Wrong Answer!";
		}
		e.preventDefault();
	});
	validateForm.appendChild(submitBtn);


	
}