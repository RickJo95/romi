"use client";

import { motion } from "motion/react";

type Props = {
  onNext: () => void;
};

export default function RiddleScene({ onNext }: Props) {
  const handleAnswer = (correct: boolean) => {
    if (correct) {
      alert("¡Correcto! Has demostrado ser digna de esta aventura. 🌟");
    } else {
      alert("¡Oh no! Esa no era la respuesta, pero puedes intentarlo de nuevo. 🌀");
    }
    onNext();
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-black">
      <h1 className="text-4xl text-white font-bold mb-6 text-center">
        La sala de los acertijos mágicos ✨
      </h1>
      <p className="text-white text-lg text-center mb-6">
        Una voz mística dice: &ldquo;Soy algo que puedes romper sin tocar. ¿Qué soy?&rdquo;
      </p>
      <div className="flex gap-4">
        <motion.button
          className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 focus:outline-none"
          onClick={() => handleAnswer(false)}
          whileHover={{ scale: 1.1 }}
        >
          Una piedra
        </motion.button>
        <motion.button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 focus:outline-none"
          onClick={() => handleAnswer(true)}
          whileHover={{ scale: 1.1 }}
        >
          Una promesa
        </motion.button>
      </div>
    </div>
  );
}
