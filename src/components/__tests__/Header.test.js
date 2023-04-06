import { render } from '@testing-library/react'
import Header from '../Header'
import { Provider } from 'react-redux'
import store from '../../utils/store'
import { StaticRouter } from 'react-router-dom/server'

// ----- Test for logo -----
test('Logo should load on rendering header', () => {
  // Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  )
  // console.log(header)

  // Check if logo is loaded
  const logo = header.getAllByTestId('logo')
  expect(logo[0].src).toBe('http://localhost/dummyLogo.png')
})

// ----- Test for online status -----
test('Check if browser status is online (green) on rendering header', () => {
  // Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  )

  // Check online status
  const onlineStatus = header.getByTestId('online-status')
  // console.log(onlineStatus);
  expect(onlineStatus.innerHTML).toBe(`You're online 🟢`)
}) 

// ----- Test for cart items length to be zero -----
test('Check if browser status is online (green) on rendering header', () => {
  // Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  )

  // Check cart items length
  const cart = header.getByTestId('cart')
  // console.log(cart);
  expect(cart.innerHTML).toBe('Cart - 0')
}) 