import React, { Component } from "react";
import logo from "../../rsc/logo.svg";

export default class Logo extends Component {
  render() {
    return (
      <div>
        <a href="/">
          <img src={logo} alt="logo-tomanota" />
        </a>
      </div>
    );
  }
}
