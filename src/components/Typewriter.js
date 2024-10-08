import { useState, useEffect } from 'react';

export default function TypeWriter({ text, speed=100, textType = 'span'}) {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);


    useEffect(() => {
        if (index < text.length) {
          const timeout = setTimeout(() => {
            setDisplayedText((prev) => prev + text[index]);
            setIndex((prevIndex) => prevIndex + 1);
          }, speed);
          return () => clearTimeout(timeout);
        }
      }, [index, text, speed]);

    const Texttag = textType;
    return (
        <Texttag >{displayedText}
            <span className='text-accent animate-blink font-thin'>|</span>
            <style jsx>{`
                @keyframes blink {
                0%, 100% {
                    opacity: 1;
                }
                50% {
                    opacity: 0;
                }
                }
                .animate-blink {
                animation: blink  1s ease-in-out infinite;
                }
            `}</style>
        </Texttag>
      );
  }