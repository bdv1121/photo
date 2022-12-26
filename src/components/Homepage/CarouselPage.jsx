import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img from '../img/36.jpg';
import img1 from '../img/4.jpg'
import img2 from '../img/25.jpg'
import './carousel.css'
import { Button } from 'react-bootstrap';

function CarouselPage() {
  return (
    <div>
        <Carousel>
        <Carousel.Item interval={1000}>
                <img
                className="d-block w-100 carousel"
                src={img2}
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100 carousel"
                src={img}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100 carousel"
                src={img1}
                />
            </Carousel.Item>
            
        </Carousel>
    </div>
  )
}

export default CarouselPage