import React from 'react'
import styled from 'styled-components'
import { Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { ButtonText, Row, Txt, Input, colors } from '../../theme/'

import { UserContext } from '../../api/userContext'


class LoginForm extends React.Component {
  state = {
    userName: '',
    password: ''
  }


  onLogin = async (args) => {
    console.log(args)
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
    return (
      <KeyboardAvoidingView behavior='padding' >
        <Input
          placeholder='Username'
          returnKeyType='next'
          keyboardType='email-address'
          autoCorrect={false}
          autoCapitalize={'none'} />
        <Input
          placeholder='Password'
          secureTextEntry
          returnKeyType='go' />

        <UserContext.Consumer>
          {(user) => {
            return (
              <ButtonsContainer>
                <TouchableOpacity onPress={() => user.setAuth('will', 1)}>
                  <ButtonText size={14}>Log In</ButtonText>
                </TouchableOpacity>
                <TouchableOpacity>
                  <ButtonText size={14}>Create Account</ButtonText>
                </TouchableOpacity>
              </ButtonsContainer>
            )
          }}
        </UserContext.Consumer>

      </KeyboardAvoidingView>
    )
  }
}

const ButtonsContainer = styled(Row)`
  padding-top: 5;
  justify-content: space-around;
`


export default LoginForm