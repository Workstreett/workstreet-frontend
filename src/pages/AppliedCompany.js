import React from 'react'
import '../css/AppliedCompany.css'
import Company from '../components/Company'
import logo from '../images/logo.svg'
import NbliK from '../images/NbliK.png'

class AppliedCompany extends React.Component {
    render() {
        return (
            <div>
                <div className="applied-header">
                    <img src={logo} alt="Logo" />
                    <button>
                        <i className="fas fa-power-off fa-x"></i> Logout
                    </button>
                </div>
                <hr style={{ height: '2px', borderWidth: '0px', backgroundColor: '#000000' }} />
                <div className="applied-user-info">
                    <img
                        src="https://lh3.googleusercontent.com/a/AATXAJy3xWOki6DHu_Kh1Ripe8bJQ5f6-70QcKxKMffl=s288-p-rw-no-mo"
                        alt="user-dp"
                    />
                    <div>
                        <p className="greeting">
                            Welcome, <span style={{ color: '#FFA45C' }}>Jhon Doe</span>
                        </p>
                        <p className="number">Total aplication: 3</p>
                    </div>
                </div>
                <h3 className="line-comapany">Your Application</h3>
                <div className="applied-list">
                    <Company
                        logo={NbliK}
                        info="Made in India, NbliK is an interest-based community and a content-sharing platform where you can explore top-notch content and make friends who share your interests.Browse articles & topics as per your interests.

                        Discover topics like: time management, productivity, health, money, communication, teamwork, personal growth, leadership, and several others!"
                        role="Business Development"
                        date="21/10/2021"
                        status={1}
                    />
                    <Company
                        logo={NbliK}
                        info="Made in India, NbliK is an interest-based community and a content-sharing platform where you can explore top-notch content and make friends who share your interests.Browse articles & topics as per your interests.

                        Discover topics like: time management, productivity, health, money, communication, teamwork, personal growth, leadership, and several others!"
                        role="Business Development"
                        date="21/10/2021"
                        status={0}
                    />
                    <Company
                        logo={NbliK}
                        info="Made in India, NbliK is an interest-based community and a content-sharing platform where you can explore top-notch content and make friends who share your interests.Browse articles & topics as per your interests.

                        Discover topics like: time management, productivity, health, money, communication, teamwork, personal growth, leadership, and several others!"
                        role="Business Development"
                        date="21/10/2021"
                        status={-1}
                    />
                </div>
            </div>
        )
    }
}

export default AppliedCompany
