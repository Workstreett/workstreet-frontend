import React from 'react'
import '../css/GoogleLogin.css'
import logo from '../images/logo.svg'
import { withRouter } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'
import queryString from 'query-string'

class GoogleLogin extends React.Component {
    handleClick = async () => {
        const oAuthURI = 'https://accounts.google.com/o/oauth2/v2/auth'
        const form = document.createElement('form')
        form.setAttribute('method', 'GET')
        form.setAttribute('action', oAuthURI)

        const reqParams = {
            client_id: '280638292794-0tr4s9h193pcqejq3i97e205ahjpdpv1.apps.googleusercontent.com',
            scope: 'profile email',
            redirect_uri: window.location.href,
            response_type: 'token',
            state: 'IAmNoob',
            prompt: 'consent'
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

    componentDidMount() {
        // console.log(this.props.location.hash)

        if (this.props.location.hash !== '') {
            const processedHash = queryString.parse(this.props.location.hash)
            // console.log(processedHash)
            if (processedHash.error) {
                toast.error(processedHash.error, {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                })
            } else {
                if (processedHash.state === 'IAmNoob') {
                    // Add code for calling api and transfering acess_token
                    this.props.history.push('/appliedCompany')
                }
            }
        }
    }

    render() {
        // console.log(this.props.location)
        return (
            <div className="Glogin">
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
            </div>
        )
    }
}

export default withRouter(GoogleLogin)
