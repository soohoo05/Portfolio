import React from 'react';
import ProjectContainer from '../components/ProjectContainer'
import Fade from "react-reveal/Fade";

class Projects extends React.Component {
  render() {

    return (
      <Fade right duration={3000}>
      <ProjectContainer/>
      </Fade>
    )
  }
}

export default Projects;
