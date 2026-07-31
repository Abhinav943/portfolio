import vidnovaImg from "../assets/vidnova.png";
import talknestImg from "../assets/talknest.png";
import lmsImg from "../assets/lms.png";

export const projectsData = [
  {
    id: "vidnova",
    title: "VidNova",
    description: "Video streaming platform with secure uploads, subscriptions, watch history and responsive UI.",
    image: vidnovaImg,
    tech: ["Next.js", "React", "MongoDB", "Cloudinary"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "talknest",
    title: "TalkNest",
    description: "Realtime chat application with rooms, private messaging, typing indicators and user presence.",
    image: talknestImg,
    tech: ["Socket.io", "Node.js", "MongoDB", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "lms",
    title: "Loan Management System",
    description: "Complete loan lifecycle management system with borrower onboarding, repayments and reports.",
    image: lmsImg,
    tech: ["Java", "Spring Boot", "PostgreSQL", "JWT"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "zynex",
    title: "Zynex",
    description: "Zero-dependency validation library for email, password, URI, and more. Published on npm.",
    image: null,
    tech: ["TypeScript", "Vitest", "npm", "Zero Deps"],
    liveUrl: "#",
    githubUrl: "#"
  }
];
