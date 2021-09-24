import React from 'react'
import Poster from './Poster.js'
import '../css/postergrid.css'
import img1 from '../img/goog.png'

class PosterGrid extends React.Component {
    render() {
        return (
            <div className="poster-grid-main">
                <Poster
                    id="one"
                    icon={img1}
                    name="GOOGLE"
                    compdesc="Our mission is to organise the world’s information and make it universally accessible and useful."
                    role="Software Engineer"
                    roledesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
                />

                <Poster
                    id="one"
                    icon={img1}
                    name="GOOGLE"
                    compdesc="Our mission is to organise the world’s information and make it universally accessible and useful."
                    role="Software Engineer"
                    roledesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
                />

                <Poster
                    id="one"
                    icon={img1}
                    name="GOOGLE"
                    compdesc="Our mission is to organise the world’s information and make it universally accessible and useful."
                    role="Software Engineer"
                    roledesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
                />

                <Poster
                    id="one"
                    icon={img1}
                    name="GOOGLE"
                    compdesc="Our mission is to organise the world’s information and make it universally accessible and useful."
                    role="Software Engineer"
                    roledesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
                />
            </div>
        )
    }
}

export default PosterGrid
