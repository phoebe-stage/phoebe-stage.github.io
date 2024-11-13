import { useState,useEffect } from 'react';
import ActionButton from './ActionButton';
import useScreenSize from '../useScreenSize';
import * as Constant from "../constants"

const mod = (n, m) => ((n % m) + m) % m;

function getTranslation(index) {
  var percentage = 50;
  console.log(percentage);
  return percentage;
};




export default function Carousel() {
  const slides = [
    { url: '/frog.png', link: '/page2' },
    { url: '/frog.png', link: '/page2' },
    { url: '/frog.png', link: '/page2' },
    { url: '/frog.png', link: '/page3' },
    { url: '/frog.png', link: '/page3' },
  ];
  
  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(32);
  const overlap = 50;
  const screenSize = useScreenSize();
  const width = screenSize.width;

  var marginlesswidth = width;
  if (width < 640) {
    marginlesswidth = marginlesswidth - Constant.remToPx(2*Constant.MINPAGEMARGINSIZE);
  } else {
    marginlesswidth = marginlesswidth - Constant.remToPx(2*Constant.SMALLPAGEMARGINSIZE);
  }

  // const translateX = `translateX(${(marginlesswidth-Constant.remToPx(Constant.SMALLROUNDBUTTONSIZE*2))/2}px)`;
  const translateX = `translateX(50%) translateX(-${slideWidth/2}rem)`;
  console.log(marginlesswidth);
  console.log(width)
  

  function handleForwardClick() {
    setIndex((prevIndex) => mod(prevIndex+1, slides.length));
    console.log(screenSize);
  }

  function handleBackwardClick() {
    setIndex((prevIndex) => mod(prevIndex-1, slides.length));
    console.log(screenSize.width);
  }


  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden ">
      <div className='relative w-full max-w-4xl h-full flex items-center justify-center px-16'>
        {/* Container for button */}
        <div className={`absolute left-0 z-30 ${index === 0 ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
          <ActionButton text = "<" action = {handleBackwardClick} size = "round_button"/>
        </div>
        {/* Container slides */}
        <div className="relative h-full aspect-square">
          {slides.map((slide, i) => {
            const distance = i - index;
            const adjustedDistance = distance > slides.length / 2 ? distance - slides.length : distance;
            return (
            <div className="absolute top-1/2 left-1/2 aspect-square w-64 -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
              style = {{
                transform: `
                  translate(-50%, -50%)
                  translateX(${distance * 25}%)
                  scale(${1 - Math.abs(distance) * 0.2})
                `,
                opacity: Math.abs(index-i) > 2 ? 0 : 1,
                zIndex: distance === 0 ? 20 : 10 - Math.abs(distance),
              }}>
              <img
                key={i}
                src={slide.url}
                className={`w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300`}
              />
            </div>
            )
          })}

        </div>
        <div className={`absolute right-0 z-30 ${index === slides.length - 1 ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
          <ActionButton text = ">" action = {handleForwardClick} size = "round_button"/>
        </div>
      </div>
    </div>
  );
}