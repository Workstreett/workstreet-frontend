import React from "react";
import PosterGrid from "../PosterGrid.js";
import PosterSidebar from "../PosterSidebar.js";
import PosterPhoneGrid from "../PosterPhoneGrid.js";

class Consultancy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 850 });
  }

  render() {
    const isDesktop = this.state.isDesktop;
    return (
      <div>
        {isDesktop ? (
          <div>
            <PosterSidebar />
            <PosterGrid />
          </div>
        ) : (
          <PosterPhoneGrid />
        )}
      </div>
    );
  }
}

export default Consultancy;
