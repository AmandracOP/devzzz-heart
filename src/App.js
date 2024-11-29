import React, { useState, useEffect } from 'react';
import './App.css'; // Or the path to your CSS file

const HeartAnimation = () => {
  const [particles, setParticles] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowMessage(true), 1000);

    const createParticle = () => ({
      id: Math.random(),
      type: Math.random() > 0.7 ? '🌹' : '❤️',
      x: Math.random() * 100,
      y: 100 + Math.random() * 20,
      size: 20 + Math.random() * 40,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 2,
    });

    const interval = setInterval(() => {
      setParticles((prev) => [...prev.slice(-30), createParticle()]);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Particles Animation Container */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-float-up"
          style={{
            left: `${particle.x}%`,
            bottom: `-${particle.y}px`,
            fontSize: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          {particle.type}
        </div>
      ))}

      {/* Central Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative text-center z-10">
          {/* Main Heart */}
          <div className="animate-pulse-glow mb-8">
            <div className="text-9xl text-red-500 transform hover:scale-110 transition-transform duration-300">
              ❤️
            </div>
          </div>

          {/* Message Container */}
          {showMessage && (
            <div className="animate-fade-in space-y-6">
              <h1 className="text-5xl font-serif text-red-500 mb-4">Dear Devanshiii</h1>
              <p className="text-4xl text-white font-serif italic px-4">
                I will not say it directly but you know how much i care about you and how much importance you hold in my life
              </p>
              <div className="text-6xl animate-bounce mt-4">🌹</div>
            </div>
          )}
        </div>
      </div>

      {/* Corner Decorations - Stable Roses */}
      <div className="absolute top-10 left-10 text-6xl text-red-500">🌹</div>
      <div className="absolute top-10 right-10 text-6xl text-red-500">🌹</div>
      <div className="absolute bottom-10 left-10 text-6xl text-red-500">🌹</div>
      <div className="absolute bottom-10 right-10 text-6xl text-red-500">🌹</div>

      {/* Glowing Border */}
      <div className="absolute inset-0 border-8 border-red-500/20 rounded-lg m-4" />
    </div>
  );
};

// Enhanced animations and styles
const StyledAnimation = () => (
  <>
    <style>{`
      @keyframes float-up {
        0% {
          transform: translateY(0) rotate(0deg) scale(1);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(-100vh) rotate(360deg) scale(0.8);
          opacity: 0;
        }
      }

      @keyframes pulse-glow {
        0%, 100% {
          transform: scale(1);
          filter: drop-shadow(0 0 15px rgba(255, 0, 0, 0.5));
        }
        50% {
          transform: scale(1.1);
          filter: drop-shadow(0 0 30px rgba(255, 0, 0, 0.8));
        }
      }

      @keyframes fade-in {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes spin-slow {
        from {
          transform: rotate(0deg) scale(1);
        }
        to {
          transform: rotate(360deg) scale(1.1);
        }
      }

      .animate-float-up {
        animation: float-up linear forwards;
      }

      .animate-pulse-glow {
        animation: pulse-glow 2s ease-in-out infinite;
      }

      .animate-fade-in {
        animation: fade-in 1.5s ease-out forwards;
      }

      .animate-spin-slow {
        animation: spin-slow 8s linear infinite;
      }
    `}</style>

    {/* Add background song */}
    <audio autoPlay loop>
      <source src="Sun-Re-Sajaniya-Ali-Zafar.mp3" type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>

    <HeartAnimation />
  </>
);

// Add favicon and change website title
const App = () => {
  return (
    <>
      <head>
        <title>Love for Devanshi</title>
        <link rel="icon" href="image.png" />
      </head>
      <StyledAnimation />
    </>
  );
};

export default App;
