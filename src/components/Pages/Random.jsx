import React from 'react'
import img from '../img/cat3.jpeg';
import img1 from '../img/cat.jpg';
import img2 from '../img/cat4.jpeg';



function Random() {
  return (
    <div>
      
      <h1 className='textFeild1'>
      Meow Meow
      <div className='row'>
      <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <img 
            src= {img2}
            className='w-100 shadow-1-strong rounded mb-4  zoom random'
            />
      </div>
      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
            <img 
            src= {img}
            className='w-100 shadow-1-strong rounded mb-4  zoom random'
            />
      </div>
      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
            <img 
            src= {img1}
            className='w-100 shadow-1-strong rounded mb-4  zoom random'
            />
      </div>
      </div>
      </h1>
    </div>
  )
}

export default Random