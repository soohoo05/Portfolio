import React from 'react';
import axios from 'axios';
import Blog from './Blog'
class BlogContainer extends React.Component {
  state={
    blogs:[]
  }
  componentDidMount(){
    axios.get('http://localhost:3000/blogs')
    .then(res => this.setState({blogs:res.data}))
  }
  render() {
    let mapped=this.state.blogs.map(blog => <Blog theBlog={blog} key={blog.id}/>)
    return(<React.Fragment>
      <h1 className="blogprojectHeader">Blogs</h1>
      <div className="BlogsProjects">{mapped}</div>
      </React.Fragment>
    )
  }
}
BlogContainer.propTypes = {

};
export default BlogContainer;
