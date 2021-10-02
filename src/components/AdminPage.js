import React from 'react'
import { Sections } from '../data/section'
import '../css/sidestyle.css'
import '../css/AdminPage.css'
import { NavLink } from 'react-router-dom'
import { PlusCircleIcon } from '@heroicons/react/outline'
import AdminPosters from './AdminPosters'

class AdminPage extends React.Component {
    state = {
        section: 'core'
    }

    updateSection(val) {
        this.setState({
            section: val
        })
    }

    render() {
        console.log(this.state.section)
        return (
            <div className="adminpage-div">
                <div className="adminpage-div-1">
                    <NavLink exact to="/admin/postform" activeClassName="active-link">
                        <div className="plus-icon">
                            <PlusCircleIcon className="side-icon" />
                        </div>
                    </NavLink>
                </div>
                <div className="adminpage-div-2 side-menu side-menu-flex">
                    <ul>
                        {Sections.map((item, i) => {
                            return (
                                <NavLink
                                    exact
                                    to="/admin"
                                    onClick={() => this.updateSection(item)}
                                    activeClassName="active-link"
                                    key={i}
                                >
                                    <div className="list-ele">
                                        <span className="text">{item}</span>
                                    </div>
                                </NavLink>
                            )
                        })}
                    </ul>
                </div>
                <AdminPosters key={this.state.section} section={this.state.section} />
            </div>
        )
    }
}
export default AdminPage
