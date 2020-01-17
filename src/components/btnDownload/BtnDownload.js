import React, { Component } from "react";
import "./BtnDownload.css";

export default class BtnDownload extends Component {
  render() {
    return (
      <div>
        <div className="btn-container-download">
          <a href="/linktheplaystore">{this.props.title}</a>
        </div>
      </div>
    );
  }
}
