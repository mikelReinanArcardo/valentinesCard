import cuddle_panda from "./images/cuddle-panda.gif";

export default function ending() {
	const cardMessageDiv = document.querySelector("#cardMessageDiv"),
		titleForm = document.createElement("h1"),
		exitBtn = document.createElement("button"),
		gif = document.createElement("img");

	titleForm.id = "titleForm";
	titleForm.textContent = "See you tomorrow! I love you :>";
	cardMessageDiv.appendChild(titleForm);

	gif.src = cuddle_panda;
	gif.id = "cuddle_panda";
	cardMessageDiv.appendChild(gif);

	exitBtn.id = "exitBtn";
	exitBtn.textContent = "Exit";
	exitBtn.addEventListener("click", () => {
		location.href = "https://www.youtube.com/watch?v=2VVb_3CxGO8";
	});
	cardMessageDiv.appendChild(exitBtn);
}