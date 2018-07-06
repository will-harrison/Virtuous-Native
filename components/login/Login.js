import React from 'react';
import styled from 'styled-components'
import { Title, Column, Txt, Theme } from '../../theme/'
import LoginForm from './LoginForm'
import HomeContext from '../home/Home'

import { UserContext } from '../../api/userContext'

export default LoginContext = () => (
  <UserContext.Consumer>
    {(user) => (
      <Login {...user} />
    )}
  </UserContext.Consumer>
)

class Login extends React.Component {
  render() {
    return (
      !this.props.user.authorized ? (
        <Theme>
          <LoginContainer>
            <Title size={45}>Virtuous</Title>
            <HelpText size={14}>Please login to Virtuous. If this is your first time using Virtuous, please create an account.</HelpText>
            <LoginForm />
          </LoginContainer>
        </Theme>
      )
        : (
          <HomeContext />
        )
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
    margin-top: 5;
    margin-bottom: 15;
    width: 250;
  `
