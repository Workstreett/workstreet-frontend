import React from 'react'
import '../css/AppliedCompany.css'
import Company from '../components/Company'
import UserHeader from '../components/UserHeader'
import ApplySection from '../images/apply.svg'
import { GoogleAuthContext } from '../contexts/GoogleAuthContext'

class AppliedCompany extends React.Component {
    static contextType = GoogleAuthContext

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
                    {userInfo.appliedFor.map((opp, ind) => (
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
            </div>
        )
    }
}

export default AppliedCompany
