import React from 'react'
import '../css/hand.css'
import Imghand from '../img/hand.png'
import 'aos/dist/aos.css'
import AOS from 'aos'
class Hand extends React.Component {
    componentDidMount() {
        AOS.init()
    }

    render() {
        return (
            <div className="handd">
                <div className="h-hand">
                    <img
                        className="h-image"
                        src={Imghand}
                        alt="Shake your hand with the corporate world"
                    />
                    <p
                        className="h-text"
                        data-aos="slide-up"
                        data-aos-duration="1000"
                        // data-aos-delay="300"
                    >
                        <h1 className="h-quote">&ldquo;</h1>A Street Making perfect Student-Company
                        Match
                        <h1 className="h-quote">&rdquo;</h1>
                    </p>
                </div>
            </div>
        )
    }
}

export default Hand
