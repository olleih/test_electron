import React from 'react';

interface TypedTextProps {
  speed: number;
  text: string;
}

const TypedText = (props: TypedTextProps) => {
  const { speed, text } = props;
  const [typedText, setTypedtext] = React.useState(text[0]);
  const [isBlinking, setIsBlinking] = React.useState(false);

  const index = React.useRef(0);

  React.useEffect(() => {
    function tick() {
      index.current++;
      setTypedtext((prev: string) => prev + text[index.current]);
    }

    if (index.current < text.length - 1) {
      const addChar = setInterval(tick, speed);
      return () => clearInterval(addChar);
    } else {
      // Start blinking when the last character is typed
      const blinkInterval = setInterval(() => {
        setIsBlinking((prev) => !prev);
      }, 500);
      return () => clearInterval(blinkInterval);
    }
  }, [typedText, speed, text]);

  return (
    <span>
      {typedText}
      {isBlinking && text.length === text.length && <span>_</span>}
    </span>
  );
};

export default TypedText;
