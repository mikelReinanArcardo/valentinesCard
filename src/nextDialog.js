import angryKooli from "./images/angryKooli.png";
import sniffSound from "./audio/sniff.mp3";
import barkSound from "./audio/bark.mp3";
import livesLost from "./livesLost.js";
import render from "./render.js";
import renderDialog from "./renderDialog.js";
import haruPic from "./images/haru.png";
import scaredHaru from "./images/scaredHaru.png";
import kooliPat from "./kooliPat.js";
import goofyKooli from "./images/goofyKooli.png";
import valentinesCard from "./valentinesCard.js";



export default function nextDialog() {
	const dialogBox = document.querySelector("#dialogBox"),
	 	sniff = document.createElement("audio"),
		haruDiv = document.querySelector("#haruDiv"),
		haruText = document.createElement("h2"),
		haru = document.querySelector("#haru");

	let dialogNumber = (dialogBox.className.length == 8)? dialogBox.className.at(-1): dialogBox.className.slice(-2);
	dialogNumber++;
	dialogBox.className = `dialog-${dialogNumber}`;
	// repeat til necessary 
	if (dialogBox.className == "dialog-1"){
		haruText.textContent = "*sniff* 	*sniff*";
		dialogBox.appendChild(haruText);

		sniff.src = sniffSound;
		sniff.volume = .8;
		sniff.autoplay = true;
		dialogBox.appendChild(sniff);
	}

	if (dialogBox.className == "dialog-2"){
		haruText.textContent = "Hmmmm...";
		dialogBox.appendChild(haruText);
	}

	if (dialogBox.className == "dialog-3"){
		haruText.textContent = "I think you will need to go through sum extra verification";
		dialogBox.appendChild(haruText);

		sniff.src = barkSound;
		sniff.volume = .8;
		sniff.autoplay = true;
		dialogBox.appendChild(sniff);
	}

	if (dialogBox.className == "dialog-5"){
		haruText.textContent = "For this final test...";
		dialogBox.appendChild(haruText);
	}

	if (dialogBox.className == "dialog-6"){
		haruText.textContent = "*You Suddendly Received a Slice of Watermelon*";
		dialogBox.appendChild(haruText);
	}

	if (dialogBox.className == "dialog-7"){
		haruText.textContent = "wa... wa... WATERMELON !??";
		dialogBox.appendChild(haruText);
	}

	if (dialogBox.className == "dialog-8"){
		haruText.textContent = "*Give Watermelon to police Haru?*";
		dialogBox.appendChild(haruText);

		const buttonsDiv = document.createElement("div"), 
			giveBtn = document.createElement("button"),
			dontGiveBtn = document.createElement("button");
		
		buttonsDiv.id = "buttonsDiv";
		dialogBox.appendChild(buttonsDiv);

		giveBtn.id = "givebtn";
		giveBtn.textContent = "Give";
		giveBtn.addEventListener("click", ()=> {
			// might need refactoring
			renderDialog();
			nextDialog();
			const nextBtn = document.createElement("h1");
			nextBtn.id = "nextBtn";
			nextBtn.textContent = ">>";
			nextBtn.addEventListener("click", () => {
				if (dialogBox.className == "dialog-13"){
					haruDiv.removeChild(haruDiv.lastChild);
					kooliPat();
					return;
				}
				renderDialog();
				nextDialog();
				dialogBox.appendChild(nextBtn);
			});
			dialogBox.appendChild(nextBtn);
		});
		buttonsDiv.appendChild(giveBtn);

		dontGiveBtn.id = "dontGivebtn";
		dontGiveBtn.textContent = "Don't Give";
		dontGiveBtn.addEventListener("click", () => {
			render();
			livesLost();
		});
		buttonsDiv.appendChild(dontGiveBtn);
	}

	if (dialogBox.className == "dialog-9"){
		haru.src = haruPic;
		haruText.textContent = "I'M CONVINCED! U R MY ATE!"; 
		dialogBox.appendChild(haruText);
	}
	
	if (dialogBox.className == "dialog-10"){
		haru.src = scaredHaru;
		haruText.textContent = "However, you will need to meet the big boss first..."; 
		dialogBox.appendChild(haruText);
	}

	if (dialogBox.className == "dialog-11"){
		haruText.textContent = "Make sure you win him over.";
		dialogBox.appendChild(haruText);
	}

	if (dialogBox.className == "dialog-12"){
		haru.src = angryKooli;
		haruText.textContent = "Who are you!?";
		dialogBox.appendChild(haruText);
	}

	if (dialogBox.className == "dialog-13"){
		haruText.textContent = "*Pat kooli's head to win him over*";
		dialogBox.appendChild(haruText);
	}

	if (dialogBox.className == "dialog-14"){
		haru.src = goofyKooli;
		haruText.textContent = "You ARE my ate!";
		dialogBox.appendChild(haruText);
		const nextBtn = document.createElement("h1");
		nextBtn.id = "nextBtn";
		nextBtn.textContent = ">>";
		nextBtn.addEventListener("click", () => {
			renderDialog();
			nextDialog();
			dialogBox.appendChild(nextBtn);
			if (dialogBox.className == "dialog-16"){
				render();
				valentinesCard();
				const openBtn = document.querySelector("#open");
				openBtn.className = "unlocked";
				openBtn.disabled = (openBtn.className == "lock")? true : false;
			}
		});
		dialogBox.appendChild(nextBtn);
	}

	if (dialogBox.className == "dialog-15"){
		haruText.textContent = "I'll allow you to open kuya's card for you. Enjoy!";
		dialogBox.appendChild(haruText);
	}
}