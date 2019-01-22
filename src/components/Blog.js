import React from 'react';
import Fade from "react-reveal/Fade";

class Blog extends React.Component {
  render() {
    console.log(this.props)
    return (<Fade duration={2000}>
    <div className="indProject">
            <h1>{this.props.theBlog.title}</h1>
            <img onClick={()=>window.open(this.props.theBlog.link)}src="https://cdn-images-1.medium.com/max/1600/1*emiGsBgJu2KHWyjluhKXQw.png" alt="github icon" className="githubicon"/>
            </div>
            </Fade>)
  }
}
Blog.propTypes = {

};
export default Blog;
