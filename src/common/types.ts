import { FC } from 'react'
import { match } from 'react-router-dom'

type RoutableComponent = (props: {
  routes?: RouteProps[]
  match: match<{ [x: string]: string | undefined }>
}) => JSX.Element

export interface RenderRoutesProps {
  routes?: Array<RouteProps>
}

export interface RouteProps {
  path: string
  key: string
  exact?: boolean
  component: RoutableComponent | FC | FC<RenderRoutesProps>
  routes?: Array<RouteProps>
}
