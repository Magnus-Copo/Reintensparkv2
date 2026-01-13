export type Job = {
  id: string;
  role: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
};

export const jobs: Job[] = [
  {
    id: "hardware-rd-lead",
    role: "Hardware R&D Lead",
    location: "Bengaluru · Onsite",
    type: "Full-time",
    description:
      "Own prototyping and validation cycles for robotics, EV and medical electronics programs.",
    responsibilities: [
      "Coordinate with IOT + AI squads to align hardware roadmaps",
      "Define verification plans and compliance checklists",
      "Mentor interns and fellows inside the lab",
    ],
  },
  {
    id: "ai-course-architect",
    role: "AI Course Architect",
    location: "Hybrid",
    type: "Contract",
    description:
      "Design EdTech modules, projects and assessments for AI/ML cohorts.",
    responsibilities: [
      "Map lab datasets into curriculum assets",
      "Record micro-learning content and live walkthroughs",
      "Coordinate feedback loops with learners and industry mentors",
    ],
  },
  {
    id: "iot-fullstack-engineer",
    role: "IOT Full-Stack Engineer",
    location: "Remote",
    type: "Full-time",
    description:
      "Ship digital twins, command centers and telemetry APIs for connected hardware.",
    responsibilities: [
      "Develop Next.js dashboards and serverless APIs",
      "Harden device provisioning + security flows",
      "Partner with hardware squads for end-to-end testing",
    ],
  },
];
