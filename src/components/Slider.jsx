import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../assets/slider/img1.jpg"
import img2 from "../assets/slider/img2.jpg"
import img3 from "../assets/slider/img3.jpg"


function ImageSlider() {
    return (
      <Carousel autoPlay={true} showThumbs={false} className="slider" interval={3000} infiniteLoop={true} showStatus={false}>
  
        <div>
          <img src={img1} alt="Imagen 1" className='slider-img' />
        </div>
        <div>
          <img src={img2} alt="Imagen 1" className='slider-img' />
        </div>
        <div>
          <img src={img3} alt="Imagen 1" className='slider-img' />
        </div>
      </Carousel>
    );
  }
  
  export default ImageSlider;