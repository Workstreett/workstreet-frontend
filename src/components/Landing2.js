import React from 'react'
import logobrightchamps from '../images/logo-brightchamps.png'
import logozostel from '../images/logo-zostel.png'
import logostryvs from '../images/logo-stryvs.jpg'
import logonblik from '../images/logo-nblik.png'
import logoenjoyalgo from '../images/logo-enjoyalgo.jpg'

class Landing2 extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <p>
                        The motive of Workstreet as a platform, is to establish as fluid connection
                        between skilled candidates and upcoming startups with an engaging
                        environment, keeping work culture as a priority
                    </p>
                </div>
                <div>
                    <h1>Trusted By Startups</h1>
                    <img src={logobrightchamps} alt="" width="250" height="100" />
                    <img src={logozostel} alt="" width="250" height="100" />
                    <img src={logostryvs} alt="" width="250" height="100" />
                    <img src={logonblik} alt="" width="250" height="100" />
                    <img src={logoenjoyalgo} alt="" width="250" height="100" />
                </div>
            </div>
        )
    }
}
export default Landing2
