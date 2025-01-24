import { MoodSelectorProps } from '../types';

export const MoodSelector = ({ onMoodChange }: MoodSelectorProps) => (
  <div className="absolute top-4 right-4 flex gap-2">
    <button 
      onClick={() => onMoodChange('sad')} 
      className="p-2 hover:scale-110 transition-transform"
      aria-label="Mood sad"
    >
      😔
    </button>
    <button 
      onClick={() => onMoodChange('neutral')} 
      className="p-2 hover:scale-110 transition-transform"
      aria-label="Mood neutral"
    >
      😊
    </button>
    <button 
      onClick={() => onMoodChange('happy')} 
      className="p-2 hover:scale-110 transition-transform"
      aria-label="Mood happy"
    >
      🥰
    </button>
  </div>
);