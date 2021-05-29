import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import AwardPartnersDetails from '../Components/AwardsPartnersDetails';
import {Link} from 'react-router-dom';

export default function AwardsPartners() {
  return (
    <>
    <Hero hero='roomsHero'>
        <Banner title='Awards and Partners'>
        <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
    </Hero>
    <AwardPartnersDetails />
    </>
  )
}
