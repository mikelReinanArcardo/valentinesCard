import askValentine from "./askValentine.js";
import renderLetter from "./renderLetter.js";

export default function letter() {
	const cardMessageDiv = document.querySelector("#cardMessageDiv"),
		cardMessage = document.createElement("h1"),
		nextBtn = document.createElement("button");

	cardMessage.id = "cardMessage";
	cardMessage.setAttribute("style", "white-space: pre-wrap;");
	cardMessage.textContent = `
        Dear Jesi, \r\n \r\n
            HAPPY VALENTINE'S DAY! First of all I would like to congratulate you on surviving your recent shifting exam. I am so proud of you! Please don't be too hard on yourself ha, I understand that sometimes may grade kang gusto na abutin, but don't sacrifice your health over grades. I would want to live a long and happy life with you, so please take care of yourself especially when I'm not by your side. Remember to have three proper meals a day and aim for at least 6 hours of sleep, kapag hindi naman hell week. Best of luck in your upcoming exams!! Kaya mo yan!!
        \r\n
            
            I genuinely apologize for all my shortcomings, especially the things I tend to overlook. While I do wish at times that you would communicate more openly, I recognize it's my fault for not bringing up these concerns earlier. I've learned from this experience and am committed to doing better in the future. Nevertheless, any tampuhan won't change the way I feel about you. Not a day passes, even during the tough ones, where the thought of leaving you crosses my mind. It's always you, and I hope it remains that way for years to come. You constantly occupy both my heart and mind (except pag may LE focus po ako sa exam hehe). 
        \r\n
            I made this small (and ugly) website to express my love for you. I'm not very good with words and baka ibash mo pa handwriting ko, so why not just make something out of my hobby diba. (cheesy stuff incoming)
        \r\n
            Jesi, my love, you've always been my source of inspiration. Thoughts of you would fill my mind as I woke up and just before I drifted off to sleep. While we've had our share of quarrels in the past few months, I hope they haven't altered your feelings for me. I view those moments as lessons that strengthen our bond. I know you've spent Valentine's Day alone for the past few years (wawa ka naman :P), and I regret not being there for you last February 14th. However, I want to change that. I actually wanted to do this personally pero di ko pa tapos kalahati ng website nung bumisita ako sayo eh hehe.
    `;
	cardMessageDiv.appendChild(cardMessage);

	nextBtn.textContent = "Next Page";
	nextBtn.id = "nextPageBtn";
	nextBtn.addEventListener("click", () => {
		renderLetter();
		askValentine();
	});
	cardMessageDiv.appendChild(nextBtn);
}