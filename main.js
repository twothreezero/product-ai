class LottoTicket extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.numbers = JSON.parse(this.getAttribute('numbers'));
        this.render();
    }

    getColorForNumber(number) {
        if (number <= 10) return '#fbc400'; // Yellow
        if (number <= 20) return '#69c8f2'; // Blue
        if (number <= 30) return '#ff7272'; // Red
        if (number <= 40) return '#aaa';    // Gray
        return '#b0d840';                   // Green
    }

    render() {
        const style = `
            :host {
                display: block;
                animation: fadeIn 0.5s ease-out;
            }
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .ticket {
                background: var(--ticket-bg, #2d2d2d);
                border-radius: 16px;
                padding: 1.5rem 2rem;
                box-shadow: 
                    0 10px 30px var(--ticket-shadow, rgba(0, 0, 0, 0.4)),
                    inset 0 0 0 1px var(--ticket-glow, rgba(255, 255, 255, 0.05));
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
            }
            .header {
                text-align: left;
                color: var(--secondary-color, #b3b3b3);
                font-size: 0.9rem;
                font-weight: var(--font-weight-light, 400);
            }
            .numbers {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1rem;
                flex-wrap: wrap;
            }
            .number {
                width: 48px;
                height: 48px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.5rem;
                font-weight: var(--font-weight-bold, 900);
                color: #000;
                box-shadow: 0 0 15px rgba(0,0,0,0.3);
                animation: popIn 0.3s ease-out forwards;
            }
            @keyframes popIn {
                from { transform: scale(0.5); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
            }
        `;

        const ticketId = 'Ticket #' + Math.floor(1000 + Math.random() * 9000);

        this.shadowRoot.innerHTML = `
            <style>${style}</style>
            <div class="ticket">
                <div class="header">${ticketId}</div>
                <div class="numbers">
                    ${this.numbers.map((num, i) => `
                        <div class="number" style="background-color: ${this.getColorForNumber(num)}; animation-delay: ${i * 0.1}s;">
                            ${num}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
}

customElements.define('lotto-ticket', LottoTicket);


function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNum = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNum);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}


const generateBtn = document.getElementById('generate-btn');
const resultsContainer = document.getElementById('results-container');

generateBtn.addEventListener('click', () => {
    const newNumbers = generateLottoNumbers();
    
    const ticketElement = document.createElement('lotto-ticket');
    ticketElement.setAttribute('numbers', JSON.stringify(newNumbers));

    resultsContainer.prepend(ticketElement);
});

// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const sunIcon = themeToggleBtn.querySelector('.sun-icon');
const moonIcon = themeToggleBtn.querySelector('.moon-icon');
const body = document.body;

// Check for saved user preference, if any, on load of the website
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
        localStorage.setItem('theme', 'light');
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
        localStorage.setItem('theme', 'dark');
    }
});
