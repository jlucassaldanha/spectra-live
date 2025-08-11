import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'

import App from './App.tsx'
import ViewersPage from './pages/ViewersPage.tsx'
import ConnectPage from './pages/connectPage.tsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
  {
    path: "/login",
    element: <ConnectPage />
  },
  {
    path: "/viewers",
    element: <ViewersPage />
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
