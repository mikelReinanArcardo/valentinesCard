// This should load the valentines card
import render from "./render.js";
import renderLetter from "./renderLetter.js";
import "./style.css";
import verificationIntro from "./verificationIntro.js";
import verifyLetter from "./verifyLetter.js";
import audio from "./audio/bgMusic.mp3";

export default function valentinesCard() {
	const body = document.querySelector("body"), 
		content = document.querySelector("#content"),
		valentinesDayCard = document.createElement("div"),
		openBtn = document.createElement("input"),
		openLabel = document.createElement("label"),
		cardFront = document.createElement("div"),
		note = document.createElement("div"),
		cardInside = document.createElement("div"),
		text = document.createElement("div"),
		heart = document.createElement("div"),
		smile = document.createElement("div"),
		eyes = document.createElement("div"),
		cardMessageDialog = document.createElement("dialog"),
		music = document.createElement("audio"),
		cardMessageDiv = document.createElement("div");


	valentinesDayCard.className = "valentines-day-card";
	content.appendChild(valentinesDayCard);

	openBtn.id = "open";
	openBtn.className = "lock";
	openBtn.type = "checkbox";
	openBtn.disabled = (openBtn.className == "lock")? true : false;
	valentinesDayCard.appendChild(openBtn);

	openLabel.className = "open";
	openLabel.htmlFor = "open";
	openLabel.addEventListener("click", () => {
		if (openBtn.disabled == true){
			if (body.childNodes.length > 2){
				body.removeChild(body.lastChild);
			}
			render();
			verificationIntro();
			music.src = audio;
			music.autoplay = true;
			music.loop = true;
			music.volume = 0.5;
			body.appendChild(music);
		}
		else {
			setTimeout(() =>{
				cardMessageDialog.showModal();
				renderLetter();
				verifyLetter();
			}, 2000);
		}
	});
	valentinesDayCard.appendChild(openLabel);

	cardFront.className = "card-front";
	valentinesDayCard.appendChild(cardFront);
		
	note.className = "note";
	note.textContent = "Click to Open";
	cardFront.appendChild(note);

	cardInside.className = "card-inside";
	valentinesDayCard.appendChild(cardInside);

	text.className = "text-one";
	text.textContent = "Happy";
	cardInside.appendChild(text);

	heart.className = "heart";
	smile.className = "smile";
	eyes.className = "eyes";
	cardInside.appendChild(heart);
	cardInside.appendChild(smile);
	cardInside.appendChild(eyes);

	cardMessageDialog.id = "cardMessageDialog";
	content.appendChild(cardMessageDialog);

	cardMessageDiv.id = "cardMessageDiv";
	cardMessageDialog.appendChild(cardMessageDiv);	
}