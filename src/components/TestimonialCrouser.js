import React from 'react'
import '../css/TestimonialCrouser.css'
import { CarouselData } from '../data/testimonial'
import TestimonialCard from './TestimonialCard'

class TestimonialCrouser extends React.Component {
    state = {
        actInd: window.innerWidth > 800 ? 1 : 0
    }

    moveToSlide = (id) => {
        const carousel = document.getElementById('testimonial-carousel')
        let cardWidth
        if (window.innerWidth > 800) {
            cardWidth = (id - 1) * 0.9 * window.innerWidth * 0.33
        } else {
            cardWidth = id * 0.9 * window.innerWidth
        }
        carousel.scrollTo({
            left: cardWidth,
            behavior: 'smooth'
        })
    }

    changeActInd = (change) => {
        this.setState((prevState) => ({ actInd: prevState.actInd + change }))
    }

    render() {
        return (
            <div>
                <div className="testimonial-title">Hear From Your Peers</div>
                <div className="testimonial-crouser">
                    {this.state.actInd > 0 && (
                        <i
                            onClick={() => {
                                this.moveToSlide(this.state.actInd - 1)
                                this.changeActInd(-1)
                            }}
                            className="fal fa-chevron-circle-left  crouser-button crouser-left"
                        ></i>
                    )}

                    <div className="testimonial-cards-container">
                        <div className="testimonial-cards" id="testimonial-carousel">
                            {CarouselData.map((obj, ind) => (
                                <div
                                    className={`testimonial-card-container ${
                                        ind === this.state.actInd ? 'active' : ''
                                    }`}
                                    key={ind}
                                    onClick={() => {
                                        this.moveToSlide(ind)
                                        this.setState({ actInd: ind })
                                    }}
                                >
                                    <TestimonialCard
                                        userImg={obj.userImg}
                                        name={obj.name}
                                        domain={obj.domain}
                                        company={obj.company}
                                        review={obj.review}
                                        active={this.state.actInd === ind}
                                        linkedIn={obj.LinkedIn}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {this.state.actInd < CarouselData.length - 1 && (
                        <i
                            onClick={() => {
                                this.moveToSlide(this.state.actInd + 1)
                                this.changeActInd(1)
                            }}
                            className="fal fa-chevron-circle-right  crouser-button crouser-right"
                        ></i>
                    )}
                </div>
                <div className="testimonial-dots">
                    {CarouselData.map((_, ind) => (
                        <i
                            className={
                                'fa fa-solid fa-circle ' +
                                (this.state.actInd === ind ? 'active' : '')
                            }
                            key={ind}
                            onClick={() => {
                                this.moveToSlide(ind)
                                this.setState({ actInd: ind })
                            }}
                        ></i>
                    ))}
                </div>
            </div>
        )
    }
}

export default TestimonialCrouser
