// Create particles effect for all sections
        function createParticles(containerId, count = 60) {
            const particles = document.getElementById(containerId);
            if (!particles) return;
            
            for (let i = 0; i < count; i++) {
                const particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = '2px';
                particle.style.height = '2px';
                particle.style.background = '#4299e1';
                particle.style.borderRadius = '50%';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.opacity = Math.random();
                particle.style.animation = `twinkle ${2 + Math.random() * 2}s infinite`;
                particles.appendChild(particle);
            }
        }

        // Initialize particles for all sections
        createParticles('particles');
        createParticles('particles-about', 40);
        createParticles('particles-skills', 40);
        createParticles('particles-projects', 40);
        createParticles('particles-eduexp', 40);
        createParticles('particles-contact', 40);

        // Terminal functionality
        const projects = {
            "portfolio-site": {
                name: "Personal Portfolio Website",
                description: "A personal portfolio website showcasing projects, skills, education and experience.",
                tech: "HTML, CSS, JavaScript",
                link: "https://github.com/BarathKumarpm/portfolio-site",
                duration: "July 2025"
            },
            "ecomm-llm": {
                name: "E-commerce Recommendation using LLM & RAG",
                description: "RAG-based recommendation engine using LLMs for e-commerce product suggestion.",
                tech: "Python, vector Datababse, RAG, LlamaIndex, HuggingFace",
                link: "https://github.com/BarathKumarpm/Ecomm_RAG-LLM_recommender",
                duration: "Aug 2024 – Nov 2024"
            },
            "lunar-lander": {
                name: "Multi-Agent Reinforcement Learning Lunar Lander",
                description: "Reinforcement learning simulation for multi-agent lunar landings.",
                tech: "Python, PPO, PettingZoo, OpenAI Gym, Multi Agent, Parallel AI agent Simulation",
                link: "https://github.com/BarathKumarpm/Multi_Agent_Lunar_Landing_Sim",
                duration: "Dec 2024 – Apr 2025"
            },
            "interstellar-docking": {
                name: "Interstellar Docking Scene Recreation",
                description: "Recreates the docking scene from Interstellar using 3D graphics.",
                tech: "JavaScript, Three.js",
                link: "https://github.com/BarathKumarpm/Interstellar_Docking_Threejs",
                duration: "Dec 2024"
            },
            "breast-cancer-qsvm": {
                name: "Breast Cancer Prediction with QSVM",
                description: "Quantum machine learning model using QSVM for breast cancer prediction.",
                tech: "Python, Qiskit, Quantum SVM, Quantum ML",
                link: "https://github.com/BarathKumarpm/Breast_Cancer_Prediction_QSVM",
                duration: "Aug 2024 - Nov 2024"
            },
            "chaos-encryption": {
                name: "Social Media Post Encryption",
                description: "Chaos mapping and Arnold transformation for encrypting social media posts.",
                tech: "JavaScript, Image Processing, Chaos Theory, Cryptography",
                link: "https://github.com/BarathKumarpm/Social-Media-Post-Encryption",
                duration: "Aug 2024 - Nov 2024"
            },
            "rubik-cube": {
                name: "3D Rubik’s Cube Simulator",
                description: "A 3D interactive Rubik's Cube simulator with reset and rotation options.",
                tech: "JavaScript, Three.js, CSS",
                link: "https://github.com/BarathKumarpm/RubikSimThreeJs",
                duration: "Aug 2024 - Nov 2024"
            },
            "job-notes-app": {
                name: "Job Application Notes App",
                description: "React app for organizing notes related to job applications.",
                tech: "JavaScript, React, React Hooks",
                link: "https://github.com/BarathKumarpm/JobPrepia-Notes-ReactApp",
                duration: "Aug 2024 - Oct 2024"
            },
            "tour-recommendation": {
                name: "Personalized Tour Recommendation Engine",
                description: "Python project recommending personalized travel destinations.",
                tech: "Python, machine learning - recommendation system",
                link: "https://github.com/BarathKumarpm/TourRecommedations",
                duration: "May 2024"
            },
            "gogo-travels": {
                name: "IWP Travel Website",
                description: "Forked travel website project for the Internet and Web Programming course.",
                tech: "HTML, CSS, SCSS, Node Js, Express Js, MySQL",
                link: "https://github.com/BarathKumarpm/GOGOTravels_IWP",
                duration: "Apr 2024"
            },
            "social-engineering": {
                name: "Email OTP Login Simulation",
                description: "Python login system with OTP-based email authentication simulation.",
                tech: "Python, SMTP, Email Verification, Cyber Security, one factor authetication",
                link: "https://github.com/BarathKumarpm/Social-Engineering-Attacks",
                duration: "Apr 2024"
            },
            "web-scrapy": {
                name: "Chess Rankings Web Scraper",
                description: "Web scraping chess player data and visualizing their rankings.",
                tech: "Python, Pandas, Web Scraping, Matplotlib",
                link: "https://github.com/BarathKumarpm/WebScrapy",
                duration: "Apr 2024"
            }
        };


        const terminalOutput = document.getElementById('terminal-output');
        const terminalInput = document.getElementById('terminal-input');
        const commandHistory = [];
        let historyIndex = -1;

        function addTerminalLine(content, className = 'output') {
            const line = document.createElement('div');
            line.className = `terminal-line ${className}`;
            line.innerHTML = content;
            terminalOutput.insertBefore(line, terminalOutput.lastElementChild);
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }

        function processCommand(command) {
            const args = command.trim().toLowerCase().split(' ');
            const cmd = args[0];
            const option = args[1];

            addTerminalLine(`<span class="prompt">barath@portfolio:~$</span> <span class="command">${command}</span>`);

            switch (cmd) {
                case 'help':
                    addTerminalLine('Available commands:');
                    addTerminalLine('  projects -ls                    # List all projects');
                    addTerminalLine('  [project-name] -d              # Show project description');
                    addTerminalLine('  [project-name] -t              # Show technologies used');
                    addTerminalLine('  [project-name] -l              # Show project link');
                    addTerminalLine('  clear                          # Clear terminal');
                    addTerminalLine('  help                           # Show this help message');
                    addTerminalLine('');
                    addTerminalLine('Available projects: lunar-lander, rubik-cube, ecommerce-llm, chaos-encryption');
                    break;

                case 'projects':
                    if (option === '-ls') {
                        addTerminalLine('📁 Available Projects:');
                        Object.keys(projects).forEach((key, index) => {
                            addTerminalLine(`  ${index + 1}. ${key} - ${projects[key].name}`);
                        });
                    } else {
                        addTerminalLine('Usage: projects -ls', 'error');
                    }
                    break;

                case 'lunar-lander':
                case 'rubik-cube':
                case 'ecommerce-llm':
                case 'chaos-encryption':
                    const project = projects[cmd];
                    if (!project) {
                        addTerminalLine(`Project '${cmd}' not found`, 'error');
                        break;
                    }

                    switch (option) {
                        case '-d':
                            addTerminalLine(`📋 ${project.name}`);
                            addTerminalLine(`Duration: ${project.duration}`);
                            addTerminalLine('');
                            addTerminalLine(project.description);
                            break;
                        case '-t':
                            addTerminalLine(`🛠️ Technologies used in ${project.name}:`);
                            addTerminalLine(project.tech);
                            break;
                        case '-l':
                            addTerminalLine(`🔗 Project Link: ${project.link}`);
                            break;
                        default:
                            addTerminalLine(`Usage: ${cmd} [-d | -t | -l]`, 'error');
                    }
                    break;

                case 'clear':
                    const lines = terminalOutput.querySelectorAll('.terminal-line:not(.terminal-input-container)');
                    lines.forEach(line => line.remove());
                    break;

                case '':
                    break;

                default:
                    addTerminalLine(`Command not found: ${cmd}. Type 'help' for available commands.`, 'error');
            }

            addTerminalLine('');
        }

        terminalInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                const command = this.value;
                if (command.trim()) {
                    commandHistory.unshift(command);
                    processCommand(command);
                }
                this.value = '';
                historyIndex = -1;
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (historyIndex < commandHistory.length - 1) {
                    historyIndex++;
                    this.value = commandHistory[historyIndex];
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (historyIndex > 0) {
                    historyIndex--;
                    this.value = commandHistory[historyIndex];
                } else if (historyIndex === 0) {
                    historyIndex = -1;
                    this.value = '';
                }
            }
        });

        // Queue functionality for Education & Experience
        const experiences = [
            {
                orgName: 'National Informatics Centre',
                orgLogo: 'NIC',
                position: 'Cyber Security Analyst Intern',
                duration: 'Apr 2025 – Jun 2025',
                description: `
                    <p><strong>Technologies:</strong> Kali Linux, Nmap, Metasploit, Burp Suite, OpenVAS</p>
                    <ul>
                        <li>Conducted vulnerability assessments on NIC-TN networks and NKN routers using Nmap, Burp Suite, Metasploit, and OpenVAS</li>
                        <li>Researched malware behaviors and tested 403 bypass of 90% exploit likelihood and auth controls</li>
                        <li>Gained hands-on experience in penetration testing and network security analysis</li>
                    </ul>
                `
            },
            {
                orgName: 'National University of Singapore',
                orgLogo: 'NUS',
                position: 'Academic Research Intern',
                duration: 'Jun 2024 – Jul 2024',
                description: `
                    <p><strong>Technologies:</strong> Big Data Analytics, Machine Learning, Deep Learning, Generative AI, AWS Sagemaker</p>
                    <ul>
                        <li>Gained hands-on experience in Big Data Analytics, Machine Learning, Deep Learning, GANs, and Generative AI</li>
                        <li>Conducted a car damage analysis project using MA-NET segmentation and Detectron2</li>
                        <li>Achieved 81% accuracy with MA-NET and 92% with Detectron2 for damage detection</li>
                    </ul>
                `
            },
            {
                orgName: 'Computational Intelligence Research Foundation',
                orgLogo: 'CIRF',
                position: 'Data Science and Analytics Intern',
                duration: 'Sept 2023 – Nov 2023',
                description: `
                    <p><strong>Technologies:</strong> Data Science, Data Analytics, EDA, Web Scraping</p>
                    <ul>
                        <li>Conducted a research project on chess player rankings using web scraping</li>
                        <li>Identified top 10 classical ratings (2748–2830) and a strong positive correlation between classical and rapid ratings</li>
                        <li>Performed comparative analysis with percentile rankings</li>
                    </ul>
                `
            },
            {
                orgName: 'VIT Chennai, University',
                orgLogo: 'VIT',
                position: 'B.Tech. Computer Science and Engineering',
                duration: '2021 – 2025',
                description: `
                    <p><strong>GPA:</strong> 3.112/4.0</p>
                    <ul>
                        <li>Pursuing Bachelor of Technology in Computer Science and Engineering</li>
                        <li>Focus on Artificial Intelligence, Machine Learning, and Software Development</li>
                        <li>Active participation in research projects and technical competitions</li>
                        <li>Strong foundation in programming, algorithms, and system design</li>
                    </ul>
                `
            }
        ];

        let currentQueueIndex = 0;

        function updateExperienceCard(index) {
            const exp = experiences[index];
            document.getElementById('org-logo').textContent = exp.orgLogo;
            document.getElementById('org-name').textContent = exp.orgName;
            document.getElementById('position').textContent = exp.position;
            document.getElementById('duration').textContent = exp.duration;
            document.getElementById('experience-description').innerHTML = exp.description;

            // Update queue visualization
            const queueItems = document.querySelectorAll('.queue-item');
            queueItems.forEach((item, i) => {
                item.classList.toggle('active', i === index);
            });
        }

        function queueEnqueue() {
            currentQueueIndex = (currentQueueIndex + 1) % experiences.length;
            updateExperienceCard(currentQueueIndex);
        }

        function queueDequeue() {
            currentQueueIndex = (currentQueueIndex - 1 + experiences.length) % experiences.length;
            updateExperienceCard(currentQueueIndex);
        }

        // Queue item click handlers
        document.querySelectorAll('.queue-item').forEach((item, index) => {
            item.addEventListener('click', () => {
                currentQueueIndex = index;
                updateExperienceCard(currentQueueIndex);
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Initialize with first experience
        updateExperienceCard(0);