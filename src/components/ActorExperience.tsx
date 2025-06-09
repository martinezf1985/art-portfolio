import React from "react";
import { useInView } from "react-intersection-observer";

interface ExperienceItem {
  id: number;
  date: string;
  title: string;
  detail: string;
}

const experienceData: ExperienceItem[] = [
  { id: 1, date: "MARZO 13th, 2025", title: "ACTUANDO", detail: "Formación intensiva en actuación para cine, teatro y TV, con enfoque en técnica interpretativa y comprensión del funcionamiento profesional del medio." },
  { id: 2, date: "MAYO 7th, 2024", title: "LOS VENEZZIA", detail: "Participación actoral en largometraje interpretando a un agente encubierto, destacando rol breve pero de impacto dentro del relato." },
  { id: 3, date: "MAYO 2nd, 2023", title: "ACTUANDO", detail: "Formación intensiva en actuación para cine, teatro y TV, con enfoque en técnica interpretativa y comprensión del funcionamiento profesional del medio." },
  { id: 4, date: "MARZO 7th, 2022", title: "GRUPO TEATRAL DE CÉSAR BIANCO", detail: "Entrenamiento actoral en grupo teatral avanzado, trabajando escenas reales de películas dramáticas con enfoque en la interpretación emocional." },
  { id: 5, date: "FEBRERO 1st, 2022", title: "ACTUANDO", detail: "Entrenamiento actoral en grupo teatral avanzado, trabajando escenas reales de películas dramáticas con enfoque en la interpretación emocional." },
  { id: 6, date: "FEBRERO 1st, 2018", title: "CONDUCCIÓN DE EVENTOS", detail: "Conducción de eventos institucionales del GCBA para la Subsecretaría PyME, generando un ambiente participativo en jornadas como la Semana PyME, BA Impulsa y Escuela de Negocios." },
  { id: 7, date: "FEBRERO 1st, 2018", title: "UNA GRAN TRAGEDIA ARGENTINA", detail: "Actor de reparto en obra de comedia contemporánea, explorando el humor desde una gran tragedia argentina con mirada crítica y satírica." },
  { id: 8, date: "FEBRERO 9th, 2017", title: "CHAMUSQUINA Y UNA GRAN TRAGEDIA ARGENTINA", detail: "Actor de reparto en teatro del absurdo, participando en adaptaciones como La Cantante Calva de Ionesco y en comedias satíricas como Una Gran Tragedia Argentina, con enfoque en crítica social desde lo absurdo y lo cómico." },
  { id: 9, date: "FEBRERO 19th, 2016", title: "CHAMUSQUINA Y UNA GRAN TRAGEDIA ARGENTINA", detail: "Actor de reparto en teatro del absurdo, participando en adaptaciones como La Cantante Calva de Ionesco y en comedias satíricas como Una Gran Tragedia Argentina, con enfoque en crítica social desde lo absurdo y lo cómico." },
  { id: 10, date: "ENERO 7th, 2015", title: "TADRON ARMENIO", detail: "Actuación en grupo teatral avanzado, interpretando escenas guionadas con coordinación escénica, manejo de tiempos dramáticos y desarrollo integral de la puesta en escena." },
  { id: 11, date: "MARZO 2nd, 2013", title: "TEATRO EL DUENDE (AGUSTÍN ALEZZO) - NIVEL 3", detail: "Formación en teatro avanzado nivel 3, interpretación de escenas cinematográficas con guión, trabajo de coordinación escénica y presentación final en muestra anual." },
  { id: 12, date: "MARZO 2nd, 2012", title: "TEATRO EL DUENDE (AGUSTÍN ALEZZO) - NIVEL 2", detail: "Formación en teatro avanzado nivel 2, interpretación de escenas cinematográficas con guión, trabajo de coordinación escénica y presentación final en muestra anual." },
  { id: 13, date: "MARZO 2nd, 2011", title: "TEATRO EL DUENDE (AGUSTÍN ALEZZO) - NIVEL 1", detail: "Formación en teatro avanzado nivel 1, interpretación de escenas cinematográficas con guión, trabajo de coordinación escénica y presentación final en muestra anual." },
  { id: 14, date: "FEBRERO 2nd, 2010", title: "ACTUACIÓN FRENTE A CÁMARA", detail: "Actuación frente a cámara, interpretación de escenas con guión para TV, enfocada en lenguaje visual y tiempos técnicos de rodaje." },
  { id: 15, date: "FEBRERO 10th, 2009", title: "TEATRO NIVEL INTERMEDIO (CENTRO CULTURAL ROJAS)", detail: "Teatro nivel intermedio, exploración de la expresión corporal y vocal, con énfasis en drama y comedia para desarrollo actoral integral." },
  { id: 16, date: "MARZO 5th, 2007", title: "TEATRO NIVEL INICIAL (CENTRO CULTURAL ROJAS)", detail: "Teatro nivel inicial, introducción a la expresión corporal y vocal, enfocándose en drama y comedia para el desarrollo básico de habilidades actorales." },
  { id: 17, date: "ENERO 5th, 2005", title: "PROGRAMA DE RADIO “NO PUEDO PARAR!! 93.7”", detail: "Programa oficial de radio de la discoteca Soul Train (San Martín), desempeñándome como columnista y realizando doblaje de voces cómicas en sketches narrados por radio, combinando humor y creatividad sonora." },
];

const TimelineItem: React.FC<{ item: ExperienceItem; inverted: boolean }> = ({ item, inverted }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`relative pl-12 mb-10 transition-all duration-700 ease-out ${
        inView
          ? "opacity-100 translate-x-0"
          : inverted
          ? "opacity-0 -translate-x-[50px]"
          : "opacity-0 translate-x-[50px]"
      }`}
    >
      {/* Línea y círculo */}
      <div className="absolute left-0 top-0 h-full flex flex-col items-center">
        <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
        <div className="flex-1 w-px bg-gray-700"></div>
      </div>
      <div className="bg-gray-900/50 rounded-xl p-6">
        <span className="text-sm text-gray-500">{item.date}</span>
        <h3 className="text-xl font-semibold text-violet-300 mt-1">{item.title}</h3>
        <p className="text-gray-300 mt-2 leading-relaxed whitespace-pre-wrap">{item.detail}</p>
      </div>
    </div>
  );
};

const ActorExperience: React.FC = () => {
  return (
    <div className="relative max-w-3xl mx-auto">
      {experienceData.map((item: ExperienceItem, idx: number) => (
        <TimelineItem key={item.id} item={item} inverted={idx % 2 === 0} />
      ))}
    </div>
  );
};

export default ActorExperience;
