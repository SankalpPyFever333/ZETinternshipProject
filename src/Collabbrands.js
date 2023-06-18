import React, { useEffect } from 'react'
import AOS from 'aos';
import './Collabbrands.css'
import 'aos/dist/aos.css';
function Collabbrands() {
      useEffect(()=>{
            AOS.init({
                  duration:700,
            })
      },[])
  return (
    <div className='maindivbrand'>
      <div className="firstdivbrand">
            <p className="p1brand">Top Brands on ZET</p>
            <p className="p2brand">We are trusted by best brands in the country</p>
      </div>

      <div className="animebrands">
            <div className="brandcontainer">
                  <div className="brandname"></div>
                  <div className="brandname"></div>
                  <div className="brandname"></div>
                  <div className="brandname"></div>
                  <div className="brandname"></div>
                        
            </div>
      </div>




    </div>
  )
}

export default Collabbrands
