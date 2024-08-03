import React from 'react';
import myImage from './Gojo Satoru.jpg'; 
import "./header.css";
const Image = () => {
  return (
    <div>
      <img src={myImage} alt="gojoSaturo" />
      <div className="overlay">
        <h1>MOHAMED EMAD</h1>
        <p>FULLSTACK WEB DEVOLBER</p>
        <button className="contact-buttonn"><a href='#contact'>Contact Me</a></button>
      </div>
    </div>
  );
};

export default Image;
