import React from 'react'
import Company from '../components/Company'
import UserHeader from '../components/UserHeader'
import '../css/CompanyStatus.css'
import NbliK from '../images/NbliK.png'
import RoundStatus from '../components/RoundStatus'
import Landing4 from '../components/Landing4'

class CompanyStatus extends React.Component {
    render() {
        return (
            <div>
                <UserHeader />
                <div className="compStatus-flex">
                    <div className="compstatus-c1">
                        <div className="compstatus-user">
                            <img
                                src="https://lh3.googleusercontent.com/a/AATXAJy3xWOki6DHu_Kh1Ripe8bJQ5f6-70QcKxKMffl=s288-p-rw-no-mo"
                                alt="user-dp"
                            />
                            <p>
                                Welcome, <span style={{ color: '#FFA45C' }}>Jhon Doe</span>
                            </p>
                        </div>
                        <Company
                            logo={NbliK}
                            info="Made in India, NbliK is an interest-based community and a content-sharing platform where you can explore top-notch content and make friends who share your interests.Browse articles & topics as per your interests.
                        Discover topics like: time management, productivity, health, money, communication, teamwork, personal growth, leadership, and several others!"
                            role="Business Development"
                            date="21/10/2021"
                            status={1}
                            track={false}
                        />
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
                            <RoundStatus
                                name="Resume Round"
                                date="12/10/2021"
                                review="Good Resume, you may develop on your python, js and React Skills. Forwarded for next Round"
                            />
                            <RoundStatus
                                name="Resume Round"
                                date="12/10/2021"
                                review="Good Resume, you may develop on your python, js and React Skills. Forwarded for next Round"
                            />
                            <RoundStatus
                                name="Resume Round"
                                date="12/10/2021"
                                review="Good Resume, you may develop on your python, js and React Skills. Forwarded for next Round"
                            />
                            <RoundStatus
                                name="Resume Round"
                                date="12/10/2021"
                                review="Good Resume, you may develop on your python, js and React Skills. Forwarded for next Round"
                            />
                        </div>
                    </div>
                </div>
                <Landing4 />
            </div>
        )
    }
}

export default CompanyStatus
