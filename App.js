import React from 'react'
import styled from 'styled-components'
import { Text, View } from 'react-native'
import { colors, Column, Theme, Txt } from './theme/'
import Login from './components/login/Login'
import Virtue from './components/virtues/Virtue'
import NewVirtue from './components/virtues/NewVirtue'
import { getVirtues } from './api/api'

export default class App extends React.Component {
  state = {
    authorized: false,
    userName: '',
    testing: true
  }

  async componentDidMount() {
    if (this.state.testing) {
      await this.setState(state => {
        return {
          authorized: true,
          userName: 'will'
        }
      })
    }
    const virtues = await getVirtues(this.state.userName)
    console.log('virtues', virtues)
  }

  onLogin = (args) => {
    this.setState(state => {
      return {
        ...state,
        authorized: true,
        userName: args.userName
      }
    })
  }

  render() {
    return (
      <Theme>
        {this.state.authorized
          ? <Virtue virtue={{ title: 'Temperance', description: 'Eat not to dullness; drink not to elevation.' }} />
          : <Login onLogin={this.onLogin} />
        }
      </Theme>
    )
  }
}

const Hello = styled(Txt)`
  margin-top: 150px;
  font-size: 36px;
  color: ${colors().white};
`