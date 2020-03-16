import React, { Component } from 'react';
import { GlobalStyle } from './style'
import { IconStyle } from './assets/iconfont/iconfont'
import { renderRoutes } from 'react-router-config'  //读取路由配置转换成route标签
import routes from './routes/index'
import {HashRouter} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <HashRouter>
        <GlobalStyle />
        <IconStyle />
        {renderRoutes(routes)}
      </HashRouter>
    );
  }
}

export default App;