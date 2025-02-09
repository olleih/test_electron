import { useState } from 'react';
import TypedText from './TypedText';

const texts = [
  'Hi, my name is Olivia',
  'Nice to meet you',
  'This is my first Electron + React app',
  'Welcome!'
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextText = () => {
    if (currentIndex === texts.length) {
      setCurrentIndex(0);
    }
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div>
      <TypedText key={currentIndex} speed={200} text={texts[currentIndex]} />
      <button onClick={handleNextText}>
        Next
      </button>
    </div>
  );
}
