import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { clearCart } from '../utils/cartSlice'
import { TrashIcon } from '@heroicons/react/24/solid'

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((store) => store.cart.items)
  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <>
      <div className='w-96 mt-8 flex justify-between items-center mx-auto'>
        <h1 className='text-2xl font-bold text-center'>
          Cart Items - {cartItems.length}
        </h1>
        <div className='bg-red-600 text-white px-2 py-1 rounded-md flex justify-between items-center'>
          <button onClick={() => handleClearCart()}>Clear Cart</button>
          <button className='ml-1'>
            <TrashIcon className='h-w w-4' />
          </button>
        </div>
      </div>
      <div className='flex flex-wrap pt-5'>
        {cartItems.map((item) => (
          <CartItem key={item.card.info.id} {...item.card.info} />
        ))}
      </div>
    </>
  )
}

export default Cart
