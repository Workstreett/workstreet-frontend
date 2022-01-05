import React from 'react'
import '../css/GoogleLogin.css'
import logo from '../images/logo.svg'

class GoogleLogin extends React.Component {
    render() {
        return (
            <div className="Glogin">
                <div className="Glogin-box">
                    <img src={logo} alt="Workstreet-logo" />
                    <h1>One step solution to track your application status</h1>
                    <button>
                        <i className="fab fa-google-plus-g Glogin-icon"></i>
                        Sign in With Google
                    </button>
                    <div className="copyright"> &copy;2022 All Right Reserved</div>
                </div>
            </div>
        )
    }
}

export default GoogleLogin
