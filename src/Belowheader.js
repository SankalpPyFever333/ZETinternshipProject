import React, { useEffect } from "react";
import AOS from "aos";
import "./belowHeader.css";
import "aos/dist/aos.css";

function Belowheader() {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div data-aos="zoom-in" className="bHead">
      <div className="maindiv">
        <div className="firstdiv">
          <div className="insidefirstdiv">
            <h1>
              Become a Financial Advisor and 
              <span>Earn Rs.1 Lakh/Month</span>
            </h1>
            <p>No investment required</p>
            <div>
              <img
                alt="app"
                src="	https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg"
              />
            </div>
          </div>
          <div className="firstdivimage">
            <img
              alt="app_image"
              src="	https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHeroImgNew.d1d917dd.png&w=750&q=75"
            />
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Belowheader;
