import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import Services from '../Components/Services';
import FeaturedRooms from '../Components/FeaturedRooms';
import About from '../Pages/About';
import ImagesSlider from '../Components/ImagesSlider';
import { SliderData } from '../Components/SliderData';

export default function Home() {
    return( 
     <>
        <Hero>
            <Banner title='Luxurious Rooms' subtitle='Deluxe Rooms starting at $US 299'>
                <Link to='/rooms' className='btn-primary'>
                    Our Rooms
                </Link>
            </Banner>
        </Hero>
        <FeaturedRooms />
        <Services />
        <About/>
        <ImagesSlider slides={SliderData} />
     </>
    );
}
