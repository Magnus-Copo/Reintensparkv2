export type ProjectGalleryImage = {
  src: string;
  alt: string;
  label: string;
  details?: {
    description: string;
    features: string[];
    specifications?: string[];
  };
};

export type ProjectOffering = {
  title: string;
  bullets: string[];
};

export type ProjectCategory = {
  id: string;
  title: string;
  description: string;
  offerings: ProjectOffering[];
  gallery: ProjectGalleryImage[];
  focus?: string[];
};

export const projectCategories: ProjectCategory[] = [
  {
    id: "drones",
    title: "Drone Projects",
    description:
      "Unmanned aerial systems for delivery, surveillance, mapping and precision agriculture. Students blend robotics, avionics and automation to build reliable autonomous vehicles.",
    offerings: [
      {
        title: "Custom Drone Projects",
        bullets: [
          "Mission-specific builds shaped around campus or industry briefs.",
          "Payload integration, flight-controller tuning and safety validation with mentors.",
        ],
      },
      {
        title: "Ready-Made Drone Solutions",
        bullets: [
          "Pre-engineered airframes that can be rapidly customized.",
          "Ideal when you need a flight-ready platform in weeks, not months.",
        ],
      },
      {
        title: "Project Documentation & Support",
        bullets: [
          "Schematics, CAD, simulation reports and assembly guides included.",
          "Live support from design sign-off to maiden flights.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/projects/drones/diy-drone.jpg",
        alt: "DIY Drone build kit with components",
        label: "DIY Drone",
        details: {
          description: "A fully customizable DIY drone kit perfect for learning the fundamentals of drone technology. Build your own quadcopter from scratch with all necessary components and comprehensive assembly instructions.",
          features: [
            "Complete component kit with flight controller, motors, ESCs and frame",
            "Step-by-step assembly guide with video tutorials",
            "Programmable flight controller for custom configurations",
            "Compatible with multiple flight modes and GPS integration",
            "Ideal for educational purposes and hobby enthusiasts"
          ],
          specifications: [
            "Flight Time: 15-20 minutes",
            "Max Speed: 40 km/h",
            "Camera Mount: Compatible",
            "Weight: 450g (without battery)"
          ]
        }
      },
      {
        src: "/images/projects/drones/fpv-drone.jpg",
        alt: "FPV Racing Drone in flight",
        label: "FPV Drone",
        details: {
          description: "High-performance First Person View (FPV) racing drone designed for speed and agility. Experience immersive flying with real-time video transmission and responsive controls.",
          features: [
            "HD FPV camera with 120° field of view",
            "Low-latency 5.8GHz video transmission system",
            "High-speed brushless motors for racing performance",
            "Carbon fiber frame for durability and lightweight",
            "Customizable PID tuning for precise control"
          ],
          specifications: [
            "Top Speed: 100+ km/h",
            "Video Latency: <50ms",
            "Flight Time: 4-6 minutes",
            "Range: 500m+"
          ]
        }
      },
      {
        src: "/images/projects/drones/landmine-detector.jpg",
        alt: "Landmine Detector Drone with specialized sensors",
        label: "Landmine Detector",
        details: {
          description: "Specialized autonomous drone equipped with advanced ground-penetrating radar and metal detection sensors for safe landmine detection. Designed for humanitarian demining operations and security applications.",
          features: [
            "Ground-penetrating radar (GPR) technology",
            "Metal detector array with high sensitivity",
            "Autonomous grid scanning capability",
            "Real-time data mapping and GPS coordinates",
            "Safe operation from remote distance",
            "Weather-resistant design for field operations"
          ],
          specifications: [
            "Detection Depth: Up to 30cm",
            "Scanning Width: 2m per pass",
            "Flight Time: 25-30 minutes",
            "Operating Altitude: 0.5-3m"
          ]
        }
      },
      {
        src: "/images/projects/drones/mini-drones.jpg",
        alt: "Compact Mini Drone",
        label: "Mini Drone",
        details: {
          description: "Ultra-compact and portable mini drone perfect for indoor flying and beginners. Features one-touch takeoff/landing and built-in safety features for easy operation.",
          features: [
            "Compact foldable design fits in your pocket",
            "HD camera for aerial photography",
            "Altitude hold and headless mode for easy flying",
            "360° flip and roll stunts",
            "LED lights for night flying",
            "Beginner-friendly with multiple speed modes"
          ],
          specifications: [
            "Weight: 85g",
            "Flight Time: 10-12 minutes",
            "Camera: 720p HD",
            "Control Range: 50m"
          ]
        }
      },
    ],
  },
  {
    id: "iot",
    title: "IOT Projects",
    description:
      "Connected sensing stacks that collect, analyze and act on real-world data. The program covers hardware interfaces, secure connectivity and dashboard-ready analytics.",
    offerings: [
      {
        title: "Custom IOT Projects",
        bullets: [
          "Requirements-first design aligned with academic rubrics.",
          "Edge hardware, firmware and cloud integrations scoped together.",
        ],
      },
      {
        title: "Ready-Made IOT Solutions",
        bullets: [
          "Pre-built blueprints for weather, health and smart-campus monitors.",
          "Easily tailored to match college viva or demo criteria.",
        ],
      },
      {
        title: "Complete Documentation",
        bullets: [
          "Source code, Bill of Materials and walkthrough presentations.",
          "Explanations optimized for project reviews and juries.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/projects/iot/biometric-auth.jpg",
        alt: "Biometric Authentication System with fingerprint scanner",
        label: "Biometric Authentication System",
        details: {
          description: "Advanced biometric authentication system using fingerprint and facial recognition technology for secure access control. Perfect for implementing modern security solutions in various applications.",
          features: [
            "Multi-factor biometric authentication (fingerprint + face recognition)",
            "Real-time identity verification with high accuracy",
            "Secure encrypted data storage",
            "Integration with existing access control systems",
            "User management dashboard with activity logs",
            "Support for multiple authentication modes"
          ],
          specifications: [
            "Response Time: <2 seconds",
            "Accuracy: 99.9%",
            "Storage: Up to 10,000 users",
            "Connectivity: Wi-Fi, Bluetooth, Ethernet"
          ]
        }
      },
      {
        src: "/images/projects/iot/smart-glucometer.jpg",
        alt: "IOT-enabled Glucometer for blood glucose monitoring",
        label: "Smart Glucometer",
        details: {
          description: "Smart IOT-enabled glucometer for continuous blood glucose monitoring with cloud connectivity. Helps diabetic patients track their glucose levels and share data with healthcare providers in real-time.",
          features: [
            "Non-invasive or minimally invasive glucose measurement",
            "Real-time data transmission to mobile app",
            "Cloud-based data storage and analytics",
            "Automated alerts for abnormal glucose levels",
            "Historical data tracking and trend analysis",
            "Integration with health monitoring platforms"
          ],
          specifications: [
            "Measurement Range: 20-600 mg/dL",
            "Accuracy: ±10 mg/dL",
            "Sample Size: 0.5 µL",
            "Connectivity: Bluetooth, Wi-Fi"
          ]
        }
      },
      {
        src: "/images/projects/iot/weather-monitoring.jpg",
        alt: "IOT Weather Monitoring System with multiple sensors",
        label: "IOT Based Weather Monitoring System",
        details: {
          description: "Comprehensive IOT-based weather monitoring system that collects real-time environmental data including temperature, humidity, pressure and air quality. Ideal for agricultural, research and smart city applications.",
          features: [
            "Multiple environmental sensors (temperature, humidity, pressure, wind)",
            "Real-time data logging and cloud synchronization",
            "Weather prediction algorithms",
            "Mobile app and web dashboard access",
            "Automated alerts for extreme weather conditions",
            "Solar-powered option for remote deployment"
          ],
          specifications: [
            "Temperature Range: -40°C to 80°C",
            "Humidity Range: 0-100% RH",
            "Data Update: Every 10 seconds",
            "Transmission: Wi-Fi, LoRa, GSM"
          ]
        }
      },
      {
        src: "/images/projects/iot/plant-monitoring.jpg",
        alt: "IOT Plant Monitoring System for smart agriculture",
        label: "IOT Based Plant Monitoring System",
        details: {
          description: "Smart IOT plant monitoring system designed for precision agriculture and automated plant care. Monitors soil moisture, temperature, light intensity and nutrients to optimize plant growth and automate irrigation.",
          features: [
            "Soil moisture and pH level monitoring",
            "Ambient light and temperature sensors",
            "Automated irrigation control system",
            "Nutrient level detection",
            "Mobile app for remote monitoring and control",
            "Data analytics for growth optimization"
          ],
          specifications: [
            "Soil Moisture Range: 0-100%",
            "pH Range: 3-10",
            "Light Range: 0-200,000 Lux",
            "Power: Solar + Battery backup"
          ]
        }
      },
    ],
  },
  {
    id: "hardware",
    title: "Hardware Projects",
    description:
      "Practical electronics that take concepts from schematics to rugged enclosures. Labs emphasize circuit optimization, compliance and manufacturability.",
    offerings: [
      {
        title: "Custom Hardware Builds",
        bullets: [
          "Circuit, PCB and enclosure design tailored to your requirement sheet.",
          "End-to-end validation across power, thermal and EMI metrics.",
        ],
      },
      {
        title: "Ready-Made Hardware Kits",
        bullets: [
          "Field-tested reference designs ready for quick customization.",
          "Ideal for rapid demos, hackathons and juried showcases.",
        ],
      },
      {
        title: "Documentation & Support",
        bullets: [
          "Gerbers, wiring diagrams, firmware notes and user manuals provided.",
          "Guidance through fabrication, assembly and troubleshooting.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/projects/hardware/thermoelectric-generator.jpg",
        alt: "Arduino based thermoelectric energy generator using waste heat",
        label: "Arduino Based Thermo Electric Energy Generator Using Waste",
        details: {
          description: "Innovative Arduino-based thermoelectric energy generator that converts waste heat into electrical energy using Peltier modules. This sustainable solution captures unused thermal energy from industrial processes, vehicle exhausts, or other heat sources to generate clean electricity.",
          features: [
            "Thermoelectric generator (TEG) modules for heat-to-electricity conversion",
            "Arduino microcontroller for power management and monitoring",
            "Real-time voltage and current measurement display",
            "Battery charging circuit for energy storage",
            "Temperature differential monitoring system",
            "Efficient heat sink design for maximum energy capture",
            "Scalable design for various waste heat applications"
          ],
          specifications: [
            "Power Output: 5-15W depending on temperature differential",
            "Operating Temperature: 50°C to 200°C",
            "Output Voltage: 5V/12V regulated",
            "Efficiency: 5-8%"
          ]
        }
      },
      {
        src: "/images/projects/hardware/fire-fighting-robot.jpg",
        alt: "Autonomous fire fighting robot with water cannon",
        label: "Fire Fighting Robot",
        details: {
          description: "Advanced autonomous fire-fighting robot designed to detect and extinguish fires in hazardous environments. Equipped with flame sensors, thermal imaging and automated water/foam dispensing system for effective fire suppression without risking human lives.",
          features: [
            "Multiple flame sensors for 360° fire detection",
            "Thermal imaging camera for heat source identification",
            "Automated water cannon or foam extinguisher",
            "Obstacle avoidance and autonomous navigation",
            "Real-time video streaming to control station",
            "Remote manual control override capability",
            "Heat-resistant chassis and protective housing"
          ],
          specifications: [
            "Detection Range: Up to 5 meters",
            "Water Tank Capacity: 5 liters",
            "Operating Time: 30-45 minutes",
            "Max Speed: 1.5 m/s"
          ]
        }
      },
      {
        src: "/images/projects/hardware/ev-charging.jpg",
        alt: "On-road electric vehicle charging station",
        label: "On Road EV Charging",
        details: {
          description: "Smart on-road electric vehicle charging infrastructure designed for convenient roadside charging. Features mobile app integration, payment processing and real-time availability monitoring to support the growing EV ecosystem.",
          features: [
            "Fast charging capability (Level 2 & DC fast charging)",
            "Mobile app for locating, reserving and payment",
            "Universal connector compatibility (Type 1, Type 2, CCS)",
            "Real-time charging status and energy consumption tracking",
            "Automated billing and digital payment integration",
            "Solar panel integration option for sustainable charging",
            "Weather-resistant outdoor enclosure"
          ],
          specifications: [
            "Charging Power: 7kW to 50kW",
            "Input Voltage: 220V/440V AC",
            "Charging Time: 30 min (80% charge for fast charging)",
            "Efficiency: >95%"
          ]
        }
      },
      {
        src: "/images/projects/hardware/smart-helmet.jpg",
        alt: "Smart helmet with integrated safety features",
        label: "Smart Helmet",
        details: {
          description: "IOT-enabled smart helmet designed for motorcyclists and industrial workers, featuring crash detection, GPS tracking, emergency alerts and integrated communication systems for enhanced safety and connectivity.",
          features: [
            "Crash detection with automatic emergency alert system",
            "Real-time GPS tracking and location sharing",
            "Bluetooth connectivity for hands-free calling and music",
            "Built-in microphone and speakers",
            "Emergency SOS button with automated contact notification",
            "Speed monitoring and over-speed alerts",
            "Long-lasting battery with wireless charging"
          ],
          specifications: [
            "Battery Life: 10-12 hours",
            "Bluetooth Range: 10 meters",
            "Weight: 1.5 kg",
            "Certification: DOT/ECE compliant"
          ]
        }
      },
    ],
  },
  {
    id: "ai-annotations",
    title: "AI Annotation Projects",
    description:
      "Data labeling workflows that accelerate machine learning experiments. Teams explore image, audio and video modalities with production-ready toolchains.",
    offerings: [
      {
        title: "Custom Annotation Briefs",
        bullets: [
          "Datasets curated for niche academic or enterprise scenarios.",
          "Guidance on taxonomies, quality gates and export formats.",
        ],
      },
      {
        title: "Ready-Made AI Solutions",
        bullets: [
          "Pre-built projects spanning CV, NLP and sensor fusion.",
          "Quickly adapt models for viva demonstrations or publications.",
        ],
      },
      {
        title: "Documentation & Mentoring",
        bullets: [
          "Reports with dataset stats, training logs and evaluation charts.",
          "Support from data preprocessing through inference deployment.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/projects/ai-annotations/heart-annotation.jpg",
        alt: "Heart annotation for medical imaging and cardiac analysis",
        label: "Heart Annotation",
        details: {
          description: "Advanced AI-powered heart annotation system for medical imaging, designed to detect and classify cardiac conditions from ECG, MRI and CT scans. Enables automated analysis of heart structure, function and abnormalities for medical research and diagnosis.",
          features: [
            "Automated segmentation of cardiac chambers and structures",
            "ECG signal analysis and arrhythmia detection",
            "Heart disease classification using deep learning",
            "3D cardiac reconstruction from medical imaging",
            "Real-time annotation tools for cardiologists",
            "Integration with medical imaging standards (DICOM)",
            "Automated report generation with findings"
          ],
          specifications: [
            "Accuracy: >95% for cardiac segmentation",
            "Supported Formats: DICOM, NIfTI, PNG",
            "Processing Time: <5 seconds per image",
            "Disease Categories: 10+ cardiac conditions"
          ]
        }
      },
      {
        src: "/images/projects/ai-annotations/image-annotation.jpeg",
        alt: "Image annotation with bounding boxes and segmentation",
        label: "Image Annotation",
        details: {
          description: "Comprehensive image annotation platform for computer vision and machine learning projects. Supports multiple annotation types including bounding boxes, polygons, semantic segmentation and keypoint detection for diverse AI applications.",
          features: [
            "Multiple annotation types (bounding box, polygon, semantic segmentation)",
            "Object detection and classification tools",
            "Collaborative annotation with team workspace",
            "Quality control and validation workflows",
            "Export to popular ML frameworks (COCO, YOLO, Pascal VOC)",
            "Automated annotation suggestions using AI",
            "Version control and annotation history"
          ],
          specifications: [
            "Supported Formats: JPG, PNG, TIFF, BMP",
            "Annotation Types: 10+ types",
            "Batch Processing: Up to 1000 images",
            "Export Formats: COCO, YOLO, TFRecord, CSV"
          ]
        }
      },
      {
        src: "/images/projects/ai-annotations/object-annotation.jpg",
        alt: "Object annotation with 3D bounding boxes for autonomous systems",
        label: "Object Annotation",
        details: {
          description: "Specialized object annotation tool for training AI models in object detection, recognition and tracking. Features advanced 3D annotation capabilities for autonomous vehicles, robotics and augmented reality applications.",
          features: [
            "2D and 3D bounding box annotation",
            "Object tracking across video frames",
            "Instance segmentation for complex scenes",
            "Multi-class object classification",
            "Occlusion handling and partial object annotation",
            "Point cloud annotation for LiDAR data",
            "Automated object detection assistance"
          ],
          specifications: [
            "3D Annotation Support: Yes",
            "Object Classes: Unlimited custom classes",
            "Video Frame Rate: Up to 60 FPS",
            "Point Cloud Support: LiDAR, RGB-D"
          ]
        }
      },
      {
        src: "/images/projects/ai-annotations/video-annotation.png",
        alt: "Video annotation timeline for activity and event detection",
        label: "Video Annotation",
        details: {
          description: "Powerful video annotation platform for action recognition, activity detection and temporal segmentation. Enables frame-by-frame annotation, object tracking and event labeling for video understanding AI models.",
          features: [
            "Frame-by-frame annotation and keyframe detection",
            "Action and activity recognition labeling",
            "Object tracking across video sequences",
            "Temporal segmentation and event detection",
            "Multi-object annotation in single frames",
            "Video timeline navigation and playback controls",
            "Automated interpolation between keyframes"
          ],
          specifications: [
            "Video Formats: MP4, AVI, MOV, MKV",
            "Max Resolution: 4K (3840x2160)",
            "Frame Rate: Up to 120 FPS",
            "Annotation Interpolation: Automatic"
          ]
        }
      },
    ],
  },
  {
    id: "printing",
    title: "3D Printing",
    description:
      "Additive manufacturing sprints that translate CAD into functional prototypes. Students learn material selection, slicing optimization and finishing workflows.",
    offerings: [
      {
        title: "Custom 3D Printed Designs",
        bullets: [
          "Concept-to-print support for unique academic problem statements.",
          "Includes STL files, assembly cues and finishing suggestions.",
        ],
      },
      {
        title: "Ready-Made 3D Solutions",
        bullets: [
          "Library of proven mechanisms ready for personalization.",
          "Ideal for time-bound juries needing reliable prototypes.",
        ],
      },
      {
        title: "Project Documentation",
        bullets: [
          "Process sheets covering design intent, slicing setup and QA.",
          "Presentation decks highlighting learning outcomes and bill of materials.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/projects/printing/gears.jpg",
        alt: "Close-up of printed gear assembly",
        label: "Precision Gears",
      },
      {
        src: "/images/projects/printing/printing.jpg",
        alt: "Industrial 3D printer in action",
        label: "Production Run",
      },
      {
        src: "/images/projects/printing/3d-design.jpg",
        alt: "Design team reviewing prototype shells",
        label: "Design Review",
      },
    ],
  },
  {
    id: "pcb",
    title: "PCB Designing",
    description:
      "Printed Circuit Board programs that teach schematic capture, layout optimization and fabrication readiness for IOT, robotics and wearable devices.",
    offerings: [
      {
        title: "Custom PCB Projects",
        bullets: [
          "Stack-ups tailored to power, RF, or high-speed constraints.",
          "Component selection, simulation and DFM reviews included.",
        ],
      },
      {
        title: "Ready-Made PCB Solutions",
        bullets: [
          "Optimized reference boards that can be adapted quickly.",
          "Great for showcasing best practices within tight timelines.",
        ],
      },
      {
        title: "Documentation & Support",
        bullets: [
          "Gerbers, assembly drawings and testing playbooks delivered.",
          "Mentorship across toolchains, fabrication and validation.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/projects/pcb/pcb.jpg",
        alt: "Engineer probing a high-density PCB",
        label: "HDI Stack",
      },
      {
        src: "/images/projects/pcb/integration.jpg",
        alt: "System integration test bench",
        label: "System Bring-up",
      },
      {
        src: "/images/projects/pcb/circuit.png",
        alt: "PCB layout rendered inside CAD software",
        label: "Layout Review",
      },
    ],
  },
  {
    id: "robotics",
    title: "Robotics",
    description:
      "Mechanized systems that merge mechanical design, control electronics and autonomy. Programs span automation, healthcare bots, education and defense prototypes.",
    offerings: [
      {
        title: "Custom Robotics Projects",
        bullets: [
          "Build robots aligned to automation, healthcare, or education scenarios.",
          "Covers drivetrain design, sensor fusion and embedded control.",
        ],
      },
      {
        title: "Pre-Designed Robotics Solutions",
        bullets: [
          "Reference bots that can be tuned for college expos or grants.",
          "Accelerate delivery while retaining room for innovation.",
        ],
      },
      {
        title: "Documentation & Support",
        bullets: [
          "Mechanical drawings, wiring and firmware repositories included.",
          "Coach-led testing, tuning and presentation rehearsals.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/projects/robotics/robot.jpg",
        alt: "Autonomous robot with sensors and actuators",
        label: "Robot",
        details: {
          description: "Advanced autonomous robot designed for multiple applications including education, research and industrial automation. Features intelligent navigation, object detection and programmable task execution capabilities.",
          features: [
            "Autonomous navigation with obstacle avoidance",
            "Multiple sensors including ultrasonic, IR and camera",
            "Programmable microcontroller (Arduino/Raspberry Pi)",
            "Wireless remote control and monitoring",
            "Modular design for easy customization",
            "Object detection and recognition",
            "Voice command integration capability"
          ],
          specifications: [
            "Payload Capacity: 2-5 kg",
            "Battery Life: 2-4 hours",
            "Speed: 0.5 m/s",
            "Sensors: 8+ types"
          ]
        }
      },
      {
        src: "/images/projects/robotics/rover.webp",
        alt: "All-terrain rover for exploration and research",
        label: "Rover",
        details: {
          description: "Rugged all-terrain rover designed for exploration, research and outdoor applications. Built with robust suspension system and advanced sensor array for navigation in challenging environments.",
          features: [
            "All-terrain wheels with independent suspension",
            "GPS navigation and waypoint tracking",
            "Real-time video streaming from onboard camera",
            "Environmental sensors (temperature, humidity, gas)",
            "Remote operation via mobile app or controller",
            "Autonomous path planning and mapping",
            "Solar panel option for extended missions"
          ],
          specifications: [
            "Terrain: Sand, gravel, rocks, slopes up to 30°",
            "Range: 500m (remote control)",
            "Speed: 1-2 m/s",
            "Operating Time: 3-5 hours"
          ]
        }
      },
      {
        src: "/images/projects/robotics/bot-arm.jpg",
        alt: "Robotic arm with precision gripper for pick and place",
        label: "Bot Arm",
        details: {
          description: "Precision robotic arm designed for pick-and-place operations, assembly tasks and educational demonstrations. Features multiple degrees of freedom and programmable motion control for versatile applications.",
          features: [
            "5-6 degrees of freedom (DOF) for complex movements",
            "Precision servo motors with position feedback",
            "Programmable motion sequences",
            "Multiple gripper options (suction, claw, magnetic)",
            "Computer vision integration for object recognition",
            "Teach pendant for manual programming",
            "Safety features including force sensing"
          ],
          specifications: [
            "Reach: 500-800mm",
            "Payload: 500g-2kg",
            "Repeatability: ±0.5mm",
            "Control: Arduino, ROS, or PLC"
          ]
        }
      },
      {
        src: "/images/projects/robotics/conveyer-belt.jpg",
        alt: "Automated conveyer belt system for material handling",
        label: "Conveyer Belt",
        details: {
          description: "Automated conveyer belt system designed for material handling, sorting and industrial automation education. Features variable speed control, sensor integration and programmable logic for smart manufacturing applications.",
          features: [
            "Variable speed motor control",
            "Object detection sensors for automation",
            "Programmable logic controller (PLC) integration",
            "Sorting mechanism with multiple output lanes",
            "Emergency stop and safety features",
            "Load capacity monitoring",
            "Modular design for easy reconfiguration"
          ],
          specifications: [
            "Belt Length: 1-3 meters (customizable)",
            "Speed: 0.1-2 m/s (adjustable)",
            "Load Capacity: 10-50 kg",
            "Power: 24V DC motor"
          ]
        }
      },
    ],
  },
  {
    id: "web",
    title: "Web Development",
    description:
      "Full-stack builds that span content hubs, ecommerce portals and secure access layers. Each engagement blends UX thinking, performance and deployment best practices.",
    offerings: [
      {
        title: "Custom Web Projects",
        bullets: [
          "Requirement workshops to scope CMS, e-commerce, or portal use cases.",
          "Design systems, component libraries and integrations planned together.",
        ],
      },
      {
        title: "Pre-Designed Web Solutions",
        bullets: [
          "Template accelerators for landing pages, stores, or dashboards.",
          "Ideal for students needing polished UI quickly.",
        ],
      },
      {
        title: "Full Project Support",
        bullets: [
          "Backend wiring, database setup and deployment assistance.",
          "Performance tuning, accessibility checks and UX reviews.",
        ],
      },
    ],
    focus: ["Web Access", "Ecommerce"],
    gallery: [
      {
        src: "/images/projects/web/web-access.png",
        alt: "Secure web access illustration",
        label: "Web Access",
      },
      {
        src: "/images/projects/web/ecommerce.jpg",
        alt: "Ecommerce storefront analytics",
        label: "Ecommerce",
      },
      {
        src: "/images/projects/web/agency-pods.jpg",
        alt: "Team reviewing analytics charts and laptops",
        label: "Agency Pods",
      },
    ],
  },
];
