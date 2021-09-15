import React from 'react'
import '../css/post.css'

class Poster extends React.Component {
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
                <div className="comp-side-1">
                    <div className="comp-cl-icon">
                        <img className="comp-icon" src={this.props.icon} alt="icon" />{' '}
                    </div>
                    <div className="comp-compname">{this.props.name}</div>
                    <div className="comp-comp-desc"> {this.props.compdesc}</div>
                </div>
                <div className="comp-side-2">
                    <div className="comp-role">{this.props.role}</div>
                    <div className="comp-roledesc">{this.props.roledesc}</div>
                    <div className="compCard-tagall">
                        <div className="compCard-tag">paid</div>
                        <div className="compCard-tag">2 Months</div>
                        <div className="compCard-tag">June-July</div>
                    </div>

                    <button className="comp-apply upbut">Apply</button>
                </div>
                <div className="comp-handles">
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
                </div>
            </div>
        )
    }
}

export default Poster
