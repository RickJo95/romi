"use client";
import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";

interface ExplorationGameProps {
  onComplete: (score: number) => void;
  patient: {
    name: string;
    species: string;
  };
}

interface HotSpot {
  id: string;
  x: number;
  y: number;
  found: boolean;
  message: string;
  hint: string;
}

const getRandomPosition = (section: "head" | "body" | "tail") => {
  const sections = {
    head: { x: [30, 70], y: [20, 35] },
    body: { x: [25, 75], y: [36, 65] },
    tail: { x: [35, 65], y: [66, 80] },
  };

  // const sections = {
  //     head: { x: [40, 60], y: [30, 45] },
  //     body: { x: [35, 65], y: [46, 65] },
  //     tail: { x: [65, 75], y: [45, 55] }
  //   };

  return {
    x:
      Math.floor(
        Math.random() * (sections[section].x[1] - sections[section].x[0])
      ) + sections[section].x[0],
    y:
      Math.floor(
        Math.random() * (sections[section].y[1] - sections[section].y[0])
      ) + sections[section].y[0],
  };
};

const generateHotspots = (species: string, name: string) => {
  const headPos = getRandomPosition("head");
  const bodyPos = getRandomPosition("body");
  const tailPos = getRandomPosition("tail");

  return species === "Gato"
    ? [
        {
          id: "head",
          x: headPos.x,
          y: headPos.y,
          found: false,
          message: `¡${name} ronronea con mucho cariño!`,
          hint: "Cerca de las orejitas",
        },
        {
          id: "body",
          x: bodyPos.x,
          y: bodyPos.y,
          found: false,
          message: `¡La pancita de ${name} necesita más mimos!`,
          hint: "En el cuerpecito suave",
        },
        {
          id: "tail",
          x: tailPos.x,
          y: tailPos.y,
          found: false,
          message: `¡${name} te muerde por agarrarle la cola!`,
          hint: "Cerca de la colita",
        },
      ]
    : [
        {
          id: "head",
          x: headPos.x,
          y: headPos.y,
          found: false,
          message: `¡${name} te lame con mucho cariño!`,
          hint: "Cerca de las orejitas",
        },
        {
          id: "body",
          x: bodyPos.x,
          y: bodyPos.y,
          found: false,
          message: `¡${name} agita la pata por las cosquillas!`,
          hint: "En el cuerpecito suave",
        },
        {
          id: "tail",
          x: tailPos.x,
          y: tailPos.y,
          found: false,
          message: `¡${name} mueve su cola feliz!`,
          hint: "Cerca de la colita",
        },
      ];
};

// Siluetas simplificadas pero reconocibles
const CatSilhouette = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    {/* Cabeza */}
    <path
      d="M45 50 
           C35 50, 25 47.5, 20 40
           C15 32.5, 15 25, 20 20
           L15 10
           C13.75 5, 17.5 2.5, 21.25 5
           L25 10
           C30 5, 40 5, 45 7.5
           C50 5, 60 5, 65 10
           L68.75 5
           C72.5 2.5, 76.25 5, 75 10
           L70 20
           C75 25, 75 32.5, 70 40
           C65 47.5, 55 50, 45 50"
      fill="#D1D5DB"
    />

    {/* Cuerpo sentado */}
    <path
      d="M45 50
           L35 70
           C25 70, 20 65, 20 60
           L20 55
           C20 50, 25 47.5, 30 47.5
           L60 47.5
           C65 47.5, 70 50, 70 55
           L70 60
           C70 65, 65 70, 55 70
           L45 50"
      fill="#D1D5DB"
    />

    {/* Pata delantera */}
    <path
      d="M30 47.5
           L25 60
           C22.5 62.5, 22.5 65, 25 67.5
           L30 67.5
           L35 60
           Z"
      fill="#D1D5DB"
    />

    {/* Orejas */}
    <path d="M25 10 L18.75 1.25 L28.75 7.5 Z" fill="#D1D5DB" />
    <path d="M65 10 L71.25 1.25 L61.25 7.5 Z" fill="#D1D5DB" />

    {/* Cola */}
    <path
      d="M70 60
           Q77.5 55, 80 47.5
           T82.5 37.5
           Q83.75 32.5, 81.25 30"
      fill="none"
      stroke="#D1D5DB"
      stroke-width="4"
      stroke-linecap="round"
    />

    {/* Ojos */}
    <ellipse cx="32.5" cy="17.5" rx="3.75" ry="5" fill="#9CA3AF" />
    <ellipse cx="57.5" cy="17.5" rx="3.75" ry="5" fill="#9CA3AF" />

    {/* Nariz */}
    <path d="M43.75 23.75 L46.25 23.75 L45 25 Z" fill="#9CA3AF" />

    {/* Bigotes */}
    <g stroke="#9CA3AF" stroke-width="0.5">
      <line x1="35" y1="23.75" x2="25" y2="22.5" />
      <line x1="35" y1="24.5" x2="25" y2="24.5" />
      <line x1="35" y1="25.25" x2="25" y2="26.5" />

      <line x1="55" y1="23.75" x2="65" y2="22.5" />
      <line x1="55" y1="24.5" x2="65" y2="24.5" />
      <line x1="55" y1="25.25" x2="65" y2="26.5" />
    </g>
  </svg>
);
const DogSilhouette = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    {/* Cabeza con hocico más largo */}
    <path
      d="M45 45
           C35 45, 28 40, 25 35
           L20 25
           C18 20, 15 15, 20 12
           L25 15
           C28 12, 35 10, 45 10
           C55 10, 62 12, 65 15
           L70 12
           C75 15, 72 20, 70 25
           L65 35
           C62 40, 55 45, 45 45
           
           L45 30
           C40 30, 35 32, 32 35
           C30 38, 30 42, 32 45
           C35 48, 40 50, 45 50
           C50 50, 55 48, 58 45
           C60 42, 60 38, 58 35
           C55 32, 50 30, 45 30"
      fill="#D1D5DB"
    />

    {/* Orejas más naturales */}
    <path
      d="M28 15
           L20 5
           C18 0, 25 0, 28 5
           Z"
      fill="#D1D5DB"
    />
    <path
      d="M62 15
           L70 5
           C72 0, 65 0, 62 5
           Z"
      fill="#D1D5DB"
    />

    {/* Cuerpo */}
    <path
      d="M45 45
           L35 75
           C25 75, 20 70, 20 65
           L20 55
           C20 50, 25 47.5, 30 47.5
           L60 47.5
           C65 47.5, 70 50, 70 55
           L70 65
           C70 70, 65 75, 55 75
           L45 45"
      fill="#D1D5DB"
    />

    {/* Pata delantera */}
    <path
      d="M30 47.5
           L25 65
           C22.5 67.5, 22.5 70, 25 72.5
           L30 72.5
           L35 65
           Z"
      fill="#D1D5DB"
    />

    {/* Cola */}
    <path
      d="M70 65
           Q75 60, 78 55
           T80 45"
      fill="none"
      stroke="#D1D5DB"
      stroke-width="5"
      stroke-linecap="round"
    />

    {/* Ojos */}
    <ellipse cx="35" cy="25" rx="2.5" ry="3" fill="#9CA3AF" />
    <ellipse cx="55" cy="25" rx="2.5" ry="3" fill="#9CA3AF" />

    {/* Nariz */}
    <circle cx="45" cy="42" r="3" fill="#9CA3AF" />
  </svg>
);

const ExplorationGame = ({ onComplete, patient }: ExplorationGameProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hotspots, setHotspots] = useState<HotSpot[]>(() =>
    generateHotspots(patient.species, patient.name)
  );

  const [score, setScore] = useState(0);
  const [activeSpot, setActiveSpot] = useState<string | null>(null);
  const [showHints, setShowHints] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const gameArea = document.querySelector(".game-area");
      if (gameArea) {
        const bounds = gameArea.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - bounds.left,
          y: e.clientY - bounds.top,
        });
      }
    };

    const gameArea = document.querySelector(".game-area");
    if (gameArea) {
      gameArea.addEventListener("mousemove", (e) =>
        handleMouseMove(e as MouseEvent)
      );
      return () => {
        gameArea.removeEventListener("mousemove", (e) =>
          handleMouseMove(e as MouseEvent)
        );
      };
    }
  }, []);

  const handleSpotClick = (spot: HotSpot) => {
    if (!spot.found) {
      const newSpots = hotspots.map((s) =>
        s.id === spot.id ? { ...s, found: true } : s
      );
      setHotspots(newSpots);
      setScore((prev) => prev + 100);
      setActiveSpot(spot.id);

      setTimeout(() => {
        setActiveSpot(null);
        if (newSpots.every((s) => s.found)) {
          onComplete(score + 100);
        }
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full">
        <h3 className="text-2xl font-bold mb-6 text-center">
          Revisión Especial para {patient.name}
        </h3>

        <div className="text-center mb-4">
          <p className="text-xl font-semibold">Puntos de amor: {score}</p>
          <button
            className="text-sm text-pink-600 underline mt-2"
            onClick={() => setShowHints(!showHints)}
          >
            {showHints ? "Ocultar pistas" : "Mostrar pistas"}
          </button>
        </div>

        <div className="relative w-full h-96 bg-blue-50 rounded-lg overflow-hidden game-area">
          {patient.species === "Gato" ? <CatSilhouette /> : <DogSilhouette />}

          {hotspots.map((spot) => (
            <div
              key={spot.id}
              onClick={() => handleSpotClick(spot)}
              className={`absolute w-12 h-12 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer
                ${spot.found ? "opacity-100" : "opacity-0 hover:opacity-30"}
                transition-all duration-300`}
              style={{
                left: `${spot.x}%`,
                top: `${spot.y}%`,
              }}
            >
              <div
                className={`
                w-full h-full rounded-full 
                ${activeSpot === spot.id ? "animate-ping" : ""}
                ${spot.found ? "bg-sky-500" : "bg-yellow-300"}
              `}
              >
                {spot.found && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap z-50">
                    <div className="bg-white px-3 py-1 rounded-full shadow-lg text-sm">
                      {spot.message}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          <div
            className="w-8 h-8 absolute rounded-full border-2 border-pink-500 pointer-events-none"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transform: "translate(-50%, -50%)",
              transition: "all 0.1s ease-out",
            }}
          >
            <Heart className="text-pink-500 w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>

        {showHints && (
          <div className="mt-4 p-4 bg-pink-50 rounded-lg">
            <p className="font-medium mb-2">Pistas:</p>
            <ul className="space-y-1">
              {hotspots
                .filter((spot) => !spot.found)
                .map((spot) => (
                  <li key={spot.id} className="text-sm text-gray-600">
                    • {spot.hint}
                  </li>
                ))}
            </ul>
          </div>
        )}

        <div className="mt-6 text-center">
          <p className="text-pink-600">
            {hotspots.filter((s) => s.found).length} / {hotspots.length} zonas
            encontradas
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExplorationGame;
