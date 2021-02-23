import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Nav from './component/Nav'
import { routes } from './route/router'

function App() {
  return <>
    {/* navigator part */}
    <Nav />
    {/* the page need to render part */}
    <Switch>
      {routes.map(item =>
        <Route
          key={item.path}
          path={item.path}
          exact={item.exact}
          render={item.render}
        />
      )}
    </Switch>
  </>
}

export default App;
