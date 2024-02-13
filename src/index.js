import "./style.css";
import valentinesCard from "./valentinesCard.js";

const body = document.querySelector("body"),
	content = document.createElement("div");

body.appendChild(content);
content.id = "content";

valentinesCard();