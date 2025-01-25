"use client";

import { useState } from "react";
import { motion } from "motion/react";

export default function CinematicScene() {
  const [step, setStep] = useState(0);
  const [opacity, setOpacity] = useState(100);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const switchOpacity = () => {
    return opacity === 100 ? setOpacity(0) : setOpacity(100);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen min-w-screen bg-black">
      {step === 0 && (
        <motion.div
          className="absolute text-white text-2xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          onClick={handleNext}
        >
          ...
        </motion.div>
      )}

      {step === 1 && (
        <motion.div
          className="absolute text-white text-2xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          onClick={handleNext}
        >
          ¿Escuchas eso?
          <p className="text-xs mt-2">(Sube el volumen)</p>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <audio autoPlay loop>
            <source src="/tristesse.mp3" type="audio/mp3" />
          </audio>
          <motion.video
            src="/video_van_gogh.mp4"
            autoPlay
            controls
            muted
            loop
            className="w-full h-full object-contain blur-md"
            initial={{ filter: "blur(20px)" }}
            animate={{ filter: "blur(0px)" }}
            transition={{ duration: 5 }}
          />
          <motion.button
            className={`text-white font-bold bg-black/40 rounded fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-10 py-5 w-full h-full items-center content-center xl:max-w-md 2xl:max-w-2xl text-pretty leading-9 xl:leading-10  opacity-${opacity} transition-all duration-700`}
            onClick={switchOpacity}
            initial={{ filter: "blur(20px)" }}
            animate={{ filter: "blur(0px)" }}
            transition={{ duration: 5 }}
          >
            <p>
              Asi como Ray veía en su Evangeline una luz que lo guiaba en la
              oscuridad
            </p>
            <p>
              yo veo en cada una de estas estrellas una chispa de nuestro amor
              que ilumina mi camino.
            </p>
            <p>
              Y, aunque la ciencia nos pueda explicar la naturaleza de estas
              estrellas,
            </p>
            <p>
              la fuerza de nuestro amor es algo que va más allá de la
              comprensión humana,
            </p>
            <p>
              como el hechizo de la bruja en{" "}
              <i> &ldquo;La bella y la bestia&rdquo;.</i>
            </p>
            <p>
              Por eso, mi amor, cuando veas una noche tan hermosa como esta,
            </p>
            <p>recuerda que eres mi luz en la oscuridad, y que juntos</p>
            <p>brillaremos en el firmamento para siempre.</p>
            <p>Gracias por quedarte. Te amo, mi Evangeline.</p>
            <p className="text-[10px] mt-4">(toca la pantalla para que no te estorbe el texto.)</p>
          </motion.button>
        </motion.div>
      )}

      {step === 3 && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-indigo-900 via-purple-900 to-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <p className="text-4xl text-white text-center">
            &ldquo;Siempre serás mi Evangeline.&rdquo;
          </p>
        </motion.div>
      )}
    </div>
  );
}
