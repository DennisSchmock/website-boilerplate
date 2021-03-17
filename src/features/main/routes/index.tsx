import { RouteProps } from '@/common/types'
import MainScreen from '../Screens/MainScreen'
import TestPage from '../components/TestScreen'

const MainRoutes: RouteProps[] = [
  {
    path: '/main',
    key: 'MAIN',
    exact: true,
    component: MainScreen,
  },
  {
    path: '/main/page',
    key: 'MAIN_PAGE',
    exact: true,
    component: TestPage,
  },
  {
    path: '/main/page/:id',
    key: 'MAIN_PAGE',
    exact: true,
    component: TestPage,
  },
]

export default MainRoutes
