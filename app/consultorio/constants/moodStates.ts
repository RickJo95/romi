import { MoodLevel, MoodState } from "../types";

export const moodStates: Record<MoodLevel, MoodState> = {
    sad: {
        level: 'sad',
        background: 'from-indigo-900 to-purple-900',
      messages: [
        "Mi Evangeline, incluso en Primal hay momentos difíciles, pero siempre surge el amanecer 🌅",
        "Como Okarun en Dandadan, la fuerza viene de adentro 💫",
        "Bluey siempre dice que los abrazos son mágicos, ven aquí 🤗",
        "Cada página de Dandadan nos recuerda que la fuerza viene de adentro 🌟",
        "Como en Primal, los momentos difíciles forjan el carácter 💪",
        "Los hurones siempre saben cómo hacernos sonreír 🦊",
        "Las vacas más lindas te mandan muchos mimos 🐮",
        "Tus gatitos te extrañan y quieren verte feliz 😺",
        "Como dice Bluey: 'Los abrazos de papá todo lo curan' 🤗",
        "Eres más fuerte que cualquier desafío, mi Evangeline 💫"
      ]
    },
    neutral: {
        level: 'neutral',
        background: 'from-blue-100 to-purple-100',
      messages: [
        "¿Sabes? Tu sonrisa ilumina más que todas las estrellas 🌟",
        "Eres la mejor veterinaria del multiverso de Dandadan 🐾",
        "Como diría Chilli: '¡Este show debe continuar!' 🎭",
        "Tus pacientes peludos te adoran 💕",
        "¡Los hurones están listos para hacerte reír! 🦊",
        "Las vacas más lindas te mandan saludos 🐮",
        "Tus habilidades como veterinaria son increíbles 👩‍⚕️",
        "¡El equipo Bluey está orgulloso de ti! 💙",
        "¡Eres más valiente que Okarun enfrentando aliens! 💫",
        "Tu corazón es tan grande como el de Sprig 💚"
      ]
    },
    happy: {
        level: 'happy',
        background: 'from-pink-100 to-yellow-100',
      messages: [
        "¡Tu alegría es más poderosa que todos los aliens de Dandadan juntos! ✨",
        "¡Sprig estaría saltando de felicidad contigo! 🐸",
        "¡Eres más radiante que un episodio completo de Bluey! 🌈",
        "¡Los hurones están bailando de felicidad! 🦊",
        "¡Las vacas más lindas celebran tu sonrisa! 🐮",
        "¡Tus gatitos están ronroneando de alegría! 😺",
        "¡Tu felicidad es contagiosa como la risa de Bluey! 💙",
        "¡Brillás más que todas las aventuras de Dandadan! 🌟",
        "¡Tu energía positiva es más fuerte que Fang! 💪",
        "¡Eres pura luz, mi Evangeline! ✨"
      ]
    }
  };