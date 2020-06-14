import React from "react";
import ListItemLink from './ListItemLink'

export default class RouteChildren extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <ul>
            <ListItemLink to="/somewhere">somewhere</ListItemLink>
            <ListItemLink to="/somewhere-else">somewhere-else</ListItemLink>
          </ul>
        </div>
    );
  }
}