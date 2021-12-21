import React from 'react'
import '../css/Landing4.css'
import axios from 'axios'

class Landing4 extends React.Component {
    constructor() {
        super()
        this.state = {
            mailid: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ mailid: event.target.value })
        // console.log(this.state.mailid)
    }

    handleSubmit(event) {
        axios
            .post('https://workstreet.herokuapp.com/subscribe', { email: this.state.mailid })
            .then((res) => {
                // console.log(res)
                alert(
                    `The email ${this.state.mailid} has been added to the subscription list, Thank You`
                )
                this.setState({
                    mailid: ''
                })
            })
            .catch((err) => {
                console.log(err.message)
            })
        // console.log(this.state.mailid)
        event.preventDefault()
    }

    render() {
        return (
            <div className="l4-flex">
                <div className="l4-subs">
                    <h6>For amazing opportunities & articles</h6>

                    <h1>Subscribe Us!</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="l4-input">
                            <input
                                type="email"
                                id="submailid"
                                name="submailid"
                                value={this.state.mailid}
                                onChange={this.handleChange}
                                className="l4-input-hover"
                                placeholder="Enter Your Email address"
                                required
                            />
                            <span className="l4-input-border">
                                <i></i>
                            </span>
                        </div>
                        <button className="l4-but" type="submit" value="Submit">
                            <span>Subscribe</span>
                        </button>
                    </form>
                </div>
                <div className="l4-contact">
                    <h1>Contact Workstreet</h1>
                    <div className="l4-contact-text">We would love to hear from you!</div>
                    <div className="l4-handle">
                        <div className="l4-handle-item">
                            <a href="mailto:careers@workstreet.tech">
                                <i className="fas fa-envelope"></i>

                                <div>careers@workstreet.tech</div>
                            </a>
                        </div>
                        <div className="l4-handle-item">
                            <a href="https://www.linkedin.com/company/wworkstreet">
                                <i className="fab fa-linkedin"></i>
                                <div>Linkedin Handle</div>
                            </a>
                        </div>
                        <div className="l4-handle-item">
                            <a href="mailto:head@workstreet.tech">
                                <i className="fas fa-envelope"></i>
                                <div>head@workstreet.tech</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Landing4
