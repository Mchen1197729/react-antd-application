import React from "react";

import {Layout, Menu} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {Switch, Route, Link} from 'react-router-dom'

import Nav1 from './views/Nav1/index'
import Nav2 from './views/Nav2/index'
import RouteChildren from './views/RouteChildren/index'

import './App.css'

const {Header, Sider, Content} = Layout;


export default class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
        <Layout style={{minHeight: '100vh'}}>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo"/>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined/>}>
                <Link to='/nav_1'>nav 1</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                <Link to='/nav_2'>nav 2</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined/>}>
                nav 3
              </Menu.Item>
              <Menu.Item key="4" icon={<UploadOutlined/>}>
                <Link to='route_children'>Route.children</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{padding: 0}}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
            </Header>
            <Content
                className="site-layout-background"
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                }}
            >
              <Switch>
                <Route exact path='/nav_1' render={() => <Nav1/>}></Route>
                <Route path='/nav_2' render={() => <Nav2/>}></Route>
                <Route path='/route_children' render={() => <RouteChildren/>}></Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
    );
  }
}