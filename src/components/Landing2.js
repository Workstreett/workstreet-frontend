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
                        <div>Best</div> <div> Opportunities </div> <div> At One Place</div>
                    </h1>
                    <p>
                        The motive of <b>Workstreet</b> as a platform, is to establish as fluid
                        connection between skilled candidates and upcoming startups with an engaging
                        environment, keeping work culture as a priority.
                    </p>
                </div>
                <div className="landing2-2">
                    <h1>Finding Gems In The Bush</h1>
                    <h6>linking skilled candidates and cultured startups</h6>
                    <div className="logo_collage">
                        <img src={logo_collage} alt=" " />
                    </div>
                </div>
            </div>
        )
    }
}
export default Landing2
