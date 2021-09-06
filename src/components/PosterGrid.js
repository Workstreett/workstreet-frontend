import React from "react";
import Poster from "./Poster.js";
import "../css/postergrid.css";
import img1 from "../img/174.jpg";
import img2 from "../img/962.jpg";
import img3 from "../img/18.jpg";

class PosterGrid extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "poster-grid",
    };
  }

  render() {
    return (
      <div className={this.state.name}>
        <Poster logo={img1} name="Sample Company 1" id="one" image={img2} />
        <Poster logo={img2} name="Sample Company 2" id="two" image={img3} />
        <Poster logo={img3} name="Sample Company 3" id="three" image={img1} />
        <Poster logo={img3} name="Sample Company 4" id="four" image={img2} />
      </div>
    );
  }
}

export default PosterGrid;
