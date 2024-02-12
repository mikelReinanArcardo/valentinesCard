import "./style.css";
import valentinesCard from "./valentinesCard.js";
import audio from "./audio/bgMusic.mp3";

const body = document.querySelector("body"),
	music = document.createElement("audio"),
	content = document.createElement("div");

music.src = audio;
music.autoplay = true;
music.loop = true;
music.volume = 0.5;
body.appendChild(music);

body.appendChild(content);
content.id = "content";

valentinesCard();