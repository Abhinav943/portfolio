import { Rocket, Blocks, MessageSquare, Play, Package, LayoutGrid } from "lucide-react";
import { journeyData } from "../../data/journeyData";
import "./Journey.css";

export default function Journey() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "rocket": return <Rocket size={20} className="journey-icon" />;
      case "blocks": return <Blocks size={20} className="journey-icon" />;
      case "chat": return <MessageSquare size={20} className="journey-icon" />;
      case "play": return <Play size={20} className="journey-icon" />;
      case "package": return <Package size={20} className="journey-icon" />;
      case "grid": return <LayoutGrid size={20} className="journey-icon" />;
      default: return null;
    }
  };

  return (
    <section className="journey-section" id="journey">
      <div className="journey-container">
        
        <div className="section-header">
          <div className="header-left">
            <span className="section-badge">JOURNEY</span>
            <h2 className="section-title">My Journey So Far</h2>
          </div>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          <div className="timeline-events">
            {journeyData.map((item, index) => (
              <div className="timeline-event" key={index}>
                <div className="timeline-dot">
                  {getIcon(item.icon)}
                </div>
                <div className="timeline-content">
                  <h4 className="timeline-year">{item.year}</h4>
                  <p className="timeline-title">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
