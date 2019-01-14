import React from "react";
import { withRouter} from "react-router-dom";

class Keyboard extends React.Component {
  home = () =>{
    this.props.history.replace('/')

  }

  KClick = (e) =>{
    switch(e.target.innerHTML){
      case "E":
      this.props.history.replace('/Email')
      break;
      case "P":
      this.props.history.replace('/Projects')
        break;
      case "A":
      this.props.history.replace('/About')
        break;
      case "B":
      this.props.history.replace('/Blogs')
        break;
        case "C":
        this.props.history.replace('/Contact')
        break;
        default:
        console.log("Error")
    }


  }
  render() {
    return (
      <React.Fragment>
        <div className="keyboard">
          <div className="logo" onClick={(e)=>{this.home(e)}}>TSH</div>

          <div className="section-a">
            <div className="key function space1" />

            <div className="key function" />
            <div className="key function" />
            <div className="key function" />

            <div className="key function space2" />
            <div className="key function" />
            <div className="key function" />
            <div className="key function" />
            <div className="key function space2" />

            <div className="key function" />
            <div className="key function" />
            <div className="key function" />
            <div className="key function" />

            <div className="key num dual">
              <br />
            </div>

            <div className="key num dual">
              <br />
            </div>
            <div className="key num dual">
              <br />
            </div>
            <div className="key num dual">
              <br />
            </div>
            <div className="key num dual">
              <br />
            </div>
            <div className="key num dual">
              <br />
            </div>
            <div className="key num dual">
              <br />
            </div>
            <div className="key num dual">
              <br />
            </div>
            <div className="key num dual">
              <br />
            </div>
            <div className="key num dual">
              <br />
            </div>
            <div className="key num dual">
              <br />
            </div>
            <div className="key num dual">
              <br />
            </div>
            <div className="key num dual">
              <br />
            </div>
            <div className="key backspace" />

            <div className="key tab" />

            <div className="key letter" />
            <div className="key letter" />
            <div className="key letter used" onClick={(e)=>this.KClick(e)}>E</div>
            <div className="key letter" />
            <div className="key letter" />
            <div className="key letter" />
            <div className="key letter" />
            <div className="key letter" />
            <div className="key letter" />
            <div className="key letter used" onClick={(e)=>this.KClick(e)}>P</div>
            <div className="key dual">
              <br />
            </div>
            <div className="key dual">
              <br />
            </div>
            <div className="key letter dual slash">
              <br />
            </div>
            <div className="key caps">
              <br />
            </div>
            <div className="key letter used" onClick={(e)=>this.KClick(e)}>A</div>
            <div className="key letter" />
            <div className="key letter" />
            <div className="key letter" />
            <div className="key letter" />
            <div className="key letter" />
            <div className="key letter" />
            <div className="key letter" />
            <div className="key letter" />
            <div className="key dual">
              <br />
            </div>
            <div className="key dual">
              <br />
            </div>
            <div className="key enter" />

            <div className="key shift left" />
            <div className="key letter" />
            <div className="key letter" />
            <div className="key letter used" onClick={(e)=>this.KClick(e)}>C</div>
            <div className="key letter" />
            <div className="key letter used" onClick={(e)=>this.KClick(e)}>B</div>
            <div className="key letter" />
            <div className="key letter" />
            <div className="key dual">
              <br />
            </div>
            <div className="key dual">
              <br />
            </div>
            <div className="key dual">
              <br />
            </div>
            <div className="key shift right" />
            <div className="key ctrl" />
            <div className="key" />
            <div className="key" />
            <div className="key space" />
            <div className="key" />
            <div className="key" />
            <div className="key" />
            <div className="key ctrl" />
          </div>

          <div className="section-b">
            <div className="key function small" />
            <div className="key function small" />
            <div className="key function small" />

            <div className="sec-func">
              <div className="key" />
              <div className="key" />
              <div className="key dual" />
              <div className="key" />
              <div className="key" />
              <div className="key dual" />

              <div className="arrows">
                <div className="key hidden" />
                <div className="key" />
                <div className="key hidden" />
                <div className="key" />
                <div className="key" />
                <div className="key" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Keyboard);
