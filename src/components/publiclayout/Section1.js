import React, { useState, useEffect } from "react";
import doctorImage1 from "../assets/doctor1.png"; // First image
import doctorImage2 from "../assets/doctor2.png"; // Second image
import doctorImage3 from "../assets/doctor3.png"; // Third image
import doctorImage4 from "../assets/doctor4.png"; // Fourth image

const Section1 = () => {
  const images = [doctorImage1, doctorImage2, doctorImage3, doctorImage4]; // Array of images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <section 
      className="container-fluid py-5"
      style={{
        background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(129, 199, 132, 0.08) 100%)',
        minHeight: '80vh'
      }}
    >
      <div className="container">
        <div className="row align-items-center min-vh-75">
          {/* Text Content */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="pe-lg-4">
              <h1 
                className="display-4 fw-bold mb-4"
                style={{
                  color: '#1b5e20',
                  lineHeight: '1.2',
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
                }}
              >
                Enhance your experience with{' '}
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
              </h1>
              
              <p 
                className="lead mb-4"
                style={{
                  color: '#2e7d32',
                  fontSize: '1.25rem',
                  fontWeight: '400',
                  lineHeight: '1.6'
                }}
              >
                Revolutionizing healthcare with cutting-edge technology. 
                Experience seamless medical care that grows with nature's wisdom.
              </p>

              <button
                className="btn btn-lg px-4 py-3"
                style={{
                  background: 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)',
                  border: 'none',
                  color: '#ffffff',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)',
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 25px rgba(76, 175, 80, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(76, 175, 80, 0.3)';
                }}
                onClick={() => {
                  console.log("Explore Now clicked");
                }}
              >
                Explore Now
                <span 
                  style={{
                    marginLeft: '8px',
                    fontSize: '1.2rem'
                  }}
                >
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Doctor Image */}
          <div className="col-lg-6 col-md-12">
            <div 
              className="text-center position-relative"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(129, 199, 132, 0.1) 100%)',
                borderRadius: '20px',
                padding: '40px 20px',
                boxShadow: '0 10px 40px rgba(76, 175, 80, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Decorative elements */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(45deg, #e8f5e8, #c8e6c9)',
                  borderRadius: '50%',
                  opacity: '0.6'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '30px',
                  left: '30px',
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(45deg, #a5d6a7, #81c784)',
                  borderRadius: '50%',
                  opacity: '0.4'
                }}
              />

              {/* Image with smooth transition */}
              <div
                style={{
                  width: '300px',
                  height: '350px',
                  margin: '0 auto',
                  background: 'linear-gradient(135deg, #f1f8e9 0%, #e8f5e8 100%)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  border: '2px dashed #4caf50',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={images[currentImageIndex]}
                  alt="Doctor"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '15px',
                    transition: 'opacity 0.1s ease-in-out'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;