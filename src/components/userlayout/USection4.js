// USection4.js
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartbeat,
  faLungs,
  faBrain,
  faUtensils,
  faRunning,
  faArrowTrendUp
} from "@fortawesome/free-solid-svg-icons";

// Placeholder 3D Human Model (can replace with a GLTF model of human body)
function HumanModel() {
  return (
    <mesh scale={2}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color="rgba(76, 175, 80, 0.8)" wireframe />
    </mesh>
  );
}

const USection4 = () => {
  const suggestions = [
    {
      id: 1,
      title: "Cardio Health",
      icon: faHeartbeat,
      status: "Stable",
      tip: "Daily 30 min walk recommended"
    },
    {
      id: 2,
      title: "Lung Capacity",
      icon: faLungs,
      status: "Optimal",
      tip: "Practice deep breathing exercises"
    },
    {
      id: 3,
      title: "Brain Activity",
      icon: faBrain,
      status: "Active",
      tip: "Reduce screen time before bed"
    },
    {
      id: 4,
      title: "Nutrition",
      icon: faUtensils,
      status: "Needs Attention",
      tip: "Add more fiber & proteins to your diet"
    },
    {
      id: 5,
      title: "Fitness",
      icon: faRunning,
      status: "Improving",
      tip: "Keep up with 3 workouts/week"
    }
  ];

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #f9fff9 0%, #e8f5e9 100%)",
        minHeight: "100vh"
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2
              style={{
                color: "#1b5e20",
                fontWeight: "700",
                fontSize: "2rem",
                marginBottom: "10px"
              }}
            >
              Digital Twin – Predictive Health
            </h2>
            <p style={{ color: "#388e3c", fontSize: "1rem" }}>
              A futuristic digital replica that visualizes your health and
              provides AI-driven insights.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="row align-items-center">
          {/* Left: 3D Human Model */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div
              style={{
                background: "#fff",
                borderRadius: "20px",
                boxShadow: "0 8px 32px rgba(76,175,80,0.08)",
                height: "500px",
                position: "relative"
              }}
            >
              <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[3, 3, 3]} />
                <Suspense fallback={null}>
                  <Stage environment="city" intensity={0.6}>
                    <HumanModel />
                  </Stage>
                  <OrbitControls enableZoom={true} />
                </Suspense>
              </Canvas>
            </div>
          </div>

          {/* Right: Health Predictions */}
          <div className="col-lg-6">
            <div className="row g-3">
              {suggestions.map((s) => (
                <div key={s.id} className="col-12">
                  <div
                    className="p-4 d-flex align-items-center"
                    style={{
                      background: "#ffffff",
                      borderRadius: "16px",
                      boxShadow: "0 4px 20px rgba(76,175,80,0.1)",
                      border: "1px solid rgba(76,175,80,0.15)",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        background:
                          "linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "15px",
                        flexShrink: 0
                      }}
                    >
                      <FontAwesomeIcon
                        icon={s.icon}
                        style={{ fontSize: "1.3rem", color: "#ffffff" }}
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5
                        style={{
                          margin: 0,
                          fontSize: "1.1rem",
                          fontWeight: "600",
                          color: "#1b5e20"
                        }}
                      >
                        {s.title} –{" "}
                        <span style={{ color: "#388e3c" }}>{s.status}</span>
                      </h5>
                      <p
                        style={{
                          margin: "4px 0 0 0",
                          fontSize: "0.9rem",
                          color: "#555"
                        }}
                      >
                        {s.tip}
                      </p>
                    </div>
                    <FontAwesomeIcon
                      icon={faArrowTrendUp}
                      style={{ color: "#4caf50", marginLeft: "10px" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USection4;
