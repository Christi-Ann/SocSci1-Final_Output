let remainingIndexes = [];

function shuffleFacts() {
	remainingIndexes = facts.map((fact, index) => index);

	for (let i = remainingIndexes.length - 1; i > 0; i--) {
		const randomIndex = Math.floor(Math.random() * (i + 1));

		[
			remainingIndexes[i],
			remainingIndexes[randomIndex]
		] = [
			remainingIndexes[randomIndex],
			remainingIndexes[i]
		];
	}
}

function generateTrivia() {
	if (remainingIndexes.length === 0) {
		shuffleFacts();
	}

	const factIndex = remainingIndexes.pop();
	const trivia = facts[factIndex];

	document.getElementById("triviaCategory").textContent = trivia.category;
	document.getElementById("triviaTitle").textContent = trivia.title;
	document.getElementById("triviaFact").textContent = trivia.fact;
	document.getElementById("triviaExplanation").textContent = trivia.explanation;

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

shuffleFacts();

const generateButton =
	document.getElementById("generateButton");

generateButton.addEventListener(
	"click",
	generateTrivia
);