import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faExclamationTriangle, 
  faAmbulance, 
  faLocationDot,
  faPhone,
  faClock,
  faHeartPulse,
  faMapMarkerAlt,
  faUser,
  faBatteryFull,
  faSignal,
  faShieldAlt
} from '@fortawesome/free-solid-svg-icons';

const USection2 = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [sosActive, setSosActive] = useState(false);
  const [ambulanceRequested, setAmbulanceRequested] = useState(false);
  const [sosCountdown, setSosCountdown] = useState(null);
  const [userLocation, setUserLocation] = useState("Fetching location...");

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate location fetch
  useEffect(() => {
    setTimeout(() => {
      setUserLocation("Andheri West, Mumbai, Maharashtra");
    }, 2000);
  }, []);

  // SOS Countdown functionality
  useEffect(() => {
    let interval;
    if (sosCountdown > 0) {
      interval = setInterval(() => {
        setSosCountdown(prev => prev - 1);
      }, 1000);
    } else if (sosCountdown === 0) {
      setSosActive(true);
      setSosCountdown(null);
    }
    return () => clearInterval(interval);
  }, [sosCountdown]);

  const handleSOSPress = () => {
    if (sosCountdown === null) {
      setSosCountdown(5); // 5 second countdown
    }
  };

  const cancelSOS = () => {
    setSosCountdown(null);
    setSosActive(false);
  };

  const requestAmbulance = () => {
    setAmbulanceRequested(true);
  };

  return (
    <section 
      className="py-4"
      style={{
        background: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #388e3c 100%)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 30%, rgba(76, 175, 80, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(129, 199, 132, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 40% 80%, rgba(165, 214, 167, 0.06) 0%, transparent 40%)
          `,
          zIndex: 1
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header Dashboard */}
        <div className="row mb-4">
          <div className="col-12">
            <div
              className="card border-0"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <div className="card-body p-4">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h4 
                      style={{
                        color: '#e8f5e8',
                        fontWeight: '600',
                        margin: '0',
                        fontSize: '1.5rem'
                      }}
                    >
                      Emergency Dashboard
                    </h4>
                    <p 
                      style={{
                        color: '#c8e6c9',
                        margin: '5px 0 0 0',
                        fontSize: '0.95rem'
                      }}
                    >
                      {currentTime.toLocaleString()}
                    </p>
                  </div>
                  <div className="col-md-6 text-md-end">
                    <div className="d-flex justify-content-md-end justify-content-start align-items-center">
                      <div className="me-3">
                        <FontAwesomeIcon 
                          icon={faLocationDot} 
                          style={{ color: '#81c784', marginRight: '8px' }}
                        />
                        <span style={{ color: '#c8e6c9', fontSize: '0.9rem' }}>
                          {userLocation}
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon 
                          icon={faSignal} 
                          style={{ color: '#4caf50', marginRight: '5px' }}
                        />
                        <FontAwesomeIcon 
                          icon={faBatteryFull} 
                          style={{ color: '#4caf50' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Actions Row */}
        <div className="row g-4 mb-4">
          {/* SOS Emergency Card */}
          <div className="col-lg-6">
            <div
              className="card border-0 h-100"
              style={{
                background: sosActive 
                  ? 'linear-gradient(135deg, rgba(244, 67, 54, 0.2) 0%, rgba(229, 57, 53, 0.1) 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                border: sosActive 
                  ? '2px solid rgba(244, 67, 54, 0.5)' 
                  : '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* SOS Active Indicator */}
              {sosActive && (
                <div
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    height: '4px',
                    background: 'linear-gradient(90deg, #f44336, #ff5722)',
                    animation: 'pulse 1s infinite'
                  }}
                />
              )}

              <div className="card-body p-4 text-center">
                <div className="mb-4">
                  <div
                    style={{
                      width: '120px',
                      height: '120px',
                      margin: '0 auto',
                      background: sosActive 
                        ? 'linear-gradient(135deg, #f44336 0%, #d32f2f 100%)'
                        : sosCountdown 
                        ? 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)'
                        : 'linear-gradient(135deg, #4caf50 0%, #388e3c 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: sosActive 
                        ? '0 0 30px rgba(244, 67, 54, 0.5)'
                        : '0 10px 30px rgba(76, 175, 80, 0.3)',
                      transition: 'all 0.3s ease',
                      cursor: sosCountdown === null ? 'pointer' : 'default',
                      position: 'relative'
                    }}
                    onClick={sosCountdown === null ? handleSOSPress : null}
                    onMouseEnter={(e) => {
                      if (sosCountdown === null && !sosActive) {
                        e.target.style.transform = 'scale(1.05)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (sosCountdown === null && !sosActive) {
                        e.target.style.transform = 'scale(1)';
                      }
                    }}
                  >
                    {sosCountdown ? (
                      <div style={{ color: '#ffffff', fontSize: '3rem', fontWeight: 'bold' }}>
                        {sosCountdown}
                      </div>
                    ) : (
                      <FontAwesomeIcon 
                        icon={faExclamationTriangle} 
                        style={{
                          fontSize: '3rem',
                          color: '#ffffff',
                          animation: sosActive ? 'shake 0.5s infinite' : 'none'
                        }}
                      />
                    )}
                  </div>
                </div>

                <h3 
                  style={{
                    color: sosActive ? '#ffcdd2' : '#e8f5e8',
                    fontWeight: '700',
                    marginBottom: '15px'
                  }}
                >
                  {sosActive ? 'SOS ACTIVATED' : sosCountdown ? 'ACTIVATING SOS' : 'Emergency SOS'}
                </h3>

                <p 
                  style={{
                    color: sosActive ? '#ffcdd2' : sosCountdown ? '#fff3e0' : '#c8e6c9',
                    fontSize: '1rem',
                    marginBottom: '20px',
                    lineHeight: '1.5'
                  }}
                >
                  {sosActive 
                    ? 'Emergency services have been notified. Help is on the way.' 
                    : sosCountdown 
                    ? 'Press and hold to activate emergency SOS. Release to cancel.'
                    : 'Instantly alert emergency contacts and services in case of emergency.'}
                </p>

                {sosActive ? (
                  <div>
                    <div className="mb-3">
                      <div
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '12px',
                          padding: '15px',
                          marginBottom: '15px'
                        }}
                      >
                        <div className="row text-start">
                          <div className="col-6">
                            <small style={{ color: '#ffcdd2', opacity: 0.8 }}>Response Time</small>
                            <div style={{ color: '#ffffff', fontWeight: '600' }}>
                              <FontAwesomeIcon icon={faClock} className="me-2" />
                              3-5 mins
                            </div>
                          </div>
                          <div className="col-6">
                            <small style={{ color: '#ffcdd2', opacity: 0.8 }}>Status</small>
                            <div style={{ color: '#ffffff', fontWeight: '600' }}>
                              <FontAwesomeIcon icon={faShieldAlt} className="me-2" />
                              Active
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn"
                      onClick={cancelSOS}
                      style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        color: '#ffffff',
                        borderRadius: '12px',
                        padding: '10px 20px',
                        fontWeight: '500'
                      }}
                    >
                      Cancel SOS
                    </button>
                  </div>
                ) : sosCountdown ? (
                  <button
                    className="btn"
                    onClick={cancelSOS}
                    style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      color: '#ffffff',
                      borderRadius: '12px',
                      padding: '10px 20px',
                      fontWeight: '500'
                    }}
                  >
                    Cancel ({sosCountdown})
                  </button>
                ) : (
                  <div className="row g-2">
                    <div className="col-6">
                      <button
                        className="btn w-100"
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          color: '#e8f5e8',
                          borderRadius: '12px',
                          padding: '10px',
                          fontSize: '0.9rem'
                        }}
                      >
                        <FontAwesomeIcon icon={faPhone} className="me-2" />
                        Call 108
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        className="btn w-100"
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          color: '#e8f5e8',
                          borderRadius: '12px',
                          padding: '10px',
                          fontSize: '0.9rem'
                        }}
                      >
                        <FontAwesomeIcon icon={faUser} className="me-2" />
                        Contacts
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Ambulance Request Card */}
          <div className="col-lg-6">
            <div
              className="card border-0 h-100"
              style={{
                background: ambulanceRequested 
                  ? 'linear-gradient(135deg, rgba(33, 150, 243, 0.2) 0%, rgba(30, 136, 229, 0.1) 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                border: ambulanceRequested 
                  ? '2px solid rgba(33, 150, 243, 0.5)' 
                  : '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}
            >
              <div className="card-body p-4 text-center">
                <div className="mb-4">
                  <div
                    style={{
                      width: '120px',
                      height: '120px',
                      margin: '0 auto',
                      background: ambulanceRequested 
                        ? 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)'
                        : 'linear-gradient(135deg, #4caf50 0%, #388e3c 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: ambulanceRequested 
                        ? '0 0 30px rgba(33, 150, 243, 0.5)'
                        : '0 10px 30px rgba(76, 175, 80, 0.3)',
                      transition: 'all 0.3s ease',
                      cursor: ambulanceRequested ? 'default' : 'pointer'
                    }}
                    onClick={!ambulanceRequested ? requestAmbulance : null}
                    onMouseEnter={(e) => {
                      if (!ambulanceRequested) {
                        e.target.style.transform = 'scale(1.05)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!ambulanceRequested) {
                        e.target.style.transform = 'scale(1)';
                      }
                    }}
                  >
                    <FontAwesomeIcon 
                      icon={faAmbulance} 
                      style={{
                        fontSize: '3rem',
                        color: '#ffffff',
                        animation: ambulanceRequested ? 'bounce 1s infinite' : 'none'
                      }}
                    />
                  </div>
                </div>

                <h3 
                  style={{
                    color: ambulanceRequested ? '#bbdefb' : '#e8f5e8',
                    fontWeight: '700',
                    marginBottom: '15px'
                  }}
                >
                  {ambulanceRequested ? 'AMBULANCE EN ROUTE' : 'Request Ambulance'}
                </h3>

                <p 
                  style={{
                    color: ambulanceRequested ? '#bbdefb' : '#c8e6c9',
                    fontSize: '1rem',
                    marginBottom: '20px',
                    lineHeight: '1.5'
                  }}
                >
                  {ambulanceRequested 
                    ? 'Ambulance has been dispatched to your location. Estimated arrival in 8-12 minutes.' 
                    : 'Quick ambulance booking with real-time tracking and priority dispatch.'}
                </p>

                {ambulanceRequested ? (
                  <div>
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        padding: '20px',
                        marginBottom: '20px'
                      }}
                    >
                      <div className="row">
                        <div className="col-4 text-center">
                          <div style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: 'bold' }}>8</div>
                          <small style={{ color: '#bbdefb', opacity: 0.8 }}>Minutes</small>
                        </div>
                        <div className="col-4 text-center">
                          <div style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: 'bold' }}>2.3</div>
                          <small style={{ color: '#bbdefb', opacity: 0.8 }}>KM Away</small>
                        </div>
                        <div className="col-4 text-center">
                          <div style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: 'bold' }}>MH12AB1234</div>
                          <small style={{ color: '#bbdefb', opacity: 0.8 }}>Vehicle</small>
                        </div>
                      </div>
                    </div>
                    
                    <div className="row g-2">
                      <div className="col-6">
                        <button
                          className="btn w-100"
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: '#bbdefb',
                            borderRadius: '12px',
                            padding: '10px',
                            fontSize: '0.9rem'
                          }}
                        >
                          <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                          Track
                        </button>
                      </div>
                      <div className="col-6">
                        <button
                          className="btn w-100"
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: '#bbdefb',
                            borderRadius: '12px',
                            padding: '10px',
                            fontSize: '0.9rem'
                          }}
                        >
                          <FontAwesomeIcon icon={faPhone} className="me-2" />
                          Call Driver
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="row g-3">
                    <div className="col-12">
                      <button
                        className="btn w-100"
                        onClick={requestAmbulance}
                        style={{
                          background: 'linear-gradient(135deg, #4caf50 0%, #388e3c 100%)',
                          border: 'none',
                          color: '#ffffff',
                          borderRadius: '12px',
                          padding: '12px',
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 8px 25px rgba(76, 175, 80, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = 'none';
                        }}
                      >
                        <FontAwesomeIcon icon={faAmbulance} className="me-2" />
                        Request Now
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        className="btn w-100"
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          color: '#e8f5e8',
                          borderRadius: '12px',
                          padding: '10px',
                          fontSize: '0.9rem'
                        }}
                      >
                        <FontAwesomeIcon icon={faHeartPulse} className="me-2" />
                        Priority
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        className="btn w-100"
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          color: '#e8f5e8',
                          borderRadius: '12px',
                          padding: '10px',
                          fontSize: '0.9rem'
                        }}
                      >
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                        Nearby
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Bar */}
        <div className="row">
          <div className="col-12">
            <div
              className="card border-0"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <div className="card-body p-3">
                <div className="row g-2">
                  <div className="col-6 col-md-3">
                    <button
                      className="btn w-100"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#e8f5e8',
                        borderRadius: '12px',
                        padding: '12px 8px'
                      }}
                    >
                      <FontAwesomeIcon icon={faPhone} className="d-block mb-1" />
                      <small>Police</small>
                    </button>
                  </div>
                  <div className="col-6 col-md-3">
                    <button
                      className="btn w-100"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#e8f5e8',
                        borderRadius: '12px',
                        padding: '12px 8px'
                      }}
                    >
                      <FontAwesomeIcon icon={faExclamationTriangle} className="d-block mb-1" />
                      <small>Fire</small>
                    </button>
                  </div>
                  <div className="col-6 col-md-3">
                    <button
                      className="btn w-100"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#e8f5e8',
                        borderRadius: '12px',
                        padding: '12px 8px'
                      }}
                    >
                      <FontAwesomeIcon icon={faHeartPulse} className="d-block mb-1" />
                      <small>Hospital</small>
                    </button>
                  </div>
                  <div className="col-6 col-md-3">
                    <button
                      className="btn w-100"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#e8f5e8',
                        borderRadius: '12px',
                        padding: '12px 8px'
                      }}
                    >
                      <FontAwesomeIcon icon={faUser} className="d-block mb-1" />
                      <small>Contact</small>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  );
};

export default USection2;