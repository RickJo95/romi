"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function NextScene() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-teal-600 to-indigo-800">
      <h1 className="text-4xl text-white font-bold mb-6 text-center">
        ¡Tu aventura continúa! 🌟
      </h1>
      <p className="text-white text-lg text-center mb-6">
        Lo que viene es aún más emocionante. Prepárate para lo inesperado.
      </p>
      <motion.button
        className="bg-pink-500 text-white px-4 py-1 rounded-lg text-lg font-semibold hover:bg-pink-700 focus:outline-none"
        onClick={() => alert("Siguiente capítulo en desarrollo... ¡Quédate atenta!")}
        whileHover={{ scale: 1.1 }}
      >
        Continuar
      </motion.button>
      <div className="mt-5 flex gap-6">
      <Link className="dark:text-gray-300 px-3 py-1 rounded-md bg-emerald-700 text-white hover:bg-emerald-600 shadow hover:shadow-lg font-semibold" href="/">Volver al inicio</Link>
      <Link className="dark:text-gray-300 px-3 py-1 rounded-md bg-indigo-700 text-white hover:bg-indigo-600 shadow hover:shadow-lg font-semibold" href="/consultorio">Ir al consultorio</Link>
      </div>
    </div>
  );
}
