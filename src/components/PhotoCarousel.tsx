import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../css/VideoCarousel.css';
import { PHOTOS } from '../constants/photos';

const PhotoCarousel: React.FC = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (_swiper: unknown, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', `${1 - progress}`);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-black rounded-2xl shadow-2xl overflow-hidden aspect-[3/4]">
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
        {PHOTOS.map((filename) => (
          <SwiperSlide key={filename} className="flex items-center justify-center">
            <img
              src={`/photos/${filename}`}
              alt={filename}
              className="w-full h-full object-contain bg-black"
              loading="lazy"
              onError={() => console.error(`No se pudo cargar la imagen: ${filename}`)}
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
