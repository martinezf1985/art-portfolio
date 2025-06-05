// src/components/SectionDisplay.tsx
import React from "react"; // <-- Se agrega esta línea
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SectionDisplayProps {
  items: Array<{ title: string; description: string }>;
}

const SectionDisplay: React.FC<SectionDisplayProps> = ({ items }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        spaceBetween={20}
        centeredSlides
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center p-4">
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-center">{item.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SectionDisplay;
