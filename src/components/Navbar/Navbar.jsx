import { Moon,Sun } from "lucide-react";
import { useState } from "react";
import "./Navbar.css";
import { navItems } from "../../data/navigation";

export default function Navbar() {
  const [active, setActive] = useState("Home");
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
              <a 
                href={href} 
                className={active === label ? "active" : ""}
                onClick={() => setActive(label)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="theme-toggles">
          <button className="theme-toggle">
            <Sun size={18} />
          </button>
          <button className="theme-toggle active-theme">
            <Moon size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
}
