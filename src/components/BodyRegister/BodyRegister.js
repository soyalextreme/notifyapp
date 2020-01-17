import React, { Component } from "react";
import Proxy from "../../setupProxy";

import "./BodyRegister.css";

export default class BodyRegister extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      dataConfirmed: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendData = this.sendData.bind(this);
  }

  handleChange(e) {
    //desde el input
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  sendData() {
    const username = this.state.username;
    const email = this.state.email;
    const password = this.state.password;
    const method = async () => {
      // const proxyurl = "https://cors-anywhere.herokuapp.com/";
      // const url = "https://tomanota-server.herokuapp.com/api/auth/signup";
      const url = "api/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          origin: "x-requested-with"
        },
        body: {
          username,
          email,
          password
        }
      });
      const responseJson = await response.json();
      return console.log(responseJson);
    };

    if (this.state.dataConfirmed === false) this.confirmData();
    if (this.state.dataConfirmed === true) method();
  }

  confirmData() {
    const password = this.state.password;
    const confirmPassword = this.state.confirmPassword;

    if (this.state.username.length < 5)
      return alert("revisa tu usuario no es valido ");
    if (this.state.username.includes(" "))
      return alert("el usuario no debe de contener espacios");
    if (!this.state.email.includes("@"))
      return alert("revisa tu correo no es valido");
    if (password !== confirmPassword)
      return alert("las contraseñas no son iguales");
    if (this.state.password.length < 5)
      return alert("contraseña demasiado corta");

    this.setState({ dataConfirmed: true });
  }

  render() {
    return (
      <div className="BodyRegisterAll">
        <div className="input-conteiner">
          <div className="row">
            <div className="input-field col s8 ml-4">
              <input
                name="username"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={this.state.username}
              />
              <label className="active" for="first_name2">
                Usuario
              </label>
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="validate"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
                <label for="email">Email</label>
                <span
                  className="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  Recuerda usar datos que no esten registrados
                </span>
              </div>
              <div className="input-field col s12">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
                <label for="password">Password</label>
              </div>
              <div className="input-field col s12">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  name="confirmPassword"
                  onChange={this.handleChange}
                  value={this.state.confirmPassword}
                />
                <label for="password">Confirm Password</label>
              </div>
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
                onClick={this.sendData}
              >
                Comenzemos...
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
