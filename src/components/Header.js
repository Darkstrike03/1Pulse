import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import heart from "./assets/Heartbeat.json";
import Register from "./Register";
import { supabase } from "../supabaseClient";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [loading, setLoading] = useState(true);
  const profileDropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      if (user) {
        await fetchUserProfile(user.id);
      }
      setLoading(false);
    };

    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchUserProfile(session.user.id);
      } else {
        setUserProfile(null);
      }
    });

    return () => subscription?.unsubscribe();
  }, []);

  const fetchUserProfile = async (userId) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('photo_url, name, email') // Use 'name' from your profile table
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching user profile:', error.message);
        return;
      }
      setUserProfile(data);
    } catch (error) {
      console.error('Error fetching user profile:', error.message);
    }
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error.message);
    } else {
      setUser(null);
      setUserProfile(null);
      setShowProfileDropdown(false);
    }
  };

  const handleSignInSuccess = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      setUser(user);
      await fetchUserProfile(user.id);
    }
    setShowModal(false);
  };

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleProfileClick = () => setShowProfileDropdown(prev => !prev);
  const getInitials = (name) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const ProfileDropdown = () => (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        right: '0',
        marginTop: '10px',
        background: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(20px)',
        borderRadius: '12px',
        padding: '20px',
        minWidth: '280px',
        boxShadow: '0 10px 40px rgba(76, 175, 80, 0.15)',
        border: '1px solid rgba(76, 175, 80, 0.1)',
        zIndex: 1001,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
      }}
    >
      {/* Profile Header */}
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <div style={{ marginBottom: '12px' }}>
          {userProfile?.photo_url ? (
            <img
              src={userProfile.photo_url}
              alt="Profile"
              onError={(e) => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'flex'; }}
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid rgba(76, 175, 80, 0.2)'
              }}
            />
          ) : null}
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)',
              color: '#ffffff',
              display: userProfile?.photo_url ? 'none' : 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: '600',
              margin: '0 auto'
            }}
          >
            {getInitials(userProfile?.name || user?.email)}
          </div>
        </div>
        <h6 style={{ color: '#1b5e20', margin: '0 0 4px 0', fontSize: '16px', fontWeight: '600' }}>
          {userProfile?.name || 'User'}
        </h6>
        <p style={{ color: '#2e7d32', margin: 0, fontSize: '14px', opacity: 0.8 }}>
          {user?.email}
        </p>
      </div>

      {/* Menu Items */}
      <div style={{ marginBottom: '15px' }}>
        <button className="dropdown-item">View Profile</button>
        <button className="dropdown-item">Settings</button>
      </div>

      {/* Sign Out Button */}
      <button onClick={handleSignOut} className="dropdown-signout-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/></svg>
        Sign Out
      </button>
    </div>
  );

  if (loading) {
    return (
      <nav className="navbar" style={{ background: 'rgba(255, 255, 255, 0.95)', borderBottom: '1px solid rgba(76, 175, 80, 0.1)', boxShadow: '0 2px 20px rgba(0, 0, 0, 0.05)' }}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div style={{ padding: '4px', marginRight: '12px', width: 36, height: 36, background: 'rgba(76, 175, 80, 0.1)', borderRadius: '50%', animation: 'pulse 2s infinite' }}></div>
            <span style={{ fontWeight: "600", fontSize: "1.4rem", color: "#2e7d32" }}>1<span style={{ color: "#4caf50", fontWeight: "500" }}>pulse</span></span>
          </div>
          <div style={{ width: '80px', height: '36px', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '6px', animation: 'pulse 2s infinite' }}></div>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav className="navbar" style={{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(76, 175, 80, 0.1)', boxShadow: '0 2px 20px rgba(0, 0, 0, 0.05)', zIndex: 1000, position: 'sticky', top: 0 }}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="d-flex align-items-center">
            <div style={{ padding: '4px', marginRight: '12px' }}>
              <Lottie animationData={heart} loop={true} style={{ width: 36, height: 36, opacity: 0.9 }} />
            </div>
            <span style={{ fontWeight: "600", fontSize: "1.4rem", color: "#2e7d32" }}>1<span style={{ color: "#4caf50", fontWeight: "500" }}>pulse</span></span>
          </div>

          {/* User Auth */}
          <div style={{ position: 'relative', zIndex: 1000 }} ref={profileDropdownRef}>
            {user ? (
              <>
                <button
                  onClick={handleProfileClick}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: '6px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  {userProfile?.photo_url ? (
                    <img
                      src={userProfile.photo_url}
                      alt="Profile"
                      onError={(e) => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'flex'; }}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '2px solid rgba(76, 175, 80, 0.2)'
                      }}
                    />
                  ) : null}
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)',
                      color: '#ffffff',
                      display: userProfile?.photo_url ? 'none' : 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      fontWeight: '600'
                    }}
                  >
                    {getInitials(userProfile?.name || user?.email)}
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#2e7d32" style={{ transform: showProfileDropdown ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}>
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </button>
                {showProfileDropdown && <ProfileDropdown />}
              </>
            ) : (
              <button
                className="btn"
                style={{ background: '#4caf50', border: 'none', color: '#ffffff', fontWeight: '500', fontSize: '14px', padding: '8px 20px', borderRadius: '6px', transition: 'all 0.2s ease', fontFamily: "'Inter', sans-serif" }}
                onClick={handleOpenModal}
                onMouseEnter={(e) => e.target.style.background = '#45a049'}
                onMouseLeave={(e) => e.target.style.background = '#4caf50'}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </nav>

      {showModal && (
        <Register
          isOpen={showModal}
          onClose={handleCloseModal}
          onSignInSuccess={handleSignInSuccess}
        />
      )}

      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
        .dropdown-item {
          width: 100%;
          padding: 12px 16px;
          background: transparent;
          border: none;
          border-radius: 8px;
          color: #2e7d32;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .dropdown-item:hover {
          background: rgba(76, 175, 80, 0.05);
        }
        .dropdown-signout-btn {
          width: 100%;
          padding: 12px 16px;
          background: rgba(244, 67, 54, 0.05);
          border: 1px solid rgba(244, 67, 54, 0.1);
          border-radius: 8px;
          color: #d32f2f;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: center;
        }
        .dropdown-signout-btn:hover {
          background: rgba(244, 67, 54, 0.1);
        }
      `}</style>
    </>
  );
};

export default Header;