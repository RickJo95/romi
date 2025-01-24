"use client";
import React, { useState, useEffect, JSX } from "react";
import {
  Heart,
  Star,
  Sparkles,
  Cat,
  Dog,
  Stethoscope,
  Timer,
  Trophy,
} from "lucide-react";
import ExplorationGame from "./components/ExplorationGame";
import { moodStates } from "./constants/moodStates";
import { MoodLevel } from "./types";

interface Achievement {
  id: string;
  title: string;
  description: string;
  condition: number;
  unlocked: boolean;
}

interface Patient {
  name: string;
  species: string;
  owner?: string;
  issue: string;
  mood: number;
  treatedBefore?: boolean;
}

interface Treatment {
  name: string;
  icon: JSX.Element;
  effect: string;
  moodBoost: number;
}

interface Room {
  title: string;
  patients?: Patient[];
  equipment?: string[];
  treatments?: Treatment[];
}

interface Rooms {
  [key: string]: Room;
}

const VetClinicGame: React.FC = () => {
  const [activeRoom, setActiveRoom] = useState<"waiting" | "exam">("waiting");
  const [messages, setMessages] = useState<string[]>([]);
  const [treatedPatients, setTreatedPatients] = useState<number>(0);
  const [activePatient, setActivePatient] = useState<Patient | null>(null);
  const [treatmentProgress, setTreatmentProgress] = useState<number>(0);
  const [showLoveNote, setShowLoveNote] = useState<boolean>(false);
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: "first-patient",
      title: "Primera patita",
      description: "Atendiste a tu primer paciente",
      condition: 1,
      unlocked: false,
    },
    {
      id: "caring-vet",
      title: "Veterinaria del ♥️",
      description: "5 animalitos felices",
      condition: 5,
      unlocked: false,
    },
    {
      id: "super-vet",
      title: "Super Dra. Romi",
      description: "10 pacientes atendidos",
      condition: 10,
      unlocked: false,
    },
  ]);

  const loveNotes = [
    "¡Eres la veterinaria más dulce y dedicada que conozco!",
    "Tu amor por los animales me enamora cada día más 😻",
    "Bluey tendría la mejor doctora del mundo contigo 🩺",
    "Eres mi Evangeline, mi luz en cada momento 🌟",
  ];

  const treatments: Treatment[] = [
    {
      name: "Revisión con amor",
      icon: <Heart className="text-pink-500" />,
      effect: "recibe mucho cariño",
      moodBoost: 20,
    },
    {
      name: "Mimos especiales",
      icon: <Star className="text-yellow-500" />,
      effect: "está muy feliz",
      moodBoost: 30,
    },
    {
      name: "Auscultación",
      icon: <Stethoscope className="text-blue-500" />,
      effect: "se siente muy tranquilo",
      moodBoost: 25,
    },
  ];

  const rooms: Rooms = {
    waiting: {
      title: "Sala de Espera",
      patients: [
        {
          name: "Bluey",
          species: "Perro",
          owner: "Disney",
          issue: "Alergia",
          mood: 50,
        },
        { name: "Shifu", species: "Gato", issue: "Castración", mood: 30 },
        { name: "Ami", species: "Gato", issue: "Coquito pelado", mood: 40 },
        { name: "Maya", species: "Gato", issue: "Energía explosiva", mood: 60 },
        { name: "Pucca", species: "Perro", issue: "Enfermita", mood: 20 },
        { name: "Tony", species: "Perro", issue: "Está panzón", mood: 45 },
      ],
    },
    exam: {
      title: "Consultorio de mi Evangeline",
      equipment: ["Estetoscopio", "Treats especiales", "Muchos mimos"],
      treatments: treatments,
    },
  };

  const [showExplorationGame, setShowExplorationGame] = useState(false);

  const handleExplorationComplete = (score: number) => {
    setShowExplorationGame(false);
    setTreatmentProgress((prev) => Math.min(prev + (score / 100) * 20, 100));
    addMessage(
      `¡${activePatient?.name} está muy feliz con la revisión! +${score} puntos de amor ❤️`
    );

    if (treatmentProgress + (score / 100) * 20 >= 100) {
      setTimeout(() => {
        setActiveRoom("waiting");
        setActivePatient(null);
      }, 1500);
    }
  };

  const checkAchievements = (totalTreated: number) => {
    achievements.forEach((achievement) => {
      if (!achievement.unlocked && totalTreated >= achievement.condition) {
        setAchievements((prev) =>
          prev.map((a) =>
            a.id === achievement.id ? { ...a, unlocked: true } : a
          )
        );
        addMessage(
          `🏆 ¡Logro desbloqueado: ${achievement.title}! ${achievement.description}`
        );
      }
    });
  };

  useEffect(() => {
    if (treatmentProgress >= 100) {
      setShowLoveNote(true);
      setTimeout(() => setShowLoveNote(false), 3000);
    }
  }, [treatmentProgress]);

  const addMessage = (msg: string): void => {
    setMessages((prev) => [...prev, msg]);
    if (messages.length > 5) {
      setTimeout(() => setMessages((prev) => prev.slice(1)), 3000);
    }
  };

  const handlePatientClick = (patient: Patient) => {
    setActivePatient(patient);
    setTreatmentProgress(0);
    addMessage(
      `¡${patient.name} está listo para ver a la doctora más hermosa del mundo! 💕`
    );
    setActiveRoom("exam");
  };

  const applyTreatment = (treatment: Treatment) => {
    if (!activePatient) return;

    setTreatmentProgress((prev) => Math.min(prev + 35, 100));
    const moodMessage = getMoodEmoji(activePatient.mood + treatment.moodBoost);
    addMessage(`${activePatient.name} ${treatment.effect} ${moodMessage}`);

    if (treatmentProgress + 35 >= 100) {
      completePatientTreatment();
    }
  };

  const completePatientTreatment = () => {
    const newTotal = treatedPatients + 1;
    setTreatedPatients(newTotal);
    checkAchievements(newTotal);

    // Solo mostrar el mensaje de amor si no está en un minijuego
    if (!showExplorationGame) {
      setShowLoveNote(true);
      setTimeout(() => setShowLoveNote(false), 3000);
    }

    setActiveRoom("waiting");
    setActivePatient(null);
  };

  const getMoodEmoji = (mood: number): string => {
    if (mood >= 80) return "😊";
    if (mood >= 60) return "🙂";
    if (mood >= 40) return "😐";
    if (mood >= 20) return "🙁";
    return "😢";
  };

  const [currentMood, setCurrentMood] = useState<MoodLevel>("neutral");
  const [showMoodMessage, setShowMoodMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleMoodChange = (newMood: MoodLevel) => {
    setCurrentMood(newMood);
    const randomMessage =
      moodStates[newMood].messages[
        Math.floor(Math.random() * moodStates[newMood].messages.length)
      ];
    setCurrentMessage(randomMessage);
    setShowMoodMessage(true);
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-b ${moodStates[currentMood].background} transition-colors duration-500 p-4`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/90 rounded-lg shadow-xl p-5 mb-4">
          <p className="text-center mb-4 text-gray-700">
            ¿Cómo te sientes hoy, mi corazón?
          </p>
          <div className="flex justify-center gap-1">
            <button
              onClick={() => handleMoodChange("sad")}
              className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 transition"
            >
              <span className="text-2xl">😔</span>
              <span className="text-sm">Triste</span>
            </button>
            <button
              onClick={() => handleMoodChange("neutral")}
              className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 transition"
            >
              <span className="text-2xl">😊</span>
              <span className="text-sm">Normal</span>
            </button>
            <button
              onClick={() => handleMoodChange("happy")}
              className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 transition"
            >
              <span className="text-2xl">🥰</span>
              <span className="text-sm">Feliz</span>
            </button>
          </div>
          {currentMessage && showMoodMessage && (
            <p className="mt-3 text-center text-base text-pink-600 font-medium animate-fade-in">
              {currentMessage}
            </p>
          )}
        </div>

        <div className="bg-white/90 rounded-lg shadow-xl p-6">
          <header className="text-center mb-6">
            <h1 className="text-2xl font-bold text-purple-800 mb-2">
              Clínica Veterinaria de Dra. Romi
            </h1>
            <div className="flex justify-center items-center gap-2">
              <Heart className="text-pink-500" />
              <span className="text-lg">
                Pacientes tratados por la mejor veterinaria del mundo:{" "}
                {treatedPatients}
              </span>
              <Heart className="text-pink-500" />
            </div>
            <div className="flex justify-center gap-2 mt-2">
              {achievements
                .filter((a) => a.unlocked)
                .map((achievement) => (
                  <Trophy
                    key={achievement.id}
                    className="text-yellow-500"
                    aria-label={achievement.title}
                  />
                ))}
            </div>
          </header>

          {showLoveNote && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-xl transform animate-bounce">
                <p className="text-xl text-pink-600 font-semibold">
                  {loveNotes[Math.floor(Math.random() * loveNotes.length)]}
                </p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Star className="text-yellow-500" />
                {rooms[activeRoom].title}
              </h2>

              {activeRoom === "waiting" && rooms.waiting.patients && (
                <div className="space-y-3">
                  {rooms.waiting.patients.map((patient, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer flex items-center gap-3"
                      onClick={() => handlePatientClick(patient)}
                    >
                      {patient.species === "Gato" ? (
                        <Cat className="text-gray-600" />
                      ) : (
                        <Dog className="text-gray-600" />
                      )}
                      <div className="flex-1">
                        <p className="font-medium">
                          {patient.name} - {patient.species}
                        </p>
                        <p className="text-sm text-gray-600">
                          Motivo: {patient.issue}
                        </p>
                      </div>
                      <span title="Estado de ánimo">
                        {getMoodEmoji(patient.mood)}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {activeRoom === "exam" && activePatient && (
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-medium mb-4 flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Sparkles className="text-purple-500" />
                        Tratamientos disponibles
                      </span>
                      <Timer className="text-blue-500" />
                    </h3>

                    <div className="mb-4 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-pink-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${treatmentProgress}%` }}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                      {treatments.map((treatment, idx) => (
                        <button
                          key={idx}
                          className="flex items-center gap-2 w-full p-2 bg-white rounded-lg hover:bg-pink-50 transition-colors"
                          onClick={() => applyTreatment(treatment)}
                        >
                          {treatment.icon}
                          <span>{treatment.name}</span>
                        </button>
                      ))}
                      <button
                        className="flex items-center gap-2 w-full p-2 mt-4 bg-pink-100 rounded-lg hover:bg-pink-200 transition-colors"
                        onClick={() => setShowExplorationGame(true)}
                      >
                        <Sparkles className="text-pink-500" />
                        <span>Revisión especial</span>
                      </button>

                      {showExplorationGame && activePatient && (
                        <ExplorationGame
                          onComplete={handleExplorationComplete}
                          patient={activePatient}
                        />
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Actualizaciones</h2>
              <div className="space-y-2">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className="p-2 bg-pink-50 rounded-lg animate-fade-in flex items-center gap-2"
                  >
                    <Sparkles className="text-pink-400" size={16} />
                    {msg}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VetClinicGame;
