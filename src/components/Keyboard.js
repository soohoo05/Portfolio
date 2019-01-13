import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";

class Keyboard extends React.Component {
  home = () =>{
    this.props.history.replace('/')
    this.props.setRevealTrue()
  }

  CClick = () =>{
    this.props.history.replace('/Tyler')
    this.props.setRevealFalse()
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
            <div className="key letter used" >E</div>
            <div className="key letter" />
            <div className="key letter" />
            <div className="key letter" />
            <div className="key letter" />
            <div className="key letter" />
            <div className="key letter" />
            <div className="key letter used">P</div>
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
            <div className="key letter used">A</div>
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
            <div className="key letter used" onClick={()=>this.CClick()}>C</div>
            <div className="key letter" />
            <div className="key letter used">B</div>
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
