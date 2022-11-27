import './Groups.css';
import React from 'react';
import FacultySidebar from '../../Sidebar/Faculty/FacultySidebar';
import Header from '../../Header/Faculty/Header';

const Groups = () => {
  return(
    <div>
      <FacultySidebar />
      <div className="facheader"><Header /></div>
    </div>
  );
}

export default Groups;
