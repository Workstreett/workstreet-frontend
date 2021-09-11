import React from "react";
import "../css/sidestyle.css";
import { Link } from "react-router-dom";

/*const navLinks = [
  { url: "#one", name: "Sample Company 1" },
  { url: "#two", name: "Sample Company 2" },
  { url: "#three", name: "Sample Company 3" },
  { url: "#four", name: "Sample Company 4" },
];*/

class PosterSidebar extends React.Component {
  render() {
    return (
      <div className="side-menu">
        <ul className="fa-ul">
          <li>
            <Link to="/workstreet">
              <span className="fa-li side-icon">
                <i class="fas fa-home fa-2x"></i>
              </span>
              <div className="li-text">Home</div>
            </Link>
          </li>

          <li>
            <Link to="/workstreet/companies">
              <span className="fa-li side-icon">
                <i class="fas fa-building fa-2x"></i>
              </span>
              <div className="li-text">Company</div>
            </Link>
          </li>
          <li>
            <Link to="/workstreet/consultancy">
              <span className="fa-li side-icon">
                <i class="fas fa-th-large fa-2x"></i>
              </span>
              <div className="li-text">Categories</div>
            </Link>
          </li>
          <li>
            <Link to="/workstreet/dashboard">
              <span className="fa-li side-icon">
                <i class="fas fa-user-circle fa-2x"></i>
              </span>
              <div className="li-text">Profile</div>
            </Link>
          </li>
        </ul>
        <ul className="fa-ul log-out">
          <li>
            <Link to="/workstreet/sign-out">
              <span className="fa-li side-icon">
                <i class="fas fa-sign-out-alt fa-2x"></i>
              </span>
              <div className="li-text-out">Log-Out</div>
            </Link>
          </li>
        </ul>
      </div>
    );

    /*<button
          id="sideBarButton"
          className="sidebutton"
          onClick={this.handleClick}
        >
          Company List
        </button>
        <div className={this.state.style}>
          <ul>
            <li className="munubut">
              <button
                className="munubutton"
                id="sideBarButton2"
                onClick={this.handleClick}
              >
                <i class="far fa-times fa-3x" style={{ color: "#a4abb6" }}></i>
              </button>
            </li>
            {navLinks.map(({ url, name }) => (
              <li className="munuli">
                <HashLink
                  to={url}
                  scroll={(el) =>
                    el.scrollIntoView({
                      behavior: "smooth",
                      block: "end",
                    })
                  }
                >
                  {name}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
                </div>*/
  }
}

export default PosterSidebar;
