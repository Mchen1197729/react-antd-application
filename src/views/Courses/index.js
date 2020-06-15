import React from "react";

import {withRouter} from 'react-router-dom'

class Courses extends React.Component {
  constructor(props) {
    super(props);
  }


  clickButton = () => {
    console.log(this.props.location)
  }

  render() {
    let {pathname, search, state} = this.props.location
    return (
        <div>
          <button onClick={this.clickButton}>按钮1</button>
          <ul>
            <li>this.props.location.pathname:{pathname}</li>
            <li>this.props.location.search:{search}</li>
            <li>this.props.location.state.fromSider:{state.fromSider + ''}</li>
          </ul>
        </div>
    );
  }
}

export default withRouter(Courses)
