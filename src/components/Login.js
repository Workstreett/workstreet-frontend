import { Component } from 'react'
import { getSVGForPassword } from '../helpers/Functions'
import login from '../img/login.png'
import '../css/Login.css'
import axios from 'axios'
import { AuthContext } from '../contexts/AuthContext'
import { withRouter } from 'react-router'
class Login extends Component {
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
            if (res.data.user_id !== undefined) {
                temp.setUserDetails(res.data)
                history.push('/workstreet/profile')
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
            //            <div className="logo_container">
            //                <div className="Login">
            //                    <img className="loginImg" src={login} alt="login page" />
            //                    <div>
            //                        <AuthContext.Consumer>
            //                            {(context) => {
            //                                return (
            //                                    <>
            //                                        <div className="loginCard">
            //                                            <h1 className="companyName">WorkStreet</h1>
            //                                            <form
            //                                                onSubmit={(event) => {
            //                                                    this.handleSubmit(event, context, history)
            //                                                }}
            //                                                className="lgn-form"
            //                                            >
            //                                                <input
            //                                                    className=" input"
            //                                                    type="text"
            //                                                    name="username"
            //                                                    id="user"
            //                                                    onChange={this.handleChange}
            //                                                    value={this.state.username}
            //                                                    placeholder="Username"
            //                                                />
            //                                                <br />
            //                                                <div className="lgn-passwd-container">
            //                                                    <input
            //                                                        className=" input pInput"
            //                                                        type={
            //                                                            this.state.showPassword
            //                                                                ? 'text'
            //                                                                : 'password'
            //                                                        }
            //                                                        name="password"
            //                                                        id="passwd"
            //                                                        onChange={this.handleChange}
            //                                                        value={this.state.password}
            //                                                        placeholder="Password"
            //                                                    />
            //
            //                                                    <label
            //                                                        htmlFor="eye"
            //                                                        id="password-container"
            //                                                        className="lgn-eye"
            //                                                    >
            //                                                        {getSVGForPassword(this.state.showPassword)}
            //                                                    </label>
            //                                                    <input
            //                                                        style={style}
            //                                                        type="checkbox"
            //                                                        name="showPassword"
            //                                                        checked={this.state.showPassword}
            //                                                        onChange={this.handleChange}
            //                                                        id="eye"
            //                                                    />
            //                                                </div>
            //                                                <br />
            //                                                <button className="btn-std" type="submit">
            //                                                    Log In
            //                                                </button>
            //                                            </form>
            //                                        </div>
            //                                        <div className="card-2">
            //                                            <p className="para">
            //                                                Don&apos;t have an account?{' '}
            //                                                <a href="/signup">Sign up</a>
            //                                            </p>
            //                                        </div>
            //                                    </>
            //                                )
            //                            }}
            //                        </AuthContext.Consumer>
            //                    </div>
            //                </div>
            //            </div>
            <section>
                <div className="image-section">
                    <img className="loginImg" src={login} alt="login page" />
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="407"
                        height="339.2"
                        viewBox="fill"
                    >
                        <rect fill="#6E74F7" width="1080" height="900" />
                        <g fillOpacity="0.12">
                            <polygon fill="#444" points="90 150 0 300 180 300" />
                            <polygon points="90 150 180 0 0 0" />
                            <polygon fill="#AAA" points="270 150 360 0 180 0" />
                            <polygon fill="#DDD" points="450 150 360 300 540 300" />
                            <polygon fill="#999" points="450 150 540 0 360 0" />
                            <polygon points="630 150 540 300 720 300" />
                            <polygon fill="#DDD" points="630 150 720 0 540 0" />
                            <polygon fill="#444" points="810 150 720 300 900 300" />
                            <polygon fill="#FFF" points="810 150 900 0 720 0" />
                            <polygon fill="#DDD" points="990 150 900 300 1080 300" />
                            <polygon fill="#444" points="990 150 1080 0 900 0" />
                            <polygon fill="#DDD" points="90 450 0 600 180 600" />
                            <polygon points="90 450 180 300 0 300" />
                            <polygon fill="#666" points="270 450 180 600 360 600" />
                            <polygon fill="#AAA" points="270 450 360 300 180 300" />
                            <polygon fill="#DDD" points="450 450 360 600 540 600" />
                            <polygon fill="#999" points="450 450 540 300 360 300" />
                            <polygon fill="#999" points="630 450 540 600 720 600" />
                            <polygon fill="#FFF" points="630 450 720 300 540 300" />
                            <polygon points="810 450 720 600 900 600" />
                            <polygon fill="#DDD" points="810 450 900 300 720 300" />
                            <polygon fill="#AAA" points="990 450 900 600 1080 600" />
                            <polygon fill="#444" points="990 450 1080 300 900 300" />
                            <polygon fill="#222" points="90 750 0 900 180 900" />
                            <polygon points="270 750 180 900 360 900" />
                            <polygon fill="#DDD" points="270 750 360 600 180 600" />
                            <polygon points="450 750 540 600 360 600" />
                            <polygon points="630 750 540 900 720 900" />
                            <polygon fill="#444" points="630 750 720 600 540 600" />
                            <polygon fill="#AAA" points="810 750 720 900 900 900" />
                            <polygon fill="#666" points="810 750 900 600 720 600" />
                            <polygon fill="#999" points="990 750 900 900 1080 900" />
                            <polygon fill="#999" points="180 0 90 150 270 150" />
                            <polygon fill="#444" points="360 0 270 150 450 150" />
                            <polygon fill="#FFF" points="540 0 450 150 630 150" />
                            <polygon points="900 0 810 150 990 150" />
                            <polygon fill="#222" points="0 300 -90 450 90 450" />
                            <polygon fill="#FFF" points="0 300 90 150 -90 150" />
                            <polygon fill="#FFF" points="180 300 90 450 270 450" />
                            <polygon fill="#666" points="180 300 270 150 90 150" />
                            <polygon fill="#222" points="360 300 270 450 450 450" />
                            <polygon fill="#FFF" points="360 300 450 150 270 150" />
                            <polygon fill="#444" points="540 300 450 450 630 450" />
                            <polygon fill="#222" points="540 300 630 150 450 150" />
                            <polygon fill="#AAA" points="720 300 630 450 810 450" />
                            <polygon fill="#666" points="720 300 810 150 630 150" />
                            <polygon fill="#FFF" points="900 300 810 450 990 450" />
                            <polygon fill="#999" points="900 300 990 150 810 150" />
                            <polygon points="0 600 -90 750 90 750" />
                            <polygon fill="#666" points="0 600 90 450 -90 450" />
                            <polygon fill="#AAA" points="180 600 90 750 270 750" />
                            <polygon fill="#444" points="180 600 270 450 90 450" />
                            <polygon fill="#444" points="360 600 270 750 450 750" />
                            <polygon fill="#999" points="360 600 450 450 270 450" />
                            <polygon fill="#666" points="540 600 630 450 450 450" />
                            <polygon fill="#222" points="720 600 630 750 810 750" />
                            <polygon fill="#FFF" points="900 600 810 750 990 750" />
                            <polygon fill="#222" points="900 600 990 450 810 450" />
                            <polygon fill="#DDD" points="0 900 90 750 -90 750" />
                            <polygon fill="#444" points="180 900 270 750 90 750" />
                            <polygon fill="#FFF" points="360 900 450 750 270 750" />
                            <polygon fill="#AAA" points="540 900 630 750 450 750" />
                            <polygon fill="#FFF" points="720 900 810 750 630 750" />
                            <polygon fill="#222" points="900 900 990 750 810 750" />
                            <polygon fill="#222" points="1080 300 990 450 1170 450" />
                            <polygon fill="#FFF" points="1080 300 1170 150 990 150" />
                            <polygon points="1080 600 990 750 1170 750" />
                            <polygon fill="#666" points="1080 600 1170 450 990 450" />
                            <polygon fill="#DDD" points="1080 900 1170 750 990 750" />
                        </g>
                    </svg> */}
                </div>
                <div className="form-section">
                    <AuthContext.Consumer>
                        {(context) => {
                            return (
                                <form
                                    className="form-box"
                                    onSubmit={(event) => {
                                        this.handleSubmit(event, context, history)
                                    }}
                                >
                                    <h2 className="form-box-company-name">
                                        Workstreet.<span>Tech</span>
                                    </h2>
                                    <h2 className="form-box-heading">Login</h2>
                                    <div className="form-box-field">
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="text"
                                            placeholder="john_doe"
                                            name="username"
                                            id="user"
                                            onChange={this.handleChange}
                                            value={this.state.username}
                                        ></input>
                                    </div>
                                    <div className="form-box-field">
                                        <label htmlFor="password">Password</label>
                                        <div className="form-box-password-field">
                                            <input
                                                placeholder="Min. 8 characters"
                                                type={this.state.showPassword ? 'text' : 'password'}
                                                name="password"
                                                id="passwd"
                                                onChange={this.handleChange}
                                                value={this.state.password}
                                            ></input>
                                            <label htmlFor="eye" className="lgn-eye">
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
                                    </div>
                                    <div className="form-box-field">
                                        <input type="submit" value="Login"></input>
                                    </div>
                                    <div className="form-box-field">
                                        <p>
                                            Don&apos;t have an account?{' '}
                                            <a href="/signup">Sign up</a>
                                        </p>
                                    </div>
                                </form>
                            )
                        }}
                    </AuthContext.Consumer>
                </div>
            </section>
        )
    }
}

export default withRouter(Login)
