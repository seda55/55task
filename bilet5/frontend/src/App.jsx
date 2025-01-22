import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Admin from './pages/admin/Admin'
import Basket from './pages/basket/Basket'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Pages from './pages/Pages'
import Shop from './pages/Shop'
import Wishlist from './pages/wishlist/Wishlist'

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
        path:"/blog",
        element:<Blog/>
      }, 
      {
        path:"/pages",
        element:<Pages/>
      },
       {
        path:"basket",
        element:<Basket/>
      },
       {
        path:"/wishlist",
        element:<Wishlist/>
      },
       {
        path:"/shop",
        element:<Shop/>
      },
       {
        path:"/contact",
        element:<Contact/>
      }, 
      {
        path:"/admin",
        element:<Admin/>
      }
      
    ]
  }
])
  return (
    
  <RouterProvider router={router}/>
      
    
  )
}

export default App
