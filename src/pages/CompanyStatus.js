import React from 'react'
import Company from '../components/Company'
import UserHeader from '../components/UserHeader'
import NbliK from '../images/NbliK.png'
import { Rounds } from '../components/RoundStatus'
import Landing4 from '../components/Landing4'
import '../css/CompanyStatus.css'

class CompanyStatus extends React.Component {
    render() {
        return (
            <div>
                <UserHeader />
                <div className="compStatus-flex">
                    <div className="your-status-line">
                        <div className="your-status-heading">
                            <h3>Track Your Status </h3>
                            <h3>For NbilK</h3>
                        </div>
                        <div className="your-status-message">
                            <p>
                                Till now you have successfuly completed resume round and interview
                                round. Wait for final round.
                            </p>
                            <p>
                                {' '}
                                We have got a tracker for you just check our current status and
                                track it as well. We make sure to make you feel conacted to us and
                                company.
                            </p>
                        </div>
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
                            backgroundColor: '#071e3d'
                        }}
                    />
                    <div className="roundtstatus-portion">
                        {Rounds.map((round, index) => (
                            <>
                                <div
                                    className="icon"
                                    style={{
                                        position: 'relative'
                                    }}
                                >
                                    <i
                                        className={round.icon}
                                        style={{
                                            color: round.status ? '#ffa45c' : '#bababa',
                                            zIndex: '3'
                                        }}
                                    ></i>
                                </div>
                                <div className="roundstatus">
                                    <div className="text">
                                        {round.name}
                                        <div style={{ fontSize: '12px', color: '#6e6d76' }}>
                                            {round.date}
                                        </div>
                                    </div>
                                    <div className="review">&quot;{round.review}&quot;</div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
                <Landing4 />
            </div>
        )
    }
}

export default CompanyStatus
