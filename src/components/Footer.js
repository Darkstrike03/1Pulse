import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

// Import the content components for the modals (adjust paths as needed)
import PrivacyPolicy from './InfoPages/PrivacyPolicy';
import TermsOfService from './InfoPages/TermsOfService';
import AboutUs from './InfoPages/AboutUs';
import ContactUs from './InfoPages/ContactUs';

// Map content keys to their respective components
const MODAL_COMPONENTS = {
  PRIVACY_POLICY: { Component: PrivacyPolicy, title: 'Privacy Policy' },
  TERMS_OF_SERVICE: { Component: TermsOfService, title: 'Terms of Service' },
  ABOUT_US: { Component: AboutUs, title: 'About Us' },
  CONTACT_US: { Component: ContactUs, title: 'Contact Us' },
};

const Footer = () => {
  const [activeModalContent, setActiveModalContent] = useState(null);
  const [translateVisible, setTranslateVisible] = useState(false);

  useEffect(() => {
    // Wait for Google Translate to be available and then initialize
    const initTranslate = () => {
      if (window.google && window.google.translate && window.google.translate.TranslateElement) {
        try {
          // Clear any existing translate element
          const translateDiv = document.getElementById('footer_translate_element');
          if (translateDiv) {
            translateDiv.innerHTML = '';
            
            // Initialize Google Translate
            new window.google.translate.TranslateElement({
              pageLanguage: 'en',
              includedLanguages: 'en,hi,nl,es,fr,de,it,pt,ru,ja,ko,zh,ar,bn',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
              multilanguagePage: true
            }, 'footer_translate_element');
          }
        } catch (error) {
          console.log('Google Translate initialization error:', error);
        }
      }
    };

    // Try to initialize when component mounts
    const timer = setTimeout(() => {
      initTranslate();
    }, 1000); // Give some time for Google Translate to fully load

    return () => clearTimeout(timer);
  }, []);

  // Reinitialize when dropdown becomes visible
  useEffect(() => {
    if (translateVisible && window.google && window.google.translate) {
      const timer = setTimeout(() => {
        const translateDiv = document.getElementById('footer_translate_element');
        if (translateDiv) {
          translateDiv.innerHTML = '';
          try {
            new window.google.translate.TranslateElement({
              pageLanguage: 'en',
              includedLanguages: 'en,hi,nl,es,fr,de,it,pt,ru,ja,ko,zh,ar,bn',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
              multilanguagePage: true
            }, 'footer_translate_element');
          } catch (error) {
            console.log('Google Translate reinit error:', error);
          }
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [translateVisible]);

  const toggleTranslate = () => {
    setTranslateVisible(!translateVisible);
  };

  const openInfoModal = (contentTypeKey) => {
    setActiveModalContent(MODAL_COMPONENTS[contentTypeKey]);
  };

  const closeInfoModal = () => {
    setActiveModalContent(null);
  };

  const handleLinkClick = (contentKey) => (e) => {
    e.preventDefault();
    openInfoModal(contentKey);
  };

  const currentYear = new Date().getFullYear();
  const githubCreatorLink = "https://github.com/Darkstrike03/Rocket-Transfers";

  // Flower SVG pattern component
  const FlowerPattern = ({ className = "", style = {} }) => (
    <svg
      className={className}
      style={style}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 30C45 25 35 25 35 35C35 25 25 25 30 35C25 35 25 45 35 45C25 45 25 55 35 55C35 65 45 65 50 55C55 65 65 65 65 55C75 55 75 45 65 45C75 45 75 35 65 35C65 25 55 25 50 30Z"
        fill="rgba(76, 175, 80, 0.1)"
        stroke="rgba(76, 175, 80, 0.2)"
        strokeWidth="0.5"
      />
      <circle cx="50" cy="45" r="6" fill="rgba(129, 199, 132, 0.3)" />
      <path d="M40 55L35 65Q40 70 45 65Z" fill="rgba(76, 175, 80, 0.15)" />
      <path d="M60 55L65 65Q60 70 55 65Z" fill="rgba(76, 175, 80, 0.15)" />
    </svg>
  );

  // Modal render function
  const renderInfoModal = () => {
    if (!activeModalContent) return null;

    const ModalComponent = activeModalContent.Component;

    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1050,
          backdropFilter: 'blur(5px)'
        }}
        onClick={closeInfoModal}
      >
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '15px',
            padding: '30px',
            maxWidth: '600px',
            maxHeight: '80vh',
            overflowY: 'auto',
            margin: '20px',
            boxShadow: '0 20px 60px rgba(79, 0, 15, 0.2)',
            border: '1px solid rgba(76, 175, 80, 0.1)',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
          }}
          onClick={e => e.stopPropagation()}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h4 style={{ color: '#1b5e20', margin: 0, fontSize: '1.5rem', fontWeight: '600' }}>
              {activeModalContent.title}
            </h4>
            <button
              onClick={closeInfoModal}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#4F000F',
                padding: '0',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(79, 0, 15, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              ×
            </button>
          </div>
          <div style={{ color: '#2e7d32', lineHeight: '1.6' }}>
            <ModalComponent />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '30px' }}>
            <button
              onClick={closeInfoModal}
              style={{
                background: 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)',
                border: 'none',
                color: '#ffffff',
                padding: '10px 20px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 25px rgba(76, 175, 80, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(76, 175, 80, 0.3)';
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <footer
        style={{
          background: `linear-gradient(135deg, 
            rgba(79, 0, 15, 0.95) 0%, 
            rgba(79, 0, 15, 0.85) 30%,
            rgba(27, 94, 32, 0.9) 70%,
            rgba(27, 94, 32, 0.95) 100%)`,
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
        }}
      >
        {/* Decorative flower patterns */}
        <FlowerPattern
          className="flower-pattern"
          style={{
            position: 'absolute',
            top: '20px',
            left: '50px',
            width: '80px',
            height: '80px',
            opacity: '0.3',
            transform: 'rotate(15deg)'
          }}
        />
        <FlowerPattern
          className="flower-pattern"
          style={{
            position: 'absolute',
            top: '60px',
            right: '80px',
            width: '60px',
            height: '60px',
            opacity: '0.2',
            transform: 'rotate(-25deg)'
          }}
        />
        <FlowerPattern
          className="flower-pattern"
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '20%',
            width: '50px',
            height: '50px',
            opacity: '0.25',
            transform: 'rotate(45deg)'
          }}
        />
        <FlowerPattern
          className="flower-pattern"
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '30%',
            width: '70px',
            height: '70px',
            opacity: '0.2',
            transform: 'rotate(-15deg)'
          }}
        />

        {/* Subtle texture overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cg fill-opacity=\'0.03\'%3E%3Cpolygon fill=\'%23ffffff\' points=\'50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40\'/%3E%3C/g%3E%3C/svg%3E") repeat',
            opacity: '0.1'
          }}
        />

        <div style={{ position: 'relative', zIndex: 2, padding: '50px 0 30px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            {/* Main footer content */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '40px',
                gap: '30px'
              }}
            >
              {/* Logo/Brand Section */}
              <div style={{ flex: '1', minWidth: '250px' }}>
                <h3
                  style={{
                    color: '#ffffff',
                    fontSize: '2rem',
                    fontWeight: '700',
                    marginBottom: '15px',
                    background: 'linear-gradient(135deg, #ffffff 0%, #e8f5e8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  1pulse
                </h3>
                <p
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    maxWidth: '300px',
                    margin: 0
                  }}
                >
                  Revolutionizing healthcare with cutting-edge technology and nature's wisdom.
                </p>
              </div>

              {/* Links Section */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px' }}>
                  {[
                    { key: 'PRIVACY_POLICY', label: 'Privacy Policy' },
                    { key: 'TERMS_OF_SERVICE', label: 'Terms of Service' },
                    { key: 'ABOUT_US', label: 'About Us' },
                    { key: 'CONTACT_US', label: 'Contact Us' }
                  ].map(({ key, label }) => (
                    <a
                      key={key}
                      href="#"
                      onClick={handleLinkClick(key)}
                      style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        fontWeight: '500',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        padding: '8px 0'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#e8f5e8';
                        e.target.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = 'rgba(255, 255, 255, 0.9)';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      {label}
                      <span
                        style={{
                          position: 'absolute',
                          bottom: '0',
                          left: '0',
                          width: '0',
                          height: '2px',
                          background: 'linear-gradient(90deg, #e8f5e8, #c8e6c9)',
                          transition: 'width 0.3s ease'
                        }}
                        className="hover-line"
                      />
                    </a>
                  ))}
                </div>
                
                {/* Google Translate Button */}
                <div style={{ position: "relative" }}>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50px",
                      height: "50px",
                      backgroundColor: translateVisible ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)",
                      borderRadius: "50%",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = translateVisible ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)";
                      e.target.style.transform = "translateY(0)";
                    }}
                    onClick={toggleTranslate}
                    title="Translate Page"
                  >
                    <FontAwesomeIcon icon={faGlobe} style={{ color: "#ffffff", fontSize: "1.2rem" }} />
                  </button>

                  {/* Google Translate Dropdown */}
                  {translateVisible && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "60px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "white",
                        borderRadius: "12px",
                        padding: "20px 20px 15px 20px",
                        boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                        zIndex: 1000,
                        minWidth: "220px",
                        border: "1px solid rgba(76, 175, 80, 0.2)"
                      }}
                    >
                      <div style={{ marginBottom: '10px', fontSize: '14px', color: '#1b5e20', fontWeight: '600' }}>
                        Choose Language:
                      </div>
                      <div 
                        id="footer_translate_element"
                        style={{ 
                          fontSize: '14px',
                          fontFamily: "'Inter', sans-serif"
                        }}
                      />
                      <button
                        onClick={() => setTranslateVisible(false)}
                        style={{
                          position: 'absolute',
                          top: '8px',
                          right: '8px',
                          background: 'none',
                          border: 'none',
                          fontSize: '18px',
                          cursor: 'pointer',
                          color: '#666',
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'background-color 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#f0f0f0';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                        }}
                      >
                        ×
                      </button>
                      {/* Arrow pointing down */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '-8px',
                          left: '50%',
                          transform: 'translateX(-50%) rotate(45deg)',
                          width: '16px',
                          height: '16px',
                          background: 'white',
                          border: '1px solid rgba(76, 175, 80, 0.2)',
                          borderTop: 'none',
                          borderLeft: 'none'
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* GitHub Link */}
                <a
                  href={githubCreatorLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                    e.target.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = 'none';
                  }}
                  aria-label="Creator's GitHub Profile"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="rgba(255, 255, 255, 0.9)"
                  >
                    <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Copyright section */}
            <div
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                paddingTop: '25px',
                textAlign: 'center'
              }}
            >
              <p
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.95rem',
                  margin: 0,
                  fontWeight: '400'
                }}
              >
                © {currentYear} 1pulse Healthcare. All rights reserved. Made with 🌿 for better health.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Global CSS styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Hover effects */
          .hover-line {
            transition: width 0.3s ease;
          }
          
          footer a:hover .hover-line {
            width: 100% !important;
          }
          
          @media (max-width: 768px) {
            .flower-pattern {
              display: none !important;
            }
          }

          /* Google Translate Styling */
          #footer_translate_element .goog-te-gadget {
            font-family: 'Inter', sans-serif !important;
            font-size: 14px !important;
            color: #1b5e20 !important;
          }

          #footer_translate_element .goog-te-gadget .goog-te-combo {
            margin: 4px 0 !important;
            border: 2px solid #e8f5e9 !important;
            padding: 8px 12px !important;
            border-radius: 8px !important;
            background: linear-gradient(135deg, #f1f8e9, #e8f5e9) !important;
            color: #1b5e20 !important;
            font-weight: 500 !important;
            cursor: pointer !important;
            font-family: 'Inter', sans-serif !important;
            transition: all 0.3s ease !important;
            min-width: 180px !important;
          }

          #footer_translate_element .goog-te-gadget .goog-te-combo:hover {
            border-color: #4caf50 !important;
            background: linear-gradient(135deg, #e8f5e9, #c8e6c9) !important;
          }

          #footer_translate_element .goog-te-gadget .goog-te-combo:focus {
            outline: none !important;
            border-color: #4caf50 !important;
            box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1) !important;
          }

          /* Hide Google Translate branding for footer element */
          #footer_translate_element .goog-logo-link,
          #footer_translate_element .goog-te-gadget span:first-child,
          #footer_translate_element .goog-te-gadget > span > a {
            display: none !important;
          }

          /* Hide the annoying Google Translate banner */
          .goog-te-banner-frame {
            display: none !important;
          }

          body {
            top: 0 !important;
          }

          /* Style any translate menu frames */
          .goog-te-menu-frame {
            max-height: 300px !important;
            overflow-y: auto !important;
            border-radius: 8px !important;
            border: 1px solid rgba(76, 175, 80, 0.2) !important;
          }
        `
      }} />

      {renderInfoModal()}
    </>
  );
};

export default Footer;
