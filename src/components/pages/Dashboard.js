import React from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import axios from 'axios'
import '../../css/dashboard.css'

class Dashboard extends React.Component {
    static contextType = AuthContext

    handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post('https://workstreet.herokuapp.com/user', this.context)
            .then((res) => {
                this.context.setUserDetails({ ...this.context })
                alert('User has been updated')
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    handleInputChange = (e) => {
        const { name, value } = e.target
        this.context.setDetail(name, value)
    }

    render() {
        return (
            <>
                <div className="form-container">
                    <div className="profile-form">
                        <h1>Your Profile</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-field">
                                <input
                                    type="text"
                                    id="fullname"
                                    name="fullname"
                                    value={this.context.fullname}
                                    onChange={this.handleInputChange}
                                    className="form-field-hover"
                                />
                                <span className="focus-border">
                                    <i></i>
                                </span>
                            </div>
                            <div className="form-field">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={this.context.password}
                                    onChange={this.handleInputChange}
                                    className="form-field-hover"
                                />
                                <span className="focus-border">
                                    <i></i>
                                </span>
                            </div>
                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    name="officialmailid"
                                    value={this.context.officialmailid}
                                    onChange={this.handleInputChange}
                                    disabled
                                />
                            </div>
                            <div className="same-row">
                                <div className="form-field">
                                    <input
                                        type="text"
                                        id="branch"
                                        name="branch"
                                        value={this.context.branch}
                                        onChange={this.handleInputChange}
                                        className="form-field-hover"
                                    />
                                    <span className="focus-border">
                                        <i></i>
                                    </span>
                                </div>
                                <div className="form-select">
                                    <select
                                        id="year"
                                        name="year"
                                        value={this.context.year}
                                        onChange={this.handleInputChange}
                                        style={{ outline: 'none' }}
                                    >
                                        <option value="First Year">Freshman</option>
                                        <option value="Second Year">Sophomore</option>
                                        <option value="Third Year">Junior</option>
                                        <option value="Fourth Year">Senior</option>
                                        <option value="Fifth Year">Super Senior</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-field">
                                <input
                                    type="text"
                                    id="institute"
                                    name="institute"
                                    value={this.context.institute}
                                    onChange={this.handleInputChange}
                                    className="form-field-hover"
                                />
                                <span className="focus-border">
                                    <i></i>
                                </span>
                            </div>

                            <input type="submit" value="Save Changes" />
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default Dashboard
