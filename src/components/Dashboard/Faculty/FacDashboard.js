import './FacDashboard.css';
import React from 'react';
import FacultySidebar from '../../Sidebar/Faculty/FacultySidebar';
import Header from '../../Header/Faculty/Header';

const FacDashboard = () => {
  return(
    <div>
      <FacultySidebar />
      <div className="facheader"><Header /></div>
      <div className="facarea"> Faculty Area </div>
    </div>
  )
}

export default FacDashboard;
