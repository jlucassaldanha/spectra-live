import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";

import ViewersPage from "./pages/ViewersPage/ViewersPage.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import DashboardPage from "./pages/DashboardPage/DashboardPage.tsx";

const router = createBrowserRouter([
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
