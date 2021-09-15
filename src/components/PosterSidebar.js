import React from 'react'
import '../css/sidestyle.css'
import { NavLink } from 'react-router-dom'

class PosterSidebar extends React.Component {
    render() {
        return (
            <div className="side-menu side-menu-flex">
                <div>
                    <NavLink exact to="/workstreet/" activeClassName="active-link">
                        <div className="list-ele">
                            <i className="fas fa-home fa-2x side-icon"></i>
                            <span className="text">Home</span>
                        </div>
                    </NavLink>
                    <NavLink exact to="/workstreet/companies" activeClassName="active-link">
                        <div className="list-ele">
                            <i className="fas fa-laptop fa-2x side-icon"></i>
                            <span className="text">SDE</span>
                        </div>
                    </NavLink>
                    <NavLink exact to="/workstreet/consultancy" activeClassName="active-link">
                        <div className="list-ele">
                            <i className="fas fa-chart-line fa-2x side-icon"></i>
                            <span className=" text">Data Science</span>
                        </div>
                    </NavLink>
                    <NavLink exact to="/workstreet/core" activeClassName="active-link">
                        <div className="list-ele">
                            <i className="fas fa-user-hard-hat fa-2x side-icon"></i>
                            <span className=" text">Core</span>
                        </div>
                    </NavLink>
                    <NavLink exact to="/workstreet/about-us" activeClassName="active-link">
                        <div className="list-ele">
                            <i className="fas fa-search-dollar fa-2x side-icon"></i>
                            <span className=" text">Marketing</span>
                        </div>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/workstreet/dashboard" activeClassName="active-link">
                        <div className="list-ele">
                            <i className="fas fa-user-circle fa-2x side-icon"></i>
                            <span className="text">Profile</span>
                        </div>
                    </NavLink>
                    <NavLink to="/workstreet/sign-out" activeClassName="active-link">
                        <div className="list-ele">
                            <i className="fas fa-sign-out-alt fa-2x side-icon"></i>
                            <span className="text">Logout</span>
                        </div>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default PosterSidebar
