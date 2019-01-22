import React from 'react';
import axios from 'axios';
import Project from './Project';

class ProjectContainer extends React.Component {
  state={
    projects:[]
  }
  componentDidMount(){
    axios.get('http://localhost:3000/projects')
    .then(res => this.setState({projects:res.data}))
  }
  render() {
    let mapped=this.state.projects.map(project => <Project theProject={project} key={project.id}/>)
    return(<React.Fragment>
      <h1 className="blogprojectHeader">Projects</h1>
      <div className="BlogsProjects">{mapped}</div>
      </React.Fragment>
    )
  }
}

export default ProjectContainer;
