
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import NotFound from './pages/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "products",
        element: <Products/>
      },
      {
        path: "singleproduct",
        element: <SingleProduct/>
      }, 
      {
        path: "*",
        element: <NotFound/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
  
)
