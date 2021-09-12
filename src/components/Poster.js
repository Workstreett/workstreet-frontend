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
            <div className="poster" id={this.props.id}>
                <div className="post-side-1">
                    <div className="post-cl-icon">
                        <img className="post-icon" src={this.props.icon} alt="icon" />{' '}
                    </div>
                    <div className="post-compname">{this.props.name}</div>
                    <div className="post-comp-desc"> {this.props.compdesc}</div>
                </div>
                <div className="post-side-2">
                    <div className="post-role">{this.props.role}</div>
                    <div className="post-roledesc">{this.props.roledesc}</div>
                    <div className="post-but">
                        <button className="post-apply upbut">Apply</button>
                        <button className="post-info upbut">More info</button>
                    </div>
                </div>
                <div className="gd-handles">
                    <ul className="gd-social-icons">
                        <li>
                            <a className="gd-facebook upbut" href="https://www.google.com/">
                                <i className="fa fa-facebook  "></i>
                            </a>
                        </li>
                        <li>
                            <a className="gd-twitter upbut" href="https://www.google.com/">
                                <i className="fa fa-twitter "></i>
                            </a>
                        </li>

                        <li>
                            <a className="gd-instagram upbut" href="https://www.google.com/">
                                <i className="fab fa-instagram "></i>
                            </a>
                        </li>
                        <li>
                            <a className="gd-linkedin upbut" href="https://www.google.com/">
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
