import React from 'react'
import '../css/Landing3.css'

class Landing3 extends React.Component {
    render() {
        return (
            <div className="l3-grid">
                <div className="l3-r1">
                    <h1>Features</h1>
                    <div>Many Platform does not Focus on providing culture fit to interns</div>
                </div>
                <div className="l3-r2">
                    <div className="l3-f1">
                        <div>Startup Article</div>
                        <div>
                            A 2 min. quick-read article on startups in the form of a story. You will
                            definitely be going to love it. Workstreet doesnt lie.
                        </div>
                    </div>
                    <div className="l3-f2">
                        <div>Internship Opportunities</div>
                        <div>
                            Slate helps you see how many more days you need to work to reach your
                            financial goal.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Landing3
