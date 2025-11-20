import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../css/VideoCarousel.css'; // clase con animación de progreso
import { useAudioControls } from '../context/AudioControlContext';

const ArtCarousel: React.FC = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);
  const { pauseBackground, resumeBackground } = useAudioControls();

  const onAutoplayTimeLeft = (_s: unknown, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', `${1 - progress}`);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="relative w-full h-[400px] md:h-[600px]">
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{ delay: 70000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
          modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="w-full h-full"
      >
        {['video01.mp4', 'video02.mp4', 'video03.mp4', 'video05.mp4'].map((src) => (
          <SwiperSlide key={src}>
            <video
              className="w-full h-full object-cover"
              controls
              muted
              onPlay={pauseBackground}
              onPause={resumeBackground}
              onEnded={resumeBackground}
            >
              <source src={`/videos/${src}`} type="video/mp4" />
              
            </video>
          </SwiperSlide>
        ))}

        {/* Círculo de progreso */}
        <div className="autoplay-progress absolute bottom-4 right-4">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20" />
          </svg>
          <span
            ref={progressContent}
            className="text-white text-xs font-bold"
          ></span>
        </div>
      </Swiper>
    </div>
  );
};

export default ArtCarousel;
