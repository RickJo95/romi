"use client";

import { motion } from "motion/react";

type Props = {
  onNext: () => void;
};

export default function LibraryScene({ onNext }: Props) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-900 to-indigo-700">
      <h1 className="text-4xl text-white font-bold mb-6 text-center">
        El hurón te lleva a una biblioteca encantada 📚✨
      </h1>
      <p className="text-white text-lg text-center mb-6">
        Encuentras dos libros brillando en un estante mágico. ¿Cuál eliges?
      </p>
      <div className="flex gap-4">
        <motion.button
          className="bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-700 focus:outline-none"
          onClick={() =>
            alert(
              "El libro de Bluey muestra aventuras felices y coloridas. ¡Qué lindo! 🐾"
            )
          }
          whileHover={{ scale: 1.1 }}
        >
          Libro de Bluey
        </motion.button>
        <motion.button
          className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 focus:outline-none"
          onClick={() =>
            alert(
              "El libro de Dandadan revela una escena épica llena de acción. ¡Increíble! 💥"
            )
          }
          whileHover={{ scale: 1.1 }}
        >
          Libro de Dandadan
        </motion.button>
      </div>
      <motion.button
        className="mt-8 bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 focus:outline-none"
        onClick={onNext}
        whileHover={{ scale: 1.1 }}
      >
        Continuar la aventura
      </motion.button>
    </div>
  );
}
