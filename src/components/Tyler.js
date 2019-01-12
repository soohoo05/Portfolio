import React from 'react';

class Tyler extends React.Component {
  removeViews = () => {
    console.log("hello")
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
    return <button onClick={e=>this.removeViews()}>Remove View</button>
  }
}
Tyler.propTypes = {

};
export default Tyler;
