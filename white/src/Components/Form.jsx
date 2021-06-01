import { Component } from "react";
import joi from "joi-browser";
import Input from "./Input";
import Select from "./Select";

class Form extends Component {
  state = {
    data: {},
    error: {},
  };
  validate = () => {
    const result = joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    if (!result.error) return null;

    const error = {};
    for (let item of result.error.details) {
      error[item.path[0]] = item.message;
    }
    return error;
  };

  handleLogin = (e) => {
    e.preventDefault();

    const error = this.validate();
    this.setState({ error: error || {} });
    if (error) return;
    this.doSubmit();
  };
  validateProp = ({ name, value }) => {
    const type = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = joi.validate(type, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget }) => {
    const error = { ...this.state.error };
    const errorMsg = this.validateProp(currentTarget);
    if (errorMsg) error[currentTarget.name] = errorMsg;
    else delete error[currentTarget.name];

    const data = { ...this.state.data };
    data[currentTarget.name] = currentTarget.value;

    this.setState({ data, error });
  };

  renderInput(name, label, type = "text") {
    return (
      <Input
        type={type}
        value={this.state.data[name]}
        name={name}
        label={label}
        error={this.state.error[name]}
        onChange={this.handleChange}
      />
    );
  }

  renderSelect(name, label, options) {
    const { data, error } = this.state;
    return (
      <Select
        name={name}
        label={label}
        value={data[name]}
        options={options}
        error={error[name]}
        onChange={this.handleChange}
      />
    );
  }

  renderButton(label) {
    return (
      <button
        disabled={this.validate()}
        className="btn btn-primary"
        onClick={this.handleLogin}
      >
        {label}
      </button>
    );
  }
}

export default Form;
