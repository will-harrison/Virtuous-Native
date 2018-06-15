import React from 'react';
import styled from 'styled-components'
import { View, Text, Image } from 'react-native'
import { Title, Column, Txt } from '../../theme/'
import LoginForm from './LoginForm'
import { provisionDB, login } from '../../api/api'

class Login extends React.Component {
  componentDidMount() {
    provisionDB()
    login('will', 'tester')
  }

  render() {
    return (
      <LoginContainer>
        <Title size={45}>Virtuous</Title>
        <HelpText size={14}>Please login to Virtuous. If this is your first time using Virtuous, please create an account.</HelpText>
        <LoginForm onLogin={this.props.onLogin} />
      </LoginContainer>
    )
  }
}

const LoginContainer = styled(Column)`
  flex: .75;
  justify-content: center;
  align-items: center;
`

const HelpText = styled(Txt)`
  padding-top: 3;
  padding-bottom: 10;
  width: 250;
`

export default Login;