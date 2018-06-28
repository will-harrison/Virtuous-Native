import React, { Component } from 'react'
import { login } from './api'

export const UserContext = React.createContext();

class UserProvider extends Component {
  state = {
    testing: false,
    dropTables: false,
    authorized: false,
    userName: '',
    userId: ''
  }

  componentDidMount = () => {
    this.state.testing && this.testSetup('will', 1)

  }

  testSetup = async (userName, userId) => {
    await this.setState(state => {
      return {
        authorized: login(this.state.userName, 'password'),
        userName,
        userId
      }
    })
  }

  render() {
    return (
      <UserContext.Provider value={{
        state: this.state,
        setLoggedIn: (userName, userId) => {
          this.setState(state => {
            return {
              ...state,
              authorized: true,
              userName,
              userId
            }
          })
        }
      }}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export default UserProvider
