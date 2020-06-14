import React from "react";
import ReactDOM from "react-dom";
import {Link, Route} from "react-router-dom";

export default function ListItemLink({to, ...rest}) {
  return (
      <Route
          path={to}
          children={({match}) => (
              <li className={match ? "active" : ""}>
                <Link to={to} {...rest} />
              </li>
          )}
      />
  );
}