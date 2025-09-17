import React from "react";

class Section2 extends React.Component {
  render() {
    const features = [
      {
        title: "One Card",
        description: "Unified digital identity for seamless healthcare access across all providers.",
        icon: "🏥",
        gradient: "linear-gradient(135deg, #66bb6a 0%, #4caf50 100%)"
      },
      {
        title: "Digital Twin",
        description: "AI-powered digital replica of your health for personalized medical insights.",
        icon: "👤",
        gradient: "linear-gradient(135deg, #81c784 0%, #66bb6a 100%)"
      },
      {
        title: "Hospital Availability",
        description: "Real-time hospital capacity and service availability in your area.",
        icon: "🏨",
        gradient: "linear-gradient(135deg, #a5d6a7 0%, #81c784 100%)"
      },
      {
        title: "Medical Store Finding",
        description: "Locate nearby pharmacies with medicine availability and pricing.",
        icon: "💊",
        gradient: "linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 100%)"
      },
      {
        title: "Emergency SOS",
        description: "Instant emergency response system with location-based alerts.",
        icon: "🚨",
        gradient: "linear-gradient(135deg, #66bb6a 0%, #4caf50 100%)"
      },
      {
        title: "Ambulance",
        description: "Quick ambulance booking with real-time tracking and ETA updates.",
        icon: "🚑",
        gradient: "linear-gradient(135deg, #81c784 0%, #66bb6a 100%)"
      }
    ];

    return (
      <section 
        className="py-5"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(232, 245, 233, 0.3) 50%, rgba(255, 255, 255, 1) 100%)',
          position: 'relative'
        }}
      >
        {/* Decorative Background Elements */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle, rgba(76, 175, 80, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            zIndex: 1
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '15%',
            right: '8%',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(129, 199, 132, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            zIndex: 1
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Header Section */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 
                className="display-5 fw-bold mb-4"
                style={{
                  color: '#1b5e20',
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
                }}
              >
                <span 
                  style={{
                    color: '#4caf50',
                    position: 'relative'
                  }}
                >
                  1pulse
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-8px',
                      left: '0',
                      right: '0',
                      height: '3px',
                      background: 'linear-gradient(90deg, #4caf50, #81c784)',
                      borderRadius: '2px'
                    }}
                  />
                </span>
                {' '}Features
              </h2>
              
              <p 
                className="lead"
                style={{
                  color: '#2e7d32',
                  fontSize: '1.2rem',
                  fontWeight: '400',
                  lineHeight: '1.7',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}
              >
                Our comprehensive platform integrates all healthcare stakeholders into a 
                unified digital ecosystem, ensuring seamless communication and efficient 
                service delivery.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                <div 
                  className="card h-100 border-0 position-relative overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '16px',
                    boxShadow: '0 8px 32px rgba(76, 175, 80, 0.1)',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 16px 48px rgba(76, 175, 80, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(76, 175, 80, 0.1)';
                  }}
                >
                  {/* Card Header with Icon */}
                  <div 
                    className="card-header border-0 text-center py-4"
                    style={{
                      background: feature.gradient,
                      borderRadius: '16px 16px 0 0'
                    }}
                  >
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        background: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto',
                        fontSize: '2.5rem',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      {feature.icon}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="card-body p-4 text-center">
                    <h5 
                      className="card-title mb-3"
                      style={{
                        color: '#1b5e20',
                        fontWeight: '600',
                        fontSize: '1.3rem',
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
                      }}
                    >
                      {feature.title}
                    </h5>
                    <p 
                      className="card-text"
                      style={{
                        color: '#2e7d32',
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                        opacity: '0.9'
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      width: '30px',
                      height: '30px',
                      background: 'rgba(255, 255, 255, 0.3)',
                      borderRadius: '50%',
                      opacity: '0.7'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '15px',
                      left: '15px',
                      width: '20px',
                      height: '20px',
                      background: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '50%',
                      opacity: '0.5'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="row justify-content-center mt-5">
            <div className="col-lg-6 text-center">
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(129, 199, 132, 0.08) 100%)',
                  borderRadius: '16px',
                  padding: '40px 30px',
                  border: '1px solid rgba(76, 175, 80, 0.1)'
                }}
              >
                <h4 
                  style={{
                    color: '#1b5e20',
                    marginBottom: '20px',
                    fontWeight: '600'
                  }}
                >
                  Ready to transform healthcare?
                </h4>
                <button
                  className="btn btn-lg px-5 py-3"
                  style={{
                    background: 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)',
                    border: 'none',
                    color: '#ffffff',
                    fontWeight: '600',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 20px rgba(76, 175, 80, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 30px rgba(76, 175, 80, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 20px rgba(76, 175, 80, 0.3)';
                  }}
                >
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section2;