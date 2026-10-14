import { useEffect, useState } from 'react';

// Types and deletes each word in a loop. Pass a stable (module-level) array.
export default function useTypewriter(words, { typeSpeed = 70, deleteSpeed = 35, pause = 1400 } = {}) {
  const [text, setText] = useState('');

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = words[wordIndex];
      setText(word.slice(0, charIndex));

      let delay;
      if (!deleting && charIndex < word.length) {
        charIndex += 1;
        delay = typeSpeed;
      } else if (!deleting) {
        deleting = true;
        delay = pause;
      } else if (charIndex > 0) {
        charIndex -= 1;
        delay = deleteSpeed;
      } else {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 300;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, typeSpeed);
    return () => clearTimeout(timer);
  }, [words, typeSpeed, deleteSpeed, pause]);

  return text;
}
