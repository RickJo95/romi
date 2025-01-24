export type MoodLevel = 'sad' | 'neutral' | 'happy';

export interface MoodState {
  level: MoodLevel;
  background: string;
  messages: string[];
}

export interface MoodSelectorProps {
  onMoodChange: (mood: MoodLevel) => void;
}

export interface MoodMessageProps {
  message: string;
}