import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { supabase } from './supabaseClient';
import PublicLayout from './components/publiclayout/Publiclayout';
import UserLayout from './components/userlayout/Userlayout';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  // This useEffect runs once when the app loads to check the Supabase session
  useEffect(() => {
    // This is the initial check
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // This is the listener for state changes (e.g., login, logout)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Clean up the subscription on component unmount
    return () => subscription.unsubscribe();
  }, []); // Empty dependency array means this runs only on mount

  const handleLogin = (newSession) => {
    setSession(newSession);
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Logout error:', error.message);
    } else {
      setSession(null);
    }
  };

  // Show a loading state while checking the session
  if (loading) {
    return <div>Loading...</div>; // Or a nice loading spinner
  }

  return (
    <Router>
      <Header session={session} onLogout={handleLogout} />

      
        <Routes>
          {/* If there is a session, show the UserLayout for all user-related paths */}
          {session ? (
            <Route path="/*" element={<UserLayout onLogout={handleLogout} />} />
          ) : (
            // If there is no session, show the PublicLayout for all public paths
            <Route path="/*" element={<PublicLayout onLogin={handleLogin} />} />
          )}

          {/* Fallback route to redirect to the correct layout */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      

      <Footer />
    </Router>
  );
}

export default App;