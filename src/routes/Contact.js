import React from "react";
import Fade from "react-reveal/Fade";

class Contact extends React.Component {
  render() {
    return (
      <Fade right duration={3000}>
        <div className="Links">
          <h1 className="contactHeader">Email: </h1>
          <h1 className="contactHeader">tyler.soohoo@gmail.com</h1>
          <img
            className="logos"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/tyler-soo-hoo-937328125/"
              )
            }
            width="40px"
            height="40px"
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="linkedIn"
          />
        </div>
      </Fade>
    );
  }
}
Contact.propTypes = {};
export default Contact;
