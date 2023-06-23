import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PageLayout from './Components/Layout/PageLayout.jsx'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Pages/Login.jsx'
import SignUp from './Components/Pages/SignUp.jsx'
import ServiceDetails from './Components/Services/ServiceDetails.jsx'
import ServiceBooking from './Components/Services/ServiceBooking.jsx'
import ServiceCart from './Components/Services/ServiceCart.jsx'
import Error from './Components/Pages/Error'
import AuthProvider from './Components/Providers/AuthProvider'
import PrivateRoute from './Components/Providers/PrivateRoute'
import Services from './Components/Services/Services.jsx'

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
        path:'serviceDetails/:id',
      element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
      loader: ({params}) => fetch(`https://car-server-alpha-one.vercel.app/services/${params.id}`)
      },
      {
        path:'services',
        element:<PrivateRoute><Services></Services></PrivateRoute>,
      },
     
      {
        path:'serviceBooking/:id',
        element:<PrivateRoute><ServiceBooking></ServiceBooking></PrivateRoute>,
        loader: ({params})=>fetch(`https://car-server-alpha-one.vercel.app/services/${params.id}`)
      },
      {
        path:'serviceCart',
        element:<PrivateRoute><ServiceCart></ServiceCart></PrivateRoute>
     
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
