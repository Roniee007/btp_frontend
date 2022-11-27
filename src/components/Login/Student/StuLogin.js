import './StuLogin.css';
import React from 'react';
import {Link} from 'react-router-dom';
import Icon1 from '../../../assets/icon1.png';
import StudentLoginImg from '../../../assets/stulogimg.png';

const StuLogin = () => {
  return(
    <div>
      <img className="topimage" alt="topImage" src={StudentLoginImg} />
      <div className="shadow"></div>
      <Link to='/' className="stulogin" type="submit"> Student Login </Link>
      <Link to='/facultylogin' className="faclogin" type="submit"> Faculty Login </Link>
      <form className="slogin">
        <label className="login">Log In</label>
        <label className="email">Email </label>
        <input className="inputemail" type="email" placeholder="abc@example.com" />
        <label className="password">Password </label>
        <input className="inputpassword" type="password" placeholder="**********"/>
        <input className="cbox" type="checkbox" id="cb" />
        <label for="cb" className="Rememberme"> Remember me </label>
        <a href="#" className="fpass">Forgot Password? </a>
        <p className="newperson"> Don't have an account? <Link to='/studentsignup' className="stu_signup"> Create one </Link></p>
        <p className="finlogin"> Log In </p>
        <Link to='/student/dashboard' className="ellipse" type="submit">
          <img className="arrow" alt="arrow" src={Icon1} />
        </Link>
      </form>
    </div>
  );
}

export default StuLogin;
