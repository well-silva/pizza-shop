import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from './routes'

export function App() {
  return (
    <>
      <Toaster closeButton richColors />
      <RouterProvider router={router} />
    </>
  )
}
