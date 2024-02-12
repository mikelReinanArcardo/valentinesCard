// This should load the valentines card
import render from "./render.js";
import "./style.css";
import verificationIntro from "./verificationIntro.js";

export default function valentinesCard() {
	const content = document.querySelector("#content"),
		valentinesDayCard = document.createElement("div"),
		openBtn = document.createElement("input"),
		openLabel = document.createElement("label"),
		cardFront = document.createElement("div"),
		note = document.createElement("div"),
		cardInside = document.createElement("div"),
		text = document.createElement("div"),
		heart = document.createElement("div"),
		smile = document.createElement("div"),
		eyes = document.createElement("div");



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
			render();
			verificationIntro();
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
	cardInside.appendChild(text);

	heart.className = "heart";
	smile.className = "smile";
	eyes.className = "eyes";
	cardInside.appendChild(heart);
	cardInside.appendChild(smile);
	cardInside.appendChild(eyes);
}