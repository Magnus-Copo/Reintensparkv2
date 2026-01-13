"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";

import { PageHero } from "@/components/ui/PageHero";
import { NeonButton } from "@/components/ui/NeonButton";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { hardwareHighlights } from "@/data/practice";
import type { ProjectGalleryImage } from "@/data/projects";

type FilterCategory = "all" | "drones" | "hardware" | "robotics";

interface CategorizedProject extends ProjectGalleryImage {
  category: FilterCategory;
}

// Drones Gallery
const dronesGallery: CategorizedProject[] = [
  {
    src: "https://reintenspark.com/wp-content/uploads/2025/01/diy-drone.jpg",
    alt: "DIY Drone build kit with components",
    label: "DIY Drone",
    category: "drones",
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
    src: "https://reintenspark.com/wp-content/uploads/2025/01/FPV-drone.jpg",
    alt: "FPV Racing Drone in flight",
    label: "FPV Drone",
    category: "drones",
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
    src: "https://reintenspark.com/wp-content/uploads/2025/01/landmine-dedector.jpg",
    alt: "Landmine Detector Drone with specialized sensors",
    label: "Landmine Detector",
    category: "drones",
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
    src: "https://reintenspark.com/wp-content/uploads/2025/01/mini-drones.jpg",
    alt: "Compact Mini Drone",
    label: "Mini Drone",
    category: "drones",
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
];

// Hardware Projects Gallery
const hardwareGallery: CategorizedProject[] = [
  {
    src: "https://reintenspark.com/wp-content/uploads/2025/01/3D-scaled.jpg",
    alt: "3D 8x8x8 LED Cube with stunning light patterns",
    label: "3D 8x8x8 LED Cube",
    category: "hardware",
    details: {
      description: "Mesmerizing 3D LED cube display with 512 individually addressable LEDs arranged in an 8x8x8 matrix. Create stunning 3D animations, patterns and visual effects with programmable control for educational and entertainment purposes.",
      features: [
        "512 RGB LEDs in 8x8x8 cube configuration",
        "Microcontroller-based animation control",
        "Pre-programmed patterns and custom animation support",
        "Multiple display modes: waves, rain, fireworks and more",
        "Real-time music visualization capability",
        "USB programmable with Arduino IDE support",
        "Acrylic frame with sturdy construction"
      ],
      specifications: [
        "Dimensions: 20cm x 20cm x 20cm",
        "LEDs: 512 RGB (8x8x8)",
        "Power Supply: 5V 10A",
        "Controller: ATmega328P/ESP32",
        "Frame Rate: 60 FPS"
      ]
    }
  },
  {
    src: "https://reintenspark.com/wp-content/uploads/2025/01/IMG-20240702-WA0004-scaled.jpg",
    alt: "Smart Traffic Signal Control System",
    label: "Traffic Signal Control System",
    category: "hardware",
    details: {
      description: "Intelligent traffic signal control system with density-based timing, emergency vehicle detection and centralized monitoring. Demonstrates embedded systems, sensor integration and smart city concepts for traffic management optimization.",
      features: [
        "Density-based adaptive signal timing using IR sensors",
        "Emergency vehicle priority detection system",
        "Real-time traffic flow monitoring and analytics",
        "Wireless communication for centralized control",
        "LCD display for countdown and status indication",
        "Manual override and pedestrian crossing integration",
        "Night mode with reduced timing cycles"
      ],
      specifications: [
        "Signal Types: 4-way intersection control",
        "Sensors: IR proximity, RFID for emergency vehicles",
        "Display: 7-segment LED countdown timers",
        "Communication: Wi-Fi/GSM module",
        "Power: 12V DC with battery backup"
      ]
    }
  },
  {
    src: "https://reintenspark.com/wp-content/uploads/2025/01/WhatsApp-Image-2024-12-27-at-11.22.22_79c7aca9-scaled.jpg",
    alt: "Automated Tablet Dispenser Machine",
    label: "Tablet Dispenser",
    category: "hardware",
    details: {
      description: "Automated medication dispensing system with scheduled reminders, dosage control and patient monitoring. Perfect for healthcare applications, elderly care and demonstrating IOT-enabled medical device concepts with safety features.",
      features: [
        "Programmable medication schedule with alarms",
        "Multiple compartment system for different medicines",
        "LCD touchscreen for easy programming",
        "Mobile app integration for remote monitoring",
        "Dosage tracking and adherence reports",
        "Safety lock mechanism with authentication",
        "Low medicine level alerts and refill reminders"
      ],
      specifications: [
        "Compartments: 28 (4 weeks daily dosage)",
        "Capacity: 15-20 tablets per compartment",
        "Display: 3.5-inch touchscreen LCD",
        "Connectivity: Wi-Fi, Bluetooth",
        "Battery: Rechargeable with 30-day backup"
      ]
    }
  },
  {
    src: "https://reintenspark.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-14.36.01_385f8f3c-scaled.jpg",
    alt: "Smart Robot with AI capabilities",
    label: "Smart Robot",
    category: "hardware",
    details: {
      description: "Advanced autonomous smart robot equipped with AI-powered navigation, object recognition, voice control and multi-sensor integration. Perfect for educational demonstrations in robotics, automation and artificial intelligence applications.",
      features: [
        "AI-powered computer vision for object detection and tracking",
        "SLAM navigation with autonomous path planning",
        "Voice recognition and natural language processing",
        "Multiple sensors: ultrasonic, infrared, gyroscope",
        "Smartphone app control with real-time video streaming",
        "Programmable tasks and behavior customization",
        "Obstacle avoidance and edge detection"
      ],
      specifications: [
        "Processor: Raspberry Pi 4 / Jetson Nano",
        "Camera: HD 1080p with night vision",
        "Speed: Up to 1.5 m/s",
        "Battery Life: 4-6 hours continuous operation",
        "Operating Range: Indoor/Outdoor capable"
      ]
    }
  },
  {
    src: "https://reintenspark.com/wp-content/uploads/2025/01/WhatsApp-Image-2024-12-30-at-14.40.44_c562d470-scaled.jpg",
    alt: "Arduino Thermoelectric Generator System",
    label: "Thermoelectric Generator",
    category: "hardware",
    details: {
      description: "Arduino-based thermoelectric power generation system that converts temperature differences into electrical energy. Perfect for understanding renewable energy concepts and power electronics.",
      features: [
        "Thermoelectric Peltier modules for energy conversion",
        "Arduino-based monitoring and control system",
        "Real-time voltage and current measurement",
        "Heat sink design for optimal temperature differential",
        "LED indicators for power generation status",
        "Educational kit with detailed documentation"
      ],
      specifications: [
        "Output Voltage: 3-12V DC",
        "Max Power: 5W",
        "Temperature Range: 50-200°C differential",
        "Efficiency: 5-8%"
      ]
    }
  },
  {
    src: "https://reintenspark.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-15-at-14.47.36_e41d5a2f-scaled.jpg",
    alt: "Fire Fighting Robot with water cannon",
    label: "Fire Fighting Robot",
    category: "hardware",
    details: {
      description: "Autonomous fire-fighting robot equipped with flame sensors, water pump system and obstacle avoidance. Designed for educational demonstrations of robotics and emergency response systems.",
      features: [
        "Multiple flame detection sensors for 360° coverage",
        "High-pressure water pump and nozzle system",
        "Ultrasonic sensors for obstacle detection",
        "Remote control and autonomous navigation modes",
        "Heat-resistant chassis and components",
        "Real-time video feedback capability"
      ],
      specifications: [
        "Detection Range: 5m",
        "Water Capacity: 500ml",
        "Speed: 30cm/s",
        "Operating Time: 20-25 minutes"
      ]
    }
  },
  {
    src: "https://reintenspark.com/wp-content/uploads/2025/01/WhatsApp-Image-2024-11-28-at-13.04.20_657b29ef-scaled.jpg",
    alt: "EV Charging Station prototype",
    label: "EV Charging Station",
    category: "hardware",
    details: {
      description: "Prototype electric vehicle charging station with smart monitoring and billing system. Demonstrates power electronics, IOT integration and renewable energy concepts.",
      features: [
        "Smart charging with current and voltage monitoring",
        "RFID-based user authentication and billing",
        "Mobile app integration for remote monitoring",
        "Solar panel compatibility for green charging",
        "Multiple charging port support",
        "Real-time energy consumption tracking"
      ],
      specifications: [
        "Output: 220V AC / 12-48V DC",
        "Max Current: 30A",
        "Charging Speed: Level 2",
        "Display: 7-inch touchscreen"
      ]
    }
  },
  {
    src: "https://reintenspark.com/wp-content/uploads/2025/01/IMG-20240704-WA0010-scaled.jpg",
    alt: "Smart Helmet with safety features",
    label: "Smart Helmet",
    category: "hardware",
    details: {
      description: "IOT-enabled smart helmet with accident detection, GPS tracking and emergency alert system. Enhances rider safety with integrated sensors and wireless connectivity.",
      features: [
        "Accelerometer for crash detection and automatic SOS",
        "GPS module for real-time location tracking",
        "Bluetooth connectivity for hands-free calls",
        "Built-in indicators and brake lights",
        "Mobile app for emergency contacts and ride analytics",
        "Rechargeable battery with long life"
      ],
      specifications: [
        "Weight: 1.2kg",
        "Battery Life: 8-10 hours",
        "Connectivity: Bluetooth 5.0, GPS",
        "Alert Response: <2 seconds"
      ]
    }
  },
];

// Robotics Projects Gallery
const roboticsGallery: CategorizedProject[] = [
  {
    src: "https://reintenspark.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-14.36.01_385f8f3c-scaled.jpg",
    alt: "Advanced Autonomous Robot",
    label: "Smart Robot",
    category: "robotics",
    details: {
      description: "Advanced autonomous robot with AI-powered navigation, object recognition and multi-functional capabilities. Perfect for research and educational demonstrations in robotics and automation.",
      features: [
        "AI-powered computer vision for object detection",
        "SLAM (Simultaneous Localization and Mapping) navigation",
        "Multiple sensors: LiDAR, ultrasonic, infrared",
        "Robotic arm with 5 degrees of freedom",
        "Voice control and smartphone app integration",
        "Autonomous path planning and obstacle avoidance"
      ],
      specifications: [
        "Payload Capacity: 5kg",
        "Speed: 1.5 m/s",
        "Battery Life: 4-6 hours",
        "Operating Range: Indoor/Outdoor"
      ]
    }
  },
  {
    src: "https://reintenspark.com/wp-content/uploads/2025/01/rover.webp",
    alt: "All-terrain Rover Robot",
    label: "Rover",
    category: "robotics",
    details: {
      description: "All-terrain rover designed for exploration and research applications. Features robust suspension system, high-torque motors and advanced sensor suite for challenging environments.",
      features: [
        "6-wheel independent suspension system",
        "High-torque brushless motors for rough terrain",
        "HD camera with pan-tilt mechanism",
        "Environmental sensors (temperature, humidity, gas)",
        "Long-range wireless communication (up to 1km)",
        "Solar panel option for extended missions"
      ],
      specifications: [
        "Weight: 8kg",
        "Max Speed: 2 m/s",
        "Climb Angle: 45°",
        "Battery: 12V 10Ah (4-5 hours)"
      ]
    }
  },
  {
    src: "https://reintenspark.com/wp-content/uploads/2025/01/bot-arm.jpg",
    alt: "Robotic Arm with precision control",
    label: "Robotic Arm",
    category: "robotics",
    details: {
      description: "Precision robotic arm with 6 degrees of freedom for pick-and-place operations, assembly tasks and educational demonstrations. Features servo motors and programmable control.",
      features: [
        "6 DOF with high-precision servo motors",
        "Gripper with force feedback",
        "Teach-and-repeat programming mode",
        "Computer vision integration for object recognition",
        "Python and Arduino programming support",
        "Safety features with torque limiting"
      ],
      specifications: [
        "Reach: 50cm",
        "Payload: 500g",
        "Repeatability: ±0.5mm",
        "Control: Serial, Bluetooth, Wi-Fi"
      ]
    }
  },
  {
    src: "https://reintenspark.com/wp-content/uploads/2025/01/conveyer-belt.jpg",
    alt: "Automated Conveyor Belt System",
    label: "Conveyor Belt System",
    category: "robotics",
    details: {
      description: "Automated conveyor belt system with object sorting, counting and quality inspection capabilities. Demonstrates industrial automation and PLC programming concepts.",
      features: [
        "Variable speed DC motor control",
        "IR sensors for object detection and counting",
        "Automatic sorting mechanism with pneumatic actuators",
        "PLC-based control system",
        "HMI touchscreen for monitoring and control",
        "Emergency stop and safety interlocks"
      ],
      specifications: [
        "Belt Length: 2m",
        "Speed: 0-60 cm/s (variable)",
        "Load Capacity: 10kg",
        "Power: 24V DC"
      ]
    }
  },
];

export default function HardwarePage() {
  const [selectedProject, setSelectedProject] = useState<CategorizedProject | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  // Combine all projects with their categories
  const allProjects = useMemo(() => [
    ...dronesGallery,
    ...hardwareGallery,
    ...roboticsGallery
  ], []);

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return allProjects;
    }
    return allProjects.filter(project => project.category === activeFilter);
  }, [activeFilter, allProjects]);

  const filterCategories = [
    { id: "all" as FilterCategory, label: "All", count: allProjects.length },
    { id: "drones" as FilterCategory, label: "Drones", count: dronesGallery.length },
    { id: "hardware" as FilterCategory, label: "Hardware Projects", count: hardwareGallery.length },
    { id: "robotics" as FilterCategory, label: "Robotics", count: roboticsGallery.length }
  ];

  return (
    <div className="space-y-16">
      <PageHero
        kicker="Hardware"
        title="From Concept to Circuit."
        description="We specialize in hands-on hardware engineering that transforms ideas into reliable, working solutions"
        highlight="Prototyping · Testing · Industrialization"
      >
        <NeonButton href="/rd">Engage the Lab</NeonButton>
      </PageHero>

      <section className="grid gap-8 md:grid-cols-3">
        {hardwareHighlights.categories.map((category) => (
          <article
            key={category.title}
            className="rounded-[28px] border border-white/10 bg-card/70 p-6 text-white transition duration-300 hover:border-primary/80 hover:shadow-[0_0_35px_rgba(57,255,20,0.45)] focus-visible:border-primary/80 focus-visible:shadow-[0_0_35px_rgba(57,255,20,0.45)]"
          >
            <h3 className="text-xl font-semibold">{category.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {category.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-primary">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="rounded-[32px] border border-primary/30 bg-black/50 p-8">
        <h3 className="mb-6 text-2xl font-semibold text-white">Industry Applications</h3>
        
        {/* Filter Tabs */}
        <div className="mb-8 flex flex-wrap gap-3">
          {filterCategories.map((category) => (
            <motion.button
              key={category.id}
              type="button"
              onClick={() => setActiveFilter(category.id)}
              className={`relative overflow-hidden rounded-full px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-primary text-black shadow-[0_0_20px_rgba(57,255,20,0.6)]"
                  : "border border-white/20 text-white/70 hover:border-primary/50 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeFilter === category.id && (
                <motion.div
                  className="absolute inset-0 bg-primary"
                  layoutId="activeFilter"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {category.label}
                <span className={`rounded-full px-2 py-0.5 text-xs ${
                  activeFilter === category.id
                    ? "bg-black/20"
                    : "bg-white/10"
                }`}>
                  {category.count}
                </span>
              </span>
            </motion.button>
          ))}
        </div>

        {/* Filtered Gallery */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProjects.map((project, index) => (
            <motion.button
              key={`${project.category}-${project.label}-${index}`}
              type="button"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: index * 0.03
              }}
              className="group relative cursor-pointer overflow-hidden rounded-[24px] border border-white/10 bg-card/50 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] text-left"
              onClick={() => setSelectedProject(project)}
              aria-label={`View details of ${project.label}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    quality={100}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {/* Category Badge */}
                  <motion.div 
                    className="absolute top-3 right-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold uppercase text-black backdrop-blur-sm"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.2 }}
                  >
                    {project.category}
                  </motion.div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <motion.span 
                      className="flex items-center gap-2 text-sm font-medium text-white"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      <span>Explore Details</span>
                      <svg 
                        className="h-4 w-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </motion.span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white group-hover:text-primary transition-colors">
                    {project.label}
                  </h3>
                  {project.details && (
                    <p className="mt-1 text-xs text-white/60 line-clamp-2">
                      {project.details.description}
                    </p>
                  )}
                </div>
              </motion.button>
            ))}
        </div>

        {/* Results Count */}
        <div className="mt-6 text-center text-sm text-white/50">
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          {activeFilter !== "all" && ` in ${filterCategories.find(c => c.id === activeFilter)?.label}`}
        </div>
      </section>

      {selectedProject?.details && (
        <ProjectModal
          project={{
            title: selectedProject.label,
            description: selectedProject.details.description,
            image: selectedProject.src,
            imageAlt: selectedProject.alt,
            features: selectedProject.details.features,
            specifications: selectedProject.details.specifications,
            category: "Hardware"
          }}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
