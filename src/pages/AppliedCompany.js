import React from 'react'
import '../css/AppliedCompany.css'
import Company from '../components/Company'
import UserHeader from '../components/UserHeader'
import NbliK from '../images/NbliK.png'
import ApplySection from '../images/apply.svg'

class AppliedCompany extends React.Component {
    state = {
        numOfApplications: 0
    }

    render() {
        const message = (
            <div className="applied-message">
                {!this.state.numOfApplications ? (
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
                            Hello, user, you&apos;ve applied to {this.state.numOfApplications}{' '}
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
                {/* <div className="applied-user-info">
                    <div className="applied-user-info-upper">
                        <img
                            src="https://lh3.googleusercontent.com/a/AATXAJy3xWOki6DHu_Kh1Ripe8bJQ5f6-70QcKxKMffl=s288-p-rw-no-mo"
                            alt="user-dp"
                        />
                        <div>
                            <p className="greeting">
                                Welcome, <span style={{ color: '#FFA45C' }}>Jhon Doe</span>
                            </p>
                            <hr />
                        </div>
                    </div>
                </div> */}
                <div className="applied-side-container">
                    <img className="applied-side-banner" src={ApplySection} href="Side banner" />
                    <div className="your-application-line">
                        <h3>Your Applications</h3>
                        <p>Total aplication: 3</p>
                        <hr />
                    </div>
                    {message}
                </div>
                <div className="applied-list">
                    <Company
                        logo={NbliK}
                        info="Made in India, NbliK is an interest-based community and a content-sharing platform where you can explore top-notch content and make friends who share your interests.Browse articles & topics as per your interests.

                        Discover topics like: time management, productivity, health, money, communication, teamwork, personal growth, leadership, and several others!"
                        role="Business Development"
                        date="21/10/2021"
                        status={1}
                        track={true}
                    />
                    <Company
                        logo={NbliK}
                        info="Made in India, NbliK is an interest-based community and a content-sharing platform where you can explore top-notch content and make friends who share your interests.Browse articles & topics as per your interests.

                        Discover topics like: time management, productivity, health, money, communication, teamwork, personal growth, leadership, and several others!"
                        role="Business Development"
                        date="21/10/2021"
                        status={0}
                        track={true}
                    />
                    <Company
                        logo={NbliK}
                        info="Made in India, NbliK is an interest-based community and a content-sharing platform where you can explore top-notch content and make friends who share your interests.Browse articles & topics as per your interests.

                        Discover topics like: time management, productivity, health, money, communication, teamwork, personal growth, leadership, and several others!"
                        role="Business Development"
                        date="21/10/2021"
                        status={-1}
                        track={true}
                    />
                </div>
            </div>
        )
    }
}

export default AppliedCompany
