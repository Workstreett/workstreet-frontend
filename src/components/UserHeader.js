import React from 'react'
import { withRouter } from 'react-router-dom'
import '../css/UserHeader.css'
import logo from '../images/logo.svg'
import { GoogleAuthContext } from '../contexts/GoogleAuthContext'

class UserHeader extends React.Component {
    static contextType = GoogleAuthContext

    render() {
        return (
            <div className="userheader">
                <a href="/">
                    <img className="userheader-logo" src={logo} alt="Logo" />
                </a>
                <div className="userheader-innerflex">
                    <img src={this.context.userImg} alt="user-dp" />

                    <p>{this.context.name}</p>

                    <button
                        onClick={() => {
                            this.context.setDetails({})
                            localStorage.removeItem('token')
                            this.props.history.push('/googleauth')
                        }}
                    >
                        <i className="fas fa-power-off fa-x"></i> Logout
                    </button>
                </div>
                {/* <hr style={{ height: '2px', borderWidth: '0px', backgroundColor: '#808080' }} /> */}
            </div>
        )
    }
}

export default withRouter(UserHeader)
