// import React from 'react'
import { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Profile from './Profile'
import ProfileClass from './ProfileClass'
import UserContext from '../utils/UserContext'

// const About = () => {
//   return (
//     <div className='profile'>
//       <h1>About Us page</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illum
//         accusamus amet cum delectus sunt atque cumque, explicabo eaque suscipit.
//         Animi magni, quibusdam laborum est maxime tempore placeat minima nobis.
//       </p>
//       {/* <Outlet /> */}
//       <Profile name={'Vinoo'} />
//       <ProfileClass name={'Vinoo Class'} />
//     </div>
//   )
// }

// class About extends React.Component{
class About extends Component {
  constructor(props) {
    super(props)
    // console.log('Parent constructor')
  }
  componentDidMount() {
    // console.log('Parent componentDidMount')
    // API Calls here
  }

  componentDidUpdate() {
    // console.log('Parent componentDidUpdate');
  }

  componentWillUnmount() {
    // console.log('Parent componentWillUnmount');
  }

  render() {
    // console.log('Parent render')
    return (
      <div className='text-center'>
        <div className='mx-auto'>
          <h1 className='text-3xl font-bold py-5'>About Us</h1>
          <UserContext.Consumer>
            {({ user }) => (
              <span className='bg-slate-200 px-1 py-2 rounded-lg'>
                Hi, I'm {user.name}, reach me at {user.email}
              </span>
            )}
          </UserContext.Consumer>
          <p className='p-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            illum accusamus amet cum delectus sunt atque cumque, explicabo eaque
            suscipit. Animi magni, quibusdam laborum est maxime tempore placeat
            minima nobis.
          </p>
        </div>
        {/* <Outlet /> */}
        {/* <Profile name={'Vinoo'} /> */}
        {/* <ProfileClass name={'Vinoo Class'} /> */}
        {/* <ProfileClass name={'First Child'} />
        <ProfileClass name={'Second Child'} /> */}
        <ProfileClass />
        {/* <Profile /> */}
      </div>
    )
  }
}

export default About
