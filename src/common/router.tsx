/* eslint-disable react/display-name */
// inspiration https://www.ryanjyost.com/react-routing/
import React, { FC } from 'react'
// import home from '@/features/home/'
import { Route, Switch } from 'react-router-dom'

import { RouteProps, RenderRoutesProps } from './types'

export const RouteWithSubroutes: FC<RouteProps> = (route) => {
  console.log(route)
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => (
        // disable no-props spreading since it'll render multiple types of components.
        // todo find better approach
        // eslint-disable-next-line react/jsx-props-no-spreading
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

export const RenderRoutes: FC<RenderRoutesProps> = ({
  routes = [],
}): JSX.Element => (
  <Switch>
    {routes.map((route) => (
      <RouteWithSubroutes
        key={route.key}
        path={route.path}
        routes={route.routes}
        exact={route.exact}
        component={route.component}
      />
    ))}
  </Switch>
)
