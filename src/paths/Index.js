import React, { Component } from "react";
import NavBar from "../components/navbar/NavBar.js";
import Body from "../components/middleBody/Body.js";
import DloadSection from "../components/DownLoadSection/DloadSection";
import Footer from "../components/Footer/Footer";
import "./Index.css";

export default class Index extends Component {
  render() {
    return (
      <div>
        <NavBar tab1="Iniciar sesión" tab2="Registrate" />
        <Body />
        <DloadSection />
        <Footer className="foot" />
      </div>
    );
  }
}
