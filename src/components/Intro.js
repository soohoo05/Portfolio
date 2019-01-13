import React from 'react';
import Bounce from 'react-reveal/Bounce';
class Intro extends React.Component {
  render() {
    return <div className="Welcome">
    <Bounce right duration={3000}>
    <h1>Welcome to the Portfolio of Tyler Soo Hoo. Click on the virtual keyboard buttons highlighted in red to see an
      <span className="welcomeKeys"> (A)</span>bout me page, my
      <span className="welcomeKeys"> (B)</span>logs,
      <span className="welcomeKeys"> (C)</span>ontact information and
      <span className="welcomeKeys"> (P)</span>rojects. Feel free to drop your Email in the
      <span className="welcomeKeys"> (E)</span>mail page as well!</h1>
      </Bounce>
    </div>
  }
}

export default Intro;
