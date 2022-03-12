import React from 'react'
import '../css/TestimonialCrouser.css'
import { CarouselData } from '../data/testimonial'
import TestimonialCard from './TestimonialCard'

class TestimonialCrouser extends React.Component {
    moveToSlide = (currentInd, targetInd) => {
        const cards = document.querySelector('.testimonial-cards')
        const cardArray = Array.from(cards.children)
        const currentCard = cardArray[currentInd]
        const targetCard = cardArray[targetInd]
        var amountToMove = targetCard.style.left
        const windowWidth = window.innerWidth
        var amount = 23
        if (windowWidth > 850)
            amount =
                parseFloat(amountToMove.substring(0, amountToMove.length - 2)) -
                parseFloat(currentCard.getBoundingClientRect().width)
        else amount = parseFloat(amountToMove.substring(0, amountToMove.length - 2))

        console.log(amountToMove, amount)
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
        const cards = document.querySelector('.testimonial-cards')
        const cardArray = Array.from(cards.children)
        const currentCard = cards.querySelector('.active')
        const activeInd = cardArray.findIndex((card) => card === currentCard)
        const targetInd = (activeInd - 1 + cardArray.length) % cardArray.length
        this.moveToSlide(activeInd, targetInd)
    }

    rightClicked = () => {
        const cards = document.querySelector('.testimonial-cards')
        const cardArray = Array.from(cards.children)
        const currentCard = cards.querySelector('.active')
        const activeInd = cardArray.findIndex((card) => card === currentCard)
        const targetInd = (activeInd + 1) % cardArray.length
        this.moveToSlide(activeInd, targetInd)
    }

    dotClicked = (e) => {
        const dots = document.querySelector('.testimonial-dots')
        const dotArray = Array.from(dots.children)
        const activeDot = dots.querySelector('.active')
        const clickedInd = dotArray.findIndex((dot) => dot === e.target)
        const activeInd = dotArray.findIndex((dot) => dot === activeDot)
        this.moveToSlide(activeInd, clickedInd)
    }

    componentDidMount() {
        console.log('componentDidMount')
        const cardParent = document.querySelector('.testimonial-crouser')
        const cardsContainer = document.querySelector('.testimonial-cards-container')
        const cards = document.querySelector('.testimonial-cards')
        const card = Array.from(cards.children)
        card[0].classList.add('active')

        const dots = document.querySelector('.testimonial-dots')
        const dotArray = Array.from(dots.children)
        dotArray[0].classList.add('active')

        const cardWidth = card[0].getBoundingClientRect().width
        const cardHeight = card[0].getBoundingClientRect().height

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
                    <i
                        onClick={this.leftClicked}
                        className="fal fa-chevron-circle-left  crouser-button crouser-left button-hidden"
                    ></i>

                    <div className="testimonial-cards-container">
                        <div className="testimonial-cards">
                            {CarouselData.map((obj, ind) => {
                                return (
                                    <div className="testimonial-card-container" key={ind}>
                                        <TestimonialCard
                                            userImg={obj.userImg}
                                            name={obj.name}
                                            domain={obj.domain}
                                            company={obj.company}
                                            review={obj.review}
                                        />
                                    </div>
                                )
                            })}
                            {/* <div className="testimonial-card-container">
                                <TestimonialCard
                                    userImg={img1}
                                    name="Shagun Mittal"
                                    domain="Business Development"
                                    company="NbliK"
                                    review="Workstreet really helped me find NbliK, they were aware of my CV hence got me the right interview. Very helpful and supportive throughout the process. NbliK being my first intern really helped me learn about the work-culture"
                                />
                            </div>
                            <div className="testimonial-card-container">
                                <TestimonialCard
                                    userImg={img1}
                                    name="Shagun Mittal"
                                    domain="Business Development"
                                    company="NbliK"
                                    review="Workstreet really helped me find NbliK, they were aware of my CV hence got me the right interview. Very helpful and supportive throughout the process. NbliK being my first intern really helped me learn about the work-culture"
                                />
                            </div>
                            <div className="testimonial-card-container">
                                <TestimonialCard
                                    userImg={img1}
                                    name="Shagun Mittal"
                                    domain="Business Development"
                                    company="NbliK"
                                    review="Workstreet really helped me find NbliK, they were aware of my CV hence got me the right interview. Very helpful and supportive throughout the process. NbliK being my first intern really helped me learn about the work-culture"
                                />
                            </div>
                            <div className="testimonial-card-container">
                                <TestimonialCard
                                    userImg={img1}
                                    name="Shagun Mittal"
                                    domain="Business Development"
                                    company="NbliK"
                                    review="Workstreet really helped me find NbliK, they were aware of my CV hence got me the right interview. Very helpful and supportive throughout the process. NbliK being my first intern really helped me learn about the work-culture"
                                />
                            </div>
                            <div className="testimonial-card-container">
                                <TestimonialCard
                                    userImg={img1}
                                    name="Shagun Mittal"
                                    domain="Business Development"
                                    company="NbliK"
                                    review="Workstreet really helped me find NbliK, they were aware of my CV hence got me the right interview. Very helpful and supportive throughout the process. NbliK being my first intern really helped me learn about the work-culture"
                                />
                            </div> */}
                        </div>
                    </div>
                    <i
                        onClick={this.rightClicked}
                        className="fal fa-chevron-circle-right  crouser-button crouser-right"
                    ></i>
                </div>
                <div className="testimonial-dots">
                    {CarouselData.map((obj, ind) => {
                        return (
                            <i
                                className="fa fa-solid fa-circle"
                                key={ind}
                                onClick={this.dotClicked}
                            ></i>
                        )
                    })}
                    {/* <i className="fa fa-solid fa-circle" onClick={this.dotClicked}></i>
                    <i className="fa fa-solid fa-circle" onClick={this.dotClicked}></i>
                    <i className="fa fa-solid fa-circle" onClick={this.dotClicked}></i>
                    <i className="fa fa-solid fa-circle" onClick={this.dotClicked}></i>
                    <i className="fa fa-solid fa-circle" onClick={this.dotClicked}></i> */}
                </div>
            </div>
        )
    }
}

export default TestimonialCrouser
