import './FacSettings.css';
import React from 'react';
import FacultySidebar from '../../Sidebar/Faculty/FacultySidebar';
import Header from '../../Header/Faculty/Header';

const FacSettings = () => {
  return(
    <div>
      <FacultySidebar />
      <div className="facheader"><Header /></div>
    </div>
  );
}

export default FacSettings;
