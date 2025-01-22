
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Admin from './pages/admin/Admin'
import Basket from './pages/basket/Basket'
import Catalog from './pages/Catalog'
import Collection from './pages/Collection'
import Contatact from './pages/Contatact'
import Detail from './pages/Detail'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Wishlist from './pages/wishlist/Wishlist'

function App() {
const router = createBrowserRouter([
  {path:"/",
element:<Layout/>,
children:[
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/catalog",
    element:<Catalog/>
  },
  {
    path:"/collection",
    element:<Collection/>
  },
  {
    path:"/shop",
    element:<Shop/>
  },
  {
    path:"/contact",
    element:<Contatact/>
  },
  {
    path:"/basket",
    element:<Basket/>
  },
  {
    path:"/wishlist",
    element:<Wishlist/>
  },
  {
    path:"/admin",
    element:<Admin/>
  },
  {
    path:"/detail",
    element:<Detail/>
  },
]
}
])
  return (
  <RouterProvider router={router}/>
  )
}

export default App
