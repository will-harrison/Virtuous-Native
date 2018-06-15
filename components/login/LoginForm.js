import React from 'react'
import styled from 'styled-components'
import { Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { Row, Txt, Input, colors } from '../../theme/'
import PropTypes from 'prop-types'

const LoginForm = ({ onLogin }) => {
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
      <ButtonsContainer>
        <TouchableOpacity onPress={onLogin}>
          <ButtonText size={14}>Log In</ButtonText>
        </TouchableOpacity>
        <TouchableOpacity>
          <ButtonText size={14}>Create Account</ButtonText>
        </TouchableOpacity>
      </ButtonsContainer>
    </KeyboardAvoidingView>
  );
};

const ButtonsContainer = styled(Row)`
  padding-top: 5;
  justify-content: space-around;
`

const ButtonText = styled(Txt)`
`

export default LoginForm