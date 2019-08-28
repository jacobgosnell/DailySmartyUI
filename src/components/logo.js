import React, { Component } from "react";

class Logo extends Component {
  render() {
    const size = {
      height: 105,
      width: 105
    }
    return (
      <div className="logo-main"> 
        <img style={size} alt="daily smarty ui image logo big" src="/assets/ds_circle_logo.png" />
      </div>
    )
  }
}

export default Logo;