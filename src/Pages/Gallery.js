import React from 'react';
import Hero from '../Components/Hero';
import ImagesSlider from '../Components/ImagesSlider';
import { SliderData } from '../Components/SliderData';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import Footer from '../Components/footer';

export default function Gallery() {
  return (
    <>
        <Hero hero='aboutHero'>
            <Banner title='Gallery'>
                <Link to='/' className='btn-primary'>Return Home</Link>
            </Banner>
        </Hero>
        <ImagesSlider slides={SliderData} />
        <Footer />
    </>
  );
}
