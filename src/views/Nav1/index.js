import React from "react";

export default class Nav1 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log('Nav1 will unmount')
  }


  render() {
    console.log('Nav1 render()')
    return (
        <div>
          <h1>This is nav_1 route</h1>
        </div>
    );
  }
}