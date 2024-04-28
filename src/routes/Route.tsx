import AdminLayout from '@layouts/AdminLayout'
import AuthLayout from '@layouts/AuthLayout'
import MainLayout from '@layouts/MainLayout'
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const HomePage = lazy(() => import('@pages/client/HomePage'))
const ProductDetailPage = lazy(() => import('@pages/client/ProductDetailPage'))
const LoginPage = lazy(() => import('@pages/auth/LoginPage'))
const RegisterPage = lazy(() => import('@pages/auth/RegisterPage'))
const CartPage = lazy(() => import('@pages/client/CartPage'))
const DashboardPage = lazy(() => import('@pages/admin/dashboard/Dashboard'))
const CategoryListPage = lazy(
  () => import('@pages/admin/category/CategoryList'),
)

export const routes = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '/product/:slug',
        element: <ProductDetailPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
    ],
  },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: 'admin',
    element: <AdminLayout />,
    children: [
      {
        path: '',
        element: <DashboardPage />,
      },
      {
        path: 'category',
        element: <CategoryListPage />,
      },
    ],
  },
])
