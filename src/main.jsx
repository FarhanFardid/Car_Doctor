import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PageLayout from './Components/Layout/PageLayout.jsx'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Pages/Login.jsx'
import SignUp from './Components/Pages/SignUp.jsx'
import ServiceDetails from './Components/Services/ServiceDetails.jsx'
import AddServices from './Components/Services/AddServices.jsx'
import UpdateServices from './Components/Services/UpdateServices.jsx'
import ServiceBooking from './Components/Services/ServiceBooking.jsx'
import ServiceCart from './Components/Services/ServiceCart.jsx'
import Error from './Components/Pages/Error'
import AuthProvider from './Components/Providers/AuthProvider'

const router = createBrowserRouter([
  {
    path:'/',
    element:<PageLayout></PageLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,

      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'signUp',
        element:<SignUp></SignUp>
      },
      {
        path:'serviceDetails',
      element:<ServiceDetails></ServiceDetails>
      },
      {
        path:'serviceAdd',
        element:<AddServices></AddServices>,
      },
      {
        path:'serviceUpdate',
        element:<UpdateServices></UpdateServices>
      },
      {
        path:'serviceBooking',
        element:<ServiceBooking></ServiceBooking>
      },
      {
        path:'serviceCart',
        element:<ServiceCart></ServiceCart>
      },{
        path:'*',
        element:<Error></Error>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
