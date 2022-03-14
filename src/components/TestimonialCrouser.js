import React from 'react'
import '../css/TestimonialCrouser.css'
import { CarouselData } from '../data/testimonial'
import TestimonialCard from './TestimonialCard'

class TestimonialCrouser extends React.Component {
    state = {
        actInd: 0
    }

    moveToSlide = (currentInd, targetInd) => {
        const cards = document.querySelector('.testimonial-cards')
        const cardArray = Array.from(cards.children)
        const currentCard = cardArray[currentInd]
        const targetCard = cardArray[targetInd]
        const amountToMove = targetCard.style.left
        const windowWidth = window.innerWidth
        let amount = 23
        if (windowWidth > 850)
            amount =
                parseFloat(amountToMove.substring(0, amountToMove.length - 2)) -
                parseFloat(currentCard.getBoundingClientRect().width)
        else amount = parseFloat(amountToMove.substring(0, amountToMove.length - 2))

        amount = Math.abs(amount)

        cards.style.transform = 'translateX(-' + amount.toString() + 'px )'
        currentCard.classList.remove('active')
        targetCard.classList.add('active')

        const dots = document.querySelector('.testimonial-dots')
        const dotArray = Array.from(dots.children)
        const currentDot = dotArray[currentInd]
        const targetDot = dotArray[targetInd]
        currentDot.classList.remove('active')
        targetDot.classList.add('active')

        const leftButton = document.querySelector('.crouser-left')
        const rightButton = document.querySelector('.crouser-right')

        leftButton.classList.remove('button-hidden')
        rightButton.classList.remove('button-hidden')

        if (targetInd === 0) leftButton.classList.add('button-hidden')

        if (targetInd === cardArray.length - 1) rightButton.classList.add('button-hidden')
    }

    leftClicked = () => {
        this.setState((prevState) => ({ actInd: prevState.actInd - 1 }))

        // const cards = document.querySelector('.testimonial-cards')
        // const cardArray = Array.from(cards.children)
        // const currentCard = cards.querySelector('.active')
        // const activeInd = cardArray.findIndex((card) => card === currentCard)
        // const targetInd = (activeInd - 1 + cardArray.length) % cardArray.length
        // this.moveToSlide(activeInd, targetInd)
    }

    rightClicked = () => {
        this.setState((prevState) => ({ actInd: prevState.actInd + 1 }))
        // const cards = document.querySelector('.testimonial-cards')
        // const cardArray = Array.from(cards.children)
        // const currentCard = cards.querySelector('.active')
        // const activeInd = cardArray.findIndex((card) => card === currentCard)
        // const targetInd = (activeInd + 1) % cardArray.length
        // this.moveToSlide(activeInd, targetInd)
    }

    dotClicked = (e) => {
        const dots = document.querySelector('.testimonial-dots')
        const dotArray = Array.from(dots.children)
        // const activeDot = dots.querySelector('.active')
        const clickedInd = dotArray.findIndex((dot) => dot === e.target)
        this.setState({ actInd: parseInt(clickedInd) })

        // const activeInd = dotArray.findIndex((dot) => dot === activeDot)
        // this.moveToSlide(activeInd, clickedInd)
    }

    componentDidMount() {
        const cardParent = document.querySelector('.testimonial-crouser')
        const cards = document.querySelector('.testimonial-cards')
        const card = Array.from(cards.children)
        console.log(card)
        // card[0].classList.add('active')

        // const dots = document.querySelector('.testimonial-dots')
        // const dotArray = Array.from(dots.children)
        // dotArray[0].classList.add('active')

        const cardWidth = card[0].getBoundingClientRect().width
        const cardHeight = card[0].getBoundingClientRect().height
        console.log(cardWidth)
        cardParent.style.height = cardHeight + 'px'
        // cardsContainer.style.width = cardWidth * 3 + 'px'

        const windowWidth = window.innerWidth

        const setCardPosition = (card, index) => {
            if (windowWidth > 850) card.style.left = cardWidth * (index + 1) + 'px'
            else card.style.left = cardWidth * index + 'px'
        }

        card.map(setCardPosition)
    }

    render() {
        return (
            <div>
                <div className="testimonial-title">Here From Interns</div>
                <div className="testimonial-crouser">
                    {(() => {
                        if (this.state.actInd > 0)
                            return (
                                <i
                                    onClick={this.rightClicked}
                                    className="fal fa-chevron-circle-right  crouser-button crouser-left"
                                ></i>
                            )
                    })()}

                    <div className="testimonial-cards-container">
                        <div className="testimonial-cards">
                            {CarouselData.map((obj, ind) => {
                                return (() => {
                                    if (this.state.actInd === ind)
                                        return (
                                            <div className="testimonial-card-container active">
                                                <TestimonialCard
                                                    userImg={obj.userImg}
                                                    name={obj.name}
                                                    domain={obj.domain}
                                                    company={obj.company}
                                                    review={obj.review}
                                                    active={1}
                                                />
                                            </div>
                                        )
                                    else
                                        return (
                                            <div className="testimonial-card-container">
                                                <TestimonialCard
                                                    userImg={obj.userImg}
                                                    name={obj.name}
                                                    domain={obj.domain}
                                                    company={obj.company}
                                                    review={obj.review}
                                                    active={0}
                                                />
                                            </div>
                                        )
                                })()
                            })}
                        </div>
                    </div>
                    {(() => {
                        if (this.state.actInd < 5)
                            return (
                                <i
                                    onClick={this.rightClicked}
                                    className="fal fa-chevron-circle-right  crouser-button crouser-right"
                                ></i>
                            )
                    })()}
                </div>
                <div className="testimonial-dots">
                    {CarouselData.map((obj, ind) => {
                        return (() => {
                            if (this.state.actInd === ind)
                                return (
                                    <i
                                        className="fa fa-solid fa-circle active"
                                        onClick={this.dotClicked}
                                    ></i>
                                )
                            else
                                return (
                                    <i
                                        className="fa fa-solid fa-circle"
                                        onClick={this.dotClicked}
                                    ></i>
                                )
                        })()
                    })}
                </div>
            </div>
        )
    }
}

export default TestimonialCrouser
