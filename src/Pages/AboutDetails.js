import React from 'react';
import Hero from '../Components/Hero';
import AboutBanner from '../Components/AboutBanner';
import Aboutus from '../Components/Aboutus';
import Footer from '../Components/footer';

export default function AboutDetails() {
    return( 
     <>
        <Hero hero='aboutHero'>
            <AboutBanner />
        </Hero>
        <Aboutus />
        <Footer />
     </>
    );
}
