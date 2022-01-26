import React from 'react'
import '../css/Company.css'
import { withRouter } from 'react-router-dom'
import Img from '../images/logo.svg'
import axios from 'axios'
import { config } from '../env'

// It requires id(companyId),status("Accepted"||"Process"||"Rejected"),date(Round date), track(true || false)
class Company extends React.Component {
    state = {
        color: '#515151',
        display: 'none',
        logo: Img,
        info: '',
        role: '',
        name: ''
    }

    async componentDidMount() {
        const res = await axios.post(config.apiDomain + 'company/get/byId', {
            id: this.props.id,
            token: localStorage.getItem('token')
        })
        // console.log(this.props.key, this.props, res)

        let { color, display } = this.state
        // console.log(color, display)
        if (this.props.status === 'Accepted') {
            color = '#008000'
        } else if (this.props.status === 'Process') {
            color = '#FFBF00'
        } else {
            color = '#ff0000'
        }
        // console.log(color, display)
        if (this.props.track) display = 'inline-block'
        // console.log('Called Comapny.js', res, this.props)
        this.setState({
            color: color,
            display: display,
            info: res.data.desc,
            logo: res.data.logo,
            role: res.data.role,
            name: res.data.name
        })
    }

    render() {
        // console.log(this.props.key, this.state)
        // console.log(this.state.name, this.props.date, typeof this.props.date)
        let date = new Date(this.props.date).toDateString()
        if (date === 'Invalid Date') date = this.props.date
        return (
            <div className="company-card">
                <img src={this.state.logo} alt="comapny-logo" />
                <hr />
                <div className="company-info">{this.state.info}</div>
                <div className="company-shortdetails">
                    <div>
                        <b>Applied Role: </b>
                        {this.state.role}
                    </div>
                    <div>
                        <b>Applied Date: </b>
                        {date}
                    </div>
                    <div style={{ color: this.state.color }}>
                        <b style={{ color: '#000000' }}>Status: </b>
                        <b>{this.props.status}</b>
                    </div>
                </div>
                <button
                    className="company-trackbutton"
                    style={{ display: this.state.display }}
                    onClick={() => this.props.history.push(`/companystatus/${this.props.ind}`)}
                >
                    Track Application
                </button>
            </div>
        )
    }
}
export default withRouter(Company)
