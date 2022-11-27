import './Content.css';
import React from 'react';
import Image from '../../../assets/image.png';

const Content = () => {
  return(
    <div className="content">
      <div className="upperDiv">
        <div>
        <img src={Image} alt="profile" className="profile"/>
        </div>
        <div className="nameBlock">
        <h5 className="name">Professor Name</h5>
        <h6 className="field">Field of Professor </h6>
        </div>
        <div className="pitchDiv">
        <button className="pitch">Pitch</button>
        </div>
      </div>
      <div className="interest">
        <p className="areaofinterest"> interest </p>
      </div>
    </div>
  );
}

export default Content;
