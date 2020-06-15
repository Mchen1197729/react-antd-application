import React from "react";

export default class Nav3 extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClickButton = () => {
    console.log(this.props.location)

  }


  render() {
    return (
        <div>
          <h1>This is nav_3 route</h1>
          <button onClick={this.handleClickButton}>按钮3</button>
        </div>
    );
  }
}
