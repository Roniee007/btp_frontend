import './FacLogin.css';
import React from 'react';
import {Link} from 'react-router-dom';
import Icon2 from '../../../assets/icon2.png';
import FacultyLoginImg from '../../../assets/facloginimg.png';

const FacLogin = () => {
  return(
    <div>
      <img className="topimage_fac" alt="topImage" src={FacultyLoginImg} />
      <div className="shadow_fac"></div>
      <Link to="/" className="stulogin_fac" type="submit"> Student Login </Link>
      <Link to="/facultylogin" className="faclogin_fac" type="submit"> Faculty Login </Link>
      <form className="flogin_fac">
        <label className="login_fac">Log In</label>
        <label className="email_fac">Email </label>
        <input className="inputemail_fac" type="email" placeholder="abc@example.com" />
        <label className="password_fac">Password </label>
        <input className="inputpassword_fac" type="password" placeholder="**********"/>
        <input className="cbox_fac" type="checkbox" id="cb" />
        <label for="cb" className="Rememberme_fac"> Remember me </label>
        <a href="#" className="fpass_fac">Forgot Password? </a>
        <p className="newperson_fac"> Don't have an account? <Link to='/facultysignup'> Create one </Link></p>
        <p className="finlogin_fac"> Log In </p>
        <Link to='/faculty/dashboard' className="ellipse_fac" type="submit">
          <img className="arrow_fac" alt="arrow" src={Icon2} />
        </Link>
      </form>
    </div>
  );
}

export default FacLogin;
