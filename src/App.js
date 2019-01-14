import React, { Component } from "react";
import "./App.css";
import { withRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Keyboard from "./components/Keyboard";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";
import Tyler from "./components/Tyler";
import Intro from "./components/Intro";
import Email from "./components/Email";
class App extends Component {
  state = {
    music: true
  };

  // {this.state.music ? <iframe width="0" height="0" src="https://www.youtube.com/embed/5rD98g7imOA?start=3&wmode=opaque&autohide=1&autoplay=1&enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>:null}

  componentDidMount() {
    fetch("http://localhost:3000/views/1")
      .then(res => res.json())
      .then(json => {
        fetch(`http://localhost:3000/views/1`, {
          method: "PATCH",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ views: json.views + 1 })
        });
      });
  }
  render() {
    return (
      <div className="bg">
        <Fade top duration={3000}>
          <center>
            {this.state.music ? (
              <button
                className="myButton"
                onClick={() => this.setState({ music: false })}
              >
                Disable Music
              </button>
            ) : (
              <button
                className="myButton"
                onClick={() => this.setState({ music: true })}
              >
                Play Music
              </button>
            )}
          </center>
        </Fade>
        <Fade top duration={3000}>
          <Fade>
            <Intro />
          </Fade>
        </Fade>
        <div className="Board">
          <Rotate bottom left duration={3000}>
            <Keyboard />
          </Rotate>
        </div>
        <div className="Routes">
          <center className="center">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Tyler" component={Tyler} />
              <Route exact path="/Email" component={Email} />
            </Switch>
          </center>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
