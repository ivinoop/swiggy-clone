import { createContext } from 'react'

const UserContext = createContext({
  user: {
    name: 'John',
    email: 'johndoe@doejohn.com',
  },
})

UserContext.displayName = 'UserContext'

export default UserContext
