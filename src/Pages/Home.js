import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import Services from '../Components/Services';
import FeaturedRooms from '../Components/FeaturedRooms';
import Aboutus from '../Components/Aboutus';

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
        <Aboutus/>
        <Services />
        <FeaturedRooms />
     </>
    );
}
