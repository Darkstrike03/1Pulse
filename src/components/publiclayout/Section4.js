import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCamera, 
  faNetworkWired, 
  faShieldAlt, 
  faRobot, 
  faUsers 
} from '@fortawesome/free-solid-svg-icons';

class Section4 extends React.Component {
  render() {
    const futureFeatures = [
      {
        title: "Medical AR Scanner",
        subtitle: "Advanced Visual Diagnostics",
        icon: faCamera,
        features: [
          "Skin Condition Scanner",
          "Injury Assessment",
          "Vitals Estimation",
          "Pill Identification",
          "Eye Health Check"
        ],
        color: "#e8f5e8",
        accentColor: "#4caf50"
      },
      {
        title: "Medical Internet of Things",
        subtitle: "Connected Health Ecosystem",
        icon: faNetworkWired,
        features: [
          "Smart Watch Integration",
          "Heart Rate Monitoring",
          "O2 Saturation Tracking",
          "Sleep Pattern Analysis",
          "Real-time Health Alerts"
        ],
        color: "#f1f8e9",
        accentColor: "#66bb6a"
      },
      {
        title: "HealthChain Authentication",
        subtitle: "Blockchain Security",
        icon: faShieldAlt,
        features: [
          "Cross-Border Medical Passport",
          "Medical Data Encryption",
          "Biometric Medical ID",
          "Secure Health Records",
          "Identity Verification"
        ],
        color: "#e8f5e8",
        accentColor: "#81c784"
      },
      {
        title: "AI Medical Assistant",
        subtitle: "Intelligent Healthcare Support",
        icon: faRobot,
        features: [
          "Symptom-to-Specialist Router",
          "Personalized Treatment Plans",
          "Multi-Language Translation",
          "Predictive Health Analysis",
          "24/7 Medical Guidance"
        ],
        color: "#f1f8e9",
        accentColor: "#a5d6a7"
      },
      {
        title: "MedHive Community",
        subtitle: "Collaborative Healthcare Network",
        icon: faUsers,
        features: [
          "Anonymous Case Sharing",
          "Rare Disease Network",
          "Treatment Cost Transparency",
          "Medical Travel Optimization",
          "Peer Support Groups"
        ],
        color: "#e8f5e8",
        accentColor: "#c8e6c9"
      }
    ];

    return (
      <section 
        className="py-5"
        style={{
          background: 'linear-gradient(135deg, #f8f9fa 0%, rgba(232, 245, 233, 0.4) 50%, #ffffff 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Animated background elements */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'radial-gradient(circle at 30% 20%, rgba(76, 175, 80, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(129, 199, 132, 0.03) 0%, transparent 50%)',
            zIndex: 1
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Header Section */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 text-center">
              <div className="mb-4">
                <span 
                  style={{
                    background: 'linear-gradient(45deg, #4caf50, #81c784)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '2px'
                  }}
                >
                  Coming Soon
                </span>
              </div>
              <h2 
                className="display-5 fw-bold mb-4"
                style={{
                  color: '#1b5e20',
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
                }}
              >
                Future of Healthcare Technology
              </h2>
              
              <p 
                className="lead"
                style={{
                  color: '#2e7d32',
                  fontSize: '1.2rem',
                  fontWeight: '400',
                  lineHeight: '1.7',
                  maxWidth: '700px',
                  margin: '0 auto'
                }}
              >
                Explore the cutting-edge innovations that will reshape healthcare delivery, 
                powered by AI, blockchain, and IoT technologies.
              </p>
            </div>
          </div>

          {/* Timeline Layout */}
          <div className="row">
            <div className="col-12">
              <div className="position-relative">
                {/* Central Timeline Line */}
                <div
                  className="timeline-line"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '0',
                    bottom: '0',
                    width: '4px',
                    background: 'linear-gradient(180deg, #4caf50 0%, #81c784 50%, #a5d6a7 100%)',
                    transform: 'translateX(-50%)',
                    zIndex: 1,
                    borderRadius: '2px'
                  }}
                />

                {futureFeatures.map((feature, index) => (
                  <div key={index} className="row mb-5 align-items-center">
                    {/* Left side content (odd indexes) */}
                    {index % 2 === 0 ? (
                      <>
                        <div className="col-lg-5 col-md-6 mb-3 mb-md-0">
                          <div 
                            className="card border-0 h-100"
                            style={{
                              background: `linear-gradient(135deg, ${feature.color} 0%, rgba(255, 255, 255, 0.9) 100%)`,
                              borderRadius: '20px',
                              boxShadow: '0 15px 35px rgba(76, 175, 80, 0.1)',
                              transition: 'all 0.4s ease',
                              transform: 'perspective(1000px) rotateY(5deg)',
                              marginRight: '20px'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) translateY(-10px)';
                              e.currentTarget.style.boxShadow = '0 25px 50px rgba(76, 175, 80, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'perspective(1000px) rotateY(5deg) translateY(0)';
                              e.currentTarget.style.boxShadow = '0 15px 35px rgba(76, 175, 80, 0.1)';
                            }}
                          >
                            <div className="card-body p-4">
                              <div className="d-flex align-items-center mb-3">
                                <div
                                  style={{
                                    width: '60px',
                                    height: '60px',
                                    background: `linear-gradient(135deg, ${feature.accentColor} 0%, ${feature.accentColor}aa 100%)`,
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: '15px',
                                    boxShadow: `0 8px 20px ${feature.accentColor}33`
                                  }}
                                >
                                  <FontAwesomeIcon 
                                    icon={feature.icon} 
                                    style={{ fontSize: '1.5rem', color: '#ffffff' }}
                                  />
                                </div>
                                <div>
                                  <h4 
                                    style={{
                                      color: '#1b5e20',
                                      fontWeight: '700',
                                      margin: '0',
                                      fontSize: '1.3rem'
                                    }}
                                  >
                                    {feature.title}
                                  </h4>
                                  <p 
                                    style={{
                                      color: feature.accentColor,
                                      fontSize: '0.9rem',
                                      margin: '0',
                                      fontWeight: '500'
                                    }}
                                  >
                                    {feature.subtitle}
                                  </p>
                                </div>
                              </div>
                              
                              <div className="row">
                                {feature.features.map((item, idx) => (
                                  <div key={idx} className="col-12 mb-2">
                                    <div 
                                      className="d-flex align-items-center"
                                      style={{
                                        background: 'rgba(255, 255, 255, 0.6)',
                                        borderRadius: '8px',
                                        padding: '8px 12px',
                                        transition: 'all 0.3s ease'
                                      }}
                                      onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                                        e.currentTarget.style.transform = 'translateX(5px)';
                                      }}
                                      onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)';
                                        e.currentTarget.style.transform = 'translateX(0)';
                                      }}
                                    >
                                      <div
                                        style={{
                                          width: '6px',
                                          height: '6px',
                                          background: feature.accentColor,
                                          borderRadius: '50%',
                                          marginRight: '10px'
                                        }}
                                      />
                                      <span 
                                        style={{
                                          color: '#2e7d32',
                                          fontSize: '0.9rem',
                                          fontWeight: '500'
                                        }}
                                      >
                                        {item}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-12 text-center">
                          <div
                            style={{
                              width: '40px',
                              height: '40px',
                              background: `linear-gradient(135deg, ${feature.accentColor} 0%, ${feature.accentColor}cc 100%)`,
                              borderRadius: '50%',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              position: 'relative',
                              zIndex: 2,
                              boxShadow: `0 0 0 8px rgba(255, 255, 255, 1), 0 0 0 12px ${feature.accentColor}22`
                            }}
                          >
                            <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.2rem' }}>
                              {index + 1}
                            </span>
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-6"></div>
                      </>
                    ) : (
                      /* Right side content (even indexes) */
                      <>
                        <div className="col-lg-5 col-md-6"></div>
                        <div className="col-lg-2 col-md-12 text-center">
                          <div
                            style={{
                              width: '40px',
                              height: '40px',
                              background: `linear-gradient(135deg, ${feature.accentColor} 0%, ${feature.accentColor}cc 100%)`,
                              borderRadius: '50%',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              position: 'relative',
                              zIndex: 2,
                              boxShadow: `0 0 0 8px rgba(255, 255, 255, 1), 0 0 0 12px ${feature.accentColor}22`
                            }}
                          >
                            <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.2rem' }}>
                              {index + 1}
                            </span>
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-6 mb-3 mb-md-0">
                          <div 
                            className="card border-0 h-100"
                            style={{
                              background: `linear-gradient(135deg, ${feature.color} 0%, rgba(255, 255, 255, 0.9) 100%)`,
                              borderRadius: '20px',
                              boxShadow: '0 15px 35px rgba(76, 175, 80, 0.1)',
                              transition: 'all 0.4s ease',
                              transform: 'perspective(1000px) rotateY(-5deg)',
                              marginLeft: '20px'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) translateY(-10px)';
                              e.currentTarget.style.boxShadow = '0 25px 50px rgba(76, 175, 80, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg) translateY(0)';
                              e.currentTarget.style.boxShadow = '0 15px 35px rgba(76, 175, 80, 0.1)';
                            }}
                          >
                            <div className="card-body p-4">
                              <div className="d-flex align-items-center mb-3">
                                <div
                                  style={{
                                    width: '60px',
                                    height: '60px',
                                    background: `linear-gradient(135deg, ${feature.accentColor} 0%, ${feature.accentColor}aa 100%)`,
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: '15px',
                                    boxShadow: `0 8px 20px ${feature.accentColor}33`
                                  }}
                                >
                                  <FontAwesomeIcon 
                                    icon={feature.icon} 
                                    style={{ fontSize: '1.5rem', color: '#ffffff' }}
                                  />
                                </div>
                                <div>
                                  <h4 
                                    style={{
                                      color: '#1b5e20',
                                      fontWeight: '700',
                                      margin: '0',
                                      fontSize: '1.3rem'
                                    }}
                                  >
                                    {feature.title}
                                  </h4>
                                  <p 
                                    style={{
                                      color: feature.accentColor,
                                      fontSize: '0.9rem',
                                      margin: '0',
                                      fontWeight: '500'
                                    }}
                                  >
                                    {feature.subtitle}
                                  </p>
                                </div>
                              </div>
                              
                              <div className="row">
                                {feature.features.map((item, idx) => (
                                  <div key={idx} className="col-12 mb-2">
                                    <div 
                                      className="d-flex align-items-center"
                                      style={{
                                        background: 'rgba(255, 255, 255, 0.6)',
                                        borderRadius: '8px',
                                        padding: '8px 12px',
                                        transition: 'all 0.3s ease'
                                      }}
                                      onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                                        e.currentTarget.style.transform = 'translateX(5px)';
                                      }}
                                      onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)';
                                        e.currentTarget.style.transform = 'translateX(0)';
                                      }}
                                    >
                                      <div
                                        style={{
                                          width: '6px',
                                          height: '6px',
                                          background: feature.accentColor,
                                          borderRadius: '50%',
                                          marginRight: '10px'
                                        }}
                                      />
                                      <span 
                                        style={{
                                          color: '#2e7d32',
                                          fontSize: '0.9rem',
                                          fontWeight: '500'
                                        }}
                                      >
                                        {item}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="row justify-content-center mt-5">
            <div className="col-lg-8 text-center">
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(255, 255, 255, 0.5) 100%)',
                  borderRadius: '20px',
                  padding: '40px 30px',
                  border: '2px solid rgba(76, 175, 80, 0.1)'
                }}
              >
                <h3 
                  style={{
                    color: '#1b5e20',
                    marginBottom: '15px',
                    fontWeight: '600'
                  }}
                >
                  Be Part of the Healthcare Revolution
                </h3>
                <p 
                  style={{
                    color: '#2e7d32',
                    marginBottom: '25px',
                    fontSize: '1.1rem'
                  }}
                >
                  Stay updated on our latest innovations and be the first to experience the future of healthcare.
                </p>
                <button
                  className="btn btn-lg px-5 py-3"
                  style={{
                    background: 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)',
                    border: 'none',
                    color: '#ffffff',
                    fontWeight: '600',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 25px rgba(76, 175, 80, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 12px 35px rgba(76, 175, 80, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 8px 25px rgba(76, 175, 80, 0.3)';
                  }}
                >
                  Join Beta Program
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Add CSS for hiding the timeline line on smaller screens */}
        <style>
          {`
            @media (max-width: 768px) {
              .timeline-line {
                display: none;
              }
            }
          `}
        </style>
      </section>
    );
  }
}

export default Section4;