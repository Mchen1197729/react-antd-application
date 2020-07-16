import React from "react"
import {Switch, Route} from 'react-router-dom'

import Home from '../pages/Home/Home'
import GoodsAdd from '../pages/Goods/GoodsAdd'
import GoodsDelete from '../pages/Goods/GoodsDelete'
import GoodsUpdate from '../pages/Goods/GoodsUpdate'
import GoodsList from '../pages/Goods/GoodsList'

export default function () {
  return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/goods/add' component={GoodsAdd}/>
        <Route exact path='/goods/delete' component={GoodsDelete}/>
        <Route exact path='/goods/update' component={GoodsUpdate}/>
        <Route exact path='/goods/list' component={GoodsList}/>
      </Switch>
  )
}
