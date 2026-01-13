export type CourseModule = {
  title: string;
  topics: string[];
};

export type Course = {
  slug: string;
  title: string;
  duration: string;
  level: string;
  summary: string;
  overview: string;
  description: string;
  modules: CourseModule[];
  tools: string[];
  audience: string[];
  outcomes: string[];
  tags: string[];
  price: number;
  lectures: number;
  weeks: number;
  image: string;
};

export const courses: Course[] = [
  {
    slug: "machine-learning",
    title: "Machine Learning with Python",
    duration: "7 Weeks",
    level: "Intermediate",
    price: 6000,
    lectures: 25,
    weeks: 7,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    summary:
      "Master machine learning algorithms and build intelligent systems using Python and industry-standard libraries.",
    overview:
      "A comprehensive program covering supervised and unsupervised learning, neural networks and real-world ML applications.",
    description:
      "Learn to design, train and deploy machine learning models. Work with popular frameworks like scikit-learn, TensorFlow and implement ML solutions for various domains.",
    modules: [
      {
        title: "Introduction to Machine Learning and Python",
        topics: [
          "Intro to ML & Python Basics",
          "Python Operators & Control Structures",
          "OOP & Functional Programming",
          "Python Modules & Packages",
          "IMPLEMENTATION IN GOOGLE COLABORATORY",
        ],
      },
      {
        title: "Data Analysis and Supervised Learning",
        topics: [
          "Exploratory Data Analysis",
          "Supervised Learning: Regression",
          "Classification: Logistic & k-NN",
          "SVM",
          "Decision Tree & Random Forest",
        ],
      },
      {
        title: "Unsupervised Learning and Implementation",
        topics: [
          "Unsupervised Learning",
          "ML Implementation in Python",
        ],
      },
      {
        title: "Deep Learning Foundations",
        topics: [
          "Deep Learning & Backpropagation",
          "ANN & Python Implementation",
        ],
      },
      {
        title: "Advanced Neural Networks",
        topics: [
          "Convolutional Neural Networks",
          "CNN Implementation in Python",
          "Recurrent Neural Networks & LSTM",
          "LSTM Implementation in Python",
        ],
      },
      {
        title: "Specialized Topics in AI",
        topics: [
          "Natural Language Processing",
          "Time Series Analysis & Forecasting",
          "Deep Learning Frameworks",
          "Model Deployment",
        ],
      },
      {
        title: "Projects",
        topics: [
          "Minor Project",
          "Major Project",
        ],
      },
    ],
    tools: ["Python", "scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy"],
    audience: [
      "Software developers transitioning to ML",
      "Data analysts seeking ML skills",
      "Students pursuing AI careers",
    ],
    outcomes: [
      "Build end-to-end ML pipelines",
      "Deploy ML models in production",
      "Portfolio of ML projects",
    ],
    tags: ["ML", "Python", "AI"],
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    duration: "9 Weeks",
    level: "Advanced",
    price: 6000,
    lectures: 25,
    weeks: 9,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    summary:
      "Explore AI fundamentals, deep learning, computer vision and NLP to build intelligent applications.",
    overview:
      "Comprehensive AI training covering neural networks, reinforcement learning and cutting-edge AI technologies.",
    description:
      "Master artificial intelligence concepts and techniques. Build intelligent systems using deep learning, computer vision and natural language processing.",
    modules: [
      {
        title: "Introduction to AI and Python",
        topics: [
          "AI Evolution & Classification",
          "Python Basics & Visualization",
          "Key Python Concepts",
        ],
      },
      {
        title: "Mathematical Foundations",
        topics: [
          "Linear Algebra - Part 1",
          "Linear Algebra - Part 2",
          "Dot Product",
          "Statistics - Part 1",
          "Statistics - Part 2",
        ],
      },
      {
        title: "Data Visualization",
        topics: [
          "Data Visualization Basics",
          "Data Visualization Techniques",
        ],
      },
      {
        title: "Introduction to Machine Learning",
        topics: [
          "Intro to Machine Learning & Life Cycle",
        ],
      },
      {
        title: "Supervised Learning",
        topics: [
          "Linear Regression - Part 1",
          "Linear Regression - Part 2",
          "Logistic Regression",
          "Decision Tree Algorithm",
          "Random Forest Algorithm",
        ],
      },
      {
        title: "Unsupervised Learning",
        topics: [
          "Unsupervised Learning: K-Means",
        ],
      },
      {
        title: "Natural Language Processing (NLP)",
        topics: [
          "Natural Language Processing - Part 1",
          "Natural Language Processing - Part 2",
        ],
      },
      {
        title: "Neural Networks and Deep Learning",
        topics: [
          "AI in Real World & Neural Networks",
          "Neural Networks - Part 1",
          "Neural Networks - Part 2",
          "Neural Networks - Part 3",
        ],
      },
      {
        title: "Advanced Neural Networks and AI Techniques",
        topics: [
          "CNN, RNN & Reinforcement Learning",
          "LSTM,Reinforcement Learning & Computer Vision",
        ],
      },
    ],
    tools: ["Python", "PyTorch", "TensorFlow", "OpenCV", "Hugging Face", "NLTK"],
    audience: [
      "ML engineers advancing to AI",
      "Researchers in AI domains",
      "Tech professionals",
    ],
    outcomes: [
      "Build AI-powered applications",
      "Implement deep learning models",
      "AI project portfolio",
    ],
    tags: ["AI", "Deep Learning", "NLP"],
  },
  {
    slug: "data-science",
    title: "Data Science",
    duration: "7 Weeks",
    level: "Intermediate",
    price: 6000,
    lectures: 26,
    weeks: 7,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    summary:
      "Transform data into insights with statistical analysis, visualization and predictive modeling.",
    overview:
      "Complete data science program from data wrangling to advanced analytics and visualization.",
    description:
      "Learn data science workflow: collect, clean, analyze and visualize data. Build predictive models and communicate insights effectively.",
    modules: [
      {
        title: "Introduction and Python Basics",
        topics: [
          "Course Introduction",
          "Python Basics and Data Structures",
        ],
      },
      {
        title: "Data Collection and Preprocessing",
        topics: [
          "Data Collection and Sources",
          "Descriptive Stats and Data Visualization",
          "Data Collection and Preprocessing Details",
        ],
      },
      {
        title: "Math for Data Science",
        topics: [
          "Data Preprocessing and Feature Engineering",
        ],
      },
      {
        title: "Supervised and Unsupervised Learning",
        topics: [
          "Supervised Learning Overview",
          "Supervised Learning Algorithms",
          "Unsupervised Learning Overview",
          "Clustering Techniques",
        ],
      },
      {
        title: "Time Series and Case Studies",
        topics: [
          "Case Study",
          "Time Series Analysis",
          "ARIMA and SARIMA Models",
        ],
      },
      {
        title: "Text and Sentiment Analysis",
        topics: [
          "Text Preprocessing and Mining",
          "Sentiment Analysis - Part 1",
          "Sentiment Analysis - Part 2",
        ],
      },
      {
        title: "Neural Networks and Deep Learning",
        topics: [
          "Neural Networks Basics",
          "Deep Learning Introduction",
          "Neural Networks Architectures",
          "Deep Learning and Reinforcement Learning - Part 1",
          "Deep Learning and Reinforcement Learning - Part 2",
          "Deep Learning and Reinforcement Learning - Part 3",
          "Deep Learning and Reinforcement Learning - Part 4",
        ],
      },
      {
        title: "Ethics and Data Visualization",
        topics: [
          "Ethics in Data Handling",
          "Data Visualization and Communication",
        ],
      },
    ],
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SQL"],
    audience: [
      "Analysts transitioning to data science",
      "Business professionals",
      "Students in data fields",
    ],
    outcomes: [
      "Data science project portfolio",
      "Statistical analysis expertise",
      "Visualization dashboards",
    ],
    tags: ["Data Science", "Analytics", "Python"],
  },
  {
    slug: "web-development",
    title: "Web Development (HTML, CSS, JavaScript, Bootstrap)",
    duration: "10 Weeks",
    level: "Beginner",
    price: 6000,
    lectures: 25,
    weeks: 10,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    summary:
      "Build modern, responsive websites with HTML, CSS, JavaScript and Bootstrap framework.",
    overview:
      "Comprehensive web development course covering frontend technologies and responsive design principles.",
    description:
      "Learn to create beautiful, responsive websites from scratch. Master HTML5, CSS3, JavaScript ES6+ and Bootstrap for professional web development.",
    modules: [
      {
        title: "Web Development Basics",
        topics: [
          "Introduction to Web Development",
          "HTML Lists and Forms",
          "CSS Fundamentals",
        ],
      },
      {
        title: "Introduction to CSS",
        topics: [
          "CSS Colors",
          "CSS Backgrounds and Borders",
          "Margins, Padding and Box Model",
        ],
      },
      {
        title: "Advanced CSS",
        topics: [
          "Box Model and Text Properties",
          "Text Styling in CSS",
          "Advanced Text Styling",
        ],
      },
      {
        title: "CSS Layout and Positioning",
        topics: [
          "CSS Layout Techniques",
          "Z-Index, Overflow and Float",
          "Advanced Layout Techniques",
        ],
      },
      {
        title: "Display, Alignment and Pseudo-Classes",
        topics: [
          "Pseudo-Elements and Media Queries",
          "Responsive Design",
          "Responsive Design and Media Queries",
        ],
      },
      {
        title: "JavaScript Basics",
        topics: [
          "JavaScript Introduction",
          "Variables and Operators",
          "Functions and Control Structures",
        ],
      },
      {
        title: "Advanced JavaScript",
        topics: [
          "Functions and Arrays",
          "Control Structures and Loops",
          "Arrow Functions and Classes",
        ],
      },
      {
        title: "DOM Manipulation",
        topics: [
          "JavaScript Classes and DOM",
          "jQuery and GitHub",
          "jQuery Selectors",
        ],
      },
      {
        title: "jQuery DOM and GitHub",
        topics: [
          "Backend Development Basics",
        ],
      },
    ],
    tools: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Git", "VS Code"],
    audience: [
      "Beginners in web development",
      "Designers learning to code",
      "Career switchers",
    ],
    outcomes: [
      "Build responsive websites",
      "Portfolio website",
      "Modern web development skills",
    ],
    tags: ["Web Dev", "HTML", "CSS", "JavaScript"],
  },
  {
    slug: "cloud-computing",
    title: "Cloud Computing",
    duration: "9 Weeks",
    level: "Intermediate",
    price: 6000,
    lectures: 24,
    weeks: 9,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    summary:
      "Master cloud platforms, deployment strategies and scalable infrastructure management.",
    overview:
      "Learn cloud computing concepts, AWS services and deploy applications on cloud infrastructure.",
    description:
      "Gain hands-on experience with cloud platforms. Learn to design, deploy and manage applications using AWS, Docker and Kubernetes.",
    modules: [
      {
        title: "Introduction to Cloud Computing",
        topics: [
          "Intro to Cloud Computing & Service Models",
          "Deployment Models & AWS Overview",
          "AWS Infrastructure & Account Setup",
        ],
      },
      {
        title: "Compute Services",
        topics: [
          "Amazon EC2 & Compute Services",
          "Creating EC2 Instances & AMI",
          "AWS Lambda & Elastic Beanstalk",
        ],
      },
      {
        title: "Scaling and Load Balancing",
        topics: [
          "Auto Scaling & Policies",
          "Load Balancers & Migration",
          "Roles, Policies & Load Balancer Types",
        ],
      },
      {
        title: "Cloud Storage and Networking",
        topics: [
          "AWS S3 & Storage Services",
          "Block Storage & EFS",
          "Amazon Glacier & Storage Gateway",
          "Virtual Private Cloud & Networking",
        ],
      },
      {
        title: "Domain and Database Services",
        topics: [
          "AWS Route 53 & Direct Connect",
          "Relational & Non-Relational Databases",
          "AWS Database Migration Service & IAM",
        ],
      },
      {
        title: "Security and Monitoring",
        topics: [
          "AWS Shield & Cloud Security",
          "AWS CloudTrail & Compliance",
        ],
      },
      {
        title: "DevOps and CI/CD Pipelines",
        topics: [
          "CI/CD Pipelines & AWS CodeDeploy",
          "Infrastructure as Code & Terraform",
        ],
      },
      {
        title: "Cloud Analytics and Machine Learning",
        topics: [
          "Cloud Analytics & Containerization",
          "Amazon QuickSight & Cloud ML",
          "Amazon Lex & AI in Cloud",
        ],
      },
      {
        title: "AWS Migration and Best Practices",
        topics: [
          "AWS Migration Hub & Snowball",
        ],
      },
    ],
    tools: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Git"],
    audience: [
      "DevOps engineers",
      "Backend developers",
      "System administrators",
    ],
    outcomes: [
      "Deploy cloud applications",
      "Container orchestration skills",
      "Cloud infrastructure management",
    ],
    tags: ["Cloud", "AWS", "DevOps"],
  },
  {
    slug: "iot-embedded-systems",
    title: "Internet of Things (IOT)",
    duration: "10 Weeks",
    level: "Intermediate",
    price: 6000,
    lectures: 28,
    weeks: 10,
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
    summary:
      "Design resilient edge hardware, sensor fusion and low-power firmware aligned with industrial deployments.",
    overview:
      "Learners connect PCB design, MCU programming and cloud telemetry to mirror the hardware programs built for Reinternspark clients.",
    description:
      "Starting from requirements, teams architect sensor stacks, implement firmware and surface data in a telemetry cockpit with alerting hooks.",
    modules: [
      {
        title: "IOT Basics and Evolution",
        topics: [
          "Introduction to IOT",
          "IOT Evolution and Importance",
          "IOT Applications",
          "IOT Challenges and Opportunities",
        ],
      },
      {
        title: "IOT Networking and Connectivity",
        topics: [
          "Networking Basics in IOT",
          "IOT Connectivity Modules",
          "Short and Long-Range IOT Communication",
          "IOT Application Layer Protocols",
        ],
      },
      {
        title: "IOT and Cloud Platforms",
        topics: [
          "Cloud Platforms in IOT",
          "IOT Data Collection and Processing",
        ],
      },
      {
        title: "IOT Security and Device Management",
        topics: [
          "IOT Security Overview",
          "IOT Device Management",
        ],
      },
      {
        title: "Edge and Fog Computing in IOT",
        topics: [
          "Edge Computing in IOT",
          "Fog Computing in IOT",
        ],
      },
      {
        title: "IOT Applications in Industries",
        topics: [
          "Smart Manufacturing in IOT",
          "Smart Cities and IOT Applications",
          "IOT in Healthcare",
          "Smart Farming with IOT",
        ],
      },
      {
        title: "IOT Optimization and Design",
        topics: [
          "Power and Data Optimization in IOT",
          "IOT Product Design and Prototyping",
        ],
      },
      {
        title: "Advanced IOT Technologies",
        topics: [
          "IOT and AR/VR Integration",
          "IOT and Big Data",
          "Blockchain in IOT Security",
          "Blockchain in IOT Privacy",
        ],
      },
      {
        title: "IOT Privacy and Security",
        topics: [
          "Privacy Enhancing Technologies in IOT",
          "Cryptography in IOT",
        ],
      },
      {
        title: "IOT and Digital Transformation",
        topics: [
          "IOT Network Architecture",
          "IOT and Digital Transformation",
        ],
      },
    ],
    tools: ["Arduino", "ESP32", "Raspberry Pi", "MQTT", "AWS IOT", "Node-RED"],
    audience: [
      "Embedded developers",
      "Hardware startups",
      "Academia-industry research fellows",
    ],
    outcomes: [
      "Production-ready firmware repo",
      "IOT solution architecture",
      "Connected device projects",
    ],
    tags: ["IOT", "Embedded", "Hardware"],
  },
  {
    slug: "robotics-automation-track",
    title: "Robotics",
    duration: "10 Weeks",
    level: "Advanced",
    price: 6000,
    lectures: 25,
    weeks: 10,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    summary:
      "Engineer autonomous systems that blend sensing, actuation and control for industrial robots.",
    overview:
      "Join Reinternspark's robotics engineers to integrate ROS2 stacks, safety layers and AI perception for collaborative robots.",
    description:
      "Learners work on mini drone, smart helmet and fire-fighting robot case studies transferring from simulation to hardware rigs.",
    modules: [
      {
        title: "Introduction to Robotics",
        topics: [
          "Introduction & History of Robotics",
          "Mechanical Components & Power Systems",
          "End Effectors & 3D Printing in Robotics",
        ],
      },
      {
        title: "Kinematics and Control Systems",
        topics: [
          "Kinematics & Motion Control",
          "Degrees of Freedom & Dynamic Control",
          "Control & Trajectory Planning",
        ],
      },
      {
        title: "Robotics Programming",
        topics: [
          "Intro to Robot Programming Languages",
          "Control Structures & Debugging",
        ],
      },
      {
        title: "Microcontrollers and Interfacing",
        topics: [
          "Microcontrollers & I/O Interfaces",
          "Sensor & Actuator Interfacing",
        ],
      },
      {
        title: "Computer Vision and AI",
        topics: [
          "Computer Vision & Object Recognition",
          "Camera Calibration & 3D Vision",
        ],
      },
      {
        title: "Machine Learning in Robotics",
        topics: [
          "Learning Techniques & Neural Networks",
        ],
      },
      {
        title: "Mapping, Localization and Interaction",
        topics: [
          "Mapping, Localization & Obstacle Avoidance",
          "Human-Robot Interaction & Interfaces",
        ],
      },
      {
        title: "Emotional Intelligence and IOT",
        topics: [
          "Emotional Intelligence & Ethics in Robotics",
          "IOT Integration & Cloud Robotics",
        ],
      },
      {
        title: "Simulation and CAD Tools",
        topics: [
          "Simulation Tools & Virtual Prototyping",
          "CAD Integration & Simulation Benefits",
        ],
      },
      {
        title: "Industrial and Specialized Robots",
        topics: [
          "Industrial Robots & Automation",
          "Robotics in Healthcare",
          "Educational Robots & Ethics",
        ],
      },
      {
        title: "Entrepreneurship in Robotics",
        topics: [
          "Robotics Startups & Entrepreneurship",
          "IP Market Insights (IMI)",
        ],
      },
    ],
    tools: ["ROS2", "Gazebo", "Arduino", "Python", "MATLAB", "Simulink"],
    audience: [
      "Robotics engineers",
      "Autonomous vehicle researchers",
      "Industry R&D leaders",
    ],
    outcomes: [
      "Robotics deployment dossier",
      "Simulation-to-hardware workflow",
      "Safety validation checklist",
    ],
    tags: ["Robotics", "Automation", "AI"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    duration: "10 Weeks",
    level: "Beginner",
    price: 6000,
    lectures: 25,
    weeks: 10,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    summary:
      "Master digital marketing strategies, SEO, social media and content marketing for business growth.",
    overview:
      "Comprehensive digital marketing program covering all aspects of online marketing and brand building.",
    description:
      "Learn to create effective digital marketing campaigns, optimize for search engines and leverage social media for brand growth.",
    modules: [
      {
        title: "Introduction to Digital Marketing",
        topics: [
          "Intro to Digital Marketing",
          "Digital vs. Traditional Marketing",
        ],
      },
      {
        title: "Website and SEO Optimization",
        topics: [
          "Website Creation and UX/UI",
          "SEO and Mobile Optimization",
        ],
      },
      {
        title: "Content and Video Marketing",
        topics: [
          "Content Marketing Basics",
          "Video and Podcast Marketing",
        ],
      },
      {
        title: "Social Media Marketing",
        topics: [
          "Social Media Marketing Overview",
          "Social Media Advertising",
        ],
      },
      {
        title: "Search Engine Marketing (SEM)",
        topics: [
          "Intro to SEM and PPC",
          "Keyword Research and Ad Copywriting",
        ],
      },
      {
        title: "Email and Affiliate Marketing",
        topics: [
          "Email Marketing Basics",
          "Email Automation and Metrics",
          "Affiliate and Influencer Marketing",
        ],
      },
      {
        title: "Advertising and Programmatic Marketing",
        topics: [
          "Building Marketing Partnerships",
          "Online and Display Ads",
          "Programmatic Advertising",
        ],
      },
      {
        title: "E-commerce and Mobile Marketing",
        topics: [
          "Video Marketing and SEO",
          "E-commerce and Mobile Marketing",
          "Mobile Ads and CRM",
        ],
      },
      {
        title: "Data and Analytics in Marketing",
        topics: [
          "Analytics and Data-Driven Marketing",
          "Conversion Rate Optimization",
        ],
      },
      {
        title: "Advanced Digital Marketing Strategies",
        topics: [
          "Digital Marketing Strategy and Case Studies",
          "Chatbots and AR/VR Marketing",
          "Voice Search and Blockchain",
          "Data Privacy and Marketing Ethics",
        ],
      },
    ],
    tools: ["Google Analytics", "SEMrush", "Hootsuite", "Canva", "WordPress", "Mailchimp"],
    audience: [
      "Marketing professionals",
      "Business owners",
      "Career switchers",
    ],
    outcomes: [
      "Digital marketing campaigns",
      "SEO optimized content",
      "Social media strategy",
    ],
    tags: ["Marketing", "SEO", "Social Media"],
  },
  {
    slug: "ethical-hacking",
    title: "Ethical Hacking",
    duration: "9 Weeks",
    level: "Advanced",
    price: 6000,
    lectures: 25,
    weeks: 9,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    summary:
      "Learn cybersecurity fundamentals, penetration testing and ethical hacking techniques to protect systems.",
    overview:
      "Comprehensive ethical hacking course covering vulnerability assessment, penetration testing and security best practices.",
    description:
      "Master ethical hacking skills and learn to identify vulnerabilities, conduct penetration tests and secure systems against cyber threats.",
    modules: [
      {
        title: "Introduction to Ethical Hacking",
        topics: [
          "Ethical Hacking Overview",
          "Hacking Types",
          "Testing vs Assessment",
          "Hacking Tools and Nmap demo",
        ],
      },
      {
        title: "Information Gathering and Social Engineering",
        topics: [
          "Information Gathering",
          "Social Engineering Basics",
          "Social Engineering Defense",
        ],
      },
      {
        title: "Scripting and Web Exploits",
        topics: [
          "Bash Scripting",
          "XSS Exploitation",
        ],
      },
      {
        title: "Cryptography and Secure Communication",
        topics: [
          "Cryptography Basics",
          "Secure Communication",
          "Applied Cryptography",
        ],
      },
      {
        title: "Malware Analysis",
        topics: [
          "Malware Fundamentals",
          "Malware Analysis",
          "Advanced Malware",
        ],
      },
      {
        title: "DDoS Attacks and Prevention",
        topics: [
          "DDoS and Anonymity",
          "DDoS Prevention (Part 1)",
          "DDoS Prevention (Part 2)",
        ],
      },
      {
        title: "Mobile Device Security",
        topics: [
          "Mobile Security (Part 1)",
          "Mobile Security (Part 2)",
          "Mobile Security (Part 3)",
        ],
      },
      {
        title: "Secure Development and IOT Security",
        topics: [
          "Secure Development",
          "IOT Security Basics",
          "Advanced IOT Security",
        ],
      },
      {
        title: "Legal and Compliance in Cybersecurity",
        topics: [
          "Cybersecurity Compliance",
        ],
      },
    ],
    tools: ["Kali Linux", "Metasploit", "Wireshark", "Burp Suite", "Nmap", "Aircrack-ng"],
    audience: [
      "Security professionals",
      "Network administrators",
      "IT security enthusiasts",
    ],
    outcomes: [
      "Penetration testing skills",
      "Security vulnerability assessment",
      "Ethical hacking certification prep",
    ],
    tags: ["Security", "Hacking", "Cybersecurity"],
  },
  {
    slug: "java-programming",
    title: "Java",
    duration: "7 Weeks",
    level: "Intermediate",
    price: 6000,
    lectures: 25,
    weeks: 7,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    summary:
      "Master Java programming from fundamentals to advanced concepts including OOP, collections and frameworks.",
    overview:
      "Comprehensive Java programming course covering core concepts, object-oriented programming and enterprise development.",
    description:
      "Learn Java programming from scratch and build robust applications using object-oriented principles, collections and popular frameworks.",
    modules: [
      {
        title: "Java Fundamentals",
        topics: [
          "Java Intro and Setup",
          "Java Basics and Installation",
          "Operators, Type Casting and Enums",
          "Control Flow in Java",
        ],
      },
      {
        title: "Object-Oriented Programming",
        topics: [
          "Classes, Objects and Methods",
          "Constructors and Encapsulation",
          "this, super, Abstract Classes, Interfaces",
          "Adapter Classes and Polymorphism",
        ],
      },
      {
        title: "Advanced Object-Oriented Concepts",
        topics: [
          "Packages and Static Blocks",
          "Arrays and Multi-Dimensional Arrays",
          "Collections: List, Set, Map",
          "Generics and Generic Classes",
        ],
      },
      {
        title: "Error Handling and File Management",
        topics: [
          "Error vs Exception Handling",
          "Custom Exceptions",
          "Final, Finally, Finalize",
          "File Handling and Serialization",
        ],
      },
      {
        title: "GUI Development",
        topics: [
          "JavaFX and Swing Basics",
          "Event Handling in Java",
        ],
      },
    ],
    tools: ["Java", "IntelliJ IDEA", "Eclipse", "Maven", "JUnit", "Spring"],
    audience: [
      "Programming beginners",
      "Computer science students",
      "Backend developers",
    ],
    outcomes: [
      "Java application development",
      "Object-oriented programming mastery",
      "Enterprise Java skills",
    ],
    tags: ["Java", "Programming", "Backend"],
  },
  {
    slug: "react-development",
    title: "React",
    duration: "10 Weeks",
    level: "Intermediate",
    price: 6000,
    lectures: 25,
    weeks: 10,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    summary:
      "Build modern, interactive web applications with React, hooks, state management and component architecture.",
    overview:
      "Complete React.js course covering hooks, component lifecycle, state management and modern frontend development.",
    description:
      "Master React.js and build dynamic single-page applications. Learn hooks, Redux, routing and best practices for modern web development.",
    modules: [
      {
        title: "Introduction to React",
        topics: [
          "React Overview & Setup",
          "Functional vs Class Components & Lifecycle",
          "Styling: Inline, CSS Modules, Theming",
        ],
      },
      {
        title: "Handling Forms and State",
        topics: [
          "Forms, Validation & Custom Hooks",
          "State Management: useState, useReducer, Redux",
        ],
      },
      {
        title: "useEffect and API Calls",
        topics: [
          "useEffect & API Calls - Part 1",
          "useEffect & API Calls - Part 2",
        ],
      },
      {
        title: "React Router and Navigation",
        topics: [
          "React Router: Routes & Navigation",
        ],
      },
      {
        title: "Testing in React",
        topics: [
          "Testing: Jest & React Testing Library - Part 1",
          "Testing: Unit & Integration - Part 2",
          "Integration Testing Mastery",
        ],
      },
      {
        title: "Performance Optimization",
        topics: [
          "Performance Optimization: useMemo, Lazy Loading - Part 1",
          "Performance Debugging & Code Splitting - Part 2",
        ],
      },
      {
        title: "Server-Side Rendering and Libraries",
        topics: [
          "SSR with Next.js & SEO",
          "Third-Party Libraries: UI & Charts - Part 1",
          "Third-Party Libraries & Accessibility - Part 2",
        ],
      },
      {
        title: "TypeScript and Production",
        topics: [
          "TypeScript with React: Basics & Best Practices",
          "Building for Production: CI/CD & Monitoring",
        ],
      },
      {
        title: "Advanced Component Patterns",
        topics: [
          "Advanced Patterns: Compound, Render Props, HOC",
        ],
      },
      {
        title: "Projects",
        topics: [
          "Mini Project - Part 1",
          "Mini Project - Part 2",
          "Major Project - Part 1",
          "Major Project - Part 2",
          "Major Project - Part 3",
          "Major Project - Part 4",
        ],
      },
    ],
    tools: ["React", "Redux", "React Router", "Axios", "Webpack", "Vite"],
    audience: [
      "Frontend developers",
      "Web developers",
      "JavaScript programmers",
    ],
    outcomes: [
      "React application portfolio",
      "State management expertise",
      "Modern frontend skills",
    ],
    tags: ["React", "Frontend", "JavaScript"],
  },
  {
    slug: "full-stack-development",
    title: "Full Stack (React, Django, MySQL)",
    duration: "8 Weeks",
    level: "Advanced",
    price: 6000,
    lectures: 25,
    weeks: 8,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
    summary:
      "Become a full-stack developer with React frontend, Django backend and MySQL database integration.",
    overview:
      "End-to-end full-stack development program covering modern frontend, robust backend and database management.",
    description:
      "Learn to build complete web applications with React, Django and MySQL. Master frontend, backend and database development.",
    modules: [
      {
        title: "Web Development Foundations",
        topics: [
          "Web Development Overview",
          "HTML Basics and Forms",
          "HTML Tables and Attributes",
        ],
      },
      {
        title: "CSS and Responsive Design",
        topics: [
          "CSS Basics and Selectors",
          "Box Model and Media Queries",
        ],
      },
      {
        title: "JavaScript Fundamentals",
        topics: [
          "JavaScript Basics",
          "Loops, Functions and DOM",
          "Async and Promises",
        ],
      },
      {
        title: "React and Frontend Frameworks",
        topics: [
          "Project Setup and Structure",
          "React Hooks and Project Building",
          "React Router and Hooks",
          "Context API and Props",
        ],
      },
      {
        title: "Databases and SQL",
        topics: [
          "Database Overview: NoSQL vs SQL",
          "SQL Queries and Database Design",
          "Database Queries and GUI",
        ],
      },
      {
        title: "Python and OOP Concepts",
        topics: [
          "Python Introduction",
          "Python Data Types and Loops",
          "OOP Concepts",
          "OOP and Best Practices",
        ],
      },
      {
        title: "Django and Backend Development",
        topics: [
          "Django Introduction",
          "Building Models and Views",
          "Advanced Views and Sessions",
          "Generics and Serializers",
        ],
      },
      {
        title: "Deployment and Tools",
        topics: [
          "Axios and Connections",
          "GitHub and Deployment",
        ],
      },
    ],
    tools: ["React", "Django", "MySQL", "REST API", "Git", "Docker"],
    audience: [
      "Web developers",
      "Backend developers",
      "Full-stack aspirants",
    ],
    outcomes: [
      "Full-stack web applications",
      "End-to-end development skills",
      "Production-ready projects",
    ],
    tags: ["Full Stack", "React", "Django"],
  },
  {
    slug: "embedded-systems",
    title: "Embedded Systems",
    duration: "10 Weeks",
    level: "Advanced",
    price: 6000,
    lectures: 26,
    weeks: 10,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    summary:
      "Design and program embedded systems with microcontrollers, sensors and real-time operating systems.",
    overview:
      "Comprehensive embedded systems course covering hardware interfacing, firmware development and RTOS implementation.",
    description:
      "Learn embedded systems design and development. Work with microcontrollers, sensors, actuators and build real-world embedded applications.",
    modules: [
      {
        title: "Introduction to Embedded Systems",
        topics: [
          "Embedded Systems Overview",
          "Microcontrollers vs Microprocessors",
        ],
      },
      {
        title: "Electronics and Circuit Design",
        topics: [
          "Digital and Analog Electronics Basics",
          "Circuit Design and Prototyping",
        ],
      },
      {
        title: "Programming for Embedded Systems",
        topics: [
          "Intro to C and C++",
          "Syntax, Variables and Functions",
          "Compiling and Debugging Code",
        ],
      },
      {
        title: "Microcontroller Architecture and Peripherals",
        topics: [
          "CPU, Memory and IO Peripherals",
          "Clock Systems and Timers",
          "Microcontroller Architecture",
        ],
      },
      {
        title: "Interfacing with Peripherals",
        topics: [
          "PWM and Motor Control",
          "Communication Protocols (UART, SPI, I2C)",
        ],
      },
      {
        title: "Embedded Software and Real-Time Systems",
        topics: [
          "Embedded Software and RTOS",
          "Task Scheduling and Memory Optimization - 1",
          "Task Scheduling and Memory Optimization - 2",
        ],
      },
      {
        title: "Sensors and Actuators in Embedded Systems",
        topics: [
          "Sensors and Actuators",
          "Sensor Data and IOT",
        ],
      },
      {
        title: "Communication and Networking",
        topics: [
          "Wireless Communication (Bluetooth, WiFi, Zigbee)",
          "Networking Protocols and Security",
        ],
      },
      {
        title: "Power Management in Embedded Systems",
        topics: [
          "Power Supply and Voltage Regulation",
          "Battery Management and Energy Harvesting",
        ],
      },
      {
        title: "System Co-Design and PCB",
        topics: [
          "System Co-Design",
          "PCB Design and Manufacturing",
        ],
      },
      {
        title: "Safety and Standards in Embedded Systems",
        topics: [
          "Safety, Compliance and Standards",
        ],
      },
    ],
    tools: ["Arduino", "ARM Cortex", "FreeRTOS", "Keil", "MPLAB", "Proteus"],
    audience: [
      "Electronics engineers",
      "Embedded developers",
      "Firmware engineers",
    ],
    outcomes: [
      "Embedded system projects",
      "Firmware development skills",
      "RTOS implementation",
    ],
    tags: ["Embedded", "Microcontrollers", "Hardware"],
  },
  {
    slug: "electric-vehicles",
    title: "Hybrid and Electric Vehicles",
    duration: "10 Weeks",
    level: "Advanced",
    price: 6000,
    lectures: 25,
    weeks: 10,
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    summary:
      "Explore electric vehicle technology, battery systems, power electronics and sustainable transportation.",
    overview:
      "Advanced course on EV technology covering battery management, motor control and hybrid vehicle systems.",
    description:
      "Master electric and hybrid vehicle technology. Learn about battery systems, power electronics, motor control and EV charging infrastructure.",
    modules: [
      {
        title: "Introduction to Electric and Hybrid Vehicles",
        topics: [
          "Vehicle Overview",
          "History of HEVs and EVs",
          "Environmental Impact & Sustainability",
          "Global Market Trends & Regulations",
        ],
      },
      {
        title: "Automotive Engineering Foundations",
        topics: [
          "Basics of Automotive Engineering",
          "Vehicle Dynamics",
          "Engines vs. Electric Motors",
          "Transmission & Drivetrains",
          "Aerodynamics & Efficiency",
        ],
      },
      {
        title: "Electric Vehicle Technology",
        topics: [
          "EV Motor Technology",
          "Battery Technology & BMS",
          "Charging Infrastructure",
        ],
      },
      {
        title: "Hybrid Vehicle Technology",
        topics: [
          "Hybrid Systems & Power Management",
          "Vehicle Electrification Components",
        ],
      },
      {
        title: "Energy Management and Control",
        topics: [
          "Energy Management & Control",
          "Safety & Reliability in EVs",
        ],
      },
      {
        title: "Testing and Validation",
        topics: [
          "Testing & Validation Procedures",
        ],
      },
      {
        title: "Design and Modeling",
        topics: [
          "Design & Modeling Methodologies",
          "Simulation & Collaborative Tools",
        ],
      },
      {
        title: "Manufacturing and Maintenance",
        topics: [
          "Manufacturing & Assembly Processes",
          "Maintenance & Service Techniques",
        ],
      },
      {
        title: "Advanced Technologies",
        topics: [
          "Vehicle-to-Grid (V2G) Technology",
          "Autonomous & Connected Vehicles",
        ],
      },
      {
        title: "Business and Future Trends",
        topics: [
          "Business & Market Strategies",
          "Innovation & Future Trends",
        ],
      },
    ],
    tools: ["MATLAB", "Simulink", "CAN Bus", "Battery Management Systems", "Power Electronics"],
    audience: [
      "Automotive engineers",
      "Electrical engineers",
      "EV enthusiasts",
    ],
    outcomes: [
      "EV system design knowledge",
      "Battery management skills",
      "Hybrid vehicle understanding",
    ],
    tags: ["EV", "Automotive", "Green Tech"],
  },
  {
    slug: "autocad",
    title: "AutoCAD",
    duration: "8 Weeks",
    level: "Beginner",
    price: 6000,
    lectures: 25,
    weeks: 8,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    summary:
      "Master 2D and 3D design with AutoCAD for engineering, architecture and construction projects.",
    overview:
      "Complete AutoCAD training covering drafting, modeling and professional design documentation.",
    description:
      "Learn AutoCAD from basics to advanced 3D modeling. Create professional technical drawings and design documentation.",
    modules: [
      {
        title: "Introduction to Civil 3D and Basic Tools",
        topics: [
          "Civil 3D Overview and Project Setup",
          "Basic Drawing Tools",
          "Editing Tools Overview",
        ],
      },
      {
        title: "Surveying and Surface Modeling",
        topics: [
          "Surveying and Importing Data",
          "Managing Point Groups",
          "Surface Creation and Editing",
          "Surface Analysis Basics",
        ],
      },
      {
        title: "Roadway Design and Profiles",
        topics: [
          "Roadway Alignments and Profiles",
          "Profile Views and Superimposing",
        ],
      },
      {
        title: "Corridor and Grading Design",
        topics: [
          "Corridor Design Introduction",
          "Building Corridors and Regions",
          "Grading Tools and Cut/Fill",
          "Grading Analysis",
        ],
      },
      {
        title: "Pipe Networks and Cross Sections",
        topics: [
          "Storm and Sewer System Design",
          "Editing Pipe Networks",
          "Cross Sections and Earthwork",
          "Mass Haul Diagrams",
        ],
      },
      {
        title: "Sheets, Parcels and Land Planning",
        topics: [
          "Sheet Setup and Layouts",
          "Plan and Profile Sheets",
          "Parcel Creation and Layouts",
          "Area Calculations and Reports",
        ],
      },
      {
        title: "Data Management and Collaboration",
        topics: [
          "Data Import/Export and Collaboration",
          "BIM 360 Collaboration",
        ],
      },
      {
        title: "Styles, Settings and Best Practices",
        topics: [
          "Introduction to Styles and Settings",
          "Efficient Drawing and Troubleshooting",
        ],
      },
    ],
    tools: ["AutoCAD", "AutoCAD 3D", "Layout Design", "Plotting Tools"],
    audience: [
      "Engineering students",
      "Architects",
      "Design professionals",
    ],
    outcomes: [
      "2D and 3D CAD drawings",
      "Professional design skills",
      "AutoCAD certification prep",
    ],
    tags: ["CAD", "Design", "Engineering"],
  },
  {
    slug: "construction-management",
    title: "Construction Planning Management",
    duration: "9 Weeks",
    level: "Intermediate",
    price: 6000,
    lectures: 25,
    weeks: 9,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    summary:
      "Learn construction project management, planning, scheduling and cost estimation techniques.",
    overview:
      "Comprehensive construction management course covering project planning, scheduling and execution strategies.",
    description:
      "Master construction project management with planning tools, scheduling techniques and cost management strategies for successful project delivery.",
    modules: [
      {
        title: "Introduction to Construction Management",
        topics: [
          "Construction Industry Overview",
          "Planning and Project Life Cycle",
          "Construction Standards in India",
        ],
      },
      {
        title: "Project Planning and Scheduling",
        topics: [
          "Financial Planning and WBS",
          "Scheduling and Gantt Charts",
          "Critical Path Method (CPM)",
          "Floats, PERT and Resource Allocation",
        ],
      },
      {
        title: "Risk and Design Management",
        topics: [
          "Risk Management in Construction",
          "BIM and Construction Technologies",
          "Sustainable Construction Practices",
        ],
      },
      {
        title: "Contracts and Supply Chain Management",
        topics: [
          "Contract Types and Vendor Selection",
          "Supply Chain Management",
        ],
      },
      {
        title: "Health, Safety and Quality Control",
        topics: [
          "Health and Safety in Construction",
          "Emergency Response and QA/QC",
          "Lean Construction and Improvement",
        ],
      },
      {
        title: "Team Building and Cost Control",
        topics: [
          "Team Building and Labor Laws",
          "Conflict Resolution and Cost Control",
          "Value Engineering and Reporting",
        ],
      },
      {
        title: "Environmental and Green Building Practices",
        topics: [
          "Environmental Compliance and Waste Management",
          "Energy Efficiency and Green Building",
        ],
      },
      {
        title: "Project Monitoring and Closure",
        topics: [
          "Progress Monitoring and KPIs",
          "Project Closure and GIS",
          "Inspection and Testing Procedures",
        ],
      },
      {
        title: "Future of Construction",
        topics: [
          "Automation and AR/VR in Construction",
          "Smart Buildings and Future of Construction",
        ],
      },
    ],
    tools: ["MS Project", "Primavera", "AutoCAD", "Excel", "Construction Software"],
    audience: [
      "Civil engineers",
      "Project managers",
      "Construction professionals",
    ],
    outcomes: [
      "Project management skills",
      "Scheduling expertise",
      "Cost estimation capabilities",
    ],
    tags: ["Construction", "Management", "Civil"],
  },
  {
    slug: "finance",
    title: "Finance",
    duration: "9 Weeks",
    level: "Intermediate",
    price: 6000,
    lectures: 24,
    weeks: 9,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    summary:
      "Master financial analysis, investment strategies and corporate finance for business decision-making.",
    overview:
      "Comprehensive finance course covering financial analysis, investment management and corporate finance principles.",
    description:
      "Learn financial analysis, investment strategies and corporate finance. Develop skills in financial modeling, valuation and risk management.",
    modules: [
      {
        title: "Finance Foundations",
        topics: [
          "Finance Overview and Functions",
          "Financial Statements and Ratio Analysis",
          "Capital Budgeting and M&A",
        ],
      },
      {
        title: "Banking and Financial Markets",
        topics: [
          "Indian Banking System",
          "Stock Exchanges and Mutual Funds",
          "Derivatives and Risk Management",
          "Risk Management in Derivatives - Part 2",
        ],
      },
      {
        title: "Taxation and Foreign Exchange",
        topics: [
          "Taxation and GST in India",
          "Foreign Exchange and Trade Finance",
          "Currency Risk and Global Impact",
        ],
      },
      {
        title: "Personal Finance and Investments",
        topics: [
          "Personal Finance and Investment Options - Part 1",
          "Personal Finance and Investment Options - Part 2",
          "Personal Finance and Investment Options - Part 3",
        ],
      },
      {
        title: "FinTech and Financial Modeling",
        topics: [
          "FinTech and Financial Modeling - Part 1",
          "FinTech and Financial Modeling - Part 2",
        ],
      },
      {
        title: "Microfinance and MSME Financing",
        topics: [
          "Microfinance and MSME Schemes - Part 1",
          "Microfinance and MSME Schemes - Part 2",
        ],
      },
      {
        title: "Insurance and Risk Management",
        topics: [
          "Insurance Industry Overview - Part 1",
          "Insurance Industry Overview - Part 2",
          "Insurance Industry Overview - Part 3",
        ],
      },
      {
        title: "Startups and Real Estate",
        topics: [
          "Indian Startup Ecosystem",
          "Real Estate and Infrastructure Financing",
        ],
      },
      {
        title: "Ethics and Corporate Social Responsibility",
        topics: [
          "Ethics in Finance and CSR - Part 1",
          "Ethics in Finance and CSR - Part 2",
        ],
      },
    ],
    tools: ["Excel", "Bloomberg Terminal", "Financial Modeling", "QuickBooks"],
    audience: [
      "Finance professionals",
      "Business analysts",
      "MBA students",
    ],
    outcomes: [
      "Financial analysis skills",
      "Investment portfolio management",
      "Corporate finance expertise",
    ],
    tags: ["Finance", "Investment", "Analysis"],
  },
  {
    slug: "human-resources",
    title: "Human Resources ( HR )",
    duration: "13 Weeks",
    level: "Intermediate",
    price: 6000,
    lectures: 26,
    weeks: 13,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    summary:
      "Master HR management, recruitment, employee relations and organizational development strategies.",
    overview:
      "Comprehensive HR course covering recruitment, talent management, performance evaluation and HR analytics.",
    description:
      "Learn human resources management from recruitment to retention. Master HR strategies, employee relations and organizational development.",
    modules: [
      {
        title: "Foundations of HRM",
        topics: [
          "Intro to HRM & Its Importance",
          "Evolution & Strategic HRM",
        ],
      },
      {
        title: "Recruitment and Selection",
        topics: [
          "Recruitment Strategies",
          "Selection Process & Interviewing",
        ],
      },
      {
        title: "Training and Development",
        topics: [
          "Training Needs & Program Design",
          "Employee Development & Career Planning",
        ],
      },
      {
        title: "Performance Management",
        topics: [
          "Performance Management & Appraisal",
          "Feedback & Performance Improvement",
        ],
      },
      {
        title: "Compensation and Benefits",
        topics: [
          "Salary & Payroll Management",
          "Employee Benefits & Compensation Compliance",
        ],
      },
      {
        title: "Employee Relations and Engagement",
        topics: [
          "Employee Relations & Conflict Resolution",
          "Employee Engagement Strategies",
        ],
      },
      {
        title: "Labor Laws and Compliance",
        topics: [
          "Labor Laws & Compliance in India",
          "Compliance Best Practices",
        ],
      },
      {
        title: "Diversity and Inclusion",
        topics: [
          "Diversity & Inclusion",
          "Managing Cross-Cultural Teams",
        ],
      },
      {
        title: "Workplace Safety and Wellness",
        topics: [
          "Workplace Safety & Wellness",
        ],
      },
      {
        title: "Talent Acquisition and Analytics",
        topics: [
          "Talent Acquisition & Retention",
          "Talent Analytics & Pipeline Building",
        ],
      },
      {
        title: "HR Technology and Data Management",
        topics: [
          "HR Technology & Automation",
          "Data Analytics & Cybersecurity in HR",
        ],
      },
      {
        title: "Ethics and Social Responsibility",
        topics: [
          "Ethics & Corporate Social Responsibility",
          "Sustainability & Community Engagement",
        ],
      },
      {
        title: "Global HRM",
        topics: [
          "Global HRM & International Assignments",
          "Cultural Intelligence & Legal Considerations",
        ],
      },
      {
        title: "CASE STUDY",
        topics: [],
      },
    ],
    tools: ["HRMS Software", "Applicant Tracking Systems", "Performance Management Tools", "Excel"],
    audience: [
      "HR professionals",
      "Business managers",
      "Career switchers",
    ],
    outcomes: [
      "HR management skills",
      "Recruitment expertise",
      "Employee relations competency",
    ],
    tags: ["HR", "Management", "Recruitment"],
  },
  {
    slug: "stock-marketing",
    title: "Stock Marketing",
    duration: "7 Weeks",
    level: "Beginner",
    price: 6000,
    lectures: 16,
    weeks: 7,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    summary:
      "Learn stock market fundamentals, trading strategies and investment analysis for wealth creation.",
    overview:
      "Stock market course covering trading basics, technical analysis, fundamental analysis and investment strategies.",
    description:
      "Master stock market trading and investment strategies. Learn technical and fundamental analysis to make informed trading decisions.",
    modules: [
      {
        title: "Introduction to Indian Financial Markets",
        topics: [
          "Indian Financial Market Overview",
          "Issue Process and Public Issues",
        ],
      },
      {
        title: "Market Operations and Intermediaries",
        topics: [
          "Market Intermediaries and Trade Execution",
          "Corporate Actions and Cross Margining",
        ],
      },
      {
        title: "Mutual Funds and Investment Approaches",
        topics: [
          "Mutual Funds and Regulations",
          "Investment Approaches and Processes",
        ],
      },
      {
        title: "Derivatives and Risk Management",
        topics: [
          "Derivatives: Products, Trading and Risks",
        ],
      },
      {
        title: "Technical Analysis: Market and Charts",
        topics: [
          "Key Technical Indicators",
          "Advanced Technical Indicators",
          "Chart Patterns and Market Structure",
        ],
      },
      {
        title: "Trading and Risk Management",
        topics: [
          "Risk Management in Trading",
          "Evaluating Companies: Economic Moat and Debt",
        ],
      },
      {
        title: "Market Timing and Regulations",
        topics: [
          "Valuation and Market Timing",
          "Stock Market Laws and SEBI",
        ],
      },
      {
        title: "Insider Trading",
        topics: [
          "Insider Trading and Penalties",
        ],
      },
    ],
    tools: ["Trading Platforms", "Technical Indicators", "Stock Screeners", "Market Analysis Tools"],
    audience: [
      "Investment enthusiasts",
      "Finance students",
      "New traders",
    ],
    outcomes: [
      "Stock trading knowledge",
      "Technical analysis skills",
      "Investment portfolio management",
    ],
    tags: ["Trading", "Investment", "Stock Market"],
  },
];

export function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug);
}
