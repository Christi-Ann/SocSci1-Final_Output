
let previousIndex = -1;

function generateTrivia() {
	let randomIndex;

	do {
		randomIndex = Math.floor(Math.random() * facts.length);
	} while (
		randomIndex === previousIndex &&
		facts.length > 1
	);

	previousIndex = randomIndex;

	const trivia = facts[randomIndex];

	document.getElementById("triviaCategory").textContent =
		trivia.category;

	document.getElementById("triviaTitle").textContent =
		trivia.title;

	document.getElementById("triviaFact").textContent =
		trivia.fact;

	document.getElementById("triviaExplanation").textContent =
		trivia.explanation;

	const sourceText = document.getElementById("sourceText");
	const categoryText = document.getElementById("categoryText");
	const sourceLink = document.getElementById("sourceLink");

	sourceLink.textContent = trivia.sourceName;
	sourceLink.href = trivia.sourceUrl;
	sourceLink.target = "_blank";
	sourceLink.rel = "noopener noreferrer";

	categoryText.hidden = false;
	sourceText.hidden = false;
}

const generateButton =
	document.getElementById("generateButton");

generateButton.addEventListener("click", generateTrivia);
console.log("test");