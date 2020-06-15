import React from "react";
import {
  Switch,
  Route,
  Link,
  useParams,
  useHistory
} from "react-router-dom";
import {func} from "prop-types";

export default class URLParams extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <h2>Accounts</h2>
          <ul>
            <li>
              <Link to="netflix">Netflix</Link>
            </li>
            <li>
              <Link to="zillow-group">Zillow Group</Link>
            </li>
            <li>
              <Link to="yahoo">Yahoo</Link>
            </li>
            <li>
              <Link to="modus-create">Modus Create</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/:id" children={<Child/>}/>
          </Switch>
        </div>
    );
  }
}

function Child() {
  let history = useHistory();

  function handleClickButton() {
    // history.push('antd111')
  }

  return (
      <div>
        <button onClick={handleClickButton}>按钮</button>
      </div>
  );
}
