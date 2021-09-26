import React from 'react'
import { getSVGForPassword } from '../helpers/Functions'
import login from '../img/login.png'
import '../login.css'
import Footer from './Footer'
import axios from 'axios'
import { AuthContext } from '../contexts/AuthContext'
import { withRouter } from 'react-router'
class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            showPassword: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        let { name, value } = event.target
        if (event.target.type === 'checkbox') value = event.target.checked
        this.setState({
            [name]: value
        })
    }

    async handleSubmit(event, temp, history) {
        event.preventDefault()
        try {
            const res = await axios.post('https://workstreet.herokuapp.com/login', this.state)
            // console.log(res.data)
            if (res.data.user_id !== undefined) {
                temp.setUserDetails(res.data)
                history.push('/workstreet/dashboard')
            }
            if (res.data === 'V') {
                alert('You are not verfied, first verify your account')
                this.setState({})
            } else if (res.data === 'U') {
                alert('The username and password are not correct')
                this.setState({})
            }
        } catch (err) {
            // console.log(err.message)
        }
    }

    render() {
        const style = {
            display: 'none'
        }
        const { history } = this.props
        return (
            <div className="logo_container">
                <div className="Login">
                    <img className="loginImg" src={login} alt="login page" />
                    <div>
                        <AuthContext.Consumer>
                            {(context) => {
                                return (
                                    <>
                                        <div className="loginCard">
                                            <h1 className="companyName">WorkStreet</h1>
                                            <form
                                                onSubmit={(event) => {
                                                    this.handleSubmit(event, context, history)
                                                }}
                                                className="lgn-form"
                                            >
                                                <input
                                                    className=" input"
                                                    type="text"
                                                    name="username"
                                                    id="user"
                                                    onChange={this.handleChange}
                                                    value={this.state.username}
                                                    placeholder="Username"
                                                />
                                                <br />
                                                <div className="lgn-passwd-container">
                                                    <input
                                                        className=" input pInput"
                                                        type={
                                                            this.state.showPassword
                                                                ? 'text'
                                                                : 'password'
                                                        }
                                                        name="password"
                                                        id="passwd"
                                                        onChange={this.handleChange}
                                                        value={this.state.password}
                                                        placeholder="Password"
                                                    />

                                                    <label
                                                        htmlFor="eye"
                                                        id="password-container"
                                                        className="lgn-eye"
                                                    >
                                                        {getSVGForPassword(this.state.showPassword)}
                                                    </label>
                                                    <input
                                                        style={style}
                                                        type="checkbox"
                                                        name="showPassword"
                                                        checked={this.state.showPassword}
                                                        onChange={this.handleChange}
                                                        id="eye"
                                                    />
                                                </div>
                                                <br />
                                                <button className="btn-std" type="submit">
                                                    Log In
                                                </button>
                                            </form>
                                        </div>
                                        <div className="card-2">
                                            <p className="para">
                                                Don&apos;t have an account?{' '}
                                                <a href="/signup">Sign up</a>
                                            </p>
                                        </div>
                                    </>
                                )
                            }}
                        </AuthContext.Consumer>
                    </div>
                </div>

                <fotter>
                    <Footer />
                </fotter>
            </div>
        )
    }
}

export default withRouter(Login)
