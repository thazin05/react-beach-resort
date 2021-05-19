import React, { Component } from 'react';
import {FaCocktail,FaHiking,FaCanadianMapleLeaf,FaMapSigns,FaSkiingNordic,FaKiwiBird,FaCampground} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
  state={
      services: [
          {
              icon:<FaSkiingNordic/>,
              title:'Wineries Tour',
              info:'he Shan Region is home of two stunning Vineyard, the Red Mountain Estate at Nyaung Shwe  and the  Aythaya Estate in Taunggyi'
          },
          {
            icon:<FaCanadianMapleLeaf/>,
            title:'Cultural Sites',
            info:"Kalaw region is rich on cultural Buddhist temple and pagodas, close to Pindaya's world famous limestone caves with its thousand  of Buddha Images."
        },
        {
            icon:<FaMapSigns/>,
            title:'Market Tour',
            info:'Kalaw’s heart is its market, where villagers from the surrounding hills come to sell their products such as vegetables, handcraft, herbs & spices from the region.'
        },
        {
            icon:<FaHiking/>,
            title:'Leisure Activities',
            info:'Kalaw is the ideal starting base for hiking, biking or bird watching trips. The trek to Inle Lake is a must for every adventurer.'
        },
        {
          icon:<FaKiwiBird/>,
          title:'Birds Safari',
          info:'Specialist tour guides and  ornithologists will introduce you to the world of the evergreen forest wildlife  and its hundreds recorded bird species.'
        },
        {
          icon:<FaCampground/>,
          title:'Green Hill Valley Elephant Camp',
          info:'A wonderful facility founded in 2011, with the finest nature reserves for retired working elephants, feed, bathe and interact with the elephants throughout the day.'
        }
      ]
  }
  render() {
    return (
      <section className='services'>
        <Title title='Things To Do ...' />
        <div className='services-center'>
            {this.state.services.map((item,index) => {
                return( <article key={index} className='service'>
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>
                );
            })}
        </div>
      </section>
    );
  }
}
