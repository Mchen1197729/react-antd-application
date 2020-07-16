import React from 'react';
import ReactDOM from 'react-dom';
//引入react-router-dom路由
import {BrowserRouter} from "react-router-dom"
//引入antd的样式(一次性整体引入 也可以在使用到某个antd组件时再单独引入该组件的样式文件)
import 'antd/dist/antd.css'
import './index.css';
import App from './App';


//推荐使用history模式的路由(需要服务器额外的配置)
ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
    document.getElementById('root'));
