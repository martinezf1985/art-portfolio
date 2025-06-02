// opcion 1

// import React, { useState } from "react";
// import NavBar from "./components/NavBar";
// import PhotoCarousel from "./components/PhotoCarousel";
// import ArtCarousel from "./components/ArtCarousel";
// import ContactForm from "./components/ContactForm";
// import ActorExperience from "./components/ActorExperience";
// import Footer from "./components/Footer";

// const App = () => {
//   const [activeSection, setActiveSection] = useState(null);

//   const toggleSection = (section) => {
//     setActiveSection(activeSection === section ? null : section);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-violet-900 via-black to-black text-white flex flex-col">
//       {/* Navbar */}
//       <header className="py-6 bg-black/70 shadow-md">
//         <NavBar />
//       </header>

//       {/* Título */}
//       <section className="text-center py-12">
//         <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
//           FERDINAN MARTINS – Actor & Artista Visual
//         </h1>
//         <p className="mt-4 text-gray-300 text-lg">Portfolio profesional y artístico</p>
//       </section>

//       {/* Cover Experiencia (arriba) */}
//       <section className="px-6">
//         <button
//           onClick={() => toggleSection("experience")}
//           className="w-full text-left text-4xl font-bold text-violet-400 py-6 cursor-pointer hover:text-violet-600 transition"
//         >
//           Experiencia como Actor
//         </button>
//         <div
//           className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
//             activeSection === "experience" ? "max-h-[1000px] mt-4" : "max-h-0"
//           }`}
//         >
//           <div className="bg-black/70 p-6 rounded-md relative">
//             <button
//               onClick={() => setActiveSection(null)}
//               className="absolute top-4 right-4 text-violet-300 hover:text-violet-600 font-bold"
//               aria-label="Cerrar experiencia"
//             >
//               ✕
//             </button>
//             <ActorExperience />
//           </div>
//         </div>
//       </section>

//       {/* Carousels siempre visibles */}
//       <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16 items-center bg-gray-950/90 flex-grow">
//         <div>
//           <h2 className="text-3xl font-semibold text-violet-400 mb-4">Obras Visuales</h2>
//           <p className="text-gray-300 mb-6">
//             Carrusel con obras visuales propias, estilo artístico contemporáneo y expresivo.
//           </p>
//           <ArtCarousel />
//         </div>
//         <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6">
//           <h2 className="text-3xl font-bold text-center text-violet-300 mb-6">Galería Fotográfica</h2>
//           <PhotoCarousel />
//         </div>
//       </section>

//       {/* Cover Contacto (justo abajo de los carousels) */}
//       <section className="px-6 mb-20">
//         <button
//           onClick={() => toggleSection("contact")}
//           className="w-full text-left text-4xl font-bold text-violet-400 py-6 cursor-pointer hover:text-violet-600 transition"
//         >
//           Contacto
//         </button>
//         <div
//           className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
//             activeSection === "contact" ? "max-h-[700px] mt-4" : "max-h-0"
//           }`}
//         >
//           <div className="bg-gradient-to-tr from-violet-700 via-violet-800 to-black p-8 rounded-md text-white relative">
//             <button
//               onClick={() => setActiveSection(null)}
//               className="absolute top-4 right-4 text-violet-300 hover:text-violet-600 font-bold"
//               aria-label="Cerrar contacto"
//             >
//               ✕
//             </button>
//             <ContactForm />
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-black py-8 text-center text-gray-400 text-sm border-t border-violet-800 mt-auto">
//         <Footer />
//       </footer>
//     </div>
//   );
// };

// export default App;


//opcion 2

// import React, { useState } from "react";
// import NavBar from "./components/NavBar";
// import PhotoCarousel from "./components/PhotoCarousel";
// import ArtCarousel from "./components/ArtCarousel";
// import ContactForm from "./components/ContactForm";
// import ActorExperience from "./components/ActorExperience";
// import Footer from "./components/Footer";

// const App = () => {
//   const [activeSection, setActiveSection] = useState(null);

//   const toggleSection = (section) => {
//     setActiveSection(activeSection === section ? null : section);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-violet-900 via-black to-black text-white flex flex-col">
//       {/* Navbar */}
//       <header className="py-4 bg-black/70 shadow-md">
//         <NavBar />
//       </header>

//       {/* Título */}
//       <section className="text-center py-8 px-4">
//         <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
//           FERDINAN MARTINS – Actor & Artista Visual
//         </h1>
//         <p className="mt-2 text-gray-400 text-base md:text-lg">
//           Portfolio profesional y artístico
//         </p>
//       </section>

//       {/* Cover Experiencia (arriba) */}
//       <section className="px-4 mb-8 max-w-4xl mx-auto w-full">
//         <button
//           onClick={() => toggleSection("experience")}
//           className="w-full text-left text-2xl md:text-3xl font-semibold text-violet-400 py-3 hover:text-violet-600 transition"
//         >
//           Experiencia como Actor
//         </button>
//         <div
//           className={`overflow-hidden transition-[max-height] duration-400 ease-in-out ${
//             activeSection === "experience" ? "max-h-[600px] mt-3" : "max-h-0"
//           }`}
//         >
//           <div
//             className="bg-black/70 p-4 rounded-md max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-violet-600 scrollbar-track-black"
//           >
//             <button
//               onClick={() => setActiveSection(null)}
//               className="text-violet-300 hover:text-violet-600 font-bold float-right mb-2"
//               aria-label="Cerrar experiencia"
//             >
//               ✕
//             </button>
//             <ActorExperience />
//           </div>
//         </div>
//       </section>

//       {/* Obras Visuales (Descripción izquierda, carousel derecha) */}
//       <section className="flex flex-col md:flex-row items-center px-4 mb-10 max-w-5xl mx-auto gap-6 w-full">
//         <div className="md:w-1/2 text-white">
//           <h2 className="text-2xl md:text-3xl font-semibold text-violet-400 mb-2">
//             Obras Visuales
//           </h2>
//           <p className="text-gray-300 text-sm md:text-base">
//             Carrusel con obras visuales propias, estilo artístico contemporáneo y expresivo.
//           </p>
//         </div>
//         <div className="md:w-1/2 w-full">
//           <ArtCarousel />
//         </div>
//       </section>

//       {/* Galería Fotográfica (Carousel izquierda, descripción derecha) */}
//       <section className="flex flex-col md:flex-row-reverse items-center px-4 mb-10 max-w-5xl mx-auto gap-6 w-full">
//         <div className="md:w-1/2 text-white">
//           <h2 className="text-2xl md:text-3xl font-semibold text-violet-400 mb-2 text-center md:text-left">
//             Galería Fotográfica
//           </h2>
//           <p className="text-gray-300 text-sm md:text-base text-center md:text-left">
//             Carrusel fotográfico con selección de imágenes profesionales y artísticas.
//           </p>
//         </div>
//         <div className="md:w-1/2 w-full">
//           <PhotoCarousel />
//         </div>
//       </section>

//       {/* Cover Contacto (debajo de carousels) */}
//       <section className="px-4 mb-16 max-w-4xl mx-auto w-full">
//         <button
//           onClick={() => toggleSection("contact")}
//           className="w-full text-left text-2xl md:text-3xl font-semibold text-violet-400 py-3 hover:text-violet-600 transition"
//         >
//           Contacto
//         </button>
//         <div
//           className={`overflow-hidden transition-[max-height] duration-400 ease-in-out ${
//             activeSection === "contact" ? "max-h-[600px] mt-3" : "max-h-0"
//           }`}
//         >
//           <div className="bg-gradient-to-tr from-violet-700 via-violet-800 to-black p-6 rounded-md text-white relative">
//             <button
//               onClick={() => setActiveSection(null)}
//               className="text-violet-300 hover:text-violet-600 font-bold float-right mb-2"
//               aria-label="Cerrar contacto"
//             >
//               ✕
//             </button>
//             <ContactForm />
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-black py-6 text-center text-gray-400 text-sm border-t border-violet-800 mt-auto">
//         <Footer />
//       </footer>
//     </div>
//   );
// };

// export default App;


//opcion 3

// import { useState, useEffect } from "react";
// import NavBar from "./components/NavBar";
// import PhotoCarousel from "./components/PhotoCarousel";
// import ArtCarousel from "./components/ArtCarousel";
// import ContactForm from "./components/ContactForm";
// import ActorExperience from "./components/ActorExperience";
// import Footer from "./components/Footer";

// const App = () => {
//   const [showActor, setShowActor] = useState(false);
//   const [showContact, setShowContact] = useState(false);
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   // Mostrar botón "Volver arriba"
//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 300);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-violet-900 via-black to-black text-white overflow-x-hidden">
//       <header className="py-6 bg-black/70 shadow-md">
//         <NavBar />
//       </header>

//       {/* TITULO */}
//       <section className="text-center py-12">
//         <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
//           FERDINAN MARTINS – Actor & Artista Visual
//         </h1>
//         <p className="mt-4 text-gray-300 text-lg">Portfolio profesional y artístico</p>
//       </section>

//       {/* BOTONES DE SECCIONES */}
//       <section className="flex flex-col items-center gap-6 py-12">
//         <button
//           onClick={() => setShowActor(!showActor)}
//           className="text-3xl font-semibold text-violet-300 hover:text-white transition-all duration-300"
//         >
//           Experiencia como Actor
//         </button>
//       </section>

//       {/* SECCIÓN ACTOR */}
//       {showActor && (
//         <section className="transition-all duration-500 ease-in-out px-6 py-12 bg-black/80">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-3xl font-bold text-violet-400 mb-6 text-center">
//               Experiencia como Actor
//             </h2>
//             <ActorExperience />
//           </div>
//         </section>
//       )}

//       {/* ARTE VISUAL */}
//       <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16 items-center bg-gray-950/90">
//         <div>
//           <h2 className="text-3xl font-semibold text-violet-400 mb-4">Obras Visuales</h2>
//           <p className="text-gray-300">
//             Carrusel con obras visuales propias, estilo artístico contemporáneo y expresivo.
//           </p>
//         </div>
//         <ArtCarousel />
//       </section>

//       {/* GALERÍA FOTOGRÁFICA */}
//       <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16 bg-black">
//         <PhotoCarousel />
//         <div className="text-center md:text-left">
//           <h2 className="text-3xl font-bold text-violet-300 mb-4">Galería Fotográfica</h2>
//           <p className="text-gray-400">
//             Fotografías seleccionadas de proyectos actorales y artísticos.
//           </p>
//         </div>
//       </section>

//       {/* BOTÓN CONTACTO */}
//       <section className="flex justify-center py-12">
//         <button
//           onClick={() => setShowContact(!showContact)}
//           className="text-3xl font-semibold text-violet-300 hover:text-white transition-all duration-300"
//         >
//           Contacto
//         </button>
//       </section>

//       {/* CONTACTO */}
//       {showContact && (
//         <section className="px-6 py-20 bg-gradient-to-tr from-violet-700 via-violet-800 to-black">
//           <div className="max-w-xl mx-auto text-center">
//             <h2 className="text-3xl font-bold mb-4">Contacto</h2>
//             <p className="mb-6 text-gray-200">
//               ¿Querés contactarme para un proyecto o colaboración?
//             </p>
//             <ContactForm />
//           </div>
//         </section>
//       )}

//       {/* FOOTER */}
//       <footer className="bg-black py-8 text-center text-gray-400 text-sm border-t border-violet-800">
//         <Footer />
//       </footer>

//       {/* BOTÓN "VOLVER ARRIBA" */}
//       {showScrollTop && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-6 right-6 bg-violet-600 text-white rounded-full p-3 shadow-lg hover:bg-violet-400 transition-all"
//         >
//           ↑
//         </button>
//       )}
//     </div>
//   );
// };

// export default App;


//opcion 4




import { useState, useEffect, useRef } from "react";
import NavBar from "./components/NavBar";
import PhotoCarousel from "./components/PhotoCarousel";
import ArtCarousel from "./components/ArtCarousel";
import ContactForm from "./components/ContactForm";
import ActorExperience from "./components/ActorExperience";
import Footer from "./components/Footer";

const App = () => {
  const [showContact, setShowContact] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleShowContact = () => {
    setShowContact(true);
    setTimeout(() => {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
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
        <p className="mt-4 text-gray-300 text-lg">Portfolio profesional y artístico</p>
      </section>

      
      {/* GALERÍA FOTOGRÁFICA */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16 bg-black">
        <PhotoCarousel />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-violet-300 mb-4">Galería Fotográfica</h2>
          <p className="text-gray-400">
            Fotografías seleccionadas de proyectos actorales y artísticos.
          </p>
        </div>
      </section>




      {/* OBRAS VISUALES */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16 items-center bg-gray-950/90">
        <div>
          <h2 className="text-3xl font-semibold text-violet-400 mb-4">Obras Visuales</h2>
          <p className="text-gray-300">
            Carrusel con obras visuales propias, estilo artístico contemporáneo y expresivo.
          </p>
        </div>
        <ArtCarousel />
      </section>

      
      {/* EXPERIENCIA SIN COVER */}
      <section className="transition-all duration-500 ease-in-out px-6 py-12 bg-black/80">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-violet-400 mb-6 text-center">
            Experiencia como Actor
          </h2>
          <ActorExperience />
        </div>
      </section>


      {/* BOTÓN CONTACTO */}
      <section className="flex justify-center py-12">
        <button
          onClick={handleShowContact}
          className="text-3xl font-semibold text-violet-300 hover:text-white transition-all duration-300"
        >
          Contacto
        </button>
      </section>

      {/* CONTACTO */}
      {showContact && (
        <section
    React      ref={contactRef}
          className="px-6 py-20 bg-gradient-to-tr from-violet-700 via-violet-800 to-black"
        >
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Contacto</h2>
            <p className="mb-6 text-gray-200">
              ¿Querés contactarme para un proyecto o colaboración?
            </p>
            <ContactForm />
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="bg-black py-8 text-center text-gray-400 text-sm border-t border-violet-800">
        <Footer />
      </footer>

      {/* BOTÓN "VOLVER ARRIBA" */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-violet-600 text-white rounded-full p-3 shadow-lg hover:bg-violet-400 transition-all"
        >
          ↑
        </button>
      )}
    </div>
  );
};
 export default App;