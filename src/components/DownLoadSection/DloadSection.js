import React, { Component } from "react";
import BtnDownload from "../btnDownload/BtnDownload.js";
import "./DloadSection.css";

export default class DloadSection extends Component {
  render() {
    return (
      <div className="content-container2">
        <ul>
          <li className="android-ios">
            <img
              src={require("../../rsc/Android.svg")}
              alt="Android Icon"
            ></img>
            <BtnDownload title="Descargar" />
          </li>
          <li className="android-ios">
            <img src={require("../../rsc/Ios.svg")} alt="Ios Icon"></img>
            <BtnDownload title="Descargar" />
          </li>
        </ul>
      </div>
    );
  }
}
