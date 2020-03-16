import React from 'react'
import { renderRoutes} from 'react-router-config'
import {Top,Tab,TabItem} from './style'
import {NavLink} from 'react-router-dom'
function Home(props) {
  const { route } = props
  return (
    <div>
    <Top>
      <span className='iconfont'>&#xe65c;</span>
      <span className='title'>云音乐</span>
      <span className='iconfont'>&#xe62b;</span>
    </Top>
    <Tab>
      <NavLink to='/recommend' activeClassName='selected'>
        <TabItem><span>推荐</span></TabItem>
      </NavLink>
      <NavLink to='/singers' activeClassName='selected'>
        <TabItem><span>歌手</span></TabItem>
      </NavLink>
      <NavLink to='/rank' activeClassName='selected'>
        <TabItem><span>排行耪</span></TabItem>
      </NavLink>
    </Tab>
    {renderRoutes(route.routes)}
  </div>
  )
  
}
export default Home