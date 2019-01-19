import React from 'react';

class Tyler extends React.Component {
  state={
    views:""
  }
  componentDidMount(){
    fetch('http://localhost:3000/views/1')
    .then(res => res.json())
    .then(json =>{this.setState({views:json.views})
    })
  }
  removeViews = () => {
    fetch('http://localhost:3000/views/1')
    .then(res => res.json())
    .then(json =>{
    fetch(`http://localhost:3000/views/1`,{
      method: "PATCH",
      headers: {"Content-type" : "application/json"},
      body: JSON.stringify({views:json.views-2})
})
})
  }
  render() {
    return (
    <React.Fragment>
      <h1>Views: {this.state.views}</h1>
    <button onClick={e=>this.removeViews()}>Remove View</button>
    </React.Fragment>
  )
  }
}

export default Tyler;
