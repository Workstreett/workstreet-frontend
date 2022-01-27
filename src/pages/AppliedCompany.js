import React from 'react'
import '../css/AppliedCompany.css'
import Company from '../components/Company'
import UserHeader from '../components/UserHeader'
import ApplySection from '../images/apply.svg'
import { GoogleAuthContext } from '../contexts/GoogleAuthContext'
import axios from 'axios'
import CompanyOppor from '../components/CompanyOppor'
import { config } from '../env'

class AppliedCompany extends React.Component {
    static contextType = GoogleAuthContext
    state = {
        companies: null
    }

    async componentDidMount() {
        if (this.context.name) {
            const companies = await axios.post(config.apiDomain + 'company/get/all', {
                token: localStorage.getItem('token')
            })
            this.setState({
                companies: companies.data.filter((x) => {
                    let ans = true
                    this.context.appliedFor.forEach((element) => {
                        if (element.companyId === x._id) {
                            ans = false
                        }
                    })
                    return ans && !x.unavailable
                })
            })
        }
    }

    render() {
        const userInfo = this.context
        // console.log('ÜserInfo', userInfo)
        const message = (
            <div className="applied-message">
                {!userInfo.appliedFor.length ? (
                    <>
                        <p>
                            Hello, user, you have&apos;t applied to any companies yet. Subscribe to
                            our newsletter and receive amazing opportunities straight to your email.
                        </p>
                        <p>
                            Why Workstreet ? Workstreet help you locate the finest opportunity, one
                            that is both culturally appropriate and provides an engaging environment
                            in which you can grow and develop to your full potential.
                        </p>
                        <p>
                            You work on your skills while let Workstreet take care of the rest. Best
                            wishes!!
                        </p>
                    </>
                ) : (
                    <>
                        <p>
                            Hello, user, you&apos;ve applied to {userInfo.appliedFor.length}{' '}
                            companies thus far.
                        </p>
                        <p>
                            You now have Workstreet to help you locate the finest opportunity, one
                            that is both culturally appropriate and provides an engaging environment
                            in which you can grow and develop to your full potential.
                        </p>
                        <p>
                            You work on your skills while let Workstreet take care of the rest. Best
                            wishes!!
                        </p>
                    </>
                )}
            </div>
        )
        return (
            <div>
                <UserHeader />
                <div className="applied-side-container">
                    <img className="applied-side-banner" src={ApplySection} href="Side banner" />
                    <div className="your-application-line">
                        <h3>Your Applications</h3>
                        <p>Total aplication: {userInfo.appliedFor.length}</p>
                        <hr />
                    </div>
                    {message}
                </div>
                <div className="applied-list">
                    {userInfo &&
                        userInfo.appliedFor.map((opp, ind) => (
                            <Company
                                key={ind}
                                id={opp.companyId}
                                status={opp.status}
                                date={opp.round[0].date}
                                track={true}
                                ind={ind}
                            />
                        ))}
                </div>
                <div className="otheroppor-head">Other Oppurtunities</div>
                <div className="applied-list">
                    {this.state.companies &&
                        this.state.companies.map((comp, ind) => (
                            <CompanyOppor
                                key={ind}
                                img={comp.logo}
                                desc={comp.desc}
                                role={comp.role}
                                loc={comp.location}
                                stipend={comp.stipend}
                                duration={comp.duration}
                                jd={comp.jd}
                                apply={comp.apply}
                            />
                        ))}
                </div>
            </div>
        )
    }
}

export default AppliedCompany
