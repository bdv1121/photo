import React from 'react'
import {Col, Row} from 'react-bootstrap';
import img from '../img/7.jpg';
import img1 from '../img/37.jpg'
import Navigation from '../Navigation/Navbar';



function Peace() {
  return (
    <div className ="p-2">
      <Navigation />
      {/* row 1 */}
      
      <div className='row p-3'>
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img 
            src= {img1}
            className='w-100 shadow-1-strong rounded mb-4 h-100'
            />

          </div>
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img 
            src={img}
            className='w-100 shadow-1-strong rounded mb-4 h-100'
            />

          </div>
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img 
            src= {img1}
            className='w-100 shadow-1-strong rounded mb-4 h-100'
            />

          </div>
          
      </div>
      <div className='row p-3'>
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img 
            src= {img}
            className='w-100 shadow-1-strong rounded mb-4 h-100'
            />

          </div>
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img 
            src= {img1}
            className='w-100 shadow-1-strong rounded mb-4 h-100'
            />

          </div>
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img 
            src= {img}
            className='w-100 shadow-1-strong rounded mb-4 h-100'
            />

          </div>



      </div>
    </div>
  )
}

export default Peace