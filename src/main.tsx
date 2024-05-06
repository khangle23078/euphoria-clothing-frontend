import Loading from '@components/common/Loading.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider } from 'antd'
import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { antdTheme } from './configs/antd.config.ts'
import { routes } from './routes/Route.tsx'
import './styles/style.css'

export const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ConfigProvider theme={antdTheme}>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={routes} />
      </Suspense>
    </ConfigProvider>
  </QueryClientProvider>,
)
