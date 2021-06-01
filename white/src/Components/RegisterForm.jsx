import React from "react";
import joi from "joi-browser";
import Form from "./Form";
class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    error: {},
  };

  schema = {
    username: joi.string().email().required().label("Username"),
    password: joi.string().required().min(5).label("Password"),
    name: joi.string().required(),
  };

  doSubmit() {
    console.log("Submitted");
  }

  render() {
    return (
      <div>
        <form>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
