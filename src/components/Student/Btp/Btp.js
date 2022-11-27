import './Btp.css';
import React from 'react';
import StudentSidebar from '../../Sidebar/Student/StudentSidebar';
import Header from '../../Header/Student/Header';

const Btp = () => {
  return(
    <div>
      <StudentSidebar />
      <div className="stuheader"><Header /></div>
    </div>
  );
}

export default Btp;
