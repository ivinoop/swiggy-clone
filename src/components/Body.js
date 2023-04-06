import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'
import { filterRestaurants } from '../utils/helper'
// import useOnline from '../utils/useOnline'
import UserContext from '../utils/UserContext'

const Body = () => {
  const [searchInput, setSearchInput] = useState('')
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    // API call
    getRestaurants()
  }, [])

  async function getRestaurants() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING'
      // 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&page_type=DESKTOP_WEB_LISTING'
    )
    const jsonData = await data.json()
    // console.log('Restaurant List: ', jsonData.data.cards[2].data.data.cards)

    setAllRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards)
    setFilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards)
  }

  // const isOnline = useOnline()

  // if (!isOnline) {
  //   return (
  //     <h1 className='tac offline-warning'>
  //       🔴 Offline, please check your internet connection ⚡️
  //     </h1>
  //   )
  // }

  if (!allRestaurants) return null

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className='flex justify-between items-center mx-8 my-2'>
        <div className='p-4 my-2 text-center'>
          <input
            data-testid='search-input'
            type='text'
            className='px-2 py-2 w-80 bg-white border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400'
            placeholder='Search your favorites'
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value)
            }}
          />
          <button
            data-testid='search-btn'
            className='py-2 px-3 m-2 bg-green-700 text-white text-sm rounded-xl'
            onClick={() => {
              const data = filterRestaurants(searchInput, allRestaurants)
              setFilteredRestaurants(data)
            }}
          >
            Search
          </button>
        </div>
        <div className='text-center'>
          <h3 className='font-bold text-lg'>⚡️ FUN ALERT ⚡️</h3>
          <p className='text-sm font-semibold py-2'>
            Type in the below input fields to instantly change the displayed
            name and email
          </p>
          <input
            type='text'
            className='px-1 py-1 w-60 m-1 bg-white border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400'
            value={user.name}
            onChange={(e) =>
              setUser({
                ...user,
                name: e.target.value,
              })
            }
          />
          <input
            type='email'
            className='px-1 py-1 w-60 m-1 bg-white border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400'
            value={user.email}
            onChange={(e) =>
              setUser({
                ...user,
                email: e.target.value,
              })
            }
          />
          {/* <p>⚡️ ⚡️</p> */}
        </div>
      </div>
      <div
        data-testid='res-list'
        className='flex flex-wrap justify-center items-start mx-1'
      >
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.data.id}
              to={'/restaurant/' + restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Body
