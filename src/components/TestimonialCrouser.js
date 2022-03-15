import React, { useState } from 'react'
import '../css/TestimonialCrouser.css'
import { CarouselData } from '../data/testimonial'
import TestimonialCard from './TestimonialCard'
import { useSwipeable } from 'react-swipeable'

const TestimonialCrouser = () => {
    const [actInd, setActInd] = useState(window.innerWidth > 800 ? 1 : 0)

    const moveToSlide = (id) => {
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
        setActInd(Math.min(Math.max(id, 0), CarouselData.length - 1))
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            moveToSlide(actInd + 1)
        },
        onSwipedRight: () => {
            moveToSlide(actInd - 1)
        }
    })
    console.log(handlers)
    return (
        <div>
            <div className="testimonial-title">Hear From Your Peers</div>
            <div className="testimonial-crouser">
                {actInd > 0 && (
                    <i
                        onClick={() => {
                            moveToSlide(actInd - 1)
                        }}
                        className="fal fa-chevron-circle-left  crouser-button crouser-left"
                    ></i>
                )}

                <div className="testimonial-cards-container">
                    <div className="testimonial-cards" id="testimonial-carousel" {...handlers}>
                        {CarouselData.map((obj, ind) => (
                            <div
                                className={`testimonial-card-container ${
                                    ind === actInd ? 'active' : ''
                                }`}
                                key={ind}
                                onClick={() => {
                                    moveToSlide(ind)
                                }}
                            >
                                <TestimonialCard
                                    userImg={obj.userImg}
                                    name={obj.name}
                                    domain={obj.domain}
                                    company={obj.company}
                                    review={obj.review}
                                    active={actInd === ind}
                                    linkedIn={obj.LinkedIn}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {actInd < CarouselData.length - 1 && (
                    <i
                        onClick={() => {
                            moveToSlide(actInd + 1)
                        }}
                        className="fal fa-chevron-circle-right  crouser-button crouser-right"
                    ></i>
                )}
            </div>
            <div className="testimonial-dots">
                {CarouselData.map((_, ind) => (
                    <i
                        className={'fa fa-solid fa-circle ' + (actInd === ind ? 'active' : '')}
                        key={ind}
                        onClick={() => {
                            moveToSlide(ind)
                        }}
                    ></i>
                ))}
            </div>
        </div>
    )
}

export default TestimonialCrouser
