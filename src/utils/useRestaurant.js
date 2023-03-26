import { useState, useEffect } from 'react'
import { FETCH_MENU_URL } from '../config'

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null)

  // Get data from API
  useEffect(() => {
    getRestaurantInfo()
  }, [])

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + id)
    const result = await data.json()
    // console.log('Restaurant Details: ', result.data.cards[0].card.card.info)
    setRestaurant(result?.data?.cards[0]?.card?.card?.info)
    // setRestaurant(result.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards[0].card.info)
  }

  // return restaurant menu/data
  return restaurant
}

export default useRestaurant
