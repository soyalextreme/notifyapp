import React, { Component } from "react";
import Logo from "../Logo/Logo";
import "./navbar.css";
import { BrowserRouter as Router } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="nav-container">
            <div className="nav-brand">
              <Logo />
            </div>
            <div className="nav-list-container">
              <ul className="nav-list">
                <h1 className="more">+</h1>
                <div className="dropable">
                  <li>
                    <div className="btn-container">
                      <a href="/IniciarSesion">{this.props.tab1}</a>
                      {/* <button
                      onClick={async () => {
                        const proxyurl = "https://cors-anywhere.herokuapp.com/";
                        const url =
                          "https://tomanota-server.herokuapp.com/api/task/getNote";
                        const response = await fetch(proxyurl + url, {
                          method: "GET",
                          headers: {
                            Accept: "application/json",
                            "Type-Content": "application/json",
                            "auth-token":
                              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGZjYTgzMzJkYTRkMzAwMTdhZDNlY2UiLCJpYXQiOjE1NzY4MzkzNjQsImV4cCI6MTU3NjkyNTc2NH0.8qhKesuv2uKdVlWO0Ei6OznjKM50cmn4Z8KFtS18fPw"
                          }
                        });
                        const jsonResponse = await response.json();
                        return console.log(jsonResponse);
                      }}
                    >
                      {this.props.tab1}
                    </button> */}
                    </div>
                  </li>
                  <li>
                    <div className="btn-container">
                      <a href="/Register">{this.props.tab2}</a>
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
