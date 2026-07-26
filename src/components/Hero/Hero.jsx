import "./Hero.css";
import laptop from "../../assets/laptop.png";
import { ArrowRight, Download } from "lucide-react";
import { techCards, socialLinks } from "../../data/heroData";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span>Backend Engineer & Full Stack Developer</span>
          </div>

          <header className="hero-content">
            <h1 className="hero-heading">
              I build scalable systems
              <br />
              and delightful
              <br />
              <span>web experiences.</span>
            </h1>

            <p className="hero-description">
              Computer Science student passionate about backend architecture,
              developer tooling, and building products that solve real problems.
            </p>
          </header>

          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              <span>View My Projects</span>
              <ArrowRight className="btn-icon" size={18} />
            </a>

            <a href="/resume.pdf" download className="secondary-btn">
              <span>Download Resume</span>
              <Download className="btn-icon" size={18} />
            </a>
          </div>

          <div className="hero-socials-container">
            <span className="find-me-text">Find me on</span>
            <div className="hero-socials">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image">
            <img
              src={laptop}
              alt="Illustration of a developer workstation"
              className="hero-laptop"
            />

            {techCards.map(({ id, icon, position }) => (
              <div key={id} className="floating-icon-card" style={position}>
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
