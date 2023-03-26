import { useState, useEffect } from 'react'
import { FETCH_MENU_URL } from '../config'

const useMenu = (id) => {
  const [menu, setMenu] = useState({})

  useEffect(() => {
    getRestaurantMenu()
  }, [])

  async function getRestaurantMenu() {
    const data = await fetch(FETCH_MENU_URL + id)
    const result = await data.json()
    // console.log(
    //   'Menu Details :',
    //   result.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
    //     .card.itemCards
    // )
    setMenu(
      result?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    )
  }
  return menu
}

export default useMenu
