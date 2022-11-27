import './Header.css';
import React from 'react';
import Student from '../../../assets/student.png';
import Dot from '../../../assets/redDot.png';

const Header = () => {
  return(
    <div>
      <input className="fac_search" type="text" placeholder="   Search Faculty" />
      <div className="container_header_fac">
            <img src={Student}/>
            <h3>Nitesh Patel</h3>
            <p>Faculty</p>
            <img className="dot1" src={Dot}/>
            <img className="dot2" src={Dot}/>
            <img className="dot3" src={Dot}/>
        </div>
    </div>
  );
}

export default Header;
