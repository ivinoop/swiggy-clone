import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../config'
import Shimmer from './Shimmer'
import useRestaurant from '../utils/useRestaurant'
import useMenu from '../utils/useMenu'
import { addItem } from '../utils/cartSlice'
import { useDispatch } from 'react-redux'

const RestaurantMenu = () => {
  const { id } = useParams()

  const restaurant = useRestaurant(id)
  const menu = useMenu(id)
  console.log('Menu Details: ', menu)

  const dispatch = useDispatch()

  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className='py-2 px-4 mx-24 border border-solid border-slate-200 shadow-md rounded-lg'>
        <h1 className='text-2xl font-bold'>{restaurant.name}</h1>
        <div className='flex justify-between items-center'>
          <div>
            <h2>Restaurant Id: {restaurant.id}</h2>
            <h3>Area: {restaurant.areaName}</h3>
            <p>City: {restaurant.city}</p>
          </div>
          <div>
            <p>Rating: {restaurant.avgRating}</p>
            <p>Cost: {restaurant.costForTwoMessage}</p>
          </div>
          <img
            className='w-60 object-cover rounded-lg'
            src={IMG_CDN_URL + restaurant.cloudinaryImageId}
          />
        </div>
      </div>
      <h1 className='text-3xl font-bold py-4 mt-5 text-center text-blue-700'>
        Items Available
      </h1>
      <div className='mx-52 p-2 my-4'>
        <ul>
          {Object.values(menu).map((item) => (
            <li
              className='flex justify-between items-center mb-5 border border-slate-200 shadow-md hover:shadow-xl px-3 py-2 rounded-lg'
              key={item.card.info.id}
            >
              <div>
                <h3 className='text-lg font-bold'>{item.card.info.name}</h3>
                <p className='text-xs text-gray-500 py-4'>
                  {item.card.info.description}
                </p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <img
                  className='w-44 mx-5 rounded-lg mb-1'
                  src={IMG_CDN_URL + item.card.info.imageId}
                />
                <button
                  className='py-1 px-2 w-44 bg-blue-500 rounded-md text-white'
                  onClick={() => handleAddItem(item)}
                >
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default RestaurantMenu
