import { useState } from 'react';

export default function MicButton() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const handleListen = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Speech Recognition not supported in this browser.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event) => {
      const text = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join('');
      setTranscript(text);
    };

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
