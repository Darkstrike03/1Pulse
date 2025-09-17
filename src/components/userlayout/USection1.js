import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient'; // Import your supabase client

const USection1 = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showChatbotPopup, setShowChatbotPopup] = useState(false);
  const [chatbotPulse, setChatbotPulse] = useState(true);

  useEffect(() => {
    fetchUserProfile();
    
    // Show chatbot popup after 3 seconds
    const popupTimer = setTimeout(() => {
      setShowChatbotPopup(true);
      // Hide popup after 4 seconds
      setTimeout(() => {
        setShowChatbotPopup(false);
      }, 4000);
    }, 3000);

    return () => clearTimeout(popupTimer);
  }, []);

  const fetchUserProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        const { data, error } = await supabase
          .from('users')
          .select('*')
          .eq('id', user.id)
          .single();

        if (error) {
          console.error('Error fetching user profile:', error);
        } else {
          setUserProfile(data);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const getInitials = (name) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const handleChatbotClick = () => {
    console.log('Chatbot clicked - Open chat interface');
    // Add your chatbot functionality here
  };

  if (loading) {
    return (
      <section 
        className="container-fluid py-5"
        style={{
          background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(129, 199, 132, 0.08) 100%)',
          minHeight: '80vh'
        }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center min-vh-75">
            <div className="col-12 text-center">
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)',
                  borderRadius: '50%',
                  margin: '0 auto',
                  animation: 'pulse 2s infinite'
                }}
              />
              <p style={{ 
                color: '#2e7d32', 
                marginTop: '20px',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" 
              }}>
                Loading your health profile...
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section 
        className="container-fluid py-5"
        style={{
          background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(129, 199, 132, 0.08) 100%)',
          minHeight: '80vh',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center min-vh-75">
            
            {/* Digital Health Card */}
            <div className="col-lg-7 col-md-8 col-12 mb-4 mb-lg-0">
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 255, 248, 0.9) 100%)',
                  borderRadius: '20px',
                  padding: '40px',
                  boxShadow: '0 15px 50px rgba(76, 175, 80, 0.15)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(76, 175, 80, 0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Card Header with Medical Cross Pattern */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(45deg, rgba(76, 175, 80, 0.1), rgba(129, 199, 132, 0.08))',
                    borderRadius: '50%'
                  }}
                />
                
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    color: 'rgba(76, 175, 80, 0.3)',
                    fontSize: '24px'
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3V8zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/>
                  </svg>
                </div>

                {/* Card Title */}
                <div style={{ marginBottom: '30px' }}>
                  <h2
                    style={{
                      color: '#1b5e20',
                      fontSize: '1.8rem',
                      fontWeight: '700',
                      margin: '0 0 8px 0'
                    }}
                  >
                    Digital Health Card
                  </h2>
                  <p
                    style={{
                      color: '#2e7d32',
                      fontSize: '0.95rem',
                      margin: 0,
                      opacity: 0.8
                    }}
                  >
                    Your essential medical information at a glance
                  </p>
                </div>

                {/* Profile Section */}
                <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '35px',
                    padding: '20px',
                    background: 'rgba(76, 175, 80, 0.05)',
                    borderRadius: '15px',
                    border: '1px solid rgba(76, 175, 80, 0.1)'
                  }}
                >
                  <div style={{ marginRight: '20px' }}>
                    {userProfile?.photo_url ? (
                      <img
                        src={userProfile.photo_url}
                        alt="Profile"
                        style={{
                          width: '80px',
                          height: '80px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '3px solid rgba(76, 175, 80, 0.3)'
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: '80px',
                          height: '80px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '24px',
                          fontWeight: '600',
                          border: '3px solid rgba(76, 175, 80, 0.3)'
                        }}
                      >
                        {getInitials(userProfile?.full_name)}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <h3
                      style={{
                        color: '#1b5e20',
                        fontSize: '1.4rem',
                        fontWeight: '600',
                        margin: '0 0 8px 0'
                      }}
                    >
                      {userProfile?.full_name || 'User Name'}
                    </h3>
                    <p
                      style={{
                        color: '#2e7d32',
                        fontSize: '0.95rem',
                        margin: '0 0 4px 0',
                        opacity: 0.8
                      }}
                    >
                      ID: {userProfile?.medical_id || 'MID-2024-XXX'}
                    </p>
                    <p
                      style={{
                        color: '#4caf50',
                        fontSize: '0.9rem',
                        margin: 0,
                        fontWeight: '500'
                      }}
                    >
                      DOB: {userProfile?.date_of_birth || 'Not specified'}
                    </p>
                  </div>
                </div>

                {/* Medical Information Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '20px'
                  }}
                >
                  {/* Contact Information */}
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.7)',
                      padding: '20px',
                      borderRadius: '12px',
                      border: '1px solid rgba(76, 175, 80, 0.1)'
                    }}
                  >
                    <h4
                      style={{
                        color: '#1b5e20',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        margin: '0 0 15px 0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      Contact
                    </h4>
                    <p style={{ color: '#2e7d32', margin: '0 0 8px 0', fontSize: '0.9rem' }}>
                      <strong>Email:</strong> {userProfile?.email || 'Not specified'}
                    </p>
                    <p style={{ color: '#2e7d32', margin: '0', fontSize: '0.9rem' }}>
                      <strong>Phone:</strong> {userProfile?.phone || 'Not specified'}
                    </p>
                  </div>

                  {/* Medical Information */}
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.7)',
                      padding: '20px',
                      borderRadius: '12px',
                      border: '1px solid rgba(76, 175, 80, 0.1)'
                    }}
                  >
                    <h4
                      style={{
                        color: '#1b5e20',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        margin: '0 0 15px 0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      Medical
                    </h4>
                    <p style={{ color: '#2e7d32', margin: '0 0 8px 0', fontSize: '0.9rem' }}>
                      <strong>Blood Group:</strong> 
                      <span
                        style={{
                          background: 'linear-gradient(135deg, #4caf50, #66bb6a)',
                          color: '#ffffff',
                          padding: '2px 8px',
                          borderRadius: '12px',
                          fontSize: '0.8rem',
                          fontWeight: '600',
                          marginLeft: '8px'
                        }}
                      >
                        {userProfile?.blood_group || 'Not specified'}
                      </span>
                    </p>
                    <p style={{ color: '#2e7d32', margin: '0', fontSize: '0.9rem' }}>
                      <strong>Allergies:</strong> {userProfile?.allergies || 'None reported'}
                    </p>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div
                  style={{
                    marginTop: '20px',
                    background: 'rgba(244, 67, 54, 0.05)',
                    border: '1px solid rgba(244, 67, 54, 0.1)',
                    padding: '15px',
                    borderRadius: '12px'
                  }}
                >
                  <h4
                    style={{
                      color: '#d32f2f',
                      fontSize: '1rem',
                      fontWeight: '600',
                      margin: '0 0 8px 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Emergency Contact
                  </h4>
                  <p style={{ color: '#d32f2f', margin: '0', fontSize: '0.9rem' }}>
                    {userProfile?.emergency_contact || 'Not specified'}
                  </p>
                </div>
              </div>
            </div>

            {/* Chatbot Section */}
            <div className="col-lg-4 col-md-4 col-12">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative'
                }}
              >
                {/* Chatbot Container */}
                <div
                  onClick={handleChatbotClick}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 255, 248, 0.7) 100%)',
                    borderRadius: '25px',
                    padding: '40px',
                    boxShadow: '0 10px 40px rgba(76, 175, 80, 0.1)',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(76, 175, 80, 0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minHeight: '200px',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 50px rgba(76, 175, 80, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(76, 175, 80, 0.1)';
                  }}
                >
                  {/* Glowing Orb */}
                  <div
                    style={{
                      position: 'relative',
                      marginBottom: '20px'
                    }}
                  >
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(76, 175, 80, 0.8) 0%, rgba(76, 175, 80, 0.3) 70%, transparent 100%)',
                        animation: chatbotPulse ? 'glow 3s ease-in-out infinite' : 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #4caf50, #66bb6a)',
                          boxShadow: '0 0 20px rgba(76, 175, 80, 0.6)',
                          animation: 'pulse 2s ease-in-out infinite'
                        }}
                      />
                    </div>

                    {/* Floating particles */}
                    {[...Array(3)].map((_, index) => (
                      <div
                        key={index}
                        style={{
                          position: 'absolute',
                          width: '6px',
                          height: '6px',
                          background: 'rgba(76, 175, 80, 0.4)',
                          borderRadius: '50%',
                          animation: `float ${2 + index * 0.5}s ease-in-out infinite`,
                          animationDelay: `${index * 0.5}s`,
                          top: `${20 + index * 15}px`,
                          left: `${30 + index * 20}px`
                        }}
                      />
                    ))}
                  </div>

                  {/* Chatbot Text */}
                  <div style={{ textAlign: 'center' }}>
                    <h3
                      style={{
                        color: '#1b5e20',
                        fontSize: '1.3rem',
                        fontWeight: '600',
                        margin: '0 0 10px 0'
                      }}
                    >
                      AI Health Assistant
                    </h3>
                    <p
                      style={{
                        color: '#2e7d32',
                        fontSize: '0.95rem',
                        margin: 0,
                        opacity: 0.8
                      }}
                    >
                      Your personal health companion
                    </p>
                  </div>

                  {/* Popup Message */}
                  {showChatbotPopup && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-60px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'rgba(76, 175, 80, 0.95)',
                        color: '#ffffff',
                        padding: '12px 20px',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        boxShadow: '0 5px 25px rgba(76, 175, 80, 0.3)',
                        animation: 'popupBounce 0.5s ease-out',
                        whiteSpace: 'nowrap',
                        zIndex: 10
                      }}
                    >
                      Ask this onee-san! 🌿
                      <div
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '8px solid transparent',
                          borderRight: '8px solid transparent',
                          borderTop: '8px solid rgba(76, 175, 80, 0.95)'
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Additional Info */}
                <div
                  style={{
                    marginTop: '20px',
                    textAlign: 'center',
                    maxWidth: '200px'
                  }}
                >
                  <p
                    style={{
                      color: '#2e7d32',
                      fontSize: '0.85rem',
                      margin: 0,
                      opacity: 0.7,
                      lineHeight: '1.4'
                    }}
                  >
                    Click to start a conversation about your health and wellness
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(76, 175, 80, 0.3);
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 40px rgba(76, 175, 80, 0.6);
            transform: scale(1.05);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
          50% { transform: translateY(-10px) scale(1.2); opacity: 0.7; }
        }
        
        @keyframes popupBounce {
          0% { transform: translateX(-50%) scale(0.8) translateY(10px); opacity: 0; }
          50% { transform: translateX(-50%) scale(1.05) translateY(-5px); opacity: 0.9; }
          100% { transform: translateX(-50%) scale(1) translateY(0); opacity: 1; }
        }
        
        @media (max-width: 768px) {
          .container-fluid .row {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
};

export default USection1;