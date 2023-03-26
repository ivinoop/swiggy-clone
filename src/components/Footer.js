import { useContext } from 'react'
import UserContext from '../utils/UserContext'

const Footer = () => {
  const { user } = useContext(UserContext)

  return (
    <footer className='text-center py-5'>
      <span>&copy; 2023 Food Villa</span>
      <p className='text-md text-gray-500'>
        Developed with ⚛️ by
        <span className='text-md text-black font-bold'>  {user.name}</span>
      </p>
    </footer>
  )
}

export default Footer
