import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch,
  faMapMarkerAlt,
  faHospital,
  faPills,
  faStar,
  faRoute,
  faPhone,
  faClock,
  faUsers,
  faBed,
  faCheckCircle,
  faTimesCircle,
  faFilter,
  faSort,
  faRefresh
} from '@fortawesome/free-solid-svg-icons';

const USection3 = () => {
  const [activeTab, setActiveTab] = useState('hospitals');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('distance');
  const [refreshing, setRefreshing] = useState(false);

  // Sample data for hospitals
  const hospitals = [
    {
      id: 1,
      name: "Apollo Hospital",
      address: "Sahar Road, Andheri East, Mumbai",
      distance: "2.3 km",
      rating: 4.5,
      waitTime: "15 mins",
      beds: 45,
      specialties: ["Cardiology", "Neurology", "Emergency"],
      available: true,
      phone: "+91-9876543210"
    },
    {
      id: 2,
      name: "Kokilaben Dhirubhai Ambani Hospital",
      address: "Four Bunglows, Andheri West, Mumbai",
      distance: "3.1 km",
      rating: 4.8,
      waitTime: "8 mins",
      beds: 23,
      specialties: ["Oncology", "Pediatrics", "Orthopedics"],
      available: true,
      phone: "+91-9876543211"
    },
    {
      id: 3,
      name: "SevenHills Hospital",
      address: "Marol Maroshi Road, Andheri East, Mumbai",
      distance: "4.2 km",
      rating: 4.2,
      waitTime: "25 mins",
      beds: 12,
      specialties: ["General Medicine", "Surgery", "ICU"],
      available: false,
      phone: "+91-9876543212"
    }
  ];

  // Sample data for medical stores
  const medicalStores = [
    {
      id: 1,
      name: "Apollo Pharmacy",
      address: "Station Road, Andheri West, Mumbai",
      distance: "1.8 km",
      rating: 4.3,
      openTime: "24/7",
      medicines: ["Paracetamol", "Crocin", "Dolo 650"],
      available: true,
      phone: "+91-9876543220"
    },
    {
      id: 2,
      name: "MedPlus",
      address: "JP Road, Versova, Andheri West, Mumbai",
      distance: "2.5 km",
      rating: 4.1,
      openTime: "8 AM - 11 PM",
      medicines: ["Aspirin", "Cetrizine", "Vitamin D"],
      available: true,
      phone: "+91-9876543221"
    },
    {
      id: 3,
      name: "Wellness Forever",
      address: "Link Road, Malad West, Mumbai",
      distance: "5.2 km",
      rating: 4.6,
      openTime: "9 AM - 10 PM",
      medicines: ["Insulin", "BP Tablets", "Antibiotics"],
      available: false,
      phone: "+91-9876543222"
    }
  ];

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        style={{
          color: i < Math.floor(rating) ? '#ffc107' : 'rgba(255, 255, 255, 0.3)',
          fontSize: '0.8rem',
          marginRight: '2px'
        }}
      />
    ));
  };

  return (
    <section 
      className="py-4"
      style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, rgba(232, 245, 233, 0.3) 100%)',
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header Section */}
        <div className="row mb-4">
          <div className="col-12">
            <div 
              className="p-4"
              style={{
                background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(129, 199, 132, 0.05) 100%)',
                borderRadius: '20px',
                border: '1px solid rgba(76, 175, 80, 0.2)'
              }}
            >
              <h2 
                style={{
                  color: '#1b5e20',
                  fontWeight: '700',
                  marginBottom: '10px',
                  fontSize: '1.8rem'
                }}
              >
                Medical Services Near You
              </h2>
              <p style={{ color: '#2e7d32', margin: 0, fontSize: '1rem' }}>
                Find hospitals and medical stores with real-time availability
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="row mb-4">
          <div className="col-12">
            <div 
              className="p-3"
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(76, 175, 80, 0.1)',
                border: '1px solid rgba(76, 175, 80, 0.1)'
              }}
            >
              <div className="row align-items-center">
                <div className="col-md-6 mb-2 mb-md-0">
                  <div className="position-relative">
                    <FontAwesomeIcon 
                      icon={faSearch}
                      style={{
                        position: 'absolute',
                        left: '15px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#81c784'
                      }}
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search hospitals or medicines..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{
                        paddingLeft: '45px',
                        border: '2px solid rgba(76, 175, 80, 0.2)',
                        borderRadius: '12px',
                        fontSize: '0.95rem',
                        background: 'rgba(76, 175, 80, 0.02)'
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center justify-content-md-end">
                    <select
                      className="form-select me-2"
                      value={selectedFilter}
                      onChange={(e) => setSelectedFilter(e.target.value)}
                      style={{
                        border: '1px solid rgba(76, 175, 80, 0.3)',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        maxWidth: '140px'
                      }}
                    >
                      <option value="distance">Distance</option>
                      <option value="rating">Rating</option>
                      <option value="availability">Available</option>
                    </select>
                    <button
                      className="btn"
                      onClick={handleRefresh}
                      style={{
                        background: '#4caf50',
                        border: 'none',
                        color: '#ffffff',
                        borderRadius: '8px',
                        padding: '8px 12px'
                      }}
                    >
                      <FontAwesomeIcon 
                        icon={faRefresh} 
                        style={{
                          animation: refreshing ? 'spin 1s linear infinite' : 'none'
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex justify-content-center">
              <div 
                className="btn-group"
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(76, 175, 80, 0.1)',
                  padding: '6px'
                }}
              >
                <button
                  className="btn"
                  onClick={() => setActiveTab('hospitals')}
                  style={{
                    background: activeTab === 'hospitals' ? 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)' : 'transparent',
                    color: activeTab === 'hospitals' ? '#ffffff' : '#2e7d32',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '12px 24px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    minWidth: '140px'
                  }}
                >
                  <FontAwesomeIcon icon={faHospital} className="me-2" />
                  Hospitals
                </button>
                <button
                  className="btn"
                  onClick={() => setActiveTab('stores')}
                  style={{
                    background: activeTab === 'stores' ? 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)' : 'transparent',
                    color: activeTab === 'stores' ? '#ffffff' : '#2e7d32',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '12px 24px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    minWidth: '140px'
                  }}
                >
                  <FontAwesomeIcon icon={faPills} className="me-2" />
                  Pharmacies
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="row">
          <div className="col-12">
            {activeTab === 'hospitals' ? (
              /* Hospital List View */
              <div className="row g-3">
                {hospitals.map((hospital, index) => (
                  <div key={hospital.id} className="col-12">
                    <div
                      className="p-4"
                      style={{
                        background: '#ffffff',
                        borderRadius: '20px',
                        boxShadow: '0 8px 32px rgba(76, 175, 80, 0.08)',
                        border: '1px solid rgba(76, 175, 80, 0.1)',
                        transition: 'all 0.3s ease',
                        borderLeft: hospital.available ? '5px solid #4caf50' : '5px solid #f44336'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 12px 40px rgba(76, 175, 80, 0.12)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 32px rgba(76, 175, 80, 0.08)';
                      }}
                    >
                      <div className="row align-items-center">
                        <div className="col-md-8">
                          <div className="d-flex align-items-start mb-3">
                            <div
                              style={{
                                width: '60px',
                                height: '60px',
                                background: 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: '15px',
                                flexShrink: 0
                              }}
                            >
                              <FontAwesomeIcon 
                                icon={faHospital} 
                                style={{ fontSize: '1.5rem', color: '#ffffff' }}
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h4 
                                style={{
                                  color: '#1b5e20',
                                  fontWeight: '600',
                                  margin: '0 0 5px 0',
                                  fontSize: '1.3rem'
                                }}
                              >
                                {hospital.name}
                                <span
                                  style={{
                                    marginLeft: '10px',
                                    padding: '2px 8px',
                                    fontSize: '0.7rem',
                                    borderRadius: '12px',
                                    background: hospital.available ? '#e8f5e8' : '#ffebee',
                                    color: hospital.available ? '#2e7d32' : '#c62828',
                                    fontWeight: '500'
                                  }}
                                >
                                  {hospital.available ? 'AVAILABLE' : 'FULL'}
                                </span>
                              </h4>
                              <p style={{ color: '#666', margin: '0 0 8px 0', fontSize: '0.9rem' }}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" style={{ color: '#81c784' }} />
                                {hospital.address}
                              </p>
                              <div className="d-flex align-items-center flex-wrap">
                                <div className="me-3 mb-1">
                                  {renderStars(hospital.rating)}
                                  <span style={{ color: '#666', fontSize: '0.8rem', marginLeft: '5px' }}>
                                    {hospital.rating}
                                  </span>
                                </div>
                                <div className="me-3 mb-1" style={{ fontSize: '0.8rem', color: '#666' }}>
                                  <FontAwesomeIcon icon={faRoute} className="me-1" style={{ color: '#81c784' }} />
                                  {hospital.distance}
                                </div>
                                <div className="me-3 mb-1" style={{ fontSize: '0.8rem', color: '#666' }}>
                                  <FontAwesomeIcon icon={faClock} className="me-1" style={{ color: '#81c784' }} />
                                  {hospital.waitTime}
                                </div>
                                <div className="mb-1" style={{ fontSize: '0.8rem', color: '#666' }}>
                                  <FontAwesomeIcon icon={faBed} className="me-1" style={{ color: '#81c784' }} />
                                  {hospital.beds} beds
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="d-flex flex-wrap">
                            {hospital.specialties.map((specialty, idx) => (
                              <span
                                key={idx}
                                style={{
                                  background: 'rgba(76, 175, 80, 0.1)',
                                  color: '#2e7d32',
                                  padding: '4px 8px',
                                  borderRadius: '8px',
                                  fontSize: '0.75rem',
                                  marginRight: '6px',
                                  marginBottom: '4px',
                                  fontWeight: '500'
                                }}
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="col-md-4 text-md-end mt-3 mt-md-0">
                          <div className="row g-2">
                            <div className="col-6 col-md-12">
                              <button
                                className="btn w-100"
                                style={{
                                  background: 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)',
                                  border: 'none',
                                  color: '#ffffff',
                                  borderRadius: '12px',
                                  padding: '10px',
                                  fontWeight: '600',
                                  fontSize: '0.9rem'
                                }}
                              >
                                <FontAwesomeIcon icon={faRoute} className="me-2" />
                                Navigate
                              </button>
                            </div>
                            <div className="col-6 col-md-12">
                              <button
                                className="btn w-100"
                                style={{
                                  background: 'rgba(76, 175, 80, 0.1)',
                                  border: '1px solid rgba(76, 175, 80, 0.3)',
                                  color: '#2e7d32',
                                  borderRadius: '12px',
                                  padding: '10px',
                                  fontWeight: '500',
                                  fontSize: '0.9rem'
                                }}
                              >
                                <FontAwesomeIcon icon={faPhone} className="me-2" />
                                Call
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Medical Store List View */
              <div className="row g-3">
                {medicalStores.map((store, index) => (
                  <div key={store.id} className="col-12">
                    <div
                      className="p-4"
                      style={{
                        background: '#ffffff',
                        borderRadius: '20px',
                        boxShadow: '0 8px 32px rgba(76, 175, 80, 0.08)',
                        border: '1px solid rgba(76, 175, 80, 0.1)',
                        transition: 'all 0.3s ease',
                        borderLeft: store.available ? '5px solid #4caf50' : '5px solid #f44336'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 12px 40px rgba(76, 175, 80, 0.12)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 32px rgba(76, 175, 80, 0.08)';
                      }}
                    >
                      <div className="row align-items-center">
                        <div className="col-md-8">
                          <div className="d-flex align-items-start mb-3">
                            <div
                              style={{
                                width: '60px',
                                height: '60px',
                                background: 'linear-gradient(135deg, #66bb6a 0%, #81c784 100%)',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: '15px',
                                flexShrink: 0
                              }}
                            >
                              <FontAwesomeIcon 
                                icon={faPills} 
                                style={{ fontSize: '1.5rem', color: '#ffffff' }}
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h4 
                                style={{
                                  color: '#1b5e20',
                                  fontWeight: '600',
                                  margin: '0 0 5px 0',
                                  fontSize: '1.3rem'
                                }}
                              >
                                {store.name}
                                <span
                                  style={{
                                    marginLeft: '10px',
                                    padding: '2px 8px',
                                    fontSize: '0.7rem',
                                    borderRadius: '12px',
                                    background: store.available ? '#e8f5e8' : '#ffebee',
                                    color: store.available ? '#2e7d32' : '#c62828',
                                    fontWeight: '500'
                                  }}
                                >
                                  {store.available ? 'OPEN' : 'CLOSED'}
                                </span>
                              </h4>
                              <p style={{ color: '#666', margin: '0 0 8px 0', fontSize: '0.9rem' }}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" style={{ color: '#81c784' }} />
                                {store.address}
                              </p>
                              <div className="d-flex align-items-center flex-wrap">
                                <div className="me-3 mb-1">
                                  {renderStars(store.rating)}
                                  <span style={{ color: '#666', fontSize: '0.8rem', marginLeft: '5px' }}>
                                    {store.rating}
                                  </span>
                                </div>
                                <div className="me-3 mb-1" style={{ fontSize: '0.8rem', color: '#666' }}>
                                  <FontAwesomeIcon icon={faRoute} className="me-1" style={{ color: '#81c784' }} />
                                  {store.distance}
                                </div>
                                <div className="mb-1" style={{ fontSize: '0.8rem', color: '#666' }}>
                                  <FontAwesomeIcon icon={faClock} className="me-1" style={{ color: '#81c784' }} />
                                  {store.openTime}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '8px', fontWeight: '500' }}>
                              Available Medicines:
                            </p>
                            <div className="d-flex flex-wrap">
                              {store.medicines.map((medicine, idx) => (
                                <span
                                  key={idx}
                                  style={{
                                    background: 'rgba(129, 199, 132, 0.1)',
                                    color: '#2e7d32',
                                    padding: '4px 8px',
                                    borderRadius: '8px',
                                    fontSize: '0.75rem',
                                    marginRight: '6px',
                                    marginBottom: '4px',
                                    fontWeight: '500'
                                  }}
                                >
                                  {medicine}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4 text-md-end mt-3 mt-md-0">
                          <div className="row g-2">
                            <div className="col-6 col-md-12">
                              <button
                                className="btn w-100"
                                style={{
                                  background: 'linear-gradient(135deg, #66bb6a 0%, #81c784 100%)',
                                  border: 'none',
                                  color: '#ffffff',
                                  borderRadius: '12px',
                                  padding: '10px',
                                  fontWeight: '600',
                                  fontSize: '0.9rem'
                                }}
                              >
                                <FontAwesomeIcon icon={faRoute} className="me-2" />
                                Navigate
                              </button>
                            </div>
                            <div className="col-6 col-md-12">
                              <button
                                className="btn w-100"
                                style={{
                                  background: 'rgba(129, 199, 132, 0.1)',
                                  border: '1px solid rgba(129, 199, 132, 0.3)',
                                  color: '#2e7d32',
                                  borderRadius: '12px',
                                  padding: '10px',
                                  fontWeight: '500',
                                  fontSize: '0.9rem'
                                }}
                              >
                                <FontAwesomeIcon icon={faPhone} className="me-2" />
                                Call
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default USection3;