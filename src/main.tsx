import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/Route.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './styles/style.css'
import { ConfigProvider } from 'antd'
import { antdTheme } from './configs/antd.config.ts'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ConfigProvider theme={antdTheme} >
      <RouterProvider router={routes} />
    </ConfigProvider>
  </QueryClientProvider>,
)
