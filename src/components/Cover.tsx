import React, { useState, useEffect } from 'react';

interface CoverProps {
  onEnter: () => void;
  coverImage?: string;
}

const Cover: React.FC<CoverProps> = ({ onEnter, coverImage = '/photos/foto04.webp' }) => {
  const [isBlinking, setIsBlinking] = useState(false);

  // Efecto de parpadeo continuo más visible
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 800); // Parpadea cada 800ms para ser más notorio

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      {/* Foto de fondo ocupando toda la pantalla */}
      <div className="absolute inset-0">
        <img
          src={coverImage}
          alt="Ferdinan Martins"
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/photos/foto04.webp';
          }}
        />
        {/* Overlay oscuro para mejor legibilidad */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Overlay con efecto de parpadeo violeta */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isBlinking ? 'opacity-0' : 'opacity-40'
        } bg-violet-600`}
        style={{
          animation: 'blink 1.6s infinite',
        }}
      />

      {/* Efecto de brillo parpadeante en toda la pantalla */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isBlinking ? 'opacity-0' : 'opacity-30'
        }`}
        style={{
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.6) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Contenido principal superpuesto */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Texto principal con efecto de parpadeo */}
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-8 transition-opacity duration-300 ${
            isBlinking ? 'opacity-100' : 'opacity-90'
          } text-white drop-shadow-2xl`}
          style={{
            textShadow: '0 0 20px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.4)',
          }}
        >
          Acompañame en esta aventura
        </h1>

        {/* Botón con efecto de parpadeo */}
        <button
          onClick={onEnter}
          className="group relative px-10 py-5 bg-violet-600 hover:bg-violet-700 text-white text-xl md:text-2xl font-semibold rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-violet-500/50"
        >
          <span className="relative z-10">Let's Go</span>
          {/* Efecto de brillo parpadeante en el botón */}
          <span
            className={`absolute inset-0 rounded-full bg-violet-400 transition-opacity duration-300 ${
              isBlinking ? 'opacity-0' : 'opacity-60'
            } blur-xl`}
          />
          {/* Borde parpadeante */}
          <span
            className={`absolute inset-0 rounded-full border-2 border-violet-300 transition-opacity duration-300 ${
              isBlinking ? 'opacity-50' : 'opacity-100'
            }`}
          />
        </button>
      </div>

      {/* Partículas decorativas parpadeantes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 md:w-2 md:h-2 bg-violet-400 rounded-full transition-opacity duration-300 ${
              isBlinking ? 'opacity-0' : 'opacity-100'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 1.6}s`,
            }}
          />
        ))}
      </div>

      {/* CSS para animación de parpadeo */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
};

export default Cover;


