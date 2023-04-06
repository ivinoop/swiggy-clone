import '@testing-library/jest-dom'
import { render, waitFor, fireEvent } from '@testing-library/react'
import Body from '../Body'
import { Provider } from 'react-redux'
import store from '../../utils/store'
import { StaticRouter } from 'react-router-dom/server'
import React from 'react'
import { RESTAURANT_DATA } from '../../mocks/data'

//Jest does not understand fetch so we are creating a mock fetch function
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA)
    },
  })
})

// ----- Test for Shimmer -----

test('Shimmer should load on homepage', () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  )

  const shimmerUI = body.getByTestId('shimmer-ui')
  expect(shimmerUI.children.length).toBe(10)
  console.log(shimmerUI)
})

// ----- Test for Search -----

// List restaurants on home page
test('Restaurants should load on home page', async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  )

  await waitFor(() => expect(body.getByTestId('search-btn')))
  const resList = body.getByTestId('res-list')
  expect(resList.children.length).toBe(15)
})

// Search for string(food) on home page
test('Search for string(food) on home page', async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  )

  await waitFor(() => expect(body.getByTestId('search-btn')))

  const input = body.getByTestId('search-input')

  fireEvent.change(input, {
    target: {
      value: 'food',
    },
  })

  const searchBtn = body.getByTestId('search-btn')

  fireEvent.click(searchBtn)
  const resList = body.getByTestId('res-list')
  expect(resList.children.length).toBe(0)
})
