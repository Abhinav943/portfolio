import { ArrowRight, Download, Tag, CheckCircle, AlertCircle, Code2, Shield, Settings, FileText } from "lucide-react";
import { openSourceData } from "../../data/openSourceData";
import "./OpenSource.css";

export default function OpenSource() {
  const getIcon = (name) => {
    switch (name) {
      case 'download': return <Download size={16} />;
      case 'version': return <Tag size={16} />;
      case 'test': return <CheckCircle size={16} />;
      case 'issue': return <AlertCircle size={16} />;
      default: return null;
    }
  };

  const getFeatureIcon = (index) => {
    switch (index) {
      case 0: return <Code2 size={14} className="feature-icon yellow" />;
      case 1: return <Shield size={14} className="feature-icon purple" />;
      case 2: return <Settings size={14} className="feature-icon blue" />;
      case 3: return <AlertCircle size={14} className="feature-icon red" />;
      case 4: return <FileText size={14} className="feature-icon green" />;
      default: return null;
    }
  };

  return (
    <section className="opensource-section" id="opensource">
      <div className="opensource-container">
        
        <div className="os-left">
          <span className="section-badge">OPEN SOURCE</span>
          <h2 className="section-title">Building for the<br/>Community</h2>
          <p className="section-subtitle">
            I love creating developer tools<br/>
            and contributing to open source.
          </p>
        </div>

        <div className="os-right">
          <div className="zynex-card">
            <div className="zynex-header">
              <div className="zynex-title-row">
                <div className="zynex-icon">
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 className="zynex-name">{openSourceData.title}</h3>
                  <span className="zynex-published">{openSourceData.published}</span>
                </div>
              </div>
              <a href="#" className="npm-btn">
                View on npm <ArrowRight size={16} />
              </a>
            </div>

            <p className="zynex-desc">{openSourceData.description}</p>

            <div className="zynex-stats">
              {openSourceData.stats.map((stat, i) => (
                <div className="stat-item" key={i}>
                  <div className="stat-icon-wrapper">{getIcon(stat.icon)}</div>
                  <div className="stat-content">
                    <span className="stat-label">{stat.label}</span>
                    <span className="stat-value">{stat.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="zynex-features">
              {openSourceData.features.map((feature, i) => (
                <div className="feature-pill" key={i}>
                  {getFeatureIcon(i)}
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
