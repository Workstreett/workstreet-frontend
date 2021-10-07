import React from 'react'
import { Sections } from '../data/section'
import '../css/AdminPage.css'
import { PlusCircleIcon } from '@heroicons/react/outline'
import AdminPosters from './AdminPosters'
import { Link, NavLink } from 'react-router-dom'

class AdminPage extends React.Component {
    state = {
        section: 'Core',
        details: {}
    }

    componentDidMount() {
        document.getElementById(this.state.section).classList.add('active-list')
    }

    updateSection = (event) => {
        const { name, id, type } = event.target
        if (type === 'button') {
            document.getElementById(this.state.section).classList.remove('active-list')
            event.target.classList.add('active-list')
            this.setState({ [name]: id })
        } else {
            this.setState({ [name]: id })
        }
    }

    render() {
        return (
            <div className="adminpage-div">
                <div className="adminpage-div-1">
                    <Link to="/">Home</Link>
                    <NavLink
                        className="Addform-btn"
                        to={{
                            pathname: '/admin/postform',
                            details: {}
                        }}
                        onClick={this.updateSection}
                    >
                        Create new Post
                        <PlusCircleIcon className="icon" />
                    </NavLink>
                </div>
                <div className="adminpage-div-2">
                    <div>
                        {Sections.map((item, i) => {
                            return (
                                <button
                                    onClick={this.updateSection}
                                    type="button"
                                    name="section"
                                    id={item}
                                    key={i}
                                >
                                    {item}
                                </button>
                            )
                        })}
                    </div>
                </div>
                <AdminPosters section={this.state.section} />
            </div>
        )
    }
}
export default AdminPage
