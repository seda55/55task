
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Pages from './pages/Pages'
import Basket from './pages/basket/Basket'
import Wishlist from './pages/wishlist/Wishlist'
import Latest from './pages/Latest'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Admin from './pages/admin/Admin'

function App() {
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/shop",
        element:<Shop/>
      },
      {
        path:"/pages",
        element:<Pages/>
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
        path:"/latest",
        element:<Latest/>
      },
      {
        path:"/blog",
        element:<Blog/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/admin",
        element:<Admin/>
      },
    ]
  }
])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
