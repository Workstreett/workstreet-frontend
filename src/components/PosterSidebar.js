import React from 'react'
import '../css/sidestyle.css'
import { NavLink } from 'react-router-dom'
import {
    HomeIcon,
    DesktopComputerIcon,
    ChartBarIcon,
    ChipIcon,
    CurrencyDollarIcon,
    UserIcon,
    LogoutIcon,
    ViewGridAddIcon
} from '@heroicons/react/outline'

class PosterSidebar extends React.Component {
    render() {
        return (
            <div className="side-menu side-menu-flex">
                <div>
                    <NavLink exact to="/" activeClassName="active-link">
                        <div className="list-ele">
                            <HomeIcon className="side-icon" />
                            <span className="text">Home</span>
                        </div>
                    </NavLink>
                    <NavLink exact to="/workstreet/sde" activeClassName="active-link">
                        <div className="list-ele">
                            <DesktopComputerIcon className="side-icon" />
                            <span className="text">SDE</span>
                        </div>
                    </NavLink>
                    <NavLink exact to="/workstreet/data-science" activeClassName="active-link">
                        <div className="list-ele">
                            <ChartBarIcon className="side-icon" />
                            <span className=" text">Data Science</span>
                        </div>
                    </NavLink>
                    <NavLink exact to="/workstreet/core" activeClassName="active-link">
                        <div className="list-ele">
                            <ChipIcon className="side-icon" />
                            <span className=" text">Core</span>
                        </div>
                    </NavLink>
                    <NavLink exact to="/workstreet/marketing" activeClassName="active-link">
                        <div className="list-ele">
                            <CurrencyDollarIcon className="side-icon" />
                            <span className=" text">Marketing</span>
                        </div>
                    </NavLink>
                    <NavLink exact to="/workstreet/others" activeClassName="active-link">
                        <div className="list-ele">
                            <ViewGridAddIcon className="side-icon" />
                            <span className=" text">Others</span>
                        </div>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/workstreet/profile" activeClassName="active-link">
                        <div className="list-ele">
                            <UserIcon className="side-icon" />
                            <span className="text">Profile</span>
                        </div>
                    </NavLink>
                    <NavLink to="/workstreet/sign-out" activeClassName="active-link">
                        <div className="list-ele">
                            <LogoutIcon className="side-icon" />
                            <span className="text">Logout</span>
                        </div>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default PosterSidebar
