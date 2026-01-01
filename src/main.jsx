import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routers.jsx'
import { RouterProvider } from 'react-router'
import Root from './pages/Root.jsx'
import AuthProvider from './firebaseContext/AuthProvider.jsx'




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <Root />
      </RouterProvider>
    </AuthProvider>
  </StrictMode>
)
