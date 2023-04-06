import '@testing-library/jest-dom'
import { render, waitFor, fireEvent } from '@testing-library/react'
import RestaurantMenu from '../RestaurantMenu'
import Header from '../Header'
import { Provider } from 'react-redux'
import store from '../../utils/store'
import { StaticRouter } from 'react-router-dom/server'
import React from 'react'
import { MENU_DATA } from '../../mocks/menu'

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA)
    },
  })
})

test('Add items to cart', async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  )

  await waitFor(() => expect(body.getByTestId('menu')))

  const addBtn = body.getAllByTestId('add-btn')

  fireEvent.click(addBtn[0])

  const cart = body.getByTestId('cart')
  
  expect(cart.innerHTML).toBe('Cart - 1')
})
