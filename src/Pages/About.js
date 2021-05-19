import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import Aboutus from '../Components/Aboutus';

export default function About() {
    return( 
     <>
        <Hero hero='aboutHero'>
            <Banner title='Abou Us'>
                <Link to='/about' className='btn-primary'>
                    Return Home
                </Link>
            </Banner>
        </Hero>
        <Aboutus/>
     </>
    );
}
