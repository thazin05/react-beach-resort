import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
// import UnsplashedGallery from '../Components/ImageGallery';
import ResponsiveGallery from '../Components/ResponsiveGallery';
import Footer from '../Components/footer';

export default function Gallery() {
  return (
    <>
        <Hero hero='aboutHero'>
            <Banner title='Gallery'>
                <Link to='/' className='btn-primary'>Return Home</Link>
            </Banner>
        </Hero>
        <ResponsiveGallery />
        <Footer />
    </>
  );
}
