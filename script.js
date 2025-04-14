const adviceId = document.getElementById('advice-id');
const adviceQuote = document.getElementById('advice-quote');
const diceButton = document.getElementById('dice-button');

async function getAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        adviceId.textContent = data.slip.id;
        adviceQuote.textContent = data.slip.advice;
    } catch (error) {
        console.error('Error fetching advice:', error);
        adviceQuote.textContent = "Failed to fetch advice.";
        // adviceId.textContent = "--";
    }
}

getAdvice();

diceButton.addEventListener('click', getAdvice);