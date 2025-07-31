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

            if (cmd === 'help') {
                addTerminalLine('Available commands:');
                addTerminalLine('  projects -ls                    # List all projects');
                addTerminalLine('  [project-name] -d              # Show project description');
                addTerminalLine('  [project-name] -t              # Show technologies used');
                addTerminalLine('  [project-name] -l              # Show project link');
                addTerminalLine('  clear                          # Clear terminal');
                addTerminalLine('  help                           # Show this help message');
                addTerminalLine('');
                addTerminalLine('Type "projects -ls" to view all available project names.');
            }

            else if (cmd === 'projects') {
                if (option === '-ls') {
                    addTerminalLine('📁 Available Projects:');
                    Object.keys(projects).forEach((key, index) => {
                        addTerminalLine(`  ${index + 1}. ${key} - ${projects[key].name}`);
                    });
                } else {
                    addTerminalLine('Usage: projects -ls', 'error');
                }
            }

            else if (cmd === 'clear') {
                const lines = terminalOutput.querySelectorAll('.terminal-line:not(.terminal-input-container)');
                lines.forEach(line => line.remove());
            }

            else if (projects.hasOwnProperty(cmd)) {
                const project = projects[cmd];
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
                        addTerminalLine(`🔗 Project Link: <a href="${project.link}" target="_blank">${project.link}</a>`);
                        break;
                    default:
                        addTerminalLine(`Usage: ${cmd} [-d | -t | -l]`, 'error');
                }
            }

            else if (cmd === '') {
                // do nothing on empty input
            }

            else {
                addTerminalLine(`Command not found: ${cmd}. Type 'help' for available commands.`, 'error');
            }

            addTerminalLine('');
        }

        terminalInput.addEventListener('keydown', function (e) {
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

        // LDD Carousel Section
        // LDD Particle Background
createParticles('particles-ldd', 40);

// LDD Cards
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
createParticles('particles-ldd', 60);

// 2. LDD Resources
const lddResources = [
  {
    title: "Python Crash",
    description: "Full Python Bootcamp with mini hands on projects",
    image: "https://i.ytimg.com/vi/t8pPdKYpowI/hq720.jpg",
    link: "https://www.youtube.com/watch?v=t8pPdKYpowI"
  },
  {
    title: "RAG by Langchain",
    description: "RAG from scratch by Langchain",
    image: "https://i.ytimg.com/vi/wd7TZ4w1mSw/hqdefault.jpg",
    link: "https://www.youtube.com/playlist?list=PLfaIDFEXuae2LXbO1_PKyVJiQ23ZztA0x"
  },
  {
    title: "Youtube Clone",
    description: "Youtube Clone by Code with Antonio using Nextjs",
    image: "https://i.ytimg.com/vi/ArmPzvHTcfQ/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=ArmPzvHTcfQ&t=1585s"
  },
  {
    title: "GitHub Guide",
    description: "Git + GitHub full course",
    image: "https://i.ytimg.com/vi/RGOj5yH7evk/hqdefault.jpg",
    link: "https://youtu.be/RGOj5yH7evk"
  },
  {
    title: "Spring Framework by Telusko",
    description: "Java Spring Framework and Springboot",
    image: "https://i.ytimg.com/vi/Zxwq3aW9ctU/hqdefault.jpg",
    link: "https://www.youtube.com/playlist?list=PLsyeobzWxl7qbKoSgR5ub6jolI8-ocxCF"
  },
  {
    title: "Machine Learning Fundamentals",
    description: "Video with Mathematical and Code depth",
    image: "https://i.ytimg.com/vi/bmmQA8A-yUA/hq720.jpg",
    link: "https://www.youtube.com/watch?v=bmmQA8A-yUA"
  },
  {
    title: "Docker Fundamentals",
    description: "Docker, Images and Containers for DevOps",
    image: "https://i.ytimg.com/vi/GFgJkfScVNU/hq720.jpg",
    link: "https://www.youtube.com/watch?v=GFgJkfScVNU"
  },
  {
    title: "Python REST-APIs",
    description: "REST APIs using Python and SQLAlchemy",
    image: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/db27c3bb8351.jpg",
    link: "https://www.youtube.com/watch?v=qbLc5a9jdXo"
  },
  {
    title: "DSA and Problem Solving with C++",
    description: "Striver tutored set of DSA concepts and problems for interviews and work",
    image: "https://i.ytimg.com/vi/xvNwoz-ufXA/hqdefault.jpg",
    link: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz"
  },
  {
    title: "AWS Cloud - SAA",
    description: "Course on SAA certification concept and exam pov",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1716495763631/528c2806-24cf-4feb-8b4b-b2b8310bee88.png",
    link: "https://www.youtube.com/watch?v=NhDYbskXRgc"
  },
  {
    title: "Agentic AI Engineering",
    description: "Recorded workshop of Agentic AI mentored by John Krohn and Ed Dorren",
    image: "https://i.ytimg.com/vi/LSk5KaEGVk4/hq720.jpg",
    link: "https://www.youtube.com/watch?v=LSk5KaEGVk4"
  },
  {
    title: "LLM from scratch",
    description: "LLM from tokenizing towards Fine-Tuning",
    image: "https://i.ytimg.com/vi/Xpr8D6LeAtw/hqdefault.jpg",
    link: "https://www.youtube.com/playlist?list=PLPTV0NXA_ZSgsLAr8YCgCwhPIJNNtexWu"
  },
  {
    title: "Python Django",
    description: "Backend using Django framework with a project",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTXCQuHRbYfFh4-kuWhwQq_mBzSumWU1Cfw&s", 
    link: "https://www.youtube.com/watch?v=PtQiiknWUcI&t=25134s"
  },
  {
    title: "MERN Stack",
    description: "MERN Stack development with a chat app project",
    image: "data:image/jpeg;base64,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",
    link: "https://www.youtube.com/watch?v=ZuwigEmwsTM"
  },
  {
    title: "Linux",
    description: "Linux Basics and terminal operations",
    image: "https://cdn-media-0.freecodecamp.org/2023/02/linux.png",
    link: "https://www.youtube.com/watch?v=sWbUDq4S6Y8&t=98s"
  },
  {
    title: "Oracle University",
    description: "Free Courses in AI, Cloud and Data from Oracle with 2 free certifications",
    image: "https://image.isu.pub/230614152322-4730ba23ee0f325097ab04d6d7268f92/jpg/page_1.jpg", 
    link: "https://education.oracle.com/racetocerttesting?path=afterActivation"
  }
];

const lddTrack = document.getElementById("carouselTrack");
const lddDotsContainer = document.querySelector("#ldd .dots");
const lddLeftArrow = document.querySelector("#ldd .nav-arrow.left");
const lddRightArrow = document.querySelector("#ldd .nav-arrow.right");

let lddCurrentIndex = 0;
let lddAnimating = false;

lddResources.forEach((res) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${res.image}" alt="${res.title}" />
    <div class="title">${res.title}</div>
    <div class="desc">${res.description}</div>
    <a href="${res.link}" target="_blank" class="card-btn">🔗 View Resource</a>
  `;
  lddTrack.appendChild(card);
});

// Create Dots
lddResources.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.className = "dot";
  dot.addEventListener("click", () => updateLDDCarousel(i));
  lddDotsContainer.appendChild(dot);
});

const lddCards = document.querySelectorAll("#ldd .card");
const lddDots = document.querySelectorAll("#ldd .dot");

function updateLDDCarousel(newIndex) {
  if (lddAnimating) return;
  lddAnimating = true;
  lddCurrentIndex = (newIndex + lddCards.length) % lddCards.length;
  lddCards.forEach((card, i) => {
    const offset = (i - lddCurrentIndex + lddCards.length) % lddCards.length;
    card.classList.remove("center", "left-1", "left-2", "right-1", "right-2", "hidden");
    if (offset === 0) card.classList.add("center");
    else if (offset === 1) card.classList.add("right-1");
    else if (offset === 2) card.classList.add("right-2");
    else if (offset === lddCards.length - 1) card.classList.add("left-1");
    else if (offset === lddCards.length - 2) card.classList.add("left-2");
    else card.classList.add("hidden");
  });
  lddDots.forEach((dot, i) => dot.classList.toggle("active", i === lddCurrentIndex));
  setTimeout(() => { lddAnimating = false; }, 800);
}

// Arrows + Init
lddLeftArrow.addEventListener("click", () => updateLDDCarousel(lddCurrentIndex - 1));
lddRightArrow.addEventListener("click", () => updateLDDCarousel(lddCurrentIndex + 1));
lddCards.forEach((card, i) => card.addEventListener("click", () => updateLDDCarousel(i)));

updateLDDCarousel(0);

document.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") updateLDDCarousel(lddCurrentIndex - 1);
  else if (e.key === "ArrowRight") updateLDDCarousel(lddCurrentIndex + 1);
});

let touchStartX = 0, touchEndX = 0;

document.addEventListener("touchstart", e => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", e => {
  touchEndX = e.changedTouches[0].screenX;
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) updateLDDCarousel(lddCurrentIndex + 1);
    else updateLDDCarousel(lddCurrentIndex - 1);
  }
});



