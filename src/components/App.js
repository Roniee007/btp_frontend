import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import FacLogin from './Login/Faculty/FacLogin';
import StuLogin from './Login/Student/StuLogin';
import FacSignUp from './Signup/Faculty/FacSignUp';
import StuSignUp from './Signup/Student/StuSignUp';
import FacDashboard from './Dashboard/Faculty/FacDashboard';
import StuDashboard from './Dashboard/Student/StuDashboard';
import Btp from './Student/Btp/Btp';
import Publications from './Student/Publications/Publications';
import Settings from './Student/Settings/Settings';
import AddBtp from './Faculty/AddBtp/AddBtp';
import Groups from './Faculty/Groups/Groups';
import Research from './Faculty/Research/Research';
import FacSettings from './Faculty/FacSettings/FacSettings';

const App = () => {
  return(
    <div className="BackgroundImage">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<StuLogin />} />
          <Route exact path="/facultylogin" element={<FacLogin />} />
          <Route exact path="/facultysignup" element={<FacSignUp />} />
          <Route exact path="/studentsignup" element={<StuSignUp />} />
          <Route exact path="/faculty/dashboard" element={<FacDashboard />} />
          <Route exact path="/student/dashboard" element={<StuDashboard />} />
          <Route exact path="student/btp" element={<Btp />} />
          <Route exact path="student/publications" element={<Publications />} />
          <Route exact path="student/settings" element={<Settings />} />
          <Route exact path="faculty/addbtp" element={<AddBtp />} />
          <Route exact path="faculty/groups" element={<Groups />} />
          <Route exact path="faculty/research" element={<Research />} />
          <Route exact path="faculty/settings" element={<FacSettings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
