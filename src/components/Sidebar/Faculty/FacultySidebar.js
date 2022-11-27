import React from 'react';
import {Link} from 'react-router-dom';
import './FacultySidebar.css';
import vector from '../../../assets/Vector.png';
import dashboard from '../../../assets/dashboard.png';
import add from '../../../assets/add.png';
import groups from '../../../assets/groups.png';
import research from '../../../assets/research.png';
import settings from '../../../assets/settings.png';
import logout from '../../../assets/logout.png';

const FacultySidebar = () => {
    return (
        <div className="container_fac">
            <img src={vector} alt="logo"/>
            <p>btp</p>
            <div className="dashboard_fac">
                <img src={dashboard} alt="dashboard"/>
                <Link to="/faculty/dashboard" className="dashboard_fac_link">Dashboard</Link>
            </div>
            <div className="add_fac">
                <img src={add} alt="addBtp"/>
                <Link to="/faculty/addbtp" className="add_fac_link">Add BTP</Link>
            </div>
            <div className="groups_fac">
                <img src={groups} alt="groups"/>
                <Link to="/faculty/groups" className="groups_fac_link">Groups</Link>
            </div>
            <div className="research_fac">
                <img src={research} alt="research works"/>
                <Link to="/faculty/research" className="research_fac_link">Research</Link>
            </div>
            <div className="settings_fac">
                <img src={settings} alt="settings"/>
                <Link to="/faculty/settings" className="settings_fac_link">Settings</Link>
            </div>
            <div className="logout_fac">
                <img src={logout} alt="logout"/>
                <Link to="/facultylogin" className="logout_fac_link">Logout</Link>
            </div>
        </div>
    )
}

export default FacultySidebar;
