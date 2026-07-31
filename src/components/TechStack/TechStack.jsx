import { Server, Monitor, Database, Code, PenTool } from "lucide-react";
import { techStackData } from "../../data/techStackData";
import "./TechStack.css";

export default function TechStack() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "server": return <Server size={18} className="ts-icon" />;
      case "monitor": return <Monitor size={18} className="ts-icon cyan" />;
      case "database": return <Database size={18} className="ts-icon green" />;
      case "code": return <Code size={18} className="ts-icon orange" />;
      case "tool": return <PenTool size={18} className="ts-icon red" />;
      default: return null;
    }
  };

  return (
    <section className="techstack-section" id="skills">
      <div className="techstack-container">
        
        <div className="section-header">
          <div className="header-left">
            <span className="section-badge">TECH STACK</span>
            <h2 className="section-title">Tech I Work With</h2>
          </div>
        </div>

        <div className="techstack-grid">
          {techStackData.map((item, index) => (
            <div className="tech-card" key={index}>
              <div className="tech-card-header">
                <div className="tech-icon-wrapper">
                  {getIcon(item.icon)}
                </div>
                <h3 className="tech-category" style={
                  item.icon === 'monitor' ? { color: '#22D3EE'} : 
                  item.icon === 'database' ? { color: '#34D399'} :
                  item.icon === 'code' ? { color: '#F59E0B'} :
                  item.icon === 'tool' ? { color: '#EF4444'} : {}
                }>{item.category}</h3>
              </div>
              <p className="tech-list">{item.technologies}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
