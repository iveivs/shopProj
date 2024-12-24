import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "team",
        element: <div>Home</div>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  RouterProvider
)
