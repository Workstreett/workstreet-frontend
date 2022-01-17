import React from 'react'
import Company from '../components/Company'
import UserHeader from '../components/UserHeader'
import { Rounds } from '../components/RoundStatus'
import Landing4 from '../components/Landing4'
import '../css/CompanyStatus.css'
import { GoogleAuthContext } from '../contexts/GoogleAuthContext'
import { withRouter } from 'react-router-dom'

class CompanyStatus extends React.Component {
    static contextType = GoogleAuthContext
    state = {
        companyDetails: null
    }

    componentDidMount() {
        if (this.context.appliedFor.length === 0) {
            this.props.history.push('/appliedCompany')
        }
        const { id } = this.props.match.params
        if (!id || id > this.context.appliedFor.length) {
            this.props.history.push('/companystatus/0')
        }
        this.setState({
            companyDetails: this.context.appliedFor[id]
        })
    }

    render() {
        const { companyDetails } = this.state
        return (
            <div>
                <UserHeader />
                <div className="compStatus-flex">
                    <div className="compstatus-c1">
                        <div className="compstatus-user">
                            <img src={this.context.userImg} alt="user-dp" />
                            <p>
                                Welcome,
                                <span style={{ color: '#FFA45C' }}>{this.context.name}</span>
                            </p>
                        </div>
                        {companyDetails && (
                            <Company
                                id={companyDetails.companyId}
                                status={companyDetails.status}
                                date={companyDetails.round[0].date}
                                track={false}
                            />
                        )}
                    </div>
                    <div className="compstatus-c2">
                        <div className="compstatus-tracktext">Track Status</div>
                        <hr
                            style={{
                                height: '1px',
                                borderWidth: '0px',
                                backgroundColor: '#000000'
                            }}
                        />
                        <div className="roundtstatus-portion">
                            {companyDetails &&
                                companyDetails.round.map((round, index) => {
                                    console.log(round)
                                    return (
                                        <>
                                            <div
                                                className="icon"
                                                style={{
                                                    position: 'relative'
                                                }}
                                            >
                                                <i className={round.icon}></i>
                                            </div>
                                            <div className="roundstatus-text">
                                                {round.name}
                                                <div style={{ fontSize: '12px', color: '#6e6d76' }}>
                                                    {new Date(round.date).toDateString()}
                                                </div>
                                            </div>
                                            <div className="roundstatus-review">
                                                &quot;{round.remark}&quot;
                                            </div>
                                        </>
                                    )
                                })}
                        </div>
                    </div>
                </div>
                <Landing4 />
            </div>
        )
    }
}

export default withRouter(CompanyStatus)
