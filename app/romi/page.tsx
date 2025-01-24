"use client"

import React, { useState } from 'react';

type IconComponent = React.ComponentType<{ size?: number, className?: string }>;

const icons = {
  Cat: ({ size = 48, className }: { size?: number, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 5c.67 0 1.35.09 2 .26 2.5-2.1 4.44 0 5.5 1.74a7 7 0 0 1 1 3.34c0 3.55-2.45 5.4-4.5 5.4-1.63 0-3-1.2-3-2.75a3 3 0 0 0-3-3"/><path d="M12 5c-.67 0-1.35.09-2 .26-2.5-2.1-4.44 0-5.5 1.74a7 7 0 0 0-1 3.34c0 3.55 2.45 5.4 4.5 5.4 1.63 0 3-1.2 3-2.75a3 3 0 0 1 3-3"/><path d="M20 8.04c1.13-1.25 2-3 2-4.54a2.65 2.65 0 0 0-3-2.5c-1.5 0-2.5.75-3 1.75"/><path d="M4 16s0-2 1.5-3.5"/><path d="M20 16s0-2-1.5-3.5"/><path d="M10 16.5a3 3 0 1 0 4 0"/><path d="M12 16.5c-.74 0-1.5.5-1.5 1.5s.75 1 1.5 1 1.5-.25 1.5-1-.5-1-1.5-1z"/>
    </svg>
  ),
  Dog: ({ size = 48, className }: { size?: number, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M10 5.172C10 3.782 8.423 2.826 7.024 3.375 4.626 4.297 2 5.432 2 8.253c0 3.95 3.542 6.895 7 9.647"/><path d="M15 5.172c0-1.39 1.577-2.346 2.976-1.797 2.398.922 5 2.057 5 4.878 0 3.95-3.542 6.895-7 9.647"/><path d="M12 22v-9"/><path d="M12 15c1.258 1.285 2.685 2.526 4.243 3.757"/><path d="M12 15c-1.258 1.285-2.685 2.526-4.243 3.757"/>
    </svg>
  ),
  Heart: ({ size = 48, className }: { size?: number, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    </svg>
  ),
  Star: ({ size = 48, className }: { size?: number, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  Film: ({ size = 48, className }: { size?: number, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="15" x="2" y="4.5" rx="2"/><path d="M2 8h20"/><path d="M6 8v5"/><path d="M10 8v5"/><path d="M14 8v5"/><path d="M18 8v5"/><path d="M2 13h20"/>
    </svg>
  ),
  PawPrint: ({ size = 48, className }: { size?: number, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14 12c-1.5-3-3-6-4.5-8 1.5 2 4 3.5 6 3.5s4.5-1.5 4-4c-2 1.5-3 1.5-4.5 1s-3-2.5-3-4c0 2-1 3.5-3 4.5s-4.5-1-5.5-3c-.5 4 2 7.5 4.5 8"/>
      <path d="M10 12c-.5-3-3-4.5-6-4.5a2 2 0 0 0-2 2c0 1.5 0 3.5 2.5 4.5"/>
    </svg>
  ),
  Syringe: ({ size = 48, className }: { size?: number, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m18 2 4 4"/><path d="m17 7 3 3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.5 0l-1.4-1.4c-1-1-1-2.5 0-3.5L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/>
    </svg>
  )
};

type Theme = 'animal' | 'professional' | 'hobby' | 'romantic';

interface QuizOption {
  text: string;
  icon: IconComponent;
  theme: Theme;
}

interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

const questions: QuizQuestion[] = [
  {
    question: "¿Qué de todo esto le da más felicidad a Romi?",
    options: [
      { text: "Un video tierno de un animal", icon: icons.Cat, theme: "animal" },
      { text: "Ayudar a recuperarse a una mascota", icon: icons.Syringe, theme: "professional" },
      { text: "Ver un anime juntos", icon: icons.Film, theme: "hobby" },
      { text: "Acurrucarse bajo las estrellas", icon: icons.Star, theme: "romantic" }
    ]
  },
  {
    question: "¿Cuál es el día de ensueño de Romi?",
    options: [
      { text: "Explorar una nueva Clínica Veterinaria", icon: icons.PawPrint, theme: "professional" },
      { text: "Pasar el día viendo series anime", icon: icons.Film, theme: "hobby" },
      { text: "Una cita sorpresa con momentos inesperados", icon: icons.Heart, theme: "romantic" },
      { text: "Jugar con muchos animales", icon: icons.Dog, theme: "animal" }
    ]
  }
];

const LoveLanguageQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [themeScores, setThemeScores] = useState<Record<Theme, number>>({
    animal: 0,
    professional: 0,
    hobby: 0,
    romantic: 0
  });
  const [quizComplete, setQuizComplete] = useState<boolean>(false);
  const [dominantTheme, setDominantTheme] = useState<Theme | null>(null);

  const handleSelection = (selectedTheme: Theme): void => {
    const newThemeScores = {
      ...themeScores,
      [selectedTheme]: themeScores[selectedTheme] + 1
    };
    setThemeScores(newThemeScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const mostLikedTheme = (Object.keys(newThemeScores) as Theme[]).reduce((a, b) => 
        newThemeScores[a] > newThemeScores[b] ? a : b
      );
      setDominantTheme(mostLikedTheme);
      setQuizComplete(true);
    }
  };

  const renderQuizContent = () => {
    if (quizComplete && dominantTheme) {
      return (
        <div className="p-6 rounded-lg text-center bg-pink-100">
          <icons.Heart size={64} className="mx-auto mb-4 text-red-500" />
          <h2 className="text-2xl font-bold mb-4">Mi Evangeline ❤️</h2>
          <p className="text-lg">
            {dominantTheme === 'animal' && "Tu corazón late por compasión y cuidado."}
            {dominantTheme === 'professional' && "Tu dedicación transforma vidas, paciente por paciente."}
            {dominantTheme === 'hobby' && "Tus pasiones son portales para mundos de maravillas infinitas."}
            {dominantTheme === 'romantic' && "Tu amor es una constelación; vasta y deja sin aliento."}
          </p>
          <p className="mt-4 text-sm italic">
            ¿Cómo te explico que el amor de mi vida es alguien que conocí el 10 de mayo del 2022?
          </p>
        </div>
      );
    }

    const currentQuizQuestion = questions[currentQuestion];

    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">{currentQuizQuestion.question}</h2>
        <div className="grid grid-cols-2 gap-4">
          {currentQuizQuestion.options.map((option, index) => (
            <button 
              key={index} 
              onClick={() => handleSelection(option.theme)}
              className="p-4 border rounded-lg hover:bg-blue-50 transition flex flex-col items-center"
            >
              <option.icon className="mb-2" />
              <span>{option.text}</span>
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-purple-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg">
        {renderQuizContent()}
      </div>
    </div>
  );
};

export default LoveLanguageQuiz;