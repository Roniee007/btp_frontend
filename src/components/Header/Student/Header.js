import './Header.css';
import React from 'react';
import Student from '../../../assets/student.png';
import Dot from '../../../assets/blueDot.png';

const Header = () => {
  return(
    <div className="headerRow">
      <input className="stu_search" type="text" placeholder="   Search Faculty" />
      <div className="container_header">
            <img height="fitContent" width="fitContent" src={Student}/>
            <div className="headerStudentInfo">
            <h3 className="headerHeading">Nitesh Patel</h3>
            <p className="headerPara">Student</p>
            </div>
            <div>
            </div>
        </div>
    </div>
  );
}

export default Header;
