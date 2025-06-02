// src/components/ImageCarousel.tsx
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../css/VideoCarousel.css'; // el CSS del progreso circular

const PhotoCarousel: React.FC = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (_swiper: unknown, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', `${1 - progress}`);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  // Nombres de las imágenes en public/fotos
  const photos = ['foto01.jpg', 'foto02.jpg', 'foto03.jpg', 'foto04.jpg', 'foto05.jpg', 'foto06.jpg', 'foto07.jpg', 'foto08.jpg'];

  return (
    <div className="relative w-full h-[400px] md:h-[600px]">
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="w-full h-full"
      >
        {photos.map((filename) => (
          <SwiperSlide key={filename} className="flex items-center justify-center">
            <img
              src={`/public/photos/${filename}`}
              alt={filename}
              className="w-full h-full object-contain"
            />
          </SwiperSlide>
        ))}

        {/* Círculo de progreso */}
        <div className="autoplay-progress absolute bottom-4 right-4">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20" />
          </svg>
          <span ref={progressContent} className="text-white text-xs font-bold" />
        </div>
      </Swiper>
    </div>
  );
};

export default PhotoCarousel;
