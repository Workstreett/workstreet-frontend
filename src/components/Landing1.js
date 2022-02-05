import React from 'react'
import logo from '../images/logo.svg'
import '../css/Landing1.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

class Landing1 extends React.Component {
    state = { email: '', isLoading: false }

    handleChange = (event) => {
        const { value } = event.target
        this.setState({
            email: value
        })
    }

    handleSubmit = (event) => {
        this.setState({
            isLoading: true
        })
        axios
            .post('https://workstreet.herokuapp.com/subscribe', { email: this.state.email })
            .then((res) => {
                // console.log(res)
                toast.success(
                    `The email ${this.state.email} has been added in the subscription list.`,
                    {
                        position: 'bottom-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        style: { color: '#071e3d' },
                        progressStyle: { background: '#ffa45c' }
                    }
                )
                this.setState({
                    email: '',
                    isLoading: false
                })
            })
            .catch((err) => {
                // eslint-disable-next-line no-console
                console.log(err.message)
                toast.error("Sorry, Can't add your email right now, Please try again Later", {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined
                })
            })
        event.preventDefault()
    }

    render() {
        return (
            <div className="landing1">
                <img src={logo} alt="logo" />
                {/* <form className="landing1-form" onSubmit={this.handleSubmit}>
                    <input
                        className="input_mail"
                        placeholder="Enter Your Email Address"
                        value={this.state.email}
                        type="email"
                        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                        required
                        onChange={this.handleChange}
                    />
                    <button
                        className="subscribe_button"
                        type="submit"
                        disabled={this.state.isLoading}
                    >
                        Subscribe
                    </button>
                </form> */}
                <p className="landing1-text">
                    Get An Intern{' '}
                    <Link className="landing1-signIn" to="/googleauth">
                        Sign In!
                    </Link>
                </p>
            </div>
        )
    }
}
export default Landing1
