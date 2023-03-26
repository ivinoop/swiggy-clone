import { IMG_CDN_URL } from '../config'

const CartItem = ({ name, price, imageId }) => {
  return (
    <div className='w-44 border border-slate-200 rounded-md p-2 m-1'>
      <img className='w-32 mx-5 rounded-lg m-1' src={IMG_CDN_URL + imageId} />
      <h3 className='text-lg font-bold'>{name}</h3>
      <p className='text-sm text-gray-500 py-4'>₹ {price / 100}</p>
    </div>
  )
}

export default CartItem
