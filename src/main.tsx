import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";

import ViewersPage from "./pages/ViewersPage.tsx";
import ConnectMainPage from "./pages/ConnectMainPage/ConnectMainPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import Visualizer from "./test/Visualizer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Visualizer />, // Substituir por uma página de apresentação
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/viewers",
    element: <ViewersPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
