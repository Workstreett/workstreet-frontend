import React from 'react'
import Company from '../components/Company'
import UserHeader from '../components/UserHeader'
import '../css/CompanyStatus.css'
import NbliK from '../images/NbliK.png'

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
                    <div className="compstatus-col2"></div>
                </div>
            </div>
        )
    }
}

export default CompanyStatus
