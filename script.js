const COMMANDS = {
    help: "Available commands:\n  <span style='color: #00ccff'>help</span>              - Show this help message\n  <span style='color: #00ccff'>about</span>             - Brief description about me\n  <span style='color: #00ccff'>projects</span>          - View my portfolio projects\n  <span style='color: #00ccff'>skills</span>            - View my technical skills\n  <span style='color: #00ccff'>contact</span>           - Get my contact information\n  <span style='color: #00ccff'>github</span>            - Open my GitHub profile\n  <span style='color: #00ccff'>resume</span>            - View & Download my Resume\n  <span style='color: #00ccff'>weight-tracker</span>    - View Weight Tracker App details\n  <span style='color: #00ccff'>artemis-financial</span> - View Artemis Financial details\n  <span style='color: #00ccff'>3d-renderer</span>       - View 3D Scene Renderer details\n  <span style='color: #00ccff'>clear</span>             - Clear the terminal screen\n  <span style='color: #00ccff'>sudo</span>              - ???",
    about: "Hi, I'm <span style='color: #fff'>Damian Le</span>.\n\nI'm a software engineer focused on building robust backend systems, training reinforcement learning models, and designing terminal-first workflows. I built this site to reflect my affinity for Linux, retro computing, and sleek, functional design.\n\nCurrently, I am wrapping up my Computer Science degree (Expected Dec 2026) and Learning New Concepts.",
    projects: "My Projects:\n\n1. <span style='color: #fff'>[Signature Nail Salon Full-Stack Scheduler]</span>\n   - A professional appointment booking SPA with a robust backend scheduler engine.\n   - Handles complex business logic including timezone awareness, conflict detection, and dynamic multi-service durations.\n   - Tech: React, Django REST Framework, PostgreSQL.\n\n2. <span style='color: #fff'>[NFL Game Predictor: Advanced Efficiency Modeling]</span>\n   - A Machine Learning application predicting NFL outcomes securely using play-by-play Walk-Forward Validation and EPA statistics.\n   - Features interactive dashboard visualizations, contextual rolling stats, and custom power rankings.\n   - Tech: Python, XGBoost, Streamlit, nflreadpy.\n\n3. <span style='color: #fff'>[Weight Tracker Android App]</span>\n   - A mobile application with secure login utilizing a local SQLite database for data persistence.\n   - Features interactive weight history graphs, goal visualization, and automated SMS alerts.\n   - Tech: Java, Android Jetpack, SQLite, Material Design.\n   - Type '<span style='color: #00ccff'>weight-tracker</span>' for full project details.\n\n4. <span style='color: #fff'>[Grazioso Salvare Rescue Animal Dashboard]</span>\n   - A full-stack web application designed to help filter thousands of shelter records to identify dogs for search-and-rescue.\n   - Implements MVC architecture with dynamic data tables, breed pie charts, and geolocation maps.\n   - Tech: Python, Dash by Plotly, Pandas, MongoDB.\n\n5. <span style='color: #fff'>[Deep Q-Learning Pathfinding Agent 🏴☠️]</span>\n   - A Deep Q-Network (DQN) reinforcement learning agent built to autonomously solve a custom 2D grid-world maze environment.\n   - Implements Experience Replay and Target Network synchronization to achieve a 100% win rate.\n   - Tech: Python, TensorFlow, Keras, NumPy, Jupyter.\n\n6. <span style='color: #fff'>[Artemis Financial: Secure Data Transfer System]</span>\n   - A modernization of a public-facing Java web application to ensure client data confidentiality and integrity.\n   - Features HTTPS/TLS encryption, SHA-256 checksum validation, and OWASP Dependency-Check vulnerability management.\n   - Tech: Java, Spring Boot, Maven, JUnit.\n   - Type '<span style='color: #00ccff'>artemis-financial</span>' for full project details.\n\n7. <span style='color: #fff'>[3D Scene Renderer (OpenGL)]</span>\n   - A 3D rendering engine built from scratch using C++ and OpenGL.\n   - Features Advanced Lighting (Phong Shading), Texture Mapping, and a Fly-Cam Camera System.\n   - Tech: C++17, OpenGL, GLFW, GLEW, GLM.\n   - Type '<span style='color: #00ccff'>3d-renderer</span>' for full project details.\n\n8. <span style='color: #fff'>[Terminal Portfolio]</span> <span style='color: #888'>(You are here)</span>\n   - A premium retro-style interactive web terminal.\n   - Built with Vanilla JS, HTML5, CSS3.",
    skills: "Technical Skills:\n\n  <span style='color: #00ccff'>Languages</span>  : Python, JavaScript, Java, HTML/CSS, SQL\n  <span style='color: #00ccff'>Frameworks</span> : React, Django REST, TensorFlow, Keras, Android Jetpack, Streamlit\n  <span style='color: #00ccff'>Tools</span>      : PostgreSQL, MongoDB, SQLite, NumPy, Jupyter, Android Studio, Linux\n  <span style='color: #00ccff'>Concepts</span>   : REST APIs, Deep Learning, Reinforcement Learning, Mobile Dev, Machine Learning, Full-Stack",
    contact: "Let's connect!\n\nEmail    : <a href='mailto:Ledamian355@gmail.com'>Ledamian355@gmail.com</a>\nPhone    : 817-893-7700\nGitHub   : <a href='https://github.com/Damian200211' target='_blank'>github.com/Damian200211</a>\nLinkedIn : <a href='https://www.linkedin.com/in/damianhle' target='_blank'>linkedin.com/in/damianhle</a>",
    sudo: "<span class='error-msg'>Access denied. This incident will be reported.</span>",
    "weight-tracker": "<span style='color: #00ccff'>Weight Tracker App</span>\n\n<span style='color: #fff'>Overview</span>\nThis Android application is a personal weight tracking tool designed to help users monitor their weight, set goals, and visualize their progress. It offers a clean, user-friendly interface built with modern Android design principles, coupled with robust backend functionality for data persistence and personalized user features.\n\n<span style='color: #fff'>DEMO</span>\n<a href='Adobe.Express.-.weightTrackerApp-DEMO.mp4' target='_blank' style='color: #0f0'>Adobe.Express.-.weightTrackerApp-DEMO.mp4</a>\n\n<span style='color: #fff'>Features</span>\n  <span style='color: #0f0'>User Authentication:</span>\n    - Secure login and registration system utilizing a local SQLite database.\n    - User credentials are persistently stored.\n  <span style='color: #0f0'>Weight Tracking Dashboard:</span>\n    - Current Weight Display: A prominent, circular display of the user's latest recorded weight.\n    - Goal Weight & Progress: Dynamically displays the user's set goal weight and visualizes progress towards it with an interactive progress bar.\n    - Weight History Graph: An interactive graph showcasing the user's weight trend over time, with adaptive axis scaling.\n  <span style='color: #0f0'>Data Management:</span>\n    - Add/Edit Weight: Easily add new weight entries or modify existing records with an intuitive input screen.\n    - Weight History List: A dedicated screen provides a detailed list of all recorded weight entries, offering direct options to edit or delete individual records.\n    - Persistent Data: All user and weight data is stored in a local SQLite database, ensuring information is retained across app sessions.\n  <span style='color: #0f0'>Customizable Settings:</span>\n    - Theme Selection: Users can switch between Light and Dark modes, with preferences saved for consistency.\n    - Goal Weight Setting: Allows users to define and update their personal weight goals.\n    - Notification Management: Provides access to SMS permission controls for automated alerts.\n  <span style='color: #0f0'>Automated SMS Notifications:</span>\n    - Permission Handling: Proactively requests necessary SEND_SMS permission at runtime.\n    - Goal Achievement Alerts: Sends a congratulatory SMS when the user reaches their set goal weight (requires granted SMS permission and is sent once per achievement).\n  <span style='color: #0f0'>Modern User Interface:</span>\n    - Adheres to Material Design standards, providing a polished and intuitive user experience.\n    - Features a custom app logo for consistent branding across the launcher and login screen.\n\n<span style='color: #fff'>Technologies Used</span>\n  - <span style='color: #00ccff'>Language:</span> Java\n  - <span style='color: #00ccff'>Build System:</span> Gradle\n  - <span style='color: #00ccff'>UI Toolkit:</span> Android Jetpack (Material Design Components, AppCompat)\n  - <span style='color: #00ccff'>Database:</span> SQLite (managed via SQLiteOpenHelper)\n  - <span style='color: #00ccff'>Graphing Library:</span> com.jjoe64:graphview\n  - <span style='color: #00ccff'>Theme Management:</span> AppCompatDelegate, SharedPreferences\n  - <span style='color: #00ccff'>Permissions:</span> AndroidX ContextCompat, ActivityCompat\n  - <span style='color: #00ccff'>SMS:</span> SmsManager\n\n<span style='color: #fff'>Setup and Installation</span>\n  1. Clone the Repository: <span style='color: #888'>git clone &lt;your-repository-url&gt;</span>\n  2. Open in Android Studio\n  3. Sync and Build\n  4. Run Application\n\n<span style='color: #fff'>License</span>\nThis project is licensed under the MIT License - see the LICENSE file for details.",
    "artemis-financial": "<span style='color: #00ccff'>Artemis Financial: Secure Data Transfer System</span>\n\n<span style='color: #fff'>Overview</span>\nArtemis Financial, a consulting firm, required a modernization of their public-facing web application to ensure the integrity and confidentiality of sensitive client data.\n\nThis project involved refactoring a legacy Java application to integrate industry-standard security protocols. The primary focus was establishing a secure communications channel and implementing data verification mechanisms to prevent Man-in-the-Middle (MitM) attacks and data corruption.\n\n<span style='color: #fff'>Key Security Features Implemented</span>\n  <span style='color: #0f0'>1. Data Integrity (SHA-256 Checksums):</span>\n    - Algorithm: Integrated SHA-256 cryptographic hashing.\n    - Implementation: Developed a ChecksumService to generate unique hash values for data strings.\n    - Verification: Exposed RESTful API endpoints (/api/secure/generate-checksum and /api/secure/verify-checksum) to validate data fidelity in real-time.\n  <span style='color: #0f0'>2. Secure Communication (HTTPS/TLS):</span>\n    - Certificate Management: Generated a self-signed SSL/TLS certificate using Java Keytool.\n    - Configuration: Configured Spring Boot to enforce SSL on port 8443.\n    - Outcome: Verified secure lock icon in browser and encrypted packet transmission.\n  <span style='color: #0f0'>3. Vulnerability Management:</span>\n    - Dependency Scanning: Integrated OWASP Dependency-Check into the Maven build pipeline to identify and mitigate known vulnerabilities (CVEs) in third-party libraries.\n    - Secure Coding Practices: Applied the Principle of Least Privilege and secure configuration management for application.properties.\n\n<span style='color: #fff'>Technical Stack</span>\n  - <span style='color: #00ccff'>Language:</span> Java\n  - <span style='color: #00ccff'>Framework:</span> Spring Boot\n  - <span style='color: #00ccff'>Build Tool:</span> Maven\n  - <span style='color: #00ccff'>Cryptography:</span> SHA-256, SSL/TLS (Java Keytool)\n  - <span style='color: #00ccff'>Testing:</span> JUnit, OWASP Dependency-Check\n  - <span style='color: #00ccff'>IDE:</span> Eclipse / IntelliJ\n\n<span style='color: #fff'>Testing & Verification</span>\n  - <span style='color: #0f0'>Functional Testing:</span> Validated that checksum generation returns consistent hashes for identical inputs.\n  - <span style='color: #0f0'>Security Testing:</span> Attempted to modify data in transit to ensure the checksum verification failed as expected.\n  - <span style='color: #0f0'>Static Analysis:</span> Ran SAST tools to confirm zero high-severity vulnerabilities in the final build.\n\n<span style='color: #fff'>How to Run</span>\n  1. Clone: <span style='color: #888'>git clone https://github.com/Damian200211/Cs-305-Software-security.git</span>\n  2. Navigate: <span style='color: #888'>cd Cs-305-Software-security</span>\n  3. Build: <span style='color: #888'>mvn clean install</span>\n  4. Run: <span style='color: #888'>mvn spring-boot:run</span>\n  5. Access: <span style='color: #888'>https://localhost:8443</span>",
    "3d-renderer": "<span style='color: #00ccff'>3D Scene Renderer (OpenGL)</span>\n\n<span style='color: #fff'>Overview</span>\nThis project is a 3D rendering engine built from scratch using C++ and OpenGL.\n\nThe goal was to replicate a 2D reference image in a fully 3D environment without using pre-made assets. Every object in the scene from the lamp to the donut—is a composite object constructed procedurally by transforming primitive shapes. The engine features a comprehensive lighting system, texture mapping, and a user-controlled camera.\n\n<span style='color: #fff'>Core Features</span>\n  <span style='color: #0f0'>1. Advanced Lighting (Phong Shading):</span>\n    - Implemented the Phong reflection model to simulate realistic light interaction with materials.\n    - Ambient: Global background illumination.\n    - Diffuse: Directional light scattering.\n    - Specular: Shiny highlights on glossy surfaces (like the desk lamp).\n    - Dual Light Sources: Scene includes a main directional light and a secondary colored point light.\n  <span style='color: #0f0'>2. Texture Mapping:</span>\n    - Integrated stb_image to load and wrap 2D textures onto 3D surfaces.\n    - Realistic wood grain on the desk surface.\n    - Detailed textures applied to the donut, cactus, and book cover.\n  <span style='color: #0f0'>3. Camera System:</span>\n    - Fly-Cam: A fully unrestricted camera allowing the user to navigate the 3D space in real-time (Forward, Backward, Strafe, Vertical).\n    - Projection Toggling: Instant switching between Perspective (3D depth) and Orthographic (2D flat) projection matrices.\n\n<span style='color: #fff'>Controls</span>\n  - <span style='color: #00ccff'>Move:</span> W A S D\n  - <span style='color: #00ccff'>Elevation:</span> Q (Up) / E (Down)\n  - <span style='color: #00ccff'>Look:</span> Mouse Movement\n  - <span style='color: #00ccff'>Speed:</span> Mouse Scroll Wheel\n  - <span style='color: #00ccff'>Toggle Projection:</span> P\n  - <span style='color: #00ccff'>Exit:</span> ESC\n\n<span style='color: #fff'>Technical Stack</span>\n  - <span style='color: #00ccff'>Language:</span> C++17\n  - <span style='color: #00ccff'>Graphics API:</span> OpenGL\n  - <span style='color: #00ccff'>Window/Input:</span> GLFW\n  - <span style='color: #00ccff'>Extension Loader:</span> GLEW\n  - <span style='color: #00ccff'>Math Library:</span> GLM (OpenGL Mathematics)\n  - <span style='color: #00ccff'>Texture Loading:</span> stb_image.h\n  - <span style='color: #00ccff'>IDE:</span> Visual Studio 2019/2022"
};

const GLOBE_WIDTH = 32;
const GLOBE_HEIGHT = 16;
const GLOBE_FRAMES = [];

const MAP_W = 40;
const MAP_H = 20;
const MAP_DATA = [
    "........................................",
    "....@@@@@@................@@@@@@@.......",
    "..@@@@@@@@@@...........@@@@@@@@@@@@@....",
    "..@@@@@@@@@@...........@@@@@@@@@@@@@@...",
    "...@@@@@@@@............@@@@@@@@@@@@@@...",
    "....@@@@@@.............@@@@@@@@@@@@@....",
    ".....@@@@...............@@@@@@@@@@@.....",
    ".....@@@..................@@@@@@@@......",
    "......@....................@@@@@@.......",
    "...........................@@@@@........",
    ".......@@..................@@@@.........",
    "......@@@@..................@@..........",
    "......@@@@@.............................",
    ".......@@@@.............................",
    "........@@....................@@@.......",
    ".............................@@@@@......",
    "..............................@@@.......",
    "........................................",
    "........................................",
    "..@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.."
];

for (let i = 0; i < 15; i++) {
    let frame = "";
    const angle = (i / 15) * Math.PI * 2;
    for (let y = 0; y < GLOBE_HEIGHT; y++) {
        let line = "";
        for (let x = 0; x < GLOBE_WIDTH; x++) {
            const nx = (x / GLOBE_WIDTH - 0.5) * 2;
            const ny = (y / GLOBE_HEIGHT - 0.5) * 2;
            const d = nx * nx + ny * ny;
            if (d > 1) {
                line += " ";
            } else {
                const nz = Math.sqrt(1 - d);
                const lon = Math.atan2(nx, nz) + angle;
                const lat = Math.asin(ny);
                
                let u = (lon + Math.PI) / (2 * Math.PI);
                let v = (lat + Math.PI/2) / Math.PI;
                
                u = u - Math.floor(u);
                v = Math.max(0, Math.min(1, v));
                
                let mapX = Math.floor(u * MAP_W) % MAP_W;
                let mapY = Math.floor(v * MAP_H);
                if (mapY >= MAP_H) mapY = MAP_H - 1;
                
                line += MAP_DATA[mapY][mapX];
            }
        }
        frame += line + "\n";
    }
    GLOBE_FRAMES.push(frame);
}

let currentGlobeFrame = 0;
setInterval(() => {
    currentGlobeFrame = (currentGlobeFrame + 1) % GLOBE_FRAMES.length;
    const earthElements = document.querySelectorAll('.ascii-earth');
    earthElements.forEach(el => {
        el.textContent = GLOBE_FRAMES[currentGlobeFrame];
    });
}, 150);

const BOOT_SEQUENCE = [
    `<span class="ascii-art ascii-earth" style='color: #00ccff; display: inline-block; white-space: pre; line-height: 1.2; letter-spacing: 0; min-height: 16em;'></span>`,
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
            setTimeout(() => window.open('https://github.com/Damian200211', '_blank'), 800);
        } else if (lowerCmd === 'resume') {
            this.printResponse("Retrieving securely encrypted resume... <span style='color:#0f0'>[OK]</span>\nOpening document in a new tab.");
            setTimeout(() => window.open('Damian_Le_Resume.pdf', '_blank'), 800);
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
        setTimeout(() => this.printResponse(BOOT_SEQUENCE[3]), 1200);
        setTimeout(() => {
            this.printResponse(BOOT_SEQUENCE[4]);
            this.printResponse(BOOT_SEQUENCE[5]);
        }, 1700);
    }

    scrollToBottom() {
        this.elements.container.scrollTop = this.elements.container.scrollHeight;
    }
}

// Boot up the terminal when the window loads
window.onload = () => {
    new TerminalEmulator();
};
