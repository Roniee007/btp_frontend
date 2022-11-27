import './AddBtp.css';
import React from 'react';
import FacultySidebar from '../../Sidebar/Faculty/FacultySidebar';
import Header from '../../Header/Faculty/Header';

const AddBtp = () => {
  return(
    <div>
      <FacultySidebar />
      <div className="facheader"><Header /></div>
    </div>
  );
}

export default AddBtp;
