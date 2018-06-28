import React from 'react';
import styled from 'styled-components'
import { Title, Column, Txt, Theme } from '../../theme/'
import LoginForm from './LoginForm'
import { provisionDB, login } from '../../api/api'

import { UserContext } from '../../api/userContext'

export default LoginContext = () => (
  <UserContext.Consumer>
    {(context) => {
      return (
        <Login {...context} />
      )
    }}
  </UserContext.Consumer>
)

class Login extends React.Component {

  async componentDidMount() {
    await provisionDB(this.props.dropTables)
  }

  onLogin = async (args) => {
    await this.setState(state => {
      return {
        ...state,
        authorized: true,
        userName: args.userName
      }
    })
    this.props.navigation.navigate('Home')
  }


  render() {
    console.log(this.props)
    return (
      <UserContext.Consumer>
        {(context) => (
          !context.state.authorized && (
            <Theme>
              <LoginContainer>
                <Title size={45}>Virtuous</Title>
                <HelpText size={14}>Please login to Virtuous. If this is your first time using Virtuous, please create an account.</HelpText>
                <LoginForm onLogin={this.onLogin} />
              </LoginContainer>
            </Theme>
          )
        )}
      </UserContext.Consumer>
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
