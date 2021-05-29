import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import Services from '../Components/Services';
import FeaturedRooms from '../Components/FeaturedRooms';
import About from '../Pages/About';
import ResponsiveGallery from '../Components/ResponsiveGallery';
import Map from '../Components/map';
import Footer from '../Components/footer';
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
        <ResponsiveGallery />
        <Map />
        <Footer />
     </>
    );
}
