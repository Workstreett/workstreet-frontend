import React from 'react'
import '../css/CompanyOppor.css'
import Img from '../images/logo.svg'

class CompanyOppor extends React.Component {
    render() {
        return (
            <div className="companyoppor-card">
                <img src={Img} alt="comapny-logo" />
                <hr />
                <div className="companyoppor-info">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1980s
                </div>
                <div className="companyoppor-shortdetails">
                    <div>
                        <b>Role: </b>
                        Software Developer
                    </div>
                    <div>
                        <b>Location: </b>
                        Remote
                    </div>
                    <div>
                        <b>Sipend: </b>
                        10k-20k PM
                    </div>
                    <div>
                        <b>Min Duration: </b>3 Months
                    </div>
                </div>
                <button className="company-applybutton">Apply</button>
            </div>
        )
    }
}

export default CompanyOppor
