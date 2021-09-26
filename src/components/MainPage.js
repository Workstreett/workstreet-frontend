import React from 'react'
import Footer from './Footer'
import Logo from './Logo'
import About from './About'
import Card from './Card'
import '../css/MainPage.css'
import Bharat from '../img/Bharat.jpeg'
import Kunal from '../img/Kunal.jpeg'
import Prabhat from '../img/Prabhat.jpeg'
import Pradeep from '../img/Pradeep.jpeg'
import { Link } from 'react-router-dom'
import Hand from './Hand'
import { AuthContext } from '../contexts/AuthContext'
import sitelogo2 from '../img/sitelogo2.png'

class MainPage extends React.Component {
    static contextType = AuthContext
    render() {
        const { authToken } = this.context
        return (
            <div className="main-page">
                <div>
                    <header className="nav">
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

                    <Logo />
                </div>
                <About />
                <Hand />
                <div className="para-team">
                    <p id="team">Know about Us</p>
                </div>
                <div className="four-cards">
                    <Card
                        f_id="https://www.facebook.com/kunal.lodha.961"
                        i_id="https://www.instagram.com/93.kunal/"
                        t_id="https://mobile.twitter.com/Kunal95827975"
                        l_id="https://www.linkedin.com/in/kunal-lodha-a340951a7/"
                        names="Kunal Lodha"
                        position="Co-Founder"
                        bio="Pursuant of Dynamic Feild"
                        about="Always ready to learn new things"
                        path={Kunal}
                    />
                    <Card
                        f_id="https://www.facebook.com/bharat.agrawal.357622"
                        i_id="https://www.instagram.com/bharat__b_ansal/"
                        t_id="https://twitter.com/BharatB20038198"
                        l_id="https://www.linkedin.com/in/bharat-bansal-598b16198/"
                        names="Bharat Bansal"
                        position="Co-Founder"
                        bio="Pursuant of Dynamic Feild"
                        about="Always ready to learn new things"
                        path={Bharat}
                    />
                    <Card
                        f_id="https://www.facebook.com/profile.php?id=100042024872078"
                        i_id="https://www.instagram.com/pr_adeep3526/"
                        t_id="https://twitter.com/Pradeep92628428"
                        l_id="https://www.linkedin.com/in/pradeep-sharma-359218160/"
                        names="Pradeep Sharma"
                        position="Co-Founder"
                        bio="Pursuant of Dynamic Feild"
                        about="Always ready to learn new things"
                        path={Pradeep}
                    />
                    <Card
                        f_id="https://www.facebook.com/profile.php?id=100070616822860"
                        i_id="https://www.instagram.com/prabhatsingh4real/"
                        t_id="https://twitter.com/Prabhat96383639"
                        l_id="https://www.linkedin.com/in/prabhat-kumar-singh-b030bb1b9/"
                        names="Prabhat Kumar Singh"
                        position="Co-Founder"
                        bio="Pursuant of Dynamic Feild"
                        about="Always ready to learn new things"
                        path={Prabhat}
                    />
                </div>

                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default MainPage
