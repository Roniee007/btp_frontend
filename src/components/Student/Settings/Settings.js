import './Settings.css';
import React from 'react';
import StudentSidebar from '../../Sidebar/Student/StudentSidebar';
import Header from '../../Header/Student/Header';

const Settings = () => {
  return(
    <div>
      <StudentSidebar />
      <div className="stuheader"><Header /></div>
    </div>
  );
}

export default Settings;
