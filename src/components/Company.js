import React from 'react'
import '../css/Company.css'

class Company extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: 'nothing',
            color: ''
        }
    }

    componentDidMount() {
        if (this.props.status === 1) {
            this.setState({ status: 'Accepted', color: '#008000' })
        } else if (this.props.status === 0) {
            this.setState({ status: 'Process', color: '#FFBF00' })
        } else {
            this.setState({ status: 'Rejected', color: '#ff0000' })
        }
    }

    render() {
        return (
            <div className="company-card">
                <img src={this.props.logo} alt="comapny-logo" />
                <hr />
                <div className="company-info">{this.props.info}</div>
                <div className="company-shortdetails">
                    <div>
                        <b>Applied Role: </b>
                        {this.props.role}
                    </div>
                    <div>
                        <b>Applied Date: </b>
                        {this.props.date}
                    </div>
                    <div style={{ color: this.state.color }}>
                        <b style={{ color: '#000000' }}>Status: </b>
                        <b>{this.state.status}</b>
                    </div>
                </div>
                <button className="company-trackbutton">Track Application</button>
            </div>
        )
    }
}
export default Company
