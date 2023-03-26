import { useEffect, useState } from 'react'

const Profile = (props) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    // API Call
    // console.log('useEffect');
    const timer = setInterval(() => {
      console.log('Hello World');
    }, 1000)
    // Clean up -- Unmount👇
    return () => {
      clearInterval(timer)
    }
  }, [])

  // console.log('render');

  return (
    <div>
      <h2>Profile Functional Component</h2>
      <p>
        This component comes from the Outlet component from React Router DOM as
        a nested routing component
      </p>
      {/* <h3>Name: {props.name}</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Functional Count</button> */}
    </div>
  )
}

export default Profile
