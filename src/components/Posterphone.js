import React from "react";
import "../css/postphone.css";

class Posterphone extends React.Component {
  render() {
    return (
      <div className="post-phone">
        <img
          className="phone-poster-image"
          src={this.props.logo}
          alt="phone-poster"
        />
        <div className="post-phone-text-1">
          <span>{this.props.name}</span>
        </div>
        <br />
        <div className="post-phone-text-2">
          <span>{this.props.role}</span>
        </div>

        <div className="post-phone-but-div">
          <button className="post-phone-but upbut">Apply</button>
        </div>
        <div className="gp-handles">
          <ul className="gp-social-icons">
            <li>
              <a className="gp-facebook upbut" href="https://www.google.com/">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a className="gp-twitter upbut" href="https://www.google.com/">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a className="gp-instagram upbut" href="https://www.google.com/">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a className="gp-linkedin " href="https://www.google.com/">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Posterphone;
