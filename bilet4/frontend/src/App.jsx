
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './componenets/layout/Layout'
import Basket from './pages/basket/Basket'
import Blog from './pages/Blog'
import Categori from './pages/Categori'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Latest from './pages/Latest'
import Pages from './pages/Pages'

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
      path:"/blog",
      element:<Blog/>
    },
    {
      path:"/categori",
      element:<Categori/>

    },
    {
      path:"/pages",
      element:<Pages/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/latest",
      element:<Latest
      />
    },{
      path:"/basket",
      element:<Basket/>
    }

  ]
}
])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
