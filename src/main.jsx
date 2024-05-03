import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './pages/dashboard.jsx'
import Dépenses from './pages/dépenses.jsx'
import Statistiques from './pages/statistiques.jsx'
import Notifications from './pages/notifications.jsx'
import Paramètres from './pages/paramètres.jsx'
import Login from './pages/login.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        path : '/',
        element : <Dashboard/>
      },

      {
        path : '/depenses',
        element : <Dépenses/>
      },

      {
        path : '/statistiques',
        element : <Statistiques/>
      },

      {
        path : '/notifications',
        element : <Notifications/>
      },

      {
        path : '/paramètres',
        element : <Paramètres/>
      },

      {
        path : '/se_deconnecter',
        element : <Login/>
      },
    ]
  },

  {
    path : '/login',
    element : <Login/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
