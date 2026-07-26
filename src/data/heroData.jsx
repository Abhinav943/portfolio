import { Mail, Code2, Cloud, Terminal, PenTool } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export const techCards = [
  {
    id: "code",
    icon: <Code2 size={28} />,
    position: {
      top: "15%",
      left: "2%",
    },
  },
  {
    id: "cloud",
    icon: <Cloud size={28} />,
    position: {
      top: "12%",
      right: "8%",
    },
  },
  {
    id: "terminal",
    icon: <Terminal size={28} />,
    position: {
      bottom: "15%",
      right: "5%",
    },
  },
  {
    id: "pen",
    icon: <PenTool size={28} />,
    position: {
      bottom: "12%",
      left: "8%",
    },
  }
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Abhinav943",
    icon: <FaGithub size={18} />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-linkedin",
    icon: <FaLinkedin size={18} />,
  },
  {
    label: "Email",
    href: "mailto:your@email.com",
    icon: <Mail size={18} />,
  },
];
