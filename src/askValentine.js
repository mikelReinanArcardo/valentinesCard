import ending from "./ending.js";
import renderLetter from "./renderLetter.js";

export default function askValentine() {
	const cardMessageDiv = document.querySelector("#cardMessageDiv"),
		titleForm = document.createElement("h1"),
		buttonsDiv = document.createElement("div"),
		noBtn = document.createElement("button"),
		yesBtn = document.createElement("button");

	let yesBtnHeight = 4;
	let yesBtnWidth = 15;
	let yesBtnFontSize = 1.5;

	titleForm.id = "titleForm";
	titleForm.textContent = "Will you be my valentine?";
	cardMessageDiv.appendChild(titleForm);

	buttonsDiv.id = "buttonsDiv";
	cardMessageDiv.appendChild(buttonsDiv);

	yesBtn.id = "yesBtn";
	yesBtn.textContent = "Yes";
	yesBtn.addEventListener("click", () =>{
		renderLetter();
		ending();
	});
	buttonsDiv.appendChild(yesBtn);

	noBtn.id = "noBtn";
	noBtn.textContent = "No";
	noBtn.addEventListener("click", () => {
		noBtn.style.position = "absolute";
		noBtn.style.top = `${(Math.random()*100) % 90}%`;
		noBtn.style.left = `${(Math.random()*100) % 90}%`;
		if (yesBtnHeight <= 50 && yesBtnWidth <= 50){
			yesBtnHeight += 0.75;
			yesBtnWidth += 1.25;
			yesBtnFontSize += 0.5;
			yesBtn.style.height = `${yesBtnHeight}rem`;
			yesBtn.style.width = `${yesBtnWidth}vw`;
			yesBtn.style.fontSize = `${yesBtnFontSize}rem`;
		}
	});
	buttonsDiv.appendChild(noBtn);
}