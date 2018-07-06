import React, { Component } from 'react'
import { login, provisionDB } from './api'

export const UserContext = React.createContext();

class UserProvider extends Component {
  state = {
    testing: true,
    dropTables: false,
    authorized: false,
    userName: '',
    userId: ''
  }

  componentDidMount = async () => {
    await provisionDB(this.state.dropTables)
    this.state.testing && this.setAuth('will', 1)
  }

  setAuth = async (userName, userId) => {
    await this.setState(state => {
      return {
        ...state,
        userName,
        userId
      }
    })
    await this.setState(state => {
      return {
        ...state,
        authorized: login(this.state.userName, 'password')
      }
    })
  }

  render() {
    return (
      <UserContext.Provider value={{
        user: {
          ...this.state,
          setAuth: (userName, userId) => this.setAuth(userName, userId)
        }
      }}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export default UserProvider
