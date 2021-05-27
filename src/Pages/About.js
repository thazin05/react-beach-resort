import React from 'react';
import Hero from '../Components/Hero';
// import Banner from '../Components/Banner';
import AboutBanner from '../Components/AboutBanner';
import {Link} from 'react-router-dom';
import Aboutus from '../Components/Aboutus';

export default function About() {
    return( 
     <>
        <Hero hero='aboutHero'>
            <AboutBanner />
        </Hero>
     </>
    );
}
