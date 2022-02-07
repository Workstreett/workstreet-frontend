import React from 'react'
import '../css/CompanyOppor.css'

class CompanyOppor extends React.Component {
    render() {
        return (
            <div className="companyoppor-card">
                <a href={this.props.site}>
                    <img src={this.props.img} alt="comapny-logo" />
                </a>
                <hr />
                <div className="companyoppor-info">{this.props.desc}</div>
                <div className="companyoppor-shortdetails">
                    <div>
                        <b>Role: </b>
                        {this.props.role}
                    </div>
                    <div>
                        <b>Location: </b>
                        {this.props.location || 'Remote'}
                    </div>
                    <div>
                        <b>Sipend: </b>
                        {this.props.stipend}
                    </div>
                    <div>
                        <b>Min Duration: </b>
                        {this.props.duration}
                    </div>
                    {this.props.jd && (
                        <div>
                            <strong>
                                See the descriptive{' '}
                                <a href={this.props.jd} style={{ color: '#0097a7' }}>
                                    JD here
                                </a>
                                .
                            </strong>
                        </div>
                    )}
                </div>
                <a href={this.props.apply}>
                    <button className="company-applybutton">Apply</button>
                </a>
            </div>
        )
    }
}

export default CompanyOppor
