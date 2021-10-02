import React from 'react'
import JobCard from './JobCard'
import '../css/JobCardGrid.css'
import img1 from '../img/goog.png'

class JobCardGrid extends React.Component {
    render() {
        return (
            <div className="poster-grid-main">
                <JobCard
                    id="one"
                    icon={img1}
                    name="GOOGLE"
                    compdesc="Our mission is to organise the world’s information and make it universally accessible and useful."
                    role="Software Engineer"
                    roledesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
                />

                <JobCard
                    id="one"
                    icon={img1}
                    name="GOOGLE"
                    compdesc="Our mission is to organise the world’s information and make it universally accessible and useful."
                    role="Software Engineer"
                    roledesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
                />

                <JobCard
                    id="one"
                    icon={img1}
                    name="GOOGLE"
                    compdesc="Our mission is to organise the world’s information and make it universally accessible and useful."
                    role="Software Engineer"
                    roledesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
                />

                <JobCard
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

export default JobCardGrid
