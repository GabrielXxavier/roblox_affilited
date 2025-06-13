import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ChooseUser from './pages/ChooseUser.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/Affiliate/:affiliateId" ,
    element: < ChooseUser/>
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
