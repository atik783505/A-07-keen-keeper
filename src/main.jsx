import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Mainlayout from './Layout/Mainlayout'
import Homepage from './pages/Homepage/Homepage'
import Timeline from './pages/TImeline/Timeline'
import FriendDetails from './pages/FriendDetails/FriendDetails'
import FriendProvider from './Context/FriendContext/FriendProvider'
import { ToastContainer } from 'react-toastify'
import Rechart from './pages/Rechart/Rechart'



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
      },
      {
        path:'/frienddetails/:id',
        element:<FriendDetails></FriendDetails>,
        loader:() => fetch('/data.json')
      },
      {
        path:'/stats',
        element:<Rechart></Rechart>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider>
        <RouterProvider router={router}>

        </RouterProvider>
        <ToastContainer></ToastContainer>
    </FriendProvider>
  </StrictMode>,
)
