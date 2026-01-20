export const hardwareHighlights = {
  intro:
    "From PCB to enclosure, our hardware studio prototypes, tests and industrializes future-ready electronics for mobility, med-tech and aerospace clients.",
  categories: [
    {
      title: "Embedded & Power Systems",
      points: ["High-density PCB design", "Battery management", "Functional safety"],
    },
    {
      title: "Robotics & Mechatronics",
      points: ["Actuator stacks", "Sensor fusion", "On-device AI"],
    },
    {
      title: "Product Industrialization",
      points: ["DFM / DFA", "Compliance testing", "Pilot manufacturing"],
    },
  ],
  applications: [
    "Smart mobility",
    "Healthcare devices",
    "Defense & aerospace",
    "Industrial automation",
  ],
};

export const softwareHighlights = {
  intro:
    "Transform your vision into intelligent systems that think, connect and evolve. We craft cutting-edge IOT ecosystems and AI-powered solutions that bridge the physical and digital worlds, turning billions of data points into actionable intelligence.",
  categories: [
    {
      title: "IOT Platforms",
      points: ["Device onboarding", "Digital twins", "Command & control"],
    },
    {
      title: "AI & Data Products",
      points: ["MLOps", "Realtime analytics", "Annotation tooling"],
    },
    {
      title: "Enterprise Applications",
      points: ["Next.js platforms", "API ecosystems", "Cyber resilience"],
    },
  ],
  applications: [
    "Smart campuses",
    "Energy and utilities",
    "Manufacturing intelligence",
    "GovTech",
  ],
};

export const rdStreams = [
  {
    title: "Drone Technology R&D",
    description:
      "Advanced drone systems for autonomous navigation, swarm intelligence and specialized applications including agricultural monitoring, security surveillance and disaster management. Focus areas include flight control systems, obstacle avoidance algorithms and multi-drone coordination.",
  },
  {
    title: "Electronics & Hardware Research",
    description:
      "Cutting-edge research in PCB design, embedded systems, power electronics and IOT hardware platforms. Development of custom electronics for industrial automation, medical devices and smart infrastructure with emphasis on miniaturization, energy efficiency and reliability.",
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Research in deep learning, computer vision, natural language processing and edge AI. Applications include intelligent automation, predictive analytics, anomaly detection and AI-powered decision support systems for various industrial and commercial domains.",
  },
  {
    title: "IOT & Connected Systems",
    description:
      "Development of scalable IOT architectures, sensor networks and real-time data processing systems. Research focuses on LPWAN technologies, edge computing, digital twins and secure IOT communication protocols for smart cities, industry 4.0 and connected healthcare.",
  },
  {
    title: "Robotics & Automation",
    description:
      "Advanced robotics research including autonomous mobile robots, collaborative robots and specialized robotic systems for manufacturing, healthcare and service industries. Focus on SLAM, path planning, machine vision and human-robot interaction.",
  },
  {
    title: "Renewable Energy Systems",
    description:
      "Research and development in solar energy systems, battery management, smart grid technologies and electric vehicle charging infrastructure. Focus on energy optimization, power conversion and integration of renewable energy sources with grid systems.",
  },
  {
    title: "Data Science & Analytics",
    description:
      "Big data analytics, business intelligence and data-driven decision making. Research in data mining, statistical modeling, predictive analytics and visualization techniques for extracting actionable insights from complex datasets.",
  },
  {
    title: "Cybersecurity & Network Security",
    description:
      "Research in network security, cryptography, intrusion detection and security for IOT and embedded systems. Development of secure communication protocols, vulnerability assessment tools and security frameworks for critical infrastructure protection.",
  },
  {
    title: "Smart Manufacturing & Industry 4.0",
    description:
      "Research in advanced manufacturing technologies including digital twins, predictive maintenance, automated quality control and smart factory systems. Integration of IOT, AI and robotics for intelligent manufacturing processes.",
  },
  {
    title: "Healthcare Technology",
    description:
      "Medical device development, telemedicine platforms, health monitoring systems and AI-assisted diagnostics. Research in wearable health tech, remote patient monitoring and healthcare data analytics for improved patient outcomes.",
  },
  {
    title: "Academic & Industry Collaborations",
    description:
      "Joint research programs with universities, research institutes and industry partners. Collaborative projects for technology transfer, patent development, sponsored research and pilot deployments. Focus on bridging academia-industry gap through innovation labs and research fellowships.",
  },
  {
    title: "Emerging Technologies",
    description:
      "Exploration of next-generation technologies including quantum computing, blockchain, augmented reality, virtual reality and brain-computer interfaces. Research in emerging application domains and futuristic technology solutions.",
  },
];

export const rdCapabilities = {
  researchFocus: [
    "Applied research with industry relevance",
    "Proof-of-concept development",
    "Technology prototyping and validation",
    "Patent filing and IP management",
    "Research publication and dissemination",
    "Technology transfer and commercialization",
  ],
  infrastructure: [
    "State-of-the-art electronics lab",
    "Robotics and automation testbed",
    "IOT and sensor network facilities",
    "AI/ML compute infrastructure",
    "PCB fabrication and testing",
    "3D printing and rapid prototyping",
  ],
  collaborationModels: [
    "Sponsored research projects",
    "Joint intellectual property development",
    "Research internships and fellowships",
    "Technology consulting services",
    "Custom project development",
    "Training and skill development programs",
  ],
  domains: [
    "Aerospace and defense",
    "Automotive and mobility",
    "Healthcare and life sciences",
    "Energy and utilities",
    "Manufacturing and industry",
    "Smart cities and infrastructure",
    "Agriculture and environment",
    "Education and edtech",
  ],
};

// Additional AI Annotation projects for Software/IOT page only
export const softwareAIAnnotations = [
  {
    src: "/images/projects/ai-annotations/counter-segmentation.png",
    alt: "Counter segmentation for object counting and density estimation",
    label: "Counter Segmentation",
    details: {
      description: "Advanced counter segmentation tool for crowd counting, object density estimation and instance counting in complex scenes. Utilizes deep learning to accurately count and segment objects in high-density environments for surveillance, retail analytics and traffic monitoring.",
      features: [
        "Automated object counting with density maps",
        "Crowd density estimation and heatmap generation",
        "Instance-level segmentation for individual object counting",
        "Real-time counting in video streams",
        "Multi-class object counting support",
        "Occlusion handling for overlapping objects",
        "Statistical analysis and count reporting"
      ],
      specifications: [
        "Counting Accuracy: >92% in dense scenes",
        "Max Objects: 1000+ per image",
        "Processing Speed: 30 FPS for real-time",
        "Output Formats: CSV, JSON, Heatmaps"
      ]
    }
  },
  {
    src: "/images/projects/ai-annotations/shadow-annotation.jpg",
    alt: "Shadow annotation for lighting analysis and image enhancement",
    label: "Shadow Annotation",
    details: {
      description: "Specialized shadow annotation platform for computer vision tasks requiring shadow detection, removal and lighting analysis. Essential for autonomous driving, augmented reality and photo editing applications where accurate shadow understanding is crucial.",
      features: [
        "Precise shadow boundary detection and labeling",
        "Shadow-object relationship mapping",
        "Multiple shadow types: cast, self and soft shadows",
        "Shadow removal and inpainting tools",
        "Lighting direction and intensity estimation",
        "Integration with depth estimation pipelines",
        "Automated shadow detection using AI models"
      ],
      specifications: [
        "Shadow Types: Cast, Self, Soft shadows",
        "Precision: Sub-pixel accuracy",
        "Processing: Batch and real-time modes",
        "Export Formats: Mask images, JSON metadata"
      ]
    }
  },
  {
    src: "/images/projects/ai-annotations/bounding-box.jpg",
    alt: "Bounding box annotation for object detection and localization",
    label: "Bounding Box Annotation",
    details: {
      description: "Industry-standard bounding box annotation tool for object detection, localization and classification tasks. Streamlines the creation of training datasets for YOLO, Faster R-CNN and other object detection frameworks with efficient workflows and quality control.",
      features: [
        "Fast rectangular bounding box drawing",
        "Multi-class object labeling with customizable categories",
        "Keyboard shortcuts for rapid annotation",
        "Auto-suggest and smart detection assistance",
        "Annotation validation and quality checks",
        "Collaborative annotation with team access",
        "Direct export to YOLO, COCO, Pascal VOC formats"
      ],
      specifications: [
        "Annotation Speed: 200+ boxes per hour",
        "Classes: Unlimited custom categories",
        "Export Formats: YOLO, COCO, Pascal VOC, TFRecord",
        "Accuracy Tools: IoU validation, overlap detection"
      ]
    }
  },
  {
    src: "/images/projects/ai-annotations/audio-annotation.png",
    alt: "Audio annotation for speech recognition and sound classification",
    label: "Audio Annotation",
    details: {
      description: "Comprehensive audio annotation platform for speech recognition, sound classification, music analysis and acoustic event detection. Enables precise labeling of audio segments for training voice assistants, audio processing AI and sound recognition systems.",
      features: [
        "Waveform visualization with zoom and playback controls",
        "Speech transcription and phoneme-level annotation",
        "Sound event detection and temporal segmentation",
        "Speaker diarization and identification",
        "Emotion and sentiment tagging for voice data",
        "Background noise and acoustic scene classification",
        "Multi-language support with IPA notation"
      ],
      specifications: [
        "Audio Formats: WAV, MP3, FLAC, OGG",
        "Sample Rates: Up to 192 kHz",
        "Annotation Precision: Millisecond-level",
        "Export: TextGrid, JSON, CSV, SRT"
      ]
    }
  },
];
