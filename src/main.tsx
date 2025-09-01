import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'

import App from './App.tsx'
import ViewersPage from './pages/ViewersPage.tsx'
import ConnectMainPage from './pages/ConnectMainPage.tsx'
import HomePage from './pages/HomePage.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <ConnectMainPage /> // Substituir por uma página de apresentação
  },
  {
    path: "/home",
    element: <HomePage />
  },
  {
    path: "/viewers",
    element: <ViewersPage />
  },
  {
    path: "/icon",
    element: <App />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
