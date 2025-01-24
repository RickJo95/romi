"use client";

import { motion } from "motion/react";
import Link from "next/link";

type Props = {
  onStart: () => void;
};

export default function StartScene({ onStart }: Props) {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-black overflow-hidden">
      <motion.div
        className="absolute w-10 h-10 text-white border-white !bg-white rounded-full shadow-lg fill-white stroke-white"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ top: "20%", left: "50%" }}
      />
      <div className="text-center flex items-center flex-col justify-center">
        <h1 className="text-5xl text-white font-bold mb-4">
          Bienvenida, mi Evangeline
        </h1>
        <p className="text-white text-lg mb-6">
          Prepárate para una aventura mágica hecha solo para ti ✨
        </p>
        <motion.button
          className="bg-indigo-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 focus:outline-none"
          onClick={onStart}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          Empezar aventura
        </motion.button>

        <Link href="/consultorio" className="mt-8 rounded-lg text-lg font-semibold bg-slate-700 text-white px-4 py-2 shadow-lg hover:scale-105 transition-all duration-200">...O puedes al consultorio</Link>
      </div>
    </div>
  );
}
