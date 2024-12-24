import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "team"
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(<div>HW</div>)
