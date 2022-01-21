import React from 'react'
import '../css/GoogleLogin.css'
import logo from '../images/logo.svg'
import { withRouter } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'
import queryString from 'query-string'
import axios from 'axios'
import { GoogleAuthContext } from '../contexts/GoogleAuthContext'

class GoogleLogin extends React.Component {
    static contextType = GoogleAuthContext
    signInFailed = (error) => {
        toast.error(error, {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        })
        this.props.history.push('/googleauth')
    }

    handleClick = async () => {
        const oAuthURI = 'https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount'
        const form = document.createElement('form')
        form.setAttribute('method', 'GET')
        form.setAttribute('action', oAuthURI)

        const reqParams = {
            client_id: '280638292794-0tr4s9h193pcqejq3i97e205ahjpdpv1.apps.googleusercontent.com',
            scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/consumersurveys.readonly',
            redirect_uri: window.location.href,
            response_type: 'token',
            // access_type: 'offline',
            flowName: 'GeneralOAuthFlow',
            state: 'IAmNoob',
            prompt: 'select_account'
            // include_granted_scopes: false
        }

        for (const p in reqParams) {
            const input = document.createElement('input')
            input.setAttribute('type', 'hidden')
            input.setAttribute('name', p)
            input.setAttribute('value', reqParams[p])
            form.appendChild(input)
        }

        document.body.appendChild(form)
        form.submit()
    }

    async componentDidMount() {
        // console.log('Called!!')
        // console.log(this.props.location)
        // If User token exist then directly login...
        if (localStorage.getItem('token')) {
            this.props.history.push('/appliedCompany')
        }

        // If it is a redirect from google oAuth
        if (this.props.location.hash !== '') {
            const processedHash = queryString.parse(this.props.location.hash)
            // console.log(processedHash)
            if (processedHash.error) {
                // Processing Error
                this.signInFailed(processedHash.error)
            } else {
                if (processedHash.state === 'IAmNoob') {
                    // Processing Successfull Google Auth Results
                    try {
                        // console.log(processedHash)
                        const res = await axios.post(
                            'http://www.api.workstreet.tech/auth/google/callback',
                            {
                                access_token: processedHash.access_token
                            }
                        )
                        localStorage.setItem('token', res.data.token)
                        this.context.setDetails(res.data.user_data)
                        this.props.history.push('/appliedCompany')
                    } catch (err) {
                        // console.log(err)
                        this.signInFailed('Srry Connection to Server Failed')
                    }
                } else {
                    this.signInFailed("You can't hack this webPage ;) ;)")
                }
            }
        }
    }

    render() {
        // console.log(this.props.location.hash)
        return (
            <div className="Glogin">
                {this.props.location.hash === '' && (
                    <>
                        <ToastContainer />
                        <div className="Glogin-box">
                            <div>
                                <img src={logo} alt="Workstreet-logo" />
                                <h1>One step solution to track your application status</h1>
                            </div>
                            <div>
                                <button onClick={this.handleClick}>
                                    <i className="fab fa-google-plus-g Glogin-icon"></i>
                                    Sign in With Google
                                </button>
                                <div className="copyright"> &copy;2022 All Right Reserved</div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        )
    }
}

export default withRouter(GoogleLogin)
