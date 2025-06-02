import { useState } from "react";
import ActorExperience from "./ActorExperience";
import ArtCarousel from "./ArtCarousel";
import PhotoCarousel from "./PhotoCarousel";
import ContactForm from "./ContactForm";

const SectionDisplay = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center py-12 space-y-12">
      
      {/* COVERS: Actor y Contacto */}
      {!activeSection && (
        <div className="flex flex-col space-y-6 w-full px-6">
          <button
            onClick={() => setActiveSection("actor")}
            className="text-5xl font-bold text-center text-violet-300 hover:text-violet-500 animate-pulse transition-all duration-300"
          >
            Experiencia como Actor
          </button>
          <button
            onClick={() => setActiveSection("contact")}
            className="text-5xl font-bold text-center text-violet-300 hover:text-violet-500 animate-pulse transition-all duration-300"
          >
            Contacto
          </button>
        </div>
      )}

      {/* Sección Experiencia como Actor */}
      {activeSection === "actor" && (
        <div className="w-full">
          <button
            onClick={() => setActiveSection(null)}
            className="text-sm text-violet-300 hover:text-violet-100 underline mb-4 ml-4"
          >
            ← Volver al menú principal
          </button>
          <section className="min-h-[80vh] flex items-center justify-center bg-black/80 text-white px-6 py-16">
            <div className="max-w-4xl text-center">
              <h2 className="text-3xl font-semibold mb-6 text-violet-400">Experiencia como Actor</h2>
              <ActorExperience />
            </div>
          </section>
        </div>
      )}

      {/* Sección Obras Visuales (SIEMPRE visible) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16 items-center bg-gray-950/90">
        <div className="text-white">
          <h2 className="text-3xl font-semibold text-violet-400 mb-4">Obras Visuales</h2>
          <p className="text-gray-300">
            Carrusel con obras visuales propias, estilo artístico contemporáneo y expresivo.
          </p>
        </div>
        <ArtCarousel />
      </section>

      {/* Sección Galería Fotográfica (SIEMPRE visible) */}
      <section className="relative px-6 py-16 bg-black">
        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6">
          <h2 className="text-3xl font-bold text-center text-violet-300 mb-6">Galería Fotográfica</h2>
          <PhotoCarousel />
        </div>
      </section>

      {/* Sección Contacto */}
      {activeSection === "contact" && (
        <div className="w-full">
          <button
            onClick={() => setActiveSection(null)}
            className="text-sm text-violet-300 hover:text-violet-100 underline mb-4 ml-4"
          >
            ← Volver al menú principal
          </button>
          <section className="px-6 py-20 bg-gradient-to-tr from-violet-700 via-violet-800 to-black text-white">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Contacto</h2>
              <p className="mb-6 text-gray-200">¿Querés contactarme para un proyecto o colaboración?</p>
              <ContactForm />
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default SectionDisplay;
