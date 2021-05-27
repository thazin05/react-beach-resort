import React from 'react';
// import Image from '../images/greenvisionlogo.jpeg';
import Img1 from '../images/about.jpeg';
import Img2 from '../images/about-img1.jpeg';
import Img3 from '../images/about-img2.jpeg';
import {FaWifi,FaCoffee,FaParking,FaAccessibleIcon,FaStripeS,FaBusinessTime} from 'react-icons/fa';

export default function Aboutus() {
  return (
    <section className='aboutus'>
      <p>Surrounded by gardens, this genteel 1903 hotel set in 3 British Colonial-style buildings is 2 km from street food at the Kalaw Myoma Market and 3 km from city views at Thein Taung Monastery. It's 1 km from the Kalaw train station.

        Airy rooms include free Wi-Fi, flat-screen TVs and safes, plus balconies; some have mountain or garden views. Upgraded rooms feature minibars. Suites add sitting areas and rainfall showers.

        There's a restaurant and a bar, as well as a garden.</p>
       <div className='free-services-center'> 
        <div className='about-freeservices-center'>
          <article className='service free-services'>
            <span><FaWifi/></span>
            <h6>Free Wifi</h6>
          </article>
          <article className='service free-services'>
            <span><FaCoffee/></span>
            <h6>Free Breakfast</h6>
          </article>
          <article className='service free-services'>
            <span><FaParking/></span>
            <h6>Free Parking</h6>
          </article>
          <article className='service free-services'>
            <span><FaAccessibleIcon/></span>
            <h6>Accessible</h6>
          </article>
          <article className='service free-services'>
            <span><FaStripeS/></span>
            <h6>Laundry Service</h6>
          </article>
          <article className='service free-services'>
            <span><FaBusinessTime/></span>
            <h6>Business Centre</h6>
          </article>
        </div>
        </div>  
        {/* <img className='greenvisionlogo' src={Image} alt='Green Vision'/> */}
        <div className='aboutusImages'>
        <article className='about-image'><img src={Img3}/></article> <article className='about-image'><img src={Img2}/></article> <article className='about-image'><img src={Img1}/></article>
        </div>
    </section>
  )
}
