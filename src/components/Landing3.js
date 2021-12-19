import React from 'react'
import '../css/Landing3.css'

class Landing3 extends React.Component {
    render() {
        return (
            <div className="l3-grid">
                <div className="l3-r1">
                    <h1>Join Us For</h1>
                </div>
                <div className="l3-r2">
                    <div className="l3-f1">
                        <i className="far fa-newspaper"></i>
                        <div className="l3-title">Startup&nbsp;</div>
                        <div className="l3-title"> Article</div>
                        <div className="l3-text">
                            A 2 min. quick-read article on startups in the form of a story. You will
                            definitely be going to love it. Workstreet doesnt lie.
                        </div>
                    </div>
                    <div className="l3-f2">
                        <i className="far fa-user-circle"></i>
                        <div className="l3-title">Intern/Job&nbsp;</div>
                        <div className="l3-title">Opportunities</div>
                        <div className="l3-text">
                            Notify Interns/Jobs of selective startups having positive culture as
                            well as an engaging environment.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Landing3
