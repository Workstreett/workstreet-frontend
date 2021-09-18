import React from 'react'
import '../css/card.css'

// names , path, position, bio, about,
function Card(props) {
    return (
        <div className="card-intro">
            <div className="f-card">
                <img src={props.path} alt="Founder-Photo" />
                <div className="f-inner-card">
                    <div className="f-front">
                        <p className="f-name">{props.names}</p>
                        <p className="f-position">{props.position}</p>
                        <p className="f-bio">{props.bio}</p>
                    </div>
                    <div className="f-back">
                        <p className="b-about ">{props.about}</p>
                        <div>
                            <ul className="b-social-icons">
                                <li>
                                    <a className="facebook" href={props.f_id}>
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="twitter" href={props.t_id}>
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="instagram" href={props.i_id}>
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="linkedin" href={props.l_id}>
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
