export default function renderLetter() {
	const cardMessageDiv = document.querySelector("#cardMessageDiv");

	while (cardMessageDiv.hasChildNodes()) {
		cardMessageDiv.removeChild(cardMessageDiv.firstChild);
	}

}