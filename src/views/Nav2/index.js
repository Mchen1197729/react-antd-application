import React from "react";

export default class Nav2 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log('Nav2 will unmount')
  }


  render() {
    console.log('Nav2 render()')
    return (
        <div>
          <h1>This is nav_2 route</h1>
        </div>
    );
  }
}