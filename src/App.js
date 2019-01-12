import React, { Component } from "react";
import "./App.css";
import { withRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Keyboard from "./components/Keyboard";
import Name from "./components/Name";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";
import Tyler from './components/Tyler'
import { Button, Segment } from 'semantic-ui-react'
class App extends Component {
  state={
    reveal:false,
    music:true
  }

  changeReveal = (e) => {
    this.setState({reveal:!this.state.reveal})
  }

  componentDidMount(){
    fetch('http://localhost:3000/views/1')
    .then(res => res.json())
    .then(json =>{
    fetch(`http://localhost:3000/views/1`,{
      method: "PATCH",
      headers: {"Content-type" : "application/json"},
      body: JSON.stringify({views:json.views+1})
})
})
  }
  render() {
    return (
      <div>
        <Fade top duration={3000}>
          <center>
        {this.state.music ? <button className="myButton" onClick={()=>this.setState({music:false})}>Disable Music</button>:<button className="myButton" onClick={()=>this.setState({music:true})}>Play Music</button>}
        {this.state.music ? <iframe width="0" height="0" src="https://www.youtube.com/embed/5rD98g7imOA?start=3&wmode=opaque&autohide=1&autoplay=1&enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>:null}
          </center>
        </Fade>
        <Fade top duration={3000}>
          <Name />
        </Fade>
        <div className="Board">
          <Rotate bottom left duration={3000}>
            <Keyboard changeReveal={this.changeReveal}/>
          </Rotate>
        </div>
        <div className="Routes">
          <Fade right duration={3000}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Tyler" component={Tyler} />
          </Switch>
          </Fade>
        </div>

        {this.state.reveal ? <Fade><h1>Hello</h1></Fade> :null}
      </div>
    );
  }
}

export default withRouter(App);