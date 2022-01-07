import React from 'react'
import { withRouter } from 'react-router-dom'
import '../css/UserHeader.css'
import logo from '../images/logo.svg'

class UserHeader extends React.Component {
    render() {
        return (
            <div>
                <div className="userheader">
                    <img src={logo} alt="Logo" />
                    <button
                        onClick={() => {
                            this.props.history.push('/googleauth')
                        }}
                    >
                        <i className="fas fa-power-off fa-x"></i> Logout
                    </button>
                </div>

                <hr style={{ height: '2px', borderWidth: '0px', backgroundColor: '#000000' }} />
            </div>
        )
    }
}

export default withRouter(UserHeader)
