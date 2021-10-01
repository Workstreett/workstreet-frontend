import React from 'react'
import Footer from './Footer'
import Logo from './Logo'
import About from './About'
import '../css/MainPage.css'
import { Link } from 'react-router-dom'
import Hand from './Hand'
import { AuthContext } from '../contexts/AuthContext'
import sitelogo2 from '../img/sitelogo2.png'
import TeamCard from './TeamCard'
import { TeamMembers } from '../data/team_members'

class MainPage extends React.Component {
    static contextType = AuthContext

    render() {
        const { authToken } = this.context
        return (
            <div className="main-page">
                <div>
                    <header className="nav" id="main-header">
                        <div className="nav-button">
                            {authToken === null ||
                            authToken === '' ||
                            typeof authToken === 'undefined' ||
                            authToken === 'undefined' ? (
                                <>
                                    <Link to="/login">
                                        <button>Login</button>
                                    </Link>
                                    <div className="nav-mid-img">
                                        <img src={sitelogo2} />
                                    </div>
                                    <Link to="/signup">
                                        <button>Sign Up</button>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/workstreet/profile">
                                        <button>Dashboard</button>
                                    </Link>
                                    <div className="nav-mid-img">
                                        <img src={sitelogo2} />
                                    </div>
                                    <Link to="/workstreet/sign-out">
                                        <button> Sign Out</button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </header>
                </div>
                <Logo />
                <About />
                <Hand />
                <div className="team-section">
                    <p className="team-section-heading">Our amazing team</p>
                    <div className="team-section-about-container">
                        <p className="team-section-about">
                            A group of people ready to change the world and work towards the
                            betterment of others. Young and talented technology lovers who strive
                            hard to deliver a full proof solution to their clients.
                        </p>
                    </div>

                    <div className="team-cards">
                        {TeamMembers.map((teamate) => (
                            <TeamCard
                                key={teamate.id}
                                memberImg={teamate.image}
                                name={teamate.name}
                                role={teamate.role}
                                bio={teamate.bio}
                                facebookId={teamate.facebookId}
                                linkedinId={teamate.linkedinId}
                                twitterId={teamate.twitterId}
                            />
                        ))}
                    </div>
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default MainPage
