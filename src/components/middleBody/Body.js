import React, { Component } from "react";
import "./Body.css";

export default class Body extends Component {
  render() {
    return (
      <div>
        <ul className="left">
          <div className="icon-container">
            <a href="/">
              <img
                alt="icon-notebook"
                src={require("../../rsc/icon.svg")}
              ></img>
            </a>
          </div>
        </ul>
        <ul className="rigth">
          <div className="list-container">
            <div className="word-container1">
              <li>
                <p>Rápido</p>
              </li>
            </div>
            <div className="word-container2">
              <li>
                <p>Simple</p>
              </li>
            </div>
            <div className="word-container3">
              <li>
                <p>Efectivo</p>
              </li>
            </div>
          </div>
        </ul>
      </div>
    );
  }
}
