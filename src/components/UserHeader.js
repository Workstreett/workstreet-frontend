import React from 'react'
import { withRouter } from 'react-router-dom'
import '../css/UserHeader.css'
import logo from '../images/logo.svg'

class UserHeader extends React.Component {
    render() {
        return (
            <div className="userheader">
                <img className="userheader-logo" src={logo} alt="Logo" />
                <div className="userheader-innerflex">
                    <img
                        src="https://lh3.googleusercontent.com/a/AATXAJy3xWOki6DHu_Kh1Ripe8bJQ5f6-70QcKxKMffl=s288-p-rw-no-mo"
                        alt="user-dp"
                    />

                    <p>Jhon Doe</p>

                    <button
                        onClick={() => {
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
