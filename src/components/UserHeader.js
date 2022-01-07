import React from 'react'
import '../css/UserHeader.css'
import logo from '../images/logo.svg'

class UserHeader extends React.Component {
    render() {
        return (
            <div>
                <div className="userheader">
                    <img src={logo} alt="Logo" />
                    <button>
                        <i className="fas fa-power-off fa-x"></i> Logout
                    </button>
                </div>

                <hr style={{ height: '2px', borderWidth: '0px', backgroundColor: '#808080' }} />
            </div>
        )
    }
}

export default UserHeader
