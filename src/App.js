import React from "react";

import {Layout, Menu} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {Switch, Route, Link, Redirect} from 'react-router-dom'

import Nav1 from './views/Nav1/index'
import Nav2 from './views/Nav2/index'
import Nav3 from './views/Nav3/index'
import RouteChildren from './views/RouteChildren/index'
import Courses from './views/Courses/index'
import URLParams from './views/URLParams/index'

import './App.css'

const {Header, Sider, Content} = Layout;


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      isAllowed: false
    };
  }

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
            <Menu theme='dark' mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined/>}>
                <Link to='/nav_1'>nav 1</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                <Link to='/nav_2'>nav 2</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<VideoCameraOutlined/>}>
                <Link to='/nav_3'>nav 3</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<UploadOutlined/>}>
                <Link to='route_children'>Route.children</Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<UploadOutlined/>}>
                <Link to={{
                  pathname: "/courses",
                  search: "?sort=name",
                  hash: "#the-hash",
                  state: {fromSider: true}
                }}>courses</Link>
              </Menu.Item>
              <Menu.Item key="6" icon={<UploadOutlined/>}>
                <Link to='/url_params'>URLParams</Link>
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
            <Content className="site-layout-background"
                     style={{
                       margin: '24px 16px',
                       padding: 24,
                       minHeight: 280,
                     }}>
              <Switch>
                <Route exact path='/nav_1' render={() => <Nav1/>}/>
                <Route path='/nav_2' render={({location}) => <Nav2 location={location}/>}/>
                <Route path='/nav_3' component={Nav3}/>
                <Route path='/route_children' render={() => <RouteChildren/>}/>
                <Route path='/url_params' render={() => <URLParams/>}/>
                <Route path='/courses' render={
                  () => {
                    if (this.state.isAllowed) {
                      return <Courses/>
                    }
                    return <Redirect to={{pathname: 'nav_1', from: 'courses'}}/>
                  }
                }/>
              </Switch>
            </Content>
          </Layout>
        </Layout>
    );
  }
}
