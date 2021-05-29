import React, { useState } from 'react';
import Award1 from '../images/award1.png';
import Award2 from '../images/award2.png';
import Award3 from '../images/award3.png';
import Award4 from '../images/award4.png';
import Award5 from '../images/award5.png';
import Award6 from '../images/award6.png';
import Award7 from '../images/award7.png';
import Award8 from '../images/award8.jpeg';
import Award9 from '../images/award9.jpeg';
import Award10 from '../images/award10.png';
import Award11 from '../images/award11.png';

const AwardsPartnersDetails = () => {
    let data =[
        {
            id: 1,
            AwardSrc: Award1,
        },
        {
          id: 2,
          AwardSrc: Award2,
      },
      {
          id: 3,
          AwardSrc: Award3,
      },
      {
          id: 4,
          AwardSrc: Award4,
      },
      {
          id: 5,
          AwardSrc: Award5,
      },
      {
          id: 6,
          AwardSrc: Award6,
      },
      {
          id: 7,
          AwardSrc: Award7,
      },
      {
          id: 8,
          AwardSrc: Award8,
      },
      {
          id: 9,
          AwardSrc: Award9,
      },
      {
          id: 10,
          AwardSrc: Award10,
      },
      {
          id: 11,
          AwardSrc: Award11,
      }
    ]
  
  return (
   <section className='aboutus'>   
    <div className='free-services-center'> 
        <div className='about-freeservices-center'>
            {data.map((item, index)=>{
                return(
                    <article className='service free-services' key={index}>
                        <img src={item.AwardSrc} className='awards-img'/>
                    </article>
                )
            })}
     </div>
    </div> 
   </section> 
  )
}

export default AwardsPartnersDetails
