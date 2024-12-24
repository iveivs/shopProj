import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'

const router = createBrowserRouter([
  {
    path: "/"
  }
])

createRoot(document.getElementById('root')).render(<div>HW</div>)
