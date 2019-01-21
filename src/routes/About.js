import React from "react";
import Fade from "react-reveal/Fade";

class About extends React.Component {
  render() {
    return (
      <Fade right duration={3000}>
        <h1 className="aboutHeader">About Me</h1>
        <div className="aboutDiv">
          <p className="aboutParagraph">
            My name is Tyler Soo Hoo. I'm a Full Stack Web Developer with a
            background in marketing and IT and an interest in music and health.
            I graduated Queens College with a Bachelors of Arts degree in
            Computer Science. After a year in IT and Marketing at a hotel, I
            decided to come back to the Software Engineering industry by going
            to Flatiron School to learn new skills. My proficiencies include
            Ruby, Ruby on Rails, Javascript, React and Redux. I have knowledge
            in HTML, CSS, SQL, Node.js and Java
          </p>
        </div>
      </Fade>
    );
  }
}

export default About;
