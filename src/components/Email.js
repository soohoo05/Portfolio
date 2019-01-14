import React from "react";
import Fade from "react-reveal/Fade";
import axios from "axios";
class Email extends React.Component {
  state = {
    email: "",
    error: ""
  };
  changeHandler = e => {
    this.setState({ email: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    if (this.validateEmail(this.state.email)) {
      axios.post("http://localhost:3000/emails", {
        email: this.state.email
      });
      this.setState({ email: "", error: "Email Submitted!" });
    } else {
      this.setState({ error: "Invalid Email/No Email submitted!" });
    }
  };

  validateEmail = email => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  render() {
    return (
      <Fade right duration={3000}>
        <div className="wholeForm">
          <form
            className="form-container"
            onSubmit={e => this.submitHandler(e)}
          >
            <div className="form-title">
              <h2>Email</h2>
            </div>
            <input
              className="form-field"
              value={this.state.email}
              type="text"
              name="firstname"
              placeholder="email"
              onChange={e => this.changeHandler(e)}
            />
            <br />
            {this.state.error ? (
              <span className="error">{this.state.error}</span>
            ) : null}
            <div className="submit-container">
              <input className="submit-button" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Email;
