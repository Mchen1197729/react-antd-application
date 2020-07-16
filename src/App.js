import React, {useState} from "react"
import {Link} from 'react-router-dom'
import {Layout, Menu} from 'antd'
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  HomeOutlined
} from '@ant-design/icons'

import MainContent from './views/MainContent/index'
import MainComponent from './routes/index'

import './App.css'

const {Header, Sider, Content, Footer} = Layout
const {SubMenu} = Menu

export default function App() {
  // const rootSubmenuKeys = ['sub1', 'sub2', 'sub4']

  const [collapse, setCollapse] = useState(false)
  // const [openKeys, setOpenKeys] = useState(['sub1'])
  //当前被选中的菜单的key数组
  const [selectedKeys, setSelectedKeys] = useState(['0'])

  //只允许当前的子菜单所在的菜单展开
  // const handleOpenChange = openKeysArr => {
  //   console.log('openKeysArr:', openKeysArr)
  //   const latestOpenKey = openKeysArr.find(key => openKeys.indexOf(key) === -1)
  //   if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
  //     setOpenKeys(openKeysArr)
  //   } else {
  //     setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
  //   }
  // }

  //处理点击子菜单事件 @param:{item,key,keyPath,domEvent}
  const handleClickMenuItem = ({key}) => {
    setSelectedKeys([key])
  }

  //切换Sider的收起状态
  const handleToggleCollapse = () => {
    setCollapse(!collapse)
  }

  return (
      <Layout className="layout">
        <div className="logo"/>
        <Header className='header'>
          <h1 style={{color: '#fff'}}>Header区域</h1>
        </Header>
        <Layout className='sub-layout'>
          <Sider
              collapsible
              breakpoint='md'
              collapsed={collapse}
              onCollapse={handleToggleCollapse}
              className='sider'>
            <Menu
                theme='dark'
                defaultSelectedKeys={['1']}
                selectedKeys={selectedKeys}
                onClick={handleClickMenuItem}
                mode="inline">
              <Menu.Item key='0' icon={<HomeOutlined/>}>
                <Link to='/'>主页</Link>
              </Menu.Item>
              <SubMenu key="sub1" icon={<MailOutlined/>} title="商品管理">
                <Menu.Item key="1">
                  <Link to='/goods/add'>新增商品</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to='/goods/delete'>删除商品</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to='/goods/update'>编辑商品</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to='/goods/list'>查看商品</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<AppstoreOutlined/>} title="菜单二">
                <Menu.Item key="5">菜单二 1</Menu.Item>
                <Menu.Item key="6">菜单二 2</Menu.Item>
                <SubMenu key="sub3" title="子菜单">
                  <Menu.Item key="7">子菜单 1</Menu.Item>
                  <Menu.Item key="8">子菜单 2</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" icon={<SettingOutlined/>} title="菜单三">
                <Menu.Item key="9">菜单三 1</Menu.Item>
                <Menu.Item key="10">菜单三 2</Menu.Item>
                <Menu.Item key="11">菜单三 3</Menu.Item>
                <Menu.Item key="12">菜单三 4</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content className='content'>
            <MainComponent/>
          </Content>
        </Layout>
      </Layout>
  )
}
