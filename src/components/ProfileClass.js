import React from 'react'

class ProfileClass extends React.Component {
  constructor(props) {
    super(props)
    // Create all state variables here👇
    // this.state = {
    //   count: 0,
    //   count2: 0,
    // }
    // console.log('Child constructor ' + this.props.name)
    console.log('Child constructor')
    this.state = {
      userInfo: {
        name: 'John Doe',
        company: 'Web',
      },
    }
  }

  async componentDidMount() {
    // API calls
    // console.log('Child componentDidMount ' + this.props.name)
    const data = await fetch('https://api.github.com/users/ivinoop')
    const jsonData = await data.json()
    console.log(jsonData)
    this.setState({
      userInfo: jsonData,
    })
    // this.timer = setInterval(() => {
    //   console.log('Hello World Class');
    // }, 1000)
    console.log('Child componentDidMount')
  }

  componentDidUpdate() {
    console.log('Child componentDidUpdate')
  }

  componentWillUnmount() {
    // clearInterval(this.timer)
    console.log('Child componentWillUnmount')
  }

  render() {
    const { count } = this.state
    // console.log('Child render ' + this.props.name)
    console.log('Child render')
    return (
      <div className='text-center'>
        <h2 className='profile-heading'>Profile Class Component</h2>
        {/* <p>
          This component comes directly as a Component Composition inside the
          About component
        </p> */}
        {/* <h3>Name: {this.props.name}</h3> */}
        {/* <p>Count: {this.state.count}</p> */}
        {/* <p>Count: {count}</p>
        <button
          onClick={() => {
            // We do not mutate state directly; we never do "this.state = something"
            this.setState({
              count: count + 1,
            })
          }}
        >
          Class Count
        </button> */}
        <img
          src={this.state.userInfo.avatar_url}
          className='mx-auto rounded-full w-44'
          alt=''
        />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Company: {this.state.userInfo.company}</h2>
      </div>
    )
  }
}

export default ProfileClass

/**
 *
 *
 * Render Phase -
 * Parent Constructor
 * Parent Render
 * Child Constructor
 * Child Render
 * Parent componentDidMount is called
 *
 * Commit Phase -
 * DOM is updated
 * API Call - jsonData is logged in console
 * Child componentDidMount is called
 * Child Render (because of reconciliation, render is triggered again)
 *
 *
 */
