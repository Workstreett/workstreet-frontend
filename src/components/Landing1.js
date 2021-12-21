import React from 'react'
import logo from '../images/logo.jpeg'
import '../css/Landing1.css'
import axios from 'axios'

class Landing1 extends React.Component {
    state = { email: '' }

    handleChange = (event) => {
        const { value } = event.target
        this.setState({
            email: value
        })
    }

    handleSubmit = (event) => {
        axios
            .post('https://workstreet.herokuapp.com/subscribe', { email: this.state.email })
            .then((res) => {
                // console.log(res)
                alert(
                    `The email ${this.state.email} has been added to the subscription list, Thank You`
                )
                this.setState({
                    email: ''
                })
            })
            .catch((err) => {
                console.log(err.message)
            })
        event.preventDefault()
    }

    render() {
        return (
            <div className="landing1">
                <img src={logo} alt="" width="300" height="50" />
                <form className="landing1-form" onSubmit={this.handleSubmit}>
                    <input
                        className="input_mail"
                        placeholder="Enter Your Email Address"
                        value={this.state.email}
                        type="email"
                        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                        required
                        onChange={this.handleChange}
                    />
                    <button className="subscribe_button" type="submit">
                        Subscribe
                    </button>
                </form>
            </div>
        )
    }
}
export default Landing1
