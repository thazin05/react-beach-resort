import React from 'react';
import Title from './Title';
// import Image from '../images/greenvisionlogo.jpeg';
import Img1 from '../images/about.jpeg';
import Img2 from '../images/about-img1.jpeg';
import Img3 from '../images/about-img2.jpeg';

export default function Aboutus() {
  return (
    <section className='aboutus'>
        <Title title='About Us'></Title>
        <p>Experience the old-world charm of Kalaw Heritage Hotel, a landmark hotel at the former hill station Kalaw, built during the British era in 1903 hence the second oldest hotel in Myanmar after the glorious
        “The Strand Hotel Yangon” built in 1901</p>
        {/* <img className='greenvisionlogo' src={Image} alt='Green Vision'/> */}
        <div className='aboutusImages'>
        <article className='about-image'><img src={Img3}/></article> <article className='about-image'><img src={Img2}/></article> <article className='about-image'><img src={Img1}/></article>
        </div>
    </section>
  )
}
