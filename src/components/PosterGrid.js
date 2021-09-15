import React from 'react'
import Poster from './Poster.js'
import '../css/postergrid.css'
import img1 from '../img/goog.png'

class PosterGrid extends React.Component {
    render() {
        return (
            <div className="poster-grid-main">
                <div className="poster-grid">
                    <Poster
                        id="one"
                        icon={img1}
                        name="GOOGLE"
                        compdesc="Our mission is to organise the world’s information and make it universally accessible and useful."
                        role="Software Engineer"
                        roledesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                    />
                </div>
                <div className="poster-grid">
                    <Poster
                        id="one"
                        icon={img1}
                        name="GOOGLE"
                        compdesc="Our mission is to organise the world’s information and make it universally accessible and useful."
                        role="Software Engineer"
                        roledesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                    />
                </div>
                <div className="poster-grid">
                    <Poster
                        id="one"
                        icon={img1}
                        name="GOOGLE"
                        compdesc="Our mission is to organise the world’s information and make it universally accessible and useful."
                        role="Software Engineer"
                        roledesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                    />
                </div>
                <div className="poster-grid">
                    <Poster
                        id="one"
                        icon={img1}
                        name="GOOGLE"
                        compdesc="Our mission is to organise the world’s information and make it universally accessible and useful."
                        role="Software Engineer"
                        roledesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                    />
                </div>
            </div>
        )
    }
}

export default PosterGrid
