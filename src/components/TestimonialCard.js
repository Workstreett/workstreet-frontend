import React from 'react'
import '../css/TestimonialCard.css'

class TestimonialCard extends React.Component {
    render() {
        const maxReviewSize = 120
        return (
            <div className="testimonial-card">
                <div className="testimonial-card-inner-content">
                    <div className="testimonial-card-upper-parent">
                        <img src={this.props.userImg} alt="user-img" />
                        <div className="testimonial-card-upper">
                            <div className="testimonial-card-name">
                                <h1>{this.props.name}</h1>
                                <a href={this.props.linkedIn} target="_blank" rel="noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                            <div className="testimonial-card-domain">
                                {this.props.domain} <br />
                                Intern at {this.props.company}
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card-review">
                        <span>&quot;</span>
                        {this.props.active && this.props.review.length > maxReviewSize
                            ? this.props.review.substring(0, maxReviewSize) + '...'
                            : this.props.review}
                        <span>&quot;</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default TestimonialCard
