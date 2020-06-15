import React from "react";
import PropTypes from "prop-types"
import {withRouter} from 'react-router-dom'

class Nav1 extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  clickButton = () => {
    //this.props.history.push('/nav_2')
    console.log(this.props.location)
  }


  render() {
    return (
        <div>
          <h1>This is nav_1 route</h1>
          <button onClick={this.clickButton}>nav_1</button>
        </div>
    );
  }
}

/*
* 在非路由组件中访问this.props.history,this.props.location,this.props.match 需要使用高阶组件:widthRouter进行包装
* */
export default withRouter(Nav1)
