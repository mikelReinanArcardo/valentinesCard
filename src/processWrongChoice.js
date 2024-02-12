import livesLost from "./livesLost.js";
import render from "./render.js";
import huh from "./audio/huh.mp3";

export default function processWrongChoice() {
	livesLeft.textContent = `Lives: ${+livesLeft.textContent.at(-1) - 1}`;
	if (livesLeft.textContent.at(-1) <= 0){
		render();
		livesLost();
	}
	
	const content = document.querySelector("#content"),
		huhSound = document.createElement("audio");

	huhSound.src = huh;
	huhSound.autoplay = "true";
	huhSound.volume = .6;
	content.appendChild(huhSound);

	// BUG: MAY REMOVE NON-AUDIO NODE
	// huhSound.addEventListener("ended", () => {
	// content.removeChild(content.lastChild);
	// });
}