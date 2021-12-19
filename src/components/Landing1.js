import React from 'react'
import logo from '../images/logo.jpeg'
import '../css/Landing1.css'

class Landing1 extends React.Component {
    render() {
        return (
            <div className="landing1">
                <img src={logo} alt="" width="300" height="50" />
                <form>
                    <input
                        className="input_mail"
                        placeholder="Enter your email"
                        type="email"
                        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                        required
                    />
                    <button className="subscribe_button" type="button">
                        Subscribe
                    </button>
                </form>
            </div>
        )
    }
}
export default Landing1
