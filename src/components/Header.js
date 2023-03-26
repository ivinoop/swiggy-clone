import { useState, useContext } from 'react'
import Logo from '../assets/img/logo.jpg'
import { Link } from 'react-router-dom'
import useOnline from '../utils/useOnline'
import UserContext from '../utils/UserContext'
import { UserIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useSelector } from 'react-redux'

export const Title = () => {
  return (
    <a href='/'>
      <img
        src={Logo}
        className='h-12 w-12 m-2 rounded-full border-solid border-2 border-amber-900'
        alt=''
      />
    </a>
  )
}

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const isOnline = useOnline()
  const { user } = useContext(UserContext)

  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems);

  return (
    <div className='sticky top-0 bg-white border border-b-[1] shadow-md flex p-2 justify-between items-center'>
      <Title />
      <div className='mx-6'>
        <ul className='flex justify-center items-center'>
          <li className='mx-2'>
            <Link to='/'>Home</Link>
          </li>
          <li className='mx-2'>
            <Link to='/instamart'>Instamart</Link>
          </li>
          <li className='mx-2'>
            <Link to='/about'>About</Link>
          </li>
          <li className='mx-2'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='mx-2'>
            <div className='flex justify-center items-center'>
              <Link to='/cart'>
                <ShoppingCartIcon className='h-4 w-4' />
              </Link>
              <Link to='/cart' className='pl-1'>
                Cart - {cartItems.length}
              </Link>
            </div>
          </li>
          {isLoggedIn ? (
            <button
              className='bg-blue-700 text-sm text-white py-1 px-3 rounded-xl ml-1'
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </button>
          ) : (
            <button
              className='bg-blue-700 text-sm text-white py-1 px-3 rounded-xl ml-1'
              onClick={() => setIsLoggedIn(true)}
            >
              Login
            </button>
          )}
        </ul>
        <div className='flex justify-end items-center mt-2'>
          <UserIcon className='h-4 w-4 mx-1 text-gray-500' />
          <p className='text-sm mr-1'>
            Hello, {user.name}! ({user.email})
          </p>
          <p className='bg-slate-300 px-2 py-1 rounded-2xl text-xs'>
            {isOnline ? `You're online 🟢` : `You're offline 🔴`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
