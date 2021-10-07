import React from 'react'
import { getSVGForPassword } from '../helpers/Functions'
import Img from '../img/login.png'
import styles from '../css/Signup.module.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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

            if (response.data === 'u') {
                toast.error('Username already exists', {
                    position: 'bottom-right',
                    theme: 'colored'
                })
            } else if (response.data === 'p') {
                toast.error(
                    'Password must contain 1 Uppercase letter, 1 Numeral letter,1 Lowercase letter and 6 characters',
                    {
                        position: 'bottom-right',
                        theme: 'colored'
                    }
                )
            } else if (response.data === 'm') {
                toast.error('Email Address not allowed', {
                    position: 'bottom-right',
                    theme: 'colored'
                })
            } else if (response.data === 'signedUp') {
                toast.success('User has been added, pLease verify your mailId', {
                    position: 'bottom-right',
                    theme: 'colored'
                })
            } else {
                toast.error(
                    'Some error occured while connecting the server, please try again later',
                    {
                        position: 'bottom-right',
                        theme: 'colored'
                    }
                )
            }
        } catch (err) {
            toast.error(err.message, {
                position: 'bottom-right',
                theme: 'colored'
            })
        }
    }

    render() {
        return (
            // <div className="sgn-main_container">
            //    <div className="sgn-formContainer">
            //        <div className="sgn-image">
            //            <img src={Img} alt="Login Illustration" />
            //        </div>
            //        <div className="sgn-form">
            //            <h1>Enter Your credentials</h1>
            //            <p>Please ensure that the provided credentials are valid</p>
            //            <form onSubmit={this.handleSubmit} className="sgn-box">
            //                <input
            //                    name="username"
            //                    className="sgn-text-box"
            //                    id="user"
            //                    type="text"
            //                    onChange={this.handleChange}
            //                    value={this.state.username}
            //                    placeholder="Username"
            //                />
            //                <br />
            //                <div className="passwd-container">
            //                    <input
            //                        name="password"
            //                        className="sgn-text-box"
            //                        id="passwd"
            //                        type={this.state.showPassword ? 'text' : 'password'}
            //                        onChange={this.handleChange}
            //                        value={this.state.password}
            //                        placeholder="Password"
            //                    />
            //                    <label
            //                        htmlFor="sgn-eye"
            //                        id="password-container"
            //                        className="sgn-eye"
            //                    >
            //                        {getSVGForPassword(this.state.showPassword)}
            //                    </label>
            //                    <input
            //                        type="checkbox"
            //                        style={{ display: 'none' }}
            //                        name="showPassword"
            //                        checked={this.state.showPassword}
            //                        onChange={this.handleChange}
            //                        id="sgn-eye"
            //                    />
            //                </div>
            //                <input
            //                    name="confirm"
            //                    className="sgn-text-box"
            //                    id="conf-passwd"
            //                    type={this.state.showPassword ? 'text' : 'password'}
            //                    onChange={this.handleChange}
            //                    value={this.state.confirm}
            //                    placeholder="Confirm Password"
            //                />
            //                <br />
            //                <input
            //                    name="fullname"
            //                    className="sgn-text-box"
            //                    id="fullname"
            //                    type="text"
            //                    onChange={this.handleChange}
            //                    value={this.state.fullname}
            //                    placeholder="Full Name"
            //                />
            //                <br />
            //                <input
            //                    name="branch"
            //                    className="sgn-text-box"
            //                    id="branch"
            //                    type="text"
            //                    onChange={this.handleChange}
            //                    value={this.state.branch}
            //                    placeholder="Branch"
            //                />
            //                <br />
            //                <select
            //                    id="currYear"
            //                    value={this.state.year}
            //                    onChange={this.handleChange}
            //                    name="year"
            //                >
            //                    <option value="First Year">Freshman</option>
            //                    <option value="Second Year">Sophomore</option>
            //                    <option value="Third Year">Junior</option>
            //                    <option value="Fourth Year">Senior</option>
            //                    <option value="Fifth Year">Super Senior</option>
            //                </select>
            //                <br />
            //                <input
            //                    name="officialmailid"
            //                    className="sgn-text-box"
            //                    id="officialmailid"
            //                    type="email"
            //                    onChange={this.handleChange}
            //                    value={this.state.officialmailid}
            //                    placeholder="Official MailId"
            //                />
            //                <br />
            //                <input
            //                    name="institute"
            //                    className="sgn-text-box"
            //                    id="insti"
            //                    type="text"
            //                    onChange={this.handleChange}
            //                    value={this.state.institute}
            //                    placeholder="Institute"
            //                />
            //                <br />
            //                <button className="btn-std" type="submit">
            //                    Sign up
            //                </button>
            //            </form>
            //        </div>
            //    </div>
            // </div>
            <section className={styles.signup_section}>
                <ToastContainer />
                <div className={styles.image_section}>
                    <img src={Img} alt="signup page" />
                </div>
                <div className={styles.form_section}>
                    <form className={styles.form_box} onSubmit={this.handleSubmit}>
                        <h2 className={styles.form_box_company_name}>
                            Workstreet.<span>Tech</span>
                        </h2>
                        <h2 className={styles.form_box_heading}>SignUp</h2>
                        <div className={styles.form_box_field}>
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                placeholder="Your Username"
                                name="username"
                                id="user"
                                onChange={this.handleChange}
                                value={this.state.username}
                            ></input>
                        </div>
                        <div className={styles.form_box_same_row}>
                            <div className={styles.form_box_field}>
                                <label htmlFor="password">Password</label>
                                <div className={styles.form_box_password_field}>
                                    <input
                                        placeholder="Min. length 6"
                                        type="password"
                                        name="password"
                                        id="passwd"
                                        onChange={this.handleChange}
                                        value={this.state.password}
                                    ></input>
                                </div>
                            </div>
                            <div className={styles.form_box_field}>
                                <label htmlFor="confirm">Confirm Password</label>
                                <div className={styles.form_box_password_field}>
                                    <input
                                        type={this.state.showPassword ? 'text' : 'password'}
                                        placeholder="Min. length 6"
                                        name="confirm"
                                        id="confirm"
                                        onChange={this.handleChange}
                                        value={this.state.confirm}
                                    ></input>
                                    <label htmlFor="eye" className={styles.lgn_eye}>
                                        {getSVGForPassword(this.state.showPassword)}
                                    </label>
                                    <input
                                        style={{ display: 'none' }}
                                        type="checkbox"
                                        name="showPassword"
                                        checked={this.state.showPassword}
                                        onChange={this.handleChange}
                                        id="eye"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={styles.form_box_field}>
                            <label htmlFor="fullname">Full Name</label>
                            <input
                                type="text"
                                placeholder="Name"
                                name="fullname"
                                id="fullname"
                                onChange={this.handleChange}
                                value={this.state.fullname}
                            ></input>
                        </div>
                        <div className={styles.form_box_field}>
                            <label htmlFor="emailId">Institute Email Id</label>
                            <input
                                type="text"
                                placeholder="student@institute.in"
                                name="officialmailid"
                                id="officialmailid"
                                onChange={this.handleChange}
                                value={this.state.officialmailid}
                            ></input>
                        </div>
                        <div className={styles.form_box_same_row}>
                            <div className={`${styles.form_box_field} ${styles.right_margin}`}>
                                <label htmlFor="branch">Branch</label>
                                <input
                                    type="text"
                                    placeholder="Engineering Branch"
                                    name="branch"
                                    id="branch"
                                    onChange={this.handleChange}
                                    value={this.state.branch}
                                ></input>
                            </div>
                            <div className={styles.form_box_field}>
                                <label htmlFor="year">Year</label>
                                <select
                                    id="year"
                                    value={this.state.year}
                                    onChange={this.handleChange}
                                    name="year"
                                    className={styles.form_box_field_select}
                                >
                                    <option value="First Year">Freshman</option>
                                    <option value="Second Year">Sophomore</option>
                                    <option value="Third Year">Junior</option>
                                    <option value="Fourth Year">Senior</option>
                                    <option value="Fifth Year">Super Senior</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.form_box_field}>
                            <label htmlFor="institute">Institute</label>
                            <input
                                type="text"
                                placeholder="IIT/IIIT/NIT"
                                name="institute"
                                id="institute"
                                onChange={this.handleChange}
                                value={this.state.institute}
                            ></input>
                        </div>
                        <div className={styles.form_box_field}>
                            <input type="submit" value="Sign Up"></input>
                        </div>
                        <div className={styles.form_box_field}>
                            <p>
                                Already have an account? <a href="/login">Login</a>
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default Signup
