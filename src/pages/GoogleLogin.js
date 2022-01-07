import React from 'react'
import '../css/GoogleLogin.css'
import logo from '../images/logo.svg'
import { GoogleLogin as GooglePlus } from 'react-google-login'
import { withRouter } from 'react-router'

class GoogleLogin extends React.Component {
    render() {
        return (
            <div className="Glogin">
                <div className="Glogin-box">
                    <div>
                        <img src={logo} alt="Workstreet-logo" />
                        <h1>One step solution to track your application status</h1>
                    </div>
                    <div>
                        <GooglePlus
                            clientId="280638292794-0tr4s9h193pcqejq3i97e205ahjpdpv1.apps.googleusercontent.com"
                            buttonText="Login"
                            cookiePolicy="single_host_origin"
                            scope={['profile', 'email']}
                            render={(renderProps) => {
                                console.log(renderProps)
                                return (
                                    <button
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                    >
                                        <i className="fab fa-google-plus-g Glogin-icon"></i>
                                        Sign in With Google
                                    </button>
                                )
                            }}
                            onSuccess={(res) => {
                                console.log(res)
                                this.props.history.push('/appliedCompany')
                            }}
                            onFailure={(err) => {
                                console.log(err)
                            }}
                        />
                        <div className="copyright"> &copy;2022 All Right Reserved</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(GoogleLogin)
