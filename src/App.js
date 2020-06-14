import React from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom'

import AntdButton from './views/AntdButton/index'

function App() {
  return (
      <div className="App">
        <nav>
          <Link to="/antd-button">antd-button</Link>
        </nav>
        <div>
          <Route path='/antd-button' component={AntdButton}/>
        </div>
      </div>
  );
}

export default App;
