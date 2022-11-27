import React from 'react';
import {Link} from 'react-router-dom';
import './StudentSidebar.css';
import studentVector from '../../../assets/studentVector.png';
import dashboard from '../../../assets/dashboard.png';
import add from '../../../assets/add.png';
import research from '../../../assets/research.png';
import settings from '../../../assets/settings.png';
import studentLogout from '../../../assets/studentLogout.png';

const StudentSidebar = () => {
    return (
        <div className="container">
            <img src={studentVector} alt="App Logo"/>
            <p>btp</p>
            <div className="dashboard">
                <img src={dashboard} alt="dashboard option"/>
                <Link to="/student/dashboard" className="dashboard_link">Dashboard</Link>
            </div>
            <div className="add">
                <img src={add} alt="Btp Section student"/>
                <Link to="/student/btp" className="add_link">BTP</Link>
            </div>
            <div className="publications">
                <img src={research} alt="Research Publication"/>
                <Link to="/student/publications" className="publications_link">Publications</Link>
            </div>
            <div className="settings">
                <img src={settings} alt="Settings"/>
                <Link to="/student/settings" className="settings_link">Settings</Link>
            </div>
            <div className="logout">
                <img src={studentLogout} alt="logout"/>
                <Link to="/" className="logout_link">Logout</Link>
            </div>
        </div>
    )
}

export default StudentSidebar;
