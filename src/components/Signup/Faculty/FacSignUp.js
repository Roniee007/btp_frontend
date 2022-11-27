import './FacSignUp.css';
import React from 'react';
import {Link} from 'react-router-dom';
import Icon2 from '../../../assets/icon2.png';
import FacultyLoginImg from '../../../assets/facloginimg.png';

const FacSignUp = () => {
  return(
    <div>
      <img className="topimage_fac_signup" alt="topImage" src={FacultyLoginImg} />
      <div className="shadow_fac_signup"></div>
      <Link to="/studentsignup" className="stusignup_fac" type="submit"> Student Sign up </Link>
      <Link to="/facultysignup" className="facsignup_fac" type="submit"> Faculty Sign up </Link>
      <form className="fsignup_fac">
        <label className="signup_fac">Sign Up</label>
        <label className="name_fac_signup">Name</label>
        <input className="inputname_fac_signup" type="text" placeholder="guru" />
        <label className="email_fac_signup">Email </label>
        <input className="inputemail_fac_signup" type="email" placeholder="abc@example.com" />
        <label className="password_fac_signup">Password </label>
        <input className="inputpassword_fac_signup" type="password" placeholder="**********"/>
        <p className="oldperson_fac_signup"> Already have an account? <Link to='/facultylogin'> Sign in </Link></p>
        <p className="finsignup_fac"> Sign Up </p>
        <button className="ellipse_fac_signup" type="submit">
          <img className="arrow_fac_signup" alt="arrow" src={Icon2} />
        </button>
      </form>
    </div>
  );
}

export default FacSignUp;
