import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes, 
  faUser, 
  faLock, 
  faEnvelope, 
  faPhone, 
  faCamera,
  faEye,
  faEyeSlash
} from '@fortawesome/free-solid-svg-icons';

// Add the onSignInSuccess prop to your component
const Register = ({ isOpen, onClose, onSignInSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    // Login fields
    loginEmail: '',
    loginPassword: '',
    
    // Registration fields
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    bloodGroup: '',
    allergies: '',
    medications: '',
    medicalConditions: '',
    emergencyContact: '',
    emergencyPhone: '',
    photo: null
  });

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  
  const commonAllergies = [
    'No known allergies',
    'Penicillin',
    'Peanuts',
    'Shellfish',
    'Dairy',
    'Eggs',
    'Soy',
    'Wheat/Gluten',
    'Other'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileName = `${Date.now()}-${file.name}`;
      const { data, error } = await supabase.storage
        .from("profile-photos")
        .upload(fileName, file);

      if (error) {
        console.error("Photo upload error:", error.message);
      } else {
        const photoUrl = `${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/public/profile-photos/${data.path}`;
        setFormData(prev => ({
          ...prev,
          photo: photoUrl
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      try {
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.loginEmail,
          password: formData.loginPassword
        });

        if (error) {
          console.error("Login error:", error.message);
          alert("Invalid email or password.");
        } else {
          console.log("Login successful in Register component.");
          alert("Login successful!");
          if (onSignInSuccess) {
            onSignInSuccess();
          }
        }
      } catch (error) {
        console.error('An unexpected error occurred during login:', error.message);
        alert("An unexpected error occurred. Please try again.");
      }
    } else {
      // Registration logic
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      
      // Step 1: Sign up the user with Supabase Auth
      // This also triggers the database function to create the basic 'users' row.
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (authError) {
        console.error("Supabase auth sign-up error:", authError.message);
        alert("Registration failed. " + authError.message);
        return;
      }
      
      // Step 2: Now that the user is created, update their profile row
      // with the rest of the form data. The row already exists due to the trigger.
      const userId = authData.user.id;

      const { error: profileUpdateError } = await supabase
          .from("users")
          .update({
              name: formData.name,
              phone: formData.phone,
              blood_group: formData.bloodGroup,
              allergies: formData.allergies,
              medications: formData.medications,
              medical_conditions: formData.medicalConditions,
              emergency_contact_name: formData.emergencyContact,
              emergency_contact_phone: formData.emergencyPhone,
              photo_url: formData.photo // Store the photo URL if a file was uploaded
          })
          .eq('id', userId);

      if (profileUpdateError) {
          console.error("Profile update error:", profileUpdateError.message);
          // For a real app, you might want to handle this more gracefully.
          // For now, we'll just log the error.
      }

      console.log("User signed up and profile updated successfully.");
      alert("Registration successful! Please check your email to verify your account.");
      onClose(); // Close the modal
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="position-fixed w-100 h-100 d-flex align-items-center justify-content-center"
      style={{
        top: 0,
        left: 0,
        zIndex: 9999,
        background: 'rgba(46, 125, 50, 0.15)',
        backdropFilter: 'blur(20px)',
        animation: 'fadeIn 0.3s ease-out'
      }}
    >
      {/* Floating Floral Pattern Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 30%, rgba(76, 175, 80, 0.1) 0%, transparent 30%),
            radial-gradient(circle at 80% 20%, rgba(129, 199, 132, 0.08) 0%, transparent 25%),
            radial-gradient(circle at 30% 70%, rgba(165, 214, 167, 0.06) 0%, transparent 35%),
            radial-gradient(circle at 70% 80%, rgba(200, 230, 201, 0.05) 0%, transparent 40%)
          `,
          zIndex: 1
        }}
      />

      {/* Animated Floral Elements */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '60px',
          height: '60px',
          background: 'radial-gradient(circle, rgba(76, 175, 80, 0.15) 0%, transparent 70%)',
          borderRadius: '50% 40% 60% 30%',
          animation: 'floatSlow 8s ease-in-out infinite',
          zIndex: 1
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '80px',
          height: '80px',
          background: 'radial-gradient(circle, rgba(129, 199, 132, 0.12) 0%, transparent 70%)',
          borderRadius: '40% 60% 30% 70%',
          animation: 'floatSlow 10s ease-in-out infinite reverse',
          zIndex: 1
        }}
      />

      {/* Modal Container */}
      <div 
        className="card border-0 shadow-lg"
        style={{
          width: '90%',
          maxWidth: isLogin ? '420px' : '600px',
          maxHeight: '90vh',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(30px)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          position: 'relative',
          zIndex: 2,
          animation: 'slideUp 0.4s ease-out',
          overflowY: 'auto'
        }}
      >
        {/* Close Button */}
        <button
          className="btn position-absolute"
          style={{
            top: '15px',
            right: '15px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(76, 175, 80, 0.1)',
            border: 'none',
            color: '#4caf50',
            zIndex: 3,
            transition: 'all 0.3s ease'
          }}
          onClick={onClose}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(76, 175, 80, 0.2)';
            e.target.style.transform = 'rotate(90deg)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(76, 175, 80, 0.1)';
            e.target.style.transform = 'rotate(0deg)';
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* Header */}
        <div className="card-header border-0 text-center pt-4 pb-3" style={{ background: 'transparent' }}>
          <h3 
            style={{
              color: '#1b5e20',
              fontWeight: '700',
              marginBottom: '10px',
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
            }}
          >
            Welcome to{' '}
            <span style={{ color: '#4caf50' }}>1pulse</span>
          </h3>
          <p style={{ color: '#2e7d32', fontSize: '0.95rem', margin: 0 }}>
            {isLogin ? 'Sign in to your account' : 'Create your health profile'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="px-4 mb-3">
          <div 
            className="d-flex"
            style={{
              background: 'rgba(76, 175, 80, 0.05)',
              borderRadius: '12px',
              padding: '6px',
              position: 'relative'
            }}
          >
            <button
              className="btn flex-fill position-relative"
              style={{
                background: isLogin ? '#4caf50' : 'transparent',
                color: isLogin ? '#ffffff' : '#2e7d32',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '0.9rem',
                padding: '8px 16px',
                transition: 'all 0.3s ease',
                zIndex: 2
              }}
              onClick={() => setIsLogin(true)}
            >
              Sign In
            </button>
            <button
              className="btn flex-fill position-relative"
              style={{
                background: !isLogin ? '#4caf50' : 'transparent',
                color: !isLogin ? '#ffffff' : '#2e7d32',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '0.9rem',
                padding: '8px 16px',
                transition: 'all 0.3s ease',
                zIndex: 2
              }}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="card-body px-4 pb-4">
          <form onSubmit={handleSubmit}>
            {isLogin ? (
              /* Login Form */
              <>
                <div className="mb-3">
                  <label className="form-label" style={{ color: '#2e7d32', fontWeight: '500' }}>
                    Email Address
                  </label>
                  <div className="position-relative">
                    <FontAwesomeIcon 
                      icon={faEnvelope} 
                      style={{
                        position: 'absolute',
                        left: '15px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#81c784',
                        zIndex: 1
                      }}
                    />
                    <input
                      type="email"
                      className="form-control"
                      value={formData.loginEmail}
                      onChange={(e) => handleInputChange('loginEmail', e.target.value)}
                      placeholder="Enter your email"
                      required
                      style={{
                        paddingLeft: '45px',
                        border: '2px solid rgba(76, 175, 80, 0.2)',
                        borderRadius: '12px',
                        fontSize: '0.95rem',
                        padding: '12px 45px 12px 45px',
                        background: 'rgba(255, 255, 255, 0.8)',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#4caf50';
                        e.target.style.boxShadow = '0 0 0 3px rgba(76, 175, 80, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(76, 175, 80, 0.2)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label" style={{ color: '#2e7d32', fontWeight: '500' }}>
                    Password
                  </label>
                  <div className="position-relative">
                    <FontAwesomeIcon 
                      icon={faLock} 
                      style={{
                        position: 'absolute',
                        left: '15px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#81c784',
                        zIndex: 1
                      }}
                    />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="form-control"
                      value={formData.loginPassword}
                      onChange={(e) => handleInputChange('loginPassword', e.target.value)}
                      placeholder="Enter your password"
                      required
                      style={{
                        paddingLeft: '45px',
                        paddingRight: '45px',
                        border: '2px solid rgba(76, 175, 80, 0.2)',
                        borderRadius: '12px',
                        fontSize: '0.95rem',
                        padding: '12px 45px',
                        background: 'rgba(255, 255, 255, 0.8)',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#4caf50';
                        e.target.style.boxShadow = '0 0 0 3px rgba(76, 175, 80, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(76, 175, 80, 0.2)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                    <button
                      type="button"
                      className="btn position-absolute"
                      style={{
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        border: 'none',
                        background: 'transparent',
                        color: '#81c784',
                        padding: '5px',
                        zIndex: 1
                      }}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn w-100 mb-3"
                  style={{
                    background: 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)',
                    border: 'none',
                    color: '#ffffff',
                    fontWeight: '600',
                    padding: '12px',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(76, 175, 80, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Sign In
                </button>
              </>
            ) : (
              /* Registration Form */
              <div className="row">
                {/* Basic Information */}
                <div className="col-md-6 mb-3">
                  <label className="form-label" style={{ color: '#2e7d32', fontWeight: '500' }}>
                    Full Name *
                  </label>
                  <div className="position-relative">
                    <FontAwesomeIcon 
                      icon={faUser} 
                      style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#81c784',
                        fontSize: '0.9rem'
                      }}
                    />
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                      style={{
                        paddingLeft: '35px',
                        border: '1px solid rgba(76, 175, 80, 0.3)',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        background: 'rgba(255, 255, 255, 0.8)'
                      }}
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label" style={{ color: '#2e7d32', fontWeight: '500' }}>
                    Email Address *
                  </label>
                  <div className="position-relative">
                    <FontAwesomeIcon 
                      icon={faEnvelope} 
                      style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#81c784',
                        fontSize: '0.9rem'
                      }}
                    />
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email"
                      required
                      style={{
                        paddingLeft: '35px',
                        border: '1px solid rgba(76, 175, 80, 0.3)',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        background: 'rgba(255, 255, 255, 0.8)'
                      }}
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="col-md-6 mb-3">
                    <label className="form-label" style={{ color: '#2e7d32', fontWeight: '500' }}>
                    Password *
                    </label>
                    <div className="position-relative">
                    <FontAwesomeIcon icon={faLock} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#81c784', fontSize: '0.9rem' }} />
                    <input
                        type="password"
                        className="form-control form-control-sm"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        placeholder="Create password"
                        required
                        style={{ paddingLeft: '35px', border: '1px solid rgba(76, 175, 80, 0.3)', borderRadius: '8px', fontSize: '0.9rem', background: 'rgba(255, 255, 255, 0.8)' }}
                    />
                    </div>
                </div>

                {/* Confirm Password Field */}
                <div className="col-md-6 mb-3">
                    <label className="form-label" style={{ color: '#2e7d32', fontWeight: '500' }}>
                    Confirm Password *
                    </label>
                    <div className="position-relative">
                    <FontAwesomeIcon icon={faLock} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#81c784', fontSize: '0.9rem' }} />
                    <input
                        type="password"
                        className="form-control form-control-sm"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        placeholder="Confirm password"
                        required
                        style={{ paddingLeft: '35px', border: '1px solid rgba(76, 175, 80, 0.3)', borderRadius: '8px', fontSize: '0.9rem', background: 'rgba(255, 255, 255, 0.8)' }}
                    />
                    </div>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label" style={{ color: '#2e7d32', fontWeight: '500' }}>
                    Phone Number *
                  </label>
                  <div className="position-relative">
                    <FontAwesomeIcon 
                      icon={faPhone} 
                      style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#81c784',
                        fontSize: '0.9rem'
                      }}
                    />
                    <input
                      type="tel"
                      className="form-control form-control-sm"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Enter phone number"
                      required
                      style={{
                        paddingLeft: '35px',
                        border: '1px solid rgba(76, 175, 80, 0.3)',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        background: 'rgba(255, 255, 255, 0.8)'
                      }}
                    />
                  </div>
                </div>

                {/* Photo Upload */}
                <div className="col-12 mb-3">
                  <label className="form-label" style={{ color: '#2e7d32', fontWeight: '500' }}>
                    Profile Photo
                  </label>
                  <div
                    className="d-flex align-items-center p-3"
                    style={{
                      border: '2px dashed rgba(76, 175, 80, 0.3)',
                      borderRadius: '8px',
                      background: 'rgba(76, 175, 80, 0.02)'
                    }}
                  >
                    <FontAwesomeIcon 
                      icon={faCamera} 
                      style={{ color: '#81c784', marginRight: '10px' }}
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      style={{ display: 'none' }}
                      id="photoUpload"
                    />
                    <label
                      htmlFor="photoUpload"
                      className="btn btn-sm"
                      style={{
                        background: 'rgba(76, 175, 80, 0.1)',
                        border: '1px solid rgba(76, 175, 80, 0.3)',
                        color: '#2e7d32',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        marginRight: '10px'
                      }}
                    >
                      Choose Photo
                    </label>
                    <span style={{ fontSize: '0.85rem', color: '#666' }}>
                      {formData.photo ? 'File selected' : 'No file selected'}
                    </span>
                  </div>
                </div>

                {/* Medical Information */}
                <div className="col-md-6 mb-3">
                  <label className="form-label" style={{ color: '#2e7d32', fontWeight: '500' }}>
                    Blood Group *
                  </label>
                  <select
                    className="form-select form-select-sm"
                    value={formData.bloodGroup}
                    onChange={(e) => handleInputChange('bloodGroup', e.target.value)}
                    required
                    style={{
                      border: '1px solid rgba(76, 175, 80, 0.3)',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      background: 'rgba(255, 255, 255, 0.8)'
                    }}
                  >
                    <option value="">Select blood group</option>
                    {bloodGroups.map(group => (
                      <option key={group} value={group}>{group}</option>
                    ))}
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label" style={{ color: '#2e7d32', fontWeight: '500' }}>
                    Known Allergies
                  </label>
                  <select
                    className="form-select form-select-sm"
                    value={formData.allergies}
                    onChange={(e) => handleInputChange('allergies', e.target.value)}
                    style={{
                      border: '1px solid rgba(76, 175, 80, 0.3)',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      background: 'rgba(255, 255, 255, 0.8)'
                    }}
                  >
                    <option value="">Select allergies</option>
                    {commonAllergies.map(allergy => (
                      <option key={allergy} value={allergy}>{allergy}</option>
                    ))}
                  </select>
                </div>

                <div className="col-12 mb-3">
                  <label className="form-label" style={{ color: '#2e7d32', fontWeight: '500' }}>
                    Current Medications
                  </label>
                  <textarea
                    className="form-control form-control-sm"
                    rows="2"
                    value={formData.medications}
                    onChange={(e) => handleInputChange('medications', e.target.value)}
                    placeholder="List current medications (optional)"
                    style={{
                      border: '1px solid rgba(76, 175, 80, 0.3)',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      background: 'rgba(255, 255, 255, 0.8)',
                      resize: 'none'
                    }}
                  />
                </div>

                <div className="col-12 mb-3">
                  <label className="form-label" style={{ color: '#2e7d32', fontWeight: '500' }}>
                    Medical Conditions
                  </label>
                  <textarea
                    className="form-control form-control-sm"
                    rows="2"
                    value={formData.medicalConditions}
                    onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
                    placeholder="List any medical conditions (optional)"
                    style={{
                      border: '1px solid rgba(76, 175, 80, 0.3)',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      background: 'rgba(255, 255, 255, 0.8)',
                      resize: 'none'
                    }}
                  />
                </div>

                {/* Emergency Contact */}
                <div className="col-md-6 mb-3">
                  <label className="form-label" style={{ color: '#2e7d32', fontWeight: '500' }}>
                    Emergency Contact Name *
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={formData.emergencyContact}
                    onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                    placeholder="Emergency contact name"
                    required
                    style={{
                      border: '1px solid rgba(76, 175, 80, 0.3)',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      background: 'rgba(255, 255, 255, 0.8)'
                    }}
                  />
                </div>

                <div className="col-md-6 mb-4">
                  <label className="form-label" style={{ color: '#2e7d32', fontWeight: '500' }}>
                    Emergency Contact Phone *
                  </label>
                  <input
                    type="tel"
                    className="form-control form-control-sm"
                    value={formData.emergencyPhone}
                    onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                    placeholder="Emergency contact phone"
                    required
                    style={{
                      border: '1px solid rgba(76, 175, 80, 0.3)',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      background: 'rgba(255, 255, 255, 0.8)'
                    }}
                  />
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    className="btn w-100"
                    style={{
                      background: 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)',
                      border: 'none',
                      color: '#ffffff',
                      fontWeight: '600',
                      padding: '12px',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 25px rgba(76, 175, 80, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    Create Health Profile
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes floatSlow {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-20px) rotate(10deg);
            opacity: 0.8;
          }
        }
        
        /* Custom scrollbar */
        .card::-webkit-scrollbar {
          width: 6px;
        }
        .card::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .card::-webkit-scrollbar-thumb {
          background: #81c784;
          border-radius: 10px;
        }
        .card::-webkit-scrollbar-thumb:hover {
          background: #66bb6a;
        }
      `}</style>
    </div>
  );
};

export default Register;