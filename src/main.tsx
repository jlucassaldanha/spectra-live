import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'

import ViewersPage from './pages/ViewersPage.tsx'
import ConnectMainPage from './pages/ConnectMainPage.tsx'
import ConnectPage from './pages/ConnectPage.tsx'
import ProfilePage from './pages/ProfilePage.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <ConnectMainPage /> // Substituir por uma página de apresentação
  },
  {
    path: "/home",
    element: <ConnectPage />
  },
  {
    path: "/viewers",
    element: <ViewersPage />
  },
  {
    path: "/profile",
    element: <ProfilePage />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
