import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";

function FactTextBox() {

  const textRef = useRef(null);

  useEffect(() => {
    const scrollToBottom = () => {
      if (textRef.current) {
        textRef.current.scrollTop = textRef.current.scrollHeight;
      }
    };

    scrollToBottom();

    // to ensure the scroll position is always correct
    const interval = setInterval(scrollToBottom, 100);

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once on mount


  return (

    <div 
    ref={textRef}
    style={{
      fontFamily: '"Miltonian", serif',
      fontWeight: 400,
      fontStyle: 'normal',
    }}
    className=" box-border
                p-1 mb-4
                w-full h-48
                break-words hyphens-auto 
                overflow-hidden overflow-y-auto scroll-smooth scrollbar-hidden
                text-3xl sm:text-5xl font-bold text-pink-600 
                bg-green-300" >
      <Typewriter
        options={{
          cursor: '&#10074' ,
          strings: ['Hello Mr. Momo. How are you doing?','World is beautiful place to live. Isn\'t it true?'],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default FactTextBox;

