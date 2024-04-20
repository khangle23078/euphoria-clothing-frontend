import AuthLayout from "@components/layouts/AuthLayout";
import MainLayout from "@components/layouts/MainLayout";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePage = lazy(() => import('@pages/client/HomePage'))
const ProductDetailPage = lazy(() => import('@pages/client/ProductDetailPage'))
const LoginPage = lazy(() => import('@pages/auth/LoginPage'))
const RegisterPage = lazy(() => import('@pages/auth/RegisterPage'))

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
  },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      }
    ]
  }
])