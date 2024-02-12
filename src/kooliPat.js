import moodMeterImg from "./images/moodMeter.png";
import arrowImg from "./images/arrow.png";
import render from "./render.js";
import livesLost from "./livesLost.js";
import verificationIntro from "./verificationIntro.js";
import nextDialog from "./nextDialog.js";
import renderDialog from "./renderDialog.js";

export default function kooliPat() {
	const moodDiv = document.createElement("div"), 
		moodMeter = document.createElement("img"),
		arrow = document.createElement("img"),
		hitBox = document.createElement("div"),
		content = document.querySelector("#content"),
		haruDiv = document.querySelector("#haruDiv");

	hitBox.id = "hitBox";
	content.appendChild(hitBox);
					
	moodDiv.id = "moodDiv";
	haruDiv.appendChild(moodDiv);

	moodMeter.src = moodMeterImg; 
	moodMeter.id = "moodMeter";
	moodDiv.appendChild(moodMeter);
					
	arrow.src = arrowImg;
	arrow.id = "arrow";
	moodDiv.appendChild(arrow);

	let kooliPoints = 36;
	arrow.style.left = `${kooliPoints}vw`;

	let koolipatience = setInterval(() => {
		kooliPoints--;
		if (kooliPoints <= 26){
			render();
			livesLost();
			clearInterval(koolipatience);
		}
		arrow.style.left = `${kooliPoints}vw`;
	}, 300);


	hitBox.addEventListener("click", () => {
		kooliPoints++;
		if (kooliPoints >= 63){
			clearInterval(koolipatience);
			render();
			verificationIntro();
			const dialogBox = document.querySelector("#dialogBox");
			dialogBox.className = "dialog-13";
			renderDialog();
			nextDialog();
		}
		arrow.style.left = `${kooliPoints}vw`;
	});
}