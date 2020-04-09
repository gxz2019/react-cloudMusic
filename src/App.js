import React, { Component } from 'react';
import { GlobalStyle } from './style'
import { IconStyle } from './assets/iconfont/iconfont'
import { renderRoutes } from 'react-router-config'  //读取路由配置转换成route标签
import routes from './routes/index'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter >
        <GlobalStyle />
        <IconStyle />
        {renderRoutes(routes)}
      </HashRouter>
      </Provider>
    );
  }
}

export default App;