import React from "react";
import "../css/sidestyle.css";
import { HashLink } from "react-router-hash-link";

const navLinks = [
  { url: "#one", name: "Sample Company 1" },
  { url: "#two", name: "Sample Company 2" },
  { url: "#three", name: "Sample Company 3" },
  { url: "#four", name: "Sample Company 4" },
];

class PosterSidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      style: "munu",
      menuStatus: "open",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.menuStatus === "open") {
      this.setState({
        menuStatus: "close",
        style: "munu activee",
      });
    } else {
      this.setState({
        menuStatus: "open",
        style: "munu",
      });
    }
  }

  render() {
    return (
      <div>
        <button
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
      </div>
    );
  }
}

export default PosterSidebar;
