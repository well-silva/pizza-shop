import './global.css'

import { ThemeProvider } from 'next-themes'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from './routes'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">
      <Toaster closeButton richColors />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
