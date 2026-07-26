import { Moon,Sun } from "lucide-react";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
    const navItems = [
      { label: "Home", href: "#home" },
      { label: "Projects", href: "#projects" },
      { label: "Open Source", href: "#opensource" },
      { label: "Skills", href: "#skills" },
      { label: "Journey", href: "#journey" },
      { label: "Contact", href: "#contact" },
    ];
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <div className="logo-circle">A</div>

          <span>Abhinav Prajapati</span>
        </a>

        <ul className="navbar-links">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>

        <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
          {isDark ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </nav>
  );
}
