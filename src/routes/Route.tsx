import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePage = lazy(() => import('@pages/client/HomePage'))

export const routes = createBrowserRouter([
  {
    path: '',
    element: <HomePage />
  }
])