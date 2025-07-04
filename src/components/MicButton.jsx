import { useState } from 'react';
import { createRecognizer } from '../utils/speech';

export default function MicButton() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const handleListen = () => {
    const recognition = createRecognizer({
      onStart: () => setIsListening(true),
      onEnd: () => setIsListening(false),
      onResult: (text) => setTranscript(text),
    });

    if (!recognition) {
      alert('Speech Recognition not supported in this browser.');
      return;
    }

    recognition.start();
  };

  return (
    <div className="text-center space-y-4">
      <button
        onClick={handleListen}
        className={`px-6 py-3 rounded-full transition-colors duration-300 ${
          isListening ? 'bg-red-500' : 'bg-blue-600'
        } text-white text-lg font-semibold shadow-lg hover:opacity-90`}
      >
        {isListening ? 'Listening...' : '🎤 Start Speaking'}
      </button>
      {transcript && (
        <p className="text-gray-700 text-lg font-medium">📝 {transcript}</p>
      )}
    </div>
  );
}
