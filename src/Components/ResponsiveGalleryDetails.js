import React, { useState } from 'react';
import '../css/gallery.css';
import CloseIcon from '@material-ui/icons/Close';
import Img1 from '../images/gallery1.jpeg';
import Img2 from '../images/gallery2.jpeg';
import Img3 from '../images/gallery3.jpeg';
import Img4 from '../images/gallery4.jpeg';
import Img5 from '../images/gallery5.jpeg';
import Img6 from '../images/gallery6.jpeg';
import Img7 from '../images/gallery7.jpeg';
import Img8 from '../images/gallery8.jpeg';
import Img9 from '../images/gallery9.jpeg';
import Img10 from '../images/gallery10.jpeg';
import Img11 from '../images/gallery11.jpeg';
import Img12 from '../images/gallery12.jpeg';
import Img13 from '../images/gallery13.jpeg';
import Img14 from '../images/gallery14.jpeg';
import Img15 from '../images/gallery15.jpeg';
import Img16 from '../images/gallery16.jpeg';
import Img17 from '../images/gallery17.jpeg';
import Img18 from '../images/gallery18.jpeg';
import Img19 from '../images/gallery19.jpeg';

const ResponsiveGalleryDetails = () => {

  let data =[
      {
          id: 1,
          imgSrc: Img1,
      },
      {
        id: 2,
        imgSrc: Img2,
    },
    {
        id: 3,
        imgSrc: Img3,
    },
    {
        id: 4,
        imgSrc: Img4,
    },
    {
        id: 5,
        imgSrc: Img5,
    },
    {
        id: 6,
        imgSrc: Img6,
    },
    {
        id: 7,
        imgSrc: Img7,
    },
    {
        id: 8,
        imgSrc: Img8,
    },
    {
        id: 9,
        imgSrc: Img9,
    },
    {
        id: 10,
        imgSrc: Img10,
    },
    {
        id: 11,
        imgSrc: Img11,
    },
    {
        id: 12,
        imgSrc: Img12,
    },
    {
        id: 13,
        imgSrc: Img14,
    },
    {
        id: 14,
        imgSrc: Img14,
    },
    {
        id: 15,
        imgSrc: Img15,
    },
    {
        id: 16,
        imgSrc: Img16,
    },
    {
        id: 17,
        imgSrc: Img17,
    },
    {
        id: 18,
        imgSrc: Img18,
    },
    {
        id: 19,
        imgSrc: Img19,
    }
  ]

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  }
  return (
    <>
    <div className={model ? 'model open' : 'model'}>
        <img src={tempimgSrc} />
        <CloseIcon onClick={() => setModel(false)}/>
    </div>
     <div className='gallery'>
        {data.map((item, index)=>{
            return(
                <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                    <img src={item.imgSrc} style={{width: '100%'}} />
                </div>
            )
        })}
     </div>   

    </>
  )
}

export default ResponsiveGalleryDetails
