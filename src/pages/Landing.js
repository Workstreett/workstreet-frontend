import React from 'react'
import '../css/Landing.css'
import Landing3 from '../components/Landing3'
import Landing4 from '../components/Landing4'

class Landing extends React.Component {
    render() {
        return (
            <div className="landing-grid">
                <div>Landing1</div>
                <div>Landing2</div>
                <Landing3 />
                <Landing4 />
            </div>
        )
    }
}
export default Landing
