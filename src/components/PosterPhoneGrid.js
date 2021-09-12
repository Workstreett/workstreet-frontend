import React from 'react'
import Posterphone from './Posterphone.js'
import '../css/posterphonegrid.css'
import img1 from '../img/174.jpg'
import img2 from '../img/962.jpg'
import img3 from '../img/18.jpg'

class PosterPhoneGrid extends React.Component {
    render() {
        return (
            <div className="poster-grid-phone">
                <Posterphone logo={img1} name="Sample Company 1" id="one-phone" role="Role 1" />
                <Posterphone logo={img2} name="Sample Company 2" id="two-phone" role="Role 2" />
                <Posterphone logo={img3} name="Sample Company 3" id="three-phone" role="Role 3" />
                <Posterphone logo={img1} name="Sample Company 4" id="four-phone" role="Role 4" />
            </div>
        )
    }
}

export default PosterPhoneGrid
