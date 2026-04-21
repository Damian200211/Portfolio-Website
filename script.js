const COMMANDS = {
    help: "Available commands:\n  <span style='color: #00ccff'>help</span>      - Show this help message\n  <span style='color: #00ccff'>about</span>     - Brief description about me\n  <span style='color: #00ccff'>projects</span>  - View my portfolio projects\n  <span style='color: #00ccff'>skills</span>    - View my technical skills\n  <span style='color: #00ccff'>contact</span>   - Get my contact information\n  <span style='color: #00ccff'>github</span>    - Open my GitHub profile\n  <span style='color: #00ccff'>resume</span>    - View & Download my Resume\n  <span style='color: #00ccff'>clear</span>     - Clear the terminal screen\n  <span style='color: #00ccff'>sudo</span>      - ???",
    about: "Hi, I'm <span style='color: #fff'>Damian Le</span>.\n\nI am a passionate software developer who loves building high-quality, interactive experiences.\nThis terminal is built to reflect my love for retro computing and sleek, functional design.\nCurrently, I am exploring new opportunities and working on exciting web and mobile projects.",
    projects: "My Projects:\n\n1. <span style='color: #fff'>[Signature Nail Salon Full-Stack Scheduler]</span>\n   - A professional appointment booking SPA with a robust backend scheduler engine.\n   - Handles complex business logic including timezone awareness, conflict detection, and dynamic multi-service durations.\n   - Tech: React, Django REST Framework, PostgreSQL.\n\n2. <span style='color: #fff'>[NFL Game Predictor: Advanced Efficiency Modeling]</span>\n   - A Machine Learning application predicting NFL outcomes securely using play-by-play Walk-Forward Validation and EPA statistics.\n   - Features interactive dashboard visualizations, contextual rolling stats, and custom power rankings.\n   - Tech: Python, XGBoost, Streamlit, nflreadpy.\n\n3. <span style='color: #fff'>[Weight Tracker Android App]</span>\n   - A mobile application with secure login utilizing a local SQLite database for data persistence.\n   - Features interactive weight history graphs, goal visualization, and automated SMS alerts.\n   - Tech: Java, Android Jetpack, SQLite, Material Design.\n\n4. <span style='color: #fff'>[Grazioso Salvare Rescue Animal Dashboard]</span>\n   - A full-stack web application designed to help filter thousands of shelter records to identify dogs for search-and-rescue.\n   - Implements MVC architecture with dynamic data tables, breed pie charts, and geolocation maps.\n   - Tech: Python, Dash by Plotly, Pandas, MongoDB.\n\n5. <span style='color: #fff'>[Terminal Portfolio]</span> <span style='color: #888'>(You are here)</span>\n   - A premium retro-style interactive web terminal.\n   - Built with Vanilla JS, HTML5, CSS3.",
    skills: "Technical Skills:\n\n  <span style='color: #00ccff'>Languages</span>  : Python, JavaScript, Java, HTML/CSS, SQL\n  <span style='color: #00ccff'>Frameworks</span> : React, Django REST, Android Jetpack, Streamlit\n  <span style='color: #00ccff'>Tools</span>      : PostgreSQL, MongoDB, SQLite, Android Studio, Linux\n  <span style='color: #00ccff'>Concepts</span>   : REST APIs, Mobile Dev, Machine Learning, Full-Stack",
    contact: "Let's connect!\n\nEmail    : contact@example.com\nGitHub   : <a href='https://github.com/dame' target='_blank'>github.com/dame</a>\nLinkedIn : <a href='https://linkedin.com/in/dame' target='_blank'>linkedin.com/in/dame</a>",
    sudo: "<span class='error-msg'>Access denied. This incident will be reported.</span>"
};

const BOOT_SEQUENCE = [
    "Booting DameOS v1.0.0...",
    "Kernel loaded successfully.",
    "Initialize terminal services... <span style='color:#0f0'>[OK]</span>",
    "\nWelcome to my interactive terminal portfolio.",
    "Type '<span style='color:#00ccff'>help</span>' to see a list of available commands.\n"
];

class TerminalEmulator {
    constructor() {
        this.elements = {
            input: document.getElementById('terminal-input'),
            typed: document.getElementById('typed-input'),
            output: document.getElementById('terminal-output'),
            container: document.getElementById('terminal-container')
        };
        
        this.state = {
            history: [],
            historyIndex: -1,
            isTyping: false
        };

        this.initEvents();
        this.runBootSequence();
    }

    initEvents() {
        // Automatically regain focus gracefully mapped to standard keystrokes
        document.addEventListener('keydown', (e) => {
            if (!e.ctrlKey && !e.metaKey && !e.altKey) {
                this.elements.input.focus();
            }
        });

        // Mirror hidden input value to standard visible span
        this.elements.input.addEventListener('input', () => {
            this.elements.typed.textContent = this.elements.input.value;
        });

        // Handle terminal commands and history traversal
        this.elements.input.addEventListener('keydown', (e) => this.handleKeyboardInput(e));
    }

    handleKeyboardInput(e) {
        if (e.key === 'Enter') {
            this.processCommand(this.elements.input.value.trim());
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.navigateHistory(-1);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.navigateHistory(1);
        } else if (e.key === 'c' && e.ctrlKey) {
            this.cancelCurrentInput();
        }
    }

    processCommand(cmd) {
        if (cmd) {
            this.state.history.push(cmd);
            this.state.historyIndex = this.state.history.length;
        }

        // Echo the executed command
        this.printEcho(cmd);
        this.clearInput();

        const lowerCmd = cmd.toLowerCase().split(' ')[0];

        if (lowerCmd === 'clear') {
            this.clearScreen();
        } else if (lowerCmd === 'github') {
            this.printResponse("Connecting to GitHub network... <span style='color:#0f0'>[OK]</span>\nOpening profile in a new tab.");
            setTimeout(() => window.open('https://github.com/dame', '_blank'), 800);
        } else if (lowerCmd === 'resume') {
            this.printResponse("Retrieving securely encrypted resume... <span style='color:#0f0'>[OK]</span>\nOpening document in a new tab.");
            setTimeout(() => window.open('resume.pdf', '_blank'), 800);
        } else if (COMMANDS[lowerCmd]) {
            this.printResponse(COMMANDS[lowerCmd]);
        } else if (cmd !== '') {
            this.printResponse(`<span class="error-msg">Command not found: ${lowerCmd}. Type 'help' for available commands.</span>`);
        }
    }

    clearScreen() {
        this.elements.output.innerHTML = '';
        this.renderBootHeaders();
    }

    cancelCurrentInput() {
        this.clearInput();
        this.printEcho("^C");
    }

    clearInput() {
        this.elements.input.value = '';
        this.elements.typed.textContent = '';
        this.scrollToBottom();
    }

    navigateHistory(direction) {
        const { history } = this.state;
        
        if (direction === -1 && this.state.historyIndex > 0) {
            this.state.historyIndex--;
        } else if (direction === 1 && this.state.historyIndex < history.length - 1) {
            this.state.historyIndex++;
        } else if (direction === 1 && this.state.historyIndex >= history.length - 1) {
            this.state.historyIndex = history.length;
            this.elements.input.value = '';
            this.elements.typed.textContent = '';
            return;
        } else {
            return;
        }

        const historyItem = history[this.state.historyIndex];
        this.elements.input.value = historyItem;
        this.elements.typed.textContent = historyItem;
    }

    printEcho(cmd) {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'output-line';
        lineDiv.innerHTML = `<span class="prompt">dame@portfolio:~$</span><span class="output-cmd">${cmd}</span>`;
        this.elements.output.appendChild(lineDiv);
        this.scrollToBottom();
    }

    printResponse(text) {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'output-line';
        lineDiv.style.whiteSpace = "pre-wrap";
        this.elements.output.appendChild(lineDiv);

        // Instantly render complex HTML payloads rather than typing character-by-character
        if (text.includes('<') && !text.includes('<<<<')) {
            lineDiv.innerHTML = text;
            this.scrollToBottom();
            return;
        }

        // Typewriter effect algorithm
        let i = 0;
        const speed = 8; // ms per char

        const typeChar = () => {
            if (i < text.length) {
                lineDiv.textContent += text.charAt(i);
                i++;
                this.scrollToBottom();
                setTimeout(typeChar, speed);
            }
        };
        typeChar();
    }

    renderBootHeaders() {
        BOOT_SEQUENCE.forEach(msg => {
            const lineDiv = document.createElement('div');
            lineDiv.className = 'output-line';
            lineDiv.style.whiteSpace = "pre-wrap";
            lineDiv.innerHTML = msg;
            this.elements.output.appendChild(lineDiv);
        });
        this.scrollToBottom();
    }

    runBootSequence() {
        this.elements.input.focus();
        
        this.printResponse(BOOT_SEQUENCE[0]);
        setTimeout(() => this.printResponse(BOOT_SEQUENCE[1]), 400);
        setTimeout(() => this.printResponse(BOOT_SEQUENCE[2]), 800);
        setTimeout(() => {
            this.printResponse(BOOT_SEQUENCE[3]);
            this.printResponse(BOOT_SEQUENCE[4]);
        }, 1300);
    }

    scrollToBottom() {
        this.elements.container.scrollTop = this.elements.container.scrollHeight;
    }
}

// Boot up the terminal when the window loads
window.onload = () => {
    new TerminalEmulator();
};
