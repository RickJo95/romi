"use client";

import { motion } from "motion/react";

type Props = {
  onNext: () => void;
};


export default function CowScene({ onNext }: Props) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-700 to-blue-800">
      <h1 className="text-4xl text-white font-bold mb-6 text-center">
        Has encontrado una vaca mágica 🐄✨
      </h1>
      <div className="flex gap-4">
        <motion.button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 focus:outline-none"
          onClick={() => {
            alert("La vaca te regala un trébol de la suerte 🍀");
            onNext();
          }}
          whileHover={{ scale: 1.1 }}
        >
          Acariciar
        </motion.button>
        <motion.button
          className="bg-purple-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 focus:outline-none"
          onClick={() => {
            alert("¡Un hurón bailarín aparece con un sombrero de copa! 🎩");
            onNext();
          }}
          whileHover={{ scale: 1.1 }}
        >
          Preguntar por un hurón bailarín
        </motion.button>
      </div>
    </div>
  );
}
