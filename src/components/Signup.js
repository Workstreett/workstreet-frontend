import React from 'react'
import { getSVGForPassword } from './Functions'
import Img from '../img/login.png'
import '../css/signup.css'
import Footer from './Footer'
import axios from 'axios'

class Signup extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            confirm: '',
            fullname: '',
            branch: '',
            year: '',
            officialmailid: '',
            institute: '',
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

    async handleSubmit(event) {
        event.preventDefault()
        // console.log("Submitted", JSON.stringify(this.state));
        try {
            const response = await axios.post('https://workstreet.herokuapp.com/signup', this.state)
            console.log(response)
            if (response.data === 'u') {
                alert('username is in use, Choose something Else')
            } else if (response.data === 'p') {
                alert(
                    'The password has to contain a 1 Uppercase letter,1 numeral letter, 1 LowerCase letter, and atleast 6 characters'
                )
            } else if (response.data === 'm') {
                alert('The mailId provided is not allowed')
            } else if (response.data === 'signedUp') {
                alert('User has been added, PLease verify your mailId')
            } else {
                alert(
                    'Some Error occured while connecting the server please try again. After some time'
                )
            }
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div className="sgn-main_container">
                <div className="sgn-formContainer">
                    <div className="sgn-image">
                        <img src={Img} alt="Login Illustration" />
                    </div>
                    <div className="sgn-form">
                        <h1>Enter Your credentials</h1>
                        <p>Please ensure that the provided credentials are valid</p>
                        <form onSubmit={this.handleSubmit} className="sgn-box">
                            <input
                                name="username"
                                className="sgn-text-box"
                                id="user"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.username}
                                placeholder="Username"
                            />
                            <br />
                            <div className="passwd-container">
                                <input
                                    name="password"
                                    className="sgn-text-box"
                                    id="passwd"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    onChange={this.handleChange}
                                    value={this.state.password}
                                    placeholder="Password"
                                />
                                <label
                                    htmlFor="sgn-eye"
                                    id="password-container"
                                    className="sgn-eye"
                                >
                                    {getSVGForPassword(this.state.showPassword)}
                                </label>
                                <input
                                    type="checkbox"
                                    style={{ display: 'none' }}
                                    name="showPassword"
                                    checked={this.state.showPassword}
                                    onChange={this.handleChange}
                                    id="sgn-eye"
                                />
                            </div>
                            <input
                                name="confirm"
                                className="sgn-text-box"
                                id="conf-passwd"
                                type={this.state.showPassword ? 'text' : 'password'}
                                onChange={this.handleChange}
                                value={this.state.confirm}
                                placeholder="Confirm Password"
                            />
                            <br />
                            <input
                                name="fullname"
                                className="sgn-text-box"
                                id="fullname"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.fullname}
                                placeholder="Full Name"
                            />
                            <br />
                            <input
                                name="branch"
                                className="sgn-text-box"
                                id="branch"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.branch}
                                placeholder="Branch"
                            />
                            <br />
                            <select
                                id="currYear"
                                value={this.state.year}
                                onChange={this.handleChange}
                                name="year"
                            >
                                <option value="First Year">Freshman</option>
                                <option value="Second Year">Sophomore</option>
                                <option value="Third Year">Junior</option>
                                <option value="Fourth Year">Senior</option>
                                <option value="Fifth Year">Super Senior</option>
                            </select>
                            <br />
                            <input
                                name="officialmailid"
                                className="sgn-text-box"
                                id="officialmailid"
                                type="email"
                                onChange={this.handleChange}
                                value={this.state.officialmailid}
                                placeholder="Official MailId"
                            />
                            <br />
                            <input
                                name="institute"
                                className="sgn-text-box"
                                id="insti"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.institute}
                                placeholder="Institute"
                            />
                            <br />
                            <button className="btn-std" type="submit">
                                Sign up
                            </button>
                        </form>
                    </div>
                </div>

                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default Signup
