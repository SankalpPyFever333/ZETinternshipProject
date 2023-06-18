import React, { useEffect } from 'react'
import AOS from 'aos'
import './HeaderComp.css'
import "aos/dist/aos.css";
function HeaderComp() {
            useEffect(()=>{
                  AOS.init({
                        duration:1600,
                        
                  })
            },[]);
  return (
    <nav className="head" data-aos="fade-in">
      <a href="/">
        <img
          className="logoimage"
          src="https://zetapp.in/_next/static/media/zet_new_logo.7adcc993.svg"
          alt=""
        />
      </a>

      <div className="lists">
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="/">Partner With Us</a>
        <a href="/">Blog</a>
        <div>
          <button className="btn">Download ZET</button>
        </div>
      </div>
    </nav>
  );
}

export default HeaderComp
