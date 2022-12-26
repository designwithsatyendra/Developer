import { useState } from 'react';

const slideStyles = {
  width: '92vw',
  height: '50vh',
  borderRadius: '10px',
  marginTop: '30px',
  marginBottom: '30px',
};

const rightArrowStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  right: '32px',
  fontSize: '10px',
  color: 'black',
  zIndex: 1,
  cursor: 'pointer',
  padding: '10px',
  borderRadius: '10px',
  width: '8%',
  border: 'none',
  background: '#F1C40F',
};

const leftArrowStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  left: '32px',
  fontSize: '10px',
  color: 'black',
  zIndex: 1,
  cursor: 'pointer',
  padding: '10px',
  borderRadius: '10px',
  width: '8%',
  border: 'none',
  background: '#F1C40F',
};

const sliderStyles = {
  position: 'relative',
  height: '50%',
};

const slides = [
  {
    url: 'https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'italy',
  },
  {
    url: 'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'city',
  },
  {
    url: 'https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'forest',
  },
  {
    url: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'beach',
  },
  {
    url: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'boat',
  },
];
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <>
      <div style={sliderStyles}>
        <div>
          <button id="sliderimg" onClick={goToPrevious} style={leftArrowStyles} type="button">
            Pre
          </button>
        </div>
        <div>
          <button id="sliderimg" onClick={goToNext} style={rightArrowStyles} type="button">
            Next
          </button>
        </div>
        <div style={slideStylesWidthBackground}>.</div>
      </div>
    </>
  );
};

export default ImageSlider;
