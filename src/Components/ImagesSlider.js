import React, {useState} from 'react'
import {SliderData} from './SliderData';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa';
import Title from './Title';

const ImagesSlider = ({slides}) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
      setCurrent(current === slides.length - 1 ? 0 : current + 1)
  };

  const preSlide = () => {
      setCurrent(current === 0 ? slides.length - 1 : current -1)
  };


  if(!Array.isArray(slides) || slides.length <= 0){
      return null;
  }
  return (
   <section className='Gallery'>
    <Title title="You can learn more ..." />
    <div className='slider'>
    <FaArrowAltCircleLeft className='left-arrow' onClick={preSlide}/>
    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
    {SliderData.map((slide, index) => {
        return(
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (<img src={slide.image} alt="Gallery" className='slider-img'/>)}
            </div>
        );
    })}
    </div>
   </section>
  )
}

export default ImagesSlider;
