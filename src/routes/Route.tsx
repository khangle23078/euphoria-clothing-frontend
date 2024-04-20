import MainLayout from "@components/layouts/MainLayout";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePage = lazy(() => import('@pages/client/HomePage'))
const ProductDetailPage = lazy(() => import('@pages/client/ProductDetailPage'))

export const routes = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: '/product/:slug',
        element: <ProductDetailPage />
      }
    ]
  }
])