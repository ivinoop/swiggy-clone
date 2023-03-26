import React, { useState, lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
// import About from './components/About'
import Error from './components/Error'
import Contact from './components/Contact'
import RestaurantMenu from './components/RestaurantMenu'
import Profile from './components/Profile'
import Shimmer from './components/Shimmer'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import UserContext from './utils/UserContext'
// import Instamart from './components/Instamart'
import { Provider } from 'react-redux'
import store from './utils/store'
import Cart from './components/Cart'

// Lazy loading the component 👇
const Instamart = lazy(() => import('./components/Instamart'))

const About = lazy(() => import('./components/About'))

const AppLayout = () => {
  const [user, setUser] = useState({
    name: 'Vinoo',
    email: 'ivinoop@gmail.com',
  })
  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<p>Loading About...</p>}>
            <About />
          </Suspense>
        ),
        children: [
          //nested route
          {
            path: 'profile', // no need of a forward slash "/"
            element: <Profile />,
          },
        ],
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu />,
      },
      {
        path: '/instamart',
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)
