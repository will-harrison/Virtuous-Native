import React from 'react'
import { createStackNavigator } from "react-navigation"
import { colors } from './theme'
import LoginContext from './components/login/Login'
import Home from './components/home/Home'
import NewVirtueContext from './components/virtues/NewVirtue'
import Virtue from './components/virtues/Virtue'

import UserProvider from './api/userContext';
import VirtueProvider from './api/virtueContext';


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
  NewVirtueContext: {
    screen: NewVirtueContext,
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
    <VirtueProvider>
      <AppStackNavigator />
    </VirtueProvider>
  </UserProvider>
)