import React from 'react';
import ReactDOM from 'react-dom';
//引入react-router-dom路由
import {BrowserRouter} from "react-router-dom"
//引入antd的样式
import 'antd/dist/antd.css'
import './index.css';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <BrowserRouter basename='/antd'>
      <App/>
    </BrowserRouter>,
    document.getElementById('root'));
