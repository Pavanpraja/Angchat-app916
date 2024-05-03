// SpeechInput.js
import { useSpeechRecognition } from 'react-speech-recognition';

const SpeechInput = () => {
  const { transcript, resetTranscript, listen, listening } = useSpeechRecognition();

  const handleListen = () => {
    if (!listening) {
      resetTranscript();
      listen();
    }
  };

  return (
    <div>
      <button onClick={handleListen} disabled={listening}>
        {listening ? 'Listening...' : 'Start Speaking'}
      </button>
      <input type="text" value={transcript} readOnly />
    </div>
  );
};

export default SpeechInput;
