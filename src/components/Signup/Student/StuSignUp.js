import './StuSignUp.css';
import React from 'react';
import {Link} from 'react-router-dom';
import Icon1 from '../../../assets/icon1.png';
import StudentLoginImg from '../../../assets/stulogimg.png';

const StuSignUp = () => {
  return(
    <div>
      <img className="topimage_signup" alt="topImage" src={StudentLoginImg} />
      <div className="shadow_signup"></div>
      <Link to='/studentsignup' className="stusignup" type="submit"> Student Sign up </Link>
      <Link to='/facultysignup' className="facsignup" type="submit"> Faculty Sign up </Link>
      <form className="ssignup">
        <label className="signup">Sign up</label>
        <label className="name_signup">Name</label>
        <input className="inputname_signup" type="text" placeholder="Shishya" />
        <label className="email_signup">Email </label>
        <input className="inputemail_signup" type="email" placeholder="abc@example.com" />
        <label className="password_signup">Password </label>
        <input className="inputpassword_signup" type="password" placeholder="**********"/>
        <p className="oldperson_signup"> Already have an account? <Link to='/' className="stu_login"> Sign in </Link></p>
        <p className="finsignup">Sign Up</p>
        <button className="ellipse_signup" type="submit">
          <img className="arrow_signup" alt="arrow" src={Icon1} />
        </button>
      </form>
    </div>
  );
}

export default StuSignUp;
