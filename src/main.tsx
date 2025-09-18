import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ViewersPage from "./pages/ViewersPage/ViewersPage.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import DashboardPage from "./pages/DashboardPage/DashboardPage.tsx";
import Test from "./test/test.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
  {
    path: "/test",
    element: <Test />
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
