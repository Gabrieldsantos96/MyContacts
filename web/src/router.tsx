import { createBrowserRouter } from 'react-router-dom'
import { Home } from '@pages/Home'
import { NewContact } from '@pages/NewContact'
import { EditContact } from '@pages/EditContact'
import { RootLayout } from './templates/RootLayout'
import { NotFoundPage } from './404'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/new',
        element: <NewContact />
      },
      {
        path: '/edit/:id',
        element: <EditContact />
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
])

export { router }
