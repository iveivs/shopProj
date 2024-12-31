import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import "./assets/styles/index.scss"
import { ThemeProvider } from './providers/ThemeProvider'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <div>Home</div>
      },
      {
        path: "/pizzas",
        element: <div>Pizzas</div>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <ThemeProvider initialTheme={th}>
      <RouterProvider router={router} />
  </ThemeProvider>
)
