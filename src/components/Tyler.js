import React from 'react';

class Tyler extends React.Component {
  state={
    views:"",
    emails:[]
  }
  componentDidMount(){
    fetch('https://tshpdb.herokuapp.com/views/1')
    .then(res => res.json())
    .then(json =>{this.setState({views:json.views})
    })

  fetch('https://tshpdb.herokuapp.com/emails')
  .then(res=>res.json())
  .then(json=>{console.log(json)})
}
  removeViews = () => {
    fetch('https://tshpdb.herokuapp.com/views/1')
    .then(res => res.json())
    .then(json =>{
    fetch(`https://tshpdb.herokuapp.com/views/1`,{
      method: "PATCH",
      headers: {"Content-type" : "application/json"},
      body: JSON.stringify({views:json.views-2})
})
})
  }
  render() {
    console.log(this.state.emails)
    return (
    <React.Fragment>
      <h1>Views: {this.state.views}</h1>
    <button onClick={e=>this.removeViews()}>Remove View</button>
    </React.Fragment>
  )
  }
}

export default Tyler;
