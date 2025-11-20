import React, { useState } from 'react';

interface PhotoGridProps {
  photos?: string[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ 
  photos = [
    'foto01.webp',
    'foto02.webp',
    'foto03.webp',
    'foto04.webp',
    'foto05.webp',
    'foto07.webp',
    'foto08.webp',
    'WhatsApp Image 2025-10-17 at 8.43.30 PM (1).jpeg',
    'WhatsApp Image 2025-10-17 at 8.43.30 PM.jpeg',
    'WhatsApp Image 2025-10-17 at 8.43.33 PM (1).jpeg',
    'WhatsApp Image 2025-10-17 at 8.43.33 PM.jpeg',
    'WhatsApp Image 2025-10-17 at 8.43.35 PM (1).jpeg',
    'WhatsApp Image 2025-10-17 at 8.43.35 PM (2).jpeg',
    'WhatsApp Image 2025-10-17 at 8.43.35 PM.jpeg',
    'WhatsApp Image 2025-10-17 at 8.43.36 PM (1).jpeg',
    'WhatsApp Image 2025-10-17 at 8.43.36 PM.jpeg',
    'WhatsApp Image 2025-10-17 at 8.43.37 PM (1).jpeg',
  ] 
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (photo: string, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'unset';
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % photos.length;
    setCurrentIndex(nextIndex);
    setSelectedPhoto(photos[nextIndex]);
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentIndex(prevIndex);
    setSelectedPhoto(photos[prevIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowRight') {
      nextPhoto(e as any);
    } else if (e.key === 'ArrowLeft') {
      prevPhoto(e as any);
    }
  };

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-violet-300 mb-6 text-center">
          Galería Completa
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div
              key={photo}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square bg-black"
              onClick={() => openModal(photo, index)}
            >
              <img
                src={`/photos/${photo}`}
                alt={`Foto ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                onError={() => console.error(`No se pudo cargar la imagen: ${photo}`)}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal/Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Botón cerrar */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-violet-400 transition-colors z-10 bg-black/50 rounded-full p-2"
            aria-label="Cerrar"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Botón anterior */}
          {photos.length > 1 && (
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-violet-400 transition-colors z-10 bg-black/50 rounded-full p-3"
              aria-label="Foto anterior"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Imagen ampliada */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/photos/${selectedPhoto}`}
              alt={`Foto ampliada ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Botón siguiente */}
          {photos.length > 1 && (
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-violet-400 transition-colors z-10 bg-black/50 rounded-full p-3"
              aria-label="Foto siguiente"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* Indicador de posición */}
          {photos.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
              {currentIndex + 1} / {photos.length}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PhotoGrid;


