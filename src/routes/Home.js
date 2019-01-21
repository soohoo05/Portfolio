import React from "react";
import Fade from "react-reveal/Fade";

class Home extends React.Component {
  render() {
    return (
      <Fade right duration={3000}>
      <div className="wholeForm">
        <div className="profile">
        <img className="proPic" src="https://res.cloudinary.com/dz1dbcszc/image/upload/r_30/a_360/v1547583518/img_0552_1.jpg" alt="profile" />
        </div>
        <div className="Links">
          <img className="logos" onClick={()=>window.open("https://medium.com/@tyler.soohoo")}width="40px" height="40px" src="https://cdn-images-1.medium.com/max/1600/1*emiGsBgJu2KHWyjluhKXQw.png" alt="medium" />
            <img className="logos" onClick={()=>window.open("https://github.com/soohoo05")}width="40px" height="40px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-wV4WOebhfVtNRUsA05npiKPlEITU29ha8uX-HtSyKej4xVfF" alt="medium" />

      </div>
      </div>
    </Fade>
    );
  }
}

export default Home;
