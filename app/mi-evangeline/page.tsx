"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

type Star = {
    top: string;
    left: string;
  };

export default function Home() {
  const [startAdventure, setStartAdventure] = useState(false);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generar las posiciones de las estrellas una vez en el cliente
    const generatedStars = [...Array(20)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setStars(generatedStars);
  }, []);

  const handleStart = () => {
    setStartAdventure(true);
  };

  if (startAdventure) {
    return (
      <motion.div
        className="flex items-center justify-center min-h-screen bg-gradient-to-b from-indigo-900 to-black"
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-white text-4xl text-center px-4">
          ¡La aventura comienza pronto! 🌟
        </h1>
      </motion.div>
    );
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-black overflow-hidden">
      <motion.div
        className="absolute w-10 h-10 bg-white rounded-full shadow-lg"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ top: "20%", left: "50%" }}
      />
      <div className="text-center">
        <h1 className="text-5xl text-white font-bold mb-4">
          Bienvenida, Romi, mi Evangeline
        </h1>
        <p className="text-white text-lg mb-6">
          Prepárate para una aventura mágica hecha solo para ti ✨
        </p>
        <motion.button
          className="bg-indigo-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 focus:outline-none"
          onClick={handleStart}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          Empezar
        </motion.button>
      </div>
      {/* Estrellas animadas */}
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{ top: star.top, left: star.left }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}
