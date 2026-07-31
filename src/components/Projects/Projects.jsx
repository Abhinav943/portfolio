import { ArrowRight, Star, ExternalLink, Play, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projectsData } from "../../data/projectsData";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="section-header">
          <div className="header-left">
            <span className="section-badge">FEATURED PROJECTS</span>
            <h2 className="section-title">Things I've Built</h2>
            <p className="section-subtitle">
              A selection of projects that showcase my skills<br/>
              and passion for building.
            </p>
          </div>
          <a href="#" className="view-all-btn">
            View all projects <ArrowRight size={16} />
          </a>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={project.id}>
              <div className="project-image-container">
                {project.image ? (
                  <>
                    <img src={project.image} alt={project.title} className="project-image" />
                    {index === 0 && (
                      <div className="image-badge">
                        <Play size={14} fill="currentColor" />
                      </div>
                    )}
                    {index === 1 && (
                      <div className="image-badge">
                        <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" width="14" height="14"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="image-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="project-image-fallback">
                    <div className="zynex-logo-large">
                      <div className="zynex-a">A</div>
                      <span>Zynex</span>
                    </div>
                    <div className="image-badge">
                      <Code2 size={14} />
                    </div>
                  </div>
                )}
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <Star size={18} className="star-icon" />
                </div>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map(t => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.liveUrl} className="project-link">
                    {project.id === "zynex" ? "npm Package" : "Live Demo"} <ExternalLink size={16} />
                  </a>
                  <a href={project.githubUrl} className="project-link">
                    GitHub <FaGithub size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
