import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div classname="FooterAll">
        <p className="FooterShow">+</p>
        <div className="FooterConteiner">
          <ul className="FooterList">
            <li className="FooterItem">
              <p className="FooterContacto">contacto: tomanota@gmail.com</p>
            </li>
            <li className="FooterItem">
              <p className="FooterBrand">By Alejandro Andrade Soriano</p>
            </li>
            <li className="FooterItem">
              <a href="/# ">Apoyame con alguna donacion</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
