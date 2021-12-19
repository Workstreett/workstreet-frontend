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
            <div>
                <div>
                    <div>Subscribe us for amazing feeds!</div>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            name="submailid"
                            className=""
                            id="submailid"
                            type="email"
                            onChange={this.handleChange}
                            value={this.state.mailid}
                            placeholder="Email address"
                        />
                        <br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div>
                    <div>
                        <div>CONTACT US</div>
                        <div>
                            <ul className="fa-ul">
                                <li>
                                    <span className="fa-li">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                    careers@workstreet.tech
                                </li>
                                <li>
                                    <span className="fa-li">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                    head@workstreet.tech
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Landing4
