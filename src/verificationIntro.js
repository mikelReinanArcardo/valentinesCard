import nextDialog from "./nextDialog.js";
import renderDialog from "./renderDialog.js";
import "./style.css";
import policeHaru from "./images/policeHaru.png";
import render from "./render.js";
import barkSound from "./audio/bark.mp3";
import verification from "./verification.js";
import haruPic from "./images/haru.png";

export default function verificationIntro() {
	const content = document.querySelector("#content"),
		haruDiv = document.createElement("div"),
		haru = document.createElement("img"),
		dialogBox = document.createElement("div"), // should hav bg img of a dialog box
		nextBtn = document.createElement("h1"),
		bark = document.createElement("audio"),
		haruText = document.createElement("h2");

	content.appendChild(haruDiv);

	haruDiv.id = "haruDiv";

	haru.id = "haru";
	haru.src = policeHaru;
	haruDiv.appendChild(haru);

	dialogBox.id = "dialogBox";
	dialogBox.className = "dialog-0";
	haruDiv.appendChild(dialogBox);

	haruText.className = "dialog";
	haruText.textContent = "WOOF! Haru police here, this card is made by kuya Mikel for my ate's eyes ONLY!";
	dialogBox.appendChild(haruText);

	nextBtn.id = "nextBtn";
	nextBtn.textContent = ">>";
	nextBtn.addEventListener("click", () => {
		if (dialogBox.className == "dialog-3"){
			render();
			verification();
			return;
		}

		renderDialog();
		nextDialog();

		if (!dialogBox.className.includes("dialog-8")){
			dialogBox.appendChild(nextBtn); 
		}

		if (dialogBox.className == "dialog-9"){
			haru.src = haruPic;
		}
	});
	dialogBox.appendChild(nextBtn);

	bark.src = barkSound;
	bark.autoplay = true;
	bark.volume = .8;

}