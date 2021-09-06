import React from "react";
import "../css/post.css";

class Poster extends React.Component {
  constructor() {
    super();
    this.state = {
      mainame: "poster",
      socname: "gd-social-icons",
      imname: "pos-imag",
      butname: "pos-but upbut",
      imgtit: "pos-name",
    };
    this.pressed = this.pressed.bind(this);
  }

  componentDidMount() {
    document
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
        socname: "gd-social-icons socshift",
        imname: "pos-imag imshift",
        butname: "pos-but upbut but-shift",
        imgtit: "pos-name name-shift",
      });
    } else {
      this.setState({
        mainame: "poster",
        socname: "gd-social-icons",
        imname: "pos-imag ",
        butname: "pos-but upbut",
        imgtit: "pos-name",
      });
    }
  }

  render() {
    return (
      <div className="poster" id={this.props.id}>
        <div className={this.state.imgtit}>{this.props.name}</div>

        <img
          src={this.props.image}
          className={this.state.imname}
          alt="bharat"
        />

        <div className="img-footer">
          <div className="gd-handles">
            <ul className={this.state.socname}>
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
                <a
                  className="gd-instagram upbut"
                  href="https://www.google.com/"
                >
                  <i class="fab fa-instagram "></i>
                </a>
              </li>
              <li>
                <a className="gd-linkedin upbut" href="https://www.google.com/">
                  <i className="fa fa-linkedin  "></i>
                </a>
              </li>
            </ul>
          </div>
          <button className={this.state.butname}>Apply</button>
        </div>
      </div>
    );
  }
}

export default Poster;
