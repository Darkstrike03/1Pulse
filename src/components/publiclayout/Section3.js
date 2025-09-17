import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard, faStore, faDollarSign, faLightbulb, faCalendarAlt, faChartLine } from "@fortawesome/free-solid-svg-icons";
class Section3 extends React.Component {
  render() {
    const benefits = [
      {
        title: "One-Card Access",
        description: "Single digital card for all healthcare services. No more carrying multiple cards or documents.",
        imageAlt: "Digital healthcare card",
        icon: faIdCard,
        gradient: "linear-gradient(135deg, rgba(129, 199, 132, 0.9) 0%, rgba(76, 175, 80, 0.8) 100%)"
      },
      {
        title: "Store Finding",
        description: "Instantly locate nearby medical stores with real-time inventory and competitive pricing.",
        imageAlt: "Medical store locator",
        icon: faStore,
        gradient: "linear-gradient(135deg, rgba(165, 214, 167, 0.9) 0%, rgba(129, 199, 132, 0.8) 100%)"
      },
      {
        title: "Cost Comparison",
        description: "Compare treatment costs across different hospitals and clinics to make informed decisions.",
        imageAlt: "Healthcare cost comparison",
        icon: faDollarSign,
        gradient: "linear-gradient(135deg, rgba(200, 230, 201, 0.9) 0%, rgba(165, 214, 167, 0.8) 100%)"
      },
      {
        title: "Alternative Suggestions",
        description: "Get AI-powered alternative treatment options and second opinions from verified doctors.",
        imageAlt: "Alternative treatment suggestions",
        icon: faLightbulb,
        gradient: "linear-gradient(135deg, rgba(129, 199, 132, 0.9) 0%, rgba(76, 175, 80, 0.8) 100%)"
      },
      {
        title: "Smart Scheduling",
        description: "Automated appointment booking based on your preferences, location, and doctor availability.",
        imageAlt: "Smart appointment scheduling",
        icon: faCalendarAlt,
        gradient: "linear-gradient(135deg, rgba(165, 214, 167, 0.9) 0%, rgba(129, 199, 132, 0.8) 100%)"
      },
      {
        title: "Health Analytics",
        description: "Comprehensive health insights and predictive analytics for proactive healthcare management.",
        imageAlt: "Health analytics dashboard",
        icon: faChartLine,
        gradient: "linear-gradient(135deg, rgba(200, 230, 201, 0.9) 0%, rgba(165, 214, 167, 0.8) 100%)"
      }
    ];

    return (
      <section 
        className="py-5"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(27, 94, 32, 0.95) 20%, rgba(27, 94, 32, 0.98) 80%, rgba(21, 76, 26, 1) 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decorative Background Elements */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'radial-gradient(circle at 20% 50%, rgba(76, 175, 80, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(129, 199, 132, 0.08) 0%, transparent 50%)',
            zIndex: 1
          }}
        />
        
        {/* Floating organic shapes */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '120px',
            height: '120px',
            background: 'radial-gradient(circle, rgba(76, 175, 80, 0.15) 0%, transparent 70%)',
            borderRadius: '60% 40% 30% 70%',
            zIndex: 1,
            animation: 'float 6s ease-in-out infinite'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '15%',
            width: '180px',
            height: '180px',
            background: 'radial-gradient(circle, rgba(129, 199, 132, 0.12) 0%, transparent 70%)',
            borderRadius: '30% 70% 70% 30%',
            zIndex: 1,
            animation: 'float 8s ease-in-out infinite reverse'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Header Section */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 text-center">
              <h2 
                className="display-5 fw-bold mb-4"
                style={{
                  color: '#e8f5e8',
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                }}
              >
                Transform Your Healthcare Experience
              </h2>
              
              <p 
                className="lead"
                style={{
                  color: '#c8e6c9',
                  fontSize: '1.2rem',
                  fontWeight: '400',
                  lineHeight: '1.7',
                  maxWidth: '700px',
                  margin: '0 auto',
                  opacity: '0.95'
                }}
              >
                Discover how our platform revolutionizes healthcare delivery through 
                intelligent automation, seamless integration, and personalized care solutions.
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="row g-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                <div 
                  className="card h-100 border-0 position-relative overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.4s ease',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) rotateX(5deg)';
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.3)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) rotateX(0deg)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.2)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  {/* Image Container */}
                  <div 
                    className="position-relative"
                    style={{
                      height: '200px',
                      background: benefit.gradient,
                      borderRadius: '20px 20px 0 0',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Image Placeholder */}
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        color: 'rgba(255, 255, 255, 0.9)',
                        position: 'relative'
                      }}
                    >
                      {/* Replace this div with FontAwesome icons */}
                      <FontAwesomeIcon
                        icon={benefit.icon}
                        style={{
                          fontSize: '3rem',
                          color: '#ffffff',
                          marginBottom: '10px'
                        }}
                      />
                      <p
                        style={{
                          fontSize: '0.8rem',
                          margin: '0',
                          opacity: '0.8',
                          textAlign: 'center',
                          fontWeight: '500',
                          color: '#ffffff'
                        }}
                      >
                        {benefit.imageAlt}
                      </p>
                    </div>

                    {/* Overlay effect */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        background: 'linear-gradient(135deg, transparent 0%, rgba(0, 0, 0, 0.1) 100%)'
                      }}
                    />
                  </div>

                  {/* Card Body */}
                  <div className="card-body p-4">
                    <h5 
                      className="card-title mb-3"
                      style={{
                        color: '#e8f5e8',
                        fontWeight: '600',
                        fontSize: '1.3rem',
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
                      }}
                    >
                      {benefit.title}
                    </h5>
                    <p 
                      className="card-text"
                      style={{
                        color: '#c8e6c9',
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                        opacity: '0.9'
                      }}
                    >
                      {benefit.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="mt-3">
                      <a
                        href="#"
                        style={{
                          color: '#81c784',
                          textDecoration: 'none',
                          fontSize: '0.9rem',
                          fontWeight: '500',
                          borderBottom: '1px solid transparent',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = '#a5d6a7';
                          e.target.style.borderBottomColor = '#a5d6a7';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = '#81c784';
                          e.target.style.borderBottomColor = 'transparent';
                        }}
                        onClick={(e) => e.preventDefault()}
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>

                  {/* Decorative corner elements */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      width: '8px',
                      height: '8px',
                      background: 'rgba(255, 255, 255, 0.3)',
                      borderRadius: '50%'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Statistics Section */}
          <div className="row justify-content-center mt-5">
            <div className="col-lg-10">
              <div
                className="row text-center"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '20px',
                  padding: '40px 20px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(15px)'
                }}
              >
                <div className="col-md-4 mb-3 mb-md-0">
                  <h3 style={{ color: '#e8f5e8', fontSize: '2.5rem', fontWeight: 'bold' }}>50K+</h3>
                  <p style={{ color: '#c8e6c9', margin: '0' }}>Active Users</p>
                </div>
                <div className="col-md-4 mb-3 mb-md-0">
                  <h3 style={{ color: '#e8f5e8', fontSize: '2.5rem', fontWeight: 'bold' }}>1000+</h3>
                  <p style={{ color: '#c8e6c9', margin: '0' }}>Partner Hospitals</p>
                </div>
                <div className="col-md-4">
                  <h3 style={{ color: '#e8f5e8', fontSize: '2.5rem', fontWeight: 'bold' }}>99.9%</h3>
                  <p style={{ color: '#c8e6c9', margin: '0' }}>Uptime Reliability</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CSS Animation */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </section>
    );
  }
}

export default Section3;