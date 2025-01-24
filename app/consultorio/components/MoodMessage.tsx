import { MoodMessageProps } from '../types';

export const MoodMessage = ({ message }: MoodMessageProps) => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-xl animate-bounce max-w-md">
      <p className="text-xl text-pink-600 font-semibold text-center">
        {message}
      </p>
    </div>
  </div>
);