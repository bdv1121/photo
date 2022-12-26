import React from 'react'
import {Col, Row} from 'react-bootstrap';
import img from '../img/7.jpg';
import img1 from '../img/37.jpg'
import img2 from '../img/35.jpg'
import img3 from '../img/28.jpg'
import img4 from '../img/20.jpg'
import img5 from '../img/18.jpg'
import img6 from '../img/15.jpg'


import Navigation from '../Navigation/Navbar';
import './Pages.css'
import '../../index.css'



function Peace() {
  
  return (
    
    <div className ="p-3">
      <h1 className='textFeild'>Green Green</h1>
      {/* <Navigation /> */}
      {/* row 1 */}
      
      <div className='row p-2'>
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <img 
            src= {img1}
            className='w-100 shadow-1-strong rounded mb-4 h-100 zoom'
            />

          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <img 
            src={img}
            className='w-100 shadow-1-strong rounded mb-4 h-100 zoom'
            />

          </div>
          
      </div>
      <div className='row p-3'>
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img 
            src= {img2}
            className='w-100 shadow-1-strong rounded mb-4 h-100 zoom'
            />

          </div>
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img 
            src= {img3}
            className='w-100 shadow-1-strong rounded mb-4 h-100 zoom'
            />

          </div>
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img 
            src= {img4}
            className='w-100 shadow-1-strong rounded mb-4 h-100 zoom'
            />
          </div>
      </div>
      <div className="row">
          <div className='col-lg-6 col-md-12 mb-4 mb-lg-0'>
          <img 
            src= {img5}
            className='w-100 shadow-1-strong rounded mb-4 h-100 zoom'
            />
          </div>
          <div className='col-lg-6 col-md-12 mb-4 mb-lg-0'>
          <img 
            src= {img6}
            className='w-100 shadow-1-strong rounded mb-4 h-100 zoom'
            />
          </div>
      </div>
    </div>
  )
}

export default Peace