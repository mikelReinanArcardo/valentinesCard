export default function render() {

	const content = document.querySelector("#content");

	while(content.hasChildNodes()){
		content.removeChild(content.firstChild);
	}

}