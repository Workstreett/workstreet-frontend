import React from 'react'
import '../css/TestimonialCard.css'

class TestimonialCard extends React.Component {
    render() {
        return (
            <div className="testimonial-card">
                <div className="testimonial-card-inner-content">
                    <div className="testimonial-card-upper-parent">
                        <img src={this.props.userImg} alt="user-img" />
                        <div className="testimonial-card-upper">
                            <div className="testimonial-card-name">
                                <h1>{this.props.name}</h1>
                                <i className="fab fa-linkedin"></i>
                            </div>
                            <div className="testimonial-card-domain">
                                {this.props.domain} <br />
                                Intern at {this.props.company}
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card-review">
                        <span>&quot;</span>
                        {this.props.review}
                        <span>&quot;</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default TestimonialCard
