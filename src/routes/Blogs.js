import React from 'react';
import Fade from "react-reveal/Fade";
import BlogContainer from "../components/BlogContainer"
class Blogs extends React.Component {
  render() {
    return   <Fade right duration={3000}>
      <BlogContainer/>
      </Fade>;
  }
}

export default Blogs;
