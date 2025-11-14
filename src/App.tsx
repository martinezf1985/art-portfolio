
// // App.tsx
// import React, { useEffect, useRef, useState } from "react";
// import { useLocation } from "react-router-dom";
// import NavBar from "./components/NavBar";
// import PhotoCarousel from "./components/PhotoCarousel";
// import ArtCarousel from "./components/ArtCarousel";
// import ActorExperience from "./components/ActorExperience";
// import Footer from "./components/Footer";
// import ContactSection from "./components/ContactSection";

// const App: React.FC = () => {
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   const photoRef = useRef<HTMLDivElement>(null);
//   const artRef = useRef<HTMLDivElement>(null);
//   const actorRef = useRef<HTMLDivElement>(null);
//   const contactRef = useRef<HTMLDivElement>(null);

//   const location = useLocation();

//   // Mostrar botón "Volver arriba"
//   useEffect(() => {
//     const onScroll = () => setShowScrollTop(window.scrollY > 300);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Hacer scroll solo cuando la ruta NO sea "/"
//   useEffect(() => {
//     const sectionMap: Record<string, React.RefObject<HTMLDivElement>> = {
//       "/": photoRef,
//       "/art": artRef,
//       "/actor": actorRef,
//       "/contact": contactRef,
//     };

//     // Si la ruta es "/" no ejecutamos scrollIntoView
//     if (location.pathname === "/") return;

//     const ref = sectionMap[location.pathname];
//     if (ref?.current) {
//       // Esperamos un poco para que todo el DOM esté listo
//       setTimeout(() => {
//         ref.current!.scrollIntoView({ behavior: "smooth" });
//       }, 100);
//     }
//   }, [location]);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-violet-900 via-black to-black text-white overflow-x-hidden">
//       {/* NAVBAR */}
//       <header className="py-6 bg-black/70 shadow-md">
//         <NavBar />
//       </header>

//       {/* TÍTULO PRINCIPAL */}
//       <section className="text-center py-12">
//         <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
//           FERDINAN MARTINS – Actor & Artista Visual
//         </h1>
//         <p className="mt-4 text-gray-300 text-lg">
//           Portfolio profesional y artístico
//         </p>
//       </section>

//       {/* GALERÍA FOTOGRÁFICA */}
//       <section
//         ref={photoRef}
//         className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16 bg-black"
//       >
//         <PhotoCarousel />
//         <div className="text-center md:text-left">
//           <h2 className="text-3xl font-bold text-violet-300 mb-4">
//             Galería Fotográfica
//           </h2>
//           <p className="text-gray-400">
//             Fotografías seleccionadas de proyectos actorales y artísticos.
//           </p>
//         </div>
//       </section>

//       {/* OBRAS VISUALES */}
//       <section
//         ref={artRef}
//         className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16 items-center bg-gray-950/90"
//       >
//         <div>
//           <h2 className="text-3xl font-semibold text-violet-400 mb-4">
//             Obras Visuales
//           </h2>
//           <p className="text-gray-300">
//             Carrusel con obras visuales propias, estilo artístico contemporáneo y
//             expresivo.
//           </p>
//         </div>
//         <ArtCarousel />
//       </section>

//       {/* EXPERIENCIA ACTORAL */}
//       <section
//         ref={actorRef}
//         className="transition-all duration-500 ease-in-out px-6 py-12 bg-black/80"
//       >
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-violet-400 mb-6 text-center">
//             Experiencia como Actor
//           </h2>
//           <ActorExperience />
//         </div>
//       </section>

//       {/* CONTACTO: siempre renderizado, pero solo scrollea cuando /contact */}
//       <ContactSection ref={contactRef} />

//       {/* FOOTER */}
//       <footer className="bg-black py-8 text-center text-gray-400 text-sm border-t border-violet-800">
//         <Footer />
//       </footer>

//       {/* BOTÓN "VOLVER ARRIBA" */}
//       {showScrollTop && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-6 right-6 bg-violet-600 text-white rounded-full p-3 shadow-lg hover:bg-violet-400 transition-all"
//           aria-label="Volver arriba"
//         >
//           ↑
//         </button>
//       )}
//     </div>
//   );
// };

// export default App;



// src/App.tsx


import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import PhotoCarousel from "./components/PhotoCarousel";
import PhotoGrid from "./components/PhotoGrid";
import ArtCarousel from "./components/ArtCarousel";
import ActorExperience from "./components/ActorExperience";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";


const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const photoRef = useRef<HTMLDivElement>(null);
  const artRef = useRef<HTMLDivElement>(null);
  const actorRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const isFirstMount = useRef(true);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    // Ahora el map acepta RefObject<HTMLDivElement | null>
    const sectionMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      "/": photoRef,
      "/art": artRef,
      "/actor": actorRef,
      "/contact": contactRef,
    };
    const ref = sectionMap[location.pathname];
    if (ref?.current) {
      setTimeout(() => {
        ref.current!.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-black to-black text-white overflow-x-hidden">
      <header className="py-6 bg-black/70 shadow-md">
        <NavBar />
      </header>

      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
          FERDINAN MARTINS – Actor & Artista Visual
        </h1>
        <p className="mt-4 text-gray-300 text-lg">
          Portfolio profesional y artístico
        </p>
      </section>

      <section
        ref={photoRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16 bg-black"
      >
        <PhotoCarousel />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-violet-300 mb-4">
            Galería Fotográfica
          </h2>
          <p className="text-gray-400">
            Fotografías seleccionadas de proyectos actorales y artísticos.
          </p>
        </div>
      </section>

      {/* Galería en Cuadrícula */}
      <section className="px-6 py-16 bg-gray-950/90">
        <PhotoGrid />
      </section>

      <section
        ref={artRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16 items-center bg-gray-950/90"
      >
        <div>
          <h2 className="text-3xl font-semibold text-violet-400 mb-4">
            Obras Visuales
          </h2>
          <p className="text-gray-300">
            Carrusel con obras visuales propias, estilo artístico contemporáneo y
            expresivo.
          </p>
        </div>
        <ArtCarousel />
      </section>

      <section
        ref={actorRef}
        className="transition-all duration-500 ease-in-out px-6 py-12 bg-black/80"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-violet-400 mb-6 text-center">
            Experiencia como Actor
          </h2>
          <ActorExperience />
        </div>
      </section>

      <ContactSection ref={contactRef} />

      <footer className="bg-black py-8 text-center text-gray-400 text-sm border-t border-violet-800">
        <Footer />
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-violet-600 text-white rounded-full p-3 shadow-lg hover:bg-violet-400 transition-all"
          aria-label="Volver arriba"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default App;
