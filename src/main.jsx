import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Mainlayout from './Layout/Mainlayout'
import Homepage from './pages/Homepage/Homepage'
import Timeline from './pages/TImeline/Timeline'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Mainlayout></Mainlayout>,
    children:[
      {
        index:true,
        element:<Homepage></Homepage>
      },
      {
        path:'/timeline',
        element:<Timeline></Timeline>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router}>

        </RouterProvider>
  </StrictMode>,
)
