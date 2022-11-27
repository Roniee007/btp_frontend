import './StuDashboard.css'
import React from 'react';
import StudentSidebar from '../../Sidebar/Student/StudentSidebar';
import Header from '../../Header/Student/Header';
import Content from '../../Student/Content/Content';

const StuDashboard = () => {
  return(
      <div className="stuarea">

        <StudentSidebar />

        <div className="headerRowContent">
         <Header />
          <div className="rowContent">
            <Content />
              <Content />
              <Content />
              <Content />
              <Content />
              <Content />
          </div>
        </div>
      </div>
  );
}

export default StuDashboard;
