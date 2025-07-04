export function createRecognizer({ lang = 'en-US', onResult, onStart, onEnd }) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return null;

  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = lang;

  if (onResult) {
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results).map(r => r[0].transcript).join('');
      onResult(transcript);
    };
  }

  if (onStart) recognition.onstart = onStart;
  if (onEnd) recognition.onend = onEnd;

  return recognition;
}
