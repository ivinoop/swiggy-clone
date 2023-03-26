import { IMG_CDN_URL } from '../config'
import { useContext } from 'react'
import UserContext from '../utils/UserContext'

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwoString,
  deliveryTime,
}) => {
  const { user } = useContext(UserContext)

  return (
    <div className='w-64 p-2 border-solid border border-slate-200 m-2 rounded-xl shadow-sm hover:shadow-lg'>
      <img
        className='object-cover w-full rounded-lg'
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h2 className='font-bold text-lg pt-2'>{name}</h2>
      <span className='text-xs text-gray-500'>{cuisines.join(', ')}</span>
      <div className='flex justify-between items-center pt-5 pb-2'>
        <p className='text-xs bg-green-600 text-white py-1 px-2'>
          ★ {avgRating}
        </p>
        <p className='text-xs text-gray-500'>{deliveryTime} MINS</p>
        <p className='text-xs text-gray-500'>{costForTwoString}</p>
      </div>
      <div className='flex justify-between items-center'>
        <span className='text-xs text-gray-400'>Hi, {user.name} 👋</span>
      </div>
    </div>
  )
}

export default RestaurantCard
