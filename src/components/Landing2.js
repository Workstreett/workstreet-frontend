/* eslint-disable camelcase */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import logo_collage from '../images/collage.svg'
import '../css/Landing2.css'

class Landing2 extends React.Component {
    render() {
        return (
            <div className="landing2">
                <div className="landing2-1">
                    <h1>
                        Best <br /> Opportunities <br /> At One Place
                    </h1>
                    <p>
                        The motive of <b>Workstreet</b> as a platform, is to establish as fluid
                        connection between skilled candidates and upcoming startups with an engaging
                        environment, keeping work culture as a priority.
                    </p>
                </div>
                <div className="landing2-2">
                    <h1>Trusted By Startups</h1>
                    <div className="logo_collage">
                        <img src={logo_collage} alt=" " width="500" height="auto" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Landing2
