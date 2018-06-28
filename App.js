import React from 'react'
import { createStackNavigator } from "react-navigation"
import { colors } from './theme'
import LoginContext from './components/login/Login'
import Home from './components/home/Home'
import NewVirtue from './components/virtues/NewVirtue'
import Virtue from './components/virtues/Virtue'

import UserProvider from './api/userContext';


const AppStackNavigator = createStackNavigator({
  Login: {
    screen: LoginContext,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  NewVirtue: {
    screen: NewVirtue,
    navigationOptions: {
      title: 'tester',
      headerStyle: {
        backgroundColor: `${colors(.75).blue}`
      }
    }
  },
  Virtue: {
    screen: Virtue,
    navigationOptions: {
      headerStyle: {
        backgroundColor: `${colors(.75).blue}`,
      }
    }
  }
})

export default App = () => (
  <UserProvider>
    <AppStackNavigator />
  </UserProvider>
)