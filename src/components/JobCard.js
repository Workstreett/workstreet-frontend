import React from 'react'
import '../css/JobCard.css'
import { CalendarIcon, CashIcon, CheckIcon } from '@heroicons/react/outline'

class JobCard extends React.Component {
    /* constructor() {
    super();
    this.state = {
      mainame: "poster poshift",
    };
    this.pressed = this.pressed.bind(this);
  }

  componentDidMount() {
    /* document
      .getElementById("sideBarButton")
      .addEventListener("click", this.pressed);
    document
      .getElementById("sideBarButton2")
   .addEventListener("click", this.pressed);
  }

  pressed() {
    let cl = this.state.mainame;
    if (cl === "poster") {
      this.setState({
        mainame: "poster poshift",
      });
    } else {
      this.setState({
        mainame: "poster",
      });
    }
  } */

    render() {
        return (
            <div className="compCard" id={this.props.id}>
                {/* <div className="comp-side-1">
                    <div className="comp-nameImage">
                        <div className="comp-cl-icon">
                            <img src={this.props.icon} alt="icon" />{' '}
                        </div>
                        <div className="comp-compname">{this.props.name}</div>
                    </div>
                    <div className="comp-comp-desc"> {this.props.compdesc}</div>
                </div> */}
                <div className="comp-side-2">
                    <div>
                        <div className="comp-cl-icon">
                            <img src={this.props.icon} alt="icon" />{' '}
                        </div>
                        {/* <div className="comp-compname">{this.props.name}</div> */}
                    </div>
                    <div className="comp-role">{this.props.role}</div>
                    <div className="comp-roledesc">{this.props.roledesc}</div>
                    <div className="compCard-tagall">
                        <div className="compCard-tag">
                            <CashIcon className="tag-icon" />
                            Paid
                        </div>
                        <div className="compCard-tag">
                            <CalendarIcon className="tag-icon" />
                            June-July 21
                        </div>
                        <div className="compCard-tag">
                            <CheckIcon className="tag-icon" />
                            Part time allowed
                        </div>
                    </div>
                    <button className="comp-apply">Apply</button>
                </div>
                {/* <div className="comp-handles">
                    <ul className="comp-social-icons">
                        <li>
                            <a className="comp-facebook upbut" href="https://www.google.com/">
                                <i className="fa fa-facebook  "></i>
                            </a>
                        </li>
                        <li>
                            <a className="comp-twitter upbut" href="https://www.google.com/">
                                <i className="fa fa-twitter "></i>
                            </a>
                        </li>

                        <li>
                            <a className="comp-instagram upbut" href="https://www.google.com/">
                                <i className="fab fa-instagram "></i>
                            </a>
                        </li>
                        <li>
                            <a className="comp-linkedin upbut" href="https://www.google.com/">
                                <i className="fa fa-linkedin  "></i>
                            </a>
                        </li>
                    </ul>
                </div> */}
            </div>
        )
    }
}

export default JobCard
