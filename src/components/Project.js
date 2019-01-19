import React from 'react';
import Fade from "react-reveal/Fade";

class Project extends React.Component {
  render() {

    return(<Fade duration={2000}>
    <div className="indProject">
            <h1>{this.props.theProject.name}</h1>
            <img onClick={()=>window.open(this.props.theProject.Link)}src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github icon" className="githubicon"/>
            </div>
            </Fade>
          )
  }
}

export default Project;
