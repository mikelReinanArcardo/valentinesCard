export default function renderDialog() {
	const dialogBox = document.querySelector("#dialogBox");

	while (dialogBox.hasChildNodes()){
		dialogBox.removeChild(dialogBox.firstChild);
	}
}