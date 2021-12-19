import React from 'react'
import '../css/Landing4.css'

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
        console.log(this.state.mailid)
    }

    handleSubmit(event) {
        alert('email was submitted: ' + this.state.mailid)
        console.log(this.state.mailid)
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
                        {/* <ul class="fa-ul">
  <li><span class="fa-li"><i class="fas fa-check-square"></i></span>List icons can</li>
  <li><span class="fa-li"><i class="fas fa-check-square"></i></span>be used to</li>
  <li><span class="fa-li"><i class="fas fa-spinner fa-pulse"></i></span>replace bullets</li>

</ul> */}
                        <div className="l4-handle-item">
                            <a href="mailto:careers@workstreet.tech">
                                <i className="far fa-envelope"></i>

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
                            <a href="mailto:careers@workstreet.tech">
                                <i className="far fa-envelope"></i>
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
